/* The Monuments: practice program. Course content is supplied by the page as window.RR_COURSES. */
(function(){
var mount = document.getElementById("rrapp"); if (!mount) return;
var st = document.createElement("style"); st.textContent = "#rrapp *{font-weight:inherit;color:inherit;font-family:inherit;font-size:inherit;letter-spacing:normal;text-transform:none;line-height:inherit;margin:0;text-decoration:none}#rrapp p{margin:0}#rrapp h1,#rrapp h2,#rrapp h3{font-size:inherit}#rrapp{\n  --bg:#000; --panel:#0D0D0D; --raise:#171717; --line:#2E2E2E; --fg:#FFF; --dim:#9C9C9C;\n  --red:#FF2B2B; --blue:#2F7BFF; --amber:#FFB300;\n  --s-red:#FF0000; --s-blue:#00B0F0; --s-ink:#000; --s-card:#FFF; --s-wait:#F1F1F1;\n  --font:\"Courier New\",\"Courier Prime\",Courier,ui-monospace,monospace;\n  color-scheme:dark;\n}\n#rrapp,#rrapp *{box-sizing:border-box}\n#rrapp,#rrapp{background:var(--bg);color:var(--fg)}\n#rrapp{font-family:var(--font);font-weight:700;font-size:15px;line-height:1.45;padding:0 16px}\n#rrapp button,#rrapp input,#rrapp select,#rrapp textarea{font-family:var(--font);font-weight:700}\n#rrapp .wrap{max-width:1180px;margin:0 auto;padding-block:20px 60px;display:flex;flex-direction:column;gap:14px}\n#rrapp header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}\n#rrapp .brand{display:flex;align-items:center;gap:14px;flex-wrap:wrap}\n#rrapp .brand h1{font-size:21px;margin:0}\n#rrapp .brand h1 span{color:var(--red)}\n#rrapp select,#rrapp input[type=number]{font-size:15px;color:var(--fg);background:var(--raise);border:1px solid var(--line);border-radius:4px;padding:6px 8px}\n#rrapp nav{display:flex;gap:2px;flex-wrap:wrap;border:1px solid var(--line);border-radius:4px;padding:3px}\n#rrapp nav button{font-size:13px;border:0;background:transparent;color:var(--dim);padding:7px 12px;border-radius:3px;cursor:pointer}\n#rrapp nav button[aria-selected=\"true\"]{background:var(--fg);color:var(--bg)}\n#rrapp :focus-visible{outline:2px solid var(--blue);outline-offset:2px}\n#rrapp .panel{background:#FFF;color:#000;color-scheme:light;border:1px solid var(--line);border-radius:6px;padding:28px}\n#rrapp .panel .lede,#rrapp .panel .dim,#rrapp .panel label.opt,#rrapp .panel label.chk,#rrapp .panel .stat span,#rrapp .panel .tile .m,#rrapp .panel table.t th{color:#000}\n#rrapp .panel select,#rrapp .panel input[type=number]{background:#FFF;color:#000;border:1px solid #000}\n#rrapp .panel .btn.ghost{color:#000;border-color:#000}\n#rrapp .panel table.t th,#rrapp .panel table.t td{border-bottom-color:#DDD}\n#rrapp .panel kbd{background:#F2F2F2;color:#000;border-color:#BBB}\n#rrapp .panel .rx{background:#FFECEC;color:#000}\n#rrapp .panel .rx.opt{background:#FFF4D6}\n#rrapp .panel .confirm{background:#FFECEC;color:#000}\n#rrapp .panel .amber,#rrapp .panel .v05{color:#B07A00}\n#rrapp .panel .tile{border-color:#DDD}\n#rrapp .panel.start{text-align:center}\n#rrapp .panel.start .lede{margin-left:auto;margin-right:auto}\n#rrapp .panel.start .opts,#rrapp .panel.start .row{justify-content:center}\n#rrapp .eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}\n#rrapp h2{font-size:21px;margin:4px 0 8px;text-wrap:balance}\n#rrapp h3{font-size:15px;margin:24px 0 8px}\n#rrapp .lede{color:var(--dim);margin:0 0 18px;max-width:70ch}\n#rrapp .opts{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end;margin-bottom:20px}\n#rrapp label.opt{display:flex;flex-direction:column;gap:5px;font-size:12px;color:var(--dim)}\n#rrapp label.chk{display:flex;gap:8px;align-items:center;font-size:13px;color:var(--fg)}\n#rrapp .btn{font-size:14px;border:2px solid var(--blue);border-radius:4px;padding:7px 16px;cursor:pointer;background:var(--blue);color:#fff}\n#rrapp .btn.ghost{background:transparent;border-color:var(--line);color:var(--fg)}\n#rrapp .btn.small{padding:4px 10px;font-size:12.5px}\n#rrapp .btn.danger{background:var(--red);border-color:var(--red)}\n#rrapp .btn:disabled{opacity:.4;cursor:not-allowed}\n#rrapp .row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n#rrapp .spacer{flex:1}\n#rrapp .dim{color:var(--dim)}\n#rrapp .small{font-size:12.5px}\n#rrapp kbd{font-family:var(--font);font-size:12px;border:1px solid var(--line);border-bottom-width:2px;border-radius:3px;padding:0 5px;background:var(--raise);color:var(--fg)}\n#rrapp .slide{position:relative;width:100%;aspect-ratio:16/9;background:#000;container-type:inline-size;--pt:calc(100cqw / 960);\n  font-family:var(--font);font-weight:700;color:var(--s-ink);user-select:none;border-radius:4px;overflow:hidden}\n#rrapp .slide .card{position:absolute;background:var(--s-card);border-radius:calc(var(--pt)*9)}\n#rrapp .slide .el{position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.15;min-width:0}\n#rrapp .slide .rail{position:absolute;width:2.2%;height:4%;border-radius:50%;background:#fff;color:#000;display:flex;align-items:center;justify-content:center;font-size:calc(var(--pt)*10)}\n#rrapp .slide .rail.on{background:var(--s-blue);color:#fff}\n#rrapp .slide .circle{position:absolute;border-radius:50%;background:var(--s-red);color:#fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--pt)*19)}\n#rrapp .slide .circle.ok{background:var(--s-blue)}\n#rrapp .slide .imgbox{position:absolute;border-radius:calc(var(--pt)*8);overflow:hidden;background:var(--s-wait);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:calc(var(--pt)*6)}\n#rrapp .slide .imgbox.blank{background:transparent}\n#rrapp .slide .imgbox img{width:100%;height:100%;object-fit:cover;display:block}\n#rrapp .slide .imgbox .room{font-size:calc(var(--pt)*18);color:#9A9A9A}\n#rrapp .slide .imgbox .station{font-size:calc(var(--pt)*10);color:#B5B5B5}\n#rrapp .slide .imgbox .count{font-size:calc(var(--pt)*190);line-height:1;color:var(--s-red)}\n#rrapp .slide .tiny{font-size:calc(var(--pt)*6.5);justify-content:flex-start}\n#rrapp .slide .key b{color:var(--s-red)}\n#rrapp .s-isfor{font-size:calc(var(--pt)*12)}\n#rrapp .s-word{font-size:calc(var(--pt)*16);color:var(--s-red)}\n#rrapp .s-primary{font-size:calc(var(--pt)*14)}\n#rrapp .s-secondary{font-size:calc(var(--pt)*12)}\n#rrapp .s-date{font-size:calc(var(--pt)*12);color:var(--s-blue);flex-direction:column}\n#rrapp .s-date sup{color:var(--s-red);font-size:.75em;vertical-align:.45em;line-height:0}\n#rrapp .s-date .era{color:var(--s-red)}\n#rrapp .s-rel{font-size:calc(var(--pt)*16);color:var(--s-red)}\n#rrapp .s-gist{font-size:calc(var(--pt)*14);color:var(--s-blue)}\n#rrapp .slide .fade{animation:fadein .35s ease-out}\n@keyframes fadein{from{opacity:0}to{opacity:1}}\n#rrapp .slide input,#rrapp .slide textarea{font:inherit;color:inherit;background:#F7F7F7;border:1px dashed #B9B9B9;border-radius:calc(var(--pt)*3);\n  text-align:center;padding:calc(var(--pt)*2) calc(var(--pt)*3);width:100%;min-width:0;resize:none;outline:none}\n#rrapp .slide input:focus,#rrapp .slide textarea:focus{border:1px solid var(--s-blue);background:#fff}\n#rrapp .slide input::placeholder,#rrapp .slide textarea::placeholder{color:#C4C4C4;font-size:.8em}\n#rrapp .slide input[readonly],#rrapp .slide textarea[readonly]{background:#FFF8E1;border-style:solid;border-color:#E9D9A6}\n#rrapp .slide .w-index{display:flex;align-items:center;gap:calc(var(--pt)*4);width:100%}\n#rrapp .slide .w-index input{flex:1;text-transform:uppercase;color:var(--s-red);font-size:calc(var(--pt)*16)}\n#rrapp .slide .w-sec{display:flex;align-items:center;gap:calc(var(--pt)*3);width:100%}\n#rrapp .slide textarea{height:100%}\n#rrapp .bar{display:flex;align-items:center;gap:14px;font-size:13px;color:var(--dim);font-variant-numeric:tabular-nums}\n#rrapp .prog{height:3px;background:var(--line);flex:1;max-width:340px}\n#rrapp .prog i{display:block;height:100%;background:var(--fg)}\n#rrapp .timer{margin-left:auto;font-size:22px;color:var(--fg);font-variant-numeric:tabular-nums;min-width:4.5ch;text-align:right}\n#rrapp .timer.over{color:var(--amber)}\n#rrapp .timer.stopped{opacity:.55}\n#rrapp .under{display:flex;flex-wrap:wrap;gap:10px;align-items:center}\n#rrapp .cb{border:2px solid var(--fg);background:transparent;color:var(--fg);border-radius:4px;padding:8px 13px;cursor:pointer;font-size:14px}\n#rrapp .cb:hover{background:var(--fg);color:var(--bg)}\n#rrapp .hints{font-size:13px;color:var(--amber)}\n#rrapp .grade{width:100%;border-collapse:collapse;font-size:13.5px}\n#rrapp .grade td,#rrapp .grade th{padding:7px 8px;border-bottom:1px solid var(--line);text-align:left;vertical-align:middle}\n#rrapp .grade th{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}\n#rrapp .grade td.typed{color:var(--fg)}\n#rrapp .grade td.typed.empty{color:var(--dim)}\n#rrapp .mk{font-size:12.5px;border:2px solid var(--line);border-radius:3px;padding:3px 9px;cursor:pointer;background:transparent;color:var(--dim)}\n#rrapp .mk[aria-pressed=\"true\"][data-v=\"1\"]{border-color:var(--blue);background:var(--blue);color:#fff}\n#rrapp .mk[aria-pressed=\"true\"][data-v=\"0.5\"]{border-color:var(--amber);background:var(--amber);color:#000}\n#rrapp .mk[aria-pressed=\"true\"][data-v=\"0\"]{border-color:var(--red);background:var(--red);color:#fff}\n#rrapp .chips{display:flex;gap:8px;flex-wrap:wrap}\n#rrapp .chip{border:2px solid var(--line);background:transparent;color:var(--fg);border-radius:4px;padding:5px 11px;cursor:pointer;font-size:13.5px}\n#rrapp .chip[aria-pressed=\"true\"]{border-color:var(--fg);background:var(--fg);color:var(--bg)}\n#rrapp .feedback{border-left:4px solid;padding:9px 13px;font-size:15px}\n#rrapp .feedback.good{border-color:var(--blue);background:#0A1630}\n#rrapp .feedback.bad{border-color:var(--red);background:#2A0A0A}\n#rrapp .L{color:var(--red)}\n#rrapp .stats{display:flex;flex-wrap:wrap;gap:30px;margin:8px 0 16px}\n#rrapp .stat b{display:block;font-size:30px;font-variant-numeric:tabular-nums}\n#rrapp .stat span{font-size:12px;color:var(--dim)}\n#rrapp .tablewrap{overflow-x:auto}\n#rrapp table.t{border-collapse:collapse;width:100%;font-size:13.5px}\n#rrapp table.t th,#rrapp table.t td{text-align:left;padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}\n#rrapp table.t th{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}\n#rrapp td.n{font-variant-numeric:tabular-nums;white-space:nowrap}\n#rrapp .v1{color:var(--blue)}\n#rrapp .v05{color:var(--amber)}\n#rrapp .v0{color:var(--red)}\n#rrapp .amber{color:var(--amber)}\n#rrapp .rx{border-left:4px solid var(--red);padding:8px 13px;margin:8px 0;background:#2A0A0A}\n#rrapp .rx.opt{border-color:var(--amber);background:#2A1F00}\n#rrapp .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px;margin:12px 0}\n#rrapp .tile{border:2px solid var(--line);border-radius:4px;padding:8px 10px;display:flex;flex-direction:column;gap:1px}\n#rrapp .tile .t{font-size:24px;line-height:1;color:var(--red)}\n#rrapp .tile .m{font-size:12px;color:var(--dim);font-variant-numeric:tabular-nums}\n#rrapp .tile.s3{border-color:var(--blue)}\n#rrapp .tile.s2{border-color:var(--amber)}\n#rrapp .tile.s1{border-color:var(--red)}\n#rrapp .status{font-size:13px;color:var(--blue)}\n#rrapp .status.err{color:var(--red)}\n#rrapp .confirm{border-left:4px solid var(--red);background:#2A0A0A;padding:10px 14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:12px}\n#rrapp .stage{display:flex;flex-direction:column;gap:12px}\n#rrapp .stage>*{width:min(100%, max(560px, calc((100vh - 230px) * 16 / 9)));margin-inline:auto}\n#rrapp .stage:fullscreen{background:#000;padding:2vh 2vw;justify-content:center}\n#rrapp .stage:fullscreen>*{width:min(100%, calc((100vh - 130px) * 16 / 9))}\n#rrapp .panel{position:relative}\n#rrapp .gocircle{display:inline-flex;align-items:center;justify-content:center;width:104px;height:104px;border-radius:50%;border:0;background:var(--blue);color:#fff;font-size:18px;cursor:pointer;margin-top:4px}\n#rrapp .gocircle.big{width:190px;height:190px;font-size:30px;margin-top:18px}\n#rrapp .gocircle:hover{filter:brightness(1.12)}\n#rrapp .helpq{position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;border:0;background:var(--red);color:#fff;font-size:17px;cursor:pointer;line-height:1}\n#rrapp .help{text-align:left;max-width:64ch;margin:6px auto 20px;border-left:4px solid var(--blue);padding:10px 14px;background:#F2F8FF;color:#000;font-size:14px}\n#rrapp .help p+p{margin-top:8px}\n#rrapp .fld{display:flex;flex-direction:column;gap:5px;font-size:12px;text-align:left}\n#rrapp .info{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:var(--blue);color:#fff;font-size:10.5px;margin-left:6px;position:relative;cursor:pointer;vertical-align:1px}\n#rrapp .info .tip{display:none;position:absolute;bottom:140%;left:50%;transform:translateX(-50%);width:230px;background:#000;color:#fff;padding:8px 10px;border-radius:4px;font-size:12px;line-height:1.4;z-index:5;text-align:left}\n#rrapp .info:hover .tip,#rrapp .info:focus .tip,#rrapp .info.open .tip{display:block}\n#rrapp .legend{font-size:12.5px;margin:4px 0 10px}\n#rrapp table.t td.dot{text-align:center;font-size:16px}\n#rrapp table.t th.c{text-align:center}\n#rrapp .slide .imgbox.white{background:#fff}\n#rrapp .slide .plate{position:absolute;inset:0;opacity:0;transform:scale(.93);transition:opacity .75s ease .1s,transform .9s cubic-bezier(.2,.7,.2,1)}\n#rrapp .slide .ctr{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#fff;transition:opacity .55s ease,transform .8s cubic-bezier(.2,.7,.2,1)}\n#rrapp .slide .ctr-isfor{font-size:calc(var(--pt)*30);color:#000}\n#rrapp .slide .ctr-isfor b{color:var(--s-red)}\n#rrapp .slide .ctr .count{font-size:calc(var(--pt)*150);line-height:1;color:var(--s-red)}\n#rrapp .slide.revealed .plate{opacity:1;transform:none}\n#rrapp .slide.revealed .ctr{opacity:0;transform:scale(1.15)}\n#rrapp .slide .asp{cursor:pointer}\n#rrapp .slide .asp .ask{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border:2px dashed #BDBDBD;border-radius:calc(var(--pt)*5);\n  background:#fff;color:#8E8E8E;font-size:calc(var(--pt)*11);letter-spacing:.04em;transition:background .15s,border-color .15s,color .15s,opacity .5s}\n#rrapp .slide .asp:hover .ask{border-color:var(--s-blue);color:var(--s-blue)}\n#rrapp .slide .asp.on .ask{background:var(--s-blue);border:2px solid var(--s-blue);color:#fff}\n#rrapp .slide .asp .ans{position:absolute;inset:0;display:flex;flex-direction:inherit;align-items:center;justify-content:center;text-align:center;opacity:0;transition:opacity .6s ease .15s}\n#rrapp .slide.revealed .asp .ask{opacity:0}\n#rrapp .slide.revealed .asp .ans{opacity:1}\n#rrapp .slide.revealed .asp{cursor:default}\n#rrapp .slide.revealed .asp.on{cursor:pointer}\n#rrapp .slide.revealed .asp.on::after{content:\"\";position:absolute;inset:calc(var(--pt)*-3);border:2px solid var(--s-blue);border-radius:calc(var(--pt)*6);transition:border-color .2s}\n#rrapp .slide.revealed .asp.on::before{content:\"\u2713\";position:absolute;top:calc(var(--pt)*-8);right:calc(var(--pt)*-8);width:calc(var(--pt)*16);height:calc(var(--pt)*16);border-radius:50%;\n  background:var(--s-blue);color:#fff;font-size:calc(var(--pt)*10);display:flex;align-items:center;justify-content:center;z-index:2}\n#rrapp .slide.revealed .asp.on.undo::after{border:2px dashed #C9C9C9}\n#rrapp .slide.revealed .asp.on.undo::before{content:\"\u21ba\";background:#C9C9C9}\n#rrapp .simple header nav,#rrapp .simple #courseSel{display:none}\n#rrapp .nofs .fsbtn{display:none}\n#rrapp .consent{max-width:62ch;margin:0 auto 18px;text-align:left;font-size:14.5px}\n#rrapp .consent p+p{margin-top:10px}\n#rrapp .consent .code,#rrapp .consent-line .code{color:var(--blue);letter-spacing:.06em}\n#rrapp .consent-row{justify-content:center;gap:22px}\n#rrapp .gocircle.cyes,#rrapp .gocircle.cno{width:150px;height:150px;font-size:16px;line-height:1.3}\n#rrapp .gocircle.cno{background:#fff;color:#000;border:3px solid #000}\n#rrapp .gocircle:disabled{opacity:.35;cursor:not-allowed;filter:none}\n#rrapp .agebox{display:flex;gap:10px;align-items:flex-start;margin-top:14px;padding:10px 12px;border:2px solid #000;border-radius:6px;font-size:14px;cursor:pointer}\n#rrapp .agebox input{width:18px;height:18px;margin-top:1px;flex:none}\n#rrapp .panel a{color:var(--blue);text-decoration:underline}\n#rrapp .consent-line{font-size:14px}\n#rrapp .slide .asp .ask{inset:calc(var(--pt)*2.5) 0}\n#rrapp .tapgrid{display:none;grid-template-columns:1fr 1fr;gap:8px}\n#rrapp .tap{font-family:var(--font);font-weight:700;font-size:16px;padding:16px 8px;border:2px dashed #6A6A6A;border-radius:6px;background:#111;color:#fff;cursor:pointer;touch-action:manipulation}\n#rrapp .tap.on{background:var(--s-blue);border:2px solid var(--s-blue)}\n#rrapp .tapgrid.checking .tap:not(.on){opacity:.3}\n#rrapp .tapgrid.checking .tap.on::before{content:\"\u2713 \"}\n#rrapp .tapgrid.checking .tap.on.undo{background:transparent;border:2px dashed #6A6A6A}\n#rrapp .tapgrid.checking .tap.on.undo::before{content:\"\u21ba \"}\n@media (max-width:820px){#rrapp .tapgrid{display:grid}\n#rrapp .stage>*{width:100%}\n#rrapp .bar{flex-wrap:wrap;row-gap:8px}\n#rrapp .bar>span{white-space:nowrap}\n#rrapp #rCue{order:9;width:100%;white-space:normal}\n#rrapp .bar .prog{min-width:60px}}\n@media (max-width:680px){#rrapp .panel{padding:16px}}\n@media (prefers-reduced-motion:reduce){#rrapp,#rrapp *{animation:none!important;transition:none!important}}\n\n"; document.head.appendChild(st);
var fl = document.createElement("link"); fl.rel = "stylesheet"; fl.href = "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap"; document.head.appendChild(fl);
mount.classList.add("rr"); mount.innerHTML = "<div class=\"wrap\">\n  <header>\n    <div class=\"brand\"><h1 id=\"appTitle\">The Monuments</h1><select id=\"courseSel\" aria-label=\"Course\"></select></div>\n    <nav role=\"tablist\" aria-label=\"Modes\">\n      <button role=\"tab\" data-view=\"retrieval\">Retrieval practice</button>\n      <button role=\"tab\" data-view=\"address\">Monument address</button>\n      <button role=\"tab\" data-view=\"short\">Monument reconstruction</button>\n      <button role=\"tab\" data-view=\"progress\">Progress</button>\n    </nav>\n  </header>\n  <main id=\"view\"></main>\n</div>";

/* =============================================================
   RECORD PRACTICE (v3): practice on the monument index itself.
   COURSES is written in by tools/make_practice.py from each course workbook.
   ============================================================= */
const COURSES = (typeof window !== "undefined" && window.RR_COURSES) || [];
// Simple mode (set by the page): no settings, one big Begin button, retrieval practice on every letter given.
// { title: "Chapter 3 · F–O", seconds: 15 }
const SIMPLE = (typeof window !== "undefined" && window.RR_SIMPLE) || /*__SIMPLE__*/null;
// Research data: the Google Apps Script web app behind the "monuments data" sheet. Nothing is sent
// unless the learner has seen the notice and chosen to share (store.consent === "yes").
const RESULTS_ENDPOINT = (typeof window !== "undefined" && window.RR_ENDPOINT) || "https://script.google.com/macros/s/AKfycbywsmiSChYxsX8wV3AC3b4w5rARGOdySYZB-0_Jwd5_VUkiYgThtiy21_-ulzGT-aJe/exec";
const DATA_PAGE = (typeof window !== "undefined" && window.RR_DATA_PAGE) || "";
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
const ASPECTS = ["index", "primary", "secondary", "date", "relevance", "gist"];
const ASK = { index: "index word", primary: "primary figure", secondary: "secondary figure", date: "date", relevance: "relevance", gist: "gist" };
const FONT = { index: "", primary: "s-primary", secondary: "s-secondary", date: "s-date", relevance: "s-rel", gist: "s-gist" };
const aspectsOf = r => ASPECTS.filter(k => String(r[k] || "").trim());
const HELP = {
  retrieval: [
    "A blank monument comes up with a countdown from 5 to 1. Before it runs out, tap each part you can remember: index word, primary figure, secondary figure, date, relevance, gist. Say them aloud if you like. Nobody types anything.",
    "When the countdown ends, the monument appears. Check yourself against it: if you tapped something you didn't really have, tap it again to undo it. Then go on to the next letter.",
    "Keys, for whoever runs it on a TV: 1 to 6 tap the parts in order, Space reveals early or moves on, F is full screen."],
  address: [
    "One item from a monument appears alone on a blank slide, in the place it sits on its monument index. Type the letter it belongs to; it lands in the red circle.",
    "A right answer shows the monument for a moment and moves on. A wrong one shows where the item lives and what you placed it on.",
    "When you mix courses, press the course number first, then the letter."],
  short: [
    "Each letter's monument index comes up empty. Type what you remember where it belongs. Enter moves to the next box.",
    "Then say how sure you are (keys 1, 2, 3). That locks your answers, and the full monument appears. Grade each line yourself: you're judging whether you knew it, not whether you spelled it.",
    "The clock turns amber past your limit; it never stops you. Hint gives you a first letter if you're stuck."],
  progress: [
    "Each tile is a letter, coloured by how it has gone across every practice: blue border strong, amber shaky, red weak.",
    "Everything is saved in this browser only. Copy the results as spreadsheet rows to keep them anywhere else."],
};
HELP.simple = HELP.retrieval.slice(0, 2);

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
const help = key => `<button type="button" class="helpq" aria-label="How this works" aria-expanded="false">?</button>`;
const helpBox = key => `<div class="help" hidden>${HELP[key].map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
const info = tip => `<span class="info" role="button" tabindex="0" aria-label="${esc(tip)}">i<span class="tip">${esc(tip)}</span></span>`;
const fld = (name, control, tip) => `<div class="fld"><span>${esc(name)}${tip ? info(tip) : ""}</span>${control}</div>`;
const goBtn = (text, big) => `<button type="button" class="gocircle ${big ? "big" : ""}" id="go">${esc(text)}</button>`;
const scopeSel = id => `<select id="${id}" aria-label="Courses"><option value="one">${esc(active().title)} only</option><option value="all">All courses, mixed</option></select>`;
const TIP_SCOPE = "All courses, mixed: letters from every course you have, shuffled together.";
const TIP_SECS = "The clock counts down in white and turns amber past this; it never stops you.";
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
const box = (k, cls, inner, extra = "", attrs = "") => { const [x, y, w, h] = POS[k];
  return `<div class="el ${cls}" ${attrs} style="left:${x}%;top:${y}%;width:${w}%;height:${h}%;${extra}">${inner}</div>`; };
function answerHTML(r, k) {
  if (k === "index") return `<span class="s-isfor">is for&nbsp;</span><span class="s-word">${esc(r.index.toUpperCase())}</span>`;
  if (k === "secondary") return `(+ ${esc(r.secondary)})`;
  if (k === "date") return dateHTML(r);
  return esc(r[k]);
}
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
function imgbox(inner, blank, cls = "") { const [x, y, w, h] = POS.image; return `<div class="imgbox ${blank ? "blank" : ""} ${cls}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%">${inner}</div>`; }
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
  } else if (mode === "recall") {
    // retrieval practice: the plate is loaded underneath from the start, so the reveal is a cross-fade, not a reload
    s += rails(r.L) + circle(r.L) + chrome(o.label || "monument index");
    s += imgbox(`${r.img ? `<img class="plate" src="${r.img}" alt="Plate for ${r.L.toUpperCase()}">` : ""}
      <div class="ctr"><div class="ctr-isfor"><b>${r.L.toUpperCase()}</b> is for…</div><div class="count" id="countNum">${o.n ?? 5}</div></div>`, false, "white");
    aspectsOf(r).forEach(k => {
      s += box(k, `asp ${FONT[k]}`, `<span class="ask">${ASK[k]}</span><div class="ans">${answerHTML(r, k)}</div>`, "", `data-k="${k}" role="button" aria-label="${ASK[k]}"`);
    });
  }
  return `<div class="slide" id="slide">${s}</div>`;
}

/* ---------------- tabs ---------------- */
let current = "retrieval";
function show(view) {
  stopAll(); current = view;
  document.querySelectorAll("nav button").forEach(b => b.setAttribute("aria-selected", b.dataset.view === view));
  ({ retrieval: retrievalStart, address: addressStart, short: shortStart, progress, simple: simpleStart, family: retrievalStart })[view]();
  // the first time anyone starts a practice, show the research notice once
  const g = $("#go"); if (g && g.onclick && !store.consent && RESULTS_ENDPOINT) { const f = g.onclick; g.onclick = () => consentAsk(f); }
}
const shortId = () => store.uid.slice(0, 7);
const CONSENT_VERSION = "2026-10-13";
function consentAsk(then) {
  panel(`<div class="eyebrow">Before you begin</div><h2>Help with the research</h2>
    <div class="consent">
      <p>The Monuments is part of a research project on how people build knowledge that lasts. Your practice results would help: what you remembered, how quickly, and how sure you were.</p>
      <p><b>They're anonymous.</b> Results are linked only to a random code made by this browser (yours is <b class="code">${esc(shortId())}</b>). It is never linked to your name, your email or your mnovum account; those stay with the course site and never reach the research data. Your IP address isn't stored.</p>
      <p>Anonymous results may be used in research reports and publications, and may be shared with other researchers, always without anything that identifies you.</p>
      <p>Practising works exactly the same whether you share or not, and you can change your mind any time under Progress.${DATA_PAGE ? ` <a href="${esc(DATA_PAGE)}" target="_blank" rel="noopener">See what the data shows so far.</a>` : ""}</p>
      <label class="agebox"><input type="checkbox" id="cAge"> I am 13 or older, or I am a parent or guardian choosing for my child.</label>
    </div>
    <div class="row consent-row"><button type="button" class="gocircle cyes" id="cYes" disabled>Share<br>anonymously</button><button type="button" class="gocircle cno" id="cNo">Don't<br>share</button></div>`);
  const pick = v => { store.consent = v; store.consentAt = new Date().toISOString(); store.consentVersion = CONSENT_VERSION; save(); then(); };
  $("#cAge").onchange = () => { $("#cYes").disabled = !$("#cAge").checked; };
  $("#cYes").onclick = () => { if ($("#cAge").checked) pick("yes"); }; $("#cNo").onclick = () => pick("no");
}
document.querySelector("nav").addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.dataset.view); });
document.addEventListener("click", e => {
  const g = e.target.closest("[data-goto]"); if (g) { e.preventDefault(); show(g.dataset.goto); }
  const fsb = e.target.closest(".fsbtn"); if (fsb) { fsb.blur(); fullscreen(); const f = $("#f_index"); if (f) setTimeout(() => f.focus(), 200); }
  const q = e.target.closest(".helpq"); if (q) { const h = q.closest(".panel").querySelector(".help"); h.hidden = !h.hidden; q.setAttribute("aria-expanded", String(!h.hidden)); }
  const inf = e.target.closest(".info"); document.querySelectorAll(".info.open").forEach(x => { if (x !== inf) x.classList.remove("open"); }); if (inf) inf.classList.toggle("open");
});
const sel = $("#courseSel");
sel.innerHTML = COURSES.map(c => `<option value="${c.id}">${esc(c.title)}</option>`).join("");
sel.value = store.activeId;
sel.addEventListener("change", () => { store.activeId = sel.value; save(); show(current); });
let session = null;
function finish(test) {
  const rec = { id: "s" + Date.now(), uid: store.uid, test, ts: session.ts, settings: session.settingsLog, results: session.results };
  store.history.push(rec); save();
  if (RESULTS_ENDPOINT && store.consent === "yes" && rec.results.length) {
    try { fetch(RESULTS_ENDPOINT, { method: "POST", mode: "no-cors", body: JSON.stringify({ v: 1, header: HEAD, rows: rowsFor(rec) }) }).catch(() => {}); } catch (e) {} }
  return rec;
}
function pool(scope, range) { const cs = scope === "all" ? COURSES : [active()]; return { cs, rows: cs.flatMap(rowsOf).filter(r => inRange(r, range)) }; }
const panel = html => { $("#view").innerHTML = `<div class="panel ${(html.includes('id="go"') || html.includes('id="cYes"')) ? "start" : ""}">${html}</div>`; };

