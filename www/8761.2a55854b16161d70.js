"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8761],{8761:(H,v,o)=>{o.r(v),o.d(v,{QrScanResultPageModule:()=>J});var d=o(177),P=o(9417),c=o(8974),u=o(3021),g=o(467),C=o(8666),R=o(7420),S=o(56),y=o(9441),M=o(2849),D=o(3649),t=o(4438),O=o(2904),T=o(444),b=o(5173),x=o(2297),G=o(4254),f=o(5402);const Q=()=>[0,1,2,3,4,5,6,7,8];function k(e,s){1&e&&(t.j41(0,"ion-item")(1,"div",5)(2,"div",6),t.nrm(3,"app-skeleton-item",7),t.k0s(),t.j41(4,"div",8)(5,"div",9),t.nrm(6,"app-skeleton-item",10),t.k0s(),t.j41(7,"div",11),t.nrm(8,"app-skeleton-item",10),t.k0s()()()())}function I(e,s){1&e&&(t.j41(0,"ion-list",3),t.DNE(1,k,9,0,"ion-item",4),t.k0s()),2&e&&(t.R7$(),t.Y8G("ngForOf",t.lJ4(1,Q)))}function $(e,s){1&e&&(t.j41(0,"div",12),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&e&&(t.R7$(),t.JRh(t.bMT(2,1,"CONTENT_IS_BEING_ADDED")))}function j(e,s){1&e&&(t.j41(0,"div",17)(1,"div",18),t.nrm(2,"img",19),t.j41(3,"div",20),t.EFF(4),t.nI1(5,"translate"),t.k0s()(),t.j41(6,"div",18),t.nrm(7,"img",21),t.j41(8,"div",20),t.EFF(9),t.nI1(10,"translate"),t.k0s()()()),2&e&&(t.R7$(4),t.JRh(t.bMT(5,2,"Make a Story")),t.R7$(5),t.JRh(t.bMT(10,4,"Ask a Doubt")))}function w(e,s){if(1&e&&t.nrm(0,"img",27),2&e){const n=t.XpG(2).$implicit;t.Y8G("src",null!=n&&null!=n.metaData&&n.metaData.thumbnail&&!n.metaData.identifier.startsWith("do_")?null==n||null==n.metaData?null:n.metaData.thumbnail:"assets/images/Audio.png",t.B4B)}}function B(e,s){if(1&e&&t.nrm(0,"img",28),2&e){const n=t.XpG(2).$implicit;t.Y8G("appThumbnail",null==n?null:n.metaData)}}function F(e,s){if(1&e&&t.nrm(0,"img",27),2&e){const n=t.XpG(2).$implicit;t.Y8G("src",null!=n&&null!=n.metaData&&n.metaData.thumbnail&&!n.metaData.identifier.startsWith("do_")?null==n||null==n.metaData?null:n.metaData.thumbnail:"assets/images/Video.png",t.B4B)}}function E(e,s){if(1&e&&t.nrm(0,"img",27),2&e){const n=t.XpG(2).$implicit;t.Y8G("src",null!=n&&null!=n.metaData&&n.metaData.thumbnail&&!n.metaData.identifier.startsWith("do_")?null==n||null==n.metaData?null:n.metaData.thumbnail:"assets/images/PDF.png",t.B4B)}}function X(e,s){if(1&e){const n=t.RV6();t.j41(0,"div",5)(1,"div",22),t.bIt("click",function(i){t.eBV(n);const l=t.XpG().$implicit,m=t.XpG(2);return t.Njj(m.playContent(i,l))}),t.DNE(2,w,1,1,"img",23)(3,B,1,1,"img",24)(4,F,1,1,"img",23)(5,E,1,1,"img",23),t.k0s(),t.j41(6,"div",8)(7,"div",25),t.EFF(8),t.k0s(),t.j41(9,"ion-icon",26),t.bIt("click",function(){t.eBV(n);const i=t.XpG().$implicit,l=t.XpG(2);return t.Njj(l.moreOtions(i))}),t.k0s()()()}if(2&e){const n=t.XpG().$implicit,a=t.XpG(2);t.R7$(2),t.Y8G("ngIf",n.metaData.mimetype===a.mimeType.AUDIO),t.R7$(),t.Y8G("ngIf",n.metaData.mimetype===a.mimeType.YOUTUBE&&!n.play),t.R7$(),t.Y8G("ngIf",n.metaData.mimetype===a.mimeType.MP4||n.metaData.mimetype===a.mimeType.WEBM),t.R7$(),t.Y8G("ngIf",n.metaData.mimetype===a.mimeType.PDF),t.R7$(3),t.JRh(null==n.metaData?null:n.metaData.name)}}function Y(e,s){if(1&e&&(t.j41(0,"div",14),t.DNE(1,j,11,6,"div",15)(2,X,10,5,"div",16),t.k0s()),2&e){const n=s.$implicit;t.R7$(),t.Y8G("ngIf",!n.metaData||!n.metaData.name),t.R7$(),t.Y8G("ngIf",n.metaData&&n.metaData.name)}}function A(e,s){if(1&e&&(t.j41(0,"div"),t.DNE(1,Y,3,2,"div",13),t.k0s()),2&e){const n=t.XpG();t.R7$(),t.Y8G("ngForOf",n.configContents)}}const N=[{path:"",component:(()=>{var e;class s{constructor(a,i,l,m,r,z){var h;this.headerService=a,this.location=i,this.modalCtrl=l,this.contentService=m,this.router=r,this.telemetryGeneratorService=z,this.optModalOpen=!1,this.showSheenAnimation=!0,this.scanText="",this.mimeType=S.Cc,this.navigated=!1;let _=null===(h=this.router.getCurrentNavigation())||void 0===h?void 0:h.extras;var p;_&&(this.scanText=null===(p=_.state)||void 0===p?void 0:p.scannedData,console.log("scan text ",this.scanText))}tabViewWillEnter(){this.headerService.showHeader("QR Scan Result",!0,[]),this.headerService.showStatusBar(!1)}ngOnInit(){this.headerService.headerEventEmitted$.subscribe(a=>{"back"==a&&!this.navigated&&(this.navigated=!0,this.location.back())}),this.configContents=[]}ionViewWillEnter(){this.navigated=!1,this.headerService.showHeader("QR Scan Result",!0,[]),this.headerService.showStatusBar(!1),this.contentService.getContents(this.scanText).then(a=>{this.showSheenAnimation=!1,console.log("Result: ",a),this.configContents=a}).catch(a=>{this.showSheenAnimation=!1})}playContent(a,i){var l=this;return(0,g.A)(function*(){l.contentService.markContentAsViewed(i),yield l.router.navigate(["/player"],{state:{content:i}})})()}moreOtions(a){var i=this;return(0,g.A)(function*(){let l;i.optModalOpen||(i.optModalOpen=!0,l=yield i.modalCtrl.create({component:M.q,componentProps:{content:a},cssClass:"sheet-modal",breakpoints:[.25],showBackdrop:!1,initialBreakpoint:.25,handle:!1,handleBehavior:"none"}),yield l.present()),l.onDidDismiss().then(function(){var m=(0,g.A)(function*(r){i.optModalOpen=!1,r.data&&"addToPitara"===r.data.type?i.addContentToMyPitara(r.data.content||a):r.data&&"like"==r.data.type&&(i.contentService.likeContent(r.data.content||a,"guest",!0),r.data.content.metaData.isLiked&&(yield C.Q.play({assetId:"windchime"}),(0,R.A)({startVelocity:30,particleCount:400,spread:360,ticks:60,origin:{y:.5,x:.5},colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]})),i.telemetryGeneratorService.generateInteractTelemetry("TOUCH","content-liked","qr-scan-result","qr-scan-result",new D.$i(null==a?void 0:a.metaData.identifier,null==a?void 0:a.metaData.mimetype,"")))});return function(r){return m.apply(this,arguments)}}())})()}addContentToMyPitara(a){var i=this;return(0,g.A)(function*(){const l=yield i.modalCtrl.create({component:y.$,componentProps:{content:a},cssClass:"add-to-pitara",breakpoints:[0,1],showBackdrop:!1,initialBreakpoint:1,handle:!1,handleBehavior:"none"});yield l.present(),l.onWillDismiss().then(m=>{})})()}}return(e=s).\u0275fac=function(a){return new(a||e)(t.rXU(O.Ux),t.rXU(d.aZ),t.rXU(c.W3),t.rXU(T.f),t.rXU(u.Ix),t.rXU(b.O))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-qr-scan-result"]],decls:4,vars:3,consts:[["class","m-n",4,"ngIf"],["class","text-not-available",4,"ngIf"],[4,"ngIf"],[1,"m-n"],[4,"ngFor","ngForOf"],[1,"card"],["item-start","",1,"card__img"],["height","15rem","width","22rem","radius","16px"],[1,"card__metadata"],[2,"width","90%"],["height","12px","width","100%"],[2,"padding-left","1.5rem","width","10%"],[1,"text-not-available"],["class","cards-container",4,"ngFor","ngForOf"],[1,"cards-container"],["class","bot-section",4,"ngIf"],["class","card",4,"ngIf"],[1,"bot-section"],[1,"image"],["src","assets/images/Story_bot.svg","alt",""],[1,"image-title"],["src","assets/images/Question_bot.svg","alt",""],[1,"card__img",3,"click"],["alt","",3,"src",4,"ngIf"],["appThumbnail","","alt","",3,"appThumbnail",4,"ngIf"],[1,"card__title"],["aria-hidden","true","src","assets/icon/kabab-icon.svg",3,"click"],["alt","",3,"src"],["appThumbnail","","alt","",3,"appThumbnail"]],template:function(a,i){1&a&&(t.j41(0,"ion-content"),t.DNE(1,I,2,2,"ion-list",0)(2,$,3,3,"div",1)(3,A,2,1,"div",2),t.k0s()),2&a&&(t.R7$(),t.Y8G("ngIf",i.showSheenAnimation),t.R7$(),t.Y8G("ngIf",!i.configContents.length&&!i.showSheenAnimation),t.R7$(),t.Y8G("ngIf",!i.showSheenAnimation&&i.configContents.length>0))},dependencies:[d.Sq,d.bT,c.W9,c.iq,c.uz,c.nf,x.O,G.g,f.D9],styles:[".cards-container[_ngcontent-%COMP%]{padding:.2rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 1rem}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:relative}.cards-container[_ngcontent-%COMP%]   .bot-section[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%]{position:absolute;bottom:.625rem;color:var(--ion-color-primary-contrast);left:0;right:0;text-align:center}.card[_ngcontent-%COMP%]{position:relative;padding-bottom:1rem}.card__img[_ngcontent-%COMP%]{height:194px;width:100%;overflow:hidden}.card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100%;border-radius:1rem}.card__metadata[_ngcontent-%COMP%]{padding-top:.5rem;display:flex;align-items:center;justify-content:space-between}.card__metadata[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:1.75rem;width:1.75rem}.card__action-btns[_ngcontent-%COMP%]{display:flex;align-items:center}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:1rem}.card__action-btns[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:last-child{margin-left:auto;margin-right:0}.card__title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:400;width:90%;text-transform:capitalize;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.no-data[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]{--padding-top: 5rem !important}ion-list[_ngcontent-%COMP%]{background-color:transparent}ion-item[_ngcontent-%COMP%]{--background: transparent}.text-not-available[_ngcontent-%COMP%]{position:absolute;left:30%;right:0;top:20%;transform:translate(-20%,-20%);text-align:center;color:var(--ion-color-medium);font-size:.75rem}"]}),s})()}];let U=(()=>{var e;class s{}return(e=s).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[u.iI.forChild(N),u.iI]}),s})();var V=o(5553),W=o(3721);let J=(()=>{var e;class s{}return(e=s).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[d.MD,P.YN,c.bv,U,f.h,V.h,W.h]}),s})()}}]);