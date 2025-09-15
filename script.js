// script.js
// Sarika-style — grapheme rendering + codepoint-level progress (handles IME & hardware keys)

const DEFAULT_MINUTES = 15;
const PARAGRAPH_TEXT = `ഛിന്നഗ്രഹ പതനവും വംശനാശവും. 539ദശലക്ഷം വർഷങ്ങൾ മുതൽ അനേകം തവണ ഭൂമിയിൽ വംശനാശം അഥവാ മാസ് എക്സ്റ്റിങ്ഷൻ നടന്നിട്ടുണ്ട്. ഇതിൽ ഏറ്റവും അവസാനത്തേതും ജീവന്റെ പരിണാമചരിത്രത്തിൽ ദൂരവ്യാപകഫലങ്ങൾ ഉണ്ടാക്കിയതുമായ ഒന്നാണ് ക്രിറ്റേഷ്യസ്‍പാലിയോജീൻ അഥവാ കെപിജി (KPg) വംശനാശം. 66 ദശലക്ഷം വർഷങ്ങൾക്കുമുമ്പ്, വലിയ പർവതത്തിനു സമാനമായ ഒരു ഛിന്നഗ്രഹം ഭൂമിയിൽ പതിച്ചതോടെയാണ് ദിനോസറുകളടക്കം 75ശതമാനം ജീവജാലങ്ങളും അപ്രത്യക്ഷമായത് എന്നതാണ് അംഗീകരിക്കപ്പെട്ടിട്ടുള്ള സിദ്ധാന്തം. 1970കളുടെ അവസാനം യുകാറ്റൻപെനിൻസുലയിൽ നടത്തിയ പെട്രോളിയം സർവേയിൽ കണ്ടെത്തിയ ചിക്സുലബ് ഗർത്തമാണ് ഇതിന് ശക്തമായ തെളിവ്. ദിനോസറുകളുടെ തിരോധാനത്തിനു കാരണമായത് ഉൽക്കാപതനമല്ലെന്നുള്ള സിദ്ധാന്തവും നിലവിലുണ്ട്. 65ദശലക്ഷം വർഷങ്ങൾക്കുമുമ്പുണ്ടായ വലിയ അഗ്നിപർവത സ്ഫോടനമാണ് മാസ് എക്സ്റ്റിങ്ഷന് കാരണമായതെന്ന് ഒരു വിഭാഗം വിശ്വസിക്കുന്നു. ഇന്ത്യയിലെ ഡെക്കാൻ പീഠഭൂമി പോലുള്ള അഗ്നിപർവത പ്രവിശ്യകൾ രൂപപ്പെട്ടത് അക്കാലത്താണ്. 10ലക്ഷം വർഷങ്ങൾ നീണ്ടുനിന്ന ഡെക്കാൻ ട്രാപ്സ് അഗ്നിപർവതസ്ഫോടനങ്ങൾ അന്തരീക്ഷത്തിലേക്ക് പുറന്തള്ളിയത് 10.4ട്രില്യൺ ടൺ കാർബൺഡയോക്സൈഡ്, 9.3ട്രില്യൺ ടൺ ഗന്ധകം തുടങ്ങിയവയാണെന്ന് കണക്കാക്കുന്നു. അഗ്നിപർവതസ്ഫോടനങ്ങൾ അന്തരീക്ഷത്തിൽ നിറയ്ക്കുന്ന സൾഫ്യൂരിക് ആസിഡിന്റെ കണികകൾ പ്രകാശത്തെ മറയ്ക്കുകയും ഭൂമിയുടെ ആൽബിഡോ (സൗരവികിരണത്തിന്റെ പ്രതിഫലനം) വർധിപ്പിക്കുകയും ചെയ്യുന്നതോടെയുണ്ടാകുന്ന അഗ്നിപർവതശീതകാലങ്ങളാണ് (volcanic winters) ദിനോസറുകളുടെ തിരോധാനത്തിനു വഴിയൊരുക്കിയതെന്ന് ഇവർ വാദിക്കുന്നു. അഗ്നിപർവതസ്ഫോടനം ആഗോളമായി കൂട്ടവംശനാശം വരുത്തുവാൻ പര്യാപ്തമല്ല; എന്നാൽ അതൊരു പ്രേരകകാരണമായിരിക്കാം എന്ന് വാദിക്കുന്നവരുമുണ്ട്. 10ലക്ഷം വർഷങ്ങൾ നീണ്ടുനിന്ന ഡെക്കാൻ ട്രാപ്സ് അഗ്നിപർവതസ്ഫോടനം സൃഷ്ടിച്ച പ്രതികൂല കാലാവസ്ഥയെ പ്രതിരോധിക്കാൻ ജീവജാലങ്ങൾ പ്രയത്നിക്കുമ്പൊഴാണ് ഉൽക്കയുടെ വരവ്. ഉൽക്ക സൃഷ്ടിച്ച പൊടിപടലങ്ങൾ കൂടി അന്തരീക്ഷത്തിൽ നിറഞ്ഞപ്പോൾ സൂര്യപ്രകാശത്തിൽ 20ശതമാനം കുറവ് സംഭവിച്ചതും ജീവജാലങ്ങളുടെ അതിജീവനത്തെ ബാധിച്ചു. ഏതാണ്ട് ഒരേ കാലഘട്ടത്തിൽ നടന്ന ഈ രണ്ട് സംഭവങ്ങളും ദിനോസറുകളുടെ തിരോധാനനത്തിനു പിന്നിൽ പ്രവർത്തിച്ചിട്ടുണ്ടാകാം.ഇറിഡിയം അനോമിലിയും. 1970കളുടെ അവസാനത്തിൽ ചിക്സുലാബ് ഗർത്തം കണ്ടെത്തിയതിന്റെ പശ്ചാത്തലത്തിൽ ലൂയിസ്, വാൾട്ടർ അൽവാറിസ് എന്ന പിതൃപുത്ര കൂട്ടായ്മയാണ് ഉൽക്കാപതന ആശയത്തിന് കൂടുതൽ തെളിവുകൾ കണ്ടെത്തിയത്. ലോകത്തിന്റെ പലഭാഗത്തുമുള്ള ക്രിറ്റേഷ്യസ്‍പാലിയോജിൻ പാറകൾക്കിടയിലെ ചെളിയിൽ കണ്ടെത്തിയ 'ഇറിഡിയം' എന്ന വസ്തു ഇതിന് തെളിവായി അവർ ഉപയോഗിച്ചു. ഉൽക്കകളിൽ ധാരാളമുള്ള ഇറിഡിയം ഭൂമിയുടെ ഉപരിതല പാറകളിൽ വിരളമാണ്. അതുകൊണ്ടാണ് ക്രിറ്റേഷ്യസ്‍പാലിയോജിൻ അതിർത്തിയിൽ കണ്ടെത്തിയ ഇറിഡിയം അടങ്ങിയ ചെളിയുടെ അടരുകളെ 'ഇറിഡിയം അനോമലി' എന്ന് വിശേഷിപ്പിക്കുന്നത്. ഉൽക്കാപതന സിദ്ധാന്തം അംഗീകരിക്കപ്പെട്ടെങ്കിലും എവിടെനിന്നാകാം ആ ഛിന്നഗ്രഹം എത്തിയത് എന്നത് ചോദ്യമായിരുന്നു. ഏകദേശം 4.6ബില്യൺ വർഷങ്ങൾക്ക് മുമ്പ് ഒരു തന്മാത്രാമേഘത്തിന്റെ തകർച്ചയെത്തുടർന്നാണ് സൗരയൂഥം രൂപപ്പെട്ടത്. ആ തകർച്ചയിൽനിന്നുണ്ടായ വ്യത്യസ്ത രാസഘടനയുള്ള ഛിന്നഗ്രഹങ്ങൾ സൗരയൂഥത്തിൽ ഇപ്പോഴുമുണ്ട്. സൂര്യനിൽനിന്നകലെ ഛിന്നഗ്രഹ വലയത്തിനു പുറത്തുള്ള സിടൈപ്പ് ഛിന്നഗ്രഹങ്ങളിൽ ധാരാളം കാർബൺ, ധാതുക്കൾ, ജലാംശം എന്നിവയടങ്ങിയിട്ടുണ്ട്. എന്നാൽ ചൊവ്വയ്ക്കും വ്യാഴത്തിനുമിടയിലെ ഛിന്നഗ്രഹവലയത്തിലുള്ളത് സിലിക്കേറ്റ് ധാതുക്കളടങ്ങിയ എസ്‍ടൈപ്പ് ഛിന്നഗ്രഹങ്ങളാണ്. 66ദശലക്ഷം വർഷങ്ങൾക്കുമുമ്പ് ഭൂമിയിൽ പതിച്ച ഛിന്നഗ്രഹം വ്യാഴത്തിനും അപ്പുറത്തുനിന്നുള്ള എസ്‍ടൈപ്പ് ആയിരുന്നവെന്നതിനുള്ള തെളിവുകളാണ് ജർമനിയിലെ കൊളോൺ സർവകലാശാലയിലെ ശാസ്ത്രജ്ഞർ സമീപദിവസങ്ങളിൽ 'സയൻസ്' ജേണലിൽ പ്രസിദ്ധീകരിച്ച ഗവേഷണപ്രബന്ധത്തിലൂടെ മുന്നോട്ടുവയ്ക്കുന്നത്. ദിനോസറുകളുടെ തിരോധാനത്തിന്റെ കാരണങ്ങൾ തേടുന്നതോടൊപ്പം ഭൂമിയിലെ ജീവജാലങ്ങളുടെ ഗതി തന്നെ തിരിച്ചുവിട്ട ഛിന്നഗ്രഹത്തിന്റെ രാസഘടനയാണ് ഇവർ വെളിപ്പെടുത്തിയിരിക്കുന്നത്. പ്ലാറ്റിനം ഗ്രൂപ്പ് റുഥേനിയം, റോഡിയം, പലേഡിയം, ഓസ്മിയം, ഇറിഡിയം, പ്ലാറ്റിനം എന്നിങ്ങനെ സമാനമായ ഭൗതികവും രാരപരവുമായ ഗുണങ്ങളുള്ള ആറ് ലോഹങ്ങളാണ് പ്ലാറ്റിനം ഗ്രൂപ്പിലുള്ളത്. ഇവയിൽ റുഥേനിയം ആണ് പുതിയ പഠനത്തിന് ഉപയോഗിച്ചത്. ഡെൻമാർക്ക്, ഇറ്റലി, സ്പെയിൻ എന്നിവിടങ്ങളിൽനിന്ന് ശേഖരിച്ച പാറകളിൽനിന്ന് റുഥേനിയം വേർപെടുത്തി. ഇിതോടൊപ്പം മറ്റ് ഉൽക്കാപതന പാറകളുടെ രാസഘടനയും അവർ നിരീക്ഷിച്ചു. ജലം, ചെളി, കാർബൺ തുടങ്ങിയവ അടങ്ങിയിട്ടുള്ള എസ്‍ടൈപ്പ് ഛിന്നഗ്രഹമാണ് ദിനോസറുകളുടെ തിരോധാനത്തിന് കാരണമായത്. 470 മുതൽ 36 ദശലക്ഷം വർഷങ്ങൾക്കിടയിൽ നടന്ന അഞ്ച് ഉൽക്കാപതനങ്ങൾ കൂടാതെ 3.2 മുതൽ 3.5 ബില്യൺ വർഷങ്ങൾക്കുമുമ്പ് നടന്നവയും ഗവേഷണത്തിൽ ഉൾപ്പെട്ടിരുന്നു. ഇതിൽ ചിക്‍സുലബ് ഗർത്തത്തിൽനിന്നു ലഭിച്ച വസ്തുക്കളിൽ റുഥേനിയം കൂടുതൽ അളവിൽ ഉൾപ്പെടുന്നു എന്നാണ് പുതിയ പഠനങ്ങൾ വെളിപ്പെടുത്തുന്നത്. മറ്റ് അഞ്ച് ഗർത്തങ്ങളിൽ കണ്ടത് എസ്‍ടെപ്പ് ഛിന്നഗ്രഹങ്ങൾ മൂലമാണുണ്ടായതെന്നാണ് പഠനങ്ങൾ തെളിയിക്കുന്നത്.`;

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
let cpmUpdateId = null;
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

  cpmUpdateId = setInterval(updateStatsUI, 1000);
}

