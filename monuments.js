/* The Monuments: practice program. Course content is supplied by the page as window.RR_COURSES. */
(function(){
var mount = document.getElementById("rrapp"); if (!mount) return;
var st = document.createElement("style"); st.textContent = "#rrapp *{font-weight:inherit;color:inherit;font-family:inherit;font-size:inherit;letter-spacing:normal;text-transform:none;line-height:inherit;margin:0;text-decoration:none}#rrapp p{margin:0}#rrapp h1,#rrapp h2,#rrapp h3{font-size:inherit}#rrapp{\n  --bg:#000; --panel:#0D0D0D; --raise:#171717; --line:#2E2E2E; --fg:#FFF; --dim:#9C9C9C;\n  --red:#FF2B2B; --blue:#00CAFF; --amber:#FFB300;\n  --s-red:#FF0000; --s-blue:#00CAFF; --s-ink:#000; --s-card:#FFF; --s-wait:#F1F1F1;\n  --font:\"Courier New\",\"Courier Prime\",Courier,ui-monospace,monospace;\n  color-scheme:dark;\n}\n#rrapp,#rrapp *{box-sizing:border-box}\n#rrapp,#rrapp{background:var(--bg);color:var(--fg)}\n#rrapp{font-family:var(--font);font-weight:700;font-size:15px;line-height:1.45;padding:0 16px}\n#rrapp button,#rrapp input,#rrapp select,#rrapp textarea{font-family:var(--font);font-weight:700}\n#rrapp .wrap{max-width:1180px;margin:0 auto;padding-block:20px 60px;display:flex;flex-direction:column;gap:14px}\n#rrapp header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}\n#rrapp .brand{display:flex;align-items:center;gap:14px;flex-wrap:wrap}\n#rrapp .brand h1{font-size:21px;margin:0}\n#rrapp .brand h1 span{color:var(--red)}\n#rrapp select,#rrapp input[type=number]{font-size:15px;color:var(--fg);background:var(--raise);border:1px solid var(--line);border-radius:4px;padding:6px 8px}\n#rrapp nav{display:flex;gap:2px;flex-wrap:wrap;border:1px solid var(--line);border-radius:4px;padding:3px}\n#rrapp nav button{font-size:13px;border:0;background:transparent;color:var(--dim);padding:7px 12px;border-radius:3px;cursor:pointer}\n#rrapp nav button[aria-selected=\"true\"]{background:var(--fg);color:var(--bg)}\n#rrapp :focus-visible{outline:2px solid var(--blue);outline-offset:2px}\n#rrapp .panel{background:#FFF;color:#000;color-scheme:light;border:1px solid var(--line);border-radius:6px;padding:28px}\n#rrapp .panel .lede,#rrapp .panel .dim,#rrapp .panel label.opt,#rrapp .panel label.chk,#rrapp .panel .stat span,#rrapp .panel .tile .m,#rrapp .panel table.t th{color:#000}\n#rrapp .panel select,#rrapp .panel input[type=number]{background:#FFF;color:#000;border:1px solid #000}\n#rrapp .panel .btn.ghost{color:#000;border-color:#000}\n#rrapp .panel table.t th,#rrapp .panel table.t td{border-bottom-color:#DDD}\n#rrapp .panel kbd{background:#F2F2F2;color:#000;border-color:#BBB}\n#rrapp .panel .rx{background:#FFECEC;color:#000}\n#rrapp .panel .rx.opt{background:#FFF4D6}\n#rrapp .panel .confirm{background:#FFECEC;color:#000}\n#rrapp .panel .amber,#rrapp .panel .v05{color:#B07A00}\n#rrapp .panel .tile{border-color:#DDD}\n#rrapp .panel.start{text-align:center}\n#rrapp .panel.start .lede{margin-left:auto;margin-right:auto}\n#rrapp .panel.start .opts,#rrapp .panel.start .row{justify-content:center}\n#rrapp .eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--red)}\n#rrapp h2{font-size:21px;margin:4px 0 8px;text-wrap:balance}\n#rrapp h3{font-size:15px;margin:24px 0 8px}\n#rrapp .lede{color:var(--dim);margin:0 0 18px;max-width:70ch}\n#rrapp .opts{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end;margin-bottom:20px}\n#rrapp label.opt{display:flex;flex-direction:column;gap:5px;font-size:12px;color:var(--dim)}\n#rrapp label.chk{display:flex;gap:8px;align-items:center;font-size:13px;color:var(--fg)}\n#rrapp .btn{font-size:14px;border:2px solid var(--blue);border-radius:4px;padding:7px 16px;cursor:pointer;background:var(--blue);color:#fff}\n#rrapp .btn.ghost{background:transparent;border-color:var(--line);color:var(--fg)}\n#rrapp .btn.small{padding:4px 10px;font-size:12.5px}\n#rrapp .btn.danger{background:var(--red);border-color:var(--red)}\n#rrapp .btn:disabled{opacity:.4;cursor:not-allowed}\n#rrapp .row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n#rrapp .spacer{flex:1}\n#rrapp .dim{color:var(--dim)}\n#rrapp .small{font-size:12.5px}\n#rrapp kbd{font-family:var(--font);font-size:12px;border:1px solid var(--line);border-bottom-width:2px;border-radius:3px;padding:0 5px;background:var(--raise);color:var(--fg)}\n#rrapp .slide{position:relative;width:100%;aspect-ratio:16/9;background:#000;container-type:inline-size;--pt:calc(100cqw / 960);\n  font-family:var(--font);font-weight:700;color:var(--s-ink);user-select:none;border-radius:4px;overflow:hidden}\n#rrapp .slide .card{position:absolute;background:var(--s-card);border-radius:calc(var(--pt)*9)}\n#rrapp .slide .el{position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.15;min-width:0}\n#rrapp .slide .rail{position:absolute;width:2.2%;height:4%;border-radius:50%;background:#fff;color:#000;display:flex;align-items:center;justify-content:center;font-size:calc(var(--pt)*10)}\n#rrapp .slide .rail.on{background:var(--s-blue);color:#fff}\n#rrapp .slide .circle{position:absolute;border-radius:50%;background:var(--s-red);color:#fff;display:flex;align-items:center;justify-content:center;font-size:calc(var(--pt)*19)}\n#rrapp .slide .circle.ok{background:var(--s-blue)}\n#rrapp .slide .imgbox{position:absolute;border-radius:calc(var(--pt)*8);overflow:hidden;background:var(--s-wait);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:calc(var(--pt)*6)}\n#rrapp .slide .imgbox.blank{background:transparent}\n#rrapp .slide .imgbox img{width:100%;height:100%;object-fit:cover;display:block}\n#rrapp .slide .imgbox .room{font-size:calc(var(--pt)*18);color:#9A9A9A}\n#rrapp .slide .imgbox .station{font-size:calc(var(--pt)*10);color:#B5B5B5}\n#rrapp .slide .roomimg{position:absolute;border-radius:calc(var(--pt)*8);overflow:hidden;background:var(--s-wait)}\n#rrapp .slide .roomimg img{width:100%;height:100%;object-fit:cover;display:block}\n#rrapp .slide .st-mark{position:absolute;width:4.6%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;border:calc(var(--pt)*4) solid var(--s-red);box-shadow:0 0 0 calc(var(--pt)*3) #fff,0 0 calc(var(--pt)*16) rgba(0,0,0,.65);animation:rrpulse 1.4s ease-in-out infinite}\n#rrapp .slide .st-mark.ok{border-color:var(--s-blue);animation:none}\n#rrapp .walkin{display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;margin:12px 0 4px}\n#rrapp .walkin input{font-family:var(--font);font-weight:700;font-size:20px;letter-spacing:.04em;padding:8px 14px;border-radius:999px;border:2px solid var(--line);background:var(--raise);color:var(--fg);text-transform:uppercase;width:min(340px,62vw)}\n#rrapp .walkin input:focus{outline:none;border-color:var(--blue)}\n@keyframes rrpulse{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.3)}}\n#rrapp .slide .rq{position:absolute;left:50%;bottom:5%;transform:translateX(-50%);background:#fff;border-radius:calc(var(--pt)*14);padding:calc(var(--pt)*5) calc(var(--pt)*12);font-size:calc(var(--pt)*12);white-space:nowrap}\n#rrapp .slide .tiny{font-size:calc(var(--pt)*6.5);justify-content:flex-start}\n#rrapp .slide .key b{color:var(--s-red)}\n#rrapp .s-isfor{font-size:calc(var(--pt)*12)}\n#rrapp .s-word{font-size:calc(var(--pt)*16);color:var(--s-red)}\n#rrapp .s-primary{font-size:calc(var(--pt)*14)}\n#rrapp .s-secondary{font-size:calc(var(--pt)*12)}\n#rrapp .s-date{font-size:calc(var(--pt)*12);color:var(--s-blue);flex-direction:column}\n#rrapp .s-date sup{color:var(--s-red);font-size:.75em;vertical-align:.45em;line-height:0}\n#rrapp .s-date .era{color:var(--s-red)}\n#rrapp .s-rel{font-size:calc(var(--pt)*16);color:var(--s-red)}\n#rrapp .s-gist{font-size:calc(var(--pt)*14);color:var(--s-blue)}\n#rrapp .slide .fade{animation:fadein .35s ease-out}\n@keyframes fadein{from{opacity:0}to{opacity:1}}\n#rrapp .slide input,#rrapp .slide textarea{font:inherit;color:inherit;background:#F7F7F7;border:1px dashed #B9B9B9;border-radius:calc(var(--pt)*3);\n  text-align:center;padding:calc(var(--pt)*2) calc(var(--pt)*3);width:100%;min-width:0;resize:none;outline:none}\n#rrapp .slide input:focus,#rrapp .slide textarea:focus{border:1px solid var(--s-blue);background:#fff}\n#rrapp .slide input::placeholder,#rrapp .slide textarea::placeholder{color:#C4C4C4;font-size:.8em}\n#rrapp .slide input[readonly],#rrapp .slide textarea[readonly]{background:#FFF8E1;border-style:solid;border-color:#E9D9A6}\n#rrapp .slide .w-index{display:flex;align-items:center;gap:calc(var(--pt)*4);width:100%}\n#rrapp .slide .w-index input{flex:1;text-transform:uppercase;color:var(--s-red);font-size:calc(var(--pt)*16)}\n#rrapp .slide .w-sec{display:flex;align-items:center;gap:calc(var(--pt)*3);width:100%}\n#rrapp .slide textarea{height:100%}\n#rrapp .bar{display:flex;align-items:center;gap:14px;font-size:13px;color:var(--dim);font-variant-numeric:tabular-nums}\n#rrapp .prog{height:3px;background:var(--line);flex:1;max-width:340px}\n#rrapp .prog i{display:block;height:100%;background:var(--fg)}\n#rrapp .chips{display:flex;gap:8px;flex-wrap:wrap}\n#rrapp .chip{border:2px solid var(--line);background:transparent;color:var(--fg);border-radius:4px;padding:5px 11px;cursor:pointer;font-size:13.5px}\n#rrapp .chip[aria-pressed=\"true\"]{border-color:var(--fg);background:var(--fg);color:var(--bg)}\n#rrapp .feedback{border-left:4px solid;padding:9px 13px;font-size:15px}\n#rrapp .feedback.good{border-color:var(--blue);background:#00212B}\n#rrapp .feedback.bad{border-color:var(--red);background:#2A0A0A}\n#rrapp .L{color:var(--red)}\n#rrapp .stats{display:flex;flex-wrap:wrap;gap:30px;margin:8px 0 16px}\n#rrapp .stat b{display:block;font-size:30px;font-variant-numeric:tabular-nums}\n#rrapp .stat span{font-size:12px;color:var(--dim)}\n#rrapp .tablewrap{overflow-x:auto}\n#rrapp table.t{border-collapse:collapse;width:100%;font-size:13.5px}\n#rrapp table.t th,#rrapp table.t td{text-align:left;padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}\n#rrapp table.t th{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}\n#rrapp td.n{font-variant-numeric:tabular-nums;white-space:nowrap}\n#rrapp .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px;margin:12px 0}\n#rrapp .tile{border:2px solid var(--line);border-radius:4px;padding:8px 10px;display:flex;flex-direction:column;gap:1px}\n#rrapp .tile .t{font-size:24px;line-height:1;color:var(--red)}\n#rrapp .tile .m{font-size:12px;color:var(--dim);font-variant-numeric:tabular-nums}\n#rrapp .tile.s3{border-color:var(--blue)}\n#rrapp .tile.s2{border-color:var(--amber)}\n#rrapp .tile.s1{border-color:var(--red)}\n#rrapp .status{font-size:13px;color:var(--blue)}\n#rrapp .status.err{color:var(--red)}\n#rrapp .confirm{border-left:4px solid var(--red);background:#2A0A0A;padding:10px 14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:12px}\n#rrapp .panel{position:relative}\n#rrapp .gocircle{display:inline-flex;align-items:center;justify-content:center;width:104px;height:104px;border-radius:50%;border:0;background:var(--blue);color:#fff;font-size:18px;cursor:pointer;margin-top:4px}\n#rrapp .gocircle.big{width:190px;height:190px;font-size:30px;margin-top:18px}\n#rrapp .gocircle:hover{filter:brightness(1.12)}\n#rrapp .pair{display:flex;gap:28px;justify-content:center;flex-wrap:wrap;margin-top:18px}\n#rrapp .gocircle.p12{width:170px;height:170px;font-size:24px;flex-direction:column;gap:6px;margin:0;line-height:1.1}\n#rrapp .gocircle.p12 small{font-size:12px;opacity:.85}\n#rrapp .gocircle.red{background:var(--red)}\n#rrapp .helpq{position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;border:0;background:var(--red);color:#fff;font-size:17px;cursor:pointer;line-height:1}\n#rrapp .help{text-align:left;max-width:64ch;margin:6px auto 20px;border-left:4px solid var(--blue);padding:10px 14px;background:#F2F8FF;color:#000;font-size:14px}\n#rrapp .help p+p{margin-top:8px}\n#rrapp .fld{display:flex;flex-direction:column;gap:5px;font-size:12px;text-align:left}\n#rrapp .info{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:var(--blue);color:#fff;font-size:10.5px;margin-left:6px;position:relative;cursor:pointer;vertical-align:1px}\n#rrapp .info .tip{display:none;position:absolute;bottom:140%;left:50%;transform:translateX(-50%);width:230px;background:#000;color:#fff;padding:8px 10px;border-radius:4px;font-size:12px;line-height:1.4;z-index:5;text-align:left}\n#rrapp .info:hover .tip,#rrapp .info:focus .tip,#rrapp .info.open .tip{display:block}\n#rrapp .legend{font-size:12.5px;margin:4px 0 10px}\n#rrapp table.t td.dot{text-align:center;font-size:16px}\n#rrapp table.t th.c{text-align:center}\n#rrapp .nofs .fsbtn{display:none}\n#rrapp .consent{max-width:62ch;margin:0 auto 18px;text-align:left;font-size:14.5px}\n#rrapp .consent p+p{margin-top:10px}\n#rrapp .consent .code,#rrapp .consent-line .code{color:var(--blue);letter-spacing:.06em}\n#rrapp .consent-row{justify-content:center;gap:22px}\n#rrapp .gocircle.cyes,#rrapp .gocircle.cno{width:150px;height:150px;font-size:16px;line-height:1.3}\n#rrapp .gocircle:disabled{opacity:.35;cursor:not-allowed;filter:none}\n#rrapp .panel a{color:var(--blue);text-decoration:underline}\n#rrapp .consent-line{font-size:14px}\n#rrapp .slide.ss{overflow:visible;user-select:auto;min-height:420px}\n#rrapp .slide.ss .ss-body{position:relative;min-height:100%;padding:5% 6.5% 6.5%;display:flex;flex-direction:column;align-items:center;justify-content:center;\n  text-align:center;color:#000;font-size:15px;line-height:1.45;font-weight:700}\n#rrapp .slide.ss .ss-body h2{font-size:24px;margin:4px 0 16px}\n#rrapp .slide.ss .helpq{top:7%;right:6.5%}\n#rrapp .slide.ss .help{max-height:40%;overflow:auto}\n#rrapp .slide.ss .opts{justify-content:center;gap:18px 22px;margin-bottom:22px}\n#rrapp .msel{display:flex;flex-direction:column;gap:6px;position:relative;font-size:12px;text-align:left;color:#000}\n#rrapp .msel .mlabel{letter-spacing:.04em;display:flex;align-items:center;min-height:18px}\n#rrapp .mbtn{display:flex;justify-content:space-between;align-items:center;gap:12px;width:200px;border:2px solid #000;border-radius:999px;\n  padding:8px 16px;background:#fff;color:#000;font-family:var(--font);font-weight:700;font-size:14px;cursor:pointer;text-align:left}\n#rrapp .mbtn .msum{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n#rrapp .mbtn .caret{color:var(--s-red);font-size:12px}\n#rrapp .mbtn[aria-expanded=\"true\"]{border-color:var(--s-blue)}\n#rrapp .mpop{position:absolute;top:100%;left:0;margin-top:6px;z-index:30;background:#fff;border:2px solid #000;border-radius:12px;padding:6px;min-width:100%;\n  box-shadow:0 10px 28px rgba(0,0,0,.35)}\n#rrapp .mopt{display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:8px;font-size:14px;cursor:pointer;white-space:nowrap;color:#000}\n#rrapp .mopt:hover{background:#EEF6FF}\n#rrapp .mopt input{appearance:none;-webkit-appearance:none;width:18px;height:18px;border:2px solid #000;border-radius:50%;margin:0;flex:none;background:#fff;cursor:pointer}\n#rrapp .mopt input:checked{background:var(--s-blue);border-color:var(--s-blue);box-shadow:inset 0 0 0 3px #fff}\n#rrapp .mopt.mall{border-bottom:1px solid #DDD;margin-bottom:4px;border-radius:8px 8px 0 0}\n#rrapp .mopt.mall input:checked{background:var(--s-red);border-color:var(--s-red)}\n#rrapp input.pill{border:2px solid #000;border-radius:999px;padding:8px 16px;background:#fff;color:#000;font-family:var(--font);font-weight:700;font-size:14px;width:130px}\n#rrapp input.pill:focus{outline:none;border-color:var(--s-blue)}\n#rrapp .bigprompt{display:none;font-size:20px;line-height:1.35;text-align:center;padding:4px 6px}\n#rrapp .bigprompt .k{display:block;font-size:12px;color:var(--dim);letter-spacing:.08em;margin-bottom:4px}\n@media (max-width:820px){#rrapp .bigprompt{display:block}}\n@media (max-width:820px){#rrapp .slide.ss{aspect-ratio:auto;min-height:0}\n#rrapp .slide.ss .rail,#rrapp .slide.ss .tiny,#rrapp .slide.ss .card{display:none}\n#rrapp .slide.ss{background:#fff;border-radius:12px}\n#rrapp .slide.ss .ss-body{position:relative;inset:auto;padding:28px 16px}\n#rrapp .slide.ss .helpq{top:12px;right:12px}\n\n}\n@media (max-width:680px){#rrapp .panel{padding:16px}}\n@media (prefers-reduced-motion:reduce){#rrapp,#rrapp *{animation:none!important;transition:none!important}}\n#rrapp .ghost{}\n#rrapp .slide .ghost{border:calc(var(--pt)*1.5) dashed #CFCFCF;border-radius:calc(var(--pt)*5)}\n#rrapp .slide .target{border:calc(var(--pt)*3) solid var(--s-blue);border-radius:calc(var(--pt)*5);animation:rrglow 1.6s ease-in-out infinite;background:#fff}\n#rrapp .slide .target.shown{animation:none}\n#rrapp .slide .target .tq{color:var(--s-blue);font-size:calc(var(--pt)*11)}\n@keyframes rrglow{0%,100%{box-shadow:0 0 0 0 rgba(0,202,255,.0)}50%{box-shadow:0 0 0 calc(var(--pt)*5) rgba(0,202,255,.35)}}\n#rrapp .slide .circle.small{font-size:calc(var(--pt)*15);background:var(--s-red)}\n#rrapp .slide .circle.small.ok{background:var(--s-blue)}\n#rrapp .slide .hlcue{position:absolute;left:10%;right:10%;top:5%;text-align:center;font-size:calc(var(--pt)*12);color:var(--s-red);letter-spacing:.06em;line-height:1.3}\n#rrapp .slide .hltext{position:absolute;left:10%;right:10%;top:17%;bottom:12%;display:flex;align-items:center;justify-content:center;text-align:center;font-size:calc(var(--pt)*22);line-height:1.4}\n#rrapp .slide .hlw{color:var(--s-blue)}\n#rrapp .slide .hlblank{display:inline-block;min-width:6em;border-bottom:calc(var(--pt)*2.5) solid #000;margin-left:.3em}\n#rrapp .slide .hltext sup{color:var(--s-red);font-size:.65em;vertical-align:.5em;line-height:0}\n#rrapp .dock{display:flex;flex-direction:column;align-items:center;gap:.6em}\n#rrapp .dock .hint{color:var(--dim);font-size:.9em;text-align:center}\n#rrapp .cin{font-family:var(--font);font-weight:700;font-size:1.25em;padding:.4em .9em;border-radius:999px;border:2px solid var(--line);background:var(--raise);color:var(--fg);width:min(560px,78vw);text-align:center}\n#rrapp textarea.cin{border-radius:14px;resize:none}\n#rrapp .cin:focus{outline:none;border-color:var(--blue)}\n#rrapp .ask2{margin-top:6px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}\n#rrapp .feedback{display:block;line-height:1.7}\n#rrapp .feedback .spacer{display:inline-block;width:1.2em}\n#rrapp .slide .hlbody{max-width:100%}\n#rrapp .feedback .ask2{width:100%}\n#rrapp .pkeys{display:flex;gap:10px}\n#rrapp .pkeys button{font-family:var(--font);font-weight:700;font-size:1.2em;width:2.4em;height:2.4em;border-radius:50%;border:2px solid #fff;background:#000;color:#fff;cursor:pointer}\n#rrapp .pkeys button:active{background:var(--s-blue);border-color:var(--s-blue)}\n#rrapp .v1{color:var(--blue)}\n#rrapp .v05{color:var(--amber)}\n#rrapp .v0{color:var(--red)}\n#rrapp .amber{color:var(--amber)}\n#rrapp .rx.opt{border-color:var(--amber);background:#2A1F00}\n#rrapp .stage{display:flex;flex-direction:column;gap:12px;font-size:15px}\n#rrapp .stage>*{width:min(100%, max(560px, calc((100vh - 270px) * 16 / 9)));margin-inline:auto}\n#rrapp .stage:fullscreen,#rrapp .stage.fs{background:#000;padding:1.6vh 2vw;gap:1.2vh;height:100vh;width:100vw;overflow:hidden;justify-content:flex-start;font-size:clamp(14px,2.4vh,28px)}\n#rrapp .stage.fs{position:fixed;inset:0;z-index:99}\n#rrapp .stage:fullscreen>*,#rrapp .stage.fs>*{width:100%;max-width:none;margin:0}\n#rrapp .stage:fullscreen #slideWrap,#rrapp .stage.fs #slideWrap{flex:1 1 0;min-height:0;container-type:size;display:flex;align-items:center;justify-content:center}\n#rrapp .stage:fullscreen #slideWrap .slide,#rrapp .stage.fs #slideWrap .slide{width:min(100cqw,calc(100cqh * 16 / 9));flex:none}\n#rrapp .stage:fullscreen .bar,#rrapp .stage.fs .bar,#rrapp .stage:fullscreen .dock,#rrapp .stage.fs .dock,#rrapp .stage:fullscreen #fb,#rrapp .stage.fs #fb,#rrapp .stage:fullscreen .chips,#rrapp .stage.fs .chips{flex:none}\n#rrapp .stage:fullscreen .btn,#rrapp .stage.fs .btn{font-size:.95em;padding:.3em .9em}\n#rrapp .stage:fullscreen .bar,#rrapp .stage.fs .bar{font-size:.9em}\n#rrapp .stage:fullscreen .feedback,#rrapp .stage.fs .feedback{font-size:1.05em;padding:.35em .8em}\n#rrapp .stage:fullscreen .walkin,#rrapp .stage.fs .walkin{margin:0}\n#rrapp .stage:fullscreen .keypad,#rrapp .stage.fs .keypad{display:none}\n@media (pointer:coarse){#rrapp .stage.fs .keypad{display:grid}}\n@media (max-width:820px){#rrapp .keypad{display:grid}\n#rrapp .stage>*{width:100%}\n#rrapp .bar{flex-wrap:wrap;row-gap:8px}\n#rrapp .bar>span{white-space:nowrap}\n#rrapp .bar .prog{min-width:60px}}\n#rrapp .simple header nav,#rrapp .simple #courseSel{display:none}\n#rrapp .nofs .fsbtn{display:none}\n#rrapp .rx{border-left:4px solid var(--red);padding:8px 13px;margin:8px 0;background:#2A0A0A}\n#rrapp .panel .rx{background:#FFECEC;color:#000}\n#rrapp .keypad{display:none;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}\n#rrapp .keypad button{font-family:var(--font);font-weight:700;font-size:18px;padding:0;width:100%;border-radius:50%;aspect-ratio:1;border:2px solid #fff;background:#000;color:#fff;cursor:pointer;touch-action:manipulation}\n#rrapp .keypad button:active{background:var(--s-blue);border-color:var(--s-blue)}\n@media (pointer:coarse){#rrapp .keypad{display:grid}}\n#rrapp .slide sup,#rrapp .feedback sup,#rrapp .rx sup,#rrapp td sup{color:var(--s-red);font-size:.65em;vertical-align:.5em;line-height:0}\n#rrapp .slide .cbanner{position:absolute;left:50%;transform:translateX(-50%);bottom:2.2%;padding:.1em 1em;border-radius:999px;background:var(--s-red);color:#fff;font-weight:700;font-size:calc(var(--pt)*20);letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;z-index:5}\n\n"; document.head.appendChild(st);
var fl = document.createElement("link"); fl.rel = "stylesheet"; fl.href = "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap"; document.head.appendChild(fl);
mount.classList.add("rr"); mount.innerHTML = "<div class=\"wrap\">\n  <header>\n    <div class=\"brand\"><h1 id=\"appTitle\">The Monuments</h1><select id=\"courseSel\" aria-label=\"Course\"></select></div>\n    <nav class=\"rr-nav\" role=\"tablist\" aria-label=\"Modes\"></nav>\n  </header>\n  <main id=\"view\"></main>\n</div>";

/* =============================================================
   THE MONUMENTS (v4): one program for the full app and the chapter lessons.
   Modes: Edifice walk, Monument contents, Monument address, Highlights (when the course has highlight data).
   COURSES, ROOMS and SIMPLE are written in by the builder (make_practice.py) or by the page (window.RR_*).
   Nothing here is timed on screen; durations are recorded silently.
   ============================================================= */
const COURSES = (typeof window !== "undefined" && window.RR_COURSES) || [];
// Chapter lessons set this: { title: "Chapter 2 · A–J" }. No settings screen; the modes run in order.
const SIMPLE = (typeof window !== "undefined" && window.RR_SIMPLE) || /*__SIMPLE__*/null;
// { names: {a: "art studio"}, stations: {"16": [x%, y%]}, img: {a: url} }. Without it, no edifice walk and no room prompts.
const ROOMS = (typeof window !== "undefined" && window.RR_ROOMS) || /*__ROOMS__*/null;
const RESULTS_ENDPOINT = (typeof window !== "undefined" && window.RR_ENDPOINT) || "https://script.google.com/macros/s/AKfycbywsmiSChYxsX8wV3AC3b4w5rARGOdySYZB-0_Jwd5_VUkiYgThtiy21_-ulzGT-aJe/exec";
const STORE_KEY = "record-practice-v4";
const APP_VERSION = "2026-11-v4-next";
const CONSENT_VERSION = "2026-11-20";

const L26 = "abcdefghijklmnopqrstuvwxyz";
COURSES.forEach(c => c.rows.forEach(r => {
  if (r.title == null) r.title = r.relevance || "";
  r.hls = (r.highlights || []).filter(h => h && String(h.hl || "").trim())
    .map(h => ({ p: Number(h.p), stem: String(h.stem || ""), hl: String(h.hl), pts: String(h.pts || "").trim().toLowerCase(), kw: String(h.kw || "") }));
}));
const HAS_HL = COURSES.some(c => c.rows.some(r => r.hls.length));
const BLOCKS = ["index", "primary", "secondary", "date", "title", "gist"];
const ASK = { index: "index word", primary: "primary figure", secondary: "secondary figure", date: "date", title: "title", gist: "gist" };
const CUE = { index: "Type the index word", primary: "Type the primary figure", secondary: "Type the secondary figure",
  date: "Type the date, as a number or as its major-system word", title: "Type the title", gist: "Say the gist in your own words" };
const FONT = { index: "", primary: "s-primary", secondary: "s-secondary", date: "s-date", title: "s-rel", gist: "s-gist" };
const has = (r, k) => String(r[k] || "").trim() !== "";
const POS = {
  card: [1.0, 1.4, 98.1, 97.2], circle: [3.1, 5.7, 3.8, 6.7], circle2: [3.1, 14.5, 3.8, 6.7], index: [3.3, 19.1, 18.9, 5.3],
  primary: [3.3, 39.9, 18.9, 5.3], secondary: [3.3, 45.2, 18.9, 5.3], date: [3.3, 69.9, 18.9, 8.8],
  title: [76.7, 9.7, 20.3, 24.7], gist: [76.7, 40.8, 20.3, 49.7], image: [24.1, 3.9, 51.8, 92.1],
  label: [78.9, 1.5, 16.8, 2.7], key: [2.5, 95.3, 20.5, 3.1], copy: [80.8, 95.6, 13.1, 2.9],
};
const CHAPTERS = [["a-e", "Chapter 1 · A–E"], ["f-j", "Chapter 2 · F–J"], ["k-o", "Chapter 3 · K–O"], ["p-t", "Chapter 4 · P–T"], ["u-z", "Chapter 5 · U–Z"]];
const MODES = { walk: "Edifice walk", contents: "Monument contents", address: "Monument address", highlights: "Highlights" };
const availModes = () => ["walk", "contents", "address", "highlights"].filter(m => m === "walk" ? !!ROOMS : m === "highlights" ? HAS_HL : true);
const nextMode = m => { const a = availModes(), i = a.indexOf(m); return i >= 0 ? a[i + 1] : null; };

/* ---------- storage ---------- */
function fresh() { return { activeId: COURSES[0] && COURSES[0].id, history: [], settings: {} }; }
function load() { try { const s = JSON.parse(localStorage.getItem(STORE_KEY)); if (s && s.history) return s; } catch (e) {} return fresh(); }
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {} }
let store = load();
// The notice is shown once per browser, before anything is sent. "Don't record" is remembered; older wording is shown the new notice once.
const needsNotice = () => !!RESULTS_ENDPOINT && (!store.consent || (store.consent === "yes" && store.consentVersion !== CONSENT_VERSION));
if (!COURSES.find(c => c.id === store.activeId)) store.activeId = COURSES[0].id;
const course = id => COURSES.find(c => c.id === id);
const active = () => course(store.activeId);
const rowsOf = c => c.rows.map(r => ({ ...r, cid: c.id, ctitle: c.title }));
const rowAt = (cid, L) => { const c = course(cid); return c ? rowsOf(c).find(r => r.L === L) : null; };
const setting = (k, d) => store.settings[k] ?? d;
const remember = o => { Object.assign(store.settings, o); save(); };

/* ---------- matching ---------- */
const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").replace(/^the /, "").trim();
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
// Titles: case, articles, small words and number words don't matter; most of the content words must be there.
const STOPW = new Set(["a", "an", "the", "of", "to", "and", "in", "on", "for", "is", "was", "as", "by", "with"]);
const NUMW = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };
const toks = s => norm(s).split(" ").filter(t => t && !STOPW.has(t)).map(t => String(NUMW[t] ?? t)).map(t => t.length > 3 ? t.replace(/s$/, "") : t);
function titleOK(given, target) {
  return String(target).split(/[\/;]/).some(alt => { if (close(given, alt)) return true;
    const a = toks(given), b = toks(alt); if (!a.length || !b.length) return false;
    const hit = b.filter(x => a.some(y => y === x || close(y, x))).length;
    return hit >= Math.ceil(b.length * 0.8) && a.length <= b.length + 2; });
}
// Dates: the number (commas, BCE/CE, c. ignored) or the major-system word.
function dateOK(given, r) {
  const s = String(given || "").toLowerCase().trim(); if (!s) return false;
  if (r.keyword && (close(s, r.keyword) || norm(s).replace(/ /g, "") === norm(r.keyword).replace(/ /g, ""))) return true;
  const clean = t => String(t).toLowerCase().replace(/(\d),(\d)/g, "$1$2");
  const g = clean(s).match(/(\d{1,5})/); if (!g) return false;
  const gBce = /b\.?\s?c|bce|-\s*\d/.test(clean(s)), gCe = /\bce\b|a\.?d\.?/.test(clean(s));
  const tStr = clean(r.date), tBce = /b\.?\s?c|bce/.test(tStr);
  if ((gBce && !tBce) || (gCe && tBce)) return false;
  return [...tStr.matchAll(/\d{1,5}/g)].some(m => Number(m[0]) === Number(g[1]));
}
function gradeBlock(k, given, r) {
  if (!String(given).trim()) return 0;
  if (k === "index") return close(given, r.index) ? 1 : 0;
  if (k === "primary" || k === "secondary") return nameOK(given, r[k]) ? 1 : 0;
  if (k === "date") return dateOK(given, r) ? 1 : 0;
  if (k === "title") return titleOK(given, r.title) ? 1 : 0;
  return null;        // gist: the learner judges
}
const plain = (r, k) => k === "index" ? r.index.toUpperCase() : k === "date" ? r.date + (r.keyword ? ` (${r.keyword})` : "") : r[k];

