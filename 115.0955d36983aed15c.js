"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[115],{6699:(Ot,M,l)=>{l.r(M),l.d(M,{JobManagerModule:()=>Lt});var x=l(7392),m=l(6895),T=l(2510),L=l(7771),F=l(8845),w=l(2591),u=l(7579),g=l(2722),t=l(4650),O=l(9006),r=l(3626),d=l(4006),I=l(9549),R=l(4385),h=l(3238),A=l(266),S=l(4859),p=l(9521),c=l(1281),E=l(3353),_=l(6451),H=l(5698),N=l(8675),j=l(2687),Y=l(445),U=l(5017);const q=["*"],J=new t.OlP("MatChipRemove"),k=new t.OlP("MatChipAvatar"),D=new t.OlP("MatChipTrailingIcon");class Q{constructor(n){this._elementRef=n}}const P=(0,h.sb)((0,h.pj)((0,h.Kr)(Q),"primary"),-1);let f=(()=>{class a extends P{constructor(e,i,s,o,C,v,y,b){super(e),this._ngZone=i,this._changeDetectorRef=C,this._hasFocus=!1,this.chipListSelectable=!0,this._chipListMultiple=!1,this._chipListDisabled=!1,this.role="option",this._selected=!1,this._selectable=!0,this._disabled=!1,this._removable=!0,this._onFocus=new u.x,this._onBlur=new u.x,this.selectionChange=new t.vpe,this.destroyed=new t.vpe,this.removed=new t.vpe,this._addHostClassName(),this._chipRippleTarget=v.createElement("div"),this._chipRippleTarget.classList.add("mat-chip-ripple"),this._elementRef.nativeElement.appendChild(this._chipRippleTarget),this._chipRipple=new h.IR(this,i,this._chipRippleTarget,s),this._chipRipple.setupTriggerEvents(e),this.rippleConfig=o||{},this._animationsDisabled="NoopAnimations"===y,this.tabIndex=null!=b&&parseInt(b)||-1}get rippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||!!this.rippleConfig.disabled}get selected(){return this._selected}set selected(e){const i=(0,c.Ig)(e);i!==this._selected&&(this._selected=i,this._dispatchSelectionChange())}get value(){return void 0!==this._value?this._value:this._elementRef.nativeElement.textContent}set value(e){this._value=e}get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=(0,c.Ig)(e)}get disabled(){return this._chipListDisabled||this._disabled}set disabled(e){this._disabled=(0,c.Ig)(e)}get removable(){return this._removable}set removable(e){this._removable=(0,c.Ig)(e)}get ariaSelected(){return this.selectable&&(this._chipListMultiple||this.selected)?this.selected.toString():null}_addHostClassName(){const e="mat-basic-chip",i=this._elementRef.nativeElement;i.hasAttribute(e)||i.tagName.toLowerCase()===e?i.classList.add(e):i.classList.add("mat-standard-chip")}ngOnDestroy(){this.destroyed.emit({chip:this}),this._chipRipple._removeTriggerEvents()}select(){this._selected||(this._selected=!0,this._dispatchSelectionChange(),this._changeDetectorRef.markForCheck())}deselect(){this._selected&&(this._selected=!1,this._dispatchSelectionChange(),this._changeDetectorRef.markForCheck())}selectViaInteraction(){this._selected||(this._selected=!0,this._dispatchSelectionChange(!0),this._changeDetectorRef.markForCheck())}toggleSelected(e=!1){return this._selected=!this.selected,this._dispatchSelectionChange(e),this._changeDetectorRef.markForCheck(),this.selected}focus(){this._hasFocus||(this._elementRef.nativeElement.focus(),this._onFocus.next({chip:this})),this._hasFocus=!0}remove(){this.removable&&this.removed.emit({chip:this})}_handleClick(e){this.disabled&&e.preventDefault()}_handleKeydown(e){if(!this.disabled)switch(e.keyCode){case p.yY:case p.ZH:this.remove(),e.preventDefault();break;case p.L_:this.selectable&&this.toggleSelected(!0),e.preventDefault()}}_blur(){this._ngZone.onStable.pipe((0,H.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._hasFocus=!1,this._onBlur.next({chip:this})})})}_dispatchSelectionChange(e=!1){this.selectionChange.emit({source:this,isUserInput:e,selected:this._selected})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(E.t4),t.Y36(h.Y2,8),t.Y36(t.sBO),t.Y36(m.K0),t.Y36(t.QbO,8),t.$8M("tabindex"))},a.\u0275dir=t.lG2({type:a,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,i,s){if(1&e&&(t.Suo(s,k,5),t.Suo(s,D,5),t.Suo(s,J,5)),2&e){let o;t.iGM(o=t.CRH())&&(i.avatar=o.first),t.iGM(o=t.CRH())&&(i.trailingIcon=o.first),t.iGM(o=t.CRH())&&(i.removeIcon=o.first)}},hostAttrs:[1,"mat-chip","mat-focus-indicator"],hostVars:15,hostBindings:function(e,i){1&e&&t.NdJ("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)})("focus",function(){return i.focus()})("blur",function(){return i._blur()}),2&e&&(t.uIk("tabindex",i.disabled?null:i.tabIndex)("role",i.role)("disabled",i.disabled||null)("aria-disabled",i.disabled.toString())("aria-selected",i.ariaSelected),t.ekj("mat-chip-selected",i.selected)("mat-chip-with-avatar",i.avatar)("mat-chip-with-trailing-icon",i.trailingIcon||i.removeIcon)("mat-chip-disabled",i.disabled)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:"disableRipple",tabIndex:"tabIndex",role:"role",selected:"selected",value:"value",selectable:"selectable",disabled:"disabled",removable:"removable"},outputs:{selectionChange:"selectionChange",destroyed:"destroyed",removed:"removed"},exportAs:["matChip"],features:[t.qOj]}),a})();const Z=new t.OlP("mat-chips-default-options"),K=(0,h.FD)(class{constructor(a,n,e,i){this._defaultErrorStateMatcher=a,this._parentForm=n,this._parentFormGroup=e,this.ngControl=i,this.stateChanges=new u.x}});let G=0;class W{constructor(n,e){this.source=n,this.value=e}}let B=(()=>{class a extends K{constructor(e,i,s,o,C,v,y){super(v,o,C,y),this._elementRef=e,this._changeDetectorRef=i,this._dir=s,this.controlType="mat-chip-list",this._lastDestroyedChipIndex=null,this._destroyed=new u.x,this._uid="mat-chip-list-"+G++,this._tabIndex=0,this._userTabIndex=null,this._onTouched=()=>{},this._onChange=()=>{},this._multiple=!1,this._compareWith=(b,Ft)=>b===Ft,this._disabled=!1,this.ariaOrientation="horizontal",this._selectable=!0,this.change=new t.vpe,this.valueChange=new t.vpe,this.ngControl&&(this.ngControl.valueAccessor=this)}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get role(){return this._explicitRole?this._explicitRole:this.empty?null:"listbox"}set role(e){this._explicitRole=e}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,c.Ig)(e),this._syncChipsState()}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this.writeValue(e),this._value=e}get id(){return this._chipInput?this._chipInput.id:this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(d.kI.required)??!1}set required(e){this._required=(0,c.Ig)(e),this.stateChanges.next()}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get focused(){return this._chipInput&&this._chipInput.focused||this._hasFocusedChip()}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this.chips||0===this.chips.length)}get shouldLabelFloat(){return!this.empty||this.focused}get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,c.Ig)(e),this._syncChipsState()}get selectable(){return this._selectable}set selectable(e){this._selectable=(0,c.Ig)(e),this.chips&&this.chips.forEach(i=>i.chipListSelectable=this._selectable)}set tabIndex(e){this._userTabIndex=e,this._tabIndex=e}get chipSelectionChanges(){return(0,_.T)(...this.chips.map(e=>e.selectionChange))}get chipFocusChanges(){return(0,_.T)(...this.chips.map(e=>e._onFocus))}get chipBlurChanges(){return(0,_.T)(...this.chips.map(e=>e._onBlur))}get chipRemoveChanges(){return(0,_.T)(...this.chips.map(e=>e.destroyed))}ngAfterContentInit(){this._keyManager=new j.Em(this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir?this._dir.value:"ltr"),this._dir&&this._dir.change.pipe((0,g.R)(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e)),this._keyManager.tabOut.pipe((0,g.R)(this._destroyed)).subscribe(()=>{this._allowFocusEscape()}),this.chips.changes.pipe((0,N.O)(null),(0,g.R)(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>{this._syncChipsState()}),this._resetChips(),this._initializeSelection(),this._updateTabIndex(),this._updateFocusForDestroyedChips(),this.stateChanges.next()})}ngOnInit(){this._selectionModel=new U.Ov(this.multiple,void 0,!1),this.stateChanges.next()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==this._disabled&&(this.disabled=!!this.ngControl.disabled))}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this.stateChanges.complete(),this._dropSubscriptions()}registerInput(e){this._chipInput=e,this._elementRef.nativeElement.setAttribute("data-mat-chip-input",e.id)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this.chips&&this._setSelectionByValue(e,!1)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}onContainerClick(e){this._originatesFromChip(e)||this.focus()}focus(e){this.disabled||this._chipInput&&this._chipInput.focused||(this.chips.length>0?(this._keyManager.setFirstItemActive(),this.stateChanges.next()):(this._focusInput(e),this.stateChanges.next()))}_focusInput(e){this._chipInput&&this._chipInput.focus(e)}_keydown(e){const i=e.target;i&&i.classList.contains("mat-chip")&&(this._keyManager.onKeydown(e),this.stateChanges.next())}_updateTabIndex(){this._tabIndex=this._userTabIndex||(0===this.chips.length?-1:0)}_updateFocusForDestroyedChips(){if(null!=this._lastDestroyedChipIndex)if(this.chips.length){const e=Math.min(this._lastDestroyedChipIndex,this.chips.length-1);this._keyManager.setActiveItem(e)}else this.focus();this._lastDestroyedChipIndex=null}_isValidIndex(e){return e>=0&&e<this.chips.length}_setSelectionByValue(e,i=!0){if(this._clearSelection(),this.chips.forEach(s=>s.deselect()),Array.isArray(e))e.forEach(s=>this._selectValue(s,i)),this._sortValues();else{const s=this._selectValue(e,i);s&&i&&this._keyManager.setActiveItem(s)}}_selectValue(e,i=!0){const s=this.chips.find(o=>null!=o.value&&this._compareWith(o.value,e));return s&&(i?s.selectViaInteraction():s.select(),this._selectionModel.select(s)),s}_initializeSelection(){Promise.resolve().then(()=>{(this.ngControl||this._value)&&(this._setSelectionByValue(this.ngControl?this.ngControl.value:this._value,!1),this.stateChanges.next())})}_clearSelection(e){this._selectionModel.clear(),this.chips.forEach(i=>{i!==e&&i.deselect()}),this.stateChanges.next()}_sortValues(){this._multiple&&(this._selectionModel.clear(),this.chips.forEach(e=>{e.selected&&this._selectionModel.select(e)}),this.stateChanges.next())}_propagateChanges(e){let i=null;i=Array.isArray(this.selected)?this.selected.map(s=>s.value):this.selected?this.selected.value:e,this._value=i,this.change.emit(new W(this,i)),this.valueChange.emit(i),this._onChange(i),this._changeDetectorRef.markForCheck()}_blur(){this._hasFocusedChip()||this._keyManager.setActiveItem(-1),this.disabled||(this._chipInput?setTimeout(()=>{this.focused||this._markAsTouched()}):this._markAsTouched())}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}_allowFocusEscape(){-1!==this._tabIndex&&(this._tabIndex=-1,setTimeout(()=>{this._tabIndex=this._userTabIndex||0,this._changeDetectorRef.markForCheck()}))}_resetChips(){this._dropSubscriptions(),this._listenToChipsFocus(),this._listenToChipsSelection(),this._listenToChipsRemoved()}_dropSubscriptions(){this._chipFocusSubscription&&(this._chipFocusSubscription.unsubscribe(),this._chipFocusSubscription=null),this._chipBlurSubscription&&(this._chipBlurSubscription.unsubscribe(),this._chipBlurSubscription=null),this._chipSelectionSubscription&&(this._chipSelectionSubscription.unsubscribe(),this._chipSelectionSubscription=null),this._chipRemoveSubscription&&(this._chipRemoveSubscription.unsubscribe(),this._chipRemoveSubscription=null)}_listenToChipsSelection(){this._chipSelectionSubscription=this.chipSelectionChanges.subscribe(e=>{e.source.selected?this._selectionModel.select(e.source):this._selectionModel.deselect(e.source),this.multiple||this.chips.forEach(i=>{!this._selectionModel.isSelected(i)&&i.selected&&i.deselect()}),e.isUserInput&&this._propagateChanges()})}_listenToChipsFocus(){this._chipFocusSubscription=this.chipFocusChanges.subscribe(e=>{let i=this.chips.toArray().indexOf(e.chip);this._isValidIndex(i)&&this._keyManager.updateActiveItem(i),this.stateChanges.next()}),this._chipBlurSubscription=this.chipBlurChanges.subscribe(()=>{this._blur(),this.stateChanges.next()})}_listenToChipsRemoved(){this._chipRemoveSubscription=this.chipRemoveChanges.subscribe(e=>{const i=e.chip,s=this.chips.toArray().indexOf(e.chip);this._isValidIndex(s)&&i._hasFocus&&(this._lastDestroyedChipIndex=s)})}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-chip"))return!0;i=i.parentElement}return!1}_hasFocusedChip(){return this.chips&&this.chips.some(e=>e._hasFocus)}_syncChipsState(){this.chips&&this.chips.forEach(e=>{e._chipListDisabled=this._disabled,e._chipListMultiple=this.multiple})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(Y.Is,8),t.Y36(d.F,8),t.Y36(d.sg,8),t.Y36(h.rD),t.Y36(d.a5,10))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-chip-list"]],contentQueries:function(e,i,s){if(1&e&&t.Suo(s,f,5),2&e){let o;t.iGM(o=t.CRH())&&(i.chips=o)}},hostAttrs:[1,"mat-chip-list"],hostVars:14,hostBindings:function(e,i){1&e&&t.NdJ("focus",function(){return i.focus()})("blur",function(){return i._blur()})("keydown",function(o){return i._keydown(o)}),2&e&&(t.Ikx("id",i._uid),t.uIk("tabindex",i.disabled?null:i._tabIndex)("aria-required",i.role?i.required:null)("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-multiselectable",i.multiple)("role",i.role)("aria-orientation",i.ariaOrientation),t.ekj("mat-chip-list-disabled",i.disabled)("mat-chip-list-invalid",i.errorState)("mat-chip-list-required",i.required))},inputs:{role:"role",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],errorStateMatcher:"errorStateMatcher",multiple:"multiple",compareWith:"compareWith",value:"value",required:"required",placeholder:"placeholder",disabled:"disabled",ariaOrientation:["aria-orientation","ariaOrientation"],selectable:"selectable",tabIndex:"tabIndex"},outputs:{change:"change",valueChange:"valueChange"},exportAs:["matChipList"],features:[t._Bn([{provide:I.Eo,useExisting:a}]),t.qOj],ngContentSelectors:q,decls:2,vars:0,consts:[[1,"mat-chip-list-wrapper"]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:['.mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}.mat-standard-chip._mat-animation-noopable{transition:none !important;animation:none !important}.mat-standard-chip .mat-chip-remove{border:none;-webkit-appearance:none;-moz-appearance:none;padding:0;background:none}.mat-standard-chip .mat-chip-remove.mat-icon,.mat-standard-chip .mat-chip-remove .mat-icon{width:18px;height:18px;font-size:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:"";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.cdk-high-contrast-active .mat-standard-chip.mat-chip-selected{outline-width:3px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden;transform:translateZ(0)}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}'],encapsulation:2,changeDetection:0}),a})(),et=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[h.rD,{provide:Z,useValue:{separatorKeyCodes:[p.K5]}}],imports:[h.BQ]}),a})();function it(a,n){if(1&a&&(t.TgZ(0,"mat-option",41),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name," ")}}function at(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"mat-chip",46),t._uU(1),t.TgZ(2,"mat-icon",47),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,o=t.oxw(2);return t.KtG(o.removeFliter(s))}),t._uU(3,"cancel"),t.qZA()()}if(2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.value," ")}}function nt(a,n){if(1&a&&(t.TgZ(0,"mat-chip-list",44),t.YNc(1,at,4,1,"mat-chip",45),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Q6J("ngIf",e.value)}}function st(a,n){if(1&a&&(t.TgZ(0,"div",42),t.YNc(1,nt,2,1,"mat-chip-list",43),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.filterList)}}function ot(a,n){1&a&&(t.TgZ(0,"th",48)(1,"span",49),t._uU(2," Job Type"),t.qZA()())}function lt(a,n){if(1&a&&(t.TgZ(0,"td",50)(1,"span",51),t._uU(2),t.qZA()()),2&a){const e=n.$implicit,i=t.oxw();t.s9C("matTooltip",i.ProcessTypeEnum[e.job_type]),t.xp6(2),t.hij(" ",e.job_type,"")}}function rt(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Client Name "),t.qZA())}function ht(a,n){if(1&a&&(t.TgZ(0,"td",53)(1,"div",54)(2,"p",55),t._uU(3),t.qZA()()()),2&a){const e=n.$implicit;t.xp6(3),t.Oqu(e.client_name)}}function ct(a,n){1&a&&t._UZ(0,"th",56)}function pt(a,n){1&a&&(t.TgZ(0,"td",57)(1,"div",54)(2,"div",58)(3,"a",59),t._UZ(4,"img",60),t.qZA(),t.TgZ(5,"a",59),t._UZ(6,"img",61),t.qZA(),t.TgZ(7,"a",59),t._UZ(8,"img",62),t.qZA()()()())}function dt(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Period End "),t.qZA())}function ut(a,n){if(1&a&&(t.TgZ(0,"td",63),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.period_end)}}function mt(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"MTA Deadline"),t.qZA())}function gt(a,n){if(1&a&&(t.TgZ(0,"td",63),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.mta_deadline)}}function _t(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Statutory Date"),t.qZA())}function ft(a,n){if(1&a&&(t.TgZ(0,"td",63),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.statutory_deadline)}}function bt(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Job Stage"),t.qZA())}function Ct(a,n){if(1&a&&(t.TgZ(0,"td",63)(1,"button",64),t._uU(2),t.qZA()()),2&a){const e=n.$implicit;t.xp6(2),t.hij(" ",e.job_stage," ")}}function vt(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Current Task"),t.qZA())}function yt(a,n){if(1&a&&(t.TgZ(0,"td",63),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.hij("",e.current_task," ")}}function Mt(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Client Manager"),t.qZA())}function xt(a,n){if(1&a&&(t.TgZ(0,"td",63),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.client_manager)}}function Tt(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Job Assignee"),t.qZA())}function wt(a,n){if(1&a&&(t.TgZ(0,"td",63),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.job_assignee)}}function It(a,n){1&a&&(t.TgZ(0,"th",52),t._uU(1,"Free From Notes "),t.qZA())}function At(a,n){if(1&a&&(t.TgZ(0,"td",63),t._uU(1),t.qZA()),2&a){const e=n.$implicit;t.xp6(1),t.Oqu(e.notes)}}function St(a,n){1&a&&t._UZ(0,"tr",65)}function Jt(a,n){1&a&&t._UZ(0,"tr",66),2&a&&t.Gre("",n.$implicit.jobType,"-row")}const kt=function(){return[10,20,30]},Dt=[{path:"",component:(()=>{class a{constructor(e){this.reportService=e,this.displayedColumns=["job_type","client_name","logo","period_end","mta_deadline","statutory_deadline","job_stage","current_task","client_manager","job_assignee","notes"],this.ProcessTypeEnum=F.xz,this.jobManagerList=[],this.paginationConfig={limit:10,offset:0},this.filterParams={limit:this.paginationConfig.limit,offset:this.paginationConfig.offset,sort_by:null,sort_order:null,flt_job_asg:null,flt_job_type:null},this.filterList=[{id:1,value:""},{id:2,value:""},{id:3,value:""}],this.destroyer$=new u.x,this.jobTypesList=[]}ngOnInit(){this.getjobTypes(),this.getJobMangerList(this.filterParams)}getjobTypes(){this.jobTypesList=this.reportService.getJobTypes()}getJobMangerList(e){e.limit=this.paginationConfig.limit,e.offset=this.paginationConfig.offset,this.reportService.getJobManagerData(e).pipe((0,g.R)(this.destroyer$)).subscribe(i=>{this.jobManagerList=i.rows,this.totalLogCount=i.total_count})}ngOnDestroy(){this.destroyer$.next(),this.destroyer$.complete()}onPageChange(e){this.paginationConfig={...this.paginationConfig,...e,user:this.userTerm},this.getJobMangerList(this.filterParams)}exportTable(){L.E.exportTableToExcel("jobMangerTable","Job Manager Table")}toggleStatutoryDeadline(e){this.filterParams.sort_by=e?"statutory_deadline":null,this.getJobMangerList(this.filterParams)}onJobTypeChange(e){this.filterParams.flt_job_type=e.value.value,this.getJobMangerList(this.filterParams),this.filterList.forEach(s=>{1==s.id&&(s.value=e.value.name)})}removeFliter(e){1==e.id&&(this.filterList[0].value="",this.flt_job_type=null,this.filterParams.flt_job_type=null),this.getJobMangerList(this.filterParams)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(O.F))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-job-manager"]],viewQuery:function(e,i){if(1&e&&t.Gf(w.J,5),2&e){let s;t.iGM(s=t.CRH())&&(i.paginatorComponent=s.first)}},decls:66,vars:13,consts:[[1,"flex","flex-col","flex-auto","min-w-0","p-8"],[1,"sm:col-span-6","flex","flex-col","p-6","bg-card","shadow","rounded-2xl","overflow-hidden","mb-3"],[1,"font-bold"],[1,"flex","flex-wrap","mt-4","space-x-2"],["appearance","fill","id","status",1,"w-50"],["placeholder","Select Job Type","disableOptionCentering","",1,"text-lg","text-gray-500",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill","id","status",1,"w-60"],["placeholder","Select Client Manager","disableOptionCentering","",1,"text-lg","text-gray-500",3,"ngModel","ngModelChange"],["placeholder","Select Job Assignee","disableOptionCentering","",1,"text-lg","text-gray-500",3,"ngModel","ngModelChange"],[1,"mr-3","mb-0"],[1,"form-switch","form-switch-1"],["type","checkbox",3,"ngModel","ngModelChange"],["class","flex w-100 flex-wrap",4,"ngIf"],[1,"flex","justify-end","my-4","download-button"],["mat-stroked-button","","color","primary",3,"click"],["aria-hidden","true",1,"fa","fa-file-excel-o"],[1,"flex","flex-col","flex-auto","overflow-auto","table-container","mt-6","h-auto"],["id","jobMangerTable","mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","job_type"],["mat-header-cell","","class","w-40",4,"matHeaderCellDef"],["class","w-40 bg-yellow-50","mat-cell","","matTooltipClass","example-tooltip-red",3,"matTooltip",4,"matCellDef"],["matColumnDef","client_name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","items-center bg-yellow-50",4,"matCellDef"],["matColumnDef","logo"],["mat-header-cell","","class","w-50",4,"matHeaderCellDef"],["mat-cell","","class","items-center w-50 bg-yellow-50",4,"matCellDef"],["matColumnDef","period_end"],["mat-cell","","class","bg-yellow-50",4,"matCellDef"],["matColumnDef","mta_deadline"],["matColumnDef","statutory_deadline"],["matColumnDef","job_stage"],["matColumnDef","current_task"],["matColumnDef","client_manager"],["matColumnDef","job_assignee"],["matColumnDef","notes"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"class",4,"matRowDef","matRowDefColumns"],[1,"paginator","text-right","mt-3.5"],[3,"pageSizes","count","perPage","pageChange"],[3,"value"],[1,"flex","w-100","flex-wrap"],["class","example-chip",4,"ngFor","ngForOf"],[1,"example-chip"],["class","example-box",4,"ngIf"],[1,"example-box"],[1,"cursor-pointer",3,"click"],["mat-header-cell","",1,"w-40"],[1,"ml-3"],["mat-cell","","matTooltipClass","example-tooltip-red",1,"w-40","bg-yellow-50",3,"matTooltip"],[1,"ml-2.5"],["mat-header-cell",""],["mat-cell","",1,"items-center","bg-yellow-50"],[1,"flex","items-center"],[1,"mr-5"],["mat-header-cell","",1,"w-50"],["mat-cell","",1,"items-center","w-50","bg-yellow-50"],[1,"logo-container","flex","items-center"],[1,"cursor-pointer"],["src","assets/images/logo/bespoke.png","alt","bespoke",1,"h-auto","w-7"],["src","assets/images/logo/dext.png","alt","dext",1,"h-auto","w-7"],["src","assets/images/logo/ltd.png","alt","ltd",1,"h-auto","w-7"],["mat-cell","",1,"bg-yellow-50"],["mat-raised-button",""],["mat-header-row",""],["mat-row",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p",2),t._uU(3,"Job Manager"),t.qZA(),t.TgZ(4,"div",3)(5,"mat-form-field",4)(6,"mat-select",5),t.NdJ("ngModelChange",function(o){return i.flt_job_type=o})("selectionChange",function(o){return i.onJobTypeChange(o)}),t.YNc(7,it,2,2,"mat-option",6),t.qZA()(),t.TgZ(8,"mat-form-field",7)(9,"mat-select",8),t.NdJ("ngModelChange",function(o){return i.flt_client_manager=o}),t.TgZ(10,"mat-option"),t._uU(11," Not Found "),t.qZA()()(),t.TgZ(12,"mat-form-field",7)(13,"mat-select",9),t.NdJ("ngModelChange",function(o){return i.flt_job_asg=o}),t.TgZ(14,"mat-option"),t._uU(15," Not Found "),t.qZA()()(),t.TgZ(16,"div")(17,"div",10),t._uU(18,"Statutory Deadline"),t.qZA(),t.TgZ(19,"label",11)(20,"input",12),t.NdJ("ngModelChange",function(o){return i.statutory_deadline=o})("ngModelChange",function(o){return i.toggleStatutoryDeadline(o)}),t.qZA(),t._UZ(21,"i"),t.qZA()()(),t.YNc(22,st,2,1,"div",13),t.TgZ(23,"div",14)(24,"button",15),t.NdJ("click",function(){return i.exportTable()}),t._UZ(25,"i",16),t._uU(26,"\xa0 Download"),t.qZA()(),t.TgZ(27,"div",17)(28,"table",18),t.ynx(29,19),t.YNc(30,ot,3,0,"th",20),t.YNc(31,lt,3,2,"td",21),t.BQk(),t.ynx(32,22),t.YNc(33,rt,2,0,"th",23),t.YNc(34,ht,4,1,"td",24),t.BQk(),t.ynx(35,25),t.YNc(36,ct,1,0,"th",26),t.YNc(37,pt,9,0,"td",27),t.BQk(),t.ynx(38,28),t.YNc(39,dt,2,0,"th",23),t.YNc(40,ut,2,1,"td",29),t.BQk(),t.ynx(41,30),t.YNc(42,mt,2,0,"th",23),t.YNc(43,gt,2,1,"td",29),t.BQk(),t.ynx(44,31),t.YNc(45,_t,2,0,"th",23),t.YNc(46,ft,2,1,"td",29),t.BQk(),t.ynx(47,32),t.YNc(48,bt,2,0,"th",23),t.YNc(49,Ct,3,1,"td",29),t.BQk(),t.ynx(50,33),t.YNc(51,vt,2,0,"th",23),t.YNc(52,yt,2,1,"td",29),t.BQk(),t.ynx(53,34),t.YNc(54,Mt,2,0,"th",23),t.YNc(55,xt,2,1,"td",29),t.BQk(),t.ynx(56,35),t.YNc(57,Tt,2,0,"th",23),t.YNc(58,wt,2,1,"td",29),t.BQk(),t.ynx(59,36),t.YNc(60,It,2,0,"th",23),t.YNc(61,At,2,1,"td",29),t.BQk(),t.YNc(62,St,1,0,"tr",37),t.YNc(63,Jt,1,3,"tr",38),t.qZA()()(),t.TgZ(64,"div",39)(65,"app-paginator",40),t.NdJ("pageChange",function(o){return i.onPageChange(o)}),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngModel",i.flt_job_type),t.xp6(1),t.Q6J("ngForOf",i.jobTypesList),t.xp6(2),t.Q6J("ngModel",i.flt_client_manager),t.xp6(4),t.Q6J("ngModel",i.flt_job_asg),t.xp6(7),t.Q6J("ngModel",i.statutory_deadline),t.xp6(2),t.Q6J("ngIf",i.filterList.length),t.xp6(6),t.Q6J("dataSource",i.jobManagerList),t.xp6(34),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",i.displayedColumns),t.xp6(2),t.Q6J("pageSizes",t.DdM(12,kt))("count",i.totalLogCount)("perPage",i.paginationConfig.limit))},dependencies:[m.sg,m.O5,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,d.Wl,d.JJ,d.On,I.KE,R.gD,h.ey,w.J,A.gM,S.lW,B,f,x.Hw],styles:["table .mat-cell{font-size:14px}table .mat-header-cell{padding-top:8px!important;padding-left:0!important}table .mat-header-cell:nth-child(8){padding-left:14px!important}table .mat-cell,table .mat-footer-cell{min-width:130px;padding:0!important}table .mat-cell:first-child,table .mat-footer-cell:first-child{min-width:100px}table .mat-cell:nth-child(2),table .mat-footer-cell:nth-child(2){min-width:214px}table .mat-cell:nth-child(4),table .mat-footer-cell:nth-child(4){min-width:100px}table .mat-cell:nth-child(5),table .mat-footer-cell:nth-child(5){min-width:120px}table .mat-cell:nth-child(8),table .mat-footer-cell:nth-child(8){min-width:214px;padding-left:15px!important;padding-right:15px!important}table .mat-cell:last-child,table .mat-footer-cell:last-child{min-width:120px}.mat-raised-button{background-color:#f44336!important;color:#fff!important;width:230px;font-size:12px;font-weight:400;box-shadow:none!important}.table-container{max-height:calc(100vh - 340px)}.table-container .logo-container :nth-child(2){margin:0 8px}.example-tooltip-red{font-size:small!important;margin-top:-20px!important}.mat-row.VAT-row{background:rgba(249,130,7,.0784313725)!important}.mat-row.AP-row{background:rgba(255,74,164,.0705882353)!important}.mat-row.BK-row{background:rgba(249,233,42,.0901960784)!important}.mat-row.CS-row{background:#efefef!important}.mat-row.PT-row{background:rgba(194,245,116,.1411764706)!important}@media (min-width: 375px) and (max-width: 424px){.paginator{margin-left:22px!important}}@media (min-width: 425px){.paginator{margin-left:23px!important}}\n"],encapsulation:2}),a})()}];let Zt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[T.Bz.forChild(Dt),T.Bz]}),a})();var Bt=l(4977);let Lt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez,Zt,r.p0,Bt.m,A.AV,S.ot,et,x.Ps]}),a})()}}]);