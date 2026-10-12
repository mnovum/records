/* Record Reconstruction program. Course content is supplied by the page as window.RR_COURSES. */
(function(){
var mount = document.getElementById("rrapp"); if (!mount) return;
var st = document.createElement("style"); st.textContent = "#rrapp *{font-weight:inherit;color:inherit;font-family:inherit;font-size:inherit;letter-spacing:normal;text-transform:none;line-height:inherit;margin:0;text-decoration:none}#rrapp p{margin:0}#rrapp h1,#rrapp h2,#rrapp h3{font-size:inherit}#rrapp{\n  --bg:#000; --panel:#0D0D0D; --raise:#171717; --line:#2E2E2E; --fg:#FFF; --dim:#9C9C9C;\n  --red:#FF2B2B; --blue:#2F7BFF; --amber:#FFB300;\n  --s-red:#FF0000; --s-blue:#00B0F0; --s-ink:#000; --s-card:#FFF; --s-wait:#F1F1F1;\n  --font:\"Courier New\",\"Courier Prime\",Courier,ui-monospace,monospace;\n  color-scheme:dark;\n}\n#rrapp,#rrapp *{box-sizing:border-box}\n#rrapp,#rrapp{background:var(--bg);color:var(--fg)}\n#rrapp{font-family:var(--font);font-weight:700;font-size:15px;line-height:1.45;padding:0 16px}\n#rrapp button,#rrapp input,#rrapp select,#rrapp textarea{font-family:var(--font);font-weight:700}\n#rrapp .wrap{max-width:1180px;margin:0 auto;padding-block:20px 60px;display:flex;flex-direction:column;gap:14px}\n#rrapp header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}\n#rrapp .brand{display:flex;align-items:center;gap:14px;flex-wrap:wrap}\n#rrapp .brand h1{font-size:21px;margin:0}\n#rrapp .brand h1 span{color:var(--red)}\n#rrapp select,#rrapp input[type=number]{font-size:15px;color:var(--fg);background:var(--raise);border:1px solid var(--line);border-radius:4px;padding:6px 8px}\n#rrapp nav{display:flex;gap:2px;flex-wrap:wrap;border:1px solid var(--line);border-radius:4px;padding:3px}\n#rrapp nav button{font-size:13px;border:0;background:transparent;color:var(--dim);padding:7px 12px;border-radius:3px;cursor:pointer}\n#rrapp nav button[aria-selected=\"true\"]{background:var(--fg);color:var(--bg)}\n#rrapp :focus-visible{outline:2px solid var(--blue);outline-offset:2px}\n#rrapp .panel{background:#FFF;color:#000;color-scheme:light;border:1px solid var(--line);border-radius:6px;padding:28px}\n#rrapp .panel .lede,#rrapp .panel .dim,#rrapp .panel label.opt,#rrapp .panel label.chk,#rrapp .panel .stat span,#rrapp .panel .tile .m,#rrapp .panel table.t th{color:#000}\n#rrapp .panel select,#rrapp .panel input[type=number]{background:#FFF;color:#000;border:1px solid #000}\n#rrapp .panel .btn.ghost{color:#000;border-color:#000}\n#rrapp .panel table.t th,#rrapp .panel table.t td{border-bottom-color:#DDD}\n#rrapp .panel kbd{background:#F2F2F2;color:#000;border-color:#BBB}\n#rrapp .panel .rx{background:#FFECEC;color:#000}\n#rrapp .panel .rx.opt{background:#FFF4D6}\n#rrapp .panel .confirm{background:#FFECEC;color:#000}\n#rrapp .panel .amber,#rrapp .panel .v05{color:#B07A00}\n#rrapp .panel .tile{border-color:#DDD}\n#rrapp .panel.start{text-align:center}\n#rrapp .panel.start .lede{margin-left:auto;margin-right:auto}\n#rrapp .panel.start .opts,#rrapp .panel.start .row{justify-content:center}\n#rrapp .eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}\n#rrapp h2{font-size:21px;margin:4px 0 8px;text-wrap:balance}\n#rrapp h3{font-size:15px;margin:24px 0 8px}\n#rrapp .lede{color:var(--dim);margin:0 0 18px;max-width:70ch}\n#rrapp .opts{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end;margin-bottom:20px}\n#rrapp label.opt{display:flex;flex-direction:column;gap:5px;font-size:12px;color:var(--dim)}\n#rrapp label.chk{display:flex;gap:8px;align-items:center;font-size:13px;color:var(--fg)}\n#rrapp .btn{font-size:14px;border:2px solid var(--blue);border-radius:4px;padding:7px 16px;cursor:pointer;background:var(--blue);color:#fff}\n#rrapp .btn.ghost{background:transparent;border-color:var(--line);color:var(--fg)}\n#rrapp .btn.small{padding:4px 10px;font-size:12.5px}\n#rrapp .btn.danger{background:var(--red);border-color:var(--red)}\n#rrapp .btn:disabled{opacity:.4;cursor:not-allowed}\n#rrapp .row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n#rrapp .spacer{flex:1}\n#rrapp .dim{color:var(--dim)}\n#rrapp .small{font-size:12.5px}\n#rrapp kbd{font-family:var(--font);font-size:12px;border:1px solid var(--line);border-bottom-width:2px;border-radius:3px;padding:0 5px;background:var(--raise);color:var(--fg)}\n#rrapp .slide{position:relative;width:100%;aspect-ratio:16/9;background:#000;container-type:inline-size;--pt:calc(100cqw / 960);\n  font-family:var(--font);font-weight:700;color:var(--s-ink);user-select:none;border-radius:4px;overflow:hidden}\n#rrapp .slide .card{position:absolute;background:var(--s-card);border-radius:calc(var(--pt)*9)}\n#rrapp .slide .el{position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.15;min-width:0}\n#rrapp .slide .rail{position:absolute;width:2.2%;height:4%;border-radius:50%;background:#fff;color:#000;display:flex;align-items:center;justify-content:center;font-size:calc(var(--pt)*10)}\n#rrapp .slide .rail.on{background:var(--s-blue);color:#fff}\n#rrapp .slide .circle{position:absolute;border-radius:50%;background:var(--s-red);color:#fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--pt)*19)}\n#rrapp .slide .circle.ok{background:var(--s-blue)}\n#rrapp .slide .imgbox{position:absolute;border-radius:calc(var(--pt)*8);overflow:hidden;background:var(--s-wait);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:calc(var(--pt)*6)}\n#rrapp .slide .imgbox.blank{background:transparent}\n#rrapp .slide .imgbox img{width:100%;height:100%;object-fit:cover;display:block}\n#rrapp .slide .imgbox .room{font-size:calc(var(--pt)*18);color:#9A9A9A}\n#rrapp .slide .imgbox .station{font-size:calc(var(--pt)*10);color:#B5B5B5}\n#rrapp .slide .imgbox .count{font-size:calc(var(--pt)*190);line-height:1;color:var(--s-red)}\n#rrapp .slide .tiny{font-size:calc(var(--pt)*6.5);justify-content:flex-start}\n#rrapp .slide .key b{color:var(--s-red)}\n#rrapp .s-isfor{font-size:calc(var(--pt)*12)}\n#rrapp .s-word{font-size:calc(var(--pt)*16);color:var(--s-red)}\n#rrapp .s-primary{font-size:calc(var(--pt)*14)}\n#rrapp .s-secondary{font-size:calc(var(--pt)*12)}\n#rrapp .s-date{font-size:calc(var(--pt)*12);color:var(--s-blue);flex-direction:column}\n#rrapp .s-date sup{color:var(--s-red);font-size:.75em;vertical-align:.45em;line-height:0}\n#rrapp .s-date .era{color:var(--s-red)}\n#rrapp .s-rel{font-size:calc(var(--pt)*16);color:var(--s-red)}\n#rrapp .s-gist{font-size:calc(var(--pt)*14);color:var(--s-blue)}\n#rrapp .slide .fade{animation:fadein .35s ease-out}\n@keyframes fadein{from{opacity:0}to{opacity:1}}\n#rrapp .slide input,#rrapp .slide textarea{font:inherit;color:inherit;background:#F7F7F7;border:1px dashed #B9B9B9;border-radius:calc(var(--pt)*3);\n  text-align:center;padding:calc(var(--pt)*2) calc(var(--pt)*3);width:100%;min-width:0;resize:none;outline:none}\n#rrapp .slide input:focus,#rrapp .slide textarea:focus{border:1px solid var(--s-blue);background:#fff}\n#rrapp .slide input::placeholder,#rrapp .slide textarea::placeholder{color:#C4C4C4;font-size:.8em}\n#rrapp .slide input[readonly],#rrapp .slide textarea[readonly]{background:#FFF8E1;border-style:solid;border-color:#E9D9A6}\n#rrapp .slide .w-index{display:flex;align-items:center;gap:calc(var(--pt)*4);width:100%}\n#rrapp .slide .w-index input{flex:1;text-transform:uppercase;color:var(--s-red);font-size:calc(var(--pt)*16)}\n#rrapp .slide .w-sec{display:flex;align-items:center;gap:calc(var(--pt)*3);width:100%}\n#rrapp .slide textarea{height:100%}\n#rrapp .bar{display:flex;align-items:center;gap:14px;font-size:13px;color:var(--dim);font-variant-numeric:tabular-nums}\n#rrapp .prog{height:3px;background:var(--line);flex:1;max-width:340px}\n#rrapp .prog i{display:block;height:100%;background:var(--fg)}\n#rrapp .timer{margin-left:auto;font-size:22px;color:var(--fg);font-variant-numeric:tabular-nums;min-width:4.5ch;text-align:right}\n#rrapp .timer.over{color:var(--amber)}\n#rrapp .timer.stopped{opacity:.55}\n#rrapp .under{display:flex;flex-wrap:wrap;gap:10px;align-items:center}\n#rrapp .cb{border:2px solid var(--fg);background:transparent;color:var(--fg);border-radius:4px;padding:8px 13px;cursor:pointer;font-size:14px}\n#rrapp .cb:hover{background:var(--fg);color:var(--bg)}\n#rrapp .hints{font-size:13px;color:var(--amber)}\n#rrapp .grade{width:100%;border-collapse:collapse;font-size:13.5px}\n#rrapp .grade td,#rrapp .grade th{padding:7px 8px;border-bottom:1px solid var(--line);text-align:left;vertical-align:middle}\n#rrapp .grade th{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}\n#rrapp .grade td.typed{color:var(--fg)}\n#rrapp .grade td.typed.empty{color:var(--dim)}\n#rrapp .mk{font-size:12.5px;border:2px solid var(--line);border-radius:3px;padding:3px 9px;cursor:pointer;background:transparent;color:var(--dim)}\n#rrapp .mk[aria-pressed=\"true\"][data-v=\"1\"]{border-color:var(--blue);background:var(--blue);color:#fff}\n#rrapp .mk[aria-pressed=\"true\"][data-v=\"0.5\"]{border-color:var(--amber);background:var(--amber);color:#000}\n#rrapp .mk[aria-pressed=\"true\"][data-v=\"0\"]{border-color:var(--red);background:var(--red);color:#fff}\n#rrapp .chips{display:flex;gap:8px;flex-wrap:wrap}\n#rrapp .chip{border:2px solid var(--line);background:transparent;color:var(--fg);border-radius:4px;padding:5px 11px;cursor:pointer;font-size:13.5px}\n#rrapp .chip[aria-pressed=\"true\"]{border-color:var(--fg);background:var(--fg);color:var(--bg)}\n#rrapp .feedback{border-left:4px solid;padding:9px 13px;font-size:15px}\n#rrapp .feedback.good{border-color:var(--blue);background:#0A1630}\n#rrapp .feedback.bad{border-color:var(--red);background:#2A0A0A}\n#rrapp .L{color:var(--red)}\n#rrapp .stats{display:flex;flex-wrap:wrap;gap:30px;margin:8px 0 16px}\n#rrapp .stat b{display:block;font-size:30px;font-variant-numeric:tabular-nums}\n#rrapp .stat span{font-size:12px;color:var(--dim)}\n#rrapp .tablewrap{overflow-x:auto}\n#rrapp table.t{border-collapse:collapse;width:100%;font-size:13.5px}\n#rrapp table.t th,#rrapp table.t td{text-align:left;padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}\n#rrapp table.t th{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}\n#rrapp td.n{font-variant-numeric:tabular-nums;white-space:nowrap}\n#rrapp .v1{color:var(--blue)}\n#rrapp .v05{color:var(--amber)}\n#rrapp .v0{color:var(--red)}\n#rrapp .amber{color:var(--amber)}\n#rrapp .rx{border-left:4px solid var(--red);padding:8px 13px;margin:8px 0;background:#2A0A0A}\n#rrapp .rx.opt{border-color:var(--amber);background:#2A1F00}\n#rrapp .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px;margin:12px 0}\n#rrapp .tile{border:2px solid var(--line);border-radius:4px;padding:8px 10px;display:flex;flex-direction:column;gap:1px}\n#rrapp .tile .t{font-size:24px;line-height:1;color:var(--red)}\n#rrapp .tile .m{font-size:12px;color:var(--dim);font-variant-numeric:tabular-nums}\n#rrapp .tile.s3{border-color:var(--blue)}\n#rrapp .tile.s2{border-color:var(--amber)}\n#rrapp .tile.s1{border-color:var(--red)}\n#rrapp .status{font-size:13px;color:var(--blue)}\n#rrapp .status.err{color:var(--red)}\n#rrapp .confirm{border-left:4px solid var(--red);background:#2A0A0A;padding:10px 14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:12px}\n#rrapp .stage{display:flex;flex-direction:column;gap:12px}\n#rrapp .stage>*{width:min(100%, max(560px, calc((100vh - 230px) * 16 / 9)));margin-inline:auto}\n#rrapp .stage:fullscreen{background:#000;padding:2vh 2vw;justify-content:center}\n#rrapp .stage:fullscreen>*{width:min(100%, calc((100vh - 130px) * 16 / 9))}\n@media (max-width:680px){#rrapp .panel{padding:16px}}\n@media (prefers-reduced-motion:reduce){#rrapp,#rrapp *{animation:none!important;transition:none!important}}\n\n"; document.head.appendChild(st);
var fl = document.createElement("link"); fl.rel = "stylesheet"; fl.href = "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap"; document.head.appendChild(fl);
mount.classList.add("rr"); mount.innerHTML = "<div class=\"wrap\">\n  <header>\n    <div class=\"brand\"><h1>Record Reconstruction</h1><select id=\"courseSel\" aria-label=\"Course\"></select></div>\n    <nav role=\"tablist\" aria-label=\"Modes\">\n      <button role=\"tab\" data-view=\"short\">Reconstruction</button>\n      <button role=\"tab\" data-view=\"address\">Address</button>\n      <button role=\"tab\" data-view=\"family\">Living room</button>\n      <button role=\"tab\" data-view=\"progress\">Progress</button>\n    </nav>\n  </header>\n  <main id=\"view\"></main>\n</div>";

/* =============================================================
   RECORD PRACTICE (v3): practice on the monument index itself.
   COURSES is written in by tools/make_practice.py from each course workbook.
   ============================================================= */
const COURSES = (typeof window !== "undefined" && window.RR_COURSES) || [];
const RESULTS_ENDPOINT = "";            // later: Google Apps Script web-app URL
const STORE_KEY = "record-practice-v3";

const L26 = "abcdefghijklmnopqrstuvwxyz";
const FIELDS = [
  { key: "index",     label: "Index word",       check: "word" },
  { key: "primary",   label: "Primary figure",   check: "name" },
  { key: "secondary", label: "Secondary figure", check: "name" },
  { key: "date",      label: "Date",             check: "date" },
  { key: "relevance", label: "Relevance",        check: "none" },
  { key: "gist",      label: "Gist",             check: "none" },
];
const CONF = { 1: "Don't know", 2: "It's in there", 3: "Sure" };
const RANGES = { all: "All 26", "a-e": "Chapter 1 · A–E", "f-j": "Chapter 2 · F–J", "k-o": "Chapter 3 · K–O",
                 "p-t": "Chapter 4 · P–T", "u-z": "Chapter 5 · U–Z", preview: "Preview · A F K P U Z" };
const PROMPTS = { primary: "Primary figure", secondary: "Secondary figure", relevance: "Relevance", gist: "Gist", date: "Date" };

// Positions on the slide, in % of width/height, measured from the template (x, y, w, h)
const POS = {
  card: [1.0, 1.4, 98.1, 97.2], circle: [3.1, 5.7, 3.8, 6.7], index: [3.3, 19.1, 18.9, 5.3],
  primary: [3.3, 39.9, 18.9, 5.3], secondary: [3.3, 45.2, 18.9, 5.3], date: [3.3, 69.9, 18.9, 8.8],
  relevance: [76.7, 9.7, 20.3, 24.7], gist: [76.7, 40.8, 20.3, 49.7], image: [24.1, 3.9, 51.8, 92.1],
  label: [78.9, 1.5, 16.8, 2.7], key: [2.5, 95.3, 20.5, 3.1], copy: [80.8, 95.6, 13.1, 2.9],
};

// ---- storage ----
function fresh() { return { uid: "u" + Math.random().toString(36).slice(2, 10), activeId: COURSES[0] && COURSES[0].id, history: [], settings: {} }; }
function load() { try { const s = JSON.parse(localStorage.getItem(STORE_KEY)); if (s && s.history) return s; } catch (e) {} return fresh(); }
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {} }
let store = load();
if (!COURSES.find(c => c.id === store.activeId)) store.activeId = COURSES[0].id;
const course = id => COURSES.find(c => c.id === id);
const active = () => course(store.activeId);
const rowsOf = c => c.rows.map(r => ({ ...r, cid: c.id, ctitle: c.title }));
const rowAt = (cid, L) => { const c = course(cid); return c ? rowsOf(c).find(r => r.L === L) : null; };
const setting = (k, d) => store.settings[k] ?? d;
const remember = o => { Object.assign(store.settings, o); save(); };

// ---- background check (logged, never shown) ----
const norm = s => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").replace(/^the /, "").trim();
function lev(a, b) { const d = Array.from({ length: a.length + 1 }, (_, i) => [i]); for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
  return d[a.length][b.length]; }
function close(g, t) { g = norm(g); t = norm(t); if (!g || !t) return false; if (g === t) return true; return lev(g, t) <= (t.length <= 4 ? 0 : t.length <= 8 ? 1 : 2); }
const SKIP = new Set(["the", "of", "great", "elder", "younger", "and"]);
function nameOK(given, target) {
  return String(target).split(/[\/;]/).some(alt => { if (close(given, alt)) return true;
    const parts = norm(alt).split(" ").filter(t => t.length >= 4 && !SKIP.has(t)), typed = norm(given).split(" ").filter(t => t.length >= 4 && !SKIP.has(t));
    return parts.some(p => close(given, p) || typed.some(t => close(t, p))); });
}
function year(s) { if (!s) return null; const t = String(s).toLowerCase().replace(/c\.|ca\.|circa|~/g, " "); const m = t.match(/(-)?\s*(\d{1,5})/); if (!m) return null;
  const bce = /b\.?\s?c/.test(t) || !!m[1], ce = /\b(ce|a\.?d\.?)\b/.test(t); return { y: bce ? -Number(m[2]) : Number(m[2]), explicit: bce || ce }; }
function dateOK(g, t, tol) { g = year(g); t = year(t); if (!g || !t) return false; return (g.explicit ? Math.abs(g.y - t.y) : Math.abs(Math.abs(g.y) - Math.abs(t.y))) <= tol; }
function bgCheck(f, given, row) {
  if (!String(given).trim()) return 0;
  if (f.check === "word") return close(given, row.index) ? 1 : 0;
  if (f.check === "name") return nameOK(given, row[f.key]) ? 1 : 0;
  if (f.check === "date") return dateOK(given, row.date, 10) ? 1 : 0;
  return null;
}

// ---- utilities ----
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function inRange(r, range) { if (range === "all") return true; if (range === "preview") return "afkpuz".includes(r.L); return r.L >= range[0] && r.L <= range[2]; }
const pct = (n, d) => d ? Math.round(100 * n / d) + "%" : "–";
const clock = ms => { const s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const secs = ms => (ms / 1000).toFixed(1) + "s";
const rangeOptions = () => Object.entries(RANGES).map(([k, t]) => `<option value="${k}">${t}</option>`).join("");
let keyHandler = null;
function setKeys(fn) { if (keyHandler) document.removeEventListener("keydown", keyHandler); keyHandler = fn; if (fn) document.addEventListener("keydown", fn); }
const typing = e => /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) && !e.target.readOnly;
let liveTimer = null, liveTimeouts = [];
function startTimer(el, limS) {
  const t0 = performance.now(), lim = limS * 1000;
  const tick = () => { const e = performance.now() - t0;
    if (e <= lim) { el.textContent = clock(lim - e); el.classList.remove("over"); } else { el.textContent = "+" + clock(e - lim); el.classList.add("over"); } };
  tick(); const iv = setInterval(tick, 250);
  return { t0, stop() { clearInterval(iv); el.classList.add("stopped"); return Math.round(performance.now() - t0); } };
}
function stopAll() { if (liveTimer) { liveTimer.stop(); liveTimer = null; } liveTimeouts.forEach(clearTimeout); liveTimeouts = []; setKeys(null); }

/* ---------------- the slide ---------------- */
const box = (k, cls, inner, extra = "") => { const [x, y, w, h] = POS[k];
  return `<div class="el ${cls}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%;${extra}">${inner}</div>`; };
function dateHTML(r) {
  const era = (String(r.date).match(/\b(BCE|CE)\b/) || [""])[0];
  const extra = era ? String(r.date).split(era)[1].trim() : "";
  if (!r.notation) return `<span>${esc(r.date)}</span>`;
  const body = r.notation.split(/(\d+)/).map(p => !p ? "" : /^\d+$/.test(p) ? `<sup>${p}</sup>` : esc(p)).join("");
  return `<span style="white-space:pre">${body} <span class="era">${era}</span></span>${extra ? `<span>${esc(extra)}</span>` : ""}`;
}
function rails(activeL, show = true) {
  if (!show) return "";
  return L26.split("").map((c, i) => { const left = i < 13; const y = 1.6 + (i % 13) * 7.72;
    return `<div class="rail ${c === activeL ? "on" : ""}" style="left:${left ? 0.65 : 97.0}%;top:${y}%">${c.toUpperCase()}</div>`; }).join("");
}
function chrome(label) {
  return box("label", "tiny", esc(label), "justify-content:center") +
    box("key", "tiny key", "<span style=\"white-space:pre\"><b>0</b>SZ <b>1</b>TD <b>2</b>N <b>3</b>M <b>4</b>R <b>5</b>L <b>6</b>ShJCh <b>7</b>KG <b>8</b>FV <b>9</b>PB</span>") +
    box("copy", "tiny", "©mnovum.org(anum), 2026", "justify-content:center");
}
function circle(text, ok) { const [x, y, w, h] = POS.circle; return `<div class="circle ${ok ? "ok" : ""}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%">${esc(text)}</div>`; }
function imgbox(inner, blank) { const [x, y, w, h] = POS.image; return `<div class="imgbox ${blank ? "blank" : ""}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%">${inner}</div>`; }
function card() { const [x, y, w, h] = POS.card; return `<div class="card" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%"></div>`; }

// mode: full | input | blank | count
function slideHTML(r, mode, o = {}) {
  let s = card();
  if (mode === "full") {
    s += rails(r.L) + circle(r.L) + chrome(o.label || "monument index");
    s += imgbox(r.img ? `<img class="fade" src="${r.img}" alt="Plate for ${r.L.toUpperCase()}">` : `<span class="room">${esc(r.primary)}</span>`);
    s += box("index", "fade", `<span class="s-isfor">is for&nbsp;</span><span class="s-word">${esc(r.index.toUpperCase())}</span>`);
    s += box("primary", "s-primary fade", esc(r.primary));
    s += box("secondary", "s-secondary fade", r.secondary ? `(+ ${esc(r.secondary)})` : "");
    s += box("date", "s-date fade", dateHTML(r));
    s += box("relevance", "s-rel fade", esc(r.relevance));
    s += box("gist", "s-gist fade", esc(r.gist));
  } else if (mode === "input") {
    const v = o.values || {}, ro = o.readonly ? "readonly" : "";
    s += rails(r.L) + circle(r.L) + chrome(o.label || "monument index");
    s += imgbox(`<span class="room">${esc(r.room || "")}</span><span class="station">${o.station ? "station " + o.station : ""}</span>`);
    s += box("index", "", `<div class="w-index"><span class="s-isfor">is for</span><input id="f_index" ${ro} placeholder="index word" autocomplete="off" spellcheck="false" value="${esc(v.index || "")}"></div>`);
    s += box("primary", "s-primary", `<input id="f_primary" ${ro} placeholder="primary figure" autocomplete="off" spellcheck="false" value="${esc(v.primary || "")}">`);
    s += box("secondary", "s-secondary", `<div class="w-sec">(+<input id="f_secondary" ${ro} placeholder="secondary figure" autocomplete="off" spellcheck="false" value="${esc(v.secondary || "")}">)</div>`);
    s += box("date", "s-date", `<input id="f_date" ${ro} placeholder="date" autocomplete="off" spellcheck="false" value="${esc(v.date || "")}">`);
    s += box("relevance", "s-rel", `<textarea id="f_relevance" ${ro} placeholder="relevance" spellcheck="false">${esc(v.relevance || "")}</textarea>`);
    s += box("gist", "s-gist", `<textarea id="f_gist" ${ro} placeholder="gist" spellcheck="false">${esc(v.gist || "")}</textarea>`);
  } else if (mode === "blank") {
    s += circle(o.typed || "", o.ok);
    s += imgbox("", true);
    const k = o.kind;
    if (k === "primary") s += box("primary", "s-primary", esc(r.primary));
    if (k === "secondary") s += box("secondary", "s-secondary", `(+ ${esc(r.secondary)})`);
    if (k === "relevance") s += box("relevance", "s-rel", esc(r.relevance));
    if (k === "gist") s += box("gist", "s-gist", esc(r.gist));
    if (k === "date") s += box("date", "s-date", dateHTML(r));
  } else if (mode === "count") {
    s += rails(r.L) + circle(r.L) + chrome(o.label || "monument index");
    s += imgbox(`<span class="count" id="countNum">${o.n ?? 5}</span>`);
    s += box("index", "", `<span class="s-isfor">is for…</span>`);
  }
  return `<div class="slide" id="slide">${s}</div>`;
}

/* ---------------- tabs ---------------- */
let current = "short";
function show(view) {
  stopAll(); current = view;
  document.querySelectorAll("nav button").forEach(b => b.setAttribute("aria-selected", b.dataset.view === view));
  ({ short: shortStart, address: addressStart, family: familyStart, progress })[view]();
}
document.querySelector("nav").addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.dataset.view); });
document.addEventListener("click", e => { const g = e.target.closest("[data-goto]"); if (g) { e.preventDefault(); show(g.dataset.goto); } if (e.target.closest(".fsbtn")) { fullscreen(); const f = $("#f_index"); if (f) setTimeout(() => f.focus(), 200); } });
const sel = $("#courseSel");
sel.innerHTML = COURSES.map(c => `<option value="${c.id}">${esc(c.title)}</option>`).join("");
sel.value = store.activeId;
sel.addEventListener("change", () => { store.activeId = sel.value; save(); show(current); });
let session = null;
function finish(test) {
  const rec = { id: "s" + Date.now(), uid: store.uid, test, ts: session.ts, settings: session.settingsLog, results: session.results };
  store.history.push(rec); save();
  if (RESULTS_ENDPOINT) { try { fetch(RESULTS_ENDPOINT, { method: "POST", mode: "no-cors", body: JSON.stringify(rec) }).catch(() => {}); } catch (e) {} }
  return rec;
}
function pool(scope, range) { const cs = scope === "all" ? COURSES : [active()]; return { cs, rows: cs.flatMap(rowsOf).filter(r => inRange(r, range)) }; }
const panel = html => { $("#view").innerHTML = `<div class="panel ${html.includes('id="go"') ? "start" : ""}">${html}</div>`; };

