"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8814],{8814:(E,p,r)=>{r.r(p),r.d(p,{ion_action_sheet:()=>_});var b=r(467),e=r(4363),m=r(6579),v=r(5638),k=r(7838),d=r(5516),g=r(333),s=r(611),n=r(3503);r(4081),r(8438),r(8476),r(405),r(8221),r(3113);const A=t=>{const o=(0,n.c)(),i=(0,n.c)(),a=(0,n.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,a])},D=t=>{const o=(0,n.c)(),i=(0,n.c)(),a=(0,n.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([i,a])},O=t=>{const o=(0,n.c)(),i=(0,n.c)(),a=(0,n.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,a])},P=t=>{const o=(0,n.c)(),i=(0,n.c)(),a=(0,n.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([i,a])},_=class{constructor(t){(0,e.r)(this,t),this.didPresent=(0,e.d)(this,"ionActionSheetDidPresent",7),this.willPresent=(0,e.d)(this,"ionActionSheetWillPresent",7),this.willDismiss=(0,e.d)(this,"ionActionSheetWillDismiss",7),this.didDismiss=(0,e.d)(this,"ionActionSheetDidDismiss",7),this.didPresentShorthand=(0,e.d)(this,"didPresent",7),this.willPresentShorthand=(0,e.d)(this,"willPresent",7),this.willDismissShorthand=(0,e.d)(this,"willDismiss",7),this.didDismissShorthand=(0,e.d)(this,"didDismiss",7),this.delegateController=(0,d.d)(this),this.lockController=(0,k.c)(),this.triggerController=(0,d.e)(),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,d.B)},this.dispatchCancelHandler=o=>{if((0,d.i)(o.detail.role)){const a=this.getButtons().find(h=>"cancel"===h.role);this.callButtonHandler(a)}},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.buttons=[],this.cssClass=void 0,this.backdropDismiss=!0,this.header=void 0,this.subHeader=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(t,o){!0===t&&!1===o?this.present():!1===t&&!0===o&&this.dismiss()}triggerChanged(){const{trigger:t,el:o,triggerController:i}=this;t&&i.addClickListener(o,t)}present(){var t=this;return(0,b.A)(function*(){const o=yield t.lockController.lock();yield t.delegateController.attachViewToDom(),yield(0,d.f)(t,"actionSheetEnter",A,O),o()})()}dismiss(t,o){var i=this;return(0,b.A)(function*(){const a=yield i.lockController.lock(),h=yield(0,d.g)(i,t,o,"actionSheetLeave",D,P);return h&&i.delegateController.removeViewFromDom(),a(),h})()}onDidDismiss(){return(0,d.h)(this.el,"ionActionSheetDidDismiss")}onWillDismiss(){return(0,d.h)(this.el,"ionActionSheetWillDismiss")}buttonClick(t){var o=this;return(0,b.A)(function*(){const i=t.role;return(0,d.i)(i)?o.dismiss(t.data,i):(yield o.callButtonHandler(t))?o.dismiss(t.data,t.role):Promise.resolve()})()}callButtonHandler(t){return(0,b.A)(function*(){return!(t&&!1===(yield(0,d.s)(t.handler)))})()}getButtons(){return this.buttons.map(t=>"string"==typeof t?{text:t}:t)}connectedCallback(){(0,d.j)(this.el),this.triggerChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.triggerController.removeClickListener()}componentWillLoad(){(0,d.k)(this.el)}componentDidLoad(){const{groupEl:t,wrapperEl:o}=this;!this.gesture&&"ios"===(0,s.b)(this)&&o&&t&&(0,e.e)(()=>{t.scrollHeight>t.clientHeight||(this.gesture=(0,m.c)(o,a=>a.classList.contains("action-sheet-button")),this.gesture.enable(!0))}),!0===this.isOpen&&(0,v.r)(()=>this.present()),this.triggerChanged()}render(){const{header:t,htmlAttributes:o,overlayIndex:i}=this,a=(0,s.b)(this),h=this.getButtons(),u=h.find(c=>"cancel"===c.role),j=h.filter(c=>"cancel"!==c.role),C=`action-sheet-${i}-header`;return(0,e.h)(e.H,Object.assign({key:"49c8b5b3412b5688e44f3e3fa18abcc01c75a770",role:"dialog","aria-modal":"true","aria-labelledby":void 0!==t?C:null,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({[a]:!0},(0,g.g)(this.cssClass)),{"overlay-hidden":!0,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),(0,e.h)("ion-backdrop",{key:"80b4c279fca194c6d65bbdb8128956641387bb05",tappable:this.backdropDismiss}),(0,e.h)("div",{key:"245cde1873c07ef09267de8ab1a4d6ee51c0a83c",tabindex:"0"}),(0,e.h)("div",{key:"045109bb2118decbe633f45aa3d71b824d37c0fd",class:"action-sheet-wrapper ion-overlay-wrapper",ref:c=>this.wrapperEl=c},(0,e.h)("div",{key:"b053f3a177b6ac7f2f76f5470f7023389f06cfd8",class:"action-sheet-container"},(0,e.h)("div",{key:"88287aa180c22389747c9fec702112e29f4ec039",class:"action-sheet-group",ref:c=>this.groupEl=c},void 0!==t&&(0,e.h)("div",{key:"693e67af994a0018508a6deb867937916913eaa6",id:C,class:{"action-sheet-title":!0,"action-sheet-has-sub-title":void 0!==this.subHeader}},t,this.subHeader&&(0,e.h)("div",{key:"813cbb8d66e46d5a55a6c8bf52c5689882dc7002",class:"action-sheet-sub-title"},this.subHeader)),j.map(c=>(0,e.h)("button",Object.assign({},c.htmlAttributes,{type:"button",id:c.id,class:w(c),onClick:()=>this.buttonClick(c)}),(0,e.h)("span",{class:"action-sheet-button-inner"},c.icon&&(0,e.h)("ion-icon",{icon:c.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),c.text),"md"===a&&(0,e.h)("ion-ripple-effect",null)))),u&&(0,e.h)("div",{key:"f99cd10e7d91d3014edac6109c3e6dc128737f7c",class:"action-sheet-group action-sheet-group-cancel"},(0,e.h)("button",Object.assign({key:"595c6a39ba04185e80cc3b0705536f93b4f1ebf4"},u.htmlAttributes,{type:"button",class:w(u),onClick:()=>this.buttonClick(u)}),(0,e.h)("span",{key:"1f40403b907c6e925405a8b405ede9f7f9885611",class:"action-sheet-button-inner"},u.icon&&(0,e.h)("ion-icon",{key:"75d5398d889fa70b514843b9cc73b2087a0bf1a0",icon:u.icon,"aria-hidden":"true",lazy:!1,class:"action-sheet-icon"}),u.text),"md"===a&&(0,e.h)("ion-ripple-effect",{key:"cda40def00755c69da9f6a67494eee4dc79550fc"}))))),(0,e.h)("div",{key:"4d9432bae550ef618ba762857144f1558e3e29e7",tabindex:"0"}))}get el(){return(0,e.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},w=t=>Object.assign({"action-sheet-button":!0,"ion-activatable":!0,"ion-focusable":!0,[`action-sheet-${t.role}`]:void 0!==t.role},(0,g.g)(t.cssClass));_.style={ios:'.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);padding-bottom:var(--ion-safe-area-bottom, 0);-webkit-box-sizing:content-box;box-sizing:content-box}.action-sheet-container.sc-ion-action-sheet-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:max(13px, 0.8125rem);font-weight:400;text-align:center}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:max(13px, 0.8125rem);font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px;padding-top:14px;padding-bottom:14px;min-height:56px;font-size:max(20px, 1.25rem);contain:content}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:max(28px, 1.75rem);pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}',md:'.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:auto;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:calc(100vh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)));max-height:calc(100dvh - (var(--ion-safe-area-top, 0) + var(--ion-safe-area-bottom, 0)))}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}@media (any-pointer: coarse){.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}.action-sheet-title.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:1rem;text-align:start}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:0.875rem}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;position:relative;min-height:52px;font-size:1rem;text-align:start;contain:content;overflow:hidden}.action-sheet-icon.sc-ion-action-sheet-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:1.5rem}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'}},333:(E,p,r)=>{r.d(p,{c:()=>m,g:()=>k,h:()=>e,o:()=>g});var b=r(467);const e=(s,n)=>null!==n.closest(s),m=(s,n)=>"string"==typeof s&&s.length>0?Object.assign({"ion-color":!0,[`ion-color-${s}`]:!0},n):n,k=s=>{const n={};return(s=>void 0!==s?(Array.isArray(s)?s:s.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(s).forEach(l=>n[l]=!0),n},d=/^[a-z][a-z0-9+\-.]*:/,g=function(){var s=(0,b.A)(function*(n,l,x,y){if(null!=n&&"#"!==n[0]&&!d.test(n)){const f=document.querySelector("ion-router");if(f)return null!=l&&l.preventDefault(),f.push(n,x,y)}return!1});return function(l,x,y,f){return s.apply(this,arguments)}}()}}]);