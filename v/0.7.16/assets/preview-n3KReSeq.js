import{S as e,a as t,b as n,c as r,d as i,f as a,h as o,l as s,m as c,o as l,p as u,s as d,t as f,u as p,v as m,x as h,y as g}from"./index-C3rkwRdC.js";var _=`
.fds{min-height:100%;overflow-y:auto;height:100%;touch-action:pan-y;user-select:none;background:#14264a radial-gradient(rgba(255,255,255,.07) 1.2px,transparent 1.3px) 0 0/12px 12px;color:#1c1712;padding:14px 14px 40px;font-family:"FD Comic",system-ui,sans-serif}
.fds *{box-sizing:border-box}
.fds h1{font:400 44px/0.95 "FD Bangers",Impact,sans-serif;letter-spacing:1.5px;color:#ffd23f;margin:4px 0 2px;text-shadow:3px 3px 0 #000;-webkit-text-stroke:1.5px #000}
.fds .kick{font:400 15px "FD Anton",Impact,sans-serif;letter-spacing:2px;color:#f7efe0;text-transform:uppercase;opacity:.85}
.fds .top{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.fds .top>div{flex:1}
.fds .mute{width:62px;height:62px;border-radius:14px;border:3px solid #000;background:#ffd23f;box-shadow:3px 3px 0 #000;display:grid;place-items:center;cursor:pointer;padding:0}
.fds .mute svg{width:34px;height:34px}
.fds .mute[aria-pressed="true"]{background:#e9e1cf}
.fds .meter{height:12px;border:3px solid #000;border-radius:8px;background:#0b1630;overflow:hidden;margin:4px 0 6px}
.fds .meter i{display:block;height:100%;width:0;background:linear-gradient(90deg,#3fbf6f,#ffd23f 70%,#e63946)}
.fds .status{font:400 12px "FD Oswald",system-ui,sans-serif;letter-spacing:.5px;color:#cfd8ea;min-height:16px}
.fds .hint{background:#e63946;color:#fff;border:3px solid #000;border-radius:12px;padding:8px 12px;font:700 15px "FD Comic",system-ui,sans-serif;box-shadow:3px 3px 0 #000;margin:8px 0 14px;cursor:pointer;text-align:center}
.fds .hint.ok{background:#3fbf6f;color:#000}
.fds section{background:#fdf3d8;border:3px solid #000;border-radius:6px;box-shadow:4px 4px 0 #000;padding:12px;margin:0 0 16px}
.fds h2{font:400 26px/1 "FD Anton",Impact,sans-serif;text-transform:uppercase;margin:0 0 10px;letter-spacing:.5px;border-bottom:3px double #1c1712;padding-bottom:6px}
.fds .tracks{display:grid;gap:10px}
.fds .track{display:grid;grid-template-columns:52px 1fr;gap:10px;align-items:center;background:#fffaf0;border:2.5px solid #000;border-radius:10px;padding:8px;cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%}
.fds .track .play{width:52px;height:52px;border-radius:50%;border:3px solid #000;background:#ffd23f;display:grid;place-items:center;box-shadow:2px 2px 0 #000}
.fds .track .play svg{width:22px;height:22px}
.fds .track.on{background:#ffe680}
.fds .track.on .play{background:#e63946;color:#fff}
.fds .track b{font:400 22px/1 "FD Bangers",Impact,sans-serif;letter-spacing:1px;display:block}
.fds .track em{font:400 12px "FD Oswald",system-ui,sans-serif;letter-spacing:1px;text-transform:uppercase;color:#a32020;font-style:normal}
.fds .track small{display:block;font:400 13px/1.25 "FD Comic",system-ui,sans-serif;margin-top:2px}
.fds canvas{display:block;width:100%;height:26px;margin-top:4px}
.fds .grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.fds .fx{background:#fffaf0;border:2.5px solid #000;border-radius:10px;padding:8px 8px 6px;text-align:left;cursor:pointer;font:inherit;color:inherit;box-shadow:2px 2px 0 #000;transition:transform .06s}
.fds .fx:active,.fds .fx.hit{transform:translate(2px,2px) rotate(-1deg);box-shadow:0 0 0 #000;background:#ffe680}
.fds .fx b{font:400 19px/1 "FD Bangers",Impact,sans-serif;letter-spacing:.8px;display:block}
.fds .fx small{display:block;font:400 11.5px/1.2 "FD Comic",system-ui,sans-serif;margin-top:3px;color:#3b3127}
.fds .fx canvas{height:20px}
.fds .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.fds .pill{background:#ffd23f;border:3px solid #000;border-radius:999px;padding:8px 14px;font:400 17px "FD Bangers",Impact,sans-serif;letter-spacing:1px;box-shadow:2px 2px 0 #000;cursor:pointer;color:#000}
`,v=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h4l5-4v14l-5-4H3z" fill="#000"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round"/></svg>`,y=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h4l5-4v14l-5-4H3z" fill="#000"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round"/></svg>`,b=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l14 8-14 8z" fill="currentColor"/></svg>`,x=`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2" fill="currentColor"/></svg>`,S=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function C(e,t,n){if(!t||e.dataset.drawn)return;e.dataset.drawn=`1`;let r=Math.min(2,window.devicePixelRatio||1),i=e.width=Math.max(40,Math.round(e.clientWidth*r)),a=e.height=Math.round(e.clientHeight*r),o=e.getContext(`2d`);if(!o)return;let s=t.getChannelData(0),c=Math.max(1,Math.floor(s.length/i));o.fillStyle=n;for(let e=0;e<i;e++){let t=0;for(let n=e*c;n<Math.min(s.length,(e+1)*c);n+=4)t=Math.max(t,Math.abs(s[n]));let n=Math.max(1,t*a);o.fillRect(e,(a-n)/2,1,n)}}function w(w){if(f(),!document.querySelector(`style[data-fds]`)){let e=document.createElement(`style`);e.dataset.fds=`1`,e.textContent=_,document.head.appendChild(e)}let T=Object.keys(g);w.innerHTML=`<div class="fds">
    <div class="top">
      <div><div class="kick">Foge, Douglas!</div><h1>SOM DO JOGO</h1></div>
      <button class="mute" type="button" aria-label="Som"></button>
    </div>
    <div class="meter"><i></i></div>
    <div class="status"></div>
    <div class="hint">Toque aqui (ou em qualquer botão) para ligar o som</div>
    <section><h2>Trilha</h2><div class="tracks">${e.map(e=>`<button class="track" type="button" data-t="${e}"><span class="play">${b}</span><span><b>${S(h[e].label)}</b><em>${S(h[e].ritmo)}</em><small>${S(h[e].ideia)}</small><canvas></canvas></span></button>`).join(``)}</div>
    <div class="row"><button class="pill" type="button" data-stop>Parar música</button><button class="pill" type="button" data-freio>Pego! (a música freia)</button></div></section>
    ${T.map(e=>`<section><h2>${S(g[e])}</h2><div class="grid">${n.filter(t=>m[t].group===e).map(e=>`<button class="fx" type="button" data-s="${e}"><b>${S(m[e].label)}</b><small>${S(m[e].onde)}</small><canvas></canvas></button>`).join(``)}</div></section>`).join(``)}
  </div>`;let E=w.firstElementChild,D=E.querySelector(`.mute`),O=E.querySelector(`.hint`),k=E.querySelector(`.status`),A=E.querySelector(`.meter i`),j=e=>{D.innerHTML=e?y:v,D.setAttribute(`aria-pressed`,String(e)),D.setAttribute(`aria-label`,e?`Som desligado`:`Som ligado`)};j(r()),i(j),D.addEventListener(`click`,()=>{d(),u(!r())});let M=null,N=()=>{d(),O.textContent=`Som ligado. Toque nos botões para ouvir.`,O.classList.add(`ok`),M||=t()};O.addEventListener(`click`,N);let P=null;E.querySelectorAll(`[data-t]`).forEach(e=>e.addEventListener(`click`,()=>{N();let t=e.dataset.t;P=P===t?null:t,P&&a(P),s(P),F()})),E.querySelectorAll(`[data-s]`).forEach(e=>e.addEventListener(`click`,()=>{N(),c(e.dataset.s),e.classList.add(`hit`),setTimeout(()=>e.classList.remove(`hit`),140)})),E.querySelector(`[data-stop]`).addEventListener(`click`,()=>{N(),P=null,s(null),F()}),E.querySelector(`[data-freio]`).addEventListener(`click`,()=>{N(),c(`pego`),P=null,F()});let F=()=>{let t=l();E.querySelectorAll(`[data-t]`).forEach(e=>{let n=e.dataset.t,r=P===n;e.classList.toggle(`on`,r),e.querySelector(`.play`).innerHTML=r?x:b;let i=t.musicReady.includes(n),a=e.querySelector(`small`);a.textContent=r&&!i?`gerando a música… (uns segundos)`:h[n].ideia,C(e.querySelector(`canvas`),o(`music`,n),`#1c1712`)}),E.querySelectorAll(`[data-s]`).forEach(e=>C(e.querySelector(`canvas`),o(`sfx`,e.dataset.s),`#a32020`)),k.textContent=`${{running:`som ligado`,suspended:`som em pausa`,"sem-contexto":`som ainda desligado`,closed:`som fechado`}[t.state]??t.state}${t.muted?` (mudo)`:``} · efeitos prontos: ${t.sfxReady}/${n.length} · músicas prontas: ${t.musicReady.length}/${e.length}${t.playing?` · tocando: ${h[t.playing].label}`:``}`,E.dataset.estado=JSON.stringify(t)};p(F),i(()=>F()),F();let I=new Uint8Array(256),L=()=>{if(E.isConnected){if(M){M.getByteTimeDomainData(I);let e=0;for(let t of I)e=Math.max(e,Math.abs(t-128)/128);A.style.width=`${Math.min(100,e*140)}%`,E.dataset.nivel=e.toFixed(3)}requestAnimationFrame(L)}};L(),setInterval(()=>E.isConnected&&F(),1e3)}export{w as showPreview};