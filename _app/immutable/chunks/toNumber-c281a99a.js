import{t as tt}from"./useActions-00974d6b.js";var w=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};(function(i){var y,d,g,j,$,G,A,R,D,O,I,F,M,B,v,N,C,L,V,q,x,H,U,W,S;(function(u){var T=typeof w=="object"?w:typeof self=="object"?self:typeof this=="object"?this:{};u(P(T,P(i.exports)));function P(t,e){return t!==T&&(typeof Object.create=="function"?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(r,n){return t[r]=e?e(r,n):n}}})(function(u){var T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])};y=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");T(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)},d=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},g=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r},j=function(t,e,r,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(c=t[l])&&(a=(o<3?c(a):o>3?c(e,r,a):c(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a},$=function(t,e){return function(r,n){e(r,n,t)}},G=function(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)},A=function(t,e,r,n){function o(a){return a instanceof r?a:new r(function(c){c(a)})}return new(r||(r=Promise))(function(a,c){function l(_){try{f(n.next(_))}catch(h){c(h)}}function b(_){try{f(n.throw(_))}catch(h){c(h)}}function f(_){_.done?a(_.value):o(_.value).then(l,b)}f((n=n.apply(t,e||[])).next())})},R=function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,c;return c={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function l(f){return function(_){return b([f,_])}}function b(f){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(a=f[0]&2?o.return:f[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,f[1])).done)return a;switch(o=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return r.label++,{value:f[1],done:!1};case 5:r.label++,o=f[1],f=[0];continue;case 7:f=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){r=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){r.label=f[1];break}if(f[0]===6&&r.label<a[1]){r.label=a[1],a=f;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(f);break}a[2]&&r.ops.pop(),r.trys.pop();continue}f=e.call(t,r)}catch(_){f=[6,_],o=0}finally{n=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},D=function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&S(e,t,r)},S=Object.create?function(t,e,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]},O=function(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},I=function(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,a=[],c;try{for(;(e===void 0||e-- >0)&&!(o=n.next()).done;)a.push(o.value)}catch(l){c={error:l}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(c)throw c.error}}return a},F=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(I(arguments[e]));return t},M=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var a=arguments[e],c=0,l=a.length;c<l;c++,o++)n[o]=a[c];return n},B=function(t,e,r){if(r||arguments.length===2)for(var n=0,o=e.length,a;n<o;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))},v=function(t){return this instanceof v?(this.v=t,this):new v(t)},N=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),o,a=[];return o={},c("next"),c("throw"),c("return"),o[Symbol.asyncIterator]=function(){return this},o;function c(s){n[s]&&(o[s]=function(p){return new Promise(function(E,k){a.push([s,p,E,k])>1||l(s,p)})})}function l(s,p){try{b(n[s](p))}catch(E){h(a[0][3],E)}}function b(s){s.value instanceof v?Promise.resolve(s.value.v).then(f,_):h(a[0][2],s)}function f(s){l("next",s)}function _(s){l("throw",s)}function h(s,p){s(p),a.shift(),a.length&&l(a[0][0],a[0][1])}},C=function(t){var e,r;return e={},n("next"),n("throw",function(o){throw o}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(o,a){e[o]=t[o]?function(c){return(r=!r)?{value:v(t[o](c)),done:o==="return"}:a?a(c):c}:a}},L=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof O=="function"?O(t):t[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(a){r[a]=t[a]&&function(c){return new Promise(function(l,b){c=t[a](c),o(l,b,c.done,c.value)})}}function o(a,c,l,b){Promise.resolve(b).then(function(f){a({value:f,done:l})},c)}},V=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};var P=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};q=function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)&&S(e,t,r);return P(e,t),e},x=function(t){return t&&t.__esModule?t:{default:t}},H=function(t,e,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)},U=function(t,e,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(t,r):o?o.value=r:e.set(t,r),r},W=function(t,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof t=="function"?e===t:t.has(e)},u("__extends",y),u("__assign",d),u("__rest",g),u("__decorate",j),u("__param",$),u("__metadata",G),u("__awaiter",A),u("__generator",R),u("__exportStar",D),u("__createBinding",S),u("__values",O),u("__read",I),u("__spread",F),u("__spreadArrays",M),u("__spreadArray",B),u("__await",v),u("__asyncGenerator",N),u("__asyncDelegator",C),u("__asyncValues",L),u("__makeTemplateObject",V),u("__importStar",q),u("__importDefault",x),u("__classPrivateFieldGet",H),u("__classPrivateFieldSet",U),u("__classPrivateFieldIn",W)})})(tt);var et=typeof w=="object"&&w&&w.Object===Object&&w,rt=et,nt=rt,at=typeof self=="object"&&self&&self.Object===Object&&self,ot=nt||at||Function("return this")(),it=ot,ct=it,ft=ct.Symbol,Y=ft,z=Y,Z=Object.prototype,ut=Z.hasOwnProperty,lt=Z.toString,m=z?z.toStringTag:void 0;function st(i){var y=ut.call(i,m),d=i[m];try{i[m]=void 0;var g=!0}catch{}var j=lt.call(i);return g&&(y?i[m]=d:delete i[m]),j}var yt=st,_t=Object.prototype,bt=_t.toString;function dt(i){return bt.call(i)}var vt=dt,J=Y,ht=yt,pt=vt,wt="[object Null]",mt="[object Undefined]",K=J?J.toStringTag:void 0;function gt(i){return i==null?i===void 0?mt:wt:K&&K in Object(i)?ht(i):pt(i)}var jt=gt;function Ot(i){return i!=null&&typeof i=="object"}var St=Ot,Tt=jt,Pt=St,$t="[object Symbol]";function It(i){return typeof i=="symbol"||Pt(i)&&Tt(i)==$t}var Et=It,Gt=/\s/;function At(i){for(var y=i.length;y--&&Gt.test(i.charAt(y)););return y}var Rt=At,Dt=Rt,Ft=/^\s+/;function Mt(i){return i&&i.slice(0,Dt(i)+1).replace(Ft,"")}var Bt=Mt;function Nt(i){var y=typeof i;return i!=null&&(y=="object"||y=="function")}var Ct=Nt,Lt=Bt,Q=Ct,Vt=Et,X=0/0,qt=/^[-+]0x[0-9a-f]+$/i,xt=/^0b[01]+$/i,Ht=/^0o[0-7]+$/i,Ut=parseInt;function Wt(i){if(typeof i=="number")return i;if(Vt(i))return X;if(Q(i)){var y=typeof i.valueOf=="function"?i.valueOf():i;i=Q(y)?y+"":y}if(typeof i!="string")return i===0?i:+i;i=Lt(i);var d=xt.test(i);return d||Ht.test(i)?Ut(i.slice(2),d?2:8):qt.test(i)?X:+i}var Jt=Wt;export{Y as _,it as a,Ct as b,Et as i,Jt as t};
