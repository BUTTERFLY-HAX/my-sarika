// script.js
// Sarika-style — grapheme rendering + codepoint-level progress (handles IME & hardware keys)

const DEFAULT_MINUTES = 15;
const PARAGRAPH_TEXT = `റിസാൻ ഒരു സംമ്പവം ആണ് ശ്യൂ`;

// DOM
const textScroller = document.getElementById("textScroller");
const restSpan = document.getElementById("rest");
const typedEchoEl = document.getElementById("typedEcho");
const capture = document.getElementById("capture");

const typedEl = document.getElementById("typedCount");
const totalEl = document.getElementById("totalCount");
const cpmEl = document.getElementById("cpm");
const mistakesEl = document.getElementById("mistakes");
const percentEl = document.getElementById("percent");
const timerEl = document.getElementById("timer");
const saveBtn = document.getElementById("saveBtn");
const restartBtn = document.getElementById("restartBtn");
const scroller = document.getElementById("textScroller");

// State
let graphemes = []; // array of grapheme strings (for rendering)
let graphemeCPs = []; // parallel: array of arrays of codepoints for each grapheme
let gIndex = 0; // current grapheme index
let cpIndex = 0; // codepoint index inside current grapheme
let started = false;
let startTimeMs = 0;
let timerId = null;
let cpmUpdateId = null; // New: ID for the live CPM update interval
let secondsLeft = DEFAULT_MINUTES * 60;
let mistakes = 0;
let typedEcho = "";

// helpers
const seg = new Intl.Segmenter("ml", {
  granularity: "grapheme"
});

function isAsciiLetter(ch) {
  return /^[A-Za-z]$/.test(ch);
}

function eqRelaxed(a, b) {
  if (a === undefined || b === undefined) return false;
  const A = a.normalize("NFC"),
    B = b.normalize("NFC");
  if (A.length === 1 && B.length === 1 && isAsciiLetter(A) && isAsciiLetter(B)) {
    return A.toLowerCase() === B.toLowerCase();
  }
  return A === B;
}

// Init: split graphemes and build spans (preserve shaping)
function init() {
  restSpan.innerHTML = "";
  const normalized = PARAGRAPH_TEXT.normalize("NFC");
  graphemes = [...seg.segment(normalized)].map(s => s.segment);

  // build codepoint arrays for each grapheme
  graphemeCPs = graphemes.map(g => Array.from(g.normalize("NFC")));

  // render spans
  for (let g of graphemes) {
    const span = document.createElement("span");
    span.className = "grapheme";
    // for overlay display, use NBSP for space so it shows up in ::before
    span.setAttribute("data-char", g === " " ? "\u00A0" : g);
    span.textContent = g;
    span.style.setProperty("--progress", "0%");
    restSpan.appendChild(span);
  }

  // reset state
  gIndex = 0;
  cpIndex = 0;
  mistakes = 0;
  typedEcho = "";
  started = false;
  startTimeMs = 0;
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  // New: Clear the CPM update interval on restart
  if (cpmUpdateId) {
    clearInterval(cpmUpdateId);
    cpmUpdateId = null;
  }
  secondsLeft = DEFAULT_MINUTES * 60;
  updateStatsUI();
  timerEl.textContent = "15:00";
  capture.disabled = false;
  capture.value = "";
  capture.focus();
}
init();

// Focus helpers
window.addEventListener("load", () => capture.focus());
document.addEventListener("click", () => capture.focus());

// Timer start once first ACCEPTED codepoint
function startTimerIfNeeded() {
  if (started) return;
  started = true;
  startTimeMs = performance.now();
  timerId = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      secondsLeft = 0;
      finish();
    }
    const m = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const s = String(secondsLeft % 60).padStart(2, "0");
    timerEl.textContent = `${m}:${s}`;
  }, 1000);

  // New: Start a separate interval for live CPM updates
  cpmUpdateId = setInterval(updateStatsUI, 200); // Update every 200ms
}

function finish() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  // New: Clear the CPM update interval
  if (cpmUpdateId) {
    clearInterval(cpmUpdateId);
    cpmUpdateId = null;
  }

  // freeze CPM at final value
  if (started) {
    const mins = Math.max((performance.now() - startTimeMs) / 60000, 1e-9);
    const finalCpm = totalAcceptedCodepoints() / mins;
    cpmEl.textContent = finalCpm.toFixed(9);
  }
  capture.disabled = true;
  capture.blur();
}

function totalAcceptedCodepoints() {
  // accepted codepoints = sum of lengths of accepted graphemes + cpIndex (but cpIndex should be 0 after full accept)
  let accepted = 0;
  for (let i = 0; i < gIndex; i++) accepted += graphemeCPs[i].length;
  accepted += cpIndex; // partial accepted inside current grapheme
  return accepted;
}

function updateStatsUI() {
  const accepted = totalAcceptedCodepoints();
  typedEl.textContent = String(accepted);
  totalEl.textContent = String(graphemes.reduce((s, g) => s + Array.from(g).length, 0));
  const percent = (accepted / (graphemes.reduce((s, g) => s + Array.from(g).length, 0))) * 100;
  percentEl.textContent = isFinite(percent) ? percent.toFixed(9) : "0.000000000";
  if (started) {
    const mins = Math.max((performance.now() - startTimeMs) / 60000, 1e-9);
    const cpm = accepted / mins;
    cpmEl.textContent = cpm.toFixed(9);
  } else {
    cpmEl.textContent = "0.000000000";
  }
  mistakesEl.textContent = String(mistakes);
}

