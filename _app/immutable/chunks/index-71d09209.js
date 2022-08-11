import{aj as l}from"./index-b677f905.js";function u(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:s=400,easing:c=l}={}){const a=+getComputedStyle(o).opacity;return{delay:t,duration:s,easing:c,css:r=>`opacity: ${r*a}`}}function g(o,{delay:t=0,duration:s=400,easing:c=u,x:a=0,y:r=0,opacity:e=0}={}){const n=getComputedStyle(o),f=+n.opacity,p=n.transform==="none"?"":n.transform,y=f*(1-e);return{delay:t,duration:s,easing:c,css:(m,i)=>`
			transform: ${p} translate(${(1-m)*a}px, ${(1-m)*r}px);
			opacity: ${f-y*i}`}}function x(o,{delay:t=0,duration:s=400,easing:c=u,start:a=0,opacity:r=0}={}){const e=getComputedStyle(o),n=+e.opacity,f=e.transform==="none"?"":e.transform,p=1-a,y=n*(1-r);return{delay:t,duration:s,easing:c,css:(m,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${n-y*i}
		`}}export{$ as a,u as c,g as f,x as s};
