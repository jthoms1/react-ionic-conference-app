/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.defineComponents("npmvvjpab7nn",function(t,e,i,n,s){function o(t,e,i){var n={};return i.split(" ").reduce(function(i,n){return i[n]=!0,t&&(i[n+"-"+t]=!0,e&&(i[n+"-"+e]=!0,i[n+"-"+t+"-"+e]=!0)),i},n)}var a=function(){function t(){}return t.prototype.close=function(){this.el.querySelector("ion-fab-button").close()},t.prototype.render=function(){return e(0,0)},t}(),c=function(){function t(){this.activated=!1,this.show=!1,this.inContainer=!1,this.inList=!1,this.disabled=!1}return t.prototype.componentDidLoad=function(){var t=this.el.parentNode.nodeName;this.inList="ION-FAB-LIST"===t,this.inContainer="ION-FAB"===t},t.prototype.clickedFab=function(){if(this.inContainer){var t=!this.activated;this.setActiveLists(t)}},t.prototype.setActiveLists=function(t){var e=this.el.parentElement.querySelectorAll("ion-fab-list");e.length>0&&(this.activated=t);for(var i=0;i<e.length;i++)e[i].$instance.activated=t},t.prototype.close=function(){this.setActiveLists(!1)},t.prototype.getElementClassList=function(){return[].concat(this.el.className.length?this.el.className.split(" "):[])},t.prototype.getFabListClassList=function(){return this.inList?["fab-in-list","fab-"+this.mode+"-in-list"]:[]},t.prototype.getFabActiveClassList=function(){return this.activated?["fab-close-active"]:[]},t.prototype.getFabShowClassList=function(){return this.show?["show"]:[]},t.prototype.render=function(){var t=o(this.mode,this.color,"fab"),i=[].concat(this.getElementClassList(),this.getFabListClassList(),this.getFabActiveClassList(),this.getFabShowClassList()).reduce(function(t,e){return t[e]=!0,t},{}),n=this.href?"a":"button";return i=Object.assign(i,t),e(n,{c:i,o:{click:this.clickedFab.bind(this)},a:{disabled:this.disabled}},e("ion-icon",{c:{"fab-close-icon":!0},a:{name:"close"}}),e("span",{c:{"button-inner":!0}},e(0,0)),e("div",{c:{"button-effect":!0}}))},t}(),r=function(){function t(){this.activated=!1}return t.prototype.activatedChange=function(t){for(var e=this.el.querySelectorAll("ion-fab-button"),i=t?30:0,n=0;n<e.length;n++)!function(){var s=e[n].$instance;setTimeout(function(){return s.show=t},n*i)}()},t.prototype.hostData=function(){return{class:{"fab-list-active":this.activated}}},t.prototype.render=function(){return e(0,0)},t}();t["ION-FAB"]=a,t["ION-FAB-BUTTON"]=c,t["ION-FAB-LIST"]=r},["ION-FAB",{},0,0,0,0,["close"],"el"],["ION-FAB-BUTTON",{},["activated","inContainer","inList","show"],0,0,0,["close"],"el"],["ION-FAB-LIST",{},["activated"],0,[["activated","activatedChange"]],0,0,"el"]);