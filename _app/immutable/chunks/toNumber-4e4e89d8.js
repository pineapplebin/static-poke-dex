import{K as g,a7 as E,a8 as P,a9 as S}from"./index-12f27ff3.js";import{i as A}from"./toString-842763ac.js";function V(e){return Object.entries(e).filter(([t,r])=>t!==""&&r).map(([t])=>t).join(" ")}const _=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,T=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function X(e){let t,r=[];e.$on=(n,i)=>{let a=n,s=()=>{};return t?s=t(a,i):r.push([a,i]),a.match(_)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),()=>{s()}};function o(n){E(e,n)}return n=>{const i=[],a={};t=(s,m)=>{let c=s,d=m,f=!1;const b=c.match(_),$=c.match(T),M=b||$;if(c.match(/^SMUI:\w+:/)){const u=c.split(":");let l="";for(let p=0;p<u.length;p++)l+=p===u.length-1?":"+u[p]:u[p].split("-").map(v=>v.slice(0,1).toUpperCase()+v.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${l.split("$")[0]}.`),c=l}if(M){const u=c.split(b?":":"$");c=u[0];const l=Object.fromEntries(u.slice(1).map(p=>[p,!0]));l.passive&&(f=f||{},f.passive=!0),l.nonpassive&&(f=f||{},f.passive=!1),l.capture&&(f=f||{},f.capture=!0),l.once&&(f=f||{},f.once=!0),l.preventDefault&&(d=P(d)),l.stopPropagation&&(d=S(d))}const x=g(n,c,d,f),y=()=>{x();const u=i.indexOf(y);u>-1&&i.splice(u,1)};return i.push(y),c in a||(a[c]=g(n,c,o)),y};for(let s=0;s<r.length;s++)t(r[s][0],r[s][1]);return{destroy:()=>{for(let s=0;s<i.length;s++)i[s]();for(let s of Object.entries(a))s[1]()}}}}function Z(e,t){let r=[];if(t)for(let o=0;o<t.length;o++){const n=t[o],i=Array.isArray(n)?n[0]:n;Array.isArray(n)&&n.length>1?r.push(i(e,n[1])):r.push(i(e))}return{update(o){if((o&&o.length||0)!=r.length)throw new Error("You must not change the length of an actions array.");if(o)for(let n=0;n<o.length;n++){const i=r[n];if(i&&i.update){const a=o[n];Array.isArray(a)&&a.length>1?i.update(a[1]):i.update()}}},destroy(){for(let o=0;o<r.length;o++){const n=r[o];n&&n.destroy&&n.destroy()}}}}var h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])},h(e,t)};function k(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var w=function(){return w=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},w.apply(this,arguments)};function ee(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],o=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function te(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var o=r.call(e),n,i=[],a;try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(s){a={error:s}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var re=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();function I(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var D=I,C=/\s/;function B(e){for(var t=e.length;t--&&C.test(e.charAt(t)););return t}var N=B,R=N,U=/^\s+/;function F(e){return e&&e.slice(0,R(e)+1).replace(U,"")}var z=F,H=z,O=D,K=A,j=0/0,W=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,q=/^0o[0-7]+$/i,G=parseInt;function J(e){if(typeof e=="number")return e;if(K(e))return j;if(O(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=O(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=H(e);var r=Y.test(e);return r||q.test(e)?G(e.slice(2),r?2:8):W.test(e)?j:+e}var ne=J;export{re as M,k as _,w as a,ee as b,V as c,te as d,X as f,D as i,ne as t,Z as u};
