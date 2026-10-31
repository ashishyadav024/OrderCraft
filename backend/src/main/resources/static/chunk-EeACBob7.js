import{$t as io,A as KS,At as ce,B as O,Bn as uf,Bt as ev,C as Hy,Cn as qS,Ct as ao,Dn as rc,En as rT,Et as bt,F as Le,Ft as dv,H as Q,Hn as vf,In as tv,It as eI,J as Ro,Jt as hf,Lt as e_,Mt as dM,Nn as tc,Nt as dT,O as Jo,Ot as cT,P as LT,Rt as ec,Sn as q,St as ae,U as QS,Un as w$,Ut as g,Wn as wr,Wt as gf,Zt as ic,_n as ov,at as Wh,b as Gy,bn as pf,bt as aI,c as CE,dt as Y,et as T$,f as E,fn as nc,gt as ZC,h as Eu,hn as oD,i as Ba,in as lT,it as WT,k as Jy,kn as sI,l as Cn,n as $p,nt as Ub,ot as Wn,pn as nn$1,q as Rl,qt as hT,rt as Vb,st as Wy,tn as iv,tt as Tt,u as Df,v as GS,vt as Zy,w as I$,y as Gh,yn as pT,zt as ee}from"./main-L7VIV3KY.js";import{S as gr,c as Ki,d as Ri,g as Xt$1,h as Xn,i as Fi,j as y,k as ui,m as X,n as B,t as $i,y as an}from"./chunk-CZIaWvdm.js";import{c as Tn,f as cn,g as nn$2,i as Hn,p as fe,r as Gn,s as Pn,t as Bn,u as We}from"./chunk-BSP9SQc3.js";import{t as f}from"./chunk-B-Jnhuc1.js";var gt=Symbol(`FIELD_TREE`);function V(i){return typeof i==`function`&&i[gt]===!0}var he=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(s){this._box=s,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(s){return this._elementObservables.has(s)||this._elementObservables.set(s,new O(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(s,{box:this._box}),()=>{this._resizeObserver?.unobserve(s),t.unsubscribe(),this._elementObservables.delete(s)}}).pipe(Le(e=>e.some(t=>t.target===s)),aI({bufferSize:1,refCount:!0}),Ro(this._destroyed))),this._elementObservables.get(s)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var xt=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=g(ee);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let a=t?.box||`content-box`;return this._observers.has(a)||this._observers.set(a,new he(a)),this._observers.get(a).observe(e)}static ɵfac=function(t){return new(t||i)};static ɵprov=Y({token:i,factory:i.ɵfac})}return i})();var ge=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=Tt({type:i,selectors:[[`mat-label`]]})}return i})();var Kt=new E(`MatError`);var be=(()=>{class i{align=`start`;id=g(Xt$1).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||i)};static ɵdir=Tt({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,a){t&2&&(Zy(`id`,a.id),ec(`align`,null),iv(`mat-mdc-form-field-hint-end`,a.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var Ut=new E(`MatPrefix`);var Gt=new E(`MatSuffix`);var Nt=new E(`FloatingLabelParent`);var vt=(()=>{class i{_elementRef=g(bt);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(xt);_ngZone=g(ee);_parent=g(Nt);_resizeSubscription=new ce;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Wt(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||i)};static ɵdir=Tt({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,a){t&2&&iv(`mdc-floating-label--float-above`,a.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function Wt(i){let s=i;if(s.offsetParent!==null)return s.scrollWidth;let e=s.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var _t=`mdc-line-ripple--active`;var Z=`mdc-line-ripple--deactivating`;var yt=(()=>{class i{_elementRef=g(bt);_cleanupTransitionEnd;constructor(){let e=g(ee),t=g(Cn);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Z),e.add(_t)}deactivate(){this._elementRef.nativeElement.classList.add(Z)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,a=t.contains(Z);e.propertyName===`opacity`&&a&&t.remove(_t,Z)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||i)};static ɵdir=Tt({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var St=(()=>{class i{_elementRef=g(bt);_ngZone=g(ee);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`notch`];return uf({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(p,h){if(p&1&&Jy(e,5),p&2){let y;vf(y=Df())&&(h._notch=y.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(p,h){p&2&&iv(`mdc-notched-outline--notched`,h.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(p,h){p&1&&(lT(),Wy(0,`div`,1),hf(1,`div`,2,0),dT(3),gf(),Wy(4,`div`,3))},encapsulation:2})})()}return i})();var $t=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(t){return new(t||i)};static ɵdir=Tt({type:i})}return i})();var Yt=new E(`MatFormField`);var Zt=new E(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var wt=`fill`;var Qt=`auto`;var Mt=`fixed`;var Xt=`translateY(-50%)`;var Ct=(()=>{class i{_elementRef=g(bt);_changeDetectorRef=g(ao);_platform=g(y);_idGenerator=g(Xt$1);_ngZone=g(ee);_defaults=g(Zt,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Jo(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=I$(`iconPrefixContainer`);_textPrefixContainerSignal=I$(`textPrefixContainer`);_iconSuffixContainerSignal=I$(`iconSuffixContainer`);_textSuffixContainerSignal=I$(`textSuffixContainer`);_prefixSuffixContainers=ic(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=w$(ge);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=gr(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Qt}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||wt;this._appearanceSignal.set(t)}_appearanceSignal=ae(wt);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Mt}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Mt}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=X();constructor(){let e=this._defaults,t=g(Xn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Rl(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=V(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!V(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ic(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,a=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(a+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(Eu([void 0,void 0]),q(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),sI(),Le(([[p,h],[y,D]])=>p!==y||h!==D)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!V(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(Ro(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),eI(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){T$({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ic(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(V(t)){let a=t();return e===`valid`?a.valid():e===`dirty`?a.dirty():e===`touched`?a.touched():e===`pending`?a.pending():e===`untouched`?!a.touched():e===`pristine`?!a.dirty():e===`invalid`?!a.valid():!1}else{let a=t;return e===`valid`?a.valid:e===`dirty`?a.dirty:e===`touched`?a.touched:e===`pending`?a.pending:e===`untouched`?a.untouched:e===`pristine`?a.pristine:e===`invalid`?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let p=this._hintChildren?this._hintChildren.find(y=>y.align===`start`):null,h=this._hintChildren?this._hintChildren.find(y=>y.align===`end`):null;p?e.push(p.id):this._hintLabel&&e.push(this._hintLabelId),h&&e.push(h.id)}else this._errorChildren&&e.push(...this._errorChildren.map(p=>p.id));let t=this._control.describedByIds,a;if(t){let p=this._describedByIds||e;a=e.concat(t.filter(h=>h&&!p.includes(h)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,p=this._textSuffixContainer?.nativeElement,h=e?.getBoundingClientRect().width??0,y=t?.getBoundingClientRect().width??0,D=a?.getBoundingClientRect().width??0,Q=p?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Xt} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${h+y}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,h+y+D+Q]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],t=[`textPrefixContainer`],a=[`iconSuffixContainer`],p=[`textSuffixContainer`],h=[`textField`],y=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],D=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Q(l,m){l&1&&tc(0,`span`,21)}function X(l,m){if(l&1&&(Ba(0,`label`,20),dT(1,1),GS(2,Q,1,0,`span`,21),pf()),l&2){let n=cT(2);Gy(`floating`,n._shouldLabelFloat())(`monitorResize`,n._hasOutline())(`id`,n._labelId),ec(`for`,n._control.disableAutomaticLabeling?null:n._control.id),ZC(2),qS(!n.hideRequiredMarker&&n._unwrapMaybeSignal(n._control.required)?2:-1)}}function J(l,m){if(l&1&&GS(0,X,3,5,`label`,20),l&2){let n=cT();qS(n._hasFloatingLabel()?0:-1)}}function xe(l,m){l&1&&tc(0,`div`,7)}function ee(l,m){}function te(l,m){if(l&1&&Hy(0,ee,0,0,`ng-template`,13),l&2){cT(2);let n=hT(1);Gy(`ngTemplateOutlet`,n)}}function ne(l,m){if(l&1&&(Ba(0,`div`,9),GS(1,te,1,1,null,13),pf()),l&2){let n=cT();Gy(`matFormFieldNotchedOutlineOpen`,n._shouldLabelFloat()),ZC(),qS(n._forceDisplayInfixLabel()?-1:1)}}function Tt(l,m){l&1&&(Ba(0,`div`,10,2),dT(2,2),pf())}function kt(l,m){l&1&&(Ba(0,`div`,11,3),dT(2,3),pf())}function It(l,m){}function Ot(l,m){if(l&1&&Hy(0,It,0,0,`ng-template`,13),l&2){cT();let n=hT(1);Gy(`ngTemplateOutlet`,n)}}function Pt(l,m){l&1&&(Ba(0,`div`,14,4),dT(2,4),pf())}function Dt(l,m){l&1&&(Ba(0,`div`,15,5),dT(2,5),pf())}function At(l,m){l&1&&tc(0,`div`,16)}function Lt(l,m){l&1&&(Ba(0,`div`,18),dT(1,6),pf())}function zt(l,m){if(l&1&&(Ba(0,`mat-hint`,22),LT(1),pf()),l&2){let n=cT(2);Gy(`id`,n._hintLabelId),ZC(),dv(n.hintLabel)}}function Vt(l,m){if(l&1&&(Ba(0,`div`,19),GS(1,zt,2,2,`mat-hint`,22),dT(2,7),tc(3,`div`,23),dT(4,8),pf()),l&2){let n=cT();ZC(),qS(n.hintLabel?1:-1)}}return uf({type:i,selectors:[[`mat-form-field`]],contentQueries:function(m,n,f){if(m&1&&(ev(f,n._labelChild,ge,5),rc(f,$t,5)(f,Ut,5)(f,Gt,5)(f,Kt,5)(f,be,5)),m&2){pT();let x;vf(x=Df())&&(n._formFieldControl=x.first),vf(x=Df())&&(n._prefixChildren=x),vf(x=Df())&&(n._suffixChildren=x),vf(x=Df())&&(n._errorChildren=x),vf(x=Df())&&(n._hintChildren=x)}},viewQuery:function(m,n){if(m&1&&(tv(n._iconPrefixContainerSignal,e,5)(n._textPrefixContainerSignal,t,5)(n._iconSuffixContainerSignal,a,5)(n._textSuffixContainerSignal,p,5),Jy(h,5)(e,5)(t,5)(a,5)(p,5)(vt,5)(St,5)(yt,5)),m&2){pT(4);let f;vf(f=Df())&&(n._textField=f.first),vf(f=Df())&&(n._iconPrefixContainer=f.first),vf(f=Df())&&(n._textPrefixContainer=f.first),vf(f=Df())&&(n._iconSuffixContainer=f.first),vf(f=Df())&&(n._textSuffixContainer=f.first),vf(f=Df())&&(n._floatingLabel=f.first),vf(f=Df())&&(n._notchedOutline=f.first),vf(f=Df())&&(n._lineRipple=f.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(m,n){m&2&&iv(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._unwrapMaybeSignal(n._control.errorState))(`mat-form-field-disabled`,n._unwrapMaybeSignal(n._control.disabled))(`mat-form-field-autofilled`,n._unwrapMaybeSignal(n._control.autofilled))(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[WT([{provide:Yt,useExisting:i},{provide:Nt,useExisting:i}])],ngContentSelectors:D,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(m,n){if(m&1&&(lT(y),Hy(0,J,1,1,`ng-template`,null,0,e_),Ba(2,`div`,6,1),nc(`click`,function(x){return n._control.onContainerClick(x)}),GS(4,xe,1,0,`div`,7),Ba(5,`div`,8),GS(6,ne,2,2,`div`,9),GS(7,Tt,3,0,`div`,10),GS(8,kt,3,0,`div`,11),Ba(9,`div`,12),GS(10,Ot,1,1,null,13),dT(11),pf(),GS(12,Pt,3,0,`div`,14),GS(13,Dt,3,0,`div`,15),pf(),GS(14,At,1,0,`div`,16),pf(),Ba(15,`div`,17),GS(16,Lt,2,0,`div`,18)(17,Vt,5,1,`div`,19),pf()),m&2){let f,x=n._unwrapMaybeSignal(n._control.disabled);ZC(2),iv(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,x)(`mdc-text-field--invalid`,n._unwrapMaybeSignal(n._control.errorState)),ZC(2),qS(!n._hasOutline()&&!x?4:-1),ZC(2),qS(n._hasOutline()?6:-1),ZC(),qS(n._hasIconPrefix?7:-1),ZC(),qS(n._hasTextPrefix?8:-1),ZC(2),qS(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),ZC(2),qS(n._hasTextSuffix?12:-1),ZC(),qS(n._hasIconSuffix?13:-1),ZC(),qS(n._hasOutline()?-1:14),ZC(),iv(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let Bt=n._getSubscriptMessageType();ZC(),qS((f=Bt)===`error`?16:f===`hint`?17:-1)}},dependencies:[vt,St,dM,yt,be],styles:[`.mdc-text-field {
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
`],encapsulation:2})})()}return i})();var H=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=io({type:i});static ɵinj=Wn({imports:[an,Ct,B]})}return i})();var Ft=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=io({type:i});static ɵinj=Wn({})}return i})();var Et=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=io({type:i});static ɵinj=Wn({imports:[H,H,Ft,B]})}return i})();var Jt=(i,s)=>s.role;function en(i,s){if(i&1){let e=rT();Ba(0,`button`,44),nc(`click`,function(){let a=Gh(e).$implicit,p=cT();return Wh(p.quickLogin(a.user,a.pass))}),Ba(1,`div`,45)(2,`mat-icon`),LT(3),pf()(),Ba(4,`div`,46)(5,`span`,47),LT(6),pf(),Ba(7,`span`,48),LT(8),pf()()()}if(i&2){let e=s.$implicit,t=cT();Gy(`disabled`,t.isLoading),ZC(),ov(`color`,e.color),ZC(2),dv(e.icon),ZC(3),dv(e.role),ZC(2),dv(e.label)}}function tn(i,s){if(i&1&&(Ba(0,`div`,32)(1,`mat-icon`),LT(2,`warning`),pf(),Ba(3,`span`),LT(4),pf()()),i&2){let e=cT();ZC(4),dv(e.errorMessage)}}function nn(i,s){i&1&&(tc(0,`mat-spinner`,49),Ba(1,`span`),LT(2,`Authenticating...`),pf())}function rn(i,s){i&1&&(Ba(0,`mat-icon`),LT(1,`login`),pf(),Ba(2,`span`),LT(3,`Sign In to Manufacturing OMS`),pf())}var Rt=class i{fb=g(Bn);authService=g(CE);router=g(wr);route=g(nn$1);cdr=g(ao);ngZone=g(ee);loginForm=this.fb.nonNullable.group({username:[``,fe.required],password:[``,fe.required]});isLoading=!1;errorMessage=``;hidePassword=!0;returnUrl=`/dashboard`;demoRoles=[{role:`ADMIN`,label:`Administrator`,user:`admin`,pass:`Admin@123`,icon:`shield`,color:`#6366f1`},{role:`SALES`,label:`Sales Specialist`,user:`sales`,pass:`Sales@123`,icon:`storefront`,color:`#0ea5e9`},{role:`PURCHASE`,label:`Procurement Mgr`,user:`purchase`,pass:`Purchase@123`,icon:`shopping_cart`,color:`#10b981`},{role:`ACCOUNTS`,label:`Accounts Officer`,user:`accounts`,pass:`Accounts@123`,icon:`account_balance`,color:`#f59e0b`}];ngOnInit(){if(this.authService.isLoggedIn()){this.router.navigate([`/dashboard`]);return}this.returnUrl=this.route.snapshot.queryParams.returnUrl||`/dashboard`}quickLogin(s,e){this.loginForm.setValue({username:s,password:e}),this.onSubmit()}onSubmit(){this.loginForm.invalid||(this.isLoading=!0,this.errorMessage=``,this.authService.login(this.loginForm.getRawValue()).pipe($p(5e3)).subscribe({next:()=>{this.ngZone.run(()=>{this.isLoading=!1,this.cdr.detectChanges(),this.router.navigateByUrl(this.returnUrl)})},error:s=>{this.ngZone.run(()=>{this.isLoading=!1,s.name===`TimeoutError`?this.errorMessage=`Login timed out. Check backend connection on port 8085.`:s.status===401?this.errorMessage=`Invalid username or password.`:s.status===0?this.errorMessage=`Backend server unavailable. Please ensure Spring Boot is running on port 8085.`:this.errorMessage=`Login failed. Please verify credentials.`,this.cdr.detectChanges()})}}))}static ɵfac=function(e){return new(e||i)};static ɵcmp=uf({type:i,selectors:[[`app-login`]],decls:106,vars:6,consts:[[1,`login-page-container`],[1,`hero-showcase`],[1,`hero-content`],[1,`brand-badge`],[1,`brand-icon`],[1,`brand-title-wrap`],[1,`brand-name`],[1,`brand-sub`],[1,`hero-headline-block`],[1,`hero-title`],[1,`hero-description`],[1,`feature-pills-grid`],[1,`feature-card`],[1,`feature-icon-box`,`blue`],[1,`feature-text`],[1,`feature-icon-box`,`green`],[1,`feature-icon-box`,`amber`],[1,`feature-icon-box`,`purple`],[1,`hero-footer-status`],[1,`status-indicator`],[1,`status-dot`],[1,`version-label`],[1,`auth-form-wrapper`],[1,`form-container`],[1,`form-header`],[1,`form-title`],[1,`form-subtitle`],[1,`demo-login-box`],[1,`demo-title`],[1,`demo-buttons-grid`],[`type`,`button`,1,`demo-role-btn`,3,`disabled`],[1,`divider-with-text`],[1,`error-banner`],[1,`login-form`,3,`ngSubmit`,`formGroup`],[1,`form-group`],[`for`,`username-input`,1,`input-label`],[1,`input-field-wrap`],[1,`field-icon`],[`id`,`username-input`,`type`,`text`,`formControlName`,`username`,`placeholder`,`e.g. admin, sales, purchase, accounts`,`autocomplete`,`username`,1,`custom-input`],[`for`,`password-input`,1,`input-label`],[`id`,`password-input`,`formControlName`,`password`,`placeholder`,`Enter password`,`autocomplete`,`current-password`,1,`custom-input`,3,`type`],[`type`,`button`,`tabindex`,`-1`,1,`toggle-visibility-btn`,3,`click`],[`type`,`submit`,1,`submit-button`,3,`disabled`],[1,`security-notice`],[`type`,`button`,1,`demo-role-btn`,3,`click`,`disabled`],[1,`demo-btn-icon`],[1,`demo-btn-text`],[1,`demo-btn-role`],[1,`demo-btn-label`],[`diameter`,`20`,1,`spinner`]],template:function(e,t){e&1&&(Ba(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`mat-icon`,4),LT(5,`precision_manufacturing`),pf(),Ba(6,`div`,5)(7,`span`,6),LT(8,`OrderCraft`),pf(),Ba(9,`span`,7),LT(10,`Manufacturing Order Management System`),pf()()(),Ba(11,`div`,8)(12,`h1`,9),LT(13,`Automate your Order-to-Cash lifecycle.`),pf(),Ba(14,`p`,10),LT(15,` A unified enterprise manufacturing suite unifying multi-tier Bill of Materials (BOM) explosion, automated shortage procurement, real-time goods receipt inventory tracking, and corporate tax invoicing. `),pf()(),Ba(16,`div`,11)(17,`div`,12)(18,`div`,13)(19,`mat-icon`),LT(20,`account_tree`),pf()(),Ba(21,`div`,14)(22,`h4`),LT(23,`BOM Shortage Engine`),pf(),Ba(24,`p`),LT(25,`Calculates exact component shortfalls across assembly orders.`),pf()()(),Ba(26,`div`,12)(27,`div`,15)(28,`mat-icon`),LT(29,`local_shipping`),pf()(),Ba(30,`div`,14)(31,`h4`),LT(32,`1-Click Auto-Procurement`),pf(),Ba(33,`p`),LT(34,`Generates targeted purchase orders directly from stock shortfalls.`),pf()()(),Ba(35,`div`,12)(36,`div`,16)(37,`mat-icon`),LT(38,`inventory`),pf()(),Ba(39,`div`,14)(40,`h4`),LT(41,`Real-Time Inventory Sync`),pf(),Ba(42,`p`),LT(43,`Goods receipt updates warehouse stock balances instantly.`),pf()()(),Ba(44,`div`,12)(45,`div`,17)(46,`mat-icon`),LT(47,`receipt_long`),pf()(),Ba(48,`div`,14)(49,`h4`),LT(50,`Corporate Tax Invoicing`),pf(),Ba(51,`p`),LT(52,`Full payment ledger reconciliation with balance tracking.`),pf()()()(),Ba(53,`div`,18)(54,`div`,19),tc(55,`span`,20),Ba(56,`span`),LT(57,`Spring Boot 4.1.1 & Oracle / MySQL API Ready`),pf()(),Ba(58,`span`,21),LT(59,`OrderCraft v1.0.0-PROD`),pf()()()(),Ba(60,`div`,22)(61,`div`,23)(62,`div`,24)(63,`h2`,25),LT(64,`Welcome to OrderCraft`),pf(),Ba(65,`p`,26),LT(66,`Sign in to manage manufacturing orders and supply chain`),pf()(),Ba(67,`div`,27)(68,`div`,28)(69,`mat-icon`),LT(70,`bolt`),pf(),Ba(71,`span`),LT(72,`1-Click Demo Profiles`),pf()(),Ba(73,`div`,29),KS(74,en,9,6,`button`,30,Jt),pf()(),Ba(76,`div`,31)(77,`span`),LT(78,`OR ENTER CREDENTIALS`),pf()(),GS(79,tn,5,1,`div`,32),Ba(80,`form`,33),nc(`ngSubmit`,function(){return t.onSubmit()}),Ba(81,`div`,34)(82,`label`,35),LT(83,`Username`),pf(),Ba(84,`div`,36)(85,`mat-icon`,37),LT(86,`person`),pf(),Ba(87,`input`,38),Ub(),pf()()(),Ba(88,`div`,34)(89,`label`,39),LT(90,`Password`),pf(),Ba(91,`div`,36)(92,`mat-icon`,37),LT(93,`lock`),pf(),Ba(94,`input`,40),Ub(),pf(),Ba(95,`button`,41),nc(`click`,function(){return t.hidePassword=!t.hidePassword}),Ba(96,`mat-icon`),LT(97),pf()()()(),Ba(98,`button`,42),GS(99,nn,3,0)(100,rn,4,0),pf()(),Ba(101,`div`,43)(102,`mat-icon`),LT(103,`verified_user`),pf(),Ba(104,`span`),LT(105,`Protected by Spring Security JWT & Role-Based Access Control`),pf()()()()()),e&2&&(ZC(74),QS(t.demoRoles),ZC(5),qS(t.errorMessage?79:-1),ZC(),Gy(`formGroup`,t.loginForm),ZC(7),Vb(),ZC(7),Gy(`type`,t.hidePassword?`password`:`text`),Vb(),ZC(3),dv(t.hidePassword?`visibility_off`:`visibility`),ZC(),Gy(`disabled`,t.loginForm.invalid||t.isLoading),ZC(),qS(t.isLoading?99:100))},dependencies:[oD,Hn,Gn,We,Tn,Pn,nn$2,cn,f,H,Et,ui,Ri,Fi,$i,Ki],styles:[`.login-page-container[_ngcontent-%COMP%]{display:flex;min-height:100vh;width:100%;background:var(--%NS%bg-primary);font-family:var(--%NS%font-primary)}.hero-showcase[_ngcontent-%COMP%]{flex:1.1;background:linear-gradient(135deg,#090d16,#0f172a,#1e1b4b);border-right:1px solid rgba(255,255,255,.08);padding:56px 64px;display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}.hero-showcase[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-20%;left:-20%;width:600px;height:600px;background:radial-gradient(circle,rgba(99,102,241,.15) 0%,transparent 70%);pointer-events:none}.hero-showcase[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-15%;right:-10%;width:500px;height:500px;background:radial-gradient(circle,rgba(14,165,233,.12) 0%,transparent 70%);pointer-events:none}.hero-content[_ngcontent-%COMP%]{position:relative;z-index:1;max-width:580px;display:flex;flex-direction:column;gap:36px}.brand-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px}.brand-icon[_ngcontent-%COMP%]{font-size:38px;width:38px;height:38px;color:#818cf8}.brand-title-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column}.brand-name[_ngcontent-%COMP%]{font-size:26px;font-weight:800;letter-spacing:-.5px;color:#fff;background:linear-gradient(135deg,#fff 30%,#a5b4fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.brand-sub[_ngcontent-%COMP%]{font-size:13px;color:#94a3b8;font-weight:500;letter-spacing:.3px}.hero-headline-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.hero-title[_ngcontent-%COMP%]{font-size:34px;font-weight:800;line-height:1.25;color:#f8fafc;letter-spacing:-.7px;margin:0}.hero-description[_ngcontent-%COMP%]{font-size:15px;line-height:1.6;color:#94a3b8;margin:0}.feature-pills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.feature-card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:14px;padding:16px;background:#1e293b73;border:1px solid rgba(255,255,255,.08);border-radius:12px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);transition:all .2s ease}.feature-card[_ngcontent-%COMP%]:hover{background:#1e293bb3;border-color:#818cf84d;transform:translateY(-2px)}.feature-icon-box[_ngcontent-%COMP%]{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.feature-icon-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.feature-icon-box.blue[_ngcontent-%COMP%]{background:#0ea5e926;color:#38bdf8}.feature-icon-box.green[_ngcontent-%COMP%]{background:#10b98126;color:#34d399}.feature-icon-box.amber[_ngcontent-%COMP%]{background:#f59e0b26;color:#fbbf24}.feature-icon-box.purple[_ngcontent-%COMP%]{background:#a855f726;color:#c084fc}.feature-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 4px;font-size:13.5px;font-weight:700;color:#e2e8f0}.feature-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px;color:#94a3b8;line-height:1.4}.hero-footer-status[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-top:20px;border-top:1px solid rgba(255,255,255,.08)}.status-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:12.5px;color:#94a3b8;font-weight:500}.status-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 10px #10b981cc;animation:_ngcontent-%COMP%_pulse-dot 2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_pulse-dot{0%,to{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(1.2)}}.version-label[_ngcontent-%COMP%]{font-size:12px;font-family:var(--%NS%font-mono);color:#64748b}.auth-form-wrapper[_ngcontent-%COMP%]{flex:.9;display:flex;align-items:center;justify-content:center;padding:48px;background:var(--%NS%bg-primary)}.form-container[_ngcontent-%COMP%]{width:100%;max-width:440px;display:flex;flex-direction:column;gap:24px}.form-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.form-title[_ngcontent-%COMP%]{margin:0;font-size:26px;font-weight:800;color:var(--%NS%text-primary);letter-spacing:-.5px}.form-subtitle[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--%NS%text-secondary)}.demo-login-box[_ngcontent-%COMP%]{background:var(--%NS%bg-secondary);border:1px solid var(--%NS%border-color);border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:12px}.demo-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;font-size:12.5px;font-weight:700;color:var(--%NS%text-secondary);text-transform:uppercase;letter-spacing:.6px}.demo-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:#f59e0b}.demo-buttons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.demo-role-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--%NS%bg-card);border:1px solid var(--%NS%border-color);border-radius:8px;cursor:pointer;text-align:left;transition:all .2s ease}.demo-role-btn[_ngcontent-%COMP%]:hover:not(:disabled){border-color:var(--%NS%primary);background:#6366f10f;transform:translateY(-1px)}.demo-btn-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px}.demo-btn-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.demo-btn-role[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:var(--%NS%text-primary)}.demo-btn-label[_ngcontent-%COMP%]{font-size:11px;color:var(--%NS%text-muted)}.divider-with-text[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;color:var(--%NS%text-muted);font-size:11px;font-weight:700;letter-spacing:.8px}.divider-with-text[_ngcontent-%COMP%]:before, .divider-with-text[_ngcontent-%COMP%]:after{content:"";flex:1;height:1px;background:var(--%NS%border-color)}.error-banner[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;background:#ef44441a;border:1px solid rgba(239,68,68,.3);color:#ef4444;padding:12px 14px;border-radius:8px;font-size:13.5px;font-weight:500}.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;flex-shrink:0}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:18px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.input-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:var(--%NS%text-secondary)}.input-field-wrap[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.field-icon[_ngcontent-%COMP%]{position:absolute;left:14px;color:var(--%NS%text-muted);font-size:20px;width:20px;height:20px;pointer-events:none}.custom-input[_ngcontent-%COMP%]{width:100%;height:44px;padding:0 44px;border-radius:8px;border:1px solid var(--%NS%border-color);background:var(--%NS%bg-card);color:var(--%NS%text-primary);font-family:inherit;font-size:14px;outline:none;transition:all .2s ease}.custom-input[_ngcontent-%COMP%]:focus{border-color:var(--%NS%primary);box-shadow:0 0 0 3px #6366f126}.toggle-visibility-btn[_ngcontent-%COMP%]{position:absolute;right:10px;background:none;border:none;color:var(--%NS%text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:6px;border-radius:6px}.toggle-visibility-btn[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary);background:#0000000d}.submit-button[_ngcontent-%COMP%]{height:46px;border-radius:8px;border:none;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;font-size:14.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:all .2s ease;box-shadow:0 4px 12px #4f46e559;margin-top:8px}.submit-button[_ngcontent-%COMP%]:hover:not(:disabled){background:linear-gradient(135deg,#4338ca,#4f46e5);transform:translateY(-1px);box-shadow:0 6px 16px #4f46e573}.submit-button[_ngcontent-%COMP%]:disabled{opacity:.55;cursor:not-allowed;box-shadow:none}.spinner[_ngcontent-%COMP%]{margin-right:6px}.security-notice[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;color:var(--%NS%text-muted);text-align:center}.security-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:#10b981}@media(max-width:1024px){.hero-showcase[_ngcontent-%COMP%]{display:none}.auth-form-wrapper[_ngcontent-%COMP%]{flex:1;padding:24px}}`]})};export{Rt as LoginComponent};