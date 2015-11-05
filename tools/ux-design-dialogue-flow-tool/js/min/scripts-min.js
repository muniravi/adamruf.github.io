$(document).ready(function(){$("#new-user-row").click(function(){$('<div class="row row-user"><div class="col-md-8 col-md-offset-2"><a class="toggle toggle-neutral"></a><span class="avatar avatar-user neutral"></span><p class="message message-user" contenteditable="true"></p><a class="delete"><i class="fa fa-close"></i></a></div></div>').appendTo("#userFlow"),$("html, body").animate({scrollTop:"+=1500px"},600)}),$("#new-app-row").click(function(){$('<div class="row row-app"><div class="col-md-8 col-md-offset-2"><p class="message message-app" contenteditable="true"></p><a class="toggle toggle-neutral"></a><span class="avatar avatar-app neutral"></span><a class="delete"><i class="fa fa-close"></i></a></div></div>').appendTo("#userFlow"),$("html, body").animate({scrollTop:"+=1500px"},600)}),$("#userFlow").on("click",".delete",function(){$(this).closest(".row").remove()}),$("body").tooltip({selector:"[rel=tooltip]"}),$("#userFlow").on("click",".toggle.toggle-positive",function(){event.preventDefault(),$(this).addClass("toggle-negative").removeClass("toggle-positive"),$(this).next(".avatar.positive").addClass("negative").removeClass("positive")}),$("#userFlow").on("click",".toggle.toggle-negative",function(){event.preventDefault(),$(this).addClass("toggle-neutral").removeClass("toggle-negative"),$(this).next(".avatar.negative").addClass("neutral").removeClass("negative")}),$("#userFlow").on("click",".toggle.toggle-neutral",function(){event.preventDefault(),$(this).addClass("toggle-positive").removeClass("toggle-neutral"),$(this).next(".avatar.neutral").addClass("positive").removeClass("neutral")}),/**!
   * Sortable
   * @author	RubaXa   <trash@rubaxa.org>
   * @license MIT
   */
function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=t():"undefined"!=typeof Package?Sortable=t():window.Sortable=t()}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=m({},e),t[F]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var o in n)!(o in e)&&(e[o]=n[o]);q(e);for(var a in this)"_"===a.charAt(0)&&(this[a]=this[a].bind(this));this.nativeDraggable=e.forceFallback?!1:H,i(t,"mousedown",this._onTapStart),i(t,"touchstart",this._onTapStart),this.nativeDraggable&&(i(t,"dragover",this),i(t,"dragenter",this)),z.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){y&&y.state!==t&&(s(y,"display",t?"none":""),!t&&y.state&&w.insertBefore(y,b),y.state=t)}function n(t,e,n){if(t){n=n||L,e=e.split(".");var o=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");do if(">*"===o&&t.parentNode===n||(""===o||t.nodeName.toUpperCase()==o)&&(!e.length||((" "+t.className+" ").match(i)||[]).length==e.length))return t;while(t!==n&&(t=t.parentNode))}return null}function o(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function i(t,e,n){t.addEventListener(e,n,!1)}function a(t,e,n){t.removeEventListener(e,n,!1)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(R," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(R," ")}}function s(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return L.defaultView&&L.defaultView.getComputedStyle?n=L.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,a=o.length;if(n)for(;a>i;i++)n(o[i],i);return o}return[]}function d(t,e,n,o,i,a,r){var s=L.createEvent("Event"),l=(t||e[F]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=i||e,s.item=o||e,s.clone=y,s.oldIndex=a,s.newIndex=r,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function c(t,e,n,o,i,a){var r,s=t[F],l=s.options.onMove,d;return r=L.createEvent("Event"),r.initEvent("move",!0,!0),r.to=e,r.from=t,r.dragged=n,r.draggedRect=o,r.related=i||e,r.relatedRect=a||e.getBoundingClientRect(),t.dispatchEvent(r),l&&(d=l.call(s,r)),d}function u(t){t.draggable=!1}function h(){W=!1}function p(t,e){var n=t.lastElementChild,o=n.getBoundingClientRect();return(e.clientY-(o.top+o.height)>5||e.clientX-(o.right+o.width)>5)&&n}function f(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function g(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function v(t,e){var n,o;return function(){void 0===n&&(n=arguments,o=this,setTimeout(function(){1===n.length?t.call(o,n[0]):t.apply(o,n),n=void 0},e))}}function m(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var b,D,_,y,w,C,T,S,x,E,N,B,k,O,X={},Y,A,I,R=/\s+/g,F="Sortable"+(new Date).getTime(),M=window,L=M.document,U=M.parseInt,H=!!("draggable"in L.createElement("div")),P=function(t){return t=L.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),W=!1,j=Math.abs,V=[].slice,z=[],G=v(function(t,e,n){if(n&&e.scroll){var o,i,a=e.scrollSensitivity,r=e.scrollSpeed,s=t.clientX,l=t.clientY,d=window.innerWidth,c=window.innerHeight,u,h;if(S!==n&&(T=e.scroll,S=n,T===!0)){T=n;do if(T.offsetWidth<T.scrollWidth||T.offsetHeight<T.scrollHeight)break;while(T=T.parentNode)}T&&(o=T,i=T.getBoundingClientRect(),u=(j(i.right-s)<=a)-(j(i.left-s)<=a),h=(j(i.bottom-l)<=a)-(j(i.top-l)<=a)),u||h||(u=(a>=d-s)-(a>=s),h=(a>=c-l)-(a>=l),(u||h)&&(o=M)),(X.vx!==u||X.vy!==h||X.el!==o)&&(X.el=o,X.vx=u,X.vy=h,clearInterval(X.pid),o&&(X.pid=setInterval(function(){o===M?M.scrollTo(M.pageXOffset+u*r,M.pageYOffset+h*r):(h&&(o.scrollTop+=h*r),u&&(o.scrollLeft+=u*r))},24)))}},30),q=function(t){var e=t.group;e&&"object"==typeof e||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,o=this.el,i=this.options,a=t.type,r=t.touches&&t.touches[0],s=(r||t).target,l=s,c=i.filter;if(!("mousedown"===a&&0!==t.button||i.disabled)&&(s=n(s,i.draggable,o))){if(B=g(s),"function"==typeof c){if(c.call(this,t,s,this))return d(e,l,"filter",s,o,B),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){return t=n(l,t.trim(),o),t?(d(e,t,"filter",s,o,B),!0):void 0})))return void t.preventDefault();(!i.handle||n(l,i.handle,o))&&this._prepareDragStart(t,r,s)}},_prepareDragStart:function(t,e,n){var o=this,a=o.el,s=o.options,d=a.ownerDocument,c;n&&!b&&n.parentNode===a&&(Y=t,w=a,b=n,D=b.parentNode,C=b.nextSibling,O=s.group,c=function(){o._disableDelayedDrag(),b.draggable=!0,r(b,o.options.chosenClass,!0),o._triggerDragStart(e)},s.ignore.split(",").forEach(function(t){l(b,t.trim(),u)}),i(d,"mouseup",o._onDrop),i(d,"touchend",o._onDrop),i(d,"touchcancel",o._onDrop),s.delay?(i(d,"mouseup",o._disableDelayedDrag),i(d,"touchend",o._disableDelayedDrag),i(d,"touchcancel",o._disableDelayedDrag),i(d,"mousemove",o._disableDelayedDrag),i(d,"touchmove",o._disableDelayedDrag),o._dragStartTimer=setTimeout(c,s.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(Y={target:b,clientX:t.clientX,clientY:t.clientY},this._onDragStart(Y,"touch")):this.nativeDraggable?(i(b,"dragend",this),i(w,"dragstart",this._onDragStart)):this._onDragStart(Y,!0);try{L.selection?L.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){w&&b&&(r(b,this.options.ghostClass,!0),t.active=this,d(this,w,"start",b,w,B))},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,P||s(_,"display","none");var t=L.elementFromPoint(A.clientX,A.clientY),e=t,n=" "+this.options.group.name,o=z.length;if(e)do{if(e[F]&&e[F].options.groups.indexOf(n)>-1){for(;o--;)z[o]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);P||s(_,"display","")}},_onTouchMove:function(e){if(Y){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,o=n.clientX-Y.clientX,i=n.clientY-Y.clientY,a=e.touches?"translate3d("+o+"px,"+i+"px,0)":"translate("+o+"px,"+i+"px)";I=!0,A=n,s(_,"webkitTransform",a),s(_,"mozTransform",a),s(_,"msTransform",a),s(_,"transform",a),e.preventDefault()}},_appendGhost:function(){if(!_){var t=b.getBoundingClientRect(),e=s(b),n=this.options,o;_=b.cloneNode(!0),r(_,n.ghostClass,!1),r(_,n.fallbackClass,!0),s(_,"top",t.top-U(e.marginTop,10)),s(_,"left",t.left-U(e.marginLeft,10)),s(_,"width",t.width),s(_,"height",t.height),s(_,"opacity","0.8"),s(_,"position","fixed"),s(_,"zIndex","100000"),s(_,"pointerEvents","none"),n.fallbackOnBody&&L.body.appendChild(_)||w.appendChild(_),o=_.getBoundingClientRect(),s(_,"width",2*t.width-o.width),s(_,"height",2*t.height-o.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,o=this.options;this._offUpEvents(),"clone"==O.pull&&(y=b.cloneNode(!0),s(y,"display","none"),w.insertBefore(y,b)),e?("touch"===e?(i(L,"touchmove",this._onTouchMove),i(L,"touchend",this._onDrop),i(L,"touchcancel",this._onDrop)):(i(L,"mousemove",this._onTouchMove),i(L,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",o.setData&&o.setData.call(this,n,b)),i(L,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var o=this.el,i,a,r,l=this.options,d=l.group,u=d.put,f=O===d,g=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),I=!0,O&&!l.disabled&&(f?g||(r=!w.contains(b)):O.pull&&u&&(O.name===d.name||u.indexOf&&~u.indexOf(O.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(G(t,l,this.el),W)return;if(i=n(t.target,l.draggable,o),a=b.getBoundingClientRect(),r)return e(!0),void(y||C?w.insertBefore(b,y||C):g||w.appendChild(b));if(0===o.children.length||o.children[0]===_||o===t.target&&(i=p(o,t))){if(i){if(i.animated)return;v=i.getBoundingClientRect()}e(f),c(w,o,b,a,i,v)!==!1&&(b.contains(o)||(o.appendChild(b),D=o),this._animate(a,b),i&&this._animate(v,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[F]){x!==i&&(x=i,E=s(i),N=s(i.parentNode));var v=i.getBoundingClientRect(),m=v.right-v.left,T=v.bottom-v.top,S=/left|right|inline/.test(E.cssFloat+E.display)||"flex"==N.display&&0===N["flex-direction"].indexOf("row"),B=i.offsetWidth>b.offsetWidth,k=i.offsetHeight>b.offsetHeight,X=(S?(t.clientX-v.left)/m:(t.clientY-v.top)/T)>.5,Y=i.nextElementSibling,A=c(w,o,b,a,i,v),R;if(A!==!1){if(W=!0,setTimeout(h,30),e(f),1===A||-1===A)R=1===A;else if(S){var M=b.offsetTop,L=i.offsetTop;R=M===L?i.previousElementSibling===b&&!B||X&&B:L>M}else R=Y!==b&&!k||X&&k;b.contains(o)||(R&&!Y?o.appendChild(b):i.parentNode.insertBefore(b,R?Y:i)),D=b.parentNode,this._animate(a,b),this._animate(v,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var o=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-o.left)+"px,"+(t.top-o.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(L,"touchmove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,o=this.options;clearInterval(this._loopId),clearInterval(X.pid),clearTimeout(this._dragStartTimer),a(L,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(L,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(I&&(e.preventDefault(),!o.dropBubble&&e.stopPropagation()),_&&_.parentNode.removeChild(_),b&&(this.nativeDraggable&&a(b,"dragend",this),u(b),r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),w!==D?(k=g(b),k>=0&&(d(null,D,"sort",b,w,B,k),d(this,w,"sort",b,w,B,k),d(null,D,"add",b,w,B,k),d(this,w,"remove",b,w,B,k))):(y&&y.parentNode.removeChild(y),b.nextSibling!==C&&(k=g(b),k>=0&&(d(this,w,"update",b,w,B,k),d(this,w,"sort",b,w,B,k)))),t.active&&((null===k||-1===k)&&(k=B),d(this,w,"end",b,w,B,k),this.save())),w=b=D=_=C=y=T=S=Y=A=I=k=x=E=O=t.active=null)},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?b&&(this._onDragOver(t),o(t)):("drop"===e||"dragend"===e)&&this._onDrop(t)},toArray:function(){for(var t=[],e,o=this.el.children,i=0,a=o.length,r=this.options;a>i;i++)e=o[i],n(e,r.draggable,this.el)&&t.push(e.getAttribute(r.dataIdAttr)||f(e));return t},sort:function(t){var e={},o=this.el;this.toArray().forEach(function(t,i){var a=o.children[i];n(a,this.options.draggable,o)&&(e[t]=a)},this),t.forEach(function(t){e[t]&&(o.removeChild(e[t]),o.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:(n[t]=e,void("group"===t&&q(n)))},destroy:function(){var t=this.el;t[F]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),z.splice(z.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:i,off:a,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:m,throttle:v,closest:n,toggleClass:r,index:g},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t}),Sortable.create(userFlow,{animation:150})});