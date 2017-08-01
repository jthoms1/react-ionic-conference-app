/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
(function(Core,appNamespace,publicPath){"use strict";
!function(n){function e(n,e,r,t,i){var a=o(n,"ionicplatform");if(a)return a===r;if(e){e=e.toLowerCase();for(var c=0;c<t.length;c++)if(e.indexOf(t[c])>-1){for(var u=0;u<i.length;u++)if(e.indexOf(i[u])>-1)return!1;return!0}}return!1}function o(n,e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(n);return o?decodeURIComponent(o[1].replace(/\+/g," ")):null}function r(n,e,o){o?n.load(o).then(e):e(n)}var t=["windows phone"],i=[{name:"ipad",isMatch:function(n,o){return e(n,o,"ipad",["ipad"],t)}},{name:"iphone",isMatch:function(n,o){return e(n,o,"iphone",["iphone"],t)}},{name:"ios",settings:{mode:"ios"},isMatch:function(n,o){return e(n,o,"ios",["iphone","ipad","ipod"],t)}},{name:"android",settings:{activator:"ripple",mode:"md"},isMatch:function(n,o){return e(n,o,"android",["android","silk"],t)}},{name:"windows",settings:{mode:"wp"},isMatch:function(n,o){return e(n,o,"windows",t,[])}},{name:"core",settings:{mode:"md"}}],a=window.Ionic=window.Ionic||{};a.config=function(n,e){function o(o,r){if(void 0!==n[o])return n[o];for(var t=null,i=0;i<e.length;i++)if((t=e[i].settings)&&void 0!==t[o])return t[o];return void 0!==r?r:null}return n=n||{},{get:o,getBoolean:function(n,e){var r=o(n);return null===r?void 0!==e&&e:"string"==typeof r?"true"===r:!!r},getNumber:function(n,e){var r=parseFloat(o(n));return isNaN(r)?void 0!==e?e:NaN:r}}}(a.config,function(n,e,o,r){var t=o.filter(function(o){return o.isMatch&&o.isMatch(n,e)});return t.length||(t=o.filter(function(n){return n.name===r})),t}(window.location.href,window.navigator.userAgent,i,"core")),Core.mode=a.mode=a.config.get("mode","md");var c={};a.controllers={},a.controller=function(n,e){return new Promise(function(o){var t=a.controllers[n];if(t)r(t,o,e);else{var i=c[n];i?i.push(o,e):(c[n]=[o,e],document.body.appendChild(document.createElement("ion-"+n+"-controller")))}})},a.loadController=function(n,e){a.controllers[n]=e;var o=c[n];if(o){for(var t=0;t<o.length;t+=2)r(e,o[t],o[t+1]);delete c[n]}}}(publicPath);
(function(S,ja,ka,M,la){function N(){}function A(d){return void 0!==d&&null!==d}function T(d){return void 0===d||null===d}function ma(d){return d.replace(/([A-Z])/g,function(b){return"-"+b[0].toLowerCase()})}function na(){}function oa(d,b){return"child"===b?d.firstElementChild:"parent"===b?X(d)||d:"body"===b?d.ownerDocument.body:"document"===b?d.ownerDocument:"window"===b?d.ownerDocument.defaultView:d}function X(d){return d.parentElement?d.parentElement:d.parentNode&&d.parentNode.host?d.parentNode.host:
null}function pa(d,b){var f=d.w(b).R;if(f)for(var g=0;g<f.length;g++){var r=f[g];r.Aa||((b.A=b.A||{})[r.C]=U(d,b,r.C,Y(b,r.P),r.ka,r.la))}}function Y(d,b){return function(f){if(d.$instance)d.$instance[b](f);else(d.ja=d.ja||[]).push(b,f)}}function qa(d){var b=d.ja;if(b){for(var f=0;f<b.length;f+=2)d.$instance[b[f]](b[f+1]);delete d.ja}}function U(d,b,f,g,r,q){function u(q){if(!(0<w&&q.keyCode!==w)&&(g(q),b.$instance)){b.za();a:{for(q=0;q<Z.length;q++)if(-1<f.indexOf(Z[q])){q=!0;break a}q=!1}q&&d.qa.flush()}}
var y=f.split(":");b&&1<y.length&&(b=oa(b,y[0]),f=y[1]);if(!b)return na;var y=f.split("."),w=0;1<y.length&&(f=y[0],w=ra[y[1]]);var v=d.Ca(r,q);b.addEventListener(f,u,v);return function(){b&&b.removeEventListener(f,u,v)}}function aa(d,b,f){var g=void 0,r=void 0,q;for(q=arguments.length;2<q--;)P.push(arguments[q]);for(;P.length;)if((f=P.pop())&&void 0!==f.pop)for(q=f.length;q--;)P.push(f[q]);else{"boolean"===typeof f&&(f=null);if(q="function"!==typeof d)null==f?f="":"number"===typeof f?f=String(f):
"string"!==typeof f&&(q=!1);q&&r?g[g.length-1].j+=f:void 0===g?g=[q?Q(f):f]:g.push(q?Q(f):f);r=q}r=new N;r.g=d;r.f=g;b?(r.D=b.a,r.Z=b.p,r.X=b.c,r.aa=b.s,r.F=b.o,r.Y=b.k,r.Ka=b.n,r.Ga=0===b.x||2===b.x,r.Fa=0<b.x):(r.Ga=!0,r.Fa=!g||0===g.length);return r}function Q(d){var b=new N;b.j=d;return b}function sa(d,b){var f=b.querySelectorAll("[ssrv]"),g,r,q,u=f.length,y,w;if(b.U=0<u)for(q=0;q<u;q++)for(b=f[q],g=d.H(b,"ssrv"),r=b.N=new N,r.g=d.xa(r.b=b).toLowerCase(),y=0,w=b.childNodes.length;y<w;y++)ba(d,
b.childNodes[y],r,g,!0)}function ba(d,b,f,g,r){var q=d.da(b),u;if(r&&1===q){if(q=d.H(b,"ssrc"))q=q.split("."),q[0]===g&&(r=new N,r.g=d.xa(r.b=b).toLowerCase(),f.f||(f.f=[]),f=f.f[q[1]]=r,r=""!==q[2]);for(q=0;q<b.childNodes.length;q++)ba(d,b.childNodes[q],f,g,r)}else 3===q&&(u=b.previousSibling)&&8===d.da(u)&&(q=d.ua(u).split("."),"s"===q[0]&&q[1]===g&&(r=Q(d.ua(b)),r.b=b,f.f||(f.f=[]),f.f[q[2]]=r))}function ta(d,b){function f(b){return d.requestAnimationFrame(b)}function g(d,w,v,C){try{for(w=b();v=
r.shift();)v(d);for(;(v=q.shift())&&!(v(d),8<b()-w););}catch(B){C=B}(u=0<r.length||0<q.length)&&f(g);C&&console.error(C)}var r=[],q=[],u=!1;return{read:function(b){r.push(b);u||(u=!0,f(g))},write:function(b){q.push(b);u||(u=!0,f(g))},bb:f}}function ua(d){return{Na:d.documentElement,ca:d.head,gb:d.body,da:function(b){return b.nodeType},Ma:function(){return d.createEvent("CustomEvent")},ba:function(b){return d.createElement(b)},La:function(b,f){return d.createElementNS(b,f)},ta:function(b){return d.createTextNode(b)},
sa:function(b){return d.createComment(b)},I:function(b,f,d){b.insertBefore(f,d)},ea:function(b,f){return b.removeChild(f)},G:function(b,f){b.appendChild(f)},hb:function(b){return b.childNodes},Pa:function(b){return b.parentNode},Oa:function(b){return b.nextSibling},xa:function(b){return b.tagName},ua:function(b){return b.textContent},fa:function(b,f){b.textContent=f},H:function(b,f){return b.getAttribute(f)},J:function(b,f,d){b.setAttribute(f,d)},wa:function(b,f,d,r){b.setAttributeNS(f,d,r)},va:function(b,
f){b.removeAttribute(f)}}}function ca(d,b,f,g){var r=null!=f;f=f||F;g=g||F;var q,u,y=g.b,w,v;if(f.D||g.D){w=f.D||F;v=g.D||F;for(q in v)u=v[q],w[q]!==u&&(1===va[q]?u?b.J(y,q,""):b.va(y,q):120!==q.charCodeAt(0)?b.J(y,q,u):58===q.charCodeAt(3)?b.wa(y,wa,q,u):58===q.charCodeAt(5)?b.wa(y,xa,q,u):b.J(y,q,u));if(r)for(q in w)q in v||b.va(y,q)}if(f.X||g.X){w=f.X||F;v=g.X||F;if(r)for(q in w)v[q]||y.classList.remove(q);for(q in v)if(u=v[q],u!==w[q])y.classList[v[q]?"add":"remove"](q)}if(f.Z||g.Z){w=f.Z||F;
v=g.Z||F;if(r)for(q in w)void 0===v[q]&&delete y[q];for(q in v)u=v[q],w[q]===u||"value"===q&&y[q]===u||(y[q]=u)}if(f.aa||g.aa){w=f.aa||F;v=g.aa||F;if(r)for(q in w)v[q]||(y.style[q]="");for(q in v)u=v[q],u!==w[q]&&(y.style[q]=u)}w=f.F;v=g.F;if(w||v){R||(R=d.Ca());if(r&&w&&f.V)for(q in w)v&&v[q]||f.b.removeEventListener(q,f.V,R);if(v)for(q in u=g.V=f.V||ya(),u.fb=g,v)w&&w[q]||y.addEventListener(q,u,R)}}function ya(){return function b(f){var g=b.fb,r=f.type,q=g.F;q&&q[r]&&da(q[r],g,f)}}function da(d,
b,f){if("function"===typeof d)d.call(b,f,b);else if(null!==d&&"object"===typeof d)if("function"===typeof d[0])if(2===d.length)d[0].call(b,d[1],f,b);else{var g=d.slice(1);g.push(f);g.push(b);d[0].apply(b,g)}else for(b=0;b<d.length;b++)da(d[b])}function za(d,b){function f(g,q,r){var u=0;if(0===g.g){if(w&&(g=g.D&&g.D.name,g=A(g)?w.na&&w.na[g]:w.B,A(g))){for(d.Ja=!0;u<g.length;u++)b.G(q,b.ea(b.Pa(g[u]),g[u]));d.Ja=!1}return null}if(A(g.j))g.b=b.ta(g.j);else{q=g.b=g.Ka?b.La(g.Ka,g.g):b.ba(g.g);ca(d,b,
null,g);var x=g.f;A(v)&&b.J(g.b,"ssrc",v+"."+r+(ea(x)?"":"."));if(x)for(;u<x.length;++u)if(r=f(x[u],q,u))A(v)&&3===r.nodeType&&b.G(q,b.sa("s."+v+"."+u)),b.G(q,r),A(v)&&3===r.nodeType&&b.G(q,b.sa("/"))}return g.b}function g(d,g,q,r,u){for(var w;r<=u;++r){var v=q[r];A(v)&&(w=A(v.j)?b.ta(v.j):f(v,d,r),A(w)&&(v.b=w,b.I(d,w,g)))}}function r(f,d,g,q){for(;g<=q;++g){var r=d[g];A(r)&&(A(r.b)&&V(r),b.ea(f,r.b))}}function q(b,f){return b.g===f.g&&b.Y===f.Y}function u(w,v){var x=v.b=w.b,z=w.f,D=v.f;if(T(v.j))if(y&&
v.Ga||0===v.g||ca(d,b,w,v),A(z)&&A(D)){if(!y||!v.Fa){w=v=0;for(var C=z.length-1,B=z[0],H=z[C],I=D.length-1,E=D[0],J=D[I],K=void 0,G,L;v<=C&&w<=I;)if(null==B)B=z[++v];else if(null==H)H=z[--C];else if(null==E)E=D[++w];else if(null==J)J=D[--I];else if(q(B,E))u(B,E),B=z[++v],E=D[++w];else if(q(H,J))u(H,J),H=z[--C],J=D[--I];else if(q(B,J))u(B,J),b.I(x,B.b,b.Oa(H.b)),B=z[++v],J=D[--I];else if(q(H,E))u(H,E),b.I(x,H.b,B.b),H=z[--C],E=D[++w];else{if(T(K)){var O;G=z;L=C;for(var fa={},K=v;K<=L;++K)O=G[K],null!=
O&&(O=O.Y,void 0!==O&&(fa.k=K));K=fa}G=K[E.Y];T(G)?G=f(E,x,w):(L=z[G],L.g!==E.g?G=f(E,x,G):(u(L,E),z[G]=void 0,G=L.b));E=D[++w];G&&b.I(x,G,B.b)}v>C?g(x,null==D[I+1]?null:D[I+1].b,D,w,I):w>I&&r(x,z,v,C)}}else A(D)?(A(w.j)&&b.fa(x,""),g(x,null,D,0,D.length-1)):A(z)&&r(x,z,0,z.length-1);else x.i&&x.i.B?(z=x.i.B[0].parentElement,b.fa(z,v.j),x.i.B=[z.childNodes[0]]):b.fa(x,v.j)}var y=void 0,w=void 0,v=void 0;return function(f,d,g,q,r){y=g;w=q;v=r;u(f,d);A(v)&&b.J(f.b,"ssrv",v);return d}}function V(d){if(d.F&&
d.V)for(var b in d.F)d.b.removeEventListener(b,d.F,!1);if(A(d.f))for(b=0;b<d.f.length;++b)d.f[b]&&V(d.f[b])}function ea(d){if(d)for(var b=0;b<d.length;b++)if(0!==d[b].g||ea(d[b].f))return!0;return!1}function Aa(d,b){function f(){for(;0<y.length;)y.shift()();C=!1}function g(){var d=b();for(f();0<w.length&&40>b()-d;)w.shift()();if(0===w.length)for(;0<v.length&&40>b()-d;)v.shift()();(B=0<w.length||0<v.length)&&q(r)}function r(){f();for(var d=b();0<w.length&&4>b()-d;)w.shift()();(B=0<w.length||0<v.length)&&
q(g)}var q=d.bb,u=Promise.resolve(),y=[],w=[],v=[],C=!1,B=!1;return{add:function(b,d){3===d?(y.push(b),C||(C=!0,u.then(f))):(1===d?v.push(b):w.push(b),B||(B=!0,q(g)))},flush:r}}function Ba(d){var b=d.performance=d.performance||{};if(!b.now){var f=Date.now();b.now=function(){return Date.now()-f}}return function(){return b.now()}}function W(d,b){if(A(b)){if(1===d)return"false"===b?!1:""===b||!!b;if(2===d)return parseFloat(b)}return b}function Ca(d,b,f,g,r){g!==r&&(f=f.toLowerCase(),(d=d.w(b).u.find(function(b){return b.O===
f}))&&(b[d.W]=W(d.Ea,r)))}function Da(d,b){b.ya||(b.ya=!0,delete b.ga,pa(d,b),d.qa.add(function(){var f=d.w(b);Ea(d,b);d.Sa(b,f.eb);d.$a(f,b,function(){b.za()})},3))}function Ea(d,b){for(var f=b;f=X(f);)if(d.w(f)){f.U||(b.M=f,f.v?f.v.push(b):f.v=[b]);break}}function Fa(d,b,f){b&&b.forEach(function(b){f[b.P]={emit:function(g){d.Ua(f.S,b.C,{bubbles:b.Va,composed:b.Xa,cancelable:b.Wa,detail:g})}}})}function ga(d,b){b.ia||(b.ia=!0,d.qa.add(function(){b.ia=!1;if(!b.ga){var f=!b.$instance;f&&Ga(d,b);b.Qa(!f);
f&&b.ha()}}))}function Ha(d,b,f,g){var r=0;if(g.ma)for(;r<g.ma.length;r++){var q=g.ma[r];Object.defineProperty(b,q,{configurable:!0,value:f[q].bind(f)})}q=f.T={};g.pa&&(q.L={});g.oa&&(q.K={});if(g.ra)for(r=0;r<g.ra.length;r++)ha(!1,!0,"",g.ra[r],0,f,q,d,b,g.pa,g.oa);if(g.u)for(r=0;r<g.u.length;r++)ha(!0,g.u[r].Za,g.u[r].O,g.u[r].W,g.u[r].Ea,f,f.T,d,b,g.pa,g.oa)}function ha(d,b,f,g,r,q,u,y,w,v,C){function B(){return u[g]}function x(b){var d=u[g];if(b!==d){if(u.L&&u.L[g])u.L[g](b,d);u[g]=b;if(u.K&&
u.K[g])u.K[g](b,d);ga(y,w)}}d?(f=w.getAttribute(f),null!==f?u[g]=W(r,f):void 0!==w[g]?u[g]=W(r,w[g]):void 0!==q[g]&&(u[g]=q[g])):u[g]=q[g];r=0;if(v)for(r=0;r<v.length;r++)v[r][0]===g&&(u.L[g]=q[v[r][1]].bind(q));if(C)for(r=0;r<C.length;r++)C[r][0]===g&&(u.K[g]=q[C[r][1]].bind(q));d&&Object.defineProperty(w,g,{configurable:!0,get:B,set:x});d={configurable:!0,get:B};d.set=b?x:function(){console.warn('@Prop() "'+g+'" on "'+w.tagName.toLowerCase()+'" cannot be modified.')};Object.defineProperty(q,g,d)}
function Ia(d,b,f){return f.split(" ").reduce(function(f,r){f[r]=!0;d&&(f[r+"-"+d]=!0,b&&(f[r+"-"+b]=!0,f[r+"-"+d+"-"+b]=!0));return f},{})}function Ja(d,b,f){var g=b.$instance,r=d.w(b);f&&g.componentWillUpdate&&g.componentWillUpdate();var q=g.render&&g.render(),u=g.hostData&&g.hostData(),y=r.Ya;if(q||u||y)y&&(u=Object.keys(y).reduce(function(b,f){switch(f){case "theme":b["class"]=b["class"]||{},b["class"]=Object.assign(b["class"],Ia(g.mode,g.color,y.theme))}return b},u||{})),r=b.N||new N,r.b=b,u&&
(u.a=u.attrs,u.c=u["class"],u.s=u.style,u.o=u.on),b.N=d.render(r,aa(null,u,q),f,b.i);f&&g.componentDidUpdate&&g.componentDidUpdate()}function Ka(d,b){b.connectedCallback=function(){Da(d,this)};b.attributeChangedCallback=function(b,g,r){Ca(d,this,b,g,r)};b.disconnectedCallback=function(){if(!d.Ja){this.ga=!0;var b=this.$instance;b&&(b.componentDidUnload&&b.componentDidUnload(),this.$instance=b.S=b.T=b.T.L=b.T.K=null);if(b=this.A){for(var g=Object.keys(b),r=0;r<g.length;r++)b[g[r]]();this.A=null}this.N&&
V(this.N);this.i&&(this.i=this.i.B=this.i.na=null);this.N=this.M=this.v=this.ya=this.ia=this.U=null}};b.za=function(){ga(d,this)};b.ha=function(){var b=this.$instance;if(!(!b||this.ga||this.v&&this.v.length)&&(this.v=null,this.U=!0,b.componentDidLoad&&b.componentDidLoad(),this.classList.add("\ud83d\udc8e"),this.M)){var d=(b=this.M.v)&&b.indexOf(this);-1<d&&b.splice(d,1);!b.length&&this.M.ha();delete this.M}};b.Qa=function(b){Ja(d,this,b)}}function Ga(d,b){var f=d.w(b),g=b.$instance=new f.Ra;g.S=b;
f.Da&&Object.defineProperty(g,f.Da,{get:function(){return this.S}});Ha(d,b,g,f);Fa(d,f.Ba,g);qa(b);g.componentWillLoad&&g.componentWillLoad()}var ra={enter:13,escape:27,space:32,tab:9},Z="touch mouse pointer key focus blur drag".split(" "),P=[],F={},R=null,va={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},xa="http://www.w3.org/1999/xlink",wa="http://www.w3.org/XML/1998/namespace";
M=S[M]=S[M]||{};var ia=function(d,b,f,g,r){function q(b){function d(){clearTimeout(g);f.onerror=f.onload=null;x.ea(f.parentNode,f);delete B[b]}var f=x.ba("script");f.charset="utf-8";f.async=!0;f.src=b;var g=setTimeout(d,12E4);f.onerror=f.onload=d;x.G(x.ca,f)}var u={HTML:{}},y={},w={},v={},C={},B={},x=ua(g);g=Ba(f);d.dom=ta(f,g);d.addListener=function(b,d,f,g){return U(z,b,d,f,g.capture,g.passive)};d.enableListener=function(b,d,f,g){var q=z;if(b){b=b.S;var r=q.w(b).R;if(r)for(var u=b.A=b.A||{},v=0;v<
r.length;v++){var w=r[v];if(w.C===d){f&&!u[d]?u[d]=U(q,b,g?g+":"+d:d,Y(b,w.P),w.ka,w.la):!f&&u[d]&&(u[d](),delete b.A[d]);break}}}};d.emit=function(b,f,g){b.dispatchEvent(new A(d.eventNameFn?d.eventNameFn(f):f,g))};d.isClient=!0;d.isServer=!1;var z={cb:function(b){return(b||[]).map(function(b){var d={Ia:b[0],u:[{W:"color",O:"color"},{W:"mode"}]};d.ab=b[1];d.Ha=b[2]||{};d.eb=b[3];if(b[4])for(var f=0;f<b[4].length;f++){var g=b[4][f];d.u.push({W:g[0],O:1===g[1]?g[0].toLowerCase():ma(g[0]),Ea:g[2],Za:!!g[3]})}if(b[5])for(d.R=
[],f=0;f<b[5].length;f++)g=b[5][f],d.R.push({C:g[0],P:g[1],Aa:!!g[2],la:!!g[3],ka:!!g[4]});d.jb=b[6];return u[d.Ia]=d})},Ta:function(b,d){Ka(z,d.prototype);d.observedAttributes=b.u.filter(function(b){return b.O}).map(function(b){return b.O});f.customElements.define(b.Ia.toLowerCase(),d)},w:function(b){return u[b.tagName]},$a:function(b,d,f){var g=b.ab;v[g]?f():(w[g]?w[g].push(f):w[g]=[f],f=r+g+".js",B[f]||(B[f]=!0,q(f)),(b=b.Ha[d.mode]||b.Ha.$)&&!C[b]&&(C[b]=!0,d=x.ba("link"),d.href=r+b+".css",d.rel=
"stylesheet",x.I(x.ca,d,x.ca.firstChild)))},qa:Aa(d.dom,g),Sa:function(b,f){b.mode||(b.mode=x.H(b,"mode")||d.mode);if(!x.H(b,"ssrv")){var g=x,q=b.childNodes;if(2===f){for(var r=f=void 0,u=void 0,v=0,w=q.length;v<w;v++){var y=q[v];1===g.da(y)&&null!=(f=g.H(y,"slot"))?(u=u||{},u[f]?u[f].push(y):u[f]=[y]):r?r.push(y):r=[y]}b.i={B:r,na:u}}else 1===f&&(b.i={B:q.length?Array.apply(null,q):null})}},Ua:d.emit,Ca:function(b,d){return F?{capture:!!b,passive:!!d}:!!b}};z.render=za(z,x);var D=x.Na;D.v=[];D.ha=
function(){D.U=!0};sa(x,D);b.defineComponents=function(b,f){var g=arguments;f(y,aa,Q,d,r);for(var q=2;q<g.length;q++){var x=g[q],z=u[x[0]];z.Ra=y[x[0]];z.Ya=x[1];if(x[2]){z.R=[];for(var B=0;B<x[2].length;B++){var A=x[2][B];z.R.push({P:A[0],C:A[1],ka:!!A[2],la:!!A[3],Aa:!!A[4]})}}z.ra=x[2];z.pa=x[3];z.oa=x[4];if(x[5])for(z.Ba=[],B=0;B<x[5].length;B++)A=x[5][B],z.Ba.push({C:A[0],P:A[1],Va:!!A[2],Wa:!!A[3],Xa:!!A[4]});z.ma=x[6];z.Da=x[7];z.ib=!!x[8]}if(g=w[b]){for(q=0;q<g.length;q++)g[q]();delete w[b]}v[b]=
!0};var A=f.CustomEvent;"function"!==typeof A&&(A=function(b,d){var f=x.Ma();f.initCustomEvent(b,d.bubbles,d.cancelable,d.detail);return f},A.prototype=f.Event.prototype);var F=!1;try{f.addEventListener("eopt",null,Object.defineProperty({},"passive",{get:function(){F=!0}}))}catch(H){}return z}(ka,M,S,ja,la);ia.cb(M.components).forEach(function(d){ia.Ta(d,class extends HTMLElement{})})})(window,document,Core,appNamespace,publicPath);
})({},"Ionic","/dist/ionic/");