function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function l(t,n,e,o,r,i,c){const l=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(l){const r=a(n,e,o,c);t.p(r,l)}}let u,s=!1;function f(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function d(t,n){s?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=f(1,r+1,(t=>n[e[t]].claim_order),n[l].claim_order)-1;o[l]=e[t]+1;const i=t+1;e[i]=l,r=Math.max(i,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,u=0;l<c.length;l++){for(;u<i.length&&c[l].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function h(t,n,e){s&&!e?d(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function b(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function v(t,n,e,o){return b(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):_(n)))}function w(t,n){return b(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>p(n)),!0)}function E(t){return w(t," ")}function k(t){u=t}function N(t){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(t)}const A=[],S=[],j=[],B=[],C=Promise.resolve();let M=!1;function O(t){j.push(t)}let q=!1;const I=new Set;function L(){if(!q){q=!0;do{for(let t=0;t<A.length;t+=1){const n=A[t];k(n),T(n.$$)}for(k(null),A.length=0;S.length;)S.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];I.has(n)||(I.add(n),n())}j.length=0}while(A.length);for(;B.length;)B.pop()();M=!1,q=!1,I.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}const z=new Set;function F(t,n){t&&t.i&&(z.delete(t),t.i(n))}function P(t,n,e,o){if(t&&t.o){if(z.has(t))return;z.add(t),undefined.c.push((()=>{z.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function D(t){t&&t.c()}function G(t,n){t&&t.l(n)}function H(t,e,i,c){const{fragment:a,on_mount:l,on_destroy:u,after_update:s}=t.$$;a&&a.m(e,i),c||O((()=>{const e=l.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(O)}function J(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(A.push(t),M||(M=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,r,i,c,a,l,f=[-1]){const d=u;k(n);const h=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:e(),dirty:f,skip_bound:!1};let _=!1;if(h.ctx=i?i(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),_&&K(n,t)),e})):[],h.update(),_=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){s=!0;const t=x(r.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();r.intro&&F(n.$$.fragment),H(n,r.target,r.anchor,r.customElement),s=!1,L()}k(d)}class R{$destroy(){J(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{R as S,g as a,v as b,c,x as d,_ as e,m as f,E as g,y as h,Q as i,h as j,d as k,P as l,p as m,w as n,D as o,G as p,H as q,J as r,i as s,F as t,l as u,N as v,$ as w,t as x};