/* ---------- utilities ---------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const sup = s => esc(s).replace(/\^(\w+(?:,\w+)*)/g, "<sup>$1</sup>");
const PRELOADED = [];
function preload(urls) { const q = [...new Set(urls.filter(Boolean))]; let i = 0;
  const next = () => { if (i >= q.length) return; const im = new Image(); PRELOADED.push(im); im.onload = im.onerror = next; im.src = q[i++]; };
  for (let k = 0; k < 3; k++) next(); }
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
// shuffled, with the same letter never twice in a row where the pool allows it
function spread(items, L = x => x.row.L) { const a = shuffle(items);
  for (let i = 1; i < a.length; i++) if (L(a[i]) === L(a[i - 1])) { const j = a.findIndex((x, n) => n > i && L(x) !== L(a[i - 1]) && (n + 1 >= a.length || L(a[n + 1]) !== L(a[i]) || true)); if (j > 0) [a[i], a[j]] = [a[j], a[i]]; }
  return a; }
const pct = (n, d) => d ? Math.round(100 * n / d) + "%" : "–";
const day = () => new Date(Date.now()).toISOString();
const info = tip => `<span class="info" role="button" tabindex="0" aria-label="${esc(tip)}">i<span class="tip">${esc(tip)}</span></span>`;
const help = () => `<button type="button" class="helpq" aria-label="How this works" aria-expanded="false">?</button>`;
const helpBox = key => `<div class="help" hidden>${HELP[key].map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
const goBtn = (text, big) => `<button type="button" class="gocircle ${big ? "big" : ""}" id="go">${esc(text)}</button>`;
const inChapters = (r, ch) => !ch || !ch.length || ch.length === CHAPTERS.length || ch.some(c => r.L >= c[0] && r.L <= c[2]);
const chosen = v => v === "all" || !v ? null : v;
const coursesFrom = v => { const ids = chosen(v); return ids ? COURSES.filter(c => ids.includes(c.id)) : COURSES; };
const HELP = {
  walk: [
    "A room of the edifice appears with one station marked. Type the index word of the monument that lives there and press Enter. Enter on an empty box means you don't know.",
    "Every answer is followed by the monument itself: for a few seconds when you're right, and until you go on when you're not. Take it in; that look is part of the practice.",
    "Room by room walks the house from A to Z. Mix courses to practise telling them apart."],
  contents: [
    "A monument appears with one block marked: the index word, a figure, the date, the title or the gist. Type what belongs there and press Enter. Enter on an empty box means you don't know.",
    "Only the marked block is revealed, so you see just what you were asked. Names, dates and titles are checked for you (tell it when it was too strict). For the gist you judge whether your idea matches.",
    "Dates can be given as the number or as the major-system word. Anything you miss comes back later in the same session. There is no clock."],
  address: [
    "One item from a monument appears alone on a blank slide, in the place it sits on its monument index. Type or tap the letter it belongs to; it lands in the red circle.",
    "A right answer shows the monument for a moment and moves on. A wrong one shows where the item lives and what you placed it on.",
    "When you mix courses, press the course number first, then the letter."],
  highlights: [
    "Each record paragraph has one highlighted phrase, and each record has one cross-reference. This is an advanced mode: read the records first.",
    "Complete it: you see the start of a sentence and say how it finishes, then the highlight appears and you say whether you're confident in your answer. Find it: you see the highlight and give its record letter and paragraph number (1 to 4). For a cross-reference, you give the letter of the monument it points to, or the record it sits in.",
    "Anything you weren't confident about, or missed, comes back sooner in the same session."],
  progress: [
    "Each tile is a letter, coloured by how it has gone across every practice: blue border strong, amber shaky, red weak.",
    "Everything is saved in this browser only. Copy the results as spreadsheet rows to keep them anywhere else."],
};

/* ---------- branded multi-select ---------- */
function msel(id, label, opts, { single = false, allText = "All", tip = "" } = {}) {
  return `<div class="msel" id="${id}" data-single="${single ? 1 : 0}" data-all="${esc(allText)}"><span class="mlabel">${esc(label)}${tip ? info(tip) : ""}</span>
    <button type="button" class="mbtn" aria-haspopup="true" aria-expanded="false"><span class="msum"></span><span class="caret">▾</span></button>
    <div class="mpop" hidden>${single ? "" : `<label class="mopt mall"><input type="checkbox" data-all="1"> ${esc(allText)}</label>`}
      ${opts.map(([v, t, sh]) => `<label class="mopt"><input type="${single ? "radio" : "checkbox"}" name="${id}_o" value="${esc(v)}" data-short="${esc(sh || t)}"> ${esc(t)}</label>`).join("")}</div></div>`;
}
function mselSet(id, values) {
  const el = $("#" + id); if (!el) return;
  const single = el.dataset.single === "1", boxes = [...el.querySelectorAll('input[value]')];
  const want = new Set(Array.isArray(values) ? values : [values]);
  boxes.forEach(b => { b.checked = single ? want.has(b.value) : (!values || values === "all" || want.has(b.value)); });
  if (single && !boxes.some(b => b.checked) && boxes[0]) boxes[0].checked = true;
  mselSum(id);
}
function mselGet(id) {
  const el = $("#" + id); if (!el) return null;
  const boxes = [...el.querySelectorAll('input[value]')], on = boxes.filter(b => b.checked).map(b => b.value);
  if (el.dataset.single === "1") return on[0];
  return on.length === boxes.length || !on.length ? "all" : on;
}
function mselSum(id) {
  const el = $("#" + id), single = el.dataset.single === "1", boxes = [...el.querySelectorAll('input[value]')], on = boxes.filter(b => b.checked);
  const all = el.querySelector("[data-all]"); if (all) all.checked = on.length === boxes.length;
  el.querySelector(".msum").textContent = single ? (on[0] ? on[0].dataset.short : "")
    : on.length === boxes.length ? el.dataset.all : !on.length ? "Choose at least one" : on.map(b => b.dataset.short).join(", ");
}
document.addEventListener("click", e => {
  const btn = e.target.closest(".mbtn"), inPop = e.target.closest(".mpop"), wasOpen = btn && btn.getAttribute("aria-expanded") === "true";
  const closePop = p => { p.hidden = true; const el = p.parentElement; el.querySelector(".mbtn").setAttribute("aria-expanded", "false");
    const boxes = [...el.querySelectorAll('input[value]')]; if (!boxes.some(b => b.checked)) { boxes.forEach(b => b.checked = true); mselSum(el.id); } };
  document.querySelectorAll(".msel .mpop:not([hidden])").forEach(p => { if (!p.parentElement.contains(e.target) || (btn && btn.parentElement === p.parentElement)) closePop(p); });
  if (btn && !wasOpen) { const pop = btn.parentElement.querySelector(".mpop"); pop.hidden = false; btn.setAttribute("aria-expanded", "true"); }
  if (inPop && e.target.matches("input")) {
    const el = inPop.parentElement, boxes = [...el.querySelectorAll('input[value]')];
    if (e.target.dataset.all) boxes.forEach(b => b.checked = e.target.checked);
    if (el.dataset.single === "1") { inPop.hidden = true; el.querySelector(".mbtn").setAttribute("aria-expanded", "false"); }
    mselSum(el.id);
  }
});
const chapterSel = id => msel(id, "Letters", CHAPTERS.map(([v, t]) => [v, t, t.split(" · ")[1]]), { allText: "All 26" });
const courseSel = id => COURSES.length > 1 ? msel(id, "Courses", COURSES.map(c => [c.id, c.title]), { allText: "All courses", tip: "Pick more than one to mix their letters together." }) : "";
const orderSel = id => msel(id, "Order", [["seq", "A to Z"], ["shuf", "Shuffled"]], { single: true });
const partsSel = (id, keys, tip) => msel(id, "Parts", keys.map(k => [k, ASK[k].charAt(0).toUpperCase() + ASK[k].slice(1), ASK[k]]), { allText: "All parts", tip });

