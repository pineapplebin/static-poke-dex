const a="modulepreload",o={},u="/static-poke-dex/_app/immutable/",f=function(s,n){return!n||n.length===0?s():Promise.all(n.map(e=>{if(e=`${u}${e}`,e in o)return;o[e]=!0;const r=e.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":a,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((l,c)=>{t.addEventListener("load",l),t.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};export{f as _};
