import{S as c,i as m,s as h,F as v,e as y,c as p,a as g,d as f,b as _,g as C,G as b,H,I as S,q as T,o as q,v as I}from"../../../../chunks/index-b677f905.js";import{n as d}from"../../../../chunks/styles-b21c726b.js";import"../../../../chunks/isObjectLike-a1b535b6.js";import"../../../../chunks/_commonjsHelpers-850449cf.js";import"../../../../chunks/_arrayMap-2f79ae2a.js";import"../../../../chunks/isSymbol-fd7712af.js";const k=a=>({addClass:a&2}),u=a=>({addClass:a[1]});function z(a){let s,n,i;const o=a[4].default,t=v(o,a,a[3],u);return{c(){s=y("div"),t&&t.c(),this.h()},l(e){s=p(e,"DIV",{class:!0,style:!0});var l=g(s);t&&t.l(l),l.forEach(f),this.h()},h(){_(s,"class","translate-helper svelte-1xstatv"),_(s,"style",n=a[1]?d(a[0]):void 0)},m(e,l){C(e,s,l),t&&t.m(s,null),i=!0},p(e,[l]){t&&t.p&&(!i||l&10)&&b(t,o,e,e[3],i?S(o,e[3],l,k):H(e[3]),u),(!i||l&3&&n!==(n=e[1]?d(e[0]):void 0))&&_(s,"style",n)},i(e){i||(T(t,e),i=!0)},o(e){q(t,e),i=!1},d(e){e&&f(s),t&&t.d(e)}}}function D(a,s,n){let{$$slots:i={},$$scope:o}=s,{delay:t=0}=s,{transition:e={}}=s,l=!1;return I(()=>{t&&setTimeout(()=>{n(1,l=!0)},t)}),a.$$set=r=>{"delay"in r&&n(2,t=r.delay),"transition"in r&&n(0,e=r.transition),"$$scope"in r&&n(3,o=r.$$scope)},[e,l,t,o,i]}class w extends c{constructor(s){super(),m(this,s,D,z,h,{delay:2,transition:0})}}export{w as default};