/* =============================================================
   RECONSTRUCTION (short answer on the slide)
   ============================================================= */
function shortStart() {
  panel(`${help("short")}<div class="eyebrow">Monument reconstruction</div><h2>Rebuild each monument index</h2>${helpBox("short")}
    <div class="opts">
      ${fld("Letters", `<select id="sRange" aria-label="Letters">${rangeOptions()}</select>`)}
      ${fld("Order", `<select id="sOrder" aria-label="Order"><option value="seq">A to Z</option><option value="shuf">Shuffled</option></select>`)}
      ${fld("Courses", scopeSel("sScope"), TIP_SCOPE)}
      ${fld("Seconds per letter", `<input id="sLim" type="number" min="5" max="600" step="5" style="width:110px" aria-label="Seconds per letter">`, TIP_SECS)}
    </div>
    ${goBtn("Start")}`);
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
  panel(`<div class="eyebrow">Monument reconstruction · done</div><h2>${total} of ${R.length * 6} points</h2>
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
  panel(`${help("address")}<div class="eyebrow">Monument address</div><h2>Where does it live?</h2>${helpBox("address")}
    <div class="opts">
      ${fld("Items", `<select id="aType" aria-label="Items"><option value="mixed">Mixed</option>${Object.entries(PROMPTS).map(([k, t]) => `<option value="${k}">${t}</option>`).join("")}</select>`, "Which part of a monument you're shown. Mixed draws from all of them, dates included.")}
      ${fld("Letters", `<select id="aRange" aria-label="Letters">${rangeOptions()}</select>`)}
      ${fld("Courses", scopeSel("aScope"), TIP_SCOPE)}
    </div>
    ${goBtn("Start")}`);
  $("#aType").value = setting("aType", "mixed"); $("#aRange").value = setting("aRange", "all"); $("#aScope").value = setting("aScope", "one");
  $("#go").onclick = () => {
    const type = $("#aType").value, range = $("#aRange").value, scope = $("#aScope").value;
    remember({ aType: type, aRange: range, aScope: scope });
    const p = pool(scope, range), kinds = ["primary", "secondary", "date", "relevance", "gist"];
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
  panel(`<div class="eyebrow">Monument address · done</div><h2>${ok.length} of ${R.length} placed</h2>
    <div class="stats"><div class="stat"><b>${pct(ok.length, R.length)}</b><span>accuracy</span></div>
      <div class="stat"><b>${ok.length ? secs(ok.reduce((a, r) => a + r.ms, 0) / ok.length) : "–"}</b><span>average time when right</span></div></div>
    <div class="tablewrap"><table class="t"><thead><tr><th>Item</th><th>Lives at</th><th>You said</th><th>Time</th></tr></thead><tbody>
    ${R.map(r => `<tr><td>${esc(r.prompt)}<div class="dim small">${PROMPTS[r.kind]}</div></td><td>${multi ? esc(r.course) + " " : ""}<span class="L">${r.letter}</span></td>
      <td class="${r.correct ? "v1" : "v0"}">${multi ? esc(course(r.givenCourse).title) + " " : ""}${r.givenLetter}</td><td class="n">${secs(r.ms)}</td></tr>`).join("")}</tbody></table></div>
    <div class="row" style="margin-top:18px"><button class="btn" data-goto="address">Go again</button><button class="btn ghost" data-goto="progress">Progress</button></div>`);
}

/* =============================================================
   RETRIEVAL PRACTICE: tap what you remember during a 5-to-1 countdown,
   then the monument appears and you undo anything you didn't really have
   ============================================================= */
function fullscreen() { const st = $("#stage"); try { if (document.fullscreenElement) document.exitFullscreen(); else st.requestFullscreen().catch(() => {}); } catch (e) {} }
function retrievalStart() {
  panel(`${help("retrieval")}<div class="eyebrow">Retrieval practice</div><h2>What do you remember?</h2>${helpBox("retrieval")}
    <div class="opts">
      ${fld("Letters", `<select id="rRange" aria-label="Letters">${rangeOptions()}</select>`)}
      ${fld("Order", `<select id="rOrder" aria-label="Order"><option value="seq">A to Z</option><option value="shuf">Shuffled</option></select>`)}
      ${fld("Courses", scopeSel("rScope"), TIP_SCOPE)}
      ${fld("Seconds per letter", `<input id="rLim" type="number" min="5" max="120" step="5" style="width:110px" aria-label="Seconds per letter">`, "The countdown always runs 5 to 1. This sets how long the whole countdown takes.")}
    </div>
    ${goBtn("Begin")}`);
  $("#rRange").value = setting("rRange", setting("fRange", "all")); $("#rOrder").value = setting("rOrder", setting("fOrder", "seq"));
  $("#rScope").value = setting("rScope", "one"); $("#rLim").value = setting("rLim", 15);
  $("#go").onclick = () => {
    const range = $("#rRange").value, order = $("#rOrder").value, scope = $("#rScope").value, lim = Math.max(5, Number($("#rLim").value) || 15);
    remember({ rRange: range, rOrder: order, rScope: scope, rLim: lim });
    const p = pool(scope, range); let items = p.rows; if (order === "shuf" || p.cs.length > 1) items = shuffle(items);
    retrievalRun(items, lim, { range, order, scope, limitS: lim }, p.cs.length > 1);
  };
}
function simpleStart() {
  const c = COURSES[0];
  panel(`${help("simple")}<div class="eyebrow">Retrieval practice</div><h2>${esc(SIMPLE.title || (c ? c.title : ""))}</h2>${helpBox("simple")}${goBtn("Begin", true)}`);
  $("#go").onclick = () => {
    const lim = Math.max(5, Number(SIMPLE.seconds) || 15);
    retrievalRun(COURSES.flatMap(rowsOf), lim, { simple: true, title: SIMPLE.title || "", limitS: lim }, COURSES.length > 1);
  };
}
function retrievalRun(items, lim, settingsLog, multi) {
  if (!items.length) return;
  session = { ts: new Date().toISOString(), items, i: 0, results: [], lim, multi, settingsLog };
  $("#view").innerHTML = `<div class="stage" id="stage">
    <div class="bar"><span id="rInfo"></span><div class="prog"><i id="rProg"></i></div><span class="spacer"></span><span id="rCue"></span>
      <button class="btn small" id="rAct">Reveal</button><button class="btn ghost small fsbtn">Full screen</button><button class="btn ghost small" id="rStop">Stop</button></div>
    <div id="slideWrap"></div><div class="tapgrid" id="tapgrid"></div></div>`;
  $("#rStop").onclick = retrievalDone;
  retrievalItem();
}
function retrievalItem() {
  stopAll();
  const s = session, r = s.items[s.i], step = s.lim * 1000 / 5, ks = aspectsOf(r);
  const res = { cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), limitS: s.lim, avail: ks.length, claimMs: {}, undone: [], kept: 0 };
  $("#rInfo").textContent = `${s.i + 1} / ${s.items.length}`; $("#rProg").style.width = (100 * s.i / s.items.length) + "%"; $("#rCue").textContent = "";
  $("#slideWrap").innerHTML = slideHTML(r, "recall", { label: (s.multi ? r.ctitle + " · " : "") + "monument index" });
  const sl = $("#slide"), t0 = performance.now(), act = $("#rAct");
  let n = 5, phase = "recall", tCheck = 0;
  // the same six aspects as big buttons under the slide, for phones (shown by CSS on narrow screens)
  const grid = $("#tapgrid");
  grid.innerHTML = ks.map(k => `<button type="button" class="tap" data-k="${k}">${ASK[k]}</button>`).join("");
  grid.classList.remove("checking");
  const el = k => sl.querySelector(`.asp[data-k="${k}"]`), tb = k => grid.querySelector(`.tap[data-k="${k}"]`);
  const both = (k, fn) => { [el(k), tb(k)].forEach(x => x && fn(x)); };
  const toggle = k => { const e = el(k); if (!e) return;
    if (phase === "recall") {
      if (res.claimMs[k] != null) { delete res.claimMs[k]; both(k, x => x.classList.remove("on")); }
      else { res.claimMs[k] = Math.round(performance.now() - t0); both(k, x => x.classList.add("on")); }
    } else if (phase === "check" && res.claimMs[k] != null) both(k, x => x.classList.toggle("undo"));
  };
  grid.onclick = e => { const b = e.target.closest(".tap"); if (b) { b.blur(); toggle(b.dataset.k); } };
  const reveal = early => {
    if (phase !== "recall") return; phase = "check"; liveTimeouts.forEach(clearTimeout); liveTimeouts = [];
    res.revealMs = Math.round(performance.now() - t0); res.early = !!early; tCheck = performance.now();
    sl.classList.add("revealed"); grid.classList.add("checking");
    $("#rCue").textContent = Object.keys(res.claimMs).length ? "Tap any you didn't really have." : "";
    act.textContent = s.i + 1 < s.items.length ? "Next" : "Finish";
  };
  const next = () => {
    if (phase !== "check") return; phase = "done";
    res.undone = ks.filter(k => res.claimMs[k] != null && el(k).classList.contains("undo"));
    res.kept = Object.keys(res.claimMs).length - res.undone.length; res.checkMs = Math.round(performance.now() - tCheck);
    s.results.push(res); s.i++; s.i < s.items.length ? retrievalItem() : retrievalDone();
  };
  act.textContent = "Reveal";
  act.onclick = () => { act.blur(); phase === "recall" ? reveal(true) : next(); };
  sl.addEventListener("click", e => { const a = e.target.closest(".asp"); if (a) toggle(a.dataset.k); });
  const tick = () => { n--; if (n >= 1) { const c = $("#countNum"); if (c) c.textContent = n; liveTimeouts.push(setTimeout(tick, step)); } else reveal(false); };
  liveTimeouts.push(setTimeout(tick, step));
  setKeys(e => {
    if (e.metaKey || e.ctrlKey || e.altKey || typing(e)) return;
    if (/^[1-6]$/.test(e.key)) { e.preventDefault(); toggle(ASPECTS[Number(e.key) - 1]); }
    else if (e.key === " ") { e.preventDefault(); phase === "recall" ? reveal(true) : next(); }
    else if ((e.key === "Enter" || e.key === "ArrowRight") && phase === "check") { e.preventDefault(); next(); }
    else if (/^f$/i.test(e.key)) fullscreen();
  });
}
function retrievalDone() {
  stopAll(); try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {}
  if (!session || !session.results.length) return SIMPLE ? simpleStart() : retrievalStart();
  const rec = finish("retrieval"), R = rec.results, multi = new Set(R.map(r => r.cid)).size > 1;
  const avail = R.reduce((a, r) => a + r.avail, 0), kept = R.reduce((a, r) => a + r.kept, 0), caught = R.reduce((a, r) => a + r.undone.length, 0);
  const nm = r => (multi ? esc(r.course) + " " : "") + `<span class="L">${r.letter}</span>`;
  const weak = R.filter(r => r.kept < r.avail);
  const dot = (r, k) => { const row = rowAt(r.cid, r.letter.toLowerCase()); if (!row || !String(row[k] || "").trim()) return "";
    if (r.claimMs[k] == null) return `<span class="v0" title="not remembered">○</span>`;
    return r.undone.includes(k) ? `<span class="amber" title="undone when checking">◐</span>` : `<span class="v1" title="remembered">●</span>`; };
  panel(`<div class="eyebrow">Retrieval practice · done</div><h2>${kept} of ${avail} remembered</h2>
    <div class="stats"><div class="stat"><b>${pct(kept, avail)}</b><span>of everything asked</span></div>
      <div class="stat"><b>${R.filter(r => r.avail && r.kept === r.avail).length} / ${R.length}</b><span>letters complete</span></div>
      <div class="stat"><b>${caught}</b><span>caught when checking</span></div></div>
    <p>${weak.length ? `Worth another round: ${weak.map(nm).join(" ")}` : "Every letter complete."}</p>
    <div class="tablewrap"><table class="t"><thead><tr><th></th>${ASPECTS.map(k => `<th class="c">${ASK[k]}</th>`).join("")}</tr></thead><tbody>
      ${R.map(r => `<tr><td>${nm(r)}</td>${ASPECTS.map(k => `<td class="dot">${dot(r, k)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
    <p class="legend"><span class="v1">●</span> remembered &nbsp; <span class="amber">◐</span> undone when checking &nbsp; <span class="v0">○</span> not this time</p>
    <div class="row" style="margin-top:18px">${SIMPLE ? `<button class="btn" data-goto="simple">Again</button>` : `<button class="btn" data-goto="retrieval">Again</button><button class="btn ghost" data-goto="progress">Progress</button>`}</div>`);
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
    if (h.test === "family" && r.mark != null) { x.fN++; x.fPts += r.mark; }
    if (h.test === "retrieval" && r.avail) { x.fN++; x.fPts += r.kept / r.avail; } }); if (touched) n++; });
  const lvl = x => { const p = []; if (x.aN) p.push(x.aOk / x.aN); if (x.sN) p.push(x.sPts / (x.sN * 6)); if (x.fN) p.push(x.fPts / x.fN);
    if (!p.length) return ""; const v = p.reduce((a, b) => a + b) / p.length; return v >= .85 ? "s3" : v >= .5 ? "s2" : "s1"; };
  const top = Object.entries(mix).sort((a, b) => b[1] - a[1]).slice(0, 8);
  panel(`${help("progress")}<div class="eyebrow">Progress</div><h2>${esc(c.title)}</h2>${helpBox("progress")}
    <p class="lede">${n ? `${n} session${n > 1 ? "s" : ""} in this browser.` : "No sessions yet."}</p>
    <div class="tiles">${rows.map(r => { const x = st[r.L.toUpperCase()]; return `<div class="tile ${lvl(x)}"><span class="t">${r.L.toUpperCase()}</span>
      <span class="m">recon ${x.sN ? (x.sPts / x.sN).toFixed(1) + "/6" : "–"}</span><span class="m">addr ${x.aN ? pct(x.aOk, x.aN) : "–"}</span><span class="m">retr ${x.fN ? pct(x.fPts, x.fN) : "–"}</span></div>`; }).join("")}</div>
    <h3>How well you knew what you knew</h3>
    <div class="tablewrap"><table class="t"><thead><tr><th>You said</th><th>Letters</th><th>Average score</th></tr></thead><tbody>
      ${[3, 2, 1].map(k => `<tr><td>${CONF[k]}</td><td class="n">${calib[k][0]}</td><td class="n">${calib[k][0] ? Math.round(100 * calib[k][1] / calib[k][0]) + "%" : "–"}</td></tr>`).join("")}</tbody></table></div>
    <h3>Address mix-ups</h3>
    ${top.length ? `<div class="tablewrap"><table class="t"><thead><tr><th>Lives at</th><th>Placed at</th><th>Times</th></tr></thead><tbody>
      ${top.map(([k, t]) => { const [Lt, gc, gl] = k.split("|"), a = rowAt(c.id, Lt.toLowerCase()), b = rowAt(gc, gl.toLowerCase()), cross = gc !== c.id;
        return `<tr><td><span class="L">${Lt}</span> ${esc(a ? a.primary : "")}</td><td>${cross ? esc((course(gc) || {}).title || "") + " " : ""}<span class="L">${gl}</span> ${esc(b ? b.primary : "(nothing there)")}${cross ? ` <span class="amber small">other course</span>` : ""}</td><td class="n">${t}</td></tr>`; }).join("")}
    </tbody></table></div>` : `<p class="dim">None yet.</p>`}
    <h3>Research</h3>
    <p class="consent-line">${store.consent === "yes" ? "You're sharing anonymous results" : store.consent === "no" ? "You're not sharing results" : "You haven't been asked yet"}. Your anonymous code: <b class="code">${esc(shortId())}</b>.
      ${store.consent ? `<button class="btn ghost small" id="cFlip">${store.consent === "yes" ? "Stop sharing" : "Share anonymously"}</button>` : ""}
      ${DATA_PAGE ? `<a href="${esc(DATA_PAGE)}" target="_blank" rel="noopener">See the live results</a>` : ""}</p>
    <div class="row" style="margin-top:22px"><button class="btn ghost" id="csv" ${H.length ? "" : "disabled"}>Copy all results as spreadsheet rows</button>
      <button class="btn ghost" id="clr" ${H.length ? "" : "disabled"}>Clear history</button><span class="status" id="st"></span></div><div id="cf"></div>`);
  $("#csv").onclick = () => copy(toCSV(H), $("#st"));
  if ($("#cFlip")) $("#cFlip").onclick = () => { if (store.consent === "yes") { store.consent = "no"; store.consentAt = new Date().toISOString(); save(); progress(); } else consentAsk(progress); };
  $("#clr").onclick = () => { $("#cf").innerHTML = `<div class="confirm">Delete every saved session in this browser? This can't be undone.
    <button class="btn small danger" id="y">Delete</button><button class="btn small ghost" id="no">Cancel</button></div>`;
    $("#y").onclick = () => { store.history = []; save(); progress(); }; $("#no").onclick = () => { $("#cf").innerHTML = ""; }; };
}
const HEAD = ["session_time", "test", "course", "letter", "item_type", "item", "given_course", "given_letter", "correct", "confidence", "limit_s", "recall_ms", "overtime", "grade_ms", "hints",
  ...FIELDS.map(f => "typed_" + f.key), ...FIELDS.map(f => "firstkey_ms_" + f.key), ...FIELDS.map(f => "self_" + f.key), ...FIELDS.map(f => "auto_" + f.key), "score", "room_mark",
  ...FIELDS.map(f => "claim_ms_" + f.key), ...FIELDS.map(f => "kept_" + f.key), "aspects_asked", "reveal_ms", "check_ms", "revealed_early", "settings", "app_version", "consent_version", "anon_id"];
const APP_VERSION = "2026-10-13";
function rowsFor(h) {
  return h.results.map(r => { const A = h.test === "address", S = h.test === "short", Rt = h.test === "retrieval";
    return [h.ts, h.test, r.course, r.letter, A ? r.kind : "", A ? r.prompt : "", A ? ((course(r.givenCourse) || {}).title || r.givenCourse) : "", A ? r.givenLetter : "", A ? (r.correct ? 1 : 0) : "",
      r.confidence ?? "", r.limitS ?? "", A ? r.ms : (r.recallMs ?? (Rt ? "" : r.revealMs) ?? ""), r.overtime == null ? "" : (r.overtime ? 1 : 0), r.gradeMs ?? "", r.hints ?? "",
      ...FIELDS.map(f => S ? r.typed[f.key] : ""), ...FIELDS.map(f => S ? r.firstKeyMs[f.key] ?? "" : ""), ...FIELDS.map(f => S ? r.self[f.key] : ""), ...FIELDS.map(f => S ? r.auto[f.key] ?? "" : ""),
      S ? r.score : (Rt ? r.kept : ""), h.test === "family" ? (r.mark ?? "") : "",
      ...FIELDS.map(f => Rt ? r.claimMs[f.key] ?? "" : ""), ...FIELDS.map(f => Rt ? (r.claimMs[f.key] == null ? 0 : r.undone.includes(f.key) ? 0 : 1) : ""),
      Rt ? r.avail : "", Rt ? r.revealMs ?? "" : "", Rt ? r.checkMs ?? "" : "", Rt ? (r.early ? 1 : 0) : "", JSON.stringify(h.settings || {}), APP_VERSION, store.consentVersion || "", h.uid]; });
}
function toCSV(H) {
  const q = v => { v = v == null ? "" : String(v); return /[",\n\t]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v; };
  return [HEAD.join(","), ...H.flatMap(h => rowsFor(h).map(r => r.map(q).join(",")))].join("\n");
}
function copy(text, el) {
  const ok = () => { el.className = "status"; el.textContent = "Copied. Paste into a spreadsheet."; };
  const fb = () => { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); let g = false; try { g = document.execCommand("copy"); } catch (e) {} ta.remove();
    g ? ok() : (el.className = "status err", el.textContent = "This browser blocked copying."); };
  try { navigator.clipboard.writeText(text).then(ok, fb); } catch (e) { fb(); }
}

try { if (!document.fullscreenEnabled) { const w = document.querySelector(".wrap"); if (w) w.classList.add("nofs"); } } catch (e) {}
if (SIMPLE) { const w = document.querySelector(".wrap"); if (w) w.classList.add("simple"); show("simple"); }
else show("retrieval");

})();
