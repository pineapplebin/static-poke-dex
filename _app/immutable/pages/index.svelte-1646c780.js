import{S as N,i as R,s as W,w as L,x as S,y as T,z as O,A as q,q as $,o as E,B as H,C as V,e as j,k as y,c as B,a as X,d as g,m as A,b as Y,g as x,a5 as G,K as J,p as M,a7 as Q,a4 as Z,n as k,a8 as U}from"../chunks/index-feed1324.js";import C from"./components/IndexMagicButton/index.svelte-d53b3da2.js";import tt from"./components/PokeBox/index.svelte-5d30b7ea.js";import et from"./components/DetailPopup/index.svelte-4248eb5c.js";import{B as P,s as nt,m as z}from"../chunks/FilterDialog-d23cf8df.js";import"../chunks/index-feb41c5d.js";import"../chunks/index-2f6b840b.js";import"../chunks/draggable-9b0046de.js";import"../chunks/useActions-6b04e2fe.js";import"../chunks/Ripple-2825c1c9.js";import"../chunks/tslib-100a8918.js";import"../chunks/_commonjsHelpers-850449cf.js";import"../chunks/tslib-9dda0bbc.js";import"../chunks/styles-ccc7d4df.js";import"../chunks/isSymbol-822c9f91.js";import"../chunks/index-8c832811.js";import"../chunks/paths-c0fc83a9.js";import"../chunks/CircularProgress-81400e51.js";import"../chunks/FormDetail-f0906261.js";import"../chunks/SelectedArrow-4274feb1.js";import"../chunks/preload-helper-936e422d.js";import"./components/DetailPopup/components/TitleTag.svelte-80bf2bd2.js";import"./components/DetailPopup/components/AvailableTable.svelte-c38aa5d4.js";import"./components/DetailPopup/components/AvailableItem.svelte-6e312cee.js";const it=300,ot=60,K="none";function w(s,t,i){return s.addEventListener(t,i),()=>s.removeEventListener(t,i)}function rt(s,t){return t.filter(i=>s.pointerId!==i.pointerId)}function D(s,t,i,o,l){s.dispatchEvent(new CustomEvent(`${t}${l}`,{detail:{event:i,pointersCount:o.length}}))}function st(s,t,i,o,l,n=K){t.style.touchAction=n;let r=[];function a(c){r.push(c),D(t,s,c,r,"down"),o==null||o(r,c);const d=c.pointerId;function p(m){d===m.pointerId&&(r=rt(m,r),r.length||_(),D(t,s,m,r,"up"),l==null||l(r,m))}function _(){h(),v(),e(),u()}const h=w(t,"pointermove",m=>{r=r.map(I=>m.pointerId===I.pointerId?m:I),D(t,s,m,r,"move"),i==null||i(r,m)}),v=w(t,"lostpointercapture",m=>{p(m)}),e=w(t,"pointerup",m=>{p(m)}),u=w(t,"pointerleave",m=>{r=[],_(),D(t,s,m,r,"up"),l==null||l(r,m)})}const f=w(t,"pointerdown",a);return{destroy:()=>{f()}}}function pt(s,t={timeframe:it,minSwipeDistance:ot,touchAction:K}){const i="swipe";let o,l,n,r;function a(c,d){l=d.clientX,n=d.clientY,o=Date.now(),c.length===1&&(r=d.target)}function f(c,d){if(d.type==="pointerup"&&c.length===0&&Date.now()-o<t.timeframe){const p=d.clientX-l,_=d.clientY-n,h=Math.abs(p),v=Math.abs(_);let e=null;h>=2*v&&h>t.minSwipeDistance?e=p>0?"right":"left":v>=2*h&&v>t.minSwipeDistance&&(e=_>0?"bottom":"top"),e&&s.dispatchEvent(new CustomEvent(i,{detail:{direction:e,target:r}}))}}return st(i,s,null,a,f,t.touchAction)}function b(s){const t=s.slice(),i=P[t[1].currentIndex];return t[5]=i,t}function F(s){let t,i;const o=[s[5]];let l={};for(let n=0;n<o.length;n+=1)l=V(l,o[n]);return t=new tt({props:l}),t.$on("detail",s[2]),{c(){L(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,r){T(t,n,r),i=!0},p(n,r){const a=r&2?O(o,[q(n[5])]):{};t.$set(a)},i(n){i||($(t.$$.fragment,n),i=!0)},o(n){E(t.$$.fragment,n),i=!1},d(n){H(t,n)}}}function lt(s){var v;let t,i,o,l,n,r,a,f,c,d,p=P[s[1].currentIndex]&&F(b(s));n=new C({});const _=[(v=s[0])!=null?v:{}];let h={};for(let e=0;e<_.length;e+=1)h=V(h,_[e]);return a=new et({props:h}),a.$on("close",s[4]),{c(){t=j("div"),i=y(),o=j("div"),p&&p.c(),l=y(),L(n.$$.fragment),r=y(),L(a.$$.fragment),this.h()},l(e){t=B(e,"DIV",{class:!0}),X(t).forEach(g),i=A(e),o=B(e,"DIV",{class:!0});var u=X(o);p&&p.l(u),u.forEach(g),l=A(e),S(n.$$.fragment,e),r=A(e),S(a.$$.fragment,e),this.h()},h(){Y(t,"class","background svelte-1mb8ij"),Y(o,"class","content svelte-1mb8ij")},m(e,u){x(e,t,u),x(e,i,u),x(e,o,u),p&&p.m(o,null),x(e,l,u),T(n,e,u),x(e,r,u),T(a,e,u),f=!0,c||(d=[G(pt.call(null,o)),J(o,"swipe",s[3])],c=!0)},p(e,[u]){var I;P[e[1].currentIndex]?p?(p.p(b(e),u),u&2&&$(p,1)):(p=F(b(e)),p.c(),$(p,1),p.m(o,null)):p&&(k(),E(p,1,1,()=>{p=null}),M());const m=u&1?O(_,[q((I=e[0])!=null?I:{})]):{};a.$set(m)},i(e){f||($(p),$(n.$$.fragment,e),$(a.$$.fragment,e),f=!0)},o(e){E(p),E(n.$$.fragment,e),E(a.$$.fragment,e),f=!1},d(e){e&&g(t),e&&g(i),e&&g(o),p&&p.d(),e&&g(l),H(n,e),e&&g(r),H(a,e),c=!1,Q(d)}}}function mt(s,t,i){let o;Z(s,z,f=>i(1,o=f));let l=null;function n(f){i(0,l=f.detail)}function r(f){let c=0;f.detail.direction==="left"?c=1:f.detail.direction==="right"&&(c=-1),U(z,o.currentIndex=nt(o.currentIndex,c),o)}return[l,o,n,r,()=>i(0,l=null)]}class Bt extends N{constructor(t){super(),R(this,t,mt,lt,W,{})}}export{Bt as default};