// mark progress (set --progress on span by proportion of codepoints accepted)
function setSpanProgress(gIdx, cpAcceptedCount) {
  const span = restSpan.children[gIdx];
  if (!span) return;
  const totalCP = graphemeCPs[gIdx].length;
  const percent = Math.round((cpAcceptedCount / totalCP) * 10000) / 100; // two decimals
  span.style.setProperty("--progress", `${percent}%`);
}

// Accept a single codepoint (advance cpIndex; if full grapheme accepted, advance grapheme)
function acceptCodepoint(cp) {
  // start timer at first acceptance
  if (!started) startTimerIfNeeded();

  // accept this cp
  cpIndex++;
  setSpanProgress(gIndex, cpIndex);

  // if full grapheme done:
  if (cpIndex >= graphemeCPs[gIndex].length) {
    // mark fully accepted (100%)
    setSpanProgress(gIndex, graphemeCPs[gIndex].length);

    // *** FIX: Use &nbsp; for spaces to ensure they render ***
    const currentGrapheme = graphemes[gIndex];
    typedEcho += (currentGrapheme === ' ') ? '&nbsp;' : currentGrapheme;

    // advance
    gIndex++;
    cpIndex = 0;
    // ensure view
    const nextSpan = restSpan.children[Math.max(gIndex - 1, 0)];
    if (nextSpan) nextSpan.scrollIntoView({
      block: "nearest",
      inline: "nearest"
    });
  }
  updateStatsUI();

  // if finished whole passage
  if (gIndex >= graphemes.length) {
    finish();
  }
}

// small flash on mistake
let flashing = false;

function flashMistake() {
  if (flashing) return;
  flashing = true;
  scroller.style.outline = "2px solid #ff6b6b";
  setTimeout(() => {
    scroller.style.outline = "none";
    flashing = false;
  }, 120);
}

// input buffer processing (buffer is string of committed text)
function processBuffer(bufferStr) {
  if (!bufferStr) return false;
  // split into codepoints
  const cps = Array.from(bufferStr.normalize("NFC"));
  let consumed = 0;
  for (let i = 0; i < cps.length; i++) {
    if (gIndex >= graphemes.length || secondsLeft <= 0) break;
    const cp = cps[i];
    const expectedCP = graphemeCPs[gIndex][cpIndex];
    // compare relaxed for ASCII letters
    if (eqRelaxed(expectedCP, cp)) {
      acceptCodepoint(cp);
      consumed++;
      // continue to next cp
    } else {
      // wrong key -> count mistake, stop processing further in this buffer
      mistakes++;
      mistakesEl.textContent = String(mistakes);
      flashMistake();
      consumed++;
      // We intentionally clear any remaining buffer (user must retype next correct cp)
      // Stop processing further cps
      // Return flag indicating wrong consumed (so caller clears buffer)
      return true; // wrong happened
    }
  }
  // consumed some or all; return false meaning no mismatch (or none left)
  return false;
}

// IME / composition handling
let composing = false;
let inputBuffer = "";

capture.addEventListener("compositionstart", () => {
  composing = true;
});
capture.addEventListener("compositionend", (e) => {
  composing = false;
  inputBuffer += (e.data || capture.value || "");
  // process the committed text
  const wrong = processBuffer(inputBuffer);
  inputBuffer = "";
  capture.value = "";
  if (!wrong) {
    // *** FIX: Use innerHTML to render &nbsp; correctly ***
    typedEchoEl.innerHTML = typedEcho;
  } else {
    // after wrong, do not advance; typedEcho unchanged
  }
});

capture.addEventListener("input", (e) => {
  if (composing) return;
  inputBuffer += (capture.value || e.data || "");
  const wrong = processBuffer(inputBuffer);
  inputBuffer = "";
  capture.value = "";
  // *** FIX: Use innerHTML to render &nbsp; correctly ***
  if (!wrong) typedEchoEl.innerHTML = typedEcho;
});

// block backspace/arrow etc (strict)
capture.addEventListener("keydown", (e) => {
  const blocked = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"];
  if (blocked.includes(e.key)) e.preventDefault();
  // allow ctrl/cmd combos for copying etc (but usually not needed)
});

// Save PDF
saveBtn.addEventListener("click", () => {
  // compute CPM value at moment of save
  let cpmVal = Number(cpmEl.textContent);
  if (started) {
    const mins = Math.max((performance.now() - startTimeMs) / 60000, 1e-9);
    cpmVal = totalAcceptedCodepoints() / mins;
  }
  import("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js").then(jsPDF => {
    const {
      jsPDF: PDF
    } = jsPDF;
    const doc = new PDF();
    doc.setFontSize(14);
    doc.text("Typing Result", 20, 30);
    doc.setFontSize(11);
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 50);
    doc.text(`Typed codepoints: ${totalAcceptedCodepoints()}`, 20, 70);
    doc.text(`Total codepoints: ${graphemes.reduce((s, g) => s + Array.from(g).length, 0)}`, 20, 90);
    doc.text(`Mistakes: ${mistakes}`, 20, 110);
    doc.text(`Matter %: ${((totalAcceptedCodepoints() / (graphemes.reduce((s, g) => s + Array.from(g).length, 0))) * 100).toFixed(9)}%`, 20, 130);
    doc.text(`CPM: ${cpmVal.toFixed(9)}`, 20, 150);
    doc.save(`sarika_result_${Date.now()}.pdf`);
  });
});

// Restart
restartBtn.addEventListener("click", () => {
  if (timerId) clearInterval(timerId);
  // New: Clear the CPM update interval on restart
  if (cpmUpdateId) clearInterval(cpmUpdateId);
  init();
});