/* ---------- keys, stopping, screens ---------- */
let keyHandler = null, liveTimeouts = [];
function setKeys(fn) { if (keyHandler) document.removeEventListener("keydown", keyHandler); keyHandler = fn; if (fn) document.addEventListener("keydown", fn); }
const typing = e => /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) && !e.target.readOnly;
function stopAll() { liveTimeouts.forEach(clearTimeout); liveTimeouts = []; setKeys(null); }
const later = (fn, ms) => liveTimeouts.push(setTimeout(fn, ms));
const disarm = () => { liveTimeouts.forEach(clearTimeout); liveTimeouts = []; };

/* ---------------- the slide ---------------- */
const box = (k, cls, inner, extra = "", attrs = "") => { const [x, y, w, h] = POS[k];
  return `<div class="el ${cls}" ${attrs} style="left:${x}%;top:${y}%;width:${w}%;height:${h}%;${extra}">${inner}</div>`; };
function dateHTML(r) {
  const era = (String(r.date).match(/\b(BCE|CE)\b/) || [""])[0];
  const extra = era ? String(r.date).split(era)[1].trim() : "";
  if (!r.notation) return `<span>${esc(r.date)}</span>`;
  const body = r.notation.split(/(\d+)/).map(p => !p ? "" : /^\d+$/.test(p) ? `<sup>${p}</sup>` : esc(p)).join("");
  return `<span style="white-space:pre">${body} <span class="era">${era}</span></span>${extra ? `<span>${esc(extra)}</span>` : ""}`;
}
function answerHTML(r, k) {
  if (k === "index") return `<span class="s-isfor">is for&nbsp;</span><span class="s-word">${esc(r.index.toUpperCase())}</span>`;
  if (k === "secondary") return `(+ ${esc(r.secondary)})`;
  if (k === "date") return dateHTML(r);
  return esc(r[k]);
}
function rails(activeL) {
  return L26.split("").map((c, i) => { const left = i < 13; const y = 1.6 + (i % 13) * 7.72;
    return `<div class="rail ${c === activeL ? "on" : ""}" style="left:${left ? 0.65 : 97.0}%;top:${y}%">${c.toUpperCase()}</div>`; }).join("");
}
function chrome(label) {
  const ci = String(label).indexOf(" · "), banner = session && session.multi && ci > 0 ? `<div class="cbanner">${esc(label.slice(0, ci))}</div>` : "";
  if (banner) label = label.slice(ci + 3);
  return banner + box("label", "tiny", esc(label), "justify-content:center") +
    box("key", "tiny key", "<span style=\"white-space:pre\"><b>0</b>SZ <b>1</b>TD <b>2</b>N <b>3</b>M <b>4</b>R <b>5</b>L <b>6</b>ShJCh <b>7</b>KG <b>8</b>FV <b>9</b>PB</span>") +
    box("copy", "tiny", "©mnovum.org(anum), 2026", "justify-content:center");
}
function circle(text, ok, k = "circle") { const [x, y, w, h] = POS[k]; return `<div class="circle ${ok ? "ok" : ""} ${k === "circle2" ? "small" : ""}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%">${esc(String(text).toUpperCase())}</div>`; }
function imgbox(inner, blank) { const [x, y, w, h] = POS.image; return `<div class="imgbox ${blank ? "blank" : ""}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%">${inner}</div>`; }
function card() { const [x, y, w, h] = POS.card; return `<div class="card" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%"></div>`; }
function monumentSlide(r, label) {
  let s = card() + rails(r.L) + circle(r.L) + chrome(label || "monument index");
  s += imgbox(r.img ? `<img class="fade" src="${r.img}" alt="Plate for ${r.L.toUpperCase()}">` : `<span class="room">${esc(r.primary)}</span>`);
  BLOCKS.forEach(k => { if (!has(r, k)) return; s += box(k, (FONT[k] || "") + " fade", answerHTML(r, k)); });
  return `<div class="slide" id="slide">${s}</div>`;
}
// address: one item alone on a blank slide
function blankSlide(r, kind, o = {}) {
  let s = card() + circle(o.typed || "", o.ok) + imgbox("", true);
  if (kind !== "index") s += box(kind, FONT[kind], kind === "secondary" ? `(+ ${esc(r.secondary)})` : kind === "date" ? dateHTML(r) : esc(r[kind]));
  return `<div class="slide" id="slide">${s}</div>`;
}
// contents: the letter and one marked block; the block fills in on reveal
function contentsSlide(r, kind, o = {}) {
  let s = card() + rails(r.L) + circle(r.L) + chrome(o.label || "monument contents") + imgbox("", true);
  BLOCKS.forEach(k => { if (k !== "index" && !has(r, k)) return;
    if (k !== kind) { s += box(k, "ghost", ""); return; }
    s += box(k, `target ${o.reveal ? "shown " + (FONT[k] || "") : ""}`, o.reveal ? answerHTML(r, k) : `<span class="tq">${esc(ASK[k])}?</span>`); });
  return `<div class="slide" id="slide">${s}</div>`;
}
const roomOK = r => { const c = course(r.cid); return !!(ROOMS && c && c.slot && ROOMS.img[r.L] && ROOMS.stations[String(c.slot)]); };
const roomName = r => `${(ROOMS.names || {})[r.L] || "room " + r.L.toUpperCase()} · station ${course(r.cid).slot}`;
function roomSlide(r, o = {}) {
  const st = ROOMS.stations[String(course(r.cid).slot)];
  return `<div class="slide" id="slide">${card()}${circle(o.typed || "", o.ok)}
    <div class="roomimg" style="left:9.5%;top:2%;width:81%;height:96%"><img src="${ROOMS.img[r.L]}" alt="A room of the edifice">
      <div class="st-mark ${o.ok ? "ok" : ""}" style="left:${st[0]}%;top:${st[1]}%"></div></div>
    <div class="rq">${esc(o.q || "which monument lives here?")}</div></div>`;
}
function startScreen(inner) {
  $("#view").innerHTML = `<div class="stage"><div class="slide ss" id="startSlide">${card()}${rails("")}${chrome("the monuments")}<div class="ss-body">${inner}</div></div></div>`;
}
const panel = html => { $("#view").innerHTML = `<div class="panel ${(html.includes('id="go"') || html.includes('id="cYes"')) ? "start" : ""}">${html}</div>`; };

