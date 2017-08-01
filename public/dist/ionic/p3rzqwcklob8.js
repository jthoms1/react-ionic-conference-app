/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.defineComponents("p3rzqwcklob8",function(i,n,o,t,e){var s=function(i){var n=new Ionic.Animation,o=new Ionic.Animation;o.addElement(i.querySelector(".loading-backdrop"));var t=new Ionic.Animation;return t.addElement(i.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.3),t.fromTo("opacity",.01,1).fromTo("scale",1.1,1),n.addElement(i).easing("ease-in-out").duration(200).add(o).add(t)},a=function(i){var n=new Ionic.Animation,o=new Ionic.Animation;o.addElement(i.querySelector(".loading-backdrop"));var t=new Ionic.Animation;return t.addElement(i.querySelector(".loading-wrapper")),o.fromTo("opacity",.3,0),t.fromTo("opacity",.99,0).fromTo("scale",1,.9),n.addElement(i).easing("ease-in-out").duration(200).add(o).add(t)},r=function(){function i(){this.showSpinner=null,this.dismissOnPageChange=!1,this.showBackdrop=!0}return i.prototype.onDismiss=function(i){i.stopPropagation(),i.preventDefault(),this.dismiss()},i.prototype.componentDidLoad=function(){this.spinner||(this.spinner=Ionic.config.get("loadingSpinner",Ionic.config.get("spinner","lines"))),null!==this.showSpinner&&void 0!==this.showSpinner||(this.showSpinner=!(!this.spinner||"hide"===this.spinner)),this.ionLoadingDidLoad.emit({loading:this})},i.prototype.ionViewDidEnter=function(){var i=this,n=document.activeElement;n&&n.blur&&n.blur(),"number"==typeof this.duration&&this.duration>10&&(this.durationTimeout=setTimeout(function(){return i.dismiss()},this.duration)),this.ionLoadingDidPresent.emit({loading:this})},i.prototype.present=function(){var i=this;return new Promise(function(n){i._present(n)})},i.prototype._present=function(i){var n=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionLoadingWillPresent.emit({loading:this});var o=this.enterAnimation;o||(o=s),this.animation=o(this.el),this.animation.onFinish(function(o){o.destroy(),n.ionViewDidEnter(),i()}).play()},i.prototype.dismiss=function(){var i=this;return clearTimeout(this.durationTimeout),this.animation&&(this.animation.destroy(),this.animation=null),new Promise(function(n){i.ionLoadingWillDismiss.emit({loading:i});var o=i.exitAnimation;o||(o=a),i.animation=o(i.el),i.animation.onFinish(function(o){o.destroy(),i.ionLoadingDidDismiss.emit({loading:i}),t.dom.write(function(){i.el.parentNode.removeChild(i.el)}),n()}).play()})},i.prototype.componentDidunload=function(){this.ionLoadingDidUnload.emit({loading:this})},i.prototype.render=function(){this.cssClass&&this.cssClass;var i=[];return this.showSpinner&&i.push(n("div",{c:{"loading-spinner":!0}},n("ion-spinner",{p:{name:this.spinner}}))),this.content&&i.push(n("div",{c:{"loading-content":!0}},this.content)),[n("ion-gesture",{c:{"loading-backdrop":!0,"hide-backdrop":!this.showBackdrop},p:{attachTo:"parent",autoBlockAll:!0}}),n("div",{c:{"loading-wrapper":!0},a:{role:"dialog"}},i)]},i}(),d=function(){function i(){this.ids=0,this.loadingResolves={},this.loadings=[]}return i.prototype.componentDidLoad=function(){this.appRoot=document.querySelector("ion-app")||document.body,Ionic.loadController("loading",this)},i.prototype.load=function(i){var n=this,o=document.createElement("ion-loading"),t=this.ids++;return o.id="loading-"+t,o.style.zIndex=(2e4+t).toString(),Object.assign(o,i),this.appRoot.appendChild(o),new Promise(function(i){n.loadingResolves[o.id]=i})},i.prototype.viewDidLoad=function(i){var n=i.loading,o=this.loadingResolves[n.id];o&&(o(n),delete this.loadingResolves[n.id])},i.prototype.willPresent=function(i){this.loadings.push(i.loading)},i.prototype.willDismiss=function(i){var n=this.loadings.indexOf(i.loading);n>-1&&this.loadings.splice(n,1)},i.prototype.escapeKeyUp=function(){var i=this.loadings[this.loadings.length-1];i&&i.dismiss()},i}();i["ION-LOADING"]=r,i["ION-LOADING-CONTROLLER"]=d},["ION-LOADING",{theme:"loading"},["showSpinner","spinner"],0,0,[["ionLoadingDidDismiss","ionLoadingDidDismiss","1 /* true **/","1 /* true **/","1 /* true **/"],["ionLoadingDidLoad","ionLoadingDidLoad","1 /* true **/","1 /* true **/","1 /* true **/"],["ionLoadingDidPresent","ionLoadingDidPresent","1 /* true **/","1 /* true **/","1 /* true **/"],["ionLoadingDidUnload","ionLoadingDidUnload","1 /* true **/","1 /* true **/","1 /* true **/"],["ionLoadingWillDismiss","ionLoadingWillDismiss","1 /* true **/","1 /* true **/","1 /* true **/"],["ionLoadingWillPresent","ionLoadingWillPresent","1 /* true **/","1 /* true **/","1 /* true **/"]],0,"el"],["ION-LOADING-CONTROLLER",{}]);