function finish() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  if (cpmUpdateId) {
    clearInterval(cpmUpdateId);
    cpmUpdateId = null;
  }

  if (started) {
    const mins = Math.max((performance.now() - startTimeMs) / 60000, 1e-9);
    const finalCpm = totalAcceptedCodepoints() / mins;
    cpmEl.textContent = finalCpm.toFixed(9);
  }
  capture.disabled = true;
  capture.blur();
}

function totalAcceptedCodepoints() {
  let accepted = 0;
  for (let i = 0; i < gIndex; i++) accepted += graphemeCPs[i].length;
  accepted += cpIndex;
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

function setSpanProgress(gIdx, cpAcceptedCount) {
  const span = restSpan.children[gIdx];
  if (!span) return;
  const totalCP = graphemeCPs[gIdx].length;
  const percent = Math.round((cpAcceptedCount / totalCP) * 10000) / 100;
  span.style.setProperty("--progress", `${percent}%`);
}

function acceptCodepoint(cp) {
  if (!started) startTimerIfNeeded();

  cpIndex++;
  setSpanProgress(gIndex, cpIndex);

  if (cpIndex >= graphemeCPs[gIndex].length) {
    setSpanProgress(gIndex, graphemeCPs[gIndex].length);

    const currentGrapheme = graphemes[gIndex];
    typedEcho += (currentGrapheme === ' ') ? '&nbsp;' : currentGrapheme;

    gIndex++;
    cpIndex = 0;

    const nextSpan = restSpan.children[Math.max(gIndex - 1, 0)];
    if (nextSpan) nextSpan.scrollIntoView({
      block: "nearest",
      inline: "nearest"
    });
  }
  updateStatsUI();

  if (gIndex >= graphemes.length) {
    finish();
  }
}

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

let composing = false;
let inputBuffer = "";

function processBuffer(bufferStr) {
  if (!bufferStr) return false;
  const cps = Array.from(bufferStr.normalize("NFC"));
  let consumed = 0;
  for (let i = 0; i < cps.length; i++) {
    if (gIndex >= graphemes.length || secondsLeft <= 0) break;
    const cp = cps[i];
    const expectedCP = graphemeCPs[gIndex][cpIndex];
    if (eqRelaxed(expectedCP, cp)) {
      acceptCodepoint(cp);
      consumed++;
    } else {
      mistakes++;
      mistakesEl.textContent = String(mistakes);
      flashMistake();
      consumed++;
      return true;
    }
  }
  return false;
}

capture.addEventListener("compositionstart", () => {
  composing = true;
});

capture.addEventListener("compositionend", (e) => {
  composing = false;
  inputBuffer += (e.data || capture.value || "");
  const wrong = processBuffer(inputBuffer);
  inputBuffer = "";
  capture.value = "";
  if (!wrong) {
    typedEchoEl.innerHTML = typedEcho;
  }
});

capture.addEventListener("input", (e) => {
  if (composing) return;
  inputBuffer += (capture.value || e.data || "");
  const wrong = processBuffer(inputBuffer);
  inputBuffer = "";
  capture.value = "";
  if (!wrong) typedEchoEl.innerHTML = typedEcho;
});

capture.addEventListener("keydown", (e) => {
  const blocked = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"];
  if (blocked.includes(e.key)) e.preventDefault();
});

saveBtn.addEventListener("click", () => {
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

restartBtn.addEventListener("click", () => {
  if (timerId) clearInterval(timerId);
  if (cpmUpdateId) clearInterval(cpmUpdateId);
  init();
});