/* ---------------- shell: nav, notice, full screen ---------------- */
let current = "";
const viewFns = { walk: () => walkStart(), contents: () => contentsStart(), address: () => addressStart(), highlights: () => highlightsStart(), progress: () => progress(), simple: () => simpleStart() };
function show(view) {
  stopAll(); current = view;
  document.querySelectorAll("nav.rr-nav button").forEach(b => b.setAttribute("aria-selected", b.dataset.view === view));
  viewFns[view]();
}
const begin = fn => needsNotice() ? consentAsk(fn) : fn();
function consentAsk(then) {
  const view = $("#view"), prev = [...view.children];
  prev.forEach(el => { el.style.display = "none"; });
  const box = document.createElement("div"); view.appendChild(box);
  box.innerHTML = `<div class="panel start"><div class="eyebrow">Before you begin</div><h2>Anonymous results</h2>
    <div class="consent">
      <p>Anonymous results are recorded to improve our courses: which items you practised, whether you got them right, how long it took, how sure you were, and the date.</p>
      <p>The program doesn't record your name, email, account, IP address or location, or anything you type, and one practice session isn't linked to another.</p>
      <p>Practising works the same either way, and you can change this any time under Progress.</p>
    </div>
    <div class="row consent-row"><button type="button" class="gocircle cyes" id="cYes">OK</button></div>
    <div class="row consent-row" style="margin-top:8px"><button type="button" class="btn ghost small" id="cNo">Don't record my results</button></div></div>`;
  const pick = v => { store.consent = v; store.consentAt = day(); store.consentVersion = CONSENT_VERSION; save();
    box.remove(); prev.forEach(el => { el.style.display = ""; }); then(); };
  $("#cYes").onclick = () => pick("yes"); $("#cNo").onclick = () => pick("no");
}
// Full screen belongs to a container that is never re-drawn (the stage is rebuilt for every question, so it can't be the fullscreen element:
// the browser leaves fullscreen the moment that element is removed). fsOn is carried onto each new stage as it appears.
let fsOn = false;
const fsHost = () => ($("#view") && $("#view").closest(".wrap")) || $("#rrapp") || document.documentElement;
function fsSet(on) {
  fsOn = on; const st = $("#stage"); if (st) st.classList.toggle("fs", on);
  if (!on) { try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {} }
}
function fullscreen() {
  if (!$("#stage")) return;
  if (fsOn) return fsSet(false);
  fsSet(true);
  try { const p = fsHost().requestFullscreen(); if (p && p.catch) p.catch(() => {}); } catch (e) {}
}
document.addEventListener("fullscreenchange", () => { if (fsOn && !document.fullscreenElement) fsSet(false); });
new MutationObserver(() => { if (!fsOn) return; const st = $("#stage"); if (st) { if (!st.classList.contains("fs")) st.classList.add("fs"); } else fsSet(false); }).observe($("#view"), { childList: true });
document.addEventListener("click", e => {
  const g = e.target.closest("[data-goto]"); if (g) { e.preventDefault(); show(g.dataset.goto); }
  const fsb = e.target.closest(".fsbtn"); if (fsb) { fsb.blur(); fullscreen(); const f = $("#cIn") || $("#wIn") || $("#hIn"); if (f) setTimeout(() => f.focus(), 200); }
  const q = e.target.closest(".helpq"); if (q) { const h = q.closest(".panel, .ss").querySelector(".help"); h.hidden = !h.hidden; q.setAttribute("aria-expanded", String(!h.hidden)); }
  const inf = e.target.closest(".info"); document.querySelectorAll(".info.open").forEach(x => { if (x !== inf) x.classList.remove("open"); }); if (inf) inf.classList.toggle("open");
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && fsOn && !document.fullscreenElement) fsSet(false); });
$("#courseSel").innerHTML = COURSES.map(c => `<option value="${c.id}">${esc(c.title)}</option>`).join("");
$("#courseSel").value = store.activeId;
$("#courseSel").addEventListener("change", () => { store.activeId = $("#courseSel").value; save(); show(current); });
if (COURSES.length < 2) $("#courseSel").style.display = "none";
$("nav.rr-nav").innerHTML = [...availModes(), "progress"].map(m => `<button role="tab" data-view="${m}">${m === "progress" ? "Progress" : MODES[m]}</button>`).join("");
$("nav.rr-nav").addEventListener("click", e => { const b = e.target.closest("button"); if (b) show(b.dataset.view); });
if (SIMPLE && SIMPLE.title) $("#appTitle").textContent = SIMPLE.title;

