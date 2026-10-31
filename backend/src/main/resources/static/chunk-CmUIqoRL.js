import{A as KS,B as O,Bn as uf,C as Hy,Cn as qn,Dn as rc,Dt as cT,En as rT,F as Le,Ft as eI,H as Q,Hn as vf,Ht as g,In as tv,It as e_,J as Ro,Kt as hT,Lt as ec,Mt as dT,Nn as tc,O as Jo,P as LT,Pt as dv,Qt as io,Rt as ee,Sn as qh,St as ao,Tt as bt,U as QS,Un as w$,Ut as gf,Wn as wr,Xt as ic,_t as Zy,at as WS,b as Gy,c as CE,dn as nc,en as iv,et as T$,f as E,fn as nn$1,h as Eu,ht as ZC,i as Ba,it as W$1,jt as dM,k as Jy,kn as sI,kt as ce,l as Cn,m as Ef,mn as oD,n as $p,nt as Ub,q as Rl,qt as hf,rn as lT,rt as Vb,tt as Tt$1,u as Df,ut as Y,v as GS,vn as pT,w as I$,wn as qy,xn as qT,xt as ae,y as Gh,yn as pf,yt as aI,zt as ev}from"./main-256ZZPJN.js";import{S as gr,c as Ki,d as Ri,g as Xt$1,h as Xn,i as Fi,j as y,k as ui,m as X,n as B,t as $i,y as an$1}from"./chunk-BFjEDXLN.js";import{a as Ln,c as Tn,f as cn$1,g as nn$2,i as Hn,m as kn,n as Ct$1,p as fe,r as Gn,s as Pn,t as Bn,u as We}from"./chunk-BUibdDQY.js";import{t as f}from"./chunk-DMKC-Zaz.js";var vt=Symbol(`FIELD_TREE`);function K(t){return typeof t==`function`&&t[vt]===!0}var ve=class{_box;_destroyed=new Q;_resizeSubject=new Q;_resizeObserver;_elementObservables=new Map;constructor(l){this._box=l,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(l){return this._elementObservables.has(l)||this._elementObservables.set(l,new O(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(l,{box:this._box}),()=>{this._resizeObserver?.unobserve(l),n.unsubscribe(),this._elementObservables.delete(l)}}).pipe(Le(e=>e.some(n=>n.target===l)),aI({bufferSize:1,refCount:!0}),Ro(this._destroyed))),this._elementObservables.get(l)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var yt=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=g(ee);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let a=n?.box||`content-box`;return this._observers.has(a)||this._observers.set(a,new ve(a)),this._observers.get(a).observe(e)}static ɵfac=function(n){return new(n||t)};static ɵprov=Y({token:t,factory:t.ɵfac})}return t})();var _e=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=Tt$1({type:t,selectors:[[`mat-label`]]})}return t})();var $t=new E(`MatError`);var ye=(()=>{class t{align=`start`;id=g(Xt$1).getId(`mat-mdc-hint-`);static ɵfac=function(n){return new(n||t)};static ɵdir=Tt$1({type:t,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(n,a){n&2&&(Zy(`id`,a.id),ec(`align`,null),iv(`mat-mdc-form-field-hint-end`,a.align===`end`))},inputs:{align:`align`,id:`id`}})}return t})();var Zt=new E(`MatPrefix`);var Yt=new E(`MatSuffix`);var Et=new E(`FloatingLabelParent`);var St=(()=>{class t{_elementRef=g(bt);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(yt);_ngZone=g(ee);_parent=g(Et);_resizeSubscription=new ce;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Qt(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(n){return new(n||t)};static ɵdir=Tt$1({type:t,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(n,a){n&2&&iv(`mdc-floating-label--float-above`,a.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return t})();function Qt(t){let l=t;if(l.offsetParent!==null)return l.scrollWidth;let e=l.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var wt=`mdc-line-ripple--active`;var ne=`mdc-line-ripple--deactivating`;var Ct=(()=>{class t{_elementRef=g(bt);_cleanupTransitionEnd;constructor(){let e=g(ee),n=g(Cn);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ne),e.add(wt)}deactivate(){this._elementRef.nativeElement.classList.add(ne)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,a=n.contains(ne);e.propertyName===`opacity`&&a&&n.remove(wt,ne)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(n){return new(n||t)};static ɵdir=Tt$1({type:t,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return t})();var Nt=(()=>{class t{_elementRef=g(bt);_ngZone=g(ee);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(`.mdc-floating-label`);n?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(n.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width=``:n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`notch`];return uf({type:t,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(g,v){if(g&1&&Jy(e,5),g&2){let C;vf(C=Df())&&(v._notch=C.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(g,v){g&2&&iv(`mdc-notched-outline--notched`,v.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(g,v){g&1&&(lT(),qy(0,`div`,1),hf(1,`div`,2,0),dT(3),gf(),qy(4,`div`,3))},encapsulation:2})})()}return t})();var Xt=(()=>{class t{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(n){return new(n||t)};static ɵdir=Tt$1({type:t})}return t})();var Jt=new E(`MatFormField`);var en=new E(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Mt=`fill`;var tn=`auto`;var Ft=`fixed`;var nn=`translateY(-50%)`;var Tt=(()=>{class t{_elementRef=g(bt);_changeDetectorRef=g(ao);_platform=g(y);_idGenerator=g(Xt$1);_ngZone=g(ee);_defaults=g(en,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Jo(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=I$(`iconPrefixContainer`);_textPrefixContainerSignal=I$(`textPrefixContainer`);_iconSuffixContainerSignal=I$(`iconSuffixContainer`);_textSuffixContainerSignal=I$(`textSuffixContainer`);_prefixSuffixContainers=ic(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=w$(_e);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=gr(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||tn}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Mt;this._appearanceSignal.set(n)}_appearanceSignal=ae(Mt);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ft}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ft}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Q;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=X();constructor(){let e=this._defaults,n=g(Xn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Rl(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=K(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!K(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ic(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let n=this._control,a=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(a+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges?.pipe(Eu([void 0,void 0]),W$1(()=>[this._unwrapMaybeSignal(n.errorState),n.userAriaDescribedBy]),sI(),Le(([[g,v],[C,H]])=>g!==C||v!==H)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&!K(n.ngField)&&(this._valueChanges=n.ngControl.valueChanges.pipe(Ro(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),eI(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){T$({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ic(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let n=this._control?.ngField||this._control?.ngControl;if(!n)return!1;if(K(n)){let a=n();return e===`valid`?a.valid():e===`dirty`?a.dirty():e===`touched`?a.touched():e===`pending`?a.pending():e===`untouched`?!a.touched():e===`pristine`?!a.dirty():e===`invalid`?!a.valid():!1}else{let a=n;return e===`valid`?a.valid:e===`dirty`?a.dirty:e===`touched`?a.touched:e===`pending`?a.pending:e===`untouched`?a.untouched:e===`pristine`?a.pristine:e===`invalid`?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let g=this._hintChildren?this._hintChildren.find(C=>C.align===`start`):null,v=this._hintChildren?this._hintChildren.find(C=>C.align===`end`):null;g?e.push(g.id):this._hintLabel&&e.push(this._hintLabelId),v&&e.push(v.id)}else this._errorChildren&&e.push(...this._errorChildren.map(g=>g.id));let n=this._control.describedByIds,a;if(n){let g=this._describedByIds||e;a=e.concat(n.filter(v=>v&&!g.includes(v)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,g=this._textSuffixContainer?.nativeElement,v=e?.getBoundingClientRect().width??0,C=n?.getBoundingClientRect().width??0,H=a?.getBoundingClientRect().width??0,ie=g?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${nn} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${v+C}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,v+C+H+ie]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static ɵfac=function(n){return new(n||t)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],n=[`textPrefixContainer`],a=[`iconSuffixContainer`],g=[`textSuffixContainer`],v=[`textField`],C=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],H=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function ie(c,m){c&1&&tc(0,`span`,21)}function re(c,m){if(c&1&&(Ba(0,`label`,20),dT(1,1),GS(2,ie,1,0,`span`,21),pf()),c&2){let i=cT(2);Gy(`floating`,i._shouldLabelFloat())(`monitorResize`,i._hasOutline())(`id`,i._labelId),ec(`for`,i._control.disableAutomaticLabeling?null:i._control.id),ZC(2),WS(!i.hideRequiredMarker&&i._unwrapMaybeSignal(i._control.required)?2:-1)}}function oe(c,m){if(c&1&&GS(0,re,3,5,`label`,20),c&2){let i=cT();WS(i._hasFloatingLabel()?0:-1)}}function Se(c,m){c&1&&tc(0,`div`,7)}function ae(c,m){}function le(c,m){if(c&1&&Hy(0,ae,0,0,`ng-template`,13),c&2){cT(2);let i=hT(1);Gy(`ngTemplateOutlet`,i)}}function de(c,m){if(c&1&&(Ba(0,`div`,9),GS(1,le,1,1,null,13),pf()),c&2){let i=cT();Gy(`matFormFieldNotchedOutlineOpen`,i._shouldLabelFloat()),ZC(),WS(i._forceDisplayInfixLabel()?-1:1)}}function At(c,m){c&1&&(Ba(0,`div`,10,2),dT(2,2),pf())}function Dt(c,m){c&1&&(Ba(0,`div`,11,3),dT(2,3),pf())}function Ot(c,m){}function Lt(c,m){if(c&1&&Hy(0,Ot,0,0,`ng-template`,13),c&2){cT();let i=hT(1);Gy(`ngTemplateOutlet`,i)}}function zt(c,m){c&1&&(Ba(0,`div`,14,4),dT(2,4),pf())}function Vt(c,m){c&1&&(Ba(0,`div`,15,5),dT(2,5),pf())}function Bt(c,m){c&1&&tc(0,`div`,16)}function Ht(c,m){c&1&&(Ba(0,`div`,18),dT(1,6),pf())}function jt(c,m){if(c&1&&(Ba(0,`mat-hint`,22),LT(1),pf()),c&2){let i=cT(2);Gy(`id`,i._hintLabelId),ZC(),dv(i.hintLabel)}}function qt(c,m){if(c&1&&(Ba(0,`div`,19),GS(1,jt,2,2,`mat-hint`,22),dT(2,7),tc(3,`div`,23),dT(4,8),pf()),c&2){let i=cT();ZC(),WS(i.hintLabel?1:-1)}}return uf({type:t,selectors:[[`mat-form-field`]],contentQueries:function(m,i,f){if(m&1&&(ev(f,i._labelChild,_e,5),rc(f,Xt,5)(f,Zt,5)(f,Yt,5)(f,$t,5)(f,ye,5)),m&2){pT();let y;vf(y=Df())&&(i._formFieldControl=y.first),vf(y=Df())&&(i._prefixChildren=y),vf(y=Df())&&(i._suffixChildren=y),vf(y=Df())&&(i._errorChildren=y),vf(y=Df())&&(i._hintChildren=y)}},viewQuery:function(m,i){if(m&1&&(tv(i._iconPrefixContainerSignal,e,5)(i._textPrefixContainerSignal,n,5)(i._iconSuffixContainerSignal,a,5)(i._textSuffixContainerSignal,g,5),Jy(v,5)(e,5)(n,5)(a,5)(g,5)(St,5)(Nt,5)(Ct,5)),m&2){pT(4);let f;vf(f=Df())&&(i._textField=f.first),vf(f=Df())&&(i._iconPrefixContainer=f.first),vf(f=Df())&&(i._textPrefixContainer=f.first),vf(f=Df())&&(i._iconSuffixContainer=f.first),vf(f=Df())&&(i._textSuffixContainer=f.first),vf(f=Df())&&(i._floatingLabel=f.first),vf(f=Df())&&(i._notchedOutline=f.first),vf(f=Df())&&(i._lineRipple=f.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(m,i){m&2&&iv(`mat-mdc-form-field-label-always-float`,i._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,i._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,i._hasIconSuffix)(`mat-form-field-invalid`,i._unwrapMaybeSignal(i._control.errorState))(`mat-form-field-disabled`,i._unwrapMaybeSignal(i._control.disabled))(`mat-form-field-autofilled`,i._unwrapMaybeSignal(i._control.autofilled))(`mat-form-field-appearance-fill`,i.appearance==`fill`)(`mat-form-field-appearance-outline`,i.appearance==`outline`)(`mat-form-field-hide-placeholder`,i._hasFloatingLabel()&&!i._shouldLabelFloat())(`mat-primary`,i.color!==`accent`&&i.color!==`warn`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`ng-untouched`,i._shouldForward(`untouched`))(`ng-touched`,i._shouldForward(`touched`))(`ng-pristine`,i._shouldForward(`pristine`))(`ng-dirty`,i._shouldForward(`dirty`))(`ng-valid`,i._shouldForward(`valid`))(`ng-invalid`,i._shouldForward(`invalid`))(`ng-pending`,i._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[qT([{provide:Jt,useExisting:t},{provide:Et,useExisting:t}])],ngContentSelectors:H,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(m,i){if(m&1&&(lT(C),Hy(0,oe,1,1,`ng-template`,null,0,e_),Ba(2,`div`,6,1),nc(`click`,function(y){return i._control.onContainerClick(y)}),GS(4,Se,1,0,`div`,7),Ba(5,`div`,8),GS(6,de,2,2,`div`,9),GS(7,At,3,0,`div`,10),GS(8,Dt,3,0,`div`,11),Ba(9,`div`,12),GS(10,Lt,1,1,null,13),dT(11),pf(),GS(12,zt,3,0,`div`,14),GS(13,Vt,3,0,`div`,15),pf(),GS(14,Bt,1,0,`div`,16),pf(),Ba(15,`div`,17),GS(16,Ht,2,0,`div`,18)(17,qt,5,1,`div`,19),pf()),m&2){let f,y=i._unwrapMaybeSignal(i._control.disabled);ZC(2),iv(`mdc-text-field--filled`,!i._hasOutline())(`mdc-text-field--outlined`,i._hasOutline())(`mdc-text-field--no-label`,!i._hasFloatingLabel())(`mdc-text-field--disabled`,y)(`mdc-text-field--invalid`,i._unwrapMaybeSignal(i._control.errorState)),ZC(2),WS(!i._hasOutline()&&!y?4:-1),ZC(2),WS(i._hasOutline()?6:-1),ZC(),WS(i._hasIconPrefix?7:-1),ZC(),WS(i._hasTextPrefix?8:-1),ZC(2),WS(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),ZC(2),WS(i._hasTextSuffix?12:-1),ZC(),WS(i._hasIconSuffix?13:-1),ZC(),WS(i._hasOutline()?-1:14),ZC(),iv(`mat-mdc-form-field-subscript-dynamic-size`,i.subscriptSizing===`dynamic`);let Ut=i._getSubscriptMessageType();ZC(),WS((f=Ut)===`error`?16:f===`hint`?17:-1)}},dependencies:[St,Nt,dM,Ct,ye],styles:[`.mdc-text-field {
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
`],encapsulation:2})})()}return t})();var W=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=io({type:t});static ɵinj=qn({imports:[an$1,Tt,B]})}return t})();var kt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=io({type:t});static ɵinj=qn({})}return t})();var Rt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=io({type:t});static ɵinj=qn({imports:[W,W,kt,B]})}return t})();var It={production:!1,apiUrl:``};var rn=(t,l)=>l.role;function on(t,l){if(t&1&&(Ba(0,`div`,7)(1,`mat-icon`,11),LT(2,`warning`),pf(),Ba(3,`span`,12),LT(4),pf()()),t&2){let e=cT();ZC(4),dv(e.errorMessage)}}function an(t,l){if(t&1&&(Ba(0,`div`,8)(1,`mat-icon`,11),LT(2,`check_circle`),pf(),Ba(3,`span`,12),LT(4),pf()()),t&2){let e=cT();ZC(4),dv(e.successMessage)}}function ln(t,l){t&1&&(Ba(0,`div`,19)(1,`mat-icon`,25),LT(2,`error_outline`),pf(),Ba(3,`span`),LT(4,`Username or email is required.`),pf()())}function dn(t,l){t&1&&(Ba(0,`div`,23)(1,`mat-icon`,25),LT(2,`error_outline`),pf(),Ba(3,`span`),LT(4,`Password is required.`),pf()())}function sn(t,l){t&1&&(tc(0,`mat-spinner`,26),Ba(1,`span`),LT(2,`Signing in...`),pf())}function cn(t,l){t&1&&(Ba(0,`span`),LT(1,`Sign In`),pf())}function mn(t,l){if(t&1){let e=rT();Ba(0,`form`,13),nc(`ngSubmit`,function(){Gh(e);let a=cT();return qh(a.onSubmit())}),Ba(1,`div`,14)(2,`label`,15),LT(3,`Username or email`),pf(),Ba(4,`div`,16)(5,`mat-icon`,17),LT(6,`person`),pf(),Ba(7,`input`,18),Ub(),pf()(),GS(8,ln,5,0,`div`,19),pf(),Ba(9,`div`,14)(10,`label`,20),LT(11,`Password`),pf(),Ba(12,`div`,16)(13,`mat-icon`,17),LT(14,`lock`),pf(),Ba(15,`input`,21),Ub(),pf(),Ba(16,`button`,22),nc(`click`,function(){Gh(e);let a=cT();return qh(a.togglePasswordVisibility())}),Ba(17,`mat-icon`),LT(18),pf()()(),GS(19,dn,5,0,`div`,23),pf(),Ba(20,`button`,24),GS(21,sn,3,0)(22,cn,2,0,`span`),pf()()}if(t&2){let e=cT();Gy(`formGroup`,e.loginForm),ZC(4),iv(`field-error`,e.isFieldInvalid(`username`)),ZC(3),iv(`input-invalid`,e.isFieldInvalid(`username`)),Vb(),ZC(),WS(e.isFieldInvalid(`username`)?8:-1),ZC(4),iv(`field-error`,e.isFieldInvalid(`password`)),ZC(3),iv(`input-invalid`,e.isFieldInvalid(`password`)),Gy(`type`,e.hidePassword?`password`:`text`),Vb(),ZC(),Gy(`title`,e.hidePassword?`Show password`:`Hide password`),ec(`aria-label`,e.hidePassword?`Show password`:`Hide password`),ZC(2),dv(e.hidePassword?`visibility_off`:`visibility`),ZC(),WS(e.isFieldInvalid(`password`)?19:-1),ZC(),Gy(`disabled`,e.loginForm.invalid||e.isLoading),ZC(),WS(e.isLoading?21:22)}}function fn(t,l){t&1&&(Ba(0,`div`,29)(1,`mat-icon`,25),LT(2,`error_outline`),pf(),Ba(3,`span`),LT(4,`Username is required (at least 3 characters).`),pf()())}function un(t,l){t&1&&(Ba(0,`div`,32)(1,`mat-icon`,25),LT(2,`error_outline`),pf(),Ba(3,`span`),LT(4,`Password is required (minimum 6 characters).`),pf()())}function pn(t,l){t&1&&(Ba(0,`div`,35)(1,`mat-icon`,25),LT(2,`error_outline`),pf(),Ba(3,`span`),LT(4,`Please confirm your password.`),pf()())}function hn(t,l){t&1&&(tc(0,`mat-spinner`,26),Ba(1,`span`),LT(2,`Creating account...`),pf())}function gn(t,l){t&1&&(Ba(0,`span`),LT(1,`Sign Up`),pf())}function bn(t,l){if(t&1){let e=rT();Ba(0,`form`,13),nc(`ngSubmit`,function(){Gh(e);let a=cT();return qh(a.onSignupSubmit())}),Ba(1,`div`,14)(2,`label`,27),LT(3,`Username`),pf(),Ba(4,`div`,16)(5,`mat-icon`,17),LT(6,`person`),pf(),Ba(7,`input`,28),Ub(),pf()(),GS(8,fn,5,0,`div`,29),pf(),Ba(9,`div`,14)(10,`label`,30),LT(11,`Password`),pf(),Ba(12,`div`,16)(13,`mat-icon`,17),LT(14,`lock`),pf(),Ba(15,`input`,31),Ub(),pf(),Ba(16,`button`,22),nc(`click`,function(){Gh(e);let a=cT();return qh(a.toggleSignupPasswordVisibility())}),Ba(17,`mat-icon`),LT(18),pf()()(),GS(19,un,5,0,`div`,32),pf(),Ba(20,`div`,14)(21,`label`,33),LT(22,`Confirm Password`),pf(),Ba(23,`div`,16)(24,`mat-icon`,17),LT(25,`lock_outline`),pf(),Ba(26,`input`,34),Ub(),pf(),Ba(27,`button`,22),nc(`click`,function(){Gh(e);let a=cT();return qh(a.toggleSignupConfirmPasswordVisibility())}),Ba(28,`mat-icon`),LT(29),pf()()(),GS(30,pn,5,0,`div`,35),pf(),Ba(31,`div`,14)(32,`label`,36),LT(33,`Department / Role`),pf(),Ba(34,`div`,16)(35,`mat-icon`,17),LT(36,`badge`),pf(),Ba(37,`select`,37),Ub(),Ba(38,`option`,38),LT(39,`Sales`),pf(),Ba(40,`option`,39),LT(41,`Purchase`),pf(),Ba(42,`option`,40),LT(43,`Accounts`),pf(),Ba(44,`option`,41),LT(45,`Admin`),pf()()()(),Ba(46,`button`,24),GS(47,hn,3,0)(48,gn,2,0,`span`),pf()()}if(t&2){let e=cT();Gy(`formGroup`,e.signupForm),ZC(4),iv(`field-error`,e.isSignupFieldInvalid(`username`)),ZC(3),iv(`input-invalid`,e.isSignupFieldInvalid(`username`)),Vb(),ZC(),WS(e.isSignupFieldInvalid(`username`)?8:-1),ZC(4),iv(`field-error`,e.isSignupFieldInvalid(`password`)),ZC(3),iv(`input-invalid`,e.isSignupFieldInvalid(`password`)),Gy(`type`,e.hideSignupPassword?`password`:`text`),Vb(),ZC(),Gy(`title`,e.hideSignupPassword?`Show password`:`Hide password`),ec(`aria-label`,e.hideSignupPassword?`Show password`:`Hide password`),ZC(2),dv(e.hideSignupPassword?`visibility_off`:`visibility`),ZC(),WS(e.isSignupFieldInvalid(`password`)?19:-1),ZC(4),iv(`field-error`,e.isSignupFieldInvalid(`confirmPassword`)),ZC(3),iv(`input-invalid`,e.isSignupFieldInvalid(`confirmPassword`)),Gy(`type`,e.hideSignupConfirmPassword?`password`:`text`),Vb(),ZC(),Gy(`title`,e.hideSignupConfirmPassword?`Show password`:`Hide password`),ec(`aria-label`,e.hideSignupConfirmPassword?`Show password`:`Hide password`),ZC(2),dv(e.hideSignupConfirmPassword?`visibility_off`:`visibility`),ZC(),WS(e.isSignupFieldInvalid(`confirmPassword`)?30:-1),ZC(7),Vb(),ZC(9),Gy(`disabled`,e.signupForm.invalid||e.isLoading),ZC(),WS(e.isLoading?47:48)}}function xn(t,l){if(t&1){let e=rT();Ba(0,`button`,45),nc(`click`,function(){let a=Gh(e).$implicit,g=cT(2);return qh(g.quickLogin(a.user,a.pass))}),LT(1),pf()}if(t&2){let e=l.$implicit;ZC(),Ef(` `,e.label,` `)}}function vn(t,l){if(t&1&&(Ba(0,`div`,10)(1,`span`,42),LT(2,`Dev test login:`),pf(),Ba(3,`div`,43),KS(4,xn,2,1,`button`,44,rn),pf()()),t&2){let e=cT();ZC(4),QS(e.demoRoles)}}var Pt=class t{fb=g(Bn);authService=g(CE);router=g(wr);route=g(nn$1);cdr=g(ao);ngZone=g(ee);activeTab=`signin`;isProduction=It.production;loginForm=this.fb.nonNullable.group({username:[``,[fe.required]],password:[``,[fe.required]]});signupForm=this.fb.nonNullable.group({username:[``,[fe.required,fe.minLength(3)]],password:[``,[fe.required,fe.minLength(6)]],confirmPassword:[``,[fe.required]],role:[`SALES`,[fe.required]]});isLoading=!1;isSubmitted=!1;isSignupSubmitted=!1;errorMessage=``;successMessage=``;hidePassword=!0;hideSignupPassword=!0;hideSignupConfirmPassword=!0;returnUrl=`/dashboard`;demoRoles=[{role:`ADMIN`,label:`Admin`,user:`admin`,pass:`Admin@123`},{role:`SALES`,label:`Sales`,user:`sales`,pass:`Sales@123`},{role:`PURCHASE`,label:`Purchase`,user:`purchase`,pass:`Purchase@123`},{role:`ACCOUNTS`,label:`Accounts`,user:`accounts`,pass:`Accounts@123`}];ngOnInit(){if(this.authService.isLoggedIn()){this.router.navigate([`/dashboard`]);return}this.returnUrl=this.route.snapshot?.queryParams?.returnUrl||`/dashboard`,(this.route.snapshot?.queryParams?.tab===`signup`||this.route.snapshot?.routeConfig?.path===`register`)&&(this.activeTab=`signup`)}setTab(l){this.activeTab=l,this.errorMessage=``,this.successMessage=``,this.isSubmitted=!1,this.isSignupSubmitted=!1}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}toggleSignupPasswordVisibility(){this.hideSignupPassword=!this.hideSignupPassword}toggleSignupConfirmPasswordVisibility(){this.hideSignupConfirmPassword=!this.hideSignupConfirmPassword}isFieldInvalid(l){let e=this.loginForm.get(l);return!!(e&&e.invalid&&(e.touched||e.dirty||this.isSubmitted))}isSignupFieldInvalid(l){let e=this.signupForm.get(l);return!!(e&&e.invalid&&(e.touched||e.dirty||this.isSignupSubmitted))}quickLogin(l,e){this.activeTab=`signin`,this.loginForm.setValue({username:l,password:e}),this.onSubmit()}onSubmit(){if(this.isSubmitted=!0,this.loginForm.invalid){this.loginForm.markAllAsTouched();return}this.isLoading=!0,this.errorMessage=``,this.successMessage=``,this.authService.login(this.loginForm.getRawValue()).pipe($p(5e3)).subscribe({next:l=>{this.ngZone.run(()=>{this.isLoading=!1,this.cdr.detectChanges();let e=this.returnUrl&&this.returnUrl!==`/login`&&this.returnUrl!==`/register`?this.returnUrl:`/dashboard`;this.router.navigateByUrl(e)})},error:l=>{this.ngZone.run(()=>{this.isLoading=!1,l.name===`TimeoutError`?this.errorMessage=`Login timed out. Please try again.`:l.status===401?this.errorMessage=`Invalid username or password.`:l.status===0?this.errorMessage=`Server is currently unavailable. Please try again later.`:this.errorMessage=`Login failed. Please verify credentials.`,this.cdr.detectChanges()})}})}onSignupSubmit(){if(this.isSignupSubmitted=!0,this.signupForm.invalid){this.signupForm.markAllAsTouched();return}let l=this.signupForm.getRawValue();if(l.password!==l.confirmPassword){this.errorMessage=`Passwords do not match.`;return}this.isLoading=!0,this.errorMessage=``,this.successMessage=``,this.authService.register({username:l.username.trim(),password:l.password,role:l.role}).pipe($p(5e3)).subscribe({next:()=>{this.ngZone.run(()=>{this.isLoading=!1,this.successMessage=`Account created successfully. Please sign in.`,this.loginForm.patchValue({username:l.username.trim()}),this.signupForm.reset({role:`SALES`}),this.setTab(`signin`),this.cdr.detectChanges()})},error:e=>{this.ngZone.run(()=>{this.isLoading=!1,e.status===409?this.errorMessage=`Username already exists. Please choose a different username.`:e.status===404||e.status===405||e.status===403||e.status===401?this.errorMessage=`User registration is managed by administrators. Please contact your admin or sign in.`:e.status===0?this.errorMessage=`Server is currently unavailable. Please try again later.`:this.errorMessage=e?.error?.message||`Registration failed. Please try again.`,this.cdr.detectChanges()})}})}static ɵfac=function(e){return new(e||t)};static ɵcmp=uf({type:t,selectors:[[`app-login`]],decls:18,vars:11,consts:[[1,`auth-page-container`],[1,`auth-card`],[1,`brand-header`],[1,`brand-logo-icon`],[1,`brand-title`],[`role`,`tablist`,`aria-label`,`Authentication Options`,1,`auth-tabs`],[`type`,`button`,`role`,`tab`,1,`auth-tab`,3,`click`],[`role`,`alert`,`aria-live`,`assertive`,1,`feedback-banner`,`error`],[`role`,`status`,`aria-live`,`polite`,1,`feedback-banner`,`success`],[`novalidate`,``,1,`auth-form`,3,`formGroup`],[1,`dev-quick-fill`],[1,`banner-icon`],[1,`banner-text`],[`novalidate`,``,1,`auth-form`,3,`ngSubmit`,`formGroup`],[1,`form-field`],[`for`,`signin-username`,1,`field-label`],[1,`input-container`],[1,`field-prefix-icon`],[`id`,`signin-username`,`type`,`text`,`formControlName`,`username`,`placeholder`,`Enter username or email`,`autocomplete`,`username`,`aria-describedby`,`username-error-msg`,1,`field-input`],[`id`,`username-error-msg`,`role`,`alert`,1,`inline-error-msg`],[`for`,`signin-password`,1,`field-label`],[`id`,`signin-password`,`formControlName`,`password`,`placeholder`,`Enter password`,`autocomplete`,`current-password`,`aria-describedby`,`password-error-msg`,1,`field-input`,`with-suffix`,3,`type`],[`type`,`button`,`tabindex`,`-1`,1,`field-suffix-btn`,3,`click`,`title`],[`id`,`password-error-msg`,`role`,`alert`,1,`inline-error-msg`],[`type`,`submit`,1,`auth-submit-btn`,3,`disabled`],[1,`inline-error-icon`],[`diameter`,`18`,1,`btn-spinner`],[`for`,`signup-username`,1,`field-label`],[`id`,`signup-username`,`type`,`text`,`formControlName`,`username`,`placeholder`,`Choose a username`,`autocomplete`,`username`,`aria-describedby`,`signup-username-error`,1,`field-input`],[`id`,`signup-username-error`,`role`,`alert`,1,`inline-error-msg`],[`for`,`signup-password`,1,`field-label`],[`id`,`signup-password`,`formControlName`,`password`,`placeholder`,`At least 6 characters`,`autocomplete`,`new-password`,`aria-describedby`,`signup-password-error`,1,`field-input`,`with-suffix`,3,`type`],[`id`,`signup-password-error`,`role`,`alert`,1,`inline-error-msg`],[`for`,`signup-confirm-password`,1,`field-label`],[`id`,`signup-confirm-password`,`formControlName`,`confirmPassword`,`placeholder`,`Re-enter password`,`autocomplete`,`new-password`,`aria-describedby`,`signup-confirm-error`,1,`field-input`,`with-suffix`,3,`type`],[`id`,`signup-confirm-error`,`role`,`alert`,1,`inline-error-msg`],[`for`,`signup-role`,1,`field-label`],[`id`,`signup-role`,`formControlName`,`role`,1,`field-input`,`field-select`],[`value`,`SALES`],[`value`,`PURCHASE`],[`value`,`ACCOUNTS`],[`value`,`ADMIN`],[1,`dev-label`],[1,`dev-links`],[`type`,`button`,1,`dev-btn`],[`type`,`button`,1,`dev-btn`,3,`click`]],template:function(e,n){e&1&&(Ba(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`mat-icon`),LT(5,`precision_manufacturing`),pf()(),Ba(6,`h1`,4),LT(7,`OrderCraft`),pf()(),Ba(8,`div`,5)(9,`button`,6),nc(`click`,function(){return n.setTab(`signin`)}),LT(10,` Sign In `),pf(),Ba(11,`button`,6),nc(`click`,function(){return n.setTab(`signup`)}),LT(12,` Sign Up `),pf()(),GS(13,on,5,1,`div`,7),GS(14,an,5,1,`div`,8),GS(15,mn,23,17,`form`,9),GS(16,bn,49,26,`form`,9),GS(17,vn,6,0,`div`,10),pf()()),e&2&&(ZC(9),iv(`active`,n.activeTab===`signin`),ec(`aria-selected`,n.activeTab===`signin`),ZC(2),iv(`active`,n.activeTab===`signup`),ec(`aria-selected`,n.activeTab===`signup`),ZC(2),WS(n.errorMessage?13:-1),ZC(),WS(n.successMessage?14:-1),ZC(),WS(n.activeTab===`signin`?15:-1),ZC(),WS(n.activeTab===`signup`?16:-1),ZC(),WS(n.isProduction?-1:17))},dependencies:[oD,Hn,Gn,kn,Ln,We,Ct$1,Tn,Pn,nn$2,cn$1,f,W,Rt,ui,Ri,Fi,$i,Ki],styles:[`[_nghost-%COMP%]{display:block;width:100%;min-height:100vh}.auth-page-container[_ngcontent-%COMP%]{min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;background-color:var(--%NS%bg-page, #F4F6F8);padding:32px 16px;box-sizing:border-box;font-family:var(--%NS%font-sans, "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)}.auth-card[_ngcontent-%COMP%]{width:100%;max-width:420px;background-color:var(--%NS%surface, #FFFFFF);border:1px solid var(--%NS%border, #E1E5EA);border-radius:var(--%NS%radius-md, 6px);box-shadow:0 1px 3px #0000000d;padding:32px 28px;box-sizing:border-box}.brand-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:24px;text-align:center}.brand-logo-icon[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:var(--%NS%radius-sm, 4px);background-color:#1f4e7914;color:var(--%NS%primary, #1F4E79);display:flex;align-items:center;justify-content:center;margin-bottom:10px}.brand-logo-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:26px;width:26px;height:26px}.brand-title[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--%NS%text-primary, #1F2937);margin:0;letter-spacing:-.01em;line-height:1.2}.auth-tabs[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--%NS%border, #E1E5EA);margin-bottom:20px}.auth-tab[_ngcontent-%COMP%]{flex:1;padding:10px 0;background:transparent;border:none;border-bottom:2px solid transparent;font-size:14px;font-weight:500;color:var(--%NS%text-secondary, #6B7280);cursor:pointer;transition:all .15s ease-in-out;text-align:center}.auth-tab[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary, #1F2937)}.auth-tab.active[_ngcontent-%COMP%]{color:var(--%NS%primary, #1F4E79);font-weight:600;border-bottom-color:var(--%NS%primary, #1F4E79)}.feedback-banner[_ngcontent-%COMP%]{padding:10px 14px;border-radius:var(--%NS%radius-sm, 4px);font-size:13px;line-height:1.4;display:flex;align-items:center;gap:8px;margin-bottom:16px;box-sizing:border-box}.feedback-banner.error[_ngcontent-%COMP%]{background-color:var(--%NS%danger-bg, #FEF2F2);border:1px solid var(--%NS%danger-border, #FCA5A5);color:var(--%NS%danger, #C62828)}.feedback-banner.success[_ngcontent-%COMP%]{background-color:var(--%NS%success-bg, #F0FDF4);border:1px solid var(--%NS%success-border, #86EFAC);color:var(--%NS%success, #2E7D32)}.banner-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;flex-shrink:0}.auth-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;width:100%}.form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;width:100%}.field-label[_ngcontent-%COMP%]{font-size:13px;font-weight:600;color:var(--%NS%text-primary, #1F2937);display:block}.input-container[_ngcontent-%COMP%]{position:relative;width:100%;display:flex;align-items:center;box-sizing:border-box}.field-prefix-icon[_ngcontent-%COMP%]{position:absolute;left:12px;font-size:18px;width:18px;height:18px;color:var(--%NS%text-secondary, #6B7280);pointer-events:none;display:flex;align-items:center;justify-content:center;z-index:1}.field-input[_ngcontent-%COMP%]{width:100%;height:40px;border:1px solid var(--%NS%border, #E1E5EA);border-radius:var(--%NS%radius-sm, 4px);background-color:#fff;font-size:14px;color:var(--%NS%text-primary, #1F2937);padding:0 14px 0 38px;box-sizing:border-box;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.field-input[_ngcontent-%COMP%]::placeholder{color:#9ca3af;font-size:13px}.field-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--%NS%primary, #1F4E79);box-shadow:0 0 0 2px #1f4e791f}.field-input.with-suffix[_ngcontent-%COMP%]{padding-right:38px}.field-input.input-invalid[_ngcontent-%COMP%]{border-color:var(--%NS%oc-danger, #C62828);background-color:#fffdfd}.field-input.input-invalid[_ngcontent-%COMP%]:focus{border-color:var(--%NS%oc-danger, #C62828);box-shadow:0 0 0 2px #c628281f}.inline-error-msg[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;color:var(--%NS%oc-danger, #C62828);font-size:12px;font-weight:500;line-height:1.3;margin-top:2px}.inline-error-icon[_ngcontent-%COMP%]{font-size:15px;width:15px;height:15px;flex-shrink:0;color:var(--%NS%oc-danger, #C62828)}.field-suffix-btn[_ngcontent-%COMP%]{position:absolute;right:8px;background:transparent;border:none;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--%NS%text-secondary, #6B7280);border-radius:4px;height:28px;width:28px;transition:color .15s ease}.field-suffix-btn[_ngcontent-%COMP%]:hover{color:var(--%NS%text-primary, #1F2937)}.field-suffix-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.field-select[_ngcontent-%COMP%]{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px;appearance:none;-webkit-appearance:none;-moz-appearance:none}.auth-submit-btn[_ngcontent-%COMP%]{width:100%;height:40px;background-color:var(--%NS%primary, #1F4E79);color:#fff;border:none;border-radius:var(--%NS%radius-sm, 4px);font-size:14px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:background-color .15s ease-in-out;margin-top:4px}.auth-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--%NS%primary-hover, #173B5C)}.auth-submit-btn[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed}.btn-spinner[_ngcontent-%COMP%]{display:inline-block}.dev-quick-fill[_ngcontent-%COMP%]{margin-top:24px;padding-top:16px;border-top:1px dashed var(--%NS%border, #E1E5EA);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}.dev-label[_ngcontent-%COMP%]{font-size:11px;color:var(--%NS%text-secondary, #6B7280);font-weight:500}.dev-links[_ngcontent-%COMP%]{display:flex;gap:6px}.dev-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid var(--%NS%border, #E1E5EA);border-radius:3px;font-size:11px;color:var(--%NS%primary, #1F4E79);padding:3px 8px;cursor:pointer;font-weight:500;transition:all .15s ease}.dev-btn[_ngcontent-%COMP%]:hover{background-color:#1f4e7914;border-color:var(--%NS%primary, #1F4E79)}@media(max-width:480px){.auth-card[_ngcontent-%COMP%]{padding:24px 20px;border:none;box-shadow:none;background:transparent}.auth-page-container[_ngcontent-%COMP%]{padding:16px 8px;background-color:#fff}}`]})};export{Pt as LoginComponent};