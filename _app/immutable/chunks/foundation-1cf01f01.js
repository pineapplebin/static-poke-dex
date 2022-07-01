import{Y as b,a7 as E,a8 as P,a9 as $}from"./index-f7ffb9e3.js";function S(e){return Object.entries(e).filter(([t,r])=>t!==""&&r).map(([t])=>t).join(" ")}const w=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,x=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function T(e){let t,r=[];e.$on=(n,i)=>{let a=n,s=()=>{};return t?s=t(a,i):r.push([a,i]),a.match(w)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),()=>{s()}};function o(n){E(e,n)}return n=>{const i=[],a={};t=(s,g)=>{let l=s,d=g,f=!1;const v=l.match(w),O=l.match(x),M=v||O;if(l.match(/^SMUI:\w+:/)){const u=l.split(":");let c="";for(let p=0;p<u.length;p++)c+=p===u.length-1?":"+u[p]:u[p].split("-").map(m=>m.slice(0,1).toUpperCase()+m.slice(1)).join("");console.warn(`The event ${l.split("$")[0]} has been renamed to ${c.split("$")[0]}.`),l=c}if(M){const u=l.split(v?":":"$");l=u[0];const c=Object.fromEntries(u.slice(1).map(p=>[p,!0]));c.passive&&(f=f||{},f.passive=!0),c.nonpassive&&(f=f||{},f.passive=!1),c.capture&&(f=f||{},f.capture=!0),c.once&&(f=f||{},f.once=!0),c.preventDefault&&(d=P(d)),c.stopPropagation&&(d=$(d))}const j=b(n,l,d,f),y=()=>{j();const u=i.indexOf(y);u>-1&&i.splice(u,1)};return i.push(y),l in a||(a[l]=b(n,l,o)),y};for(let s=0;s<r.length;s++)t(r[s][0],r[s][1]);return{destroy:()=>{for(let s=0;s<i.length;s++)i[s]();for(let s of Object.entries(a))s[1]()}}}}function D(e,t){let r=[];if(t)for(let o=0;o<t.length;o++){const n=t[o],i=Array.isArray(n)?n[0]:n;Array.isArray(n)&&n.length>1?r.push(i(e,n[1])):r.push(i(e))}return{update(o){if((o&&o.length||0)!=r.length)throw new Error("You must not change the length of an actions array.");if(o)for(let n=0;n<o.length;n++){const i=r[n];if(i&&i.update){const a=o[n];Array.isArray(a)&&a.length>1?i.update(a[1]):i.update()}}},destroy(){for(let o=0;o<r.length;o++){const n=r[o];n&&n.destroy&&n.destroy()}}}}var h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])},h(e,t)};function C(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var _=function(){return _=Object.assign||function(t){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},_.apply(this,arguments)};function R(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],o=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function U(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var o=r.call(e),n,i=[],a;try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(s){a={error:s}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}/**
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
 */var F=function(){function e(t){t===void 0&&(t={}),this.adapter=t}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();export{F as M,C as _,_ as a,R as b,S as c,U as d,T as f,D as u};