/* ---------------- the run engine ---------------- */
let session = null;
function startRun(test, items, settingsLog, render) {
  if (!items.length) return;
  session = { test, ts: day(), items: items.slice(), i: 0, total: items.length, done: 0, results: [], settingsLog, render,
    multi: new Set(items.map(x => x.row.cid)).size > 1 };
  preload(items.flatMap(x => [x.row.img, ROOMS && ROOMS.img[x.row.L]]));
  render();
}
const barHTML = (extra = "") => `<div class="bar"><span>${session.done + 1 > session.total ? session.total : session.done + 1} / ${session.total}</span>
  <div class="prog"><i style="width:${100 * session.done / session.total}%"></i></div>${extra}<span class="spacer"></span>
  <button class="btn ghost small fsbtn">Full screen</button><button class="btn ghost small" id="stop">Stop</button></div>`;
const labelOf = (r, base) => (session.multi ? r.ctitle + " · " : "") + base;
// record an item; items that were missed come back later in the same session (never straight after themselves)
function commit(it, res, requeue = true) {
  const s = session; res.tries = it.tries || 0; s.results.push(res);
  if (requeue && !res.ok && (it.tries || 0) < 2) {
    const again = { ...it, tries: (it.tries || 0) + 1 }; let p = Math.min(s.i + 5, s.items.length);
    const same = n => (s.items[n] && s.items[n].row.L === it.row.L) || (s.items[n - 1] && s.items[n - 1].row.L === it.row.L);
    while (p < s.items.length && same(p)) p++;
    s.items.splice(p, 0, again);
  } else s.done++;
  s.i++;
  if (s.i < s.items.length) s.render(); else finishRun();
}
function finish(test) {
  const rec = { id: "s" + Date.now(), uid: "s" + Math.random().toString(36).slice(2, 10), test, ts: session.ts, end: day(), settings: session.settingsLog, results: session.results };
  store.history.push(rec); save();
  if (RESULTS_ENDPOINT && store.consent === "yes" && rec.results.length) {
    try { fetch(RESULTS_ENDPOINT, { method: "POST", mode: "no-cors", body: JSON.stringify({ v: 2, header: HEAD, rows: rowsFor(rec, true) }) }).catch(() => {}); } catch (e) {} }
  return rec;
}
function finishRun() {
  stopAll(); fsSet(false);
  const test = session.test;
  if (!session.results.length) return SIMPLE ? simpleStart() : show(test);
  const rec = finish(test);
  ({ walk: walkDone, contents: contentsDone, address: addressDone, highlights: highlightsDone })[test](rec);
}
const stopBtn = () => { const b = $("#stop"); if (b) b.onclick = finishRun; };
function doneRow(view) {
  const nx = SIMPLE ? nextMode(view) : null;
  return `<div class="row" style="margin-top:18px">${nx ? `<button class="btn" id="nxMode">Next: ${esc(MODES[nx])}</button>` : ""}
    <button class="btn ${nx ? "ghost" : ""}" id="again">Go again</button>${SIMPLE ? "" : `<button class="btn ghost" data-goto="progress">Progress</button>`}</div>`;
}
function wireDone(view) {
  const nx = SIMPLE ? nextMode(view) : null;
  if ($("#nxMode")) $("#nxMode").onclick = () => begin(() => runDefault(nx));
  $("#again").onclick = () => SIMPLE ? begin(() => runDefault(view)) : show(view);
}
function runDefault(m) { ({ walk: walkBegin, contents: contentsBegin, address: addressBegin, highlights: highlightsBegin })[m]({ letters: "all", courses: "all", parts: "all", order: "shuf", which: "all", dir: "both", len: "all" }); }

/* =============================================================
   EDIFICE WALK: a room with one station marked; type the index word of the monument that lives there
   ============================================================= */
function walkStart() {
  startScreen(`${help()}<div class="eyebrow">Edifice walk</div><h2>Which index word lives here?</h2>${helpBox("walk")}
    <div class="opts">${chapterSel("wLetters")}${courseSel("wCourses")}${msel("wOrder", "Route", [["walk", "Room by room, A to Z"], ["shuf", "Shuffled"]], { single: true })}</div>${goBtn("Start")}`);
  mselSet("wLetters", setting("wLetters", "all")); mselSet("wCourses", setting("wCourses", "all")); mselSet("wOrder", setting("wOrder", "walk"));
  $("#go").onclick = () => {
    const cfg = { letters: mselGet("wLetters"), courses: mselGet("wCourses") || "all", order: mselGet("wOrder") };
    remember({ wLetters: cfg.letters, wCourses: cfg.courses, wOrder: cfg.order }); begin(() => walkBegin(cfg));
  };
}
function walkBegin(cfg) {
  const cs = coursesFrom(cfg.courses), slot = r => Number(course(r.cid).slot) || 99;
  let rows = cs.flatMap(rowsOf).filter(r => inChapters(r, chosen(cfg.letters)) && roomOK(r) && has(r, "index"));
  rows.sort((a, b) => a.L.localeCompare(b.L) || slot(a) - slot(b));
  if (cfg.order === "shuf") rows = spread(rows.map(row => ({ row }))).map(x => x.row);
  startRun("walk", rows.map(row => ({ row })), cfg, walkItem);
}
function walkItem() {
  const s = session, r = s.items[s.i].row, right = s.results.filter(x => x.ok).length;
  $("#view").innerHTML = `<div class="stage" id="stage">${barHTML(`<span>${right} named</span>`)}
    <div id="slideWrap">${roomSlide(r, { q: "which index word lives here?" })}</div>
    <div class="dock"><form class="walkin" id="wForm" autocomplete="off"><input class="cin" id="wIn" placeholder="index word" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Index word"><button class="btn small" type="submit" id="wGo">Don't know</button></form></div>
    <div id="fb"></div></div>`;
  stopBtn();
  const t0 = performance.now(); let done = false;
  $("#wForm").onsubmit = e => { e.preventDefault(); if (done) return; done = true; walkAnswer(String($("#wIn").value || "").trim(), Math.round(performance.now() - t0)); };
  $("#wIn").oninput = () => { $("#wGo").textContent = $("#wIn").value.trim() ? "Check" : "Don't know"; };
  setKeys(null); try { $("#wIn").focus(); } catch (e) {}
}
function walkAnswer(given, ms) {
  const s = session, it = s.items[s.i], r = it.row, correct = !!given && close(given, r.index);
  const res = { cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), at: day(), kind: "index", prompt: roomName(r), given, ok: correct ? 1 : 0, skipped: given ? 0 : 1, ms };
  const f = $("#wForm"); if (f) f.style.display = "none";
  try { document.activeElement.blur(); } catch (e) {}
  $("#slideWrap").innerHTML = roomSlide(r, { ok: correct, typed: r.L, q: "which index word lives here?" });
  const plate = () => { $("#slideWrap").innerHTML = monumentSlide(r, labelOf(r, "monument index")); };
  const go = () => { stopAll(); commit(it, res, false); };
  if (correct) {
    $("#fb").innerHTML = `<div class="feedback good">Right · ${esc(r.index.toUpperCase())} <span class="spacer"></span><span class="dim small">Enter to go on</span></div>`;
    later(plate, 600); later(go, 600 + 3000); later(() => setKeys(e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }), 50);
  } else {
    later(plate, 900);
    $("#fb").innerHTML = `<div class="feedback bad">${given ? `Not ${esc(given.toUpperCase())}. ` : ""}This is ${s.multi ? esc(r.ctitle) + " " : ""}<span class="L">${r.L.toUpperCase()}</span>: ${esc(r.index.toUpperCase())}.
      <span class="spacer"></span> <button class="btn small" id="nx">Next</button> <kbd>Enter</kbd></div>`;
    $("#nx").onclick = go; later(() => setKeys(e => { if (e.key === "Enter") { e.preventDefault(); go(); } }), 50);
  }
}
function walkDone(rec) {
  const R = rec.results, ok = R.filter(x => x.ok), multi = new Set(R.map(x => x.cid)).size > 1;
  panel(`<div class="eyebrow">Edifice walk · done</div><h2>${ok.length} of ${R.length} named</h2>
    <div class="stats"><div class="stat"><b>${pct(ok.length, R.length)}</b><span>named</span></div></div>
    <div class="tablewrap"><table class="t"><thead><tr><th>Room</th><th>Monument</th><th>Index word</th><th>You said</th></tr></thead><tbody>
    ${R.map(x => { const row = rowAt(x.cid, x.letter.toLowerCase()); return `<tr><td>${esc(x.prompt)}</td><td>${multi ? esc(x.course) + " " : ""}<span class="L">${x.letter}</span></td><td>${esc(((row && row.index) || "").toUpperCase())}</td>
      <td class="${x.ok ? "v1" : "v0"}">${esc(x.given ? x.given.toUpperCase() : "–")}</td></tr>`; }).join("")}</tbody></table></div>${doneRow("walk")}`);
  wireDone("walk");
}

