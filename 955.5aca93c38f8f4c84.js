"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[955],{955:(ue,x,s)=>{s.r(x),s.d(x,{AuthSignInModule:()=>ke});var g=s(2510),_=s(4859),l=(s(2687),s(1281)),e=s(4650),c=s(4006),m=s(3238),C=s(9643);let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})(),J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.si,m.BQ,C.Q8,v,m.BQ,v]}),n})();var p=s(9549),I=s(7392),T=s(4144),S=s(3353),Q=s(5589),f=s(6895),q=s(727);function X(n,a){if(1&n&&(e.O4$(),e._UZ(0,"circle",4)),2&n){const t=e.oxw(),i=e.MAs(1);e.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.uIk("r",t._getCircleRadius())}}function Y(n,a){if(1&n&&(e.O4$(),e._UZ(0,"circle",4)),2&n){const t=e.oxw(),i=e.MAs(1);e.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.uIk("r",t._getCircleRadius())}}const j=(0,m.pj)(class{constructor(n){this._elementRef=n}},"primary"),W=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function G(){return{diameter:100}}});class h extends j{constructor(a,t,i,o,r,d,k,u){super(a),this._document=i,this._diameter=100,this._value=0,this._resizeSubscription=q.w0.EMPTY,this.mode="determinate";const M=h._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),M.has(i.head)||M.set(i.head,new Set([100])),this._noopAnimations="NoopAnimations"===o&&!!r&&!r._forceAnimations,"mat-spinner"===a.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),r&&(r.color&&(this.color=this.defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth)),t.isBrowser&&t.SAFARI&&k&&d&&u&&(this._resizeSubscription=k.change(150).subscribe(()=>{"indeterminate"===this.mode&&u.run(()=>d.markForCheck())}))}get diameter(){return this._diameter}set diameter(a){this._diameter=(0,l.su)(a),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(a){this._strokeWidth=(0,l.su)(a)}get value(){return"determinate"===this.mode?this._value:0}set value(a){this._value=Math.max(0,Math.min(100,(0,l.su)(a)))}ngOnInit(){const a=this._elementRef.nativeElement;this._styleRoot=(0,S.kV)(a)||this._document.head,this._attachStyleNode(),a.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const a=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${a} ${a}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(a){const t=50*(a.currentScale??1);return`${t}% ${t}%`}_attachStyleNode(){const a=this._styleRoot,t=this._diameter,i=h._diameters;let o=i.get(a);if(!o||!o.has(t)){const r=this._document.createElement("style");r.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),r.textContent=this._getAnimationText(),a.appendChild(r),o||(o=new Set,i.set(a,o)),o.add(t)}}_getAnimationText(){const a=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*a).replace(/END_VALUE/g,""+.2*a).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}h._diameters=new WeakMap,h.\u0275fac=function(a){return new(a||h)(e.Y36(e.SBq),e.Y36(S.t4),e.Y36(f.K0,8),e.Y36(e.QbO,8),e.Y36(W),e.Y36(e.sBO),e.Y36(Q.rL),e.Y36(e.R0b))},h.\u0275cmp=e.Xpm({type:h,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(a,t){2&a&&(e.uIk("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.ekj("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(a,t){1&a&&(e.O4$(),e.TgZ(0,"svg",0,1),e.YNc(2,X,1,11,"circle",2),e.YNc(3,Y,1,9,"circle",3),e.qZA()),2&a&&(e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.Q6J("ngSwitch","indeterminate"===t.mode),e.uIk("viewBox",t._getViewBox()),e.xp6(2),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1))},dependencies:[f.RF,f.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.BQ,f.ez,m.BQ]}),n})();var K=s(6236),ee=s(7775),te=s(4977),ne=s(8288),ie=s(8951),ae=s(2494);const oe=["signInNgForm"];function re(n,a){if(1&n&&(e.TgZ(0,"fuse-alert",18),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",t.alert.type)("@shake","error"===t.alert.type),e.xp6(1),e.hij(" ",t.alert.message," ")}}function se(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1," User name is required "),e.qZA())}function ce(n,a){1&n&&e._UZ(0,"mat-icon",19),2&n&&e.Q6J("svgIcon","heroicons_solid:eye")}function me(n,a){1&n&&e._UZ(0,"mat-icon",19),2&n&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function de(n,a){1&n&&(e.TgZ(0,"span"),e._uU(1," Sign in "),e.qZA())}function he(n,a){1&n&&e._UZ(0,"mat-progress-spinner",20),2&n&&e.Q6J("diameter",24)("mode","indeterminate")}const le=[{path:"",component:(()=>{class n{constructor(t,i,o,r){this._activatedRoute=t,this._authService=i,this._formBuilder=o,this._router=r,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({username:["",[c.kI.required]],password:["",c.kI.required]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const t=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(t)},t=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(ie.e),e.Y36(c.QS),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["auth-sign-in"]],viewQuery:function(t,i){if(1&t&&e.Gf(oe,5),2&t){let o;e.iGM(o=e.CRH())&&(i.signInNgForm=o.first)}},decls:28,vars:11,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-3/4","mx-auto"],["src","assets/images/logo/signup-logo.png"],[1,"mt-7","text-5xl","font-extrabold","tracking-tight","leading-tight","text-center"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","username","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Sign in"),e.qZA(),e.YNc(7,re,2,5,"fuse-alert",6),e.TgZ(8,"form",7,8)(10,"mat-form-field",9)(11,"mat-label"),e._uU(12,"User name"),e.qZA(),e._UZ(13,"input",10),e.YNc(14,se,2,0,"mat-error",11),e.qZA(),e.TgZ(15,"mat-form-field",9)(16,"mat-label"),e._uU(17,"Password"),e.qZA(),e._UZ(18,"input",12,13),e.TgZ(20,"button",14),e.NdJ("click",function(){e.CHM(o);const d=e.MAs(19);return e.KtG(d.type="password"===d.type?"text":"password")}),e.YNc(21,ce,1,1,"mat-icon",15),e.YNc(22,me,1,1,"mat-icon",15),e.qZA(),e.TgZ(23,"mat-error"),e._uU(24," Password is required "),e.qZA()(),e.TgZ(25,"button",16),e.NdJ("click",function(){return i.signIn()}),e.YNc(26,de,2,0,"span",11),e.YNc(27,he,1,2,"mat-progress-spinner",17),e.qZA()()()()()}if(2&t){const o=e.MAs(19);e.xp6(7),e.Q6J("ngIf",i.showAlert),e.xp6(1),e.Q6J("formGroup",i.signInForm),e.xp6(5),e.Q6J("formControlName","username"),e.xp6(1),e.Q6J("ngIf",i.signInForm.get("username").hasError("required")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","text"===o.type),e.xp6(1),e.Q6J("ngIf","password"===o.type),e.xp6(3),e.Q6J("color","primary")("disabled",i.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",!i.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",i.signInForm.disabled)}},dependencies:[_.lW,p.TO,p.KE,p.hX,p.R9,I.Hw,T.Nt,h,ae.W,f.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],encapsulation:2,data:{animation:ne.L}}),n})()}];let ke=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(le),_.ot,J,p.lN,I.Ps,T.c,H,K.J,ee.fC,te.m]}),n})()}}]);