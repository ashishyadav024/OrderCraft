import{A as KS,B as O,Bn as uf,C as Hy,Cn as qn,Dn as rc,Dt as cT,En as rT,F as Le,Ft as eI,H as Q,Hn as vf,Ht as g,In as tv,It as e_,J as Ro,Kt as hT,Lt as ec,Mt as dT,Nn as tc,O as Jo,P as LT,Pt as dv,Qt as io,Rt as ee,Sn as qh,St as ao,Tt as bt,U as QS,Un as w$,Ut as gf,Wn as wr,Xt as ic,_t as Zy,at as WS,b as Gy,c as CE,dn as nc,en as iv,et as T$,f as E,fn as nn$1,h as Eu,ht as ZC,i as Ba,it as W$1,jt as dM,k as Jy,kn as sI,kt as ce,l as Cn,m as Ef,mn as oD,n as $p,nt as Ub,q as Rl,qt as hf,rn as lT,rt as Vb,tt as Tt$1,u as Df,ut as Y,v as GS,vn as pT,w as I$,wn as qy,xn as qT,xt as ae,y as Gh,yn as pf,yt as aI,zt as ev}from"./main-2EQQ4NB6.js";import{S as gr,c as Ki,d as Ri,g as Xt$1,h as Xn,i as Fi,j as y,k as ui,m as X,n as B,t as $i,y as an$1}from"./chunk-BS0nxJkU.js";import{a as Ln,c as Tn,f as cn$1,g as nn$2,i as Hn,m as kn,n as Ct$1,p as fe,r as Gn,s as Pn,t as Bn,u as We}from"./chunk-DsfbgRPX.js";import{t as f}from"./chunk-BjSy8H9h.js";var vt=Symbol(`FIELD_TREE`);function U(n){return typeof n==`function`&&n[vt]===!0}var ve=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(l){this._box=l,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(l){return this._elementObservables.has(l)||this._elementObservables.set(l,new O(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(l,{box:this._box}),()=>{this._resizeObserver?.unobserve(l),t.unsubscribe(),this._elementObservables.delete(l)}}).pipe(Le(e=>e.some(t=>t.target===l)),aI({bufferSize:1,refCount:!0}),Ro(this._destroyed))),this._elementObservables.get(l)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var yt=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=g(ee);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new ve(r)),this._observers.get(r).observe(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var _e=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=Tt$1({type:n,selectors:[[`mat-label`]]})}return n})();var $t=new E(`MatError`);var ye=(()=>{class n{align=`start`;id=g(Xt$1).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||n)};static ɵdir=Tt$1({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,r){t&2&&(Zy(`id`,r.id),ec(`align`,null),iv(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var Zt=new E(`MatPrefix`);var Yt=new E(`MatSuffix`);var Et=new E(`FloatingLabelParent`);var St=(()=>{class n{_elementRef=g(bt);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(yt);_ngZone=g(ee);_parent=g(Et);_resizeSubscription=new ce;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Qt(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||n)};static ɵdir=Tt$1({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,r){t&2&&iv(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function Qt(n){let l=n;if(l.offsetParent!==null)return l.scrollWidth;let e=l.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var wt=`mdc-line-ripple--active`;var ne=`mdc-line-ripple--deactivating`;var Nt=(()=>{class n{_elementRef=g(bt);_cleanupTransitionEnd;constructor(){let e=g(ee),t=g(Cn);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ne),e.add(wt)}deactivate(){this._elementRef.nativeElement.classList.add(ne)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(ne);e.propertyName===`opacity`&&r&&t.remove(wt,ne)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||n)};static ɵdir=Tt$1({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Ct=(()=>{class n{_elementRef=g(bt);_ngZone=g(ee);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`notch`];return uf({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(p,x){if(p&1&&Jy(e,5),p&2){let w;vf(w=Df())&&(x._notch=w.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(p,x){p&2&&iv(`mdc-notched-outline--notched`,x.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(p,x){p&1&&(lT(),qy(0,`div`,1),hf(1,`div`,2,0),dT(3),gf(),qy(4,`div`,3))},encapsulation:2})})()}return n})();var Xt=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(t){return new(t||n)};static ɵdir=Tt$1({type:n})}return n})();var Jt=new E(`MatFormField`);var en=new E(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Mt=`fill`;var tn=`auto`;var Ft=`fixed`;var nn=`translateY(-50%)`;var Tt=(()=>{class n{_elementRef=g(bt);_changeDetectorRef=g(ao);_platform=g(y);_idGenerator=g(Xt$1);_ngZone=g(ee);_defaults=g(en,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Jo(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=I$(`iconPrefixContainer`);_textPrefixContainerSignal=I$(`textPrefixContainer`);_iconSuffixContainerSignal=I$(`iconSuffixContainer`);_textSuffixContainerSignal=I$(`textSuffixContainer`);_prefixSuffixContainers=ic(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=w$(_e);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=gr(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||tn}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Mt;this._appearanceSignal.set(t)}_appearanceSignal=ae(Mt);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ft}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ft}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=X();constructor(){let e=this._defaults,t=g(Xn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Rl(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=U(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!U(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ic(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(Eu([void 0,void 0]),W$1(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),sI(),Le(([[p,x],[w,H]])=>p!==w||x!==H)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!U(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(Ro(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),eI(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){T$({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ic(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(U(t)){let r=t();return e===`valid`?r.valid():e===`dirty`?r.dirty():e===`touched`?r.touched():e===`pending`?r.pending():e===`untouched`?!r.touched():e===`pristine`?!r.dirty():e===`invalid`?!r.valid():!1}else{let r=t;return e===`valid`?r.valid:e===`dirty`?r.dirty:e===`touched`?r.touched:e===`pending`?r.pending:e===`untouched`?r.untouched:e===`pristine`?r.pristine:e===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let p=this._hintChildren?this._hintChildren.find(w=>w.align===`start`):null,x=this._hintChildren?this._hintChildren.find(w=>w.align===`end`):null;p?e.push(p.id):this._hintLabel&&e.push(this._hintLabelId),x&&e.push(x.id)}else this._errorChildren&&e.push(...this._errorChildren.map(p=>p.id));let t=this._control.describedByIds,r;if(t){let p=this._describedByIds||e;r=e.concat(t.filter(x=>x&&!p.includes(x)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,p=this._textSuffixContainer?.nativeElement,x=e?.getBoundingClientRect().width??0,w=t?.getBoundingClientRect().width??0,H=r?.getBoundingClientRect().width??0,ie=p?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${nn} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${x+w}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,x+w+H+ie]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],t=[`textPrefixContainer`],r=[`iconSuffixContainer`],p=[`textSuffixContainer`],x=[`textField`],w=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],H=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function ie(d,m){d&1&&tc(0,`span`,21)}function re(d,m){if(d&1&&(Ba(0,`label`,20),dT(1,1),GS(2,ie,1,0,`span`,21),pf()),d&2){let i=cT(2);Gy(`floating`,i._shouldLabelFloat())(`monitorResize`,i._hasOutline())(`id`,i._labelId),ec(`for`,i._control.disableAutomaticLabeling?null:i._control.id),ZC(2),WS(!i.hideRequiredMarker&&i._unwrapMaybeSignal(i._control.required)?2:-1)}}function oe(d,m){if(d&1&&GS(0,re,3,5,`label`,20),d&2){let i=cT();WS(i._hasFloatingLabel()?0:-1)}}function Se(d,m){d&1&&tc(0,`div`,7)}function ae(d,m){}function le(d,m){if(d&1&&Hy(0,ae,0,0,`ng-template`,13),d&2){cT(2);let i=hT(1);Gy(`ngTemplateOutlet`,i)}}function de(d,m){if(d&1&&(Ba(0,`div`,9),GS(1,le,1,1,null,13),pf()),d&2){let i=cT();Gy(`matFormFieldNotchedOutlineOpen`,i._shouldLabelFloat()),ZC(),WS(i._forceDisplayInfixLabel()?-1:1)}}function Pt(d,m){d&1&&(Ba(0,`div`,10,2),dT(2,2),pf())}function Dt(d,m){d&1&&(Ba(0,`div`,11,3),dT(2,3),pf())}function Ot(d,m){}function Lt(d,m){if(d&1&&Hy(0,Ot,0,0,`ng-template`,13),d&2){cT();let i=hT(1);Gy(`ngTemplateOutlet`,i)}}function zt(d,m){d&1&&(Ba(0,`div`,14,4),dT(2,4),pf())}function Vt(d,m){d&1&&(Ba(0,`div`,15,5),dT(2,5),pf())}function Bt(d,m){d&1&&tc(0,`div`,16)}function Ht(d,m){d&1&&(Ba(0,`div`,18),dT(1,6),pf())}function jt(d,m){if(d&1&&(Ba(0,`mat-hint`,22),LT(1),pf()),d&2){let i=cT(2);Gy(`id`,i._hintLabelId),ZC(),dv(i.hintLabel)}}function qt(d,m){if(d&1&&(Ba(0,`div`,19),GS(1,jt,2,2,`mat-hint`,22),dT(2,7),tc(3,`div`,23),dT(4,8),pf()),d&2){let i=cT();ZC(),WS(i.hintLabel?1:-1)}}return uf({type:n,selectors:[[`mat-form-field`]],contentQueries:function(m,i,f){if(m&1&&(ev(f,i._labelChild,_e,5),rc(f,Xt,5)(f,Zt,5)(f,Yt,5)(f,$t,5)(f,ye,5)),m&2){pT();let v;vf(v=Df())&&(i._formFieldControl=v.first),vf(v=Df())&&(i._prefixChildren=v),vf(v=Df())&&(i._suffixChildren=v),vf(v=Df())&&(i._errorChildren=v),vf(v=Df())&&(i._hintChildren=v)}},viewQuery:function(m,i){if(m&1&&(tv(i._iconPrefixContainerSignal,e,5)(i._textPrefixContainerSignal,t,5)(i._iconSuffixContainerSignal,r,5)(i._textSuffixContainerSignal,p,5),Jy(x,5)(e,5)(t,5)(r,5)(p,5)(St,5)(Ct,5)(Nt,5)),m&2){pT(4);let f;vf(f=Df())&&(i._textField=f.first),vf(f=Df())&&(i._iconPrefixContainer=f.first),vf(f=Df())&&(i._textPrefixContainer=f.first),vf(f=Df())&&(i._iconSuffixContainer=f.first),vf(f=Df())&&(i._textSuffixContainer=f.first),vf(f=Df())&&(i._floatingLabel=f.first),vf(f=Df())&&(i._notchedOutline=f.first),vf(f=Df())&&(i._lineRipple=f.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(m,i){m&2&&iv(`mat-mdc-form-field-label-always-float`,i._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,i._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,i._hasIconSuffix)(`mat-form-field-invalid`,i._unwrapMaybeSignal(i._control.errorState))(`mat-form-field-disabled`,i._unwrapMaybeSignal(i._control.disabled))(`mat-form-field-autofilled`,i._unwrapMaybeSignal(i._control.autofilled))(`mat-form-field-appearance-fill`,i.appearance==`fill`)(`mat-form-field-appearance-outline`,i.appearance==`outline`)(`mat-form-field-hide-placeholder`,i._hasFloatingLabel()&&!i._shouldLabelFloat())(`mat-primary`,i.color!==`accent`&&i.color!==`warn`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`ng-untouched`,i._shouldForward(`untouched`))(`ng-touched`,i._shouldForward(`touched`))(`ng-pristine`,i._shouldForward(`pristine`))(`ng-dirty`,i._shouldForward(`dirty`))(`ng-valid`,i._shouldForward(`valid`))(`ng-invalid`,i._shouldForward(`invalid`))(`ng-pending`,i._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[qT([{provide:Jt,useExisting:n},{provide:Et,useExisting:n}])],ngContentSelectors:H,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(m,i){if(m&1&&(lT(w),Hy(0,oe,1,1,`ng-template`,null,0,e_),Ba(2,`div`,6,1),nc(`click`,function(v){return i._control.onContainerClick(v)}),GS(4,Se,1,0,`div`,7),Ba(5,`div`,8),GS(6,de,2,2,`div`,9),GS(7,Pt,3,0,`div`,10),GS(8,Dt,3,0,`div`,11),Ba(9,`div`,12),GS(10,Lt,1,1,null,13),dT(11),pf(),GS(12,zt,3,0,`div`,14),GS(13,Vt,3,0,`div`,15),pf(),GS(14,Bt,1,0,`div`,16),pf(),Ba(15,`div`,17),GS(16,Ht,2,0,`div`,18)(17,qt,5,1,`div`,19),pf()),m&2){let f,v=i._unwrapMaybeSignal(i._control.disabled);ZC(2),iv(`mdc-text-field--filled`,!i._hasOutline())(`mdc-text-field--outlined`,i._hasOutline())(`mdc-text-field--no-label`,!i._hasFloatingLabel())(`mdc-text-field--disabled`,v)(`mdc-text-field--invalid`,i._unwrapMaybeSignal(i._control.errorState)),ZC(2),WS(!i._hasOutline()&&!v?4:-1),ZC(2),WS(i._hasOutline()?6:-1),ZC(),WS(i._hasIconPrefix?7:-1),ZC(),WS(i._hasTextPrefix?8:-1),ZC(2),WS(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),ZC(2),WS(i._hasTextSuffix?12:-1),ZC(),WS(i._hasIconSuffix?13:-1),ZC(),WS(i._hasOutline()?-1:14),ZC(),iv(`mat-mdc-form-field-subscript-dynamic-size`,i.subscriptSizing===`dynamic`);let Kt=i._getSubscriptMessageType();ZC(),WS((f=Kt)===`error`?16:f===`hint`?17:-1)}},dependencies:[St,Ct,dM,Nt,ye],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var W=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=io({type:n});static ɵinj=qn({imports:[an$1,Tt,B]})}return n})();var Rt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=io({type:n});static ɵinj=qn({})}return n})();var kt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=io({type:n});static ɵinj=qn({imports:[W,W,Rt,B]})}return n})();var It={production:!1,apiUrl:``};var rn=(n,l)=>l.role;function on(n,l){if(n&1&&(Ba(0,`div`,7)(1,`mat-icon`,11),LT(2,`warning`),pf(),Ba(3,`span`),LT(4),pf()()),n&2){let e=cT();ZC(4),dv(e.errorMessage)}}function an(n,l){if(n&1&&(Ba(0,`div`,8)(1,`mat-icon`,11),LT(2,`check_circle`),pf(),Ba(3,`span`),LT(4),pf()()),n&2){let e=cT();ZC(4),dv(e.successMessage)}}function ln(n,l){n&1&&(tc(0,`mat-spinner`,22),Ba(1,`span`),LT(2,`Signing in...`),pf())}function dn(n,l){n&1&&(Ba(0,`span`),LT(1,`Sign In`),pf())}function sn(n,l){if(n&1){let e=rT();Ba(0,`form`,12),nc(`ngSubmit`,function(){Gh(e);let r=cT();return qh(r.onSubmit())}),Ba(1,`div`,13)(2,`label`,14),LT(3,`Username`),pf(),Ba(4,`div`,15)(5,`mat-icon`,16),LT(6,`person`),pf(),Ba(7,`input`,17),Ub(),pf()()(),Ba(8,`div`,13)(9,`label`,18),LT(10,`Password`),pf(),Ba(11,`div`,15)(12,`mat-icon`,16),LT(13,`lock`),pf(),Ba(14,`input`,19),Ub(),pf(),Ba(15,`button`,20),nc(`click`,function(){Gh(e);let r=cT();return qh(r.hidePassword=!r.hidePassword)}),Ba(16,`mat-icon`),LT(17),pf()()()(),Ba(18,`button`,21),GS(19,ln,3,0)(20,dn,2,0,`span`),pf()()}if(n&2){let e=cT();Gy(`formGroup`,e.loginForm),ZC(7),Vb(),ZC(7),Gy(`type`,e.hidePassword?`password`:`text`),Vb(),ZC(3),dv(e.hidePassword?`visibility_off`:`visibility`),ZC(),Gy(`disabled`,e.loginForm.invalid||e.isLoading),ZC(),WS(e.isLoading?19:20)}}function cn(n,l){n&1&&(tc(0,`mat-spinner`,22),Ba(1,`span`),LT(2,`Creating account...`),pf())}function mn(n,l){n&1&&(Ba(0,`span`),LT(1,`Sign Up`),pf())}function fn(n,l){if(n&1){let e=rT();Ba(0,`form`,12),nc(`ngSubmit`,function(){Gh(e);let r=cT();return qh(r.onSignupSubmit())}),Ba(1,`div`,13)(2,`label`,23),LT(3,`Username`),pf(),Ba(4,`div`,15)(5,`mat-icon`,16),LT(6,`person`),pf(),Ba(7,`input`,24),Ub(),pf()()(),Ba(8,`div`,13)(9,`label`,25),LT(10,`Password`),pf(),Ba(11,`div`,15)(12,`mat-icon`,16),LT(13,`lock`),pf(),Ba(14,`input`,26),Ub(),pf(),Ba(15,`button`,20),nc(`click`,function(){Gh(e);let r=cT();return qh(r.hideSignupPassword=!r.hideSignupPassword)}),Ba(16,`mat-icon`),LT(17),pf()()()(),Ba(18,`div`,13)(19,`label`,27),LT(20,`Confirm Password`),pf(),Ba(21,`div`,15)(22,`mat-icon`,16),LT(23,`lock_outline`),pf(),Ba(24,`input`,28),Ub(),pf(),Ba(25,`button`,29),nc(`click`,function(){Gh(e);let r=cT();return qh(r.hideSignupConfirmPassword=!r.hideSignupConfirmPassword)}),Ba(26,`mat-icon`),LT(27),pf()()()(),Ba(28,`div`,13)(29,`label`,30),LT(30,`Department / Role`),pf(),Ba(31,`div`,15)(32,`mat-icon`,16),LT(33,`badge`),pf(),Ba(34,`select`,31),Ub(),Ba(35,`option`,32),LT(36,`Sales`),pf(),Ba(37,`option`,33),LT(38,`Purchase`),pf(),Ba(39,`option`,34),LT(40,`Accounts`),pf(),Ba(41,`option`,35),LT(42,`Admin`),pf()()()(),Ba(43,`button`,21),GS(44,cn,3,0)(45,mn,2,0,`span`),pf()()}if(n&2){let e=cT();Gy(`formGroup`,e.signupForm),ZC(7),Vb(),ZC(7),Gy(`type`,e.hideSignupPassword?`password`:`text`),Vb(),ZC(3),dv(e.hideSignupPassword?`visibility_off`:`visibility`),ZC(7),Gy(`type`,e.hideSignupConfirmPassword?`password`:`text`),Vb(),ZC(3),dv(e.hideSignupConfirmPassword?`visibility_off`:`visibility`),ZC(7),Vb(),ZC(9),Gy(`disabled`,e.signupForm.invalid||e.isLoading),ZC(),WS(e.isLoading?44:45)}}function un(n,l){if(n&1){let e=rT();Ba(0,`button`,39),nc(`click`,function(){let r=Gh(e).$implicit,p=cT(2);return qh(p.quickLogin(r.user,r.pass))}),LT(1),pf()}if(n&2){let e=l.$implicit;ZC(),Ef(` `,e.label,` `)}}function pn(n,l){if(n&1&&(Ba(0,`div`,10)(1,`span`,36),LT(2,`Dev test login:`),pf(),Ba(3,`div`,37),KS(4,un,2,1,`button`,38,rn),pf()()),n&2){let e=cT();ZC(4),QS(e.demoRoles)}}var At=class n{fb=g(Bn);authService=g(CE);router=g(wr);route=g(nn$1);cdr=g(ao);ngZone=g(ee);activeTab=`signin`;isProduction=It.production;loginForm=this.fb.nonNullable.group({username:[``,fe.required],password:[``,fe.required]});signupForm=this.fb.nonNullable.group({username:[``,[fe.required,fe.minLength(3)]],password:[``,[fe.required,fe.minLength(6)]],confirmPassword:[``,fe.required],role:[`SALES`,fe.required]});isLoading=!1;errorMessage=``;successMessage=``;hidePassword=!0;hideSignupPassword=!0;hideSignupConfirmPassword=!0;returnUrl=`/dashboard`;demoRoles=[{role:`ADMIN`,label:`Admin`,user:`admin`,pass:`Admin@123`},{role:`SALES`,label:`Sales`,user:`sales`,pass:`Sales@123`},{role:`PURCHASE`,label:`Purchase`,user:`purchase`,pass:`Purchase@123`},{role:`ACCOUNTS`,label:`Accounts`,user:`accounts`,pass:`Accounts@123`}];ngOnInit(){if(this.authService.isLoggedIn()){this.router.navigate([`/dashboard`]);return}this.returnUrl=this.route.snapshot?.queryParams?.returnUrl||`/dashboard`,(this.route.snapshot?.queryParams?.tab===`signup`||this.route.snapshot?.routeConfig?.path===`register`)&&(this.activeTab=`signup`)}setTab(l){this.activeTab=l,this.errorMessage=``,this.successMessage=``}quickLogin(l,e){this.activeTab=`signin`,this.loginForm.setValue({username:l,password:e}),this.onSubmit()}onSubmit(){this.loginForm.invalid||(this.isLoading=!0,this.errorMessage=``,this.successMessage=``,this.authService.login(this.loginForm.getRawValue()).pipe($p(5e3)).subscribe({next:()=>{this.ngZone.run(()=>{this.isLoading=!1,this.cdr.detectChanges(),this.router.navigateByUrl(this.returnUrl)})},error:l=>{this.ngZone.run(()=>{this.isLoading=!1,l.name===`TimeoutError`?this.errorMessage=`Login timed out. Please try again.`:l.status===401?this.errorMessage=`Invalid username or password.`:l.status===0?this.errorMessage=`Server is currently unavailable. Please try again later.`:this.errorMessage=`Login failed. Please verify credentials.`,this.cdr.detectChanges()})}}))}onSignupSubmit(){if(this.signupForm.invalid)return;let l=this.signupForm.getRawValue();if(l.password!==l.confirmPassword){this.errorMessage=`Passwords do not match.`;return}this.isLoading=!0,this.errorMessage=``,this.successMessage=``,this.authService.register({username:l.username.trim(),password:l.password,role:l.role}).pipe($p(5e3)).subscribe({next:()=>{this.ngZone.run(()=>{this.isLoading=!1,this.successMessage=`Account created successfully. Please sign in.`,this.loginForm.patchValue({username:l.username.trim()}),this.signupForm.reset({role:`SALES`}),this.setTab(`signin`),this.cdr.detectChanges()})},error:e=>{this.ngZone.run(()=>{this.isLoading=!1,e.status===409?this.errorMessage=`Username already exists. Please choose a different username.`:e.status===404||e.status===405||e.status===403||e.status===401?this.errorMessage=`User registration is managed by administrators. Please contact your admin or sign in.`:e.status===0?this.errorMessage=`Server is currently unavailable. Please try again later.`:this.errorMessage=e?.error?.message||`Registration failed. Please try again.`,this.cdr.detectChanges()})}})}static ɵfac=function(e){return new(e||n)};static ɵcmp=uf({type:n,selectors:[[`app-login`]],decls:18,vars:11,consts:[[1,`auth-page-container`],[1,`auth-card`],[1,`brand-header`],[1,`brand-logo-icon`],[1,`brand-title`],[`role`,`tablist`,`aria-label`,`Authentication Options`,1,`auth-tabs`],[`type`,`button`,`role`,`tab`,1,`auth-tab`,3,`click`],[1,`feedback-banner`,`error`],[1,`feedback-banner`,`success`],[`novalidate`,``,1,`auth-form`,3,`formGroup`],[1,`dev-quick-fill`],[1,`banner-icon`],[`novalidate`,``,1,`auth-form`,3,`ngSubmit`,`formGroup`],[1,`form-field`],[`for`,`signin-username`,1,`field-label`],[1,`input-container`],[1,`field-prefix-icon`],[`id`,`signin-username`,`type`,`text`,`formControlName`,`username`,`placeholder`,`Enter username`,`autocomplete`,`username`,1,`field-input`],[`for`,`signin-password`,1,`field-label`],[`id`,`signin-password`,`formControlName`,`password`,`placeholder`,`Enter password`,`autocomplete`,`current-password`,1,`field-input`,`with-suffix`,3,`type`],[`type`,`button`,`tabindex`,`-1`,`aria-label`,`Toggle password visibility`,1,`field-suffix-btn`,3,`click`],[`type`,`submit`,1,`auth-submit-btn`,3,`disabled`],[`diameter`,`18`,1,`btn-spinner`],[`for`,`signup-username`,1,`field-label`],[`id`,`signup-username`,`type`,`text`,`formControlName`,`username`,`placeholder`,`Choose a username`,`autocomplete`,`username`,1,`field-input`],[`for`,`signup-password`,1,`field-label`],[`id`,`signup-password`,`formControlName`,`password`,`placeholder`,`At least 6 characters`,`autocomplete`,`new-password`,1,`field-input`,`with-suffix`,3,`type`],[`for`,`signup-confirm-password`,1,`field-label`],[`id`,`signup-confirm-password`,`formControlName`,`confirmPassword`,`placeholder`,`Re-enter password`,`autocomplete`,`new-password`,1,`field-input`,`with-suffix`,3,`type`],[`type`,`button`,`tabindex`,`-1`,`aria-label`,`Toggle confirm password visibility`,1,`field-suffix-btn`,3,`click`],[`for`,`signup-role`,1,`field-label`],[`id`,`signup-role`,`formControlName`,`role`,1,`field-input`,`field-select`],[`value`,`SALES`],[`value`,`PURCHASE`],[`value`,`ACCOUNTS`],[`value`,`ADMIN`],[1,`dev-label`],[1,`dev-links`],[`type`,`button`,1,`dev-btn`],[`type`,`button`,1,`dev-btn`,3,`click`]],template:function(e,t){e&1&&(Ba(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`mat-icon`),LT(5,`precision_manufacturing`),pf()(),Ba(6,`h1`,4),LT(7,`OrderCraft`),pf()(),Ba(8,`div`,5)(9,`button`,6),nc(`click`,function(){return t.setTab(`signin`)}),LT(10,` Sign In `),pf(),Ba(11,`button`,6),nc(`click`,function(){return t.setTab(`signup`)}),LT(12,` Sign Up `),pf()(),GS(13,on,5,1,`div`,7),GS(14,an,5,1,`div`,8),GS(15,sn,21,5,`form`,9),GS(16,fn,46,7,`form`,9),GS(17,pn,6,0,`div`,10),pf()()),e&2&&(ZC(9),iv(`active`,t.activeTab===`signin`),ec(`aria-selected`,t.activeTab===`signin`),ZC(2),iv(`active`,t.activeTab===`signup`),ec(`aria-selected`,t.activeTab===`signup`),ZC(2),WS(t.errorMessage?13:-1),ZC(),WS(t.successMessage?14:-1),ZC(),WS(t.activeTab===`signin`?15:-1),ZC(),WS(t.activeTab===`signup`?16:-1),ZC(),WS(t.isProduction?-1:17))},dependencies:[oD,Hn,Gn,kn,Ln,We,Ct$1,Tn,Pn,nn$2,cn$1,f,W,kt,ui,Ri,Fi,$i,Ki],styles:[`[_nghost-%COMP%]{display:block;width:100%;min-height:100vh}.auth-page-container[_ngcontent-%COMP%]{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;background-color:var(--%NS%bg-page, #F4F6F8);padding:32px 16px;box-sizing:border-box;font-family:var(--%NS%font-sans, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)}.auth-card[_ngcontent-%COMP%]{width:100%;max-width:420px;background-color:var(--%NS%surface, #FFFFFF);border:1px solid var(--%NS%border, #E1E5EA);border-radius:var(--%NS%radius-md, 6px);box-shadow:0 1px 3px #0000000d;padding:32px 28px;box-sizing:border-box}.brand-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:24px;text-align:center}.brand-logo-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:var(--%NS%radius-sm, 4px);background-color:#1f4e7914;color:var(--%NS%primary, #1F4E79);display:flex;align-items:center;justify-content:center;margin-bottom:10px}.brand-logo-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;width:26px;height:26px}.brand-title[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--%NS%text-primary, #1F2937);margin:0;letter-spacing:-.01em;line-height:1.2}.auth-tabs[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--%NS%border, #E1E5EA);margin-bottom:20px}.auth-tab[_ngcontent-%COMP%]{flex:1;padding:10px 0;background:transparent;border:none;border-bottom:2px solid transparent;font-size:14px;font-weight:500;color:var(--%NS%text-secondary, #6B7280);cursor:pointer;transition:all .15s ease-in-out;text-align:center}.auth-tab[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary, #1F2937)}.auth-tab.active[_ngcontent-%COMP%]{color:var(--%NS%primary, #1F4E79);font-weight:600;border-bottom-color:var(--%NS%primary, #1F4E79)}.feedback-banner[_ngcontent-%COMP%]{padding:10px 14px;border-radius:var(--%NS%radius-sm, 4px);font-size:13px;line-height:1.4;display:flex;align-items:center;gap:8px;margin-bottom:16px;box-sizing:border-box}.feedback-banner.error[_ngcontent-%COMP%]{background-color:var(--%NS%danger-bg, #FEF2F2);border:1px solid var(--%NS%danger-border, #FCA5A5);color:var(--%NS%danger, #C62828)}.feedback-banner.success[_ngcontent-%COMP%]{background-color:var(--%NS%success-bg, #F0FDF4);border:1px solid var(--%NS%success-border, #86EFAC);color:var(--%NS%success, #2E7D32)}.banner-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;flex-shrink:0}.auth-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;width:100%}.form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;width:100%}.field-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:var(--%NS%text-primary, #1F2937);display:block}.input-container[_ngcontent-%COMP%]{position:relative;width:100%;display:flex;align-items:center;box-sizing:border-box}.field-prefix-icon[_ngcontent-%COMP%]{position:absolute;left:12px;font-size:18px;width:18px;height:18px;color:var(--%NS%text-secondary, #6B7280);pointer-events:none;display:flex;align-items:center;justify-content:center;z-index:1}.field-input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid var(--%NS%border, #E1E5EA);border-radius:var(--%NS%radius-sm, 4px);background-color:#fff;font-size:14px;color:var(--%NS%text-primary, #1F2937);padding:0 14px 0 38px;box-sizing:border-box;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.field-input[_ngcontent-%COMP%]::placeholder{color:#9ca3af;font-size:13px}.field-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--%NS%primary, #1F4E79);box-shadow:0 0 0 2px #1f4e791f}.field-input.with-suffix[_ngcontent-%COMP%]{padding-right:38px}.field-suffix-btn[_ngcontent-%COMP%]{position:absolute;right:8px;background:transparent;border:none;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--%NS%text-secondary, #6B7280);border-radius:4px;height:28px;width:28px;transition:color .15s ease}.field-suffix-btn[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary, #1F2937)}.field-suffix-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.field-select[_ngcontent-%COMP%]{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px;appearance:none;-webkit-appearance:none;-moz-appearance:none}.auth-submit-btn[_ngcontent-%COMP%]{width:100%;height:40px;background-color:var(--%NS%primary, #1F4E79);color:#fff;border:none;border-radius:var(--%NS%radius-sm, 4px);font-size:14px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:background-color .15s ease-in-out;margin-top:4px}.auth-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--%NS%primary-hover, #173B5C)}.auth-submit-btn[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed}.btn-spinner[_ngcontent-%COMP%]{display:inline-block}.dev-quick-fill[_ngcontent-%COMP%]{margin-top:24px;padding-top:16px;border-top:1px dashed var(--%NS%border, #E1E5EA);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}.dev-label[_ngcontent-%COMP%]{font-size:11px;color:var(--%NS%text-secondary, #6B7280);font-weight:500}.dev-links[_ngcontent-%COMP%]{display:flex;gap:6px}.dev-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--%NS%border, #E1E5EA);border-radius:3px;font-size:11px;color:var(--%NS%primary, #1F4E79);padding:3px 8px;cursor:pointer;font-weight:500;transition:all .15s ease}.dev-btn[_ngcontent-%COMP%]:hover{background-color:#1f4e7914;border-color:var(--%NS%primary, #1F4E79)}@media(max-width:480px){.auth-card[_ngcontent-%COMP%]{padding:24px 20px;border:none;box-shadow:none;background:transparent}.auth-page-container[_ngcontent-%COMP%]{padding:16px 8px;background-color:#fff}}`]})};export{At as LoginComponent};