/* =============================================================
   MONUMENT CONTENTS: a letter, one block marked; type what belongs there
   ============================================================= */
const CKEYS = BLOCKS;
function contentsStart() {
  startScreen(`${help()}<div class="eyebrow">Monument contents</div><h2>What's in this block?</h2>${helpBox("contents")}
    <div class="opts">${chapterSel("cLetters")}${courseSel("cCourses")}${partsSel("cParts", CKEYS, "Which blocks you are asked about.")}${orderSel("cOrder")}</div>${goBtn("Start")}`);
  mselSet("cLetters", setting("cLetters", "all")); mselSet("cCourses", setting("cCourses", "all")); mselSet("cParts", setting("cParts", "all")); mselSet("cOrder", setting("cOrder", "shuf"));
  $("#go").onclick = () => {
    const cfg = { letters: mselGet("cLetters"), courses: mselGet("cCourses") || "all", parts: mselGet("cParts"), order: mselGet("cOrder") };
    remember({ cLetters: cfg.letters, cCourses: cfg.courses, cParts: cfg.parts, cOrder: cfg.order }); begin(() => contentsBegin(cfg));
  };
}
function contentsBegin(cfg) {
  const cs = coursesFrom(cfg.courses), kinds = chosen(cfg.parts) || CKEYS;
  const rows = cs.flatMap(rowsOf).filter(r => inChapters(r, chosen(cfg.letters)));
  let items = rows.map(row => { const ok = kinds.filter(k => has(row, k)); return ok.length ? { row, kind: ok[Math.floor(Math.random() * ok.length)] } : null; }).filter(Boolean);
  items = cfg.order === "seq" ? items.sort((a, b) => a.row.L.localeCompare(b.row.L)) : spread(items);
  startRun("contents", items, cfg, contentsItem);
}
function contentsItem() {
  const s = session, it = s.items[s.i], r = it.row, k = it.kind, first = s.results.filter(x => x.ok && !x.tries).length;
  $("#view").innerHTML = `<div class="stage" id="stage">${barHTML(`<span>${first} first time</span>`)}
    <div id="slideWrap">${contentsSlide(r, k, { label: labelOf(r, "monument contents") })}</div>
    <div class="dock"><div class="hint">${esc(CUE[k])}</div>
      <form class="walkin" id="cForm" autocomplete="off">${k === "gist" ? `<textarea class="cin" id="cIn" rows="2" placeholder="gist" spellcheck="false"></textarea>` : `<input class="cin" id="cIn" placeholder="${esc(ASK[k])}" autocomplete="off" spellcheck="false" aria-label="${esc(ASK[k])}">`}
      <button class="btn small" type="submit" id="cGo">Don't know</button></form></div><div id="fb"></div></div>`;
  stopBtn();
  const t0 = performance.now(); let done = false;
  $("#cForm").onsubmit = e => { e.preventDefault(); if (done) return; done = true; contentsReveal(String($("#cIn").value || "").trim(), Math.round(performance.now() - t0)); };
  $("#cIn").oninput = () => { $("#cGo").textContent = $("#cIn").value.trim() ? "Check" : "Don't know"; };
  if (k === "gist") $("#cIn").onkeydown = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#cForm").requestSubmit(); } };
  setKeys(null); try { $("#cIn").focus(); } catch (e) {}
}
function contentsReveal(given, ms) {
  const s = session, it = s.items[s.i], r = it.row, k = it.kind, auto = gradeBlock(k, given, r);
  const res = { cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), at: day(), kind: k, given, ok: auto ? 1 : 0, skipped: given ? 0 : 1, ms, self: k === "gist" && given ? 1 : 0 };
  const d = document.querySelector(".dock"); if (d) d.style.display = "none";
  try { document.activeElement.blur(); } catch (e) {}
  $("#slideWrap").innerHTML = contentsSlide(r, k, { reveal: true, label: labelOf(r, "monument contents") });
  const go = () => { stopAll(); commit(it, res); };
  const nextRow = `<span class="spacer"></span><button class="btn small" id="nx">Next</button> <kbd>Enter</kbd>`;
  const arm = fn => later(() => setKeys(fn), 50);
  if (!given) {
    $("#fb").innerHTML = `<div class="feedback bad">It's <b>${esc(plain(r, k))}</b>. This one will come back. ${nextRow}</div>`;
    $("#nx").onclick = go; arm(e => { if (e.key === "Enter") { e.preventDefault(); go(); } });
  } else if (k === "gist") {
    $("#fb").innerHTML = `<div class="feedback">You said: <b>${esc(given)}</b><div class="ask2">Same idea? <button class="btn small" id="yes">Yes</button> <button class="btn small ghost" id="no">No</button> <kbd>Y</kbd> <kbd>N</kbd></div></div>`;
    const pick = v => { disarm(); res.ok = v; $("#fb").innerHTML = `<div class="feedback ${v ? "good" : "bad"}">${v ? "Good" : "This one will come back"}${nextRow}</div>`; $("#nx").onclick = go;
      setKeys(e => { if (e.key === "Enter") { e.preventDefault(); go(); } }); };
    $("#yes").onclick = () => pick(1); $("#no").onclick = () => pick(0);
    arm(e => { if (/^y$/i.test(e.key)) pick(1); else if (/^n$/i.test(e.key)) pick(0); });
  } else if (auto) {
    $("#fb").innerHTML = `<div class="feedback good">Right${nextRow}</div>`; $("#nx").onclick = go; arm(e => { if (e.key === "Enter") { e.preventDefault(); go(); } });
  } else {
    $("#fb").innerHTML = `<div class="feedback bad">You typed <b>${esc(given)}</b>. It's <b>${esc(plain(r, k))}</b>. <button class="btn small ghost" id="count">Count it</button>${nextRow}</div>`;
    $("#nx").onclick = go;
    const count = () => { disarm(); res.ok = 1; res.overridden = 1; $("#fb").innerHTML = `<div class="feedback good">Counted${nextRow}</div>`; $("#nx").onclick = go; setKeys(e => { if (e.key === "Enter") { e.preventDefault(); go(); } }); };
    $("#count").onclick = count; arm(e => { if (e.key === "Enter") { e.preventDefault(); go(); } else if (/^c$/i.test(e.key)) count(); });
  }
}
function contentsDone(rec) {
  const R = rec.results, first = R.filter(x => !x.tries), firstOk = first.filter(x => x.ok), multi = new Set(R.map(x => x.cid)).size > 1;
  const missed = first.filter(x => !x.ok);
  panel(`<div class="eyebrow">Monument contents · done</div><h2>${firstOk.length} of ${first.length} right the first time</h2>
    <div class="stats"><div class="stat"><b>${pct(firstOk.length, first.length)}</b><span>first time</span></div>
      <div class="stat"><b>${new Set(R.filter(x => x.ok).map(x => x.cid + x.letter + x.kind)).size}</b><span>blocks you have now</span></div></div>
    <h3>Review first</h3>
    ${missed.length ? missed.map(x => { const row = rowAt(x.cid, x.letter.toLowerCase()); return `<div class="rx">${multi ? esc(x.course) + " " : ""}<span class="L">${x.letter}</span> · ${esc(ASK[x.kind])}: ${esc(row ? plain(row, x.kind) : "")}</div>`; }).join("") : `<p class="dim">Nothing missed.</p>`}
    ${doneRow("contents")}`);
  wireDone("contents");
}

/* =============================================================
   MONUMENT ADDRESS: one item on a blank slide; type its letter in the circle
   ============================================================= */
