import{s as j,p as q}from"./d3-selection-DSeOx27A.js";import{d as H}from"./d3-dispatch-kxCwF96_.js";const J={passive:!1},v={capture:!0,passive:!1};function P(t){t.stopImmediatePropagation()}function y(t){t.preventDefault(),t.stopImmediatePropagation()}function L(t){var u=t.document.documentElement,c=j(t).on("dragstart.drag",y,v);"onselectstart"in u?c.on("selectstart.drag",y,v):(u.__noselect=u.style.MozUserSelect,u.style.MozUserSelect="none")}function Q(t,u){var c=t.document.documentElement,l=j(t).on("dragstart.drag",null);u&&(l.on("click.drag",y,v),setTimeout(function(){l.on("click.drag",null)},0)),"onselectstart"in c?l.on("selectstart.drag",null):(c.style.MozUserSelect=c.__noselect,delete c.__noselect)}const k=t=>()=>t;function S(t,{sourceEvent:u,subject:c,target:l,identifier:f,active:m,x:h,y:x,dx:w,dy:p,dispatch:d}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:u,enumerable:!0,configurable:!0},subject:{value:c,enumerable:!0,configurable:!0},target:{value:l,enumerable:!0,configurable:!0},identifier:{value:f,enumerable:!0,configurable:!0},active:{value:m,enumerable:!0,configurable:!0},x:{value:h,enumerable:!0,configurable:!0},y:{value:x,enumerable:!0,configurable:!0},dx:{value:w,enumerable:!0,configurable:!0},dy:{value:p,enumerable:!0,configurable:!0},_:{value:d}})}S.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function R(t){return!t.ctrlKey&&!t.button}function V(){return this.parentNode}function W(t,u){return u??{x:t.x,y:t.y}}function Z(){return navigator.maxTouchPoints||"ontouchstart"in this}function ee(){var t=R,u=V,c=W,l=Z,f={},m=H("start","drag","end"),h=0,x,w,p,d,E=0;function a(e){e.on("mousedown.drag",C).filter(l).on("touchstart.drag",N).on("touchmove.drag",O,J).on("touchend.drag touchcancel.drag",A).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function C(e,n){if(!(d||!t.call(this,e,n))){var r=z(this,u.call(this,e,n),e,n,"mouse");r&&(j(e.view).on("mousemove.drag",F,v).on("mouseup.drag",K,v),L(e.view),P(e),p=!1,x=e.clientX,w=e.clientY,r("start",e))}}function F(e){if(y(e),!p){var n=e.clientX-x,r=e.clientY-w;p=n*n+r*r>E}f.mouse("drag",e)}function K(e){j(e.view).on("mousemove.drag mouseup.drag",null),Q(e.view,p),y(e),f.mouse("end",e)}function N(e,n){if(t.call(this,e,n)){var r=e.changedTouches,o=u.call(this,e,n),s=r.length,g,b;for(g=0;g<s;++g)(b=z(this,o,e,n,r[g].identifier,r[g]))&&(P(e),b("start",e,r[g]))}}function O(e){var n=e.changedTouches,r=n.length,o,s;for(o=0;o<r;++o)(s=f[n[o].identifier])&&(y(e),s("drag",e,n[o]))}function A(e){var n=e.changedTouches,r=n.length,o,s;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),o=0;o<r;++o)(s=f[n[o].identifier])&&(P(e),s("end",e,n[o]))}function z(e,n,r,o,s,g){var b=m.copy(),i=q(g||r,n),U,I,T;if((T=c.call(e,new S("beforestart",{sourceEvent:r,target:a,identifier:s,active:h,x:i[0],y:i[1],dx:0,dy:0,dispatch:b}),o))!=null)return U=T.x-i[0]||0,I=T.y-i[1]||0,function B(D,X,G){var Y=i,M;switch(D){case"start":f[s]=B,M=h++;break;case"end":delete f[s],--h;case"drag":i=q(G||X,n),M=h;break}b.call(D,e,new S(D,{sourceEvent:X,subject:T,target:a,identifier:s,active:M,x:i[0]+U,y:i[1]+I,dx:i[0]-Y[0],dy:i[1]-Y[1],dispatch:b}),o)}}return a.filter=function(e){return arguments.length?(t=typeof e=="function"?e:k(!!e),a):t},a.container=function(e){return arguments.length?(u=typeof e=="function"?e:k(e),a):u},a.subject=function(e){return arguments.length?(c=typeof e=="function"?e:k(e),a):c},a.touchable=function(e){return arguments.length?(l=typeof e=="function"?e:k(!!e),a):l},a.on=function(){var e=m.on.apply(m,arguments);return e===m?a:e},a.clickDistance=function(e){return arguments.length?(E=(e=+e)*e,a):Math.sqrt(E)},a}export{L as a,ee as d,Q as y};
