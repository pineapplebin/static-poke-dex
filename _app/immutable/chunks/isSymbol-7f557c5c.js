var o=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},s=typeof o=="object"&&o&&o.Object===Object&&o,y=s,j=y,d=typeof self=="object"&&self&&self.Object===Object&&self,T=j||d||Function("return this")(),v=T,S=v,u=S.Symbol,i=u,r=i,b=Object.prototype,p=b.hasOwnProperty,O=b.toString,t=r?r.toStringTag:void 0;function m(e){var l=p.call(e,t),f=e[t];try{e[t]=void 0;var c=!0}catch{}var g=O.call(e);return c&&(l?e[t]=f:delete e[t]),g}var $=m,w=Object.prototype,_=w.toString;function G(e){return _.call(e)}var h=G,n=i,P=$,k=h,L="[object Null]",R="[object Undefined]",a=n?n.toStringTag:void 0;function x(e){return e==null?e===void 0?R:L:a&&a in Object(e)?P(e):k(e)}var F=x;function N(e){return e!=null&&typeof e=="object"}var U=N,q=F,z=U,A="[object Symbol]";function B(e){return typeof e=="symbol"||z(e)&&q(e)==A}var D=B;export{i as _,v as a,o as c,D as i};
