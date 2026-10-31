import{$ as Sn$1,$t as io,An as se,At as ce,B as O,Bn as uf,C as Hy,Cn as qS,Dt as cI,E as JE,Et as bt,F as Le,Gn as x,H as Q$1,Hn as vf,I as Ln$1,J as Ro,Jn as y$1,Jt as hf,K as Rc,L as Ma,Lt as e_,Mt as dM,Nn as tc,Nt as dT,O as Jo,On as re$1,Ot as cT,Pt as de,Q as Se,Qt as ig,R as Mr,Rn as uN,Rt as ec,Sn as q$1,St as ae$1,T as J,Tn as rI,Ut as g,V as P,W as Qo,Wt as gf,X as S$,Xt as iD,Y as S,Z as ST,Zn as yu,_n as ov,b as Gy,bn as pf,d as Du,dn as nI,dt as Y,f as E,ft as YI,g as Fe,gn as og,gt as ZC,h as Eu,i as Ba,in as lT,jn as st$1,jt as cr,k as Jy,kt as cc,l as Cn$1,ln as mu,lt as Xo,mn as nr$1,mt as Yy,nn as kt$1,ot as Wn$1,p as Ee,q as Rl,qt as hT,s as By,st as Wy,tn as iv,tt as Tt$1,u as Df,v as GS,xt as ac,yt as _$,z as Nr,zn as uc,zt as ee$1}from"./main-PVJZMVCA.js";function nt(n){return n.buttons===0||n.detail===0}function at(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var Wt;function $e(){if(Wt==null){let n=typeof document<`u`?document.head:null;Wt=!!(n&&(n.createShadowRoot||n.attachShadow))}return Wt}function Vt(n){if($e()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function k(n){if(n.composedPath)try{return n.composedPath()[0]}catch(o){}return n.target}var Kt;try{Kt=typeof Intl<`u`&&Intl.v8BreakIterator}catch(n){Kt=!1}var y=(()=>{class n{_platformId=g(nr$1);isBrowser=this._platformId?iD(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Kt)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var ot;function Ge(){if(ot==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>ot=!0}))}finally{ot=ot||!1}return ot}function q(n){return Ge()?n:!!n.capture}function Rn(n,o=0){return Ze(n)?Number(n):arguments.length===2?o:0}function Ze(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function L(n){return n instanceof bt?n.nativeElement:n}var Ye=new E(`cdk-input-modality-detector-options`);var qe={ignoreKeys:[18,17,224,91,16]};var Qe=650;var $t={passive:!0,capture:!0};var Xe=(()=>{class n{_platform=g(y);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new de(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=k(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Qe||(this._modality.next(nt(t)?`keyboard`:`mouse`),this._mostRecentTarget=k(t))};_onTouchstart=t=>{if(at(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=k(t)};constructor(){let t=g(ee$1),e=g(se),a=g(Ye,{optional:!0});if(this._options=y$1(y$1({},qe),a),this.modalityDetected=this._modality.pipe(cI(1)),this.modalityChanged=this.modalityDetected.pipe(rI()),this._platform.isBrowser){let r=g(cr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,`keydown`,this._onKeydown,$t),r.listen(e,`mousedown`,this._onMousedown,$t),r.listen(e,`touchstart`,this._onTouchstart,$t)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var rt=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(rt||{});var Je=new E(`cdk-focus-monitor-default-options`);var Nt=q({passive:!0,capture:!0});var Gt=(()=>{class n{_ngZone=g(ee$1);_platform=g(y);_inputModalityDetector=g(Xe);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=g(se);_stopInputModalityDetector=new Q$1;constructor(){let t=g(Je,{optional:!0});this._detectionMode=t?.detectionMode||rt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=k(t);for(let a=e;a;a=a.parentElement)t.type===`focus`?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=L(t);if(!this._platform.isBrowser||a.nodeType!==1)return P();let r=Vt(a)||this._document,i=this._elementInfo.get(a);if(i)return e&&(i.checkChildren=!0),i.subject;let c={checkChildren:e,subject:new Q$1,rootNode:r};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=L(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let r=L(t);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([c,u])=>this._originChanged(c,e,u)):(this._setOrigin(e),typeof r.focus==`function`&&r.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===rt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===rt.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Qe:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),r=k(t);!a||!a.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Nt),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Nt)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ro(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Nt),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Nt),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,r)=>{(r===t||a.checkChildren&&r.contains(t))&&e.push([r,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let r=t.labels;if(r){for(let i=0;i<r.length;i++)if(r[i].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var wt=new WeakMap;var H=(()=>{class n{_appRef;_injector=g(Ee);_environmentInjector=g(re$1);load(t){let e=this._appRef=this._appRef||this._injector.get(Sn$1),a=wt.get(e);a||(a={loaders:new Set,refs:[]},wt.set(e,a),e.onDestroy(()=>{wt.get(e)?.refs.forEach(r=>r.destroy()),wt.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(_$(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var tn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=uf({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();var Et;function On(){if(Et===void 0&&(Et=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{Et=n.trustedTypes.createPolicy(`angular#components`,{createHTML:o=>o})}catch(o){console.error(o)}}return Et}function Q(n){return On()?.createHTML(n)||n}function Zt(n){return Array.isArray(n)?n:[n]}var en=new Set;var W;var It=(()=>{class n{_platform=g(y);_nonce=g(Xo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ln}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Pn(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();function Pn(n,o){if(!en.has(n))try{W||(W=document.createElement(`style`),o&&W.setAttribute(`nonce`,o),W.setAttribute(`type`,`text/css`),document.head.appendChild(W)),W.sheet&&(W.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),en.add(n))}catch(t){console.error(t)}}function Ln(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Yt=(()=>{class n{_mediaMatcher=g(It);_zone=g(ee$1);_queries=new Map;_destroySubject=new Q$1;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return nn(Zt(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){let a=nn(Zt(t)).map(i=>this._registerQuery(i).observable),r=yu(a);return r=Nr(r.pipe(kt$1(1)),r.pipe(cI(1),nI(0))),r.pipe(q$1(i=>{let c={matches:!1,breakpoints:{}};return i.forEach(({matches:u,query:f})=>{c.matches=c.matches||u,c.breakpoints[f]=u}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),r={observable:new O(i=>{let c=u=>this._zone.run(()=>i.next(u));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(Eu(e),q$1(({matches:i})=>({query:t,matches:i})),Ro(this._destroySubject)),mql:e};return this._queries.set(t,r),r}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();function nn(n){return n.map(o=>o.split(`,`)).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}var zn=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var an=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=io({type:n});static ɵinj=Wn$1({providers:[zn]})}return n})();var z=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(z||{});var on=`cdk-high-contrast-black-on-white`;var rn=`cdk-high-contrast-white-on-black`;var qt=`cdk-high-contrast-active`;var sn=(()=>{class n{_platform=g(y);_hasCheckedHighContrastMode=!1;_document=g(se);_breakpointSubscription;constructor(){this._breakpointSubscription=g(Yt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return z.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,a=e&&e.getComputedStyle?e.getComputedStyle(t):null,r=(a&&a.backgroundColor||``).replace(/ /g,``);switch(t.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return z.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return z.BLACK_ON_WHITE}return z.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(qt,on,rn),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===z.BLACK_ON_WHITE?t.add(qt,on):e===z.WHITE_ON_BLACK&&t.add(qt,rn)}}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var Bn=(()=>{class n{constructor(){g(sn)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||n)};static ɵmod=io({type:n});static ɵinj=Wn$1({imports:[an]})}return n})();var Un=200;var Mt=class{_letterKeyStream=new Q$1;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Q$1;selectedItem=this._selectedItem;constructor(o,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:Un;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(o),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let t=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(Fe(t=>this._pressedLetters.push(t)),nI(o),Le(()=>this._pressedLetters.length>0),q$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let a=(this._selectedItemIndex+e)%this._items.length,r=this._items[a];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function cn(n,...o){return o.length?o.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var kt=class{_items;_activeItemIndex=ae$1(-1);_activeItem=ae$1(null);_wrap=!1;_typeaheadSubscription=ce.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,t){this._items=o,o instanceof Ma?this._itemChangesSubscription=o.changes.subscribe(e=>this._itemsChanged(e.toArray())):Jo(o)&&(this._effectRef=Rl(()=>this._itemsChanged(o()),{injector:t}))}tabOut=new Q$1;change=new Q$1;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Mt(t,{debounceInterval:typeof o==`number`?o:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,t=10){return this._pageUpAndDown={enabled:o,delta:t},this}setActiveItem(o){let t=this._activeItem();this.updateActiveItem(o),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(o){let t=o.keyCode,a=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!o[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()+this._pageUpAndDown.delta,i=this._getItemsArray().length;this._setActiveItemByIndex(r<i?r:i-1,-1);break}else return;default:(a||cn(o,`shiftKey`))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let t=this._getItemsArray(),e=typeof o==`number`?o:t.indexOf(o),a=t[e];this._activeItem.set(a??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let a=(this._activeItemIndex()+o*e+t.length)%t.length,r=t[a];if(!this._skipPredicateFn(r)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,t){let e=this._getItemsArray();if(e[o]){for(;this._skipPredicateFn(e[o]);)if(o+=t,!e[o])return;this.setActiveItem(o)}}_getItemsArray(){return Jo(this._items)?this._items():this._items instanceof Ma?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let t=this._activeItem();if(t){let e=o.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Qt=class extends kt{_origin=`program`;setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var mn=new Map;var Xt=class n{_appId=g(Qo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){this._appId!==`ng`&&(o+=this._appId);let e=mn.get(o);return e===void 0?e=0:e++,mn.set(o,e),`${o}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=Y({token:n,factory:n.ɵfac})};var ln=` `;function jn(n,o,t){let e=Ct(n,o);t=t.trim(),!e.some(a=>a.trim()===t)&&(e.push(t),n.setAttribute(o,e.join(ln)))}function Hn(n,o,t){let e=Ct(n,o);t=t.trim();let a=e.filter(r=>r!==t);a.length?n.setAttribute(o,a.join(ln)):n.removeAttribute(o)}function Ct(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var un=`cdk-describedby-message`;var At=`cdk-describedby-host`;var te=0;var Yo=(()=>{class n{_platform=g(y);_document=g(se);_messageRegistry=new Map;_messagesContainer=null;_id=`${te++}`;constructor(){g(H).load(tn),this._id=g(Qo)+`-`+te++}describe(t,e,a){if(!this._canBeDescribed(t,e))return;let r=Jt(e,a);typeof e!=`string`?(dn(e,this._id),this._messageRegistry.set(r,{messageElement:e,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(e,a),this._isElementDescribedByMessage(t,r)||this._addMessageReference(t,r)}removeDescription(t,e,a){if(!e||!this._isElementNode(t))return;let r=Jt(e,a);if(this._isElementDescribedByMessage(t,r)&&this._removeMessageReference(t,r),typeof e==`string`){let i=this._messageRegistry.get(r);i&&i.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${At}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(At);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let a=this._document.createElement(`div`);dn(a,this._id),a.textContent=t,e&&a.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(Jt(t,e),{messageElement:a,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let r=0;r<e.length;r++)e[r].remove();let a=this._document.createElement(`div`);a.style.visibility=`hidden`,a.classList.add(t),a.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||a.setAttribute(`platform`,`server`),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(t){let e=Ct(t,`aria-describedby`).filter(a=>a.indexOf(un)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let a=this._messageRegistry.get(e);jn(t,`aria-describedby`,a.messageElement.id),t.setAttribute(At,this._id),a.referenceCount++}_removeMessageReference(t,e){let a=this._messageRegistry.get(e);a.referenceCount--,Hn(t,`aria-describedby`,a.messageElement.id),t.removeAttribute(At)}_isElementDescribedByMessage(t,e){let a=Ct(t,`aria-describedby`),r=this._messageRegistry.get(e),i=r&&r.messageElement.id;return!!i&&a.indexOf(i)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let a=e==null?``:`${e}`.trim(),r=t.getAttribute(`aria-label`);return a?!r||r.trim()!==a:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();function Jt(n,o){return typeof n==`string`?`${o||``}/${n}`:n}function dn(n,o){n.id||(n.id=`${un}-${o}-${te++}`)}var V;function nr(){if(V==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return V=!1,V;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)V=!0;else{let n=Element.prototype.scrollTo;n?V=!/\{\s*\[native code\]\s*\}/.test(n.toString()):V=!1}}return V}function or(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Wn=new E(`MATERIAL_ANIMATIONS`);var bn=null;function ee(){return g(Wn,{optional:!0})?.animationsDisabled||g(YI,{optional:!0})===`NoopAnimations`?`di-disabled`:(bn??=g(It).matchMedia(`(prefers-reduced-motion)`).matches,bn?`reduced-motion`:`enabled`)}function X(){return ee()!==`enabled`}function hr(n){return n==null?``:typeof n==`string`?n:`${n}px`}function gr(n){return n!=null&&`${n}`!=`false`}var w=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(w||{});var ne=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=w.HIDDEN;constructor(o,t,e,a=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}};var pn=q({passive:!0,capture:!0});var ae=class{_events=new Map;addHandler(o,t,e,a){let r=this._events.get(t);if(r){let i=r.get(e);i?i.add(a):r.set(e,new Set([a]))}else this._events.set(t,new Map([[e,new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,pn)})}removeHandler(o,t,e){let a=this._events.get(o);if(!a)return;let r=a.get(t);r&&(r.delete(e),r.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,pn)))}_delegateEventHandler=o=>{let t=k(o);t&&this._events.get(o.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(r=>r.handleEvent(o))})}};var it={enterDuration:225,exitDuration:150};var Vn=800;var fn=q({passive:!0,capture:!0});var hn=[`mousedown`,`touchstart`];var vn=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Kn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=uf({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var st=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ae;constructor(o,t,e,a,r){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=L(e)),r&&r.get(H).load(Kn)}fadeInRipple(o,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=y$1(y$1({},it),e.animation);e.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let i=e.radius||$n(o,t,a),c=o-a.left,u=t-a.top,f=r.enterDuration,b=document.createElement(`div`);b.classList.add(`mat-ripple-element`),b.style.left=`${c-i}px`,b.style.top=`${u-i}px`,b.style.height=`${i*2}px`,b.style.width=`${i*2}px`,e.color!=null&&(b.style.backgroundColor=e.color),b.style.transitionDuration=`${f}ms`,this._containerElement.appendChild(b);let se=window.getComputedStyle(b),Fn=se.transitionProperty,ce=se.transitionDuration,Ft=Fn===`none`||ce===`0s`||ce===`0s, 0s`||a.width===0&&a.height===0,U=new ne(this,b,e,Ft);b.style.transform=`scale3d(1, 1, 1)`,U.state=w.FADING_IN,e.persistent||(this._mostRecentTransientRipple=U);let ct=null;return!Ft&&(f||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let me=()=>{ct&&(ct.fallbackTimer=null),clearTimeout(de),this._finishRippleTransition(U)},Rt=()=>this._destroyRipple(U),de=setTimeout(Rt,f+100);b.addEventListener(`transitionend`,me),b.addEventListener(`transitioncancel`,Rt),ct={onTransitionEnd:me,onTransitionCancel:Rt,fallbackTimer:de}}),this._activeRipples.set(U,ct),(Ft||!f)&&this._finishRippleTransition(U),U}fadeOutRipple(o){if(o.state===w.FADING_OUT||o.state===w.HIDDEN)return;let t=o.element,e=y$1(y$1({},it),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,o.state=w.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=L(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,hn.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type===`mousedown`?this._onMousedown(o):o.type===`touchstart`?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{vn.forEach(t=>{this._triggerElement.addEventListener(t,this,fn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===w.FADING_IN?this._startFadeOutTransition(o):o.state===w.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=w.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=w.HIDDEN,t!==null&&(o.element.removeEventListener(`transitionend`,t.onTransitionEnd),o.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=nt(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Vn;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!at(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===w.VISIBLE||o.config.terminateOnPointerUp&&o.state===w.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(hn.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(vn.forEach(t=>o.removeEventListener(t,this,fn)),this._pointerUpEventsRegistered=!1))}};function $n(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+a*a)}var oe=new E(`mat-ripple-global-options`);var Tr=(()=>{class n{_elementRef=g(bt);_animationsDisabled=X();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=g(ee$1),e=g(y),a=g(oe,{optional:!0}),r=g(Ee);this._globalOptions=a||{},this._rippleRenderer=new st(this,t,this._elementRef,e,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y$1(y$1(y$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,a){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,y$1(y$1({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,y$1(y$1({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=Tt$1({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,a){e&2&&iv(`mat-ripple-unbounded`,a.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Gn={capture:!0};var Zn=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var re=`mat-ripple-loader-uninitialized`;var ie=`mat-ripple-loader-class-name`;var gn=`mat-ripple-loader-centered`;var Tt=`mat-ripple-loader-disabled`;var _n=(()=>{class n{_document=g(se);_animationsDisabled=X();_globalRippleOptions=g(oe,{optional:!0});_platform=g(y);_ngZone=g(ee$1);_injector=g(Ee);_eventCleanups;_hosts=new Map;constructor(){let t=g(cr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Zn.map(e=>t.listen(this._document,e,this._onInteraction,Gn)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(re,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(ie))&&t.setAttribute(ie,e.className||``),e.centered&&t.setAttribute(gn,``),e.disabled&&t.setAttribute(Tt,``)}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(Tt,``):t.removeAttribute(Tt)}_onInteraction=t=>{let e=k(t);if(e instanceof HTMLElement){let a=e.closest(`[${re}="${this._globalRippleOptions?.namespace??``}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(ie)),t.append(e);let a=this._globalRippleOptions,r=this._animationsDisabled?0:a?.animation?.enterDuration??it.enterDuration,i=this._animationsDisabled?0:a?.animation?.exitDuration??it.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(Tt),rippleConfig:{centered:t.hasAttribute(gn),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:i}}},u=new st(c,this._ngZone,e,this._platform,this._injector),f=!c.rippleDisabled;f&&u.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:u,hasSetUpEvents:f}),t.removeAttribute(re)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var yn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=uf({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Yn=new E(`MAT_BUTTON_CONFIG`);function xn(n){return n==null?void 0:S$(n)}var Sn=(()=>{class n{_elementRef=g(bt);_ngZone=g(ee$1);_animationsDisabled=X();_config=g(Yn,{optional:!0});_focusMonitor=g(Gt);_cleanupClick;_renderer=g(Cn$1);_rippleLoader=g(_n);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=cc(!1,{transform:uc});constructor(){g(H).load(yn);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=Tt$1({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,a){e&2&&(ec(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a._getAriaDisabled())(`tabindex`,a._getTabIndex()),ST(a.color?`mat-`+a.color:``),iv(`mat-mdc-button-progress-indicator-shown`,a.showProgress())(`mat-mdc-button-disabled`,a.disabled)(`mat-mdc-button-disabled-interactive`,a.disabledInteractive)(`mat-unthemed`,!a.color)(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,uc],disabled:[2,`disabled`,`disabled`,uc],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,uc],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,uc],tabIndex:[2,`tabIndex`,`tabIndex`,xn],_tabindex:[2,`tabindex`,`_tabindex`,xn],showProgress:[1,`showProgress`]}})}return n})();var qn=new E(`cdk-dir-doc`,{providedIn:`root`,factory:()=>g(se)});var Qn=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Nn(n){let o=n?.toLowerCase()||``;return o===`auto`&&typeof navigator<`u`&&navigator?.language?Qn.test(navigator.language)?`rtl`:`ltr`:o===`rtl`?`rtl`:`ltr`}var Xn=(()=>{class n{get value(){return this.valueSignal()}valueSignal=ae$1(`ltr`);change=new Se;constructor(){let t=g(qn,{optional:!0});if(t){let e=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Nn(e||a||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(e){return new(e||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var B=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=io({type:n});static ɵinj=Wn$1({})}return n})();var wn=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=io({type:n});static ɵinj=Wn$1({imports:[B]})}return n})();var En=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var li=(()=>{class n extends Sn{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Jn(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?En.get(this._appearance):null,r=En.get(t);a&&e.remove(...a),e.add(...r),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(r,i){r&1&&(hf(0,`div`,2),dT(1,3),gf())}return uf({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[By],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,c){i&1&&(lT(t),Wy(0,`span`,0),dT(1),hf(2,`span`,1),dT(3,1),gf(),dT(4,2),GS(5,a,2,0,`div`,2),Wy(6,`span`,3)(7,`span`,4)),i&2&&(iv(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),ZC(5),qS(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();function Jn(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var ui=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=io({type:n});static ɵinj=Wn$1({imports:[wn,B]})}return n})();function In(n){return Error(`Unable to find icon with the name "${n}"`)}function ta(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function Mn(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function kn(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var D=class{url;svgText;options;svgElement=null;constructor(o,t,e){this.url=o,this.svgText=t,this.options=e}};var Cn=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,a,r){this._httpClient=t,this._sanitizer=e,this._errorHandler=r,this._document=a}addSvgIcon(t,e,a){return this.addSvgIconInNamespace(``,t,e,a)}addSvgIconLiteral(t,e,a){return this.addSvgIconLiteralInNamespace(``,t,e,a)}addSvgIconInNamespace(t,e,a,r){return this._addSvgIconConfig(t,e,new D(a,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,a,r){let i=this._sanitizer.sanitize(J.HTML,a);if(!i)throw kn(a);let c=Q(i);return this._addSvgIconConfig(t,e,new D(``,c,r))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,a){return this._addSvgIconSetConfig(t,new D(e,null,a))}addSvgIconSetLiteralInNamespace(t,e,a){let r=this._sanitizer.sanitize(J.HTML,e);if(!r)throw kn(e);let i=Q(r);return this._addSvgIconSetConfig(t,new D(``,i,a))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=na(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(J.RESOURCE_URL,t);if(!e)throw Mn(t);let a=this._cachedIconsByUrl.get(e);return a?P(Dt(a)):this._loadSvgIconFromConfig(new D(t,null)).pipe(Fe(r=>this._cachedIconsByUrl.set(e,r)),q$1(r=>Dt(r)))}getNamedSvgIcon(t,e=``){let a=An(e,t),r=this._svgIconConfigs.get(a);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(e,t),r)return this._svgIconConfigs.set(a,r),this._getSvgFromConfig(r);let i=this._iconSetConfigs.get(e);return i?this._getSvgFromIconSetConfigs(t,i):mu(In(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?P(Dt(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(q$1(e=>Dt(e)))}_getSvgFromIconSetConfigs(t,e){let a=this._extractIconWithNameFromAnySet(t,e);if(a)return P(a);let r=e.filter(i=>!i.svgText).map(i=>this._loadSvgIconSetFromConfig(i).pipe(Ln$1(c=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(J.RESOURCE_URL,i.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(f)),P(null)})));return JE(r).pipe(q$1(()=>{let i=this._extractIconWithNameFromAnySet(t,e);if(!i)throw In(t);return i}))}_extractIconWithNameFromAnySet(t,e){for(let a=e.length-1;a>=0;a--){let r=e[a];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let i=this._svgElementFromConfig(r),c=this._extractSvgIconFromSet(i,t,r.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Fe(e=>t.svgText=e),q$1(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?P(null):this._fetchIcon(t).pipe(Fe(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,a){let r=t.querySelector(`[id="${e}"]`);if(!r)return null;let i=r.cloneNode(!0);if(i.removeAttribute(`id`),i.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(i,a);if(i.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(i),a);let c=this._svgElementFromString(Q(`<svg></svg>`));return c.appendChild(i),this._setSvgAttributes(c,a)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let a=e.querySelector(`svg`);if(!a)throw Error(`<svg> tag not found`);return a}_toSvgElement(t){let e=this._svgElementFromString(Q(`<svg></svg>`)),a=t.attributes;for(let r=0;r<a.length;r++){let{name:i,value:c}=a[r];i!==`id`&&e.setAttribute(i,c)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[r].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:a}=t,r=a?.withCredentials??!1;if(!this._httpClient)throw ta();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let i=this._sanitizer.sanitize(J.RESOURCE_URL,e);if(!i)throw Mn(e);let c=this._inProgressUrlFetches.get(i);if(c)return c;let u=this._httpClient.get(i,{responseType:`text`,withCredentials:r}).pipe(q$1(f=>Q(f)),Mr(()=>this._inProgressUrlFetches.delete(i)),Du());return this._inProgressUrlFetches.set(i,u),u}_addSvgIconConfig(t,e,a){return this._svgIconConfigs.set(An(t,e),a),this}_addSvgIconSetConfig(t,e){let a=this._iconSetConfigs.get(t);return a?a.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let a=0;a<this._resolvers.length;a++){let r=this._resolvers[a](e,t);if(r)return ea(r)?new D(r.url,null,r.options):new D(r,null)}}static ɵfac=function(e){return new(e||n)(S(Rc,8),S(uN),S(se,8),S(st$1))};static ɵprov=x({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function Dt(n){return n.cloneNode(!0)}function An(n,o){return n+`:`+o}function ea(n){return!!(n.url&&n.options)}function na(n){let o=null,t=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(e=>{let a=e.family.replace(/['"]/g,``).trim().toLowerCase();(a===`material icons`||a.startsWith(`material icons `))&&(t=!0),a.startsWith(`material symbols rounded`)?o=`rounded`:a.startsWith(`material symbols sharp`)?o=`sharp`:a.startsWith(`material symbols`)&&(o=`outlined`)}),[o&&!t?`material-symbols-${o}`:`material-icons`,`mat-ligature-font`]}var aa=new E(`MAT_ICON_DEFAULT_OPTIONS`);var oa=new E(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=g(se),o=n?n.location:null;return{getPathname:()=>o?o.pathname+o.search:``}}});var Tn=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var ra=Tn.map(n=>`[${n}]`).join(`, `);var ia=/^url\(['"]?#(.*?)['"]?\)$/;var Fi=(()=>{class n{_elementRef=g(bt);_iconRegistry=g(Cn);_location=g(oa);_errorHandler=g(st$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ce.EMPTY;constructor(){let t=g(new ac(`aria-hidden`),{optional:!0}),e=g(aa,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let a=t.childNodes[e];(a.nodeType!==1||a.nodeName.toLowerCase()===`svg`)&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>t.classList.remove(a)),e.forEach(a=>t.classList.add(a)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,a=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((r,i)=>{r.forEach(c=>{i.setAttribute(c.name,`url('${a}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ra),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<e.length;r++)Tn.forEach(i=>{let c=e[r],u=c.getAttribute(i),f=u?u.match(ia):null;if(f){let b=a.get(c);b||(b=[],a.set(c,b)),b.push({name:i,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,a]=this._splitIconName(t);e&&(this._svgNamespace=e),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,e).pipe(kt$1(1)).subscribe(r=>this._setSvgElement(r),r=>{let i=`Error retrieving icon ${e}:${a}! ${r.message}`;this._errorHandler.handleError(new Error(i))})}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return uf({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(a,r){a&2&&(ec(`data-mat-icon-type`,r._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,r._svgName||r.fontIcon)(`data-mat-icon-namespace`,r._svgNamespace||r.fontSet)(`fontIcon`,r._usingFontIcon()?r.fontIcon:null),ST(r.color?`mat-`+r.color:``),iv(`mat-icon-inline`,r.inline)(`mat-icon-no-color`,r.color!==`primary`&&r.color!==`accent`&&r.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,uc],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,r){a&1&&(lT(),dT(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return n})();var Ri=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=io({type:n});static ɵinj=Wn$1({imports:[B]})}return n})();var sa=new E(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Dn})});var Dn=100;var ca=10;var Ki=(()=>{class n{_elementRef=g(bt);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let t=g(sa),e=ee(),a=this._elementRef.nativeElement;this._noopAnimations=e===`di-disabled`&&!!t&&!t._forceAnimations,this.mode=a.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&e===`reduced-motion`&&a.classList.add(`mat-progress-spinner-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=Dn;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-ca)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`determinateSpinner`];function e(a,r){if(a&1&&(og(),Ba(0,`svg`,11),tc(1,`circle`,12),pf()),a&2){let i=cT();ec(`viewBox`,i._viewBox()),ZC(),ov(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeCircumference()/2,`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),ec(`r`,i._circleRadius())}}return uf({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(r,i){if(r&1&&Jy(t,5),r&2){let c;vf(c=Df())&&(i._determinateCircle=c.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(r,i){r&2&&(ec(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),ST(`mat-`+i.color),ov(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),iv(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,S$],diameter:[2,`diameter`,`diameter`,S$],strokeWidth:[2,`strokeWidth`,`strokeWidth`,S$]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(r,i){if(r&1&&(Hy(0,e,2,8,`ng-template`,null,0,e_),Ba(2,`div`,2,1),og(),Ba(4,`svg`,3),tc(5,`circle`,4),pf()(),ig(),Ba(6,`div`,5)(7,`div`,6)(8,`div`,7),Yy(9,8),pf(),Ba(10,`div`,9),Yy(11,8),pf(),Ba(12,`div`,10),Yy(13,8),pf()()()),r&2){let c=hT(1);ZC(4),ec(`viewBox`,i._viewBox()),ZC(),ov(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),ec(`r`,i._circleRadius()),ZC(4),Gy(`ngTemplateOutlet`,c),ZC(2),Gy(`ngTemplateOutlet`,c),ZC(2),Gy(`ngTemplateOutlet`,c)}},dependencies:[dM],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return n})();var $i=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=io({type:n});static ɵinj=Wn$1({imports:[B]})}return n})();export{wn as A,hr as C,nt as D,nr as E,yn as M,or as O,gr as S,li as T,Yo as _,Gt as a,at as b,Ki as c,Ri as d,Rn as f,Xt as g,Xn as h,Fi as i,y as j,ui as k,L as l,X as m,B as n,H as o,Tr as p,Bn as r,It as s,$i as t,Qt as u,Zt as v,k as w,cn as x,an as y};