const ADDR_KINDS = ["primary", "secondary", "date", "title", "gist"];
const PROMPTS = { room: "Room", primary: "Primary figure", secondary: "Secondary figure", title: "Title", gist: "Gist", date: "Date" };
const addrSlide = (it, o = {}) => it.kind === "room" ? roomSlide(it.row, o) : blankSlide(it.row, it.kind, o);
function addressStart() {
  startScreen(`${help()}<div class="eyebrow">Monument address</div><h2>Where does it live?</h2>${helpBox("address")}
    <div class="opts">${chapterSel("aLetters")}${courseSel("aCourses")}${partsSel("aParts", ADDR_KINDS, "Which parts of a monument you're shown, one at a time.")}</div>${goBtn("Start")}`);
  mselSet("aLetters", setting("aLetters", "all")); mselSet("aCourses", setting("aCourses", "all")); mselSet("aParts", setting("aParts", "all"));
  $("#go").onclick = () => {
    const cfg = { letters: mselGet("aLetters"), courses: mselGet("aCourses") || "all", parts: mselGet("aParts") };
    remember({ aLetters: cfg.letters, aCourses: cfg.courses, aParts: cfg.parts }); begin(() => addressBegin(cfg));
  };
}
function addressBegin(cfg) {
  const cs = coursesFrom(cfg.courses), kinds = chosen(cfg.parts) || ADDR_KINDS;
  const rows = cs.flatMap(rowsOf).filter(r => inChapters(r, chosen(cfg.letters)));
  const items = spread(rows.map(row => { const ok = [...kinds, ...(chosen(cfg.parts) ? [] : ["room"])].filter(k => k === "room" ? roomOK(row) : has(row, k));
    return { row, kind: ok.length ? ok[Math.floor(Math.random() * ok.length)] : "primary" }; }));
  startRun("address", items, { ...cfg, courses: cs.map(c => c.id) }, addressItem);
}
function addressItem() {
  const s = session, it = s.items[s.i], multi = new Set(COURSES.map(c => c.id)).size > 1 && s.multi, right = s.results.filter(r => r.ok).length;
  const cids = [...new Set(s.items.map(x => x.row.cid))];
  $("#view").innerHTML = `<div class="stage" id="stage">${barHTML(`<span>${right} placed</span>`)}
    ${multi ? `<div class="chips">${cids.map((id, n) => `<button class="chip" data-n="${n}" aria-pressed="false"><kbd>${n + 1}</kbd> ${esc(course(id).title)}</button>`).join("")}</div>` : ""}
    <div id="slideWrap">${addrSlide(it)}</div>
    <div class="bigprompt"><span class="k">${esc(PROMPTS[it.kind] || "")}</span>${it.kind === "room" ? "Which monument lives here?" : it.kind === "date" ? dateHTML(it.row) : esc(it.kind === "secondary" ? it.row.secondary : it.row[it.kind])}</div>
    <div class="keypad" id="keypad">${L26.split("").map(c => `<button type="button" data-l="${c}">${c.toUpperCase()}</button>`).join("")}</div>
    <div id="fb" class="dim small">${multi ? "Course first, then the letter." : "Type or tap a letter, A–Z."}</div></div>`;
  stopBtn();
  const t0 = performance.now(); let pc = multi ? null : cids[0], pl = null, done = false;
  const go = () => { if (!done && pc && pl) { done = true; addressAnswer(pc, pl, Math.round(performance.now() - t0)); } };
  const pickC = n => { if (n < 0 || n >= cids.length) return; pc = cids[n]; document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", Number(c.dataset.n) === n)); go(); };
  document.querySelectorAll(".chip").forEach(c => c.onclick = () => pickC(Number(c.dataset.n)));
  const letter = l => { if (done) return; pl = l; $("#slideWrap").innerHTML = addrSlide(it, { typed: pl }); go(); };
  $("#keypad").onclick = e => { const b = e.target.closest("button[data-l]"); if (b) { b.blur(); letter(b.dataset.l); } };
  setKeys(e => {
    if (done || e.metaKey || e.ctrlKey || e.altKey) return;
    if (multi && /^[1-9]$/.test(e.key)) { e.preventDefault(); pickC(Number(e.key) - 1); return; }
    if (/^[a-zA-Z]$/.test(e.key)) { e.preventDefault(); letter(e.key.toLowerCase()); }
  });
}
function addressAnswer(cid, L, ms) {
  const s = session, it = s.items[s.i], r = it.row, multi = s.multi, correct = cid === r.cid && L === r.L;
  const res = { cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), at: day(), kind: it.kind, prompt: it.kind === "room" ? roomName(r) : r[it.kind], givenCourse: cid, givenLetter: L.toUpperCase(), ok: correct ? 1 : 0, ms };
  setKeys(null);
  const kp = $("#keypad"); if (kp) kp.style.display = "none";
  $("#fb").classList.remove("dim");
  const where = (id, l) => (multi ? esc(course(id).title) + " " : "") + `<span class="L">${l.toUpperCase()}</span>`;
  const go = () => { stopAll(); commit(it, res, false); };
  const arm = fn => later(() => setKeys(fn), 50);
  if (correct) {
    $("#slideWrap").innerHTML = addrSlide(it, { typed: L, ok: true });
    $("#fb").innerHTML = `<div class="feedback good">Right <span class="spacer"></span><span class="dim small">Enter to go on</span></div>`;
    later(() => { $("#slideWrap").innerHTML = monumentSlide(r, labelOf(r, "monument index")); }, 450); later(go, 450 + 3000);
    arm(e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
  } else {
    const other = rowAt(cid, L);
    $("#slideWrap").innerHTML = monumentSlide(r, labelOf(r, "monument index"));
    $("#fb").innerHTML = `<div class="feedback bad">It lives at ${where(r.cid, r.L)}. ${other ? `You placed it at ${where(cid, L)}, which holds ${esc(other.primary)} · ${esc(other.title)}.` : `There's nothing at ${where(cid, L)}.`}
      <span class="spacer"></span> <button class="btn small" id="nx">Next</button> <kbd>Enter</kbd></div>`;
    $("#nx").onclick = go; arm(e => { if (e.key === "Enter") { e.preventDefault(); go(); } });
  }
}
function addressDone(rec) {
  const R = rec.results, ok = R.filter(r => r.ok), multi = new Set(R.map(r => r.cid)).size > 1;
  panel(`<div class="eyebrow">Monument address · done</div><h2>${ok.length} of ${R.length} placed</h2>
    <div class="stats"><div class="stat"><b>${pct(ok.length, R.length)}</b><span>placed</span></div></div>
    <div class="tablewrap"><table class="t"><thead><tr><th>Item</th><th>Lives at</th><th>You said</th></tr></thead><tbody>
    ${R.map(r => `<tr><td>${esc(r.prompt)}<div class="dim small">${PROMPTS[r.kind]}</div></td><td>${multi ? esc(r.course) + " " : ""}<span class="L">${r.letter}</span></td>
      <td class="${r.ok ? "v1" : "v0"}">${multi ? esc((course(r.givenCourse) || {}).title || "") + " " : ""}${r.givenLetter}</td></tr>`).join("")}</tbody></table></div>${doneRow("address")}`);
  wireDone("address");
}

/* =============================================================
   HIGHLIGHTS (advanced): one phrase per record paragraph, plus a cross-reference. Both directions.
   prod: see the start of the sentence, finish it, then say if you're confident.
   loc:  see the highlight, give its record letter and paragraph (1-4).
   xref: p = 5. prod: which monument does it point to?  loc: which record is it in?
   ============================================================= */
function highlightsStart() {
  startScreen(`${help()}<div class="eyebrow">Highlights · advanced</div><h2>The record, one phrase at a time</h2>${helpBox("highlights")}
    <div class="opts">${chapterSel("hLetters")}${courseSel("hCourses")}
      ${msel("hWhich", "Highlights", [["1", "Paragraph 1"], ["2", "Paragraph 2"], ["3", "Paragraph 3"], ["4", "Paragraph 4"], ["x", "Cross-reference"]], { allText: "All five" })}
      ${msel("hDir", "Direction", [["both", "Both, mixed"], ["prod", "Complete the highlight"], ["loc", "Find the highlight"]], { single: true })}
      ${msel("hLen", "Length", [["10", "10 highlights"], ["20", "20 highlights"], ["all", "All of them"]], { single: true })}</div>${goBtn("Start")}`);
  mselSet("hLetters", setting("hLetters", "all")); mselSet("hCourses", setting("hCourses", "all")); mselSet("hWhich", setting("hWhich", "all")); mselSet("hDir", setting("hDir", "both")); mselSet("hLen", setting("hLen", "20"));
  $("#go").onclick = () => {
    const cfg = { letters: mselGet("hLetters"), courses: mselGet("hCourses") || "all", which: mselGet("hWhich"), dir: mselGet("hDir"), len: mselGet("hLen") };
    remember({ hLetters: cfg.letters, hCourses: cfg.courses, hWhich: cfg.which, hDir: cfg.dir, hLen: cfg.len }); begin(() => highlightsBegin(cfg));
  };
}
const xrefTargets = (row, h) => [...new Set([h.pts, ...[...(String(h.stem || "") + " " + h.hl).matchAll(/\^(\w+(?:,\w+)*)/g)].flatMap(m => m[1].split(","))].filter(Boolean).map(x => x.toLowerCase()))];
function highlightsBegin(cfg) {
  const cs = coursesFrom(cfg.courses), w = chosen(cfg.which) || ["1", "2", "3", "4", "x"];
  let items = [];
  cs.flatMap(rowsOf).filter(r => inChapters(r, chosen(cfg.letters))).forEach(row => row.hls.forEach(h => {
    if (!w.includes(h.p === 5 ? "x" : String(h.p))) return;
    let dir = cfg.dir === "prod" || cfg.dir === "loc" ? cfg.dir : (Math.random() < .5 ? "prod" : "loc");
    // "which monument does it point to" needs every monument the superscripts name to be in this page (chapter / preview pages hold only some)
    if (h.p === 5 && dir === "prod" && !xrefTargets(row, h).every(l => rowAt(row.cid, l))) { if (cfg.dir === "prod") return; dir = "loc"; }
    items.push({ row, h, dir });
  }));
  items = spread(items); if (cfg.len !== "all" && Number(cfg.len) < items.length) items = items.slice(0, Number(cfg.len));
  startRun("highlights", items, cfg, highlightItem);
}
const hlKind = it => it.h.p === 5 ? (it.dir === "prod" ? "xref-points" : "xref-record") : it.dir === "prod" ? "complete" : "find";
const hlId = it => it.row.L + it.h.p;
function hlSlide(it, o = {}) {
  const r = it.row, h = it.h, x = h.p === 5, kind = hlKind(it);
  let cue, body, c1 = "", c2 = "", ok = !!o.ok, rl = "";
  const full = `${sup(h.stem)} <span class="hlw">${sup(h.hl)}</span>`;
  if (kind === "complete") {
    cue = `Record ${r.L.toUpperCase()} · paragraph ${h.p}`; c1 = r.L.toUpperCase(); rl = r.L;
    body = o.reveal ? full : `${sup(h.stem)} <span class="hlblank"></span>`;
  } else if (kind === "find") {
    cue = o.reveal ? `Record ${r.L.toUpperCase()} · paragraph ${h.p}` : "Which record, and which paragraph?";
    c1 = o.reveal ? r.L.toUpperCase() : (o.pl || ""); c2 = o.reveal ? String(h.p) : (o.pp || ""); rl = o.reveal ? r.L : "";
    body = o.reveal ? full : `<span class="hlw">${sup(h.hl)}</span>`;
  } else if (kind === "xref-points") {
    cue = `Record ${r.L.toUpperCase()} · cross-reference — name the monument it points to`;
    c1 = o.reveal ? h.pts.toUpperCase() : ""; rl = o.reveal ? h.pts : "";
    body = `${h.stem ? sup(h.stem) + " " : ""}<span class="hlw">${sup(h.hl)}</span>`;
  } else {
    cue = o.reveal ? `Record ${r.L.toUpperCase()} · cross-reference` : "Which record is this cross-reference in?";
    c1 = o.reveal ? r.L.toUpperCase() : (o.pl || ""); rl = o.reveal ? r.L : "";
    body = `${o.reveal && h.stem ? sup(h.stem) + " " : ""}<span class="hlw">${sup(h.hl)}</span>`;
  }
  let s = card() + rails(rl) + circle(c1, ok) + (kind === "find" ? circle(c2, ok, "circle2") : "") + chrome(o.label || "highlights");
  s += `<div class="hlcue">${esc(cue)}</div><div class="hltext"><div class="hlbody">${body}</div></div>`;
  return `<div class="slide" id="slide">${s}</div>`;
}
function highlightItem() {
  const s = session, it = s.items[s.i], r = it.row, h = it.h, kind = hlKind(it), label = labelOf(r, "highlights");
  const prod = kind === "complete", word = kind === "xref-points", right = s.results.filter(x => x.ok && !x.tries).length;
  $("#view").innerHTML = `<div class="stage" id="stage">${barHTML(`<span>${right} first time</span>`)}
    <div id="slideWrap">${hlSlide(it, { label })}</div>
    <div class="dock">${word ? `<div class="hint">Type the index word (or title) of the monument the superscript points to</div><form class="walkin" id="hForm" autocomplete="off"><input class="cin" id="hIn" placeholder="its index word" spellcheck="false" autocapitalize="off"><button class="btn small" type="submit" id="hGo">Don't know</button></form>` : prod ? `<div class="hint">Finish the sentence in your own words</div><form class="walkin" id="hForm" autocomplete="off"><textarea class="cin" id="hIn" rows="2" placeholder="how does it finish?" spellcheck="false"></textarea><button class="btn small" type="submit" id="hGo">Don't know</button></form>`
      : `<div class="hint">${kind === "find" ? "Type the record letter, then the paragraph number (1 to 4)" : kind === "xref-points" ? "Type the letter of the monument it points to" : "Type the letter of the record it sits in"}</div>
        <div class="keypad" id="keypad">${L26.split("").map(c => `<button type="button" data-l="${c}">${c.toUpperCase()}</button>`).join("")}</div>
        ${kind === "find" ? `<div class="pkeys" id="pkeys">${[1, 2, 3, 4].map(n => `<button type="button" data-p="${n}">${n}</button>`).join("")}</div>` : ""}
        <button class="btn small ghost" id="hSkip" type="button">Don't know</button>`}</div><div id="fb"></div></div>`;
  stopBtn();
  const t0 = performance.now(); let done = false;
  if (prod || word) {
    $("#hForm").onsubmit = e => { e.preventDefault(); if (done) return; done = true; const v = String($("#hIn").value || "").trim(); highlightReveal(it, word ? (v ? { word: v } : null) : v, Math.round(performance.now() - t0)); };
    $("#hIn").oninput = () => { $("#hGo").textContent = $("#hIn").value.trim() ? "Show it" : "Don't know"; };
    $("#hIn").onkeydown = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#hForm").requestSubmit(); } };
    setKeys(null); try { $("#hIn").focus(); } catch (e) {}
    return;
  }
  let pl = null, pp = null;
  const paint = () => { $("#slideWrap").innerHTML = hlSlide(it, { label, pl: pl ? pl.toUpperCase() : "", pp: pp || "" }); };
  const check = () => { if (done) return; if (pl && (kind !== "find" || pp)) { done = true; highlightReveal(it, { pl, pp }, Math.round(performance.now() - t0)); } };
  const letter = l => { if (done) return; pl = l; paint(); check(); };
  const para = n => { if (done || kind !== "find") return; pp = String(n); paint(); check(); };
  $("#keypad").onclick = e => { const b = e.target.closest("button[data-l]"); if (b) { b.blur(); letter(b.dataset.l); } };
  if ($("#pkeys")) $("#pkeys").onclick = e => { const b = e.target.closest("button[data-p]"); if (b) { b.blur(); para(b.dataset.p); } };
  $("#hSkip").onclick = () => { if (!done) { done = true; highlightReveal(it, null, Math.round(performance.now() - t0)); } };
  setKeys(e => {
    if (done || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^[a-zA-Z]$/.test(e.key)) { e.preventDefault(); letter(e.key.toLowerCase()); }
    else if (/^[1-4]$/.test(e.key)) { e.preventDefault(); para(e.key); }
  });
}
function highlightReveal(it, given, ms) {
  const s = session, r = it.row, h = it.h, kind = hlKind(it), label = labelOf(r, "highlights");
  const res = { cid: r.cid, course: r.ctitle, letter: r.L.toUpperCase(), at: day(), kind, hid: hlId(it), ms, ok: 0, skipped: given ? 0 : 1 };
  const dock = document.querySelector(".dock"); if (dock) dock.style.display = "none";
  try { document.activeElement.blur(); } catch (e) {}
  const go = () => { stopAll(); commit(it, res); };
  const nextRow = `<span class="spacer"></span><button class="btn small" id="nx">Next</button> <kbd>Enter</kbd>`;
  const arm = fn => later(() => setKeys(fn), 50);
  if (kind === "complete") {
    $("#slideWrap").innerHTML = hlSlide(it, { reveal: true, label });
    if (!given) { $("#fb").innerHTML = `<div class="feedback bad">Here it is. This one will come back.${nextRow}</div>`; $("#nx").onclick = go; arm(e => { if (e.key === "Enter") { e.preventDefault(); go(); } }); return; }
    res.given = given;
    $("#fb").innerHTML = `<div class="feedback">You said: <b>${esc(given)}</b><div class="ask2">Do you feel confident about that response? <button class="btn small" id="yes">Yes</button> <button class="btn small ghost" id="no">Not really</button> <kbd>Y</kbd> <kbd>N</kbd></div></div>`;
    const pick = v => { disarm(); res.ok = v; res.conf = v; $("#fb").innerHTML = `<div class="feedback ${v ? "good" : "bad"}">${v ? "Good" : "This one will come back sooner"}${nextRow}</div>`; $("#nx").onclick = go; setKeys(e => { if (e.key === "Enter") { e.preventDefault(); go(); } }); };
    $("#yes").onclick = () => pick(1); $("#no").onclick = () => pick(0);
    arm(e => { if (/^y$/i.test(e.key)) pick(1); else if (/^n$/i.test(e.key)) pick(0); });
    return;
  }
  // find / cross-reference: auto-graded letters (and paragraph)
  const wantL = kind === "xref-points" ? h.pts : r.L;
  const gl = given && given.pl, gp = given && given.pp;
  const tgtRows = kind === "xref-points" ? xrefTargets(r, h).map(l => rowAt(r.cid, l)).filter(Boolean) : [];
  const wOK = kind === "xref-points" && given && given.word ? tgtRows.some(t => close(given.word, t.index) || titleOK(given.word, t.title)) : false;
  const lOK = kind === "xref-points" ? wOK : gl === wantL, pOK = kind === "find" ? gp === String(h.p) : true;
  res.ok = given && lOK && pOK ? 1 : 0; res.givenLetter = kind === "xref-points" ? "" : (gl ? gl.toUpperCase() : ""); if (kind === "xref-points" && given) res.given = given.word; res.givenPara = gp || "";
  $("#slideWrap").innerHTML = hlSlide(it, { reveal: true, ok: !!res.ok, label });
  const tgt = kind === "xref-points" ? rowAt(r.cid, h.pts) : null;
  const where = kind === "find" ? `Record <span class="L">${r.L.toUpperCase()}</span> · paragraph ${h.p}` : kind === "xref-points" ? `It points to <span class="L">${h.pts.toUpperCase()}</span>${tgt ? ` (${esc(tgt.index.toUpperCase())})` : ""}` : `It's in record <span class="L">${r.L.toUpperCase()}</span>`;
  $("#fb").innerHTML = res.ok ? `<div class="feedback good">Right · ${where}${nextRow}</div>`
    : `<div class="feedback bad">${given ? `You said ${esc(kind === "xref-points" ? given.word : (gl || "").toUpperCase())}${gp ? " · " + esc(gp) : ""}. ` : ""}${where}.${nextRow}</div>`;
  $("#nx").onclick = go; arm(e => { if (e.key === "Enter") { e.preventDefault(); go(); } });
}
function highlightsDone(rec) {
  const R = rec.results, first = R.filter(x => !x.tries), firstOk = first.filter(x => x.ok);
  const missed = first.filter(x => !x.ok);
  const nm = x => `${new Set(R.map(y => y.cid)).size > 1 ? esc(x.course) + " " : ""}<span class="L">${x.letter}</span>`;
  const hl = x => { const row = rowAt(x.cid, x.letter.toLowerCase()), h = row && row.hls.find(z => x.hid === row.L + z.p); return h ? `${sup(h.stem)} ${sup(h.hl)}` : ""; };
  panel(`<div class="eyebrow">Highlights · done</div><h2>${firstOk.length} of ${first.length} first time</h2>
    <div class="stats"><div class="stat"><b>${pct(firstOk.length, first.length)}</b><span>first time</span></div></div>
    <h3>Review first</h3>
    ${missed.length ? missed.map(x => `<div class="rx">${nm(x)} · ${x.hid.slice(1) === "5" ? "cross-reference" : "paragraph " + x.hid.slice(1)}: ${hl(x)}</div>`).join("") : `<p class="dim">Nothing missed.</p>`}
    ${doneRow("highlights")}`);
  wireDone("highlights");
}

/* ---------------- guided start for the chapter lessons ---------------- */
function simpleStart() {
  const c = COURSES[0], ms = availModes();
  startScreen(`<h2>Practise in this order</h2><div class="pair">${ms.map((m, n) => `<button type="button" class="gocircle p12 ${n % 2 ? "red" : ""}" data-m="${m}">Practice ${n + 1}<small>${esc(MODES[m].toLowerCase())}</small></button>`).join("")}</div>`);
  document.querySelectorAll(".pair .gocircle").forEach(b => b.onclick = () => begin(() => runDefault(b.dataset.m)));
}

/* =============================================================
   PROGRESS
   ============================================================= */
function progress() {
  const c = active(), rows = rowsOf(c), H = store.history;
  const st = {}; rows.forEach(r => st[r.L.toUpperCase()] = { walk: [0, 0], address: [0, 0], contents: [0, 0], highlights: [0, 0] });
  const mix = {}; let n = 0;
  H.forEach(h => { let touched = false; h.results.forEach(r => { if (r.cid !== c.id || !st[r.letter] || !st[r.letter][h.test]) return; touched = true;
    const x = st[r.letter][h.test]; x[0]++; if (r.ok) x[1]++;
    if (h.test === "address" && !r.ok) { const k = `${r.letter}|${r.givenCourse}|${r.givenLetter}`; mix[k] = (mix[k] || 0) + 1; } }); if (touched) n++; });
  const lvl = x => { const p = Object.values(x).filter(v => v[0]).map(v => v[1] / v[0]); if (!p.length) return ""; const v = p.reduce((a, b) => a + b) / p.length; return v >= .85 ? "s3" : v >= .5 ? "s2" : "s1"; };
  const top = Object.entries(mix).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const tag = { walk: "walk", contents: "cont", address: "addr", highlights: "hl" };
  panel(`${help()}<div class="eyebrow">Progress</div><h2>${esc(c.title)}</h2>${helpBox("progress")}
    <p class="lede">${n ? `${n} session${n > 1 ? "s" : ""} in this browser.` : "No sessions yet."}</p>
    <div class="tiles">${rows.map(r => { const x = st[r.L.toUpperCase()]; return `<div class="tile ${lvl(x)}"><span class="t">${r.L.toUpperCase()}</span>
      ${availModes().map(m => `<span class="m">${tag[m]} ${x[m][0] ? pct(x[m][1], x[m][0]) : "–"}</span>`).join("")}</div>`; }).join("")}</div>
    <h3>Address mix-ups</h3>
    ${top.length ? `<div class="tablewrap"><table class="t"><thead><tr><th>Lives at</th><th>Placed at</th><th>Times</th></tr></thead><tbody>
      ${top.map(([k, t]) => { const [Lt, gc, gl] = k.split("|"), a = rowAt(c.id, Lt.toLowerCase()), b = rowAt(gc, gl.toLowerCase()), cross = gc !== c.id;
        return `<tr><td><span class="L">${Lt}</span> ${esc(a ? a.primary : "")}</td><td>${cross ? esc((course(gc) || {}).title || "") + " " : ""}<span class="L">${gl}</span> ${esc(b ? b.primary : "(nothing there)")}${cross ? ` <span class="amber small">other course</span>` : ""}</td><td class="n">${t}</td></tr>`; }).join("")}
    </tbody></table></div>` : `<p class="dim">None yet.</p>`}
    <h3>Anonymous results</h3>
    <p class="consent-line">${store.consent === "yes" ? "Anonymous results are being recorded to improve our courses" : store.consent === "no" ? "Your results aren't being recorded" : "You haven't been asked yet"}.
      ${store.consent ? `<button class="btn ghost small" id="cFlip">${store.consent === "yes" ? "Stop recording" : "Record anonymously"}</button>` : ""}</p>
    <div class="row" style="margin-top:22px"><button class="btn ghost" id="csv" ${H.length ? "" : "disabled"}>Copy all results as spreadsheet rows</button>
      <button class="btn ghost" id="clr" ${H.length ? "" : "disabled"}>Clear history</button><span class="status" id="st"></span></div><div id="cf"></div>`);
  $("#csv").onclick = () => copy(toCSV(H), $("#st"));
  if ($("#cFlip")) $("#cFlip").onclick = () => { store.consent = store.consent === "yes" ? "no" : "yes"; store.consentAt = day(); store.consentVersion = CONSENT_VERSION; save(); progress(); };
  $("#clr").onclick = () => { $("#cf").innerHTML = `<div class="confirm">Delete every saved session in this browser? This can't be undone.
    <button class="btn small danger" id="y">Delete</button><button class="btn small ghost" id="no">Cancel</button></div>`;
    $("#y").onclick = () => { store.history = []; save(); progress(); }; $("#no").onclick = () => { $("#cf").innerHTML = ""; }; };
}
// Uploads: dates only, no typed text. Your own export keeps what you typed.
const HEAD = ["session_date", "test", "course", "letter", "item_type", "item", "given_course", "given_letter", "given_para", "correct", "confidence", "ms", "skipped", "round", "typed", "settings", "app_version", "consent_version", "session_end", "anon_id"];
function rowsFor(h, upload) {
  const d = t => upload ? String(t || "").slice(0, 10) : (t || "");
  return h.results.map(r => [d(h.ts), h.test, r.course, r.letter, r.kind, h.test === "highlights" ? r.hid : h.test === "walk" || h.test === "address" ? (r.prompt || "") : r.letter + "-" + r.kind,
    h.test === "address" ? ((course(r.givenCourse) || {}).title || r.givenCourse) : "", r.givenLetter || "", r.givenPara || "", r.ok ? 1 : 0, r.conf ?? "", r.ms ?? "", r.skipped ?? "", r.tries ?? "",
    upload ? "" : (r.given || ""), JSON.stringify(h.settings || {}), APP_VERSION, store.consentVersion || "", d(h.end), h.uid]);
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

save();
try { if (!document.fullscreenEnabled) { const w = $("#view").closest(".wrap"); if (w) w.classList.add("nofs"); } } catch (e) {}
if (SIMPLE) { const w = $("#view").closest(".wrap"); if (w) w.classList.add("simple"); show("simple"); }
else show(availModes()[0]);

})();