/* =============================================================
   RECONSTRUCTION (short answer on the slide)
   ============================================================= */
function shortStart() {
  panel(`<div class="eyebrow">Reconstruction</div><h2>Rebuild each monument index</h2>
    <p class="lede">Each letter's slide comes up empty. Type what you remember where it belongs, then say how sure you are. That locks your answers and the full monument index appears. Grade yourself against it: you're judging whether you knew it, not whether you spelled it.</p>
    <div class="opts">
      <label class="opt">Letters<select id="sRange">${rangeOptions()}</select></label>
      <label class="opt">Order<select id="sOrder"><option value="seq">A to Z</option><option value="shuf">Shuffled</option></select></label>
      <label class="opt">Courses<select id="sScope"><option value="one">${esc(active().title)} only</option><option value="all">All courses, mixed</option></select></label>
      <label class="opt">Seconds per letter<input id="sLim" type="number" min="5" max="600" step="5" style="width:110px"></label>
    </div>
    <button class="btn" id="go">Start</button>
    <p class="dim small" style="margin-top:16px">The clock counts down in white and turns amber past your limit; it never stops you. <kbd>Enter</kbd> moves to the next box, <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> rate your confidence.</p>`);
  $("#sRange").value = setting("sRange", "all"); $("#sOrder").value = setting("sOrder", "seq"); $("#sScope").value = setting("sScope", "one"); $("#sLim").value = setting("sLim", 60);
  $("#go").onclick = () => {
    const range = $("#sRange").value, order = $("#sOrder").value, scope = $("#sScope").value, lim = Math.max(5, Number($("#sLim").value) || 60);
    remember({ sRange: range, sOrder: order, sScope: scope, sLim: lim });
    const p = pool(scope, range); let items = p.rows; if (order === "shuf" || p.cs.length > 1) items = shuffle(items);
    session = { ts: new Date().toISOString(), items, i: 0, results: [], lim, multi: p.cs.length > 1, settingsLog: { range, order, scope, limitS: lim } };
    shortItem();
  };
}
const ORDER = ["index", "primary", "secondary", "date", "relevance", "gist"];
function shortItem() {
  const s = session, r = s.items[s.i], label = (s.multi ? r.ctitle + " · " : "") + "monument index";
  $("#view").innerHTML = `<div class="stage" id="stage">
    <div class="bar"><span>${s.i + 1} / ${s.items.length}</span><div class="prog"><i style="width:${100 * s.i / s.items.length}%"></i></div><span class="timer" id="tm"></span><button class="btn ghost small fsbtn">Full screen</button></div>
    <div id="slideWrap">${slideHTML(r, "input", { label, station: course(r.cid).slot })}</div>
    <div class="under" id="under"><span class="dim small">How sure are you?</span>
      ${[1, 2, 3].map(n => `<button class="cb" data-c="${n}"><kbd>${n}</kbd> ${CONF[n]}</button>`).join("")}
      <span class="spacer"></span><span class="hints" id="hints"></span><button class="btn ghost small" id="hint">Hint</button></div>
  </div>`;
  const res = { cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), limitS: s.lim, hints: 0, typed: {}, firstKeyMs: {}, self: {}, auto: {} };
  liveTimer = startTimer($("#tm"), s.lim);
  const t0 = liveTimer.t0;
  const inputs = ORDER.map(k => $("#f_" + k));
  inputs.forEach((inp, n) => {
    inp.addEventListener("input", () => { if (res.firstKeyMs[ORDER[n]] == null) res.firstKeyMs[ORDER[n]] = Math.round(performance.now() - t0); });
    inp.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); n < inputs.length - 1 ? inputs[n + 1].focus() : $(".cb[data-c='3']").focus(); } });
  });
  inputs[0].focus();
  document.querySelectorAll(".cb").forEach(b => b.onclick = () => lock(r, res, Number(b.dataset.c)));
  setKeys(e => { if (!typing(e) && /^[123]$/.test(e.key)) { e.preventDefault(); lock(r, res, Number(e.key)); } });
  $("#hint").onclick = () => {
    const ladder = [`index word starts with “${r.index.charAt(0).toUpperCase()}”`, `primary figure starts with “${r.primary.charAt(0)}”`, `index word: ${r.index.toUpperCase()}`];
    if (res.hints >= ladder.length) return; res.hints++;
    $("#hints").textContent = ladder.slice(0, res.hints).join(" · ");
    if (res.hints >= ladder.length) $("#hint").disabled = true;
  };
}
function lock(r, res, conf) {
  setKeys(null);
  res.recallMs = liveTimer.stop(); liveTimer = null; res.overtime = res.recallMs > res.limitS * 1000; res.confidence = conf;
  FIELDS.forEach(f => { const v = ($("#f_" + f.key).value || "").trim(); res.typed[f.key] = v; res.auto[f.key] = bgCheck(f, v, r); });
  const tReveal = performance.now(), label = (session.multi ? r.ctitle + " · " : "") + "monument index";
  let showing = "full";
  const paint = () => { $("#slideWrap").innerHTML = showing === "full" ? slideHTML(r, "full", { label }) : slideHTML(r, "input", { label, values: res.typed, readonly: true, station: course(r.cid).slot }); };
  paint();
  $("#under").innerHTML = `<div style="width:100%">
    <div class="row" style="margin-bottom:8px"><span class="dim small">You said <b style="color:var(--fg)">${CONF[conf]}</b>${res.overtime ? ` · <span class="amber">past your limit</span>` : ""}. Grade each line against the monument.</span>
      <span class="spacer"></span><button class="btn ghost small" id="flip">Show my answers on the slide</button><button class="btn ghost small" id="allgot">All got it</button></div>
    <table class="grade"><thead><tr><th>Field</th><th>You typed</th><th></th></tr></thead><tbody>
      ${FIELDS.map(f => `<tr data-k="${f.key}"><td class="dim">${f.label}</td><td class="typed ${res.typed[f.key] ? "" : "empty"}">${esc(res.typed[f.key]) || "(blank)"}</td>
        <td style="white-space:nowrap;text-align:right"><button class="mk" data-v="1" aria-pressed="false">Got it</button> <button class="mk" data-v="0.5" aria-pressed="false">Partly</button> <button class="mk" data-v="0" aria-pressed="false">Missed</button></td></tr>`).join("")}
    </tbody></table>
    <div class="row" style="margin-top:12px"><span class="spacer"></span><button class="btn" id="nx" disabled>${session.i + 1 < session.items.length ? "Next letter" : "Finish"}</button></div></div>`;
  const ready = () => { $("#nx").disabled = !FIELDS.every(f => res.self[f.key] != null); };
  const mark = (tr, v) => { tr.querySelectorAll(".mk").forEach(x => x.setAttribute("aria-pressed", x.dataset.v === String(v))); res.self[tr.dataset.k] = v; ready(); };
  document.querySelectorAll(".grade tbody tr").forEach(tr => tr.querySelectorAll(".mk").forEach(b => b.onclick = () => mark(tr, Number(b.dataset.v))));
  $("#allgot").onclick = () => document.querySelectorAll(".grade tbody tr").forEach(tr => mark(tr, 1));
  $("#flip").onclick = () => { showing = showing === "full" ? "typed" : "full"; $("#flip").textContent = showing === "full" ? "Show my answers on the slide" : "Show the monument"; paint(); };
  $("#nx").onclick = () => {
    res.gradeMs = Math.round(performance.now() - tReveal);
    res.score = FIELDS.reduce((a, f) => a + res.self[f.key], 0);
    session.results.push(res); session.i++;
    session.i < session.items.length ? shortItem() : shortDone();
  };
}
function shortDone() {
  const rec = finish("short"), R = rec.results, multi = new Set(R.map(r => r.cid)).size > 1;
  const total = R.reduce((a, r) => a + r.score, 0);
  const nm = r => (multi ? esc(r.course) + " " : "") + `<span class="L">${r.letter}</span>`;
  const sureWrong = R.filter(r => r.confidence === 3 && r.score < 4), missed = R.filter(r => r.confidence === 1 && r.score < 3), inThere = R.filter(r => r.confidence === 2 && r.score < 4);
  const calib = [3, 2, 1].map(c => { const g = R.filter(r => r.confidence === c); return { c, n: g.length, p: g.length ? g.reduce((a, r) => a + r.score, 0) / (g.length * 6) : null }; });
  panel(`<div class="eyebrow">Reconstruction · done</div><h2>${total} of ${R.length * 6} points</h2>
    <div class="stats"><div class="stat"><b>${pct(total, R.length * 6)}</b><span>of points</span></div>
      <div class="stat"><b>${R.filter(r => r.score === 6).length}</b><span>letters complete</span></div>
      <div class="stat"><b>${R.filter(r => r.overtime).length}</b><span>past your limit</span></div></div>
    <h3>Review first</h3>
    ${sureWrong.length || missed.length || inThere.length ? "" : `<p class="dim">Nothing to re-watch. Keep practising on schedule.</p>`}
    ${sureWrong.map(r => `<div class="rx">${nm(r)} · You were sure, and it scored ${r.score}/6. These corrections stick best: re-watch it now.</div>`).join("")}
    ${missed.map(r => `<div class="rx">${nm(r)} · Scored ${r.score}/6. Re-watch before your next session.</div>`).join("")}
    ${inThere.map(r => `<div class="rx opt">${nm(r)} · It was in there but didn't ignite (${r.score}/6). Try it again tomorrow first.</div>`).join("")}
    <h3>How well you knew what you knew</h3>
    <div class="tablewrap"><table class="t"><thead><tr><th>You said</th><th>Letters</th><th>Average score</th></tr></thead><tbody>
      ${calib.map(x => `<tr><td>${CONF[x.c]}</td><td class="n">${x.n}</td><td class="n">${x.p == null ? "–" : Math.round(100 * x.p) + "%"}</td></tr>`).join("")}</tbody></table></div>
    <h3>Every letter</h3>
    <div class="tablewrap"><table class="t"><thead><tr><th></th>${FIELDS.map(f => `<th>${f.label}</th>`).join("")}<th>Sure?</th><th>Time</th><th>Score</th></tr></thead><tbody>
      ${R.map(r => `<tr><td>${nm(r)}</td>${FIELDS.map(f => `<td class="v${String(r.self[f.key]).replace(".", "")}">${esc(r.typed[f.key]) || "—"}</td>`).join("")}
        <td>${CONF[r.confidence]}</td><td class="n ${r.overtime ? "amber" : ""}">${clock(r.recallMs)}</td><td class="n">${r.score}/6</td></tr>`).join("")}</tbody></table></div>
    <div class="row" style="margin-top:18px"><button class="btn" data-goto="short">Go again</button><button class="btn ghost" data-goto="progress">Progress</button></div>`);
}

/* =============================================================
   ADDRESS: one item on a blank slide; type its letter in the circle
   ============================================================= */
function addressStart() {
  panel(`<div class="eyebrow">Address</div><h2>Where does it live?</h2>
    <p class="lede">The slide is blank except for one item, sitting where it sits on its monument index. Type the letter it belongs to; it lands in the red circle. When you mix courses, press the course number first.</p>
    <div class="opts">
      <label class="opt">Items<select id="aType"><option value="mixed">Mixed</option>${Object.entries(PROMPTS).map(([k, t]) => `<option value="${k}">${t}</option>`).join("")}</select></label>
      <label class="opt">Letters<select id="aRange">${rangeOptions()}</select></label>
      <label class="opt">Courses<select id="aScope"><option value="one">${esc(active().title)} only</option><option value="all">All courses, mixed</option></select></label>
    </div>
    <button class="btn" id="go">Start</button>`);
  $("#aType").value = setting("aType", "mixed"); $("#aRange").value = setting("aRange", "all"); $("#aScope").value = setting("aScope", "one");
  $("#go").onclick = () => {
    const type = $("#aType").value, range = $("#aRange").value, scope = $("#aScope").value;
    remember({ aType: type, aRange: range, aScope: scope });
    const p = pool(scope, range), kinds = ["primary", "secondary", "relevance", "gist"];
    session = { ts: new Date().toISOString(), courses: p.cs.map(c => c.id), i: 0, results: [], settingsLog: { type, range, scope },
      items: shuffle(p.rows).map(r => { let k = type === "mixed" ? kinds[Math.floor(Math.random() * kinds.length)] : type; if (!r[k]) k = "primary"; return { row: r, kind: k }; }) };
    addressItem();
  };
}
function addressItem() {
  const s = session, it = s.items[s.i], multi = s.courses.length > 1, right = s.results.filter(r => r.correct).length;
  $("#view").innerHTML = `<div class="stage" id="stage">
    <div class="bar"><span>${s.i + 1} / ${s.items.length}</span><div class="prog"><i style="width:${100 * s.i / s.items.length}%"></i></div><span>${right} placed</span><span class="spacer"></span><button class="btn ghost small fsbtn">Full screen</button></div>
    ${multi ? `<div class="chips">${s.courses.map((id, n) => `<button class="chip" data-n="${n}" aria-pressed="false"><kbd>${n + 1}</kbd> ${esc(course(id).title)}</button>`).join("")}</div>` : ""}
    <div id="slideWrap">${slideHTML(it.row, "blank", { kind: it.kind })}</div>
    <div id="fb" class="dim small">${multi ? "Number for the course, then the letter." : "Type a letter, A–Z."}</div></div>`;
  const t0 = performance.now();
  let pc = multi ? null : s.courses[0], pl = null, done = false;
  const pick = n => { if (n < 0 || n >= s.courses.length) return; pc = s.courses[n]; document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", Number(c.dataset.n) === n)); go(); };
  document.querySelectorAll(".chip").forEach(c => c.onclick = () => pick(Number(c.dataset.n)));
  const go = () => { if (!done && pc && pl) { done = true; addressAnswer(pc, pl, Math.round(performance.now() - t0)); } };
  setKeys(e => {
    if (done || e.metaKey || e.ctrlKey || e.altKey) return;
    if (multi && /^[1-9]$/.test(e.key)) { e.preventDefault(); pick(Number(e.key) - 1); return; }
    if (/^[a-zA-Z]$/.test(e.key)) { e.preventDefault(); pl = e.key.toLowerCase(); $("#slideWrap").innerHTML = slideHTML(it.row, "blank", { kind: it.kind, typed: pl }); go(); }
  });
}
function addressAnswer(cid, L, ms) {
  const s = session, it = s.items[s.i], r = it.row, multi = s.courses.length > 1, correct = cid === r.cid && L === r.L;
  s.results.push({ cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), kind: it.kind, prompt: r[it.kind], givenCourse: cid, givenLetter: L.toUpperCase(), correct, ms });
  setKeys(null);
  $("#fb").classList.remove("dim");
  const where = (id, l) => (multi ? esc(course(id).title) + " " : "") + `<span class="L">${l.toUpperCase()}</span>`;
  if (correct) {
    $("#slideWrap").innerHTML = slideHTML(it.row, "blank", { kind: it.kind, typed: L, ok: true });
    $("#fb").innerHTML = `<div class="feedback good">Right · ${secs(ms)}</div>`;
    liveTimeouts.push(setTimeout(() => { $("#slideWrap").innerHTML = slideHTML(r, "full", { label: (multi ? r.ctitle + " · " : "") + "monument index" }); }, 450));
    liveTimeouts.push(setTimeout(addressNext, 1700));
  } else {
    const other = rowAt(cid, L);
    $("#slideWrap").innerHTML = slideHTML(r, "full", { label: (multi ? r.ctitle + " · " : "") + "monument index" });
    $("#fb").innerHTML = `<div class="feedback bad">It lives at ${where(r.cid, r.L)}. ${other ? `You placed it at ${where(cid, L)}, which holds ${esc(other.primary)} · ${esc(other.relevance)}.` : `There's nothing at ${where(cid, L)}.`}
      <span class="spacer"></span> <button class="btn small" id="nx">Next</button> <kbd>Enter</kbd></div>`;
    $("#nx").onclick = addressNext;
    setKeys(e => { if (e.key === "Enter") { e.preventDefault(); addressNext(); } });
  }
}
function addressNext() {
  if (!session) return; stopAll(); session.i++;
  if (session.i < session.items.length) return addressItem();
  const rec = finish("address"), R = rec.results, ok = R.filter(r => r.correct), multi = new Set(R.map(r => r.cid)).size > 1;
  panel(`<div class="eyebrow">Address · done</div><h2>${ok.length} of ${R.length} placed</h2>
    <div class="stats"><div class="stat"><b>${pct(ok.length, R.length)}</b><span>accuracy</span></div>
      <div class="stat"><b>${ok.length ? secs(ok.reduce((a, r) => a + r.ms, 0) / ok.length) : "–"}</b><span>average time when right</span></div></div>
    <div class="tablewrap"><table class="t"><thead><tr><th>Item</th><th>Lives at</th><th>You said</th><th>Time</th></tr></thead><tbody>
    ${R.map(r => `<tr><td>${esc(r.prompt)}<div class="dim small">${PROMPTS[r.kind]}</div></td><td>${multi ? esc(r.course) + " " : ""}<span class="L">${r.letter}</span></td>
      <td class="${r.correct ? "v1" : "v0"}">${multi ? esc(course(r.givenCourse).title) + " " : ""}${r.givenLetter}</td><td class="n">${secs(r.ms)}</td></tr>`).join("")}</tbody></table></div>
    <div class="row" style="margin-top:18px"><button class="btn" data-goto="address">Go again</button><button class="btn ghost" data-goto="progress">Progress</button></div>`);
}

/* =============================================================
   LIVING ROOM: 5-4-3-2-1 like the videos, then the monument
   ============================================================= */
function familyStart() {
  panel(`<div class="eyebrow">Living room</div><h2>Recite together</h2>
    <p class="lede">For the TV. Everyone recites aloud during the countdown, then the monument index appears. The countdown always runs 5 to 1; your seconds per letter set how long each number stays up.</p>
    <div class="opts">
      <label class="opt">Letters<select id="fRange">${rangeOptions()}</select></label>
      <label class="opt">Order<select id="fOrder"><option value="seq">A to Z</option><option value="shuf">Shuffled</option></select></label>
      <label class="opt">Seconds per letter<input id="fLim" type="number" min="5" max="120" step="5" style="width:110px"></label>
      <label class="opt">Monument stays up (s)<input id="fHold" type="number" min="2" max="60" step="1" style="width:110px"></label>
      <label class="chk"><input type="checkbox" id="fAuto"> Advance on its own, like the video</label>
    </div>
    <div class="row"><button class="btn" id="go">Start</button><span class="dim small">During play: <kbd>Space</kbd> reveal now · <kbd>G</kbd> <kbd>P</kbd> <kbd>M</kbd> got / partly / missed · <kbd>→</kbd> next · <kbd>F</kbd> full screen</span></div>`);
  $("#fRange").value = setting("fRange", "all"); $("#fOrder").value = setting("fOrder", "seq"); $("#fLim").value = setting("fLim", 10);
  $("#fHold").value = setting("fHold", 5); $("#fAuto").checked = setting("fAuto", true);
  $("#go").onclick = () => {
    const range = $("#fRange").value, order = $("#fOrder").value, lim = Math.max(5, Number($("#fLim").value) || 10), hold = Math.max(2, Number($("#fHold").value) || 5), auto = $("#fAuto").checked;
    remember({ fRange: range, fOrder: order, fLim: lim, fHold: hold, fAuto: auto });
    let items = rowsOf(active()).filter(r => inRange(r, range)); if (order === "shuf") items = shuffle(items);
    session = { ts: new Date().toISOString(), items, i: 0, results: [], lim, hold, auto, settingsLog: { range, order, limitS: lim, holdS: hold, auto } };
    $("#view").innerHTML = `<div class="stage" id="stage"><div id="slideWrap"></div>
      <div class="bar"><span id="famInfo"></span><span class="spacer"></span><span id="famMark" class="dim"></span>
      <button class="btn ghost small" id="fs">Full screen</button><button class="btn ghost small" id="stop">Stop</button></div></div>`;
    $("#fs").onclick = fullscreen; $("#stop").onclick = familyDone;
    familyItem();
  };
}
function fullscreen() { const st = $("#stage"); try { if (document.fullscreenElement) document.exitFullscreen(); else st.requestFullscreen().catch(() => {}); } catch (e) {} }
function familyItem() {
  stopAll();
  const s = session, r = s.items[s.i], step = s.lim * 1000 / 5;
  const res = { cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), limitS: s.lim, mark: null };
  $("#famInfo").textContent = `${s.i + 1} / ${s.items.length}`; $("#famMark").textContent = "";
  $("#slideWrap").innerHTML = slideHTML(r, "count", { n: 5 });
  let n = 5, revealed = false;
  const t0 = performance.now();
  const reveal = () => {
    if (revealed) return; revealed = true; liveTimeouts.forEach(clearTimeout); liveTimeouts = [];
    res.revealMs = Math.round(performance.now() - t0);
    $("#slideWrap").innerHTML = slideHTML(r, "full");
    if (s.auto) liveTimeouts.push(setTimeout(next, s.hold * 1000));
  };
  const next = () => { s.results.push(res); s.i++; s.i < s.items.length ? familyItem() : familyDone(); };
  const tick = () => { n--; if (n >= 1) { const el = $("#countNum"); if (el) el.textContent = n; liveTimeouts.push(setTimeout(tick, step)); } else reveal(); };
  liveTimeouts.push(setTimeout(tick, step));
  setKeys(e => {
    if (e.key === " ") { e.preventDefault(); reveal(); }
    else if (/^[gpm]$/i.test(e.key) && revealed) { res.mark = { g: 1, p: 0.5, m: 0 }[e.key.toLowerCase()]; $("#famMark").textContent = { g: "got it", p: "partly", m: "missed" }[e.key.toLowerCase()]; if (!s.auto) next(); }
    else if (e.key === "ArrowRight" && revealed) { e.preventDefault(); next(); }
    else if (/^f$/i.test(e.key)) fullscreen();
  });
}
function familyDone() {
  stopAll(); try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {}
  if (!session || !session.results.length) return familyStart();
  const rec = finish("family"), R = rec.results, marked = R.filter(x => x.mark != null), pts = marked.reduce((a, x) => a + x.mark, 0);
  panel(`<div class="eyebrow">Living room · done</div><h2>${R.length} letters recited</h2>
    ${marked.length ? `<div class="stats"><div class="stat"><b>${pct(pts, marked.length)}</b><span>of marked letters</span></div></div>
      <p class="dim">Worth another round: ${marked.filter(x => x.mark < 1).map(x => `<span class="L">${x.letter}</span>`).join(" ") || "none"}</p>` : `<p class="dim">No letters were marked this time.</p>`}
    <div class="row" style="margin-top:18px"><button class="btn" data-goto="family">Again</button><button class="btn ghost" data-goto="progress">Progress</button></div>`);
}

/* =============================================================
   PROGRESS
   ============================================================= */
function progress() {
  const c = active(), rows = rowsOf(c), H = store.history;
  const st = {}; rows.forEach(r => st[r.L.toUpperCase()] = { aN: 0, aOk: 0, sN: 0, sPts: 0, fN: 0, fPts: 0 });
  const mix = {}, calib = { 1: [0, 0], 2: [0, 0], 3: [0, 0] }; let n = 0;
  H.forEach(h => { let touched = false; h.results.forEach(r => { if (r.cid !== c.id || !st[r.letter]) return; touched = true; const x = st[r.letter];
    if (h.test === "address") { x.aN++; if (r.correct) x.aOk++; else { const k = `${r.letter}|${r.givenCourse}|${r.givenLetter}`; mix[k] = (mix[k] || 0) + 1; } }
    if (h.test === "short") { x.sN++; x.sPts += r.score; calib[r.confidence][0]++; calib[r.confidence][1] += r.score / 6; }
    if (h.test === "family" && r.mark != null) { x.fN++; x.fPts += r.mark; } }); if (touched) n++; });
  const lvl = x => { const p = []; if (x.aN) p.push(x.aOk / x.aN); if (x.sN) p.push(x.sPts / (x.sN * 6)); if (x.fN) p.push(x.fPts / x.fN);
    if (!p.length) return ""; const v = p.reduce((a, b) => a + b) / p.length; return v >= .85 ? "s3" : v >= .5 ? "s2" : "s1"; };
  const top = Object.entries(mix).sort((a, b) => b[1] - a[1]).slice(0, 8);
  panel(`<div class="eyebrow">Progress</div><h2>${esc(c.title)}</h2>
    <p class="lede">${n ? `${n} session${n > 1 ? "s" : ""} in this browser.` : "No sessions yet."} Blue border: strong. Amber: shaky. Red: weak.</p>
    <div class="tiles">${rows.map(r => { const x = st[r.L.toUpperCase()]; return `<div class="tile ${lvl(x)}"><span class="t">${r.L.toUpperCase()}</span>
      <span class="m">recon ${x.sN ? (x.sPts / x.sN).toFixed(1) + "/6" : "–"}</span><span class="m">addr ${x.aN ? pct(x.aOk, x.aN) : "–"}</span><span class="m">room ${x.fN ? pct(x.fPts, x.fN) : "–"}</span></div>`; }).join("")}</div>
    <h3>How well you knew what you knew</h3>
    <div class="tablewrap"><table class="t"><thead><tr><th>You said</th><th>Letters</th><th>Average score</th></tr></thead><tbody>
      ${[3, 2, 1].map(k => `<tr><td>${CONF[k]}</td><td class="n">${calib[k][0]}</td><td class="n">${calib[k][0] ? Math.round(100 * calib[k][1] / calib[k][0]) + "%" : "–"}</td></tr>`).join("")}</tbody></table></div>
    <h3>Address mix-ups</h3>
    ${top.length ? `<div class="tablewrap"><table class="t"><thead><tr><th>Lives at</th><th>Placed at</th><th>Times</th></tr></thead><tbody>
      ${top.map(([k, t]) => { const [Lt, gc, gl] = k.split("|"), a = rowAt(c.id, Lt.toLowerCase()), b = rowAt(gc, gl.toLowerCase()), cross = gc !== c.id;
        return `<tr><td><span class="L">${Lt}</span> ${esc(a ? a.primary : "")}</td><td>${cross ? esc((course(gc) || {}).title || "") + " " : ""}<span class="L">${gl}</span> ${esc(b ? b.primary : "(nothing there)")}${cross ? ` <span class="amber small">other course</span>` : ""}</td><td class="n">${t}</td></tr>`; }).join("")}
    </tbody></table></div>` : `<p class="dim">None yet.</p>`}
    <div class="row" style="margin-top:22px"><button class="btn ghost" id="csv" ${H.length ? "" : "disabled"}>Copy all results as spreadsheet rows</button>
      <button class="btn ghost" id="clr" ${H.length ? "" : "disabled"}>Clear history</button><span class="status" id="st"></span></div><div id="cf"></div>`);
  $("#csv").onclick = () => copy(toCSV(H), $("#st"));
  $("#clr").onclick = () => { $("#cf").innerHTML = `<div class="confirm">Delete every saved session in this browser? This can't be undone.
    <button class="btn small danger" id="y">Delete</button><button class="btn small ghost" id="no">Cancel</button></div>`;
    $("#y").onclick = () => { store.history = []; save(); progress(); }; $("#no").onclick = () => { $("#cf").innerHTML = ""; }; };
}
function toCSV(H) {
  const head = ["session_time", "test", "course", "letter", "item_type", "item", "given_course", "given_letter", "correct", "confidence", "limit_s", "recall_ms", "overtime", "grade_ms", "hints",
    ...FIELDS.map(f => "typed_" + f.key), ...FIELDS.map(f => "firstkey_ms_" + f.key), ...FIELDS.map(f => "self_" + f.key), ...FIELDS.map(f => "auto_" + f.key), "score", "room_mark", "anon_id"];
  const q = v => { v = v == null ? "" : String(v); return /[",\n\t]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v; };
  const out = [head.join(",")];
  H.forEach(h => h.results.forEach(r => { const A = h.test === "address", S = h.test === "short";
    out.push([h.ts, h.test, r.course, r.letter, A ? r.kind : "", A ? r.prompt : "", A ? ((course(r.givenCourse) || {}).title || r.givenCourse) : "", A ? r.givenLetter : "", A ? (r.correct ? 1 : 0) : "",
      r.confidence ?? "", r.limitS ?? "", A ? r.ms : (r.recallMs ?? r.revealMs ?? ""), r.overtime == null ? "" : (r.overtime ? 1 : 0), r.gradeMs ?? "", r.hints ?? "",
      ...FIELDS.map(f => S ? r.typed[f.key] : ""), ...FIELDS.map(f => S ? r.firstKeyMs[f.key] ?? "" : ""), ...FIELDS.map(f => S ? r.self[f.key] : ""), ...FIELDS.map(f => S ? r.auto[f.key] ?? "" : ""),
      S ? r.score : "", h.test === "family" ? (r.mark ?? "") : "", h.uid].map(q).join(",")); }));
  return out.join("\n");
}
function copy(text, el) {
  const ok = () => { el.className = "status"; el.textContent = "Copied. Paste into a spreadsheet."; };
  const fb = () => { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); let g = false; try { g = document.execCommand("copy"); } catch (e) {} ta.remove();
    g ? ok() : (el.className = "status err", el.textContent = "This browser blocked copying."); };
  try { navigator.clipboard.writeText(text).then(ok, fb); } catch (e) { fb(); }
}

show("short");

})();
