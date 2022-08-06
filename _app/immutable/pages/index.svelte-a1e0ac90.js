import{S as W,i as Z,s as J,l as Y,w as T,x as P,g as E,y as H,z as j,A as G,q as A,o as b,d as I,B,C as M,e as k,k as L,c as z,a as F,m as S,b as O,_ as K,V as Q,R as U,p as C,a0 as tt,a1 as et,n as nt,T as it,a2 as ot}from"../chunks/index-a1512193.js";import{B as rt,s as st,m as V}from"../chunks/FilterDialog-5cb2c712.js";import pt from"./components/IndexMagicButton/index.svelte-8f22fa56.js";import lt from"./components/PokeBox/index.svelte-3961bb0e.js";import mt from"./components/DetailPopup/index.svelte-1b3b7877.js";import"../chunks/Ripple-4e42e3fb.js";import"../chunks/index-db44a7a4.js";import"../chunks/tslib-2c74db2e.js";import"../chunks/_commonjsHelpers-850449cf.js";import"../chunks/isObject-4e76745d.js";import"../chunks/isObjectLike-8567252c.js";import"../chunks/isSymbol-cc5748dc.js";import"../chunks/index-3b993099.js";import"../chunks/index-e7bbd0d1.js";import"../chunks/draggable-d90d0b70.js";import"../chunks/styles-58aceedb.js";import"../chunks/_arrayMap-2f79ae2a.js";import"../chunks/index-e70ef76b.js";import"../chunks/functional-2a297cb6.js";import"../chunks/paths-c0fc83a9.js";import"../chunks/AttackTypeDialog-eb9fe048.js";import"../chunks/type-chart-calc-7219e8a7.js";import"../chunks/index-1a6731ea.js";import"../chunks/fetch-c004f49e.js";import"../chunks/preload-helper-936e422d.js";import"./components/DetailPopup/components/FormDetail.svelte-b5fae0c5.js";import"../chunks/SelectedArrow-277a1198.js";import"./components/DetailPopup/components/TitleTag.svelte-c96f4810.js";import"./components/DetailPopup/components/TypeChart.svelte-c1879068.js";import"./components/DetailPopup/components/AvailableTable.svelte-1629a421.js";import"./components/DetailPopup/components/AvailableItem.svelte-1d87edd9.js";import"./components/DetailPopup/components/EvoChain.svelte-8e543fb5.js";const at=300,ut=60,N="none";function y(p,e,o){return p.addEventListener(e,o),()=>p.removeEventListener(e,o)}function ct(p,e){return e.filter(o=>p.pointerId!==o.pointerId)}function D(p,e,o,n,i){p.dispatchEvent(new CustomEvent(`${e}${i}`,{detail:{event:o,pointersCount:n.length}}))}function ft(p,e,o,n,i,f=N){e.style.touchAction=f;let l=[];function r(s){l.push(s),D(e,p,s,l,"down"),n==null||n(l,s);const u=s.pointerId;function g(a){u===a.pointerId&&(l=ct(a,l),l.length||v(),D(e,p,a,l,"up"),i==null||i(l,a))}function v(){_(),$(),h(),x()}const _=y(e,"pointermove",a=>{l=l.map(t=>a.pointerId===t.pointerId?a:t),D(e,p,a,l,"move"),o==null||o(l,a)}),$=y(e,"lostpointercapture",a=>{g(a)}),h=y(e,"pointerup",a=>{g(a)}),x=y(e,"pointerleave",a=>{l=[],v(),D(e,p,a,l,"up"),i==null||i(l,a)})}const c=y(e,"pointerdown",r);return{destroy:()=>{c()}}}function dt(p,e={timeframe:at,minSwipeDistance:ut,touchAction:N}){const o="swipe";let n,i,f,l;function r(s,u){i=u.clientX,f=u.clientY,n=Date.now(),s.length===1&&(l=u.target)}function c(s,u){if(u.type==="pointerup"&&s.length===0&&Date.now()-n<e.timeframe){const g=u.clientX-i,v=u.clientY-f,_=Math.abs(g),$=Math.abs(v);let h=null;_>=2*$&&_>e.minSwipeDistance?h=g>0?"right":"left":$>=2*_&&$>e.minSwipeDistance&&(h=v>0?"bottom":"top"),h&&p.dispatchEvent(new CustomEvent(o,{detail:{direction:h,target:l}}))}}return ft(o,p,null,r,c,e.touchAction)}function q(p,e,o){const n=p.slice();return n[6]=e[o],n[8]=o,n}function R(p,e){let o,n,i;const f=[e[6],{index:e[0].currentIndex*w+e[8]}];let l={};for(let r=0;r<f.length;r+=1)l=M(l,f[r]);return n=new lt({props:l}),n.$on("detail",e[3]),{key:p,first:null,c(){o=Y(),T(n.$$.fragment),this.h()},l(r){o=Y(),P(n.$$.fragment,r),this.h()},h(){this.first=o},m(r,c){E(r,o,c),H(n,r,c),i=!0},p(r,c){e=r;const s=c&5?j(f,[c&4&&G(e[6]),{index:e[0].currentIndex*w+e[8]}]):{};n.$set(s)},i(r){i||(A(n.$$.fragment,r),i=!0)},o(r){b(n.$$.fragment,r),i=!1},d(r){r&&I(o),B(n,r)}}}function _t(p){var a;let e,o,n,i=[],f=new Map,l,r,c,s,u,g,v,_=p[2];const $=t=>t[6].title;for(let t=0;t<_.length;t+=1){let m=q(p,_,t),d=$(m);f.set(d,i[t]=R(d,m))}r=new pt({});const h=[(a=p[1])!=null?a:{}];let x={};for(let t=0;t<h.length;t+=1)x=M(x,h[t]);return s=new mt({props:x}),s.$on("close",p[5]),{c(){e=k("div"),o=L(),n=k("div");for(let t=0;t<i.length;t+=1)i[t].c();l=L(),T(r.$$.fragment),c=L(),T(s.$$.fragment),this.h()},l(t){e=z(t,"DIV",{class:!0}),F(e).forEach(I),o=S(t),n=z(t,"DIV",{class:!0});var m=F(n);for(let d=0;d<i.length;d+=1)i[d].l(m);m.forEach(I),l=S(t),P(r.$$.fragment,t),c=S(t),P(s.$$.fragment,t),this.h()},h(){O(e,"class","background svelte-bghv9m"),O(n,"class","content svelte-bghv9m")},m(t,m){E(t,e,m),E(t,o,m),E(t,n,m);for(let d=0;d<i.length;d+=1)i[d].m(n,null);E(t,l,m),H(r,t,m),E(t,c,m),H(s,t,m),u=!0,g||(v=[K(dt.call(null,n)),Q(n,"swipe",p[4])],g=!0)},p(t,[m]){var X;m&13&&(_=t[2],nt(),i=U(i,m,$,1,t,_,f,n,it,R,null,q),C());const d=m&2?j(h,[G((X=t[1])!=null?X:{})]):{};s.$set(d)},i(t){if(!u){for(let m=0;m<_.length;m+=1)A(i[m]);A(r.$$.fragment,t),A(s.$$.fragment,t),u=!0}},o(t){for(let m=0;m<i.length;m+=1)b(i[m]);b(r.$$.fragment,t),b(s.$$.fragment,t),u=!1},d(t){t&&I(e),t&&I(o),t&&I(n);for(let m=0;m<i.length;m+=1)i[m].d();t&&I(l),B(r,t),t&&I(c),B(s,t),g=!1,tt(v)}}}const w=2;function ht(p,e,o){let n;et(p,V,s=>o(0,n=s));let i=null,f=[];function l(s){o(1,i=s.detail)}function r(s){let u=0;s.detail.direction==="left"?u=1:s.detail.direction==="right"&&(u=-1),ot(V,n.currentIndex=st(n.currentIndex,u,w),n)}const c=()=>o(1,i=null);return p.$$.update=()=>{if(p.$$.dirty&1){const s=n.currentIndex;o(2,f=rt.slice(s*w,s*w+w))}},[n,i,f,l,r,c]}class Jt extends W{constructor(e){super(),Z(this,e,ht,_t,J,{})}}export{Jt as default};
