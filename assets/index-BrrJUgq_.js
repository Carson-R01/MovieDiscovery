(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ot={},Zi=[],vs=()=>{},Ag=()=>!1,mc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_c=t=>t.startsWith("onUpdate:"),rn=Object.assign,Eh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ew=Object.prototype.hasOwnProperty,Ge=(t,e)=>Ew.call(t,e),Ee=Array.isArray,eo=t=>Va(t)==="[object Map]",yc=t=>Va(t)==="[object Set]",vd=t=>Va(t)==="[object Date]",Ne=t=>typeof t=="function",vt=t=>typeof t=="string",As=t=>typeof t=="symbol",rt=t=>t!==null&&typeof t=="object",Sg=t=>(rt(t)||Ne(t))&&Ne(t.then)&&Ne(t.catch),Cg=Object.prototype.toString,Va=t=>Cg.call(t),Tw=t=>Va(t).slice(8,-1),Rg=t=>Va(t)==="[object Object]",Th=t=>vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,la=wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},bw=/-\w/g,Gn=vc(t=>t.replace(bw,e=>e.slice(1).toUpperCase())),Iw=/\B([A-Z])/g,Ii=vc(t=>t.replace(Iw,"-$1").toLowerCase()),Pg=vc(t=>t.charAt(0).toUpperCase()+t.slice(1)),du=vc(t=>t?`on${Pg(t)}`:""),ys=(t,e)=>!Object.is(t,e),Pl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},wc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wd;const Ec=()=>wd||(wd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tc(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=vt(s)?Rw(s):Tc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(vt(t)||rt(t))return t}const Aw=/;(?![^(]*\))/g,Sw=/:([^]+)/,Cw=/\/\*[^]*?\*\//g;function Rw(t){const e={};return t.replace(Cw,"").split(Aw).forEach(n=>{if(n){const s=n.split(Sw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ma(t){let e="";if(vt(t))e=t;else if(Ee(t))for(let n=0;n<t.length;n++){const s=Ma(t[n]);s&&(e+=s+" ")}else if(rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kw=wh(Pw);function Dg(t){return!!t||t===""}function Dw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=La(t[s],e[s]);return n}function La(t,e){if(t===e)return!0;let n=vd(t),s=vd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=As(t),s=As(e),n||s)return t===e;if(n=Ee(t),s=Ee(e),n||s)return n&&s?Dw(t,e):!1;if(n=rt(t),s=rt(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),u=e.hasOwnProperty(a);if(c&&!u||!c&&u||!La(t[a],e[a]))return!1}}return String(t)===String(e)}function Ow(t,e){return t.findIndex(n=>La(n,e))}const Og=t=>!!(t&&t.__v_isRef===!0),Ze=t=>vt(t)?t:t==null?"":Ee(t)||rt(t)&&(t.toString===Cg||!Ne(t.toString))?Og(t)?Ze(t.value):JSON.stringify(t,Ng,2):String(t),Ng=(t,e)=>Og(e)?Ng(t,e.value):eo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[pu(s,i)+" =>"]=r,n),{})}:yc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pu(n))}:As(e)?pu(e):rt(e)&&!Ee(e)&&!Rg(e)?String(e):e,pu=(t,e="")=>{var n;return As(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Nw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Bt&&(Bt.active?(this.parent=Bt,this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){if(this._on>0&&--this._on===0){if(Bt===this)Bt=this.prevScope;else{let e=Bt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function xw(){return Bt}let ct;const gu=new WeakSet;class xg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&(Bt.active?Bt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gu.has(this)&&(gu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ed(this),Lg(this);const e=ct,n=Qn;ct=this,Qn=!0;try{return this.fn()}finally{Fg(this),ct=e,Qn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ah(e);this.deps=this.depsTail=void 0,Ed(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fu(this)&&this.run()}get dirty(){return Fu(this)}}let Vg=0,ca,ua;function Mg(t,e=!1){if(t.flags|=8,e){t.next=ua,ua=t;return}t.next=ca,ca=t}function bh(){Vg++}function Ih(){if(--Vg>0)return;if(ua){let e=ua;for(ua=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ca;){let e=ca;for(ca=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Lg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fg(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ah(s),Vw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Fu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ug(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ug(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wa)||(t.globalVersion=wa,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Fu(t))))return;t.flags|=2;const e=t.dep,n=ct,s=Qn;ct=t,Qn=!0;try{Lg(t);const r=t.fn(t._value);(e.version===0||ys(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ct=n,Qn=s,Fg(t),t.flags&=-3}}function Ah(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ah(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qn=!0;const jg=[];function Ys(){jg.push(Qn),Qn=!1}function Xs(){const t=jg.pop();Qn=t===void 0?!0:t}function Ed(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ct;ct=void 0;try{e()}finally{ct=n}}}let wa=0;class Mw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ct||!Qn||ct===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ct)n=this.activeLink=new Mw(ct,this),ct.deps?(n.prevDep=ct.depsTail,ct.depsTail.nextDep=n,ct.depsTail=n):ct.deps=ct.depsTail=n,$g(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ct.depsTail,n.nextDep=void 0,ct.depsTail.nextDep=n,ct.depsTail=n,ct.deps===n&&(ct.deps=s)}return n}trigger(e){this.version++,wa++,this.notify(e)}notify(e){bh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ih()}}}function $g(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)$g(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Uu=new WeakMap,mi=Symbol(""),ju=Symbol(""),Ea=Symbol("");function tn(t,e,n){if(Qn&&ct){let s=Uu.get(t);s||Uu.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Sh),r.map=s,r.key=n),r.track()}}function Ws(t,e,n,s,r,i){const a=Uu.get(t);if(!a){wa++;return}const c=u=>{u&&u.trigger()};if(bh(),e==="clear")a.forEach(c);else{const u=Ee(t),d=u&&Th(n);if(u&&n==="length"){const g=Number(s);a.forEach((y,A)=>{(A==="length"||A===Ea||!As(A)&&A>=g)&&c(y)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),d&&c(a.get(Ea)),e){case"add":u?d&&c(a.get("length")):(c(a.get(mi)),eo(t)&&c(a.get(ju)));break;case"delete":u||(c(a.get(mi)),eo(t)&&c(a.get(ju)));break;case"set":eo(t)&&c(a.get(mi));break}}Ih()}function zi(t){const e=Ke(t);return e===t?e:(tn(e,"iterate",Ea),Mn(t)?e:e.map(Xn))}function bc(t){return tn(t=Ke(t),"iterate",Ea),t}function ms(t,e){return Zs(t)?ho(_i(t)?Xn(e):e):Xn(e)}const Lw={__proto__:null,[Symbol.iterator](){return mu(this,Symbol.iterator,t=>ms(this,t))},concat(...t){return zi(this).concat(...t.map(e=>Ee(e)?zi(e):e))},entries(){return mu(this,"entries",t=>(t[1]=ms(this,t[1]),t))},every(t,e){return Bs(this,"every",t,e,void 0,arguments)},filter(t,e){return Bs(this,"filter",t,e,n=>n.map(s=>ms(this,s)),arguments)},find(t,e){return Bs(this,"find",t,e,n=>ms(this,n),arguments)},findIndex(t,e){return Bs(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bs(this,"findLast",t,e,n=>ms(this,n),arguments)},findLastIndex(t,e){return Bs(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bs(this,"forEach",t,e,void 0,arguments)},includes(...t){return _u(this,"includes",t)},indexOf(...t){return _u(this,"indexOf",t)},join(t){return zi(this).join(t)},lastIndexOf(...t){return _u(this,"lastIndexOf",t)},map(t,e){return Bs(this,"map",t,e,void 0,arguments)},pop(){return Zo(this,"pop")},push(...t){return Zo(this,"push",t)},reduce(t,...e){return Td(this,"reduce",t,e)},reduceRight(t,...e){return Td(this,"reduceRight",t,e)},shift(){return Zo(this,"shift")},some(t,e){return Bs(this,"some",t,e,void 0,arguments)},splice(...t){return Zo(this,"splice",t)},toReversed(){return zi(this).toReversed()},toSorted(t){return zi(this).toSorted(t)},toSpliced(...t){return zi(this).toSpliced(...t)},unshift(...t){return Zo(this,"unshift",t)},values(){return mu(this,"values",t=>ms(this,t))}};function mu(t,e,n){const s=bc(t),r=s[e]();return s!==t&&!Mn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Fw=Array.prototype;function Bs(t,e,n,s,r,i){const a=bc(t),c=a!==t&&!Mn(t),u=a[e];if(u!==Fw[e]){const y=u.apply(t,i);return c?Xn(y):y}let d=n;a!==t&&(c?d=function(y,A){return n.call(this,ms(t,y),A,t)}:n.length>2&&(d=function(y,A){return n.call(this,y,A,t)}));const g=u.call(a,d,s);return c&&r?r(g):g}function Td(t,e,n,s){const r=bc(t),i=r!==t&&!Mn(t);let a=n,c=!1;r!==t&&(i?(c=s.length===0,a=function(d,g,y){return c&&(c=!1,d=ms(t,d)),n.call(this,d,ms(t,g),y,t)}):n.length>3&&(a=function(d,g,y){return n.call(this,d,g,y,t)}));const u=r[e](a,...s);return c?ms(t,u):u}function _u(t,e,n){const s=Ke(t);tn(s,"iterate",Ea);const r=s[e](...n);return(r===-1||r===!1)&&kh(n[0])?(n[0]=Ke(n[0]),s[e](...n)):r}function Zo(t,e,n=[]){Ys(),bh();const s=Ke(t)[e].apply(t,n);return Ih(),Xs(),s}const Uw=wh("__proto__,__v_isRef,__isVue"),Bg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(As));function jw(t){As(t)||(t=String(t));const e=Ke(this);return tn(e,"has",t),e.hasOwnProperty(t)}class Hg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Jw:Kg:i?zg:Wg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=Ee(e);if(!r){let u;if(a&&(u=Lw[n]))return u;if(n==="hasOwnProperty")return jw}const c=Reflect.get(e,n,sn(e)?e:s);if((As(n)?Bg.has(n):Uw(n))||(r||tn(e,"get",n),i))return c;if(sn(c)){const u=a&&Th(n)?c:c.value;return r&&rt(u)?Bu(u):u}return rt(c)?r?Bu(c):Rh(c):c}}class qg extends Hg{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const a=Ee(e)&&Th(n);if(!this._isShallow){const d=Zs(i);if(!Mn(s)&&!Zs(s)&&(i=Ke(i),s=Ke(s)),!a&&sn(i)&&!sn(s))return d||(i.value=s),!0}const c=a?Number(n)<e.length:Ge(e,n),u=Reflect.set(e,n,s,sn(e)?e:r);return e===Ke(r)&&(c?ys(s,i)&&Ws(e,"set",n,s):Ws(e,"add",n,s)),u}deleteProperty(e,n){const s=Ge(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ws(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!As(n)||!Bg.has(n))&&tn(e,"has",n),s}ownKeys(e){return tn(e,"iterate",Ee(e)?"length":mi),Reflect.ownKeys(e)}}class $w extends Hg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bw=new qg,Hw=new $w,qw=new qg(!0);const $u=t=>t,vl=t=>Reflect.getPrototypeOf(t);function Ww(t,e,n){return function(...s){const r=this.__v_raw,i=Ke(r),a=eo(i),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,d=r[t](...s),g=n?$u:e?ho:Xn;return!e&&tn(i,"iterate",u?ju:mi),rn(Object.create(d),{next(){const{value:y,done:A}=d.next();return A?{value:y,done:A}:{value:c?[g(y[0]),g(y[1])]:g(y),done:A}}})}}function wl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zw(t,e){const n={get(r){const i=this.__v_raw,a=Ke(i),c=Ke(r);t||(ys(r,c)&&tn(a,"get",r),tn(a,"get",c));const{has:u}=vl(a),d=e?$u:t?ho:Xn;if(u.call(a,r))return d(i.get(r));if(u.call(a,c))return d(i.get(c));i!==a&&i.get(r)},get size(){const r=this.__v_raw;return!t&&tn(Ke(r),"iterate",mi),r.size},has(r){const i=this.__v_raw,a=Ke(i),c=Ke(r);return t||(ys(r,c)&&tn(a,"has",r),tn(a,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const a=this,c=a.__v_raw,u=Ke(c),d=e?$u:t?ho:Xn;return!t&&tn(u,"iterate",mi),c.forEach((g,y)=>r.call(i,d(g),d(y),a))}};return rn(n,t?{add:wl("add"),set:wl("set"),delete:wl("delete"),clear:wl("clear")}:{add(r){const i=Ke(this),a=vl(i),c=Ke(r),u=!e&&!Mn(r)&&!Zs(r)?c:r;return a.has.call(i,u)||ys(r,u)&&a.has.call(i,r)||ys(c,u)&&a.has.call(i,c)||(i.add(u),Ws(i,"add",u,u)),this},set(r,i){!e&&!Mn(i)&&!Zs(i)&&(i=Ke(i));const a=Ke(this),{has:c,get:u}=vl(a);let d=c.call(a,r);d||(r=Ke(r),d=c.call(a,r));const g=u.call(a,r);return a.set(r,i),d?ys(i,g)&&Ws(a,"set",r,i):Ws(a,"add",r,i),this},delete(r){const i=Ke(this),{has:a,get:c}=vl(i);let u=a.call(i,r);u||(r=Ke(r),u=a.call(i,r)),c&&c.call(i,r);const d=i.delete(r);return u&&Ws(i,"delete",r,void 0),d},clear(){const r=Ke(this),i=r.size!==0,a=r.clear();return i&&Ws(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ww(r,t,e)}),n}function Ch(t,e){const n=zw(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ge(n,r)&&r in s?n:s,r,i)}const Kw={get:Ch(!1,!1)},Gw={get:Ch(!1,!0)},Qw={get:Ch(!0,!1)};const Wg=new WeakMap,zg=new WeakMap,Kg=new WeakMap,Jw=new WeakMap;function Yw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rh(t){return Zs(t)?t:Ph(t,!1,Bw,Kw,Wg)}function Xw(t){return Ph(t,!1,qw,Gw,zg)}function Bu(t){return Ph(t,!0,Hw,Qw,Kg)}function Ph(t,e,n,s,r){if(!rt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const a=Yw(Tw(t));if(a===0)return t;const c=new Proxy(t,a===2?s:n);return r.set(t,c),c}function _i(t){return Zs(t)?_i(t.__v_raw):!!(t&&t.__v_isReactive)}function Zs(t){return!!(t&&t.__v_isReadonly)}function Mn(t){return!!(t&&t.__v_isShallow)}function kh(t){return t?!!t.__v_raw:!1}function Ke(t){const e=t&&t.__v_raw;return e?Ke(e):t}function Zw(t){return!Ge(t,"__v_skip")&&Object.isExtensible(t)&&kg(t,"__v_skip",!0),t}const Xn=t=>rt(t)?Rh(t):t,ho=t=>rt(t)?Bu(t):t;function sn(t){return t?t.__v_isRef===!0:!1}function mn(t){return eE(t,!1)}function eE(t,e){return sn(t)?t:new tE(t,e)}class tE{constructor(e,n){this.dep=new Sh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ke(e),this._value=n?e:Xn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Mn(e)||Zs(e);e=s?e:Ke(e),ys(e,n)&&(this._rawValue=e,this._value=s?e:Xn(e),this.dep.trigger())}}function nE(t){return sn(t)?t.value:t}const sE={get:(t,e,n)=>e==="__v_raw"?t:nE(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return sn(r)&&!sn(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Gg(t){return _i(t)?t:new Proxy(t,sE)}class rE{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Sh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return Mg(this,!0),!0}get value(){const e=this.dep.track();return Ug(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function iE(t,e,n=!1){let s,r;return Ne(t)?s=t:(s=t.get,r=t.set),new rE(s,r,n)}const El={},Hl=new WeakMap;let hi;function oE(t,e=!1,n=hi){if(n){let s=Hl.get(n);s||Hl.set(n,s=[]),s.push(t)}}function aE(t,e,n=ot){const{immediate:s,deep:r,once:i,scheduler:a,augmentJob:c,call:u}=n,d=ue=>r?ue:Mn(ue)||r===!1||r===0?zs(ue,1):zs(ue);let g,y,A,O,$=!1,B=!1;if(sn(t)?(y=()=>t.value,$=Mn(t)):_i(t)?(y=()=>d(t),$=!0):Ee(t)?(B=!0,$=t.some(ue=>_i(ue)||Mn(ue)),y=()=>t.map(ue=>{if(sn(ue))return ue.value;if(_i(ue))return d(ue);if(Ne(ue))return u?u(ue,2):ue()})):Ne(t)?e?y=u?()=>u(t,2):t:y=()=>{if(A){Ys();try{A()}finally{Xs()}}const ue=hi;hi=g;try{return u?u(t,3,[O]):t(O)}finally{hi=ue}}:y=vs,e&&r){const ue=y,De=r===!0?1/0:r;y=()=>zs(ue(),De)}const Q=xw(),se=()=>{g.stop(),Q&&Q.active&&Eh(Q.effects,g)};if(i&&e){const ue=e;e=(...De)=>{ue(...De),se()}}let Y=B?new Array(t.length).fill(El):El;const ae=ue=>{if(!(!(g.flags&1)||!g.dirty&&!ue))if(e){const De=g.run();if(r||$||(B?De.some((Je,S)=>ys(Je,Y[S])):ys(De,Y))){A&&A();const Je=hi;hi=g;try{const S=[De,Y===El?void 0:B&&Y[0]===El?[]:Y,O];Y=De,u?u(e,3,S):e(...S)}finally{hi=Je}}}else g.run()};return c&&c(ae),g=new xg(y),g.scheduler=a?()=>a(ae,!1):ae,O=ue=>oE(ue,!1,g),A=g.onStop=()=>{const ue=Hl.get(g);if(ue){if(u)u(ue,4);else for(const De of ue)De();Hl.delete(g)}},e?s?ae(!0):Y=g.run():a?a(ae.bind(null,!0),!0):g.run(),se.pause=g.pause.bind(g),se.resume=g.resume.bind(g),se.stop=se,se}function zs(t,e=1/0,n){if(e<=0||!rt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,sn(t))zs(t.value,e,n);else if(Ee(t))for(let s=0;s<t.length;s++)zs(t[s],e,n);else if(yc(t)||eo(t))t.forEach(s=>{zs(s,e,n)});else if(Rg(t)){for(const s in t)zs(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&zs(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fa(t,e,n,s){try{return s?t(...s):t()}catch(r){Ic(r,e,n)}}function Zn(t,e,n,s){if(Ne(t)){const r=Fa(t,e,n,s);return r&&Sg(r)&&r.catch(i=>{Ic(i,e,n)}),r}if(Ee(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Zn(t[i],e,n,s));return r}}function Ic(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ot;if(e){let c=e.parent;const u=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const g=c.ec;if(g){for(let y=0;y<g.length;y++)if(g[y](t,u,d)===!1)return}c=c.parent}if(i){Ys(),Fa(i,null,10,[t,u,d]),Xs();return}}lE(t,n,r,s,a)}function lE(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const hn=[];let ps=-1;const to=[];let Ar=null,Gi=0;const Qg=Promise.resolve();let ql=null;function Jg(t){const e=ql||Qg;return t?e.then(this?t.bind(this):t):e}function cE(t){let e=ps+1,n=hn.length;for(;e<n;){const s=e+n>>>1,r=hn[s],i=Ta(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Dh(t){if(!(t.flags&1)){const e=Ta(t),n=hn[hn.length-1];!n||!(t.flags&2)&&e>=Ta(n)?hn.push(t):hn.splice(cE(e),0,t),t.flags|=1,Yg()}}function Yg(){ql||(ql=Qg.then(Zg))}function uE(t){Ee(t)?to.push(...t):Ar&&t.id===-1?Ar.splice(Gi+1,0,t):t.flags&1||(to.push(t),t.flags|=1),Yg()}function bd(t,e,n=ps+1){for(;n<hn.length;n++){const s=hn[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;hn.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Xg(t){if(to.length){const e=[...new Set(to)].sort((n,s)=>Ta(n)-Ta(s));if(to.length=0,Ar){Ar.push(...e);return}for(Ar=e,Gi=0;Gi<Ar.length;Gi++){const n=Ar[Gi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Gi=0}}const Ta=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zg(t){try{for(ps=0;ps<hn.length;ps++){const e=hn[ps];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ps<hn.length;ps++){const e=hn[ps];e&&(e.flags&=-2)}ps=-1,hn.length=0,Xg(),ql=null,(hn.length||to.length)&&Zg()}}let Vn=null,em=null;function Wl(t){const e=Vn;return Vn=t,em=t&&t.type.__scopeId||null,e}function hE(t,e=Vn,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Vd(-1);const i=Wl(e);let a;try{a=t(...r)}finally{Wl(i),s._d&&Vd(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function Id(t,e){if(Vn===null)return t;const n=Rc(Vn),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,a,c,u=ot]=e[r];i&&(Ne(i)&&(i={mounted:i,updated:i}),i.deep&&zs(a),s.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function ci(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];i&&(c.oldValue=i[a].value);let u=c.dir[s];u&&(Ys(),Zn(u,n,8,[t.el,c,t,e]),Xs())}}function fE(t,e){if(dn){let n=dn.provides;const s=dn.parent&&dn.parent.provides;s===n&&(n=dn.provides=Object.create(s)),n[t]=e}}function kl(t,e,n=!1){const s=uT();if(s||no){let r=no?no._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ne(e)?e.call(s&&s.proxy):e}}const dE=Symbol.for("v-scx"),pE=()=>kl(dE);function yu(t,e,n){return tm(t,e,n)}function tm(t,e,n=ot){const{immediate:s,deep:r,flush:i,once:a}=n,c=rn({},n),u=e&&s||!e&&i!=="post";let d;if(Ia){if(i==="sync"){const O=pE();d=O.__watcherHandles||(O.__watcherHandles=[])}else if(!u){const O=()=>{};return O.stop=vs,O.resume=vs,O.pause=vs,O}}const g=dn;c.call=(O,$,B)=>Zn(O,g,$,B);let y=!1;i==="post"?c.scheduler=O=>{_n(O,g&&g.suspense)}:i!=="sync"&&(y=!0,c.scheduler=(O,$)=>{$?O():Dh(O)}),c.augmentJob=O=>{e&&(O.flags|=4),y&&(O.flags|=2,g&&(O.id=g.uid,O.i=g))};const A=aE(t,e,c);return Ia&&(d?d.push(A):u&&A()),A}function gE(t,e,n){const s=this.proxy,r=vt(t)?t.includes(".")?nm(s,t):()=>s[t]:t.bind(s,s);let i;Ne(e)?i=e:(i=e.handler,n=e);const a=Ua(this),c=tm(r,i.bind(s),n);return a(),c}function nm(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const mE=Symbol("_vte"),_E=t=>t.__isTeleport,vu=Symbol("_leaveCb");function Oh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Oh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ad(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const zl=new WeakMap;function ha(t,e,n,s,r=!1){if(Ee(t)){t.forEach((B,Q)=>ha(B,e&&(Ee(e)?e[Q]:e),n,s,r));return}if(fa(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ha(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Rc(s.component):s.el,a=r?null:i,{i:c,r:u}=t,d=e&&e.r,g=c.refs===ot?c.refs={}:c.refs,y=c.setupState,A=Ke(y),O=y===ot?Ag:B=>Ad(g,B)?!1:Ge(A,B),$=(B,Q)=>!(Q&&Ad(g,Q));if(d!=null&&d!==u){if(Sd(e),vt(d))g[d]=null,O(d)&&(y[d]=null);else if(sn(d)){const B=e;$(d,B.k)&&(d.value=null),B.k&&(g[B.k]=null)}}if(Ne(u))Fa(u,c,12,[a,g]);else{const B=vt(u),Q=sn(u);if(B||Q){const se=()=>{if(t.f){const Y=B?O(u)?y[u]:g[u]:$()||!t.k?u.value:g[t.k];if(r)Ee(Y)&&Eh(Y,i);else if(Ee(Y))Y.includes(i)||Y.push(i);else if(B)g[u]=[i],O(u)&&(y[u]=g[u]);else{const ae=[i];$(u,t.k)&&(u.value=ae),t.k&&(g[t.k]=ae)}}else B?(g[u]=a,O(u)&&(y[u]=a)):Q&&($(u,t.k)&&(u.value=a),t.k&&(g[t.k]=a))};if(a){const Y=()=>{se(),zl.delete(t)};Y.id=-1,zl.set(t,Y),_n(Y,n)}else Sd(t),se()}}}function Sd(t){const e=zl.get(t);e&&(e.flags|=8,zl.delete(t))}Ec().requestIdleCallback;Ec().cancelIdleCallback;const fa=t=>!!t.type.__asyncLoader,rm=t=>t.type.__isKeepAlive;function yE(t,e){im(t,"a",e)}function vE(t,e){im(t,"da",e)}function im(t,e,n=dn){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ac(e,s,n),n){let r=n.parent;for(;r&&r.parent;)rm(r.parent.vnode)&&wE(s,e,n,r),r=r.parent}}function wE(t,e,n,s){const r=Ac(e,t,s,!0);Nh(()=>{Eh(s[e],r)},n)}function Ac(t,e,n=dn,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Ys();const c=Ua(n),u=Zn(e,n,t,a);return c(),Xs(),u});return s?r.unshift(i):r.push(i),i}}const ir=t=>(e,n=dn)=>{(!Ia||t==="sp")&&Ac(t,(...s)=>e(...s),n)},EE=ir("bm"),om=ir("m"),TE=ir("bu"),bE=ir("u"),IE=ir("bum"),Nh=ir("um"),AE=ir("sp"),SE=ir("rtg"),CE=ir("rtc");function RE(t,e=dn){Ac("ec",t,e)}const PE=Symbol.for("v-ndc");function Ki(t,e,n,s){let r;const i=n,a=Ee(t);if(a||vt(t)){const c=a&&_i(t);let u=!1,d=!1;c&&(u=!Mn(t),d=Zs(t),t=bc(t)),r=new Array(t.length);for(let g=0,y=t.length;g<y;g++)r[g]=e(u?d?ho(Xn(t[g])):Xn(t[g]):t[g],g,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,i)}else if(rt(t))if(t[Symbol.iterator])r=Array.from(t,(c,u)=>e(c,u,void 0,i));else{const c=Object.keys(t);r=new Array(c.length);for(let u=0,d=c.length;u<d;u++){const g=c[u];r[u]=e(t[g],g,u,i)}}else r=[];return r}const Hu=t=>t?Rm(t)?Rc(t):Hu(t.parent):null,da=rn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hu(t.parent),$root:t=>Hu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lm(t),$forceUpdate:t=>t.f||(t.f=()=>{Dh(t.update)}),$nextTick:t=>t.n||(t.n=Jg.bind(t.proxy)),$watch:t=>gE.bind(t)}),wu=(t,e)=>t!==ot&&!t.__isScriptSetup&&Ge(t,e),kE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:a,type:c,appContext:u}=t;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(wu(s,e))return a[e]=1,s[e];if(r!==ot&&Ge(r,e))return a[e]=2,r[e];if(Ge(i,e))return a[e]=3,i[e];if(n!==ot&&Ge(n,e))return a[e]=4,n[e];qu&&(a[e]=0)}}const d=da[e];let g,y;if(d)return e==="$attrs"&&tn(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==ot&&Ge(n,e))return a[e]=4,n[e];if(y=u.config.globalProperties,Ge(y,e))return y[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return wu(r,e)?(r[e]=n,!0):s!==ot&&Ge(s,e)?(s[e]=n,!0):Ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:a}},c){let u;return!!(n[c]||t!==ot&&c[0]!=="$"&&Ge(t,c)||wu(e,c)||Ge(i,c)||Ge(s,c)||Ge(da,c)||Ge(r.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cd(t){return Ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qu=!0;function DE(t){const e=lm(t),n=t.proxy,s=t.ctx;qu=!1,e.beforeCreate&&Rd(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:a,watch:c,provide:u,inject:d,created:g,beforeMount:y,mounted:A,beforeUpdate:O,updated:$,activated:B,deactivated:Q,beforeDestroy:se,beforeUnmount:Y,destroyed:ae,unmounted:ue,render:De,renderTracked:Je,renderTriggered:S,errorCaptured:w,serverPrefetch:b,expose:C,inheritAttrs:I,components:D,directives:T,filters:mt}=e;if(d&&OE(d,s,null),a)for(const qe in a){const xe=a[qe];Ne(xe)&&(s[qe]=xe.bind(n))}if(r){const qe=r.call(n,n);rt(qe)&&(t.data=Rh(qe))}if(qu=!0,i)for(const qe in i){const xe=i[qe],Kt=Ne(xe)?xe.bind(n,n):Ne(xe.get)?xe.get.bind(n,n):vs,Fn=!Ne(xe)&&Ne(xe.set)?xe.set.bind(n):vs,L=Ir({get:Kt,set:Fn});Object.defineProperty(s,qe,{enumerable:!0,configurable:!0,get:()=>L.value,set:Pt=>L.value=Pt})}if(c)for(const qe in c)am(c[qe],s,n,qe);if(u){const qe=Ne(u)?u.call(n):u;Reflect.ownKeys(qe).forEach(xe=>{fE(xe,qe[xe])})}g&&Rd(g,t,"c");function _t(qe,xe){Ee(xe)?xe.forEach(Kt=>qe(Kt.bind(n))):xe&&qe(xe.bind(n))}if(_t(EE,y),_t(om,A),_t(TE,O),_t(bE,$),_t(yE,B),_t(vE,Q),_t(RE,w),_t(CE,Je),_t(SE,S),_t(IE,Y),_t(Nh,ue),_t(AE,b),Ee(C))if(C.length){const qe=t.exposed||(t.exposed={});C.forEach(xe=>{Object.defineProperty(qe,xe,{get:()=>n[xe],set:Kt=>n[xe]=Kt,enumerable:!0})})}else t.exposed||(t.exposed={});De&&t.render===vs&&(t.render=De),I!=null&&(t.inheritAttrs=I),D&&(t.components=D),T&&(t.directives=T),b&&sm(t)}function OE(t,e,n=vs){Ee(t)&&(t=Wu(t));for(const s in t){const r=t[s];let i;rt(r)?"default"in r?i=kl(r.from||s,r.default,!0):i=kl(r.from||s):i=kl(r),sn(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[s]=i}}function Rd(t,e,n){Zn(Ee(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function am(t,e,n,s){let r=s.includes(".")?nm(n,s):()=>n[s];if(vt(t)){const i=e[t];Ne(i)&&yu(r,i)}else if(Ne(t))yu(r,t.bind(n));else if(rt(t))if(Ee(t))t.forEach(i=>am(i,e,n,s));else{const i=Ne(t.handler)?t.handler.bind(n):e[t.handler];Ne(i)&&yu(r,i,t)}}function lm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let u;return c?u=c:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(d=>Kl(u,d,a,!0)),Kl(u,e,a)),rt(e)&&i.set(e,u),u}function Kl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Kl(t,i,n,!0),r&&r.forEach(a=>Kl(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=NE[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const NE={data:Pd,props:kd,emits:kd,methods:na,computed:na,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:na,directives:na,watch:VE,provide:Pd,inject:xE};function Pd(t,e){return e?t?function(){return rn(Ne(t)?t.call(this,this):t,Ne(e)?e.call(this,this):e)}:e:t}function xE(t,e){return na(Wu(t),Wu(e))}function Wu(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function un(t,e){return t?[...new Set([].concat(t,e))]:e}function na(t,e){return t?rn(Object.create(null),t,e):e}function kd(t,e){return t?Ee(t)&&Ee(e)?[...new Set([...t,...e])]:rn(Object.create(null),Cd(t),Cd(e??{})):e}function VE(t,e){if(!t)return e;if(!e)return t;const n=rn(Object.create(null),t);for(const s in e)n[s]=un(t[s],e[s]);return n}function cm(){return{app:null,config:{isNativeTag:Ag,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ME=0;function LE(t,e){return function(s,r=null){Ne(s)||(s=rn({},s)),r!=null&&!rt(r)&&(r=null);const i=cm(),a=new WeakSet,c=[];let u=!1;const d=i.app={_uid:ME++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:mT,get config(){return i.config},set config(g){},use(g,...y){return a.has(g)||(g&&Ne(g.install)?(a.add(g),g.install(d,...y)):Ne(g)&&(a.add(g),g(d,...y))),d},mixin(g){return i.mixins.includes(g)||i.mixins.push(g),d},component(g,y){return y?(i.components[g]=y,d):i.components[g]},directive(g,y){return y?(i.directives[g]=y,d):i.directives[g]},mount(g,y,A){if(!u){const O=d._ceVNode||Ln(s,r);return O.appContext=i,A===!0?A="svg":A===!1&&(A=void 0),t(O,g,A),u=!0,d._container=g,g.__vue_app__=d,Rc(O.component)}},onUnmount(g){c.push(g)},unmount(){u&&(Zn(c,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(g,y){return i.provides[g]=y,d},runWithContext(g){const y=no;no=d;try{return g()}finally{no=y}}};return d}}let no=null;const FE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gn(e)}Modifiers`]||t[`${Ii(e)}Modifiers`];function UE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ot;let r=n;const i=e.startsWith("update:"),a=i&&FE(s,e.slice(7));a&&(a.trim&&(r=n.map(g=>vt(g)?g.trim():g)),a.number&&(r=n.map(wc)));let c,u=s[c=du(e)]||s[c=du(Gn(e))];!u&&i&&(u=s[c=du(Ii(e))]),u&&Zn(u,t,6,r);const d=s[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Zn(d,t,6,r)}}const jE=new WeakMap;function um(t,e,n=!1){const s=n?jE:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let a={},c=!1;if(!Ne(t)){const u=d=>{const g=um(d,e,!0);g&&(c=!0,rn(a,g))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!c?(rt(t)&&s.set(t,null),null):(Ee(i)?i.forEach(u=>a[u]=null):rn(a,i),rt(t)&&s.set(t,a),a)}function Sc(t,e){return!t||!mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(t,e[0].toLowerCase()+e.slice(1))||Ge(t,Ii(e))||Ge(t,e))}function Dd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:a,attrs:c,emit:u,render:d,renderCache:g,props:y,data:A,setupState:O,ctx:$,inheritAttrs:B}=t,Q=Wl(t);let se,Y;try{if(n.shapeFlag&4){const ue=r||s,De=ue;se=_s(d.call(De,ue,g,y,O,A,$)),Y=c}else{const ue=e;se=_s(ue.length>1?ue(y,{attrs:c,slots:a,emit:u}):ue(y,null)),Y=e.props?c:$E(c)}}catch(ue){pa.length=0,Ic(ue,t,1),se=Ln(Vr)}let ae=se;if(Y&&B!==!1){const ue=Object.keys(Y),{shapeFlag:De}=ae;ue.length&&De&7&&(i&&ue.some(_c)&&(Y=BE(Y,i)),ae=fo(ae,Y,!1,!0))}return n.dirs&&(ae=fo(ae,null,!1,!0),ae.dirs=ae.dirs?ae.dirs.concat(n.dirs):n.dirs),n.transition&&Oh(ae,n.transition),se=ae,Wl(Q),se}const $E=t=>{let e;for(const n in t)(n==="class"||n==="style"||mc(n))&&((e||(e={}))[n]=t[n]);return e},BE=(t,e)=>{const n={};for(const s in t)(!_c(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function HE(t,e,n){const{props:s,children:r,component:i}=t,{props:a,children:c,patchFlag:u}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Od(s,a,d):!!a;if(u&8){const g=e.dynamicProps;for(let y=0;y<g.length;y++){const A=g[y];if(hm(a,s,A)&&!Sc(d,A))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?Od(s,a,d):!0:!!a;return!1}function Od(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(hm(e,t,i)&&!Sc(n,i))return!0}return!1}function hm(t,e,n){const s=t[n],r=e[n];return n==="style"&&rt(s)&&rt(r)?!La(s,r):s!==r}function qE({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const fm={},dm=()=>Object.create(fm),pm=t=>Object.getPrototypeOf(t)===fm;function WE(t,e,n,s=!1){const r={},i=dm();t.propsDefaults=Object.create(null),gm(t,e,r,i);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:Xw(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function zE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:a}}=t,c=Ke(r),[u]=t.propsOptions;let d=!1;if((s||a>0)&&!(a&16)){if(a&8){const g=t.vnode.dynamicProps;for(let y=0;y<g.length;y++){let A=g[y];if(Sc(t.emitsOptions,A))continue;const O=e[A];if(u)if(Ge(i,A))O!==i[A]&&(i[A]=O,d=!0);else{const $=Gn(A);r[$]=zu(u,c,$,O,t,!1)}else O!==i[A]&&(i[A]=O,d=!0)}}}else{gm(t,e,r,i)&&(d=!0);let g;for(const y in c)(!e||!Ge(e,y)&&((g=Ii(y))===y||!Ge(e,g)))&&(u?n&&(n[y]!==void 0||n[g]!==void 0)&&(r[y]=zu(u,c,y,void 0,t,!0)):delete r[y]);if(i!==c)for(const y in i)(!e||!Ge(e,y))&&(delete i[y],d=!0)}d&&Ws(t.attrs,"set","")}function gm(t,e,n,s){const[r,i]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(la(u))continue;const d=e[u];let g;r&&Ge(r,g=Gn(u))?!i||!i.includes(g)?n[g]=d:(c||(c={}))[g]=d:Sc(t.emitsOptions,u)||(!(u in s)||d!==s[u])&&(s[u]=d,a=!0)}if(i){const u=Ke(n),d=c||ot;for(let g=0;g<i.length;g++){const y=i[g];n[y]=zu(r,u,y,d[y],t,!Ge(d,y))}}return a}function zu(t,e,n,s,r,i){const a=t[n];if(a!=null){const c=Ge(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Ne(u)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const g=Ua(r);s=d[n]=u.call(null,e),g()}}else s=u;r.ce&&r.ce._setProp(n,s)}a[0]&&(i&&!c?s=!1:a[1]&&(s===""||s===Ii(n))&&(s=!0))}return s}const KE=new WeakMap;function mm(t,e,n=!1){const s=n?KE:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,a={},c=[];let u=!1;if(!Ne(t)){const g=y=>{u=!0;const[A,O]=mm(y,e,!0);rn(a,A),O&&c.push(...O)};!n&&e.mixins.length&&e.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!i&&!u)return rt(t)&&s.set(t,Zi),Zi;if(Ee(i))for(let g=0;g<i.length;g++){const y=Gn(i[g]);Nd(y)&&(a[y]=ot)}else if(i)for(const g in i){const y=Gn(g);if(Nd(y)){const A=i[g],O=a[y]=Ee(A)||Ne(A)?{type:A}:rn({},A),$=O.type;let B=!1,Q=!0;if(Ee($))for(let se=0;se<$.length;++se){const Y=$[se],ae=Ne(Y)&&Y.name;if(ae==="Boolean"){B=!0;break}else ae==="String"&&(Q=!1)}else B=Ne($)&&$.name==="Boolean";O[0]=B,O[1]=Q,(B||Ge(O,"default"))&&c.push(y)}}const d=[a,c];return rt(t)&&s.set(t,d),d}function Nd(t){return t[0]!=="$"&&!la(t)}const xh=t=>t==="_"||t==="_ctx"||t==="$stable",Vh=t=>Ee(t)?t.map(_s):[_s(t)],GE=(t,e,n)=>{if(e._n)return e;const s=hE((...r)=>Vh(e(...r)),n);return s._c=!1,s},_m=(t,e,n)=>{const s=t._ctx;for(const r in t){if(xh(r))continue;const i=t[r];if(Ne(i))e[r]=GE(r,i,s);else if(i!=null){const a=Vh(i);e[r]=()=>a}}},ym=(t,e)=>{const n=Vh(e);t.slots.default=()=>n},vm=(t,e,n)=>{for(const s in e)(n||!xh(s))&&(t[s]=e[s])},QE=(t,e,n)=>{const s=t.slots=dm();if(t.vnode.shapeFlag&32){const r=e._;r?(vm(s,e,n),n&&kg(s,"_",r,!0)):_m(e,s)}else e&&ym(t,e)},JE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,a=ot;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:vm(r,e,n):(i=!e.$stable,_m(e,r)),a=e}else e&&(ym(t,e),a={default:1});if(i)for(const c in r)!xh(c)&&a[c]==null&&delete r[c]},_n=tT;function YE(t){return XE(t)}function XE(t,e){const n=Ec();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:a,createText:c,createComment:u,setText:d,setElementText:g,parentNode:y,nextSibling:A,setScopeId:O=vs,insertStaticContent:$}=t,B=(E,R,V,z=null,j=null,F=null,Z=void 0,G=null,K=!!R.dynamicChildren)=>{if(E===R)return;E&&!ea(E,R)&&(z=te(E),Pt(E,j,F,!0),E=null),R.patchFlag===-2&&(K=!1,R.dynamicChildren=null);const{type:H,ref:ge,shapeFlag:ne}=R;switch(H){case Cc:Q(E,R,V,z);break;case Vr:se(E,R,V,z);break;case Tu:E==null&&Y(R,V,z,Z);break;case fn:D(E,R,V,z,j,F,Z,G,K);break;default:ne&1?De(E,R,V,z,j,F,Z,G,K):ne&6?T(E,R,V,z,j,F,Z,G,K):(ne&64||ne&128)&&H.process(E,R,V,z,j,F,Z,G,K,jt)}ge!=null&&j?ha(ge,E&&E.ref,F,R||E,!R):ge==null&&E&&E.ref!=null&&ha(E.ref,null,F,E,!0)},Q=(E,R,V,z)=>{if(E==null)s(R.el=c(R.children),V,z);else{const j=R.el=E.el;R.children!==E.children&&d(j,R.children)}},se=(E,R,V,z)=>{E==null?s(R.el=u(R.children||""),V,z):R.el=E.el},Y=(E,R,V,z)=>{[E.el,E.anchor]=$(E.children,R,V,z,E.el,E.anchor)},ae=({el:E,anchor:R},V,z)=>{let j;for(;E&&E!==R;)j=A(E),s(E,V,z),E=j;s(R,V,z)},ue=({el:E,anchor:R})=>{let V;for(;E&&E!==R;)V=A(E),r(E),E=V;r(R)},De=(E,R,V,z,j,F,Z,G,K)=>{if(R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),E==null)Je(R,V,z,j,F,Z,G,K);else{const H=E.el&&E.el._isVueCE?E.el:null;try{H&&H._beginPatch(),b(E,R,j,F,Z,G,K)}finally{H&&H._endPatch()}}},Je=(E,R,V,z,j,F,Z,G)=>{let K,H;const{props:ge,shapeFlag:ne,transition:de,dirs:pe}=E;if(K=E.el=a(E.type,F,ge&&ge.is,ge),ne&8?g(K,E.children):ne&16&&w(E.children,K,null,z,j,Eu(E,F),Z,G),pe&&ci(E,null,z,"created"),S(K,E,E.scopeId,Z,z),ge){for(const We in ge)We!=="value"&&!la(We)&&i(K,We,null,ge[We],F,z);"value"in ge&&i(K,"value",null,ge.value,F),(H=ge.onVnodeBeforeMount)&&ds(H,z,E)}pe&&ci(E,null,z,"beforeMount");const Te=ZE(j,de);Te&&de.beforeEnter(K),s(K,R,V),((H=ge&&ge.onVnodeMounted)||Te||pe)&&_n(()=>{try{H&&ds(H,z,E),Te&&de.enter(K),pe&&ci(E,null,z,"mounted")}finally{}},j)},S=(E,R,V,z,j)=>{if(V&&O(E,V),z)for(let F=0;F<z.length;F++)O(E,z[F]);if(j){let F=j.subTree;if(R===F||bm(F.type)&&(F.ssContent===R||F.ssFallback===R)){const Z=j.vnode;S(E,Z,Z.scopeId,Z.slotScopeIds,j.parent)}}},w=(E,R,V,z,j,F,Z,G,K=0)=>{for(let H=K;H<E.length;H++){const ge=E[H]=G?qs(E[H]):_s(E[H]);B(null,ge,R,V,z,j,F,Z,G)}},b=(E,R,V,z,j,F,Z)=>{const G=R.el=E.el;let{patchFlag:K,dynamicChildren:H,dirs:ge}=R;K|=E.patchFlag&16;const ne=E.props||ot,de=R.props||ot;let pe;if(V&&ui(V,!1),(pe=de.onVnodeBeforeUpdate)&&ds(pe,V,R,E),ge&&ci(R,E,V,"beforeUpdate"),V&&ui(V,!0),(ne.innerHTML&&de.innerHTML==null||ne.textContent&&de.textContent==null)&&g(G,""),H?C(E.dynamicChildren,H,G,V,z,Eu(R,j),F):Z||xe(E,R,G,null,V,z,Eu(R,j),F,!1),K>0){if(K&16)I(G,ne,de,V,j);else if(K&2&&ne.class!==de.class&&i(G,"class",null,de.class,j),K&4&&i(G,"style",ne.style,de.style,j),K&8){const Te=R.dynamicProps;for(let We=0;We<Te.length;We++){const $e=Te[We],pt=ne[$e],ut=de[$e];(ut!==pt||$e==="value")&&i(G,$e,pt,ut,j,V)}}K&1&&E.children!==R.children&&g(G,R.children)}else!Z&&H==null&&I(G,ne,de,V,j);((pe=de.onVnodeUpdated)||ge)&&_n(()=>{pe&&ds(pe,V,R,E),ge&&ci(R,E,V,"updated")},z)},C=(E,R,V,z,j,F,Z)=>{for(let G=0;G<R.length;G++){const K=E[G],H=R[G],ge=K.el&&(K.type===fn||!ea(K,H)||K.shapeFlag&198)?y(K.el):V;B(K,H,ge,null,z,j,F,Z,!0)}},I=(E,R,V,z,j)=>{if(R!==V){if(R!==ot)for(const F in R)!la(F)&&!(F in V)&&i(E,F,R[F],null,j,z);for(const F in V){if(la(F))continue;const Z=V[F],G=R[F];Z!==G&&F!=="value"&&i(E,F,G,Z,j,z)}"value"in V&&i(E,"value",R.value,V.value,j)}},D=(E,R,V,z,j,F,Z,G,K)=>{const H=R.el=E?E.el:c(""),ge=R.anchor=E?E.anchor:c("");let{patchFlag:ne,dynamicChildren:de,slotScopeIds:pe}=R;pe&&(G=G?G.concat(pe):pe),E==null?(s(H,V,z),s(ge,V,z),w(R.children||[],V,ge,j,F,Z,G,K)):ne>0&&ne&64&&de&&E.dynamicChildren&&E.dynamicChildren.length===de.length?(C(E.dynamicChildren,de,V,j,F,Z,G),(R.key!=null||j&&R===j.subTree)&&wm(E,R,!0)):xe(E,R,V,ge,j,F,Z,G,K)},T=(E,R,V,z,j,F,Z,G,K)=>{R.slotScopeIds=G,E==null?R.shapeFlag&512?j.ctx.activate(R,V,z,Z,K):mt(R,V,z,j,F,Z,K):zt(E,R,K)},mt=(E,R,V,z,j,F,Z)=>{const G=E.component=cT(E,z,j);if(rm(E)&&(G.ctx.renderer=jt),hT(G,!1,Z),G.asyncDep){if(j&&j.registerDep(G,_t,Z),!E.el){const K=G.subTree=Ln(Vr);se(null,K,R,V),E.placeholder=K.el}}else _t(G,E,R,V,j,F,Z)},zt=(E,R,V)=>{const z=R.component=E.component;if(HE(E,R,V))if(z.asyncDep&&!z.asyncResolved){qe(z,R,V);return}else z.next=R,z.update();else R.el=E.el,z.vnode=R},_t=(E,R,V,z,j,F,Z)=>{const G=()=>{if(E.isMounted){let{next:ne,bu:de,u:pe,parent:Te,vnode:We}=E;{const At=Em(E);if(At){ne&&(ne.el=We.el,qe(E,ne,Z)),At.asyncDep.then(()=>{_n(()=>{E.isUnmounted||H()},j)});return}}let $e=ne,pt;ui(E,!1),ne?(ne.el=We.el,qe(E,ne,Z)):ne=We,de&&Pl(de),(pt=ne.props&&ne.props.onVnodeBeforeUpdate)&&ds(pt,Te,ne,We),ui(E,!0);const ut=Dd(E),It=E.subTree;E.subTree=ut,B(It,ut,y(It.el),te(It),E,j,F),ne.el=ut.el,$e===null&&qE(E,ut.el),pe&&_n(pe,j),(pt=ne.props&&ne.props.onVnodeUpdated)&&_n(()=>ds(pt,Te,ne,We),j)}else{let ne;const{el:de,props:pe}=R,{bm:Te,m:We,parent:$e,root:pt,type:ut}=E,It=fa(R);ui(E,!1),Te&&Pl(Te),!It&&(ne=pe&&pe.onVnodeBeforeMount)&&ds(ne,$e,R),ui(E,!0);{pt.ce&&pt.ce._hasShadowRoot()&&pt.ce._injectChildStyle(ut,E.parent?E.parent.type:void 0);const At=E.subTree=Dd(E);B(null,At,V,z,E,j,F),R.el=At.el}if(We&&_n(We,j),!It&&(ne=pe&&pe.onVnodeMounted)){const At=R;_n(()=>ds(ne,$e,At),j)}(R.shapeFlag&256||$e&&fa($e.vnode)&&$e.vnode.shapeFlag&256)&&E.a&&_n(E.a,j),E.isMounted=!0,R=V=z=null}};E.scope.on();const K=E.effect=new xg(G);E.scope.off();const H=E.update=K.run.bind(K),ge=E.job=K.runIfDirty.bind(K);ge.i=E,ge.id=E.uid,K.scheduler=()=>Dh(ge),ui(E,!0),H()},qe=(E,R,V)=>{R.component=E;const z=E.vnode.props;E.vnode=R,E.next=null,zE(E,R.props,z,V),JE(E,R.children,V),Ys(),bd(E),Xs()},xe=(E,R,V,z,j,F,Z,G,K=!1)=>{const H=E&&E.children,ge=E?E.shapeFlag:0,ne=R.children,{patchFlag:de,shapeFlag:pe}=R;if(de>0){if(de&128){Fn(H,ne,V,z,j,F,Z,G,K);return}else if(de&256){Kt(H,ne,V,z,j,F,Z,G,K);return}}pe&8?(ge&16&&he(H,j,F),ne!==H&&g(V,ne)):ge&16?pe&16?Fn(H,ne,V,z,j,F,Z,G,K):he(H,j,F,!0):(ge&8&&g(V,""),pe&16&&w(ne,V,z,j,F,Z,G,K))},Kt=(E,R,V,z,j,F,Z,G,K)=>{E=E||Zi,R=R||Zi;const H=E.length,ge=R.length,ne=Math.min(H,ge);let de;for(de=0;de<ne;de++){const pe=R[de]=K?qs(R[de]):_s(R[de]);B(E[de],pe,V,null,j,F,Z,G,K)}H>ge?he(E,j,F,!0,!1,ne):w(R,V,z,j,F,Z,G,K,ne)},Fn=(E,R,V,z,j,F,Z,G,K)=>{let H=0;const ge=R.length;let ne=E.length-1,de=ge-1;for(;H<=ne&&H<=de;){const pe=E[H],Te=R[H]=K?qs(R[H]):_s(R[H]);if(ea(pe,Te))B(pe,Te,V,null,j,F,Z,G,K);else break;H++}for(;H<=ne&&H<=de;){const pe=E[ne],Te=R[de]=K?qs(R[de]):_s(R[de]);if(ea(pe,Te))B(pe,Te,V,null,j,F,Z,G,K);else break;ne--,de--}if(H>ne){if(H<=de){const pe=de+1,Te=pe<ge?R[pe].el:z;for(;H<=de;)B(null,R[H]=K?qs(R[H]):_s(R[H]),V,Te,j,F,Z,G,K),H++}}else if(H>de)for(;H<=ne;)Pt(E[H],j,F,!0),H++;else{const pe=H,Te=H,We=new Map;for(H=Te;H<=de;H++){const wt=R[H]=K?qs(R[H]):_s(R[H]);wt.key!=null&&We.set(wt.key,H)}let $e,pt=0;const ut=de-Te+1;let It=!1,At=0;const Gt=new Array(ut);for(H=0;H<ut;H++)Gt[H]=0;for(H=pe;H<=ne;H++){const wt=E[H];if(pt>=ut){Pt(wt,j,F,!0);continue}let St;if(wt.key!=null)St=We.get(wt.key);else for($e=Te;$e<=de;$e++)if(Gt[$e-Te]===0&&ea(wt,R[$e])){St=$e;break}St===void 0?Pt(wt,j,F,!0):(Gt[St-Te]=H+1,St>=At?At=St:It=!0,B(wt,R[St],V,null,j,F,Z,G,K),pt++)}const ar=It?eT(Gt):Zi;for($e=ar.length-1,H=ut-1;H>=0;H--){const wt=Te+H,St=R[wt],Hr=R[wt+1],ks=wt+1<ge?Hr.el||Tm(Hr):z;Gt[H]===0?B(null,St,V,ks,j,F,Z,G,K):It&&($e<0||H!==ar[$e]?L(St,V,ks,2):$e--)}}},L=(E,R,V,z,j=null)=>{const{el:F,type:Z,transition:G,children:K,shapeFlag:H}=E;if(H&6){L(E.component.subTree,R,V,z);return}if(H&128){E.suspense.move(R,V,z);return}if(H&64){Z.move(E,R,V,jt);return}if(Z===fn){s(F,R,V);for(let ne=0;ne<K.length;ne++)L(K[ne],R,V,z);s(E.anchor,R,V);return}if(Z===Tu){ae(E,R,V);return}if(z!==2&&H&1&&G)if(z===0)G.persisted&&!F[vu]?s(F,R,V):(G.beforeEnter(F),s(F,R,V),_n(()=>G.enter(F),j));else{const{leave:ne,delayLeave:de,afterLeave:pe}=G,Te=()=>{E.ctx.isUnmounted?r(F):s(F,R,V)},We=()=>{const $e=F._isLeaving||!!F[vu];F._isLeaving&&F[vu](!0),G.persisted&&!$e?Te():ne(F,()=>{Te(),pe&&pe()})};de?de(F,Te,We):We()}else s(F,R,V)},Pt=(E,R,V,z=!1,j=!1)=>{const{type:F,props:Z,ref:G,children:K,dynamicChildren:H,shapeFlag:ge,patchFlag:ne,dirs:de,cacheIndex:pe,memo:Te}=E;if(ne===-2&&(j=!1),G!=null&&(Ys(),ha(G,null,V,E,!0),Xs()),pe!=null&&(R.renderCache[pe]=void 0),ge&256){R.ctx.deactivate(E);return}const We=ge&1&&de,$e=!fa(E);let pt;if($e&&(pt=Z&&Z.onVnodeBeforeUnmount)&&ds(pt,R,E),ge&6)kt(E.component,V,z);else{if(ge&128){E.suspense.unmount(V,z);return}We&&ci(E,null,R,"beforeUnmount"),ge&64?E.type.remove(E,R,V,jt,z):H&&!H.hasOnce&&(F!==fn||ne>0&&ne&64)?he(H,R,V,!1,!0):(F===fn&&ne&384||!j&&ge&16)&&he(K,R,V),z&&es(E)}const ut=Te!=null&&pe==null;($e&&(pt=Z&&Z.onVnodeUnmounted)||We||ut)&&_n(()=>{pt&&ds(pt,R,E),We&&ci(E,null,R,"unmounted"),ut&&(E.el=null)},V)},es=E=>{const{type:R,el:V,anchor:z,transition:j}=E;if(R===fn){vn(V,z);return}if(R===Tu){ue(E);return}const F=()=>{r(V),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:Z,delayLeave:G}=j,K=()=>Z(V,F);G?G(E.el,F,K):K()}else F()},vn=(E,R)=>{let V;for(;E!==R;)V=A(E),r(E),E=V;r(R)},kt=(E,R,V)=>{const{bum:z,scope:j,job:F,subTree:Z,um:G,m:K,a:H}=E;xd(K),xd(H),z&&Pl(z),j.stop(),F&&(F.flags|=8,Pt(Z,E,R,V)),G&&_n(G,R),_n(()=>{E.isUnmounted=!0},R)},he=(E,R,V,z=!1,j=!1,F=0)=>{for(let Z=F;Z<E.length;Z++)Pt(E[Z],R,V,z,j)},te=E=>{if(E.shapeFlag&6)return te(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=A(E.anchor||E.el),V=R&&R[mE];return V?A(V):R};let et=!1;const ee=(E,R,V)=>{let z;E==null?R._vnode&&(Pt(R._vnode,null,null,!0),z=R._vnode.component):B(R._vnode||null,E,R,null,null,null,V),R._vnode=E,et||(et=!0,bd(z),Xg(),et=!1)},jt={p:B,um:Pt,m:L,r:es,mt,mc:w,pc:xe,pbc:C,n:te,o:t};return{render:ee,hydrate:void 0,createApp:LE(ee)}}function Eu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ui({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ZE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wm(t,e,n=!1){const s=t.children,r=e.children;if(Ee(s)&&Ee(r))for(let i=0;i<s.length;i++){const a=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=qs(r[i]),c.el=a.el),!n&&c.patchFlag!==-2&&wm(a,c)),c.type===Cc&&(c.patchFlag===-1&&(c=r[i]=qs(c)),c.el=a.el),c.type===Vr&&!c.el&&(c.el=a.el)}}function eT(t){const e=t.slice(),n=[0];let s,r,i,a,c;const u=t.length;for(s=0;s<u;s++){const d=t[s];if(d!==0){if(r=n[n.length-1],t[r]<d){e[s]=r,n.push(s);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<d?i=c+1:a=c;d<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Em(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Em(e)}function xd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Tm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Tm(e.subTree):null}const bm=t=>t.__isSuspense;function tT(t,e){e&&e.pendingBranch?Ee(t)?e.effects.push(...t):e.effects.push(t):uE(t)}const fn=Symbol.for("v-fgt"),Cc=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),Tu=Symbol.for("v-stc"),pa=[];let bn=null;function be(t=!1){pa.push(bn=t?null:[])}function nT(){pa.pop(),bn=pa[pa.length-1]||null}let ba=1;function Vd(t,e=!1){ba+=t,t<0&&bn&&e&&(bn.hasOnce=!0)}function Im(t){return t.dynamicChildren=ba>0?bn||Zi:null,nT(),ba>0&&bn&&bn.push(t),t}function Re(t,e,n,s,r,i){return Im(oe(t,e,n,s,r,i,!0))}function sT(t,e,n,s,r){return Im(Ln(t,e,n,s,r,!0))}function Am(t){return t?t.__v_isVNode===!0:!1}function ea(t,e){return t.type===e.type&&t.key===e.key}const Sm=({key:t})=>t??null,Dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?vt(t)||sn(t)||Ne(t)?{i:Vn,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,s=0,r=null,i=t===fn?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sm(e),ref:e&&Dl(e),scopeId:em,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vn};return c?(Mh(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=vt(n)?8:16),ba>0&&!a&&bn&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&bn.push(u),u}const Ln=rT;function rT(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===PE)&&(t=Vr),Am(t)){const c=fo(t,e,!0);return n&&Mh(c,n),ba>0&&!i&&bn&&(c.shapeFlag&6?bn[bn.indexOf(t)]=c:bn.push(c)),c.patchFlag=-2,c}if(gT(t)&&(t=t.__vccOpts),e){e=iT(e);let{class:c,style:u}=e;c&&!vt(c)&&(e.class=Ma(c)),rt(u)&&(kh(u)&&!Ee(u)&&(u=rn({},u)),e.style=Tc(u))}const a=vt(t)?1:bm(t)?128:_E(t)?64:rt(t)?4:Ne(t)?2:0;return oe(t,e,n,s,r,a,i,!0)}function iT(t){return t?kh(t)||pm(t)?rn({},t):t:null}function fo(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:a,children:c,transition:u}=t,d=e?oT(r||{},e):r,g={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Sm(d),ref:e&&e.ref?n&&i?Ee(i)?i.concat(Dl(e)):[i,Dl(e)]:Dl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fo(t.ssContent),ssFallback:t.ssFallback&&fo(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&Oh(g,u.clone(g)),g}function Cm(t=" ",e=0){return Ln(Cc,null,t,e)}function Tn(t="",e=!1){return e?(be(),sT(Vr,null,t)):Ln(Vr,null,t)}function _s(t){return t==null||typeof t=="boolean"?Ln(Vr):Ee(t)?Ln(fn,null,t.slice()):Am(t)?qs(t):Ln(Cc,null,String(t))}function qs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fo(t)}function Mh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Ee(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Mh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!pm(e)?e._ctx=Vn:r===3&&Vn&&(Vn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:Vn},n=32):(e=String(e),s&64?(n=16,e=[Cm(e)]):n=8);t.children=e,t.shapeFlag|=n}function oT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ma([e.class,s.class]));else if(r==="style")e.style=Tc([e.style,s.style]);else if(mc(r)){const i=e[r],a=s[r];a&&i!==a&&!(Ee(i)&&i.includes(a))?e[r]=i?[].concat(i,a):a:a==null&&i==null&&!_c(r)&&(e[r]=a)}else r!==""&&(e[r]=s[r])}return e}function ds(t,e,n,s=null){Zn(t,e,7,[n,s])}const aT=cm();let lT=0;function cT(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||aT,i={uid:lT++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Nw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(s,r),emitsOptions:um(s,r),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:s.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=UE.bind(null,i),t.ce&&t.ce(i),i}let dn=null;const uT=()=>dn||Vn;let Gl,Ku;{const t=Ec(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(a=>a(i)):r[0](i)}};Gl=e("__VUE_INSTANCE_SETTERS__",n=>dn=n),Ku=e("__VUE_SSR_SETTERS__",n=>Ia=n)}const Ua=t=>{const e=dn;return Gl(t),t.scope.on(),()=>{t.scope.off(),Gl(e)}},Md=()=>{dn&&dn.scope.off(),Gl(null)};function Rm(t){return t.vnode.shapeFlag&4}let Ia=!1;function hT(t,e=!1,n=!1){e&&Ku(e);const{props:s,children:r}=t.vnode,i=Rm(t);WE(t,s,i,e),QE(t,r,n||e);const a=i?fT(t,e):void 0;return e&&Ku(!1),a}function fT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kE);const{setup:s}=n;if(s){Ys();const r=t.setupContext=s.length>1?pT(t):null,i=Ua(t),a=Fa(s,t,0,[t.props,r]),c=Sg(a);if(Xs(),i(),(c||t.sp)&&!fa(t)&&sm(t),c){if(a.then(Md,Md),e)return a.then(u=>{Ld(t,u)}).catch(u=>{Ic(u,t,0)});t.asyncDep=a}else Ld(t,a)}else Pm(t)}function Ld(t,e,n){Ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:rt(e)&&(t.setupState=Gg(e)),Pm(t)}function Pm(t,e,n){const s=t.type;t.render||(t.render=s.render||vs);{const r=Ua(t);Ys();try{DE(t)}finally{Xs(),r()}}}const dT={get(t,e){return tn(t,"get",""),t[e]}};function pT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,dT),slots:t.slots,emit:t.emit,expose:e}}function Rc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gg(Zw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in da)return da[n](t)},has(e,n){return n in e||n in da}})):t.proxy}function gT(t){return Ne(t)&&"__vccOpts"in t}const Ir=(t,e)=>iE(t,e,Ia),mT="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gu;const Fd=typeof window<"u"&&window.trustedTypes;if(Fd)try{Gu=Fd.createPolicy("vue",{createHTML:t=>t})}catch{}const km=Gu?t=>Gu.createHTML(t):t=>t,_T="http://www.w3.org/2000/svg",yT="http://www.w3.org/1998/Math/MathML",Hs=typeof document<"u"?document:null,Ud=Hs&&Hs.createElement("template"),vT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Hs.createElementNS(_T,t):e==="mathml"?Hs.createElementNS(yT,t):n?Hs.createElement(t,{is:n}):Hs.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Hs.createTextNode(t),createComment:t=>Hs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const a=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ud.innerHTML=km(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=Ud.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wT=Symbol("_vtc");function ET(t,e,n){const s=t[wT];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jd=Symbol("_vod"),TT=Symbol("_vsh"),bT=Symbol(""),IT=/(?:^|;)\s*display\s*:/;function AT(t,e,n){const s=t.style,r=vt(n);let i=!1;if(n&&!r){if(e)if(vt(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&sa(s,c,"")}else for(const a in e)n[a]==null&&sa(s,a,"");for(const a in n){a==="display"&&(i=!0);const c=n[a];c!=null?CT(t,a,!vt(e)&&e?e[a]:void 0,c)||sa(s,a,c):sa(s,a,"")}}else if(r){if(e!==n){const a=s[bT];a&&(n+=";"+a),s.cssText=n,i=IT.test(n)}}else e&&t.removeAttribute("style");jd in t&&(t[jd]=i?s.display:"",t[TT]&&(s.display="none"))}const $d=/\s*!important$/;function sa(t,e,n){if(Ee(n))n.forEach(s=>sa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ST(t,e);$d.test(n)?t.setProperty(Ii(s),n.replace($d,""),"important"):t[s]=n}}const Bd=["Webkit","Moz","ms"],bu={};function ST(t,e){const n=bu[e];if(n)return n;let s=Gn(e);if(s!=="filter"&&s in t)return bu[e]=s;s=Pg(s);for(let r=0;r<Bd.length;r++){const i=Bd[r]+s;if(i in t)return bu[e]=i}return e}function CT(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&vt(s)&&n===s}const Hd="http://www.w3.org/1999/xlink";function qd(t,e,n,s,r,i=kw(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hd,e.slice(6,e.length)):t.setAttributeNS(Hd,e,n):n==null||i&&!Dg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":As(n)?String(n):n)}function Wd(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?km(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Dg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function di(t,e,n,s){t.addEventListener(e,n,s)}function RT(t,e,n,s){t.removeEventListener(e,n,s)}const zd=Symbol("_vei");function PT(t,e,n,s,r=null){const i=t[zd]||(t[zd]={}),a=i[e];if(s&&a)a.value=s;else{const[c,u]=kT(e);if(s){const d=i[e]=NT(s,r);di(t,c,d,u)}else a&&(RT(t,c,a,u),i[e]=void 0)}}const Kd=/(?:Once|Passive|Capture)$/;function kT(t){let e;if(Kd.test(t)){e={};let s;for(;s=t.match(Kd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ii(t.slice(2)),e]}let Iu=0;const DT=Promise.resolve(),OT=()=>Iu||(DT.then(()=>Iu=0),Iu=Date.now());function NT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(Ee(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const a=r.slice(),c=[s];for(let u=0;u<a.length&&!s._stopped;u++){const d=a[u];d&&Zn(d,e,5,c)}}else Zn(r,e,5,[s])};return n.value=t,n.attached=OT(),n}const Gd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xT=(t,e,n,s,r,i)=>{const a=r==="svg";e==="class"?ET(t,s,a):e==="style"?AT(t,n,s):mc(e)?_c(e)||PT(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VT(t,e,s,a))?(Wd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qd(t,e,s,a,i,e!=="value")):t._isVueCE&&(MT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!vt(s)))?Wd(t,Gn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qd(t,e,s,a))};function VT(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gd(e)&&Ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gd(e)&&vt(n)?!1:e in t}function MT(t,e){const n=t._def.props;if(!n)return!1;const s=Gn(e);return Array.isArray(n)?n.some(r=>Gn(r)===s):Object.keys(n).some(r=>Gn(r)===s)}const Ql=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ee(e)?n=>Pl(e,n):e};function LT(t){t.target.composing=!0}function Qd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const so=Symbol("_assign");function Jd(t,e,n){return e&&(t=t.trim()),n&&(t=wc(t)),t}const FT={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[so]=Ql(r);const i=s||r.props&&r.props.type==="number";di(t,e?"change":"input",a=>{a.target.composing||t[so](Jd(t.value,n,i))}),(n||i)&&di(t,"change",()=>{t.value=Jd(t.value,n,i)}),e||(di(t,"compositionstart",LT),di(t,"compositionend",Qd),di(t,"change",Qd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},a){if(t[so]=Ql(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?wc(t.value):t.value,u=e??"";if(c===u)return;const d=t.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u)}},UT={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=yc(e);di(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?wc(Jl(a)):Jl(a));t[so](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Jg(()=>{t._assigning=!1})}),t[so]=Ql(s)},mounted(t,{value:e}){Yd(t,e)},beforeUpdate(t,e,n){t[so]=Ql(n)},updated(t,{value:e}){t._assigning||Yd(t,e)}};function Yd(t,e){const n=t.multiple,s=Ee(e);if(!(n&&!s&&!yc(e))){for(let r=0,i=t.options.length;r<i;r++){const a=t.options[r],c=Jl(a);if(n)if(s){const u=typeof c;u==="string"||u==="number"?a.selected=e.some(d=>String(d)===String(c)):a.selected=Ow(e,c)>-1}else a.selected=e.has(c);else if(La(Jl(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jl(t){return"_value"in t?t._value:t.value}const jT=["ctrl","shift","alt","meta"],$T={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jT.some(n=>t[`${n}Key`]&&!e.includes(n))},BT=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let a=0;a<e.length;a++){const c=$T[e[a]];if(c&&c(r,e))return}return t(r,...i)}))},HT=rn({patchProp:xT},vT);let Xd;function qT(){return Xd||(Xd=YE(HT))}const WT=((...t)=>{const e=qT().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=KT(s);if(!r)return;const i=e._component;!Ne(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,zT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function zT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function KT(t){return vt(t)?document.querySelector(t):t}var Ol={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var GT=Ol.exports,Zd;function QT(){return Zd||(Zd=1,(function(t,e){(function(n,s){t.exports=s()})(GT,function(){const n=new Map,s={set(m,l,f){n.has(m)||n.set(m,new Map);const _=n.get(m);_.has(l)||_.size===0?_.set(l,f):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(_.keys())[0]}.`)},get:(m,l)=>n.has(m)&&n.get(m).get(l)||null,remove(m,l){if(!n.has(m))return;const f=n.get(m);f.delete(l),f.size===0&&n.delete(m)}},r="transitionend",i=m=>(m&&window.CSS&&window.CSS.escape&&(m=m.replace(/#([^\s"#']+)/g,(l,f)=>`#${CSS.escape(f)}`)),m),a=m=>m==null?`${m}`:Object.prototype.toString.call(m).match(/\s([a-z]+)/i)[1].toLowerCase(),c=m=>{m.dispatchEvent(new Event(r))},u=m=>!(!m||typeof m!="object")&&(m.jquery!==void 0&&(m=m[0]),m.nodeType!==void 0),d=m=>u(m)?m.jquery?m[0]:m:typeof m=="string"&&m.length>0?document.querySelector(i(m)):null,g=m=>{if(!u(m)||m.getClientRects().length===0)return!1;const l=getComputedStyle(m).getPropertyValue("visibility")==="visible",f=m.closest("details:not([open])");if(!f)return l;if(f!==m){const _=m.closest("summary");if(_&&_.parentNode!==f||_===null)return!1}return l},y=m=>!m||m.nodeType!==Node.ELEMENT_NODE||!!m.classList.contains("disabled")||(m.disabled!==void 0?m.disabled:m.hasAttribute("disabled")&&m.getAttribute("disabled")!=="false"),A=m=>{if(!document.documentElement.attachShadow)return null;if(typeof m.getRootNode=="function"){const l=m.getRootNode();return l instanceof ShadowRoot?l:null}return m instanceof ShadowRoot?m:m.parentNode?A(m.parentNode):null},O=()=>{},$=m=>{m.offsetHeight},B=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Q=[],se=()=>document.documentElement.dir==="rtl",Y=m=>{var l;l=()=>{const f=B();if(f){const _=m.NAME,P=f.fn[_];f.fn[_]=m.jQueryInterface,f.fn[_].Constructor=m,f.fn[_].noConflict=()=>(f.fn[_]=P,m.jQueryInterface)}},document.readyState==="loading"?(Q.length||document.addEventListener("DOMContentLoaded",()=>{for(const f of Q)f()}),Q.push(l)):l()},ae=(m,l=[],f=m)=>typeof m=="function"?m.call(...l):f,ue=(m,l,f=!0)=>{if(!f)return void ae(m);const _=(M=>{if(!M)return 0;let{transitionDuration:q,transitionDelay:X}=window.getComputedStyle(M);const le=Number.parseFloat(q),ce=Number.parseFloat(X);return le||ce?(q=q.split(",")[0],X=X.split(",")[0],1e3*(Number.parseFloat(q)+Number.parseFloat(X))):0})(l)+5;let P=!1;const k=({target:M})=>{M===l&&(P=!0,l.removeEventListener(r,k),ae(m))};l.addEventListener(r,k),setTimeout(()=>{P||c(l)},_)},De=(m,l,f,_)=>{const P=m.length;let k=m.indexOf(l);return k===-1?!f&&_?m[P-1]:m[0]:(k+=f?1:-1,_&&(k=(k+P)%P),m[Math.max(0,Math.min(k,P-1))])},Je=/[^.]*(?=\..*)\.|.*/,S=/\..*/,w=/::\d+$/,b={};let C=1;const I={mouseenter:"mouseover",mouseleave:"mouseout"},D=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(m,l){return l&&`${l}::${C++}`||m.uidEvent||C++}function mt(m){const l=T(m);return m.uidEvent=l,b[l]=b[l]||{},b[l]}function zt(m,l,f=null){return Object.values(m).find(_=>_.callable===l&&_.delegationSelector===f)}function _t(m,l,f){const _=typeof l=="string",P=_?f:l||f;let k=Fn(m);return D.has(k)||(k=m),[_,P,k]}function qe(m,l,f,_,P){if(typeof l!="string"||!m)return;let[k,M,q]=_t(l,f,_);l in I&&(M=(Se=>function(we){if(!we.relatedTarget||we.relatedTarget!==we.delegateTarget&&!we.delegateTarget.contains(we.relatedTarget))return Se.call(this,we)})(M));const X=mt(m),le=X[q]||(X[q]={}),ce=zt(le,M,k?f:null);if(ce)return void(ce.oneOff=ce.oneOff&&P);const re=T(M,l.replace(Je,"")),Oe=k?(function(_e,Se,we){return function Ce(nt){const lt=_e.querySelectorAll(Se);for(let{target:Me}=nt;Me&&Me!==this;Me=Me.parentNode)for(const ze of lt)if(ze===Me)return Pt(nt,{delegateTarget:Me}),Ce.oneOff&&L.off(_e,nt.type,Se,we),we.apply(Me,[nt])}})(m,f,M):(function(_e,Se){return function we(Ce){return Pt(Ce,{delegateTarget:_e}),we.oneOff&&L.off(_e,Ce.type,Se),Se.apply(_e,[Ce])}})(m,M);Oe.delegationSelector=k?f:null,Oe.callable=M,Oe.oneOff=P,Oe.uidEvent=re,le[re]=Oe,m.addEventListener(q,Oe,k)}function xe(m,l,f,_,P){const k=zt(l[f],_,P);k&&(m.removeEventListener(f,k,!!P),delete l[f][k.uidEvent])}function Kt(m,l,f,_){const P=l[f]||{};for(const[k,M]of Object.entries(P))k.includes(_)&&xe(m,l,f,M.callable,M.delegationSelector)}function Fn(m){return m=m.replace(S,""),I[m]||m}const L={on(m,l,f,_){qe(m,l,f,_,!1)},one(m,l,f,_){qe(m,l,f,_,!0)},off(m,l,f,_){if(typeof l!="string"||!m)return;const[P,k,M]=_t(l,f,_),q=M!==l,X=mt(m),le=X[M]||{},ce=l.startsWith(".");if(k===void 0){if(ce)for(const re of Object.keys(X))Kt(m,X,re,l.slice(1));for(const[re,Oe]of Object.entries(le)){const _e=re.replace(w,"");q&&!l.includes(_e)||xe(m,X,M,Oe.callable,Oe.delegationSelector)}}else{if(!Object.keys(le).length)return;xe(m,X,M,k,P?f:null)}},trigger(m,l,f){if(typeof l!="string"||!m)return null;const _=B();let P=null,k=!0,M=!0,q=!1;l!==Fn(l)&&_&&(P=_.Event(l,f),_(m).trigger(P),k=!P.isPropagationStopped(),M=!P.isImmediatePropagationStopped(),q=P.isDefaultPrevented());const X=Pt(new Event(l,{bubbles:k,cancelable:!0}),f);return q&&X.preventDefault(),M&&m.dispatchEvent(X),X.defaultPrevented&&P&&P.preventDefault(),X}};function Pt(m,l={}){for(const[f,_]of Object.entries(l))try{m[f]=_}catch{Object.defineProperty(m,f,{configurable:!0,get:()=>_})}return m}function es(m){if(m==="true")return!0;if(m==="false")return!1;if(m===Number(m).toString())return Number(m);if(m===""||m==="null")return null;if(typeof m!="string")return m;try{return JSON.parse(decodeURIComponent(m))}catch{return m}}function vn(m){return m.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const kt={setDataAttribute(m,l,f){m.setAttribute(`data-bs-${vn(l)}`,f)},removeDataAttribute(m,l){m.removeAttribute(`data-bs-${vn(l)}`)},getDataAttributes(m){if(!m)return{};const l={},f=Object.keys(m.dataset).filter(_=>_.startsWith("bs")&&!_.startsWith("bsConfig"));for(const _ of f){let P=_.replace(/^bs/,"");P=P.charAt(0).toLowerCase()+P.slice(1),l[P]=es(m.dataset[_])}return l},getDataAttribute:(m,l)=>es(m.getAttribute(`data-bs-${vn(l)}`))};class he{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,f){const _=u(f)?kt.getDataAttribute(f,"config"):{};return{...this.constructor.Default,...typeof _=="object"?_:{},...u(f)?kt.getDataAttributes(f):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,f=this.constructor.DefaultType){for(const[_,P]of Object.entries(f)){const k=l[_],M=u(k)?"element":a(k);if(!new RegExp(P).test(M))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${_}" provided type "${M}" but expected type "${P}".`)}}}class te extends he{constructor(l,f){super(),(l=d(l))&&(this._element=l,this._config=this._getConfig(f),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),L.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,f,_=!0){ue(l,f,_)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return s.get(d(l),this.DATA_KEY)}static getOrCreateInstance(l,f={}){return this.getInstance(l)||new this(l,typeof f=="object"?f:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const et=m=>{let l=m.getAttribute("data-bs-target");if(!l||l==="#"){let f=m.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),l=f&&f!=="#"?f.trim():null}return l?l.split(",").map(f=>i(f)).join(","):null},ee={find:(m,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,m)),findOne:(m,l=document.documentElement)=>Element.prototype.querySelector.call(l,m),children:(m,l)=>[].concat(...m.children).filter(f=>f.matches(l)),parents(m,l){const f=[];let _=m.parentNode.closest(l);for(;_;)f.push(_),_=_.parentNode.closest(l);return f},prev(m,l){let f=m.previousElementSibling;for(;f;){if(f.matches(l))return[f];f=f.previousElementSibling}return[]},next(m,l){let f=m.nextElementSibling;for(;f;){if(f.matches(l))return[f];f=f.nextElementSibling}return[]},focusableChildren(m){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(f=>`${f}:not([tabindex^="-"])`).join(",");return this.find(l,m).filter(f=>!y(f)&&g(f))},getSelectorFromElement(m){const l=et(m);return l&&ee.findOne(l)?l:null},getElementFromSelector(m){const l=et(m);return l?ee.findOne(l):null},getMultipleElementsFromSelector(m){const l=et(m);return l?ee.find(l):[]}},jt=(m,l="hide")=>{const f=`click.dismiss${m.EVENT_KEY}`,_=m.NAME;L.on(document,f,`[data-bs-dismiss="${_}"]`,function(P){if(["A","AREA"].includes(this.tagName)&&P.preventDefault(),y(this))return;const k=ee.getElementFromSelector(this)||this.closest(`.${_}`);m.getOrCreateInstance(k)[l]()})},Ae=".bs.alert",E=`close${Ae}`,R=`closed${Ae}`;class V extends te{static get NAME(){return"alert"}close(){if(L.trigger(this._element,E).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),L.trigger(this._element,R),this.dispose()}static jQueryInterface(l){return this.each(function(){const f=V.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}jt(V,"close"),Y(V);const z='[data-bs-toggle="button"]';class j extends te{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const f=j.getOrCreateInstance(this);l==="toggle"&&f[l]()})}}L.on(document,"click.bs.button.data-api",z,m=>{m.preventDefault();const l=m.target.closest(z);j.getOrCreateInstance(l).toggle()}),Y(j);const F=".bs.swipe",Z=`touchstart${F}`,G=`touchmove${F}`,K=`touchend${F}`,H=`pointerdown${F}`,ge=`pointerup${F}`,ne={endCallback:null,leftCallback:null,rightCallback:null},de={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class pe extends he{constructor(l,f){super(),this._element=l,l&&pe.isSupported()&&(this._config=this._getConfig(f),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ne}static get DefaultType(){return de}static get NAME(){return"swipe"}dispose(){L.off(this._element,F)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),ae(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const f=l/this._deltaX;this._deltaX=0,f&&ae(f>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(L.on(this._element,H,l=>this._start(l)),L.on(this._element,ge,l=>this._end(l)),this._element.classList.add("pointer-event")):(L.on(this._element,Z,l=>this._start(l)),L.on(this._element,G,l=>this._move(l)),L.on(this._element,K,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Te=".bs.carousel",We=".data-api",$e="ArrowLeft",pt="ArrowRight",ut="next",It="prev",At="left",Gt="right",ar=`slide${Te}`,wt=`slid${Te}`,St=`keydown${Te}`,Hr=`mouseenter${Te}`,ks=`mouseleave${Te}`,Xa=`dragstart${Te}`,qr=`load${Te}${We}`,Za=`click${Te}${We}`,Vt="carousel",Wr="active",lr=".active",cr=".carousel-item",Kc=lr+cr,Gc={[$e]:Gt,[pt]:At},ur={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Qc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class hr extends te{constructor(l,f){super(l,f),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ee.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Vt&&this.cycle()}static get Default(){return ur}static get DefaultType(){return Qc}static get NAME(){return"carousel"}next(){this._slide(ut)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(It)}pause(){this._isSliding&&c(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?L.one(this._element,wt,()=>this.cycle()):this.cycle())}to(l){const f=this._getItems();if(l>f.length-1||l<0)return;if(this._isSliding)return void L.one(this._element,wt,()=>this.to(l));const _=this._getItemIndex(this._getActive());if(_===l)return;const P=l>_?ut:It;this._slide(P,f[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&L.on(this._element,St,l=>this._keydown(l)),this._config.pause==="hover"&&(L.on(this._element,Hr,()=>this.pause()),L.on(this._element,ks,()=>this._maybeEnableCycle())),this._config.touch&&pe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const f of ee.find(".carousel-item img",this._element))L.on(f,Xa,_=>_.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(At)),rightCallback:()=>this._slide(this._directionToOrder(Gt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new pe(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const f=Gc[l.key];f&&(l.preventDefault(),this._slide(this._directionToOrder(f)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const f=ee.findOne(lr,this._indicatorsElement);f.classList.remove(Wr),f.removeAttribute("aria-current");const _=ee.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);_&&(_.classList.add(Wr),_.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const f=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=f||this._config.defaultInterval}_slide(l,f=null){if(this._isSliding)return;const _=this._getActive(),P=l===ut,k=f||De(this._getItems(),_,P,this._config.wrap);if(k===_)return;const M=this._getItemIndex(k),q=re=>L.trigger(this._element,re,{relatedTarget:k,direction:this._orderToDirection(l),from:this._getItemIndex(_),to:M});if(q(ar).defaultPrevented||!_||!k)return;const X=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(M),this._activeElement=k;const le=P?"carousel-item-start":"carousel-item-end",ce=P?"carousel-item-next":"carousel-item-prev";k.classList.add(ce),$(k),_.classList.add(le),k.classList.add(le),this._queueCallback(()=>{k.classList.remove(le,ce),k.classList.add(Wr),_.classList.remove(Wr,ce,le),this._isSliding=!1,q(wt)},_,this._isAnimated()),X&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ee.findOne(Kc,this._element)}_getItems(){return ee.find(cr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return se()?l===At?It:ut:l===At?ut:It}_orderToDirection(l){return se()?l===It?At:Gt:l===It?Gt:At}static jQueryInterface(l){return this.each(function(){const f=hr.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}}else f.to(l)})}}L.on(document,Za,"[data-bs-slide], [data-bs-slide-to]",function(m){const l=ee.getElementFromSelector(this);if(!l||!l.classList.contains(Vt))return;m.preventDefault();const f=hr.getOrCreateInstance(l),_=this.getAttribute("data-bs-slide-to");return _?(f.to(_),void f._maybeEnableCycle()):kt.getDataAttribute(this,"slide")==="next"?(f.next(),void f._maybeEnableCycle()):(f.prev(),void f._maybeEnableCycle())}),L.on(window,qr,()=>{const m=ee.find('[data-bs-ride="carousel"]');for(const l of m)hr.getOrCreateInstance(l)}),Y(hr);const ts=".bs.collapse",el=`show${ts}`,tl=`shown${ts}`,ko=`hide${ts}`,zr=`hidden${ts}`,Jc=`click${ts}.data-api`,An="show",Ds="collapse",Kr="collapsing",Do=`:scope .${Ds} .${Ds}`,Gr='[data-bs-toggle="collapse"]',nl={parent:null,toggle:!0},Yc={parent:"(null|element)",toggle:"boolean"};class Os extends te{constructor(l,f){super(l,f),this._isTransitioning=!1,this._triggerArray=[];const _=ee.find(Gr);for(const P of _){const k=ee.getSelectorFromElement(P),M=ee.find(k).filter(q=>q===this._element);k!==null&&M.length&&this._triggerArray.push(P)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return nl}static get DefaultType(){return Yc}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(P=>P!==this._element).map(P=>Os.getOrCreateInstance(P,{toggle:!1}))),l.length&&l[0]._isTransitioning||L.trigger(this._element,el).defaultPrevented)return;for(const P of l)P.hide();const f=this._getDimension();this._element.classList.remove(Ds),this._element.classList.add(Kr),this._element.style[f]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const _=`scroll${f[0].toUpperCase()+f.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(Ds,An),this._element.style[f]="",L.trigger(this._element,tl)},this._element,!0),this._element.style[f]=`${this._element[_]}px`}hide(){if(this._isTransitioning||!this._isShown()||L.trigger(this._element,ko).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,$(this._element),this._element.classList.add(Kr),this._element.classList.remove(Ds,An);for(const f of this._triggerArray){const _=ee.getElementFromSelector(f);_&&!this._isShown(_)&&this._addAriaAndCollapsedClass([f],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(Ds),L.trigger(this._element,zr)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(An)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=d(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Gr);for(const f of l){const _=ee.getElementFromSelector(f);_&&this._addAriaAndCollapsedClass([f],this._isShown(_))}}_getFirstLevelChildren(l){const f=ee.find(Do,this._config.parent);return ee.find(l,this._config.parent).filter(_=>!f.includes(_))}_addAriaAndCollapsedClass(l,f){if(l.length)for(const _ of l)_.classList.toggle("collapsed",!f),_.setAttribute("aria-expanded",f)}static jQueryInterface(l){const f={};return typeof l=="string"&&/show|hide/.test(l)&&(f.toggle=!1),this.each(function(){const _=Os.getOrCreateInstance(this,f);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l]()}})}}L.on(document,Jc,Gr,function(m){(m.target.tagName==="A"||m.delegateTarget&&m.delegateTarget.tagName==="A")&&m.preventDefault();for(const l of ee.getMultipleElementsFromSelector(this))Os.getOrCreateInstance(l,{toggle:!1}).toggle()}),Y(Os);var $t="top",Mt="bottom",Qt="right",Dt="left",ns="auto",pn=[$t,Mt,Qt,Dt],Un="start",fr="end",Oo="clippingParents",Pi="viewport",Ns="popper",ki="reference",Qr=pn.reduce(function(m,l){return m.concat([l+"-"+Un,l+"-"+fr])},[]),Di=[].concat(pn,[ns]).reduce(function(m,l){return m.concat([l,l+"-"+Un,l+"-"+fr])},[]),No="beforeRead",xo="read",sl="afterRead",jn="beforeMain",wn="main",dr="afterMain",pr="beforeWrite",Oi="write",tt="afterWrite",Jr=[No,xo,sl,jn,wn,dr,pr,Oi,tt];function Jt(m){return m?(m.nodeName||"").toLowerCase():null}function Ot(m){if(m==null)return window;if(m.toString()!=="[object Window]"){var l=m.ownerDocument;return l&&l.defaultView||window}return m}function xs(m){return m instanceof Ot(m).Element||m instanceof Element}function an(m){return m instanceof Ot(m).HTMLElement||m instanceof HTMLElement}function Vo(m){return typeof ShadowRoot<"u"&&(m instanceof Ot(m).ShadowRoot||m instanceof ShadowRoot)}const Mo={name:"applyStyles",enabled:!0,phase:"write",fn:function(m){var l=m.state;Object.keys(l.elements).forEach(function(f){var _=l.styles[f]||{},P=l.attributes[f]||{},k=l.elements[f];an(k)&&Jt(k)&&(Object.assign(k.style,_),Object.keys(P).forEach(function(M){var q=P[M];q===!1?k.removeAttribute(M):k.setAttribute(M,q===!0?"":q)}))})},effect:function(m){var l=m.state,f={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,f.popper),l.styles=f,l.elements.arrow&&Object.assign(l.elements.arrow.style,f.arrow),function(){Object.keys(l.elements).forEach(function(_){var P=l.elements[_],k=l.attributes[_]||{},M=Object.keys(l.styles.hasOwnProperty(_)?l.styles[_]:f[_]).reduce(function(q,X){return q[X]="",q},{});an(P)&&Jt(P)&&(Object.assign(P.style,M),Object.keys(k).forEach(function(q){P.removeAttribute(q)}))})}},requires:["computeStyles"]};function Sn(m){return m.split("-")[0]}var Vs=Math.max,ss=Math.min,gn=Math.round;function Ni(){var m=navigator.userAgentData;return m!=null&&m.brands&&Array.isArray(m.brands)?m.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function Lo(){return!/^((?!chrome|android).)*safari/i.test(Ni())}function Ms(m,l,f){l===void 0&&(l=!1),f===void 0&&(f=!1);var _=m.getBoundingClientRect(),P=1,k=1;l&&an(m)&&(P=m.offsetWidth>0&&gn(_.width)/m.offsetWidth||1,k=m.offsetHeight>0&&gn(_.height)/m.offsetHeight||1);var M=(xs(m)?Ot(m):window).visualViewport,q=!Lo()&&f,X=(_.left+(q&&M?M.offsetLeft:0))/P,le=(_.top+(q&&M?M.offsetTop:0))/k,ce=_.width/P,re=_.height/k;return{width:ce,height:re,top:le,right:X+ce,bottom:le+re,left:X,x:X,y:le}}function xi(m){var l=Ms(m),f=m.offsetWidth,_=m.offsetHeight;return Math.abs(l.width-f)<=1&&(f=l.width),Math.abs(l.height-_)<=1&&(_=l.height),{x:m.offsetLeft,y:m.offsetTop,width:f,height:_}}function Fo(m,l){var f=l.getRootNode&&l.getRootNode();if(m.contains(l))return!0;if(f&&Vo(f)){var _=l;do{if(_&&m.isSameNode(_))return!0;_=_.parentNode||_.host}while(_)}return!1}function Yt(m){return Ot(m).getComputedStyle(m)}function Xc(m){return["table","td","th"].indexOf(Jt(m))>=0}function rs(m){return((xs(m)?m.ownerDocument:m.document)||window.document).documentElement}function Vi(m){return Jt(m)==="html"?m:m.assignedSlot||m.parentNode||(Vo(m)?m.host:null)||rs(m)}function $n(m){return an(m)&&Yt(m).position!=="fixed"?m.offsetParent:null}function Yr(m){for(var l=Ot(m),f=$n(m);f&&Xc(f)&&Yt(f).position==="static";)f=$n(f);return f&&(Jt(f)==="html"||Jt(f)==="body"&&Yt(f).position==="static")?l:f||(function(_){var P=/firefox/i.test(Ni());if(/Trident/i.test(Ni())&&an(_)&&Yt(_).position==="fixed")return null;var k=Vi(_);for(Vo(k)&&(k=k.host);an(k)&&["html","body"].indexOf(Jt(k))<0;){var M=Yt(k);if(M.transform!=="none"||M.perspective!=="none"||M.contain==="paint"||["transform","perspective"].indexOf(M.willChange)!==-1||P&&M.willChange==="filter"||P&&M.filter&&M.filter!=="none")return k;k=k.parentNode}return null})(m)||l}function Xr(m){return["top","bottom"].indexOf(m)>=0?"x":"y"}function is(m,l,f){return Vs(m,ss(l,f))}function Uo(m){return Object.assign({},{top:0,right:0,bottom:0,left:0},m)}function gr(m,l){return l.reduce(function(f,_){return f[_]=m,f},{})}const mr={name:"arrow",enabled:!0,phase:"main",fn:function(m){var l,f=m.state,_=m.name,P=m.options,k=f.elements.arrow,M=f.modifiersData.popperOffsets,q=Sn(f.placement),X=Xr(q),le=[Dt,Qt].indexOf(q)>=0?"height":"width";if(k&&M){var ce=(function(st,Xe){return Uo(typeof(st=typeof st=="function"?st(Object.assign({},Xe.rects,{placement:Xe.placement})):st)!="number"?st:gr(st,pn))})(P.padding,f),re=xi(k),Oe=X==="y"?$t:Dt,_e=X==="y"?Mt:Qt,Se=f.rects.reference[le]+f.rects.reference[X]-M[X]-f.rects.popper[le],we=M[X]-f.rects.reference[X],Ce=Yr(k),nt=Ce?X==="y"?Ce.clientHeight||0:Ce.clientWidth||0:0,lt=Se/2-we/2,Me=ce[Oe],ze=nt-re[le]-ce[_e],Ve=nt/2-re[le]/2+lt,je=is(Me,Ve,ze),Ye=X;f.modifiersData[_]=((l={})[Ye]=je,l.centerOffset=je-Ve,l)}},effect:function(m){var l=m.state,f=m.options.element,_=f===void 0?"[data-popper-arrow]":f;_!=null&&(typeof _!="string"||(_=l.elements.popper.querySelector(_)))&&Fo(l.elements.popper,_)&&(l.elements.arrow=_)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ls(m){return m.split("-")[1]}var jo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ht(m){var l,f=m.popper,_=m.popperRect,P=m.placement,k=m.variation,M=m.offsets,q=m.position,X=m.gpuAcceleration,le=m.adaptive,ce=m.roundOffsets,re=m.isFixed,Oe=M.x,_e=Oe===void 0?0:Oe,Se=M.y,we=Se===void 0?0:Se,Ce=typeof ce=="function"?ce({x:_e,y:we}):{x:_e,y:we};_e=Ce.x,we=Ce.y;var nt=M.hasOwnProperty("x"),lt=M.hasOwnProperty("y"),Me=Dt,ze=$t,Ve=window;if(le){var je=Yr(f),Ye="clientHeight",st="clientWidth";je===Ot(f)&&Yt(je=rs(f)).position!=="static"&&q==="absolute"&&(Ye="scrollHeight",st="scrollWidth"),(P===$t||(P===Dt||P===Qt)&&k===fr)&&(ze=Mt,we-=(re&&je===Ve&&Ve.visualViewport?Ve.visualViewport.height:je[Ye])-_.height,we*=X?1:-1),P!==Dt&&(P!==$t&&P!==Mt||k!==fr)||(Me=Qt,_e-=(re&&je===Ve&&Ve.visualViewport?Ve.visualViewport.width:je[st])-_.width,_e*=X?1:-1)}var Xe,Tt=Object.assign({position:q},le&&jo),En=ce===!0?(function(qn,ln){var kn=qn.x,Dn=qn.y,yt=ln.devicePixelRatio||1;return{x:gn(kn*yt)/yt||0,y:gn(Dn*yt)/yt||0}})({x:_e,y:we},Ot(f)):{x:_e,y:we};return _e=En.x,we=En.y,X?Object.assign({},Tt,((Xe={})[ze]=lt?"0":"",Xe[Me]=nt?"0":"",Xe.transform=(Ve.devicePixelRatio||1)<=1?"translate("+_e+"px, "+we+"px)":"translate3d("+_e+"px, "+we+"px, 0)",Xe)):Object.assign({},Tt,((l={})[ze]=lt?we+"px":"",l[Me]=nt?_e+"px":"",l.transform="",l))}const $o={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(m){var l=m.state,f=m.options,_=f.gpuAcceleration,P=_===void 0||_,k=f.adaptive,M=k===void 0||k,q=f.roundOffsets,X=q===void 0||q,le={placement:Sn(l.placement),variation:Ls(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:P,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,ht(Object.assign({},le,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:M,roundOffsets:X})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,ht(Object.assign({},le,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:X})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var Mi={passive:!0};const Li={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(m){var l=m.state,f=m.instance,_=m.options,P=_.scroll,k=P===void 0||P,M=_.resize,q=M===void 0||M,X=Ot(l.elements.popper),le=[].concat(l.scrollParents.reference,l.scrollParents.popper);return k&&le.forEach(function(ce){ce.addEventListener("scroll",f.update,Mi)}),q&&X.addEventListener("resize",f.update,Mi),function(){k&&le.forEach(function(ce){ce.removeEventListener("scroll",f.update,Mi)}),q&&X.removeEventListener("resize",f.update,Mi)}},data:{}};var rl={left:"right",right:"left",bottom:"top",top:"bottom"};function Zr(m){return m.replace(/left|right|bottom|top/g,function(l){return rl[l]})}var Fi={start:"end",end:"start"};function Bn(m){return m.replace(/start|end/g,function(l){return Fi[l]})}function Ui(m){var l=Ot(m);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function Bo(m){return Ms(rs(m)).left+Ui(m).scrollLeft}function Fs(m){var l=Yt(m),f=l.overflow,_=l.overflowX,P=l.overflowY;return/auto|scroll|overlay|hidden/.test(f+P+_)}function Ho(m){return["html","body","#document"].indexOf(Jt(m))>=0?m.ownerDocument.body:an(m)&&Fs(m)?m:Ho(Vi(m))}function Us(m,l){var f;l===void 0&&(l=[]);var _=Ho(m),P=_===((f=m.ownerDocument)==null?void 0:f.body),k=Ot(_),M=P?[k].concat(k.visualViewport||[],Fs(_)?_:[]):_,q=l.concat(M);return P?q:q.concat(Us(Vi(M)))}function _r(m){return Object.assign({},m,{left:m.x,top:m.y,right:m.x+m.width,bottom:m.y+m.height})}function qo(m,l,f){return l===Pi?_r((function(_,P){var k=Ot(_),M=rs(_),q=k.visualViewport,X=M.clientWidth,le=M.clientHeight,ce=0,re=0;if(q){X=q.width,le=q.height;var Oe=Lo();(Oe||!Oe&&P==="fixed")&&(ce=q.offsetLeft,re=q.offsetTop)}return{width:X,height:le,x:ce+Bo(_),y:re}})(m,f)):xs(l)?(function(_,P){var k=Ms(_,!1,P==="fixed");return k.top=k.top+_.clientTop,k.left=k.left+_.clientLeft,k.bottom=k.top+_.clientHeight,k.right=k.left+_.clientWidth,k.width=_.clientWidth,k.height=_.clientHeight,k.x=k.left,k.y=k.top,k})(l,f):_r((function(_){var P,k=rs(_),M=Ui(_),q=(P=_.ownerDocument)==null?void 0:P.body,X=Vs(k.scrollWidth,k.clientWidth,q?q.scrollWidth:0,q?q.clientWidth:0),le=Vs(k.scrollHeight,k.clientHeight,q?q.scrollHeight:0,q?q.clientHeight:0),ce=-M.scrollLeft+Bo(_),re=-M.scrollTop;return Yt(q||k).direction==="rtl"&&(ce+=Vs(k.clientWidth,q?q.clientWidth:0)-X),{width:X,height:le,x:ce,y:re}})(rs(m)))}function ei(m){var l,f=m.reference,_=m.element,P=m.placement,k=P?Sn(P):null,M=P?Ls(P):null,q=f.x+f.width/2-_.width/2,X=f.y+f.height/2-_.height/2;switch(k){case $t:l={x:q,y:f.y-_.height};break;case Mt:l={x:q,y:f.y+f.height};break;case Qt:l={x:f.x+f.width,y:X};break;case Dt:l={x:f.x-_.width,y:X};break;default:l={x:f.x,y:f.y}}var le=k?Xr(k):null;if(le!=null){var ce=le==="y"?"height":"width";switch(M){case Un:l[le]=l[le]-(f[ce]/2-_[ce]/2);break;case fr:l[le]=l[le]+(f[ce]/2-_[ce]/2)}}return l}function yr(m,l){l===void 0&&(l={});var f=l,_=f.placement,P=_===void 0?m.placement:_,k=f.strategy,M=k===void 0?m.strategy:k,q=f.boundary,X=q===void 0?Oo:q,le=f.rootBoundary,ce=le===void 0?Pi:le,re=f.elementContext,Oe=re===void 0?Ns:re,_e=f.altBoundary,Se=_e!==void 0&&_e,we=f.padding,Ce=we===void 0?0:we,nt=Uo(typeof Ce!="number"?Ce:gr(Ce,pn)),lt=Oe===Ns?ki:Ns,Me=m.rects.popper,ze=m.elements[Se?lt:Oe],Ve=(function(ln,kn,Dn,yt){var hs=kn==="clippingParents"?(function(it){var cn=Us(Vi(it)),On=["absolute","fixed"].indexOf(Yt(it).position)>=0&&an(it)?Yr(it):it;return xs(On)?cn.filter(function(Tr){return xs(Tr)&&Fo(Tr,On)&&Jt(Tr)!=="body"}):[]})(ln):[].concat(kn),fs=[].concat(hs,[Dn]),Wi=fs[0],Lt=fs.reduce(function(it,cn){var On=qo(ln,cn,yt);return it.top=Vs(On.top,it.top),it.right=ss(On.right,it.right),it.bottom=ss(On.bottom,it.bottom),it.left=Vs(On.left,it.left),it},qo(ln,Wi,yt));return Lt.width=Lt.right-Lt.left,Lt.height=Lt.bottom-Lt.top,Lt.x=Lt.left,Lt.y=Lt.top,Lt})(xs(ze)?ze:ze.contextElement||rs(m.elements.popper),X,ce,M),je=Ms(m.elements.reference),Ye=ei({reference:je,element:Me,placement:P}),st=_r(Object.assign({},Me,Ye)),Xe=Oe===Ns?st:je,Tt={top:Ve.top-Xe.top+nt.top,bottom:Xe.bottom-Ve.bottom+nt.bottom,left:Ve.left-Xe.left+nt.left,right:Xe.right-Ve.right+nt.right},En=m.modifiersData.offset;if(Oe===Ns&&En){var qn=En[P];Object.keys(Tt).forEach(function(ln){var kn=[Qt,Mt].indexOf(ln)>=0?1:-1,Dn=[$t,Mt].indexOf(ln)>=0?"y":"x";Tt[ln]+=qn[Dn]*kn})}return Tt}function il(m,l){l===void 0&&(l={});var f=l,_=f.placement,P=f.boundary,k=f.rootBoundary,M=f.padding,q=f.flipVariations,X=f.allowedAutoPlacements,le=X===void 0?Di:X,ce=Ls(_),re=ce?q?Qr:Qr.filter(function(Se){return Ls(Se)===ce}):pn,Oe=re.filter(function(Se){return le.indexOf(Se)>=0});Oe.length===0&&(Oe=re);var _e=Oe.reduce(function(Se,we){return Se[we]=yr(m,{placement:we,boundary:P,rootBoundary:k,padding:M})[Sn(we)],Se},{});return Object.keys(_e).sort(function(Se,we){return _e[Se]-_e[we]})}const vr={name:"flip",enabled:!0,phase:"main",fn:function(m){var l=m.state,f=m.options,_=m.name;if(!l.modifiersData[_]._skip){for(var P=f.mainAxis,k=P===void 0||P,M=f.altAxis,q=M===void 0||M,X=f.fallbackPlacements,le=f.padding,ce=f.boundary,re=f.rootBoundary,Oe=f.altBoundary,_e=f.flipVariations,Se=_e===void 0||_e,we=f.allowedAutoPlacements,Ce=l.options.placement,nt=Sn(Ce),lt=X||(nt!==Ce&&Se?(function(it){if(Sn(it)===ns)return[];var cn=Zr(it);return[Bn(it),cn,Bn(cn)]})(Ce):[Zr(Ce)]),Me=[Ce].concat(lt).reduce(function(it,cn){return it.concat(Sn(cn)===ns?il(l,{placement:cn,boundary:ce,rootBoundary:re,padding:le,flipVariations:Se,allowedAutoPlacements:we}):cn)},[]),ze=l.rects.reference,Ve=l.rects.popper,je=new Map,Ye=!0,st=Me[0],Xe=0;Xe<Me.length;Xe++){var Tt=Me[Xe],En=Sn(Tt),qn=Ls(Tt)===Un,ln=[$t,Mt].indexOf(En)>=0,kn=ln?"width":"height",Dn=yr(l,{placement:Tt,boundary:ce,rootBoundary:re,altBoundary:Oe,padding:le}),yt=ln?qn?Qt:Dt:qn?Mt:$t;ze[kn]>Ve[kn]&&(yt=Zr(yt));var hs=Zr(yt),fs=[];if(k&&fs.push(Dn[En]<=0),q&&fs.push(Dn[yt]<=0,Dn[hs]<=0),fs.every(function(it){return it})){st=Tt,Ye=!1;break}je.set(Tt,fs)}if(Ye)for(var Wi=function(it){var cn=Me.find(function(On){var Tr=je.get(On);if(Tr)return Tr.slice(0,it).every(function(ml){return ml})});if(cn)return st=cn,"break"},Lt=Se?3:1;Lt>0&&Wi(Lt)!=="break";Lt--);l.placement!==st&&(l.modifiersData[_]._skip=!0,l.placement=st,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Wo(m,l,f){return f===void 0&&(f={x:0,y:0}),{top:m.top-l.height-f.y,right:m.right-l.width+f.x,bottom:m.bottom-l.height+f.y,left:m.left-l.width-f.x}}function zo(m){return[$t,Qt,Mt,Dt].some(function(l){return m[l]>=0})}const ji={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(m){var l=m.state,f=m.name,_=l.rects.reference,P=l.rects.popper,k=l.modifiersData.preventOverflow,M=yr(l,{elementContext:"reference"}),q=yr(l,{altBoundary:!0}),X=Wo(M,_),le=Wo(q,P,k),ce=zo(X),re=zo(le);l.modifiersData[f]={referenceClippingOffsets:X,popperEscapeOffsets:le,isReferenceHidden:ce,hasPopperEscaped:re},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":ce,"data-popper-escaped":re})}},$i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(m){var l=m.state,f=m.options,_=m.name,P=f.offset,k=P===void 0?[0,0]:P,M=Di.reduce(function(ce,re){return ce[re]=(function(Oe,_e,Se){var we=Sn(Oe),Ce=[Dt,$t].indexOf(we)>=0?-1:1,nt=typeof Se=="function"?Se(Object.assign({},_e,{placement:Oe})):Se,lt=nt[0],Me=nt[1];return lt=lt||0,Me=(Me||0)*Ce,[Dt,Qt].indexOf(we)>=0?{x:Me,y:lt}:{x:lt,y:Me}})(re,l.rects,k),ce},{}),q=M[l.placement],X=q.x,le=q.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=X,l.modifiersData.popperOffsets.y+=le),l.modifiersData[_]=M}},Bi={name:"popperOffsets",enabled:!0,phase:"read",fn:function(m){var l=m.state,f=m.name;l.modifiersData[f]=ei({reference:l.rects.reference,element:l.rects.popper,placement:l.placement})},data:{}},ti={name:"preventOverflow",enabled:!0,phase:"main",fn:function(m){var l=m.state,f=m.options,_=m.name,P=f.mainAxis,k=P===void 0||P,M=f.altAxis,q=M!==void 0&&M,X=f.boundary,le=f.rootBoundary,ce=f.altBoundary,re=f.padding,Oe=f.tether,_e=Oe===void 0||Oe,Se=f.tetherOffset,we=Se===void 0?0:Se,Ce=yr(l,{boundary:X,rootBoundary:le,padding:re,altBoundary:ce}),nt=Sn(l.placement),lt=Ls(l.placement),Me=!lt,ze=Xr(nt),Ve=ze==="x"?"y":"x",je=l.modifiersData.popperOffsets,Ye=l.rects.reference,st=l.rects.popper,Xe=typeof we=="function"?we(Object.assign({},l.rects,{placement:l.placement})):we,Tt=typeof Xe=="number"?{mainAxis:Xe,altAxis:Xe}:Object.assign({mainAxis:0,altAxis:0},Xe),En=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,qn={x:0,y:0};if(je){if(k){var ln,kn=ze==="y"?$t:Dt,Dn=ze==="y"?Mt:Qt,yt=ze==="y"?"height":"width",hs=je[ze],fs=hs+Ce[kn],Wi=hs-Ce[Dn],Lt=_e?-st[yt]/2:0,it=lt===Un?Ye[yt]:st[yt],cn=lt===Un?-st[yt]:-Ye[yt],On=l.elements.arrow,Tr=_e&&On?xi(On):{width:0,height:0},ml=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ad=ml[kn],ld=ml[Dn],_l=is(0,Ye[yt],Tr[yt]),dw=Me?Ye[yt]/2-Lt-_l-ad-Tt.mainAxis:it-_l-ad-Tt.mainAxis,pw=Me?-Ye[yt]/2+Lt+_l+ld+Tt.mainAxis:cn+_l+ld+Tt.mainAxis,uu=l.elements.arrow&&Yr(l.elements.arrow),gw=uu?ze==="y"?uu.clientTop||0:uu.clientLeft||0:0,cd=(ln=En==null?void 0:En[ze])!=null?ln:0,mw=hs+pw-cd,ud=is(_e?ss(fs,hs+dw-cd-gw):fs,hs,_e?Vs(Wi,mw):Wi);je[ze]=ud,qn[ze]=ud-hs}if(q){var hd,_w=ze==="x"?$t:Dt,yw=ze==="x"?Mt:Qt,li=je[Ve],yl=Ve==="y"?"height":"width",fd=li+Ce[_w],dd=li-Ce[yw],hu=[$t,Dt].indexOf(nt)!==-1,pd=(hd=En==null?void 0:En[Ve])!=null?hd:0,gd=hu?fd:li-Ye[yl]-st[yl]-pd+Tt.altAxis,md=hu?li+Ye[yl]+st[yl]-pd-Tt.altAxis:dd,_d=_e&&hu?(function(vw,ww,fu){var yd=is(vw,ww,fu);return yd>fu?fu:yd})(gd,li,md):is(_e?gd:fd,li,_e?md:dd);je[Ve]=_d,qn[Ve]=_d-li}l.modifiersData[_]=qn}},requiresIfExists:["offset"]};function ol(m,l,f){f===void 0&&(f=!1);var _,P,k=an(l),M=an(l)&&(function(re){var Oe=re.getBoundingClientRect(),_e=gn(Oe.width)/re.offsetWidth||1,Se=gn(Oe.height)/re.offsetHeight||1;return _e!==1||Se!==1})(l),q=rs(l),X=Ms(m,M,f),le={scrollLeft:0,scrollTop:0},ce={x:0,y:0};return(k||!k&&!f)&&((Jt(l)!=="body"||Fs(q))&&(le=(_=l)!==Ot(_)&&an(_)?{scrollLeft:(P=_).scrollLeft,scrollTop:P.scrollTop}:Ui(_)),an(l)?((ce=Ms(l,!0)).x+=l.clientLeft,ce.y+=l.clientTop):q&&(ce.x=Bo(q))),{x:X.left+le.scrollLeft-ce.x,y:X.top+le.scrollTop-ce.y,width:X.width,height:X.height}}function al(m){var l=new Map,f=new Set,_=[];function P(k){f.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(M){if(!f.has(M)){var q=l.get(M);q&&P(q)}}),_.push(k)}return m.forEach(function(k){l.set(k.name,k)}),m.forEach(function(k){f.has(k.name)||P(k)}),_}var os={placement:"bottom",modifiers:[],strategy:"absolute"};function Ko(){for(var m=arguments.length,l=new Array(m),f=0;f<m;f++)l[f]=arguments[f];return!l.some(function(_){return!(_&&typeof _.getBoundingClientRect=="function")})}function ni(m){m===void 0&&(m={});var l=m,f=l.defaultModifiers,_=f===void 0?[]:f,P=l.defaultOptions,k=P===void 0?os:P;return function(M,q,X){X===void 0&&(X=k);var le,ce,re={placement:"bottom",orderedModifiers:[],options:Object.assign({},os,k),modifiersData:{},elements:{reference:M,popper:q},attributes:{},styles:{}},Oe=[],_e=!1,Se={state:re,setOptions:function(Ce){var nt=typeof Ce=="function"?Ce(re.options):Ce;we(),re.options=Object.assign({},k,re.options,nt),re.scrollParents={reference:xs(M)?Us(M):M.contextElement?Us(M.contextElement):[],popper:Us(q)};var lt,Me,ze=(function(Ve){var je=al(Ve);return Jr.reduce(function(Ye,st){return Ye.concat(je.filter(function(Xe){return Xe.phase===st}))},[])})((lt=[].concat(_,re.options.modifiers),Me=lt.reduce(function(Ve,je){var Ye=Ve[je.name];return Ve[je.name]=Ye?Object.assign({},Ye,je,{options:Object.assign({},Ye.options,je.options),data:Object.assign({},Ye.data,je.data)}):je,Ve},{}),Object.keys(Me).map(function(Ve){return Me[Ve]})));return re.orderedModifiers=ze.filter(function(Ve){return Ve.enabled}),re.orderedModifiers.forEach(function(Ve){var je=Ve.name,Ye=Ve.options,st=Ye===void 0?{}:Ye,Xe=Ve.effect;if(typeof Xe=="function"){var Tt=Xe({state:re,name:je,instance:Se,options:st});Oe.push(Tt||function(){})}}),Se.update()},forceUpdate:function(){if(!_e){var Ce=re.elements,nt=Ce.reference,lt=Ce.popper;if(Ko(nt,lt)){re.rects={reference:ol(nt,Yr(lt),re.options.strategy==="fixed"),popper:xi(lt)},re.reset=!1,re.placement=re.options.placement,re.orderedModifiers.forEach(function(Xe){return re.modifiersData[Xe.name]=Object.assign({},Xe.data)});for(var Me=0;Me<re.orderedModifiers.length;Me++)if(re.reset!==!0){var ze=re.orderedModifiers[Me],Ve=ze.fn,je=ze.options,Ye=je===void 0?{}:je,st=ze.name;typeof Ve=="function"&&(re=Ve({state:re,options:Ye,name:st,instance:Se})||re)}else re.reset=!1,Me=-1}}},update:(le=function(){return new Promise(function(Ce){Se.forceUpdate(),Ce(re)})},function(){return ce||(ce=new Promise(function(Ce){Promise.resolve().then(function(){ce=void 0,Ce(le())})})),ce}),destroy:function(){we(),_e=!0}};if(!Ko(M,q))return Se;function we(){Oe.forEach(function(Ce){return Ce()}),Oe=[]}return Se.setOptions(X).then(function(Ce){!_e&&X.onFirstUpdate&&X.onFirstUpdate(Ce)}),Se}}var ll=ni(),cl=ni({defaultModifiers:[Li,Bi,$o,Mo]}),wr=ni({defaultModifiers:[Li,Bi,$o,Mo,$i,vr,ti,mr,ji]});const Xt=Object.freeze(Object.defineProperty({__proto__:null,afterMain:dr,afterRead:sl,afterWrite:tt,applyStyles:Mo,arrow:mr,auto:ns,basePlacements:pn,beforeMain:jn,beforeRead:No,beforeWrite:pr,bottom:Mt,clippingParents:Oo,computeStyles:$o,createPopper:wr,createPopperBase:ll,createPopperLite:cl,detectOverflow:yr,end:fr,eventListeners:Li,flip:vr,hide:ji,left:Dt,main:wn,modifierPhases:Jr,offset:$i,placements:Di,popper:Ns,popperGenerator:ni,popperOffsets:Bi,preventOverflow:ti,read:xo,reference:ki,right:Qt,start:Un,top:$t,variationPlacements:Qr,viewport:Pi,write:Oi},Symbol.toStringTag,{value:"Module"})),Go="dropdown",as=".bs.dropdown",ls=".data-api",o="ArrowUp",h="ArrowDown",p=`hide${as}`,v=`hidden${as}`,N=`show${as}`,x=`shown${as}`,J=`click${as}${ls}`,ke=`keydown${as}${ls}`,Et=`keyup${as}${ls}`,Be="show",at='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Cn=`${at}.${Be}`,Rn=".dropdown-menu",cs=se()?"top-end":"top-start",us=se()?"top-start":"top-end",Hi=se()?"bottom-end":"bottom-start",Qo=se()?"bottom-start":"bottom-end",Yy=se()?"left-start":"right-start",Xy=se()?"right-start":"left-start",Zy={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ev={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Hn extends te{constructor(l,f){super(l,f),this._popper=null,this._parent=this._element.parentNode,this._menu=ee.next(this._element,Rn)[0]||ee.prev(this._element,Rn)[0]||ee.findOne(Rn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Zy}static get DefaultType(){return ev}static get NAME(){return Go}toggle(){return this._isShown()?this.hide():this.show()}show(){if(y(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!L.trigger(this._element,N,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const f of[].concat(...document.body.children))L.on(f,"mouseover",O);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Be),this._element.classList.add(Be),L.trigger(this._element,x,l)}}hide(){if(y(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!L.trigger(this._element,p,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const f of[].concat(...document.body.children))L.off(f,"mouseover",O);this._popper&&this._popper.destroy(),this._menu.classList.remove(Be),this._element.classList.remove(Be),this._element.setAttribute("aria-expanded","false"),kt.removeDataAttribute(this._menu,"popper"),L.trigger(this._element,v,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!u(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${Go.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(Xt===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let l=this._element;this._config.reference==="parent"?l=this._parent:u(this._config.reference)?l=d(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const f=this._getPopperConfig();this._popper=wr(l,this._menu,f)}_isShown(){return this._menu.classList.contains(Be)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return Yy;if(l.classList.contains("dropstart"))return Xy;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const f=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?f?us:cs:f?Qo:Hi}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(kt.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...ae(this._config.popperConfig,[void 0,l])}}_selectMenuItem({key:l,target:f}){const _=ee.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(P=>g(P));_.length&&De(_,f,l===h,!_.includes(f)).focus()}static jQueryInterface(l){return this.each(function(){const f=Hn.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const f=ee.find(Cn);for(const _ of f){const P=Hn.getInstance(_);if(!P||P._config.autoClose===!1)continue;const k=l.composedPath(),M=k.includes(P._menu);if(k.includes(P._element)||P._config.autoClose==="inside"&&!M||P._config.autoClose==="outside"&&M||P._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const q={relatedTarget:P._element};l.type==="click"&&(q.clickEvent=l),P._completeHide(q)}}static dataApiKeydownHandler(l){const f=/input|textarea/i.test(l.target.tagName),_=l.key==="Escape",P=[o,h].includes(l.key);if(!P&&!_||f&&!_)return;l.preventDefault();const k=this.matches(at)?this:ee.prev(this,at)[0]||ee.next(this,at)[0]||ee.findOne(at,l.delegateTarget.parentNode),M=Hn.getOrCreateInstance(k);if(P)return l.stopPropagation(),M.show(),void M._selectMenuItem(l);M._isShown()&&(l.stopPropagation(),M.hide(),k.focus())}}L.on(document,ke,at,Hn.dataApiKeydownHandler),L.on(document,ke,Rn,Hn.dataApiKeydownHandler),L.on(document,J,Hn.clearMenus),L.on(document,Et,Hn.clearMenus),L.on(document,J,at,function(m){m.preventDefault(),Hn.getOrCreateInstance(this).toggle()}),Y(Hn);const Pf="backdrop",kf="show",Df=`mousedown.bs.${Pf}`,tv={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},nv={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Of extends he{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return tv}static get DefaultType(){return nv}static get NAME(){return Pf}show(l){if(!this._config.isVisible)return void ae(l);this._append();const f=this._getElement();this._config.isAnimated&&$(f),f.classList.add(kf),this._emulateAnimation(()=>{ae(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(kf),this._emulateAnimation(()=>{this.dispose(),ae(l)})):ae(l)}dispose(){this._isAppended&&(L.off(this._element,Df),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=d(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),L.on(l,Df,()=>{ae(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){ue(l,this._getElement(),this._config.isAnimated)}}const ul=".bs.focustrap",sv=`focusin${ul}`,rv=`keydown.tab${ul}`,Nf="backward",iv={autofocus:!0,trapElement:null},ov={autofocus:"boolean",trapElement:"element"};class xf extends he{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return iv}static get DefaultType(){return ov}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),L.off(document,ul),L.on(document,sv,l=>this._handleFocusin(l)),L.on(document,rv,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,L.off(document,ul))}_handleFocusin(l){const{trapElement:f}=this._config;if(l.target===document||l.target===f||f.contains(l.target))return;const _=ee.focusableChildren(f);_.length===0?f.focus():this._lastTabNavDirection===Nf?_[_.length-1].focus():_[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?Nf:"forward")}}const Vf=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Mf=".sticky-top",hl="padding-right",Lf="margin-right";class Zc{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,hl,f=>f+l),this._setElementAttributes(Vf,hl,f=>f+l),this._setElementAttributes(Mf,Lf,f=>f-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,hl),this._resetElementAttributes(Vf,hl),this._resetElementAttributes(Mf,Lf)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,f,_){const P=this.getWidth();this._applyManipulationCallback(l,k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+P)return;this._saveInitialAttribute(k,f);const M=window.getComputedStyle(k).getPropertyValue(f);k.style.setProperty(f,`${_(Number.parseFloat(M))}px`)})}_saveInitialAttribute(l,f){const _=l.style.getPropertyValue(f);_&&kt.setDataAttribute(l,f,_)}_resetElementAttributes(l,f){this._applyManipulationCallback(l,_=>{const P=kt.getDataAttribute(_,f);P!==null?(kt.removeDataAttribute(_,f),_.style.setProperty(f,P)):_.style.removeProperty(f)})}_applyManipulationCallback(l,f){if(u(l))f(l);else for(const _ of ee.find(l,this._element))f(_)}}const Pn=".bs.modal",av=`hide${Pn}`,lv=`hidePrevented${Pn}`,Ff=`hidden${Pn}`,Uf=`show${Pn}`,cv=`shown${Pn}`,uv=`resize${Pn}`,hv=`click.dismiss${Pn}`,fv=`mousedown.dismiss${Pn}`,dv=`keydown.dismiss${Pn}`,pv=`click${Pn}.data-api`,jf="modal-open",$f="show",eu="modal-static",gv={backdrop:!0,focus:!0,keyboard:!0},mv={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class si extends te{constructor(l,f){super(l,f),this._dialog=ee.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Zc,this._addEventListeners()}static get Default(){return gv}static get DefaultType(){return mv}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||L.trigger(this._element,Uf,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(jf),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(L.trigger(this._element,av).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove($f),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){L.off(window,Pn),L.off(this._dialog,Pn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Of({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new xf({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const f=ee.findOne(".modal-body",this._dialog);f&&(f.scrollTop=0),$(this._element),this._element.classList.add($f),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,L.trigger(this._element,cv,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){L.on(this._element,dv,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),L.on(window,uv,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),L.on(this._element,fv,l=>{L.one(this._element,hv,f=>{this._element===l.target&&this._element===f.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(jf),this._resetAdjustments(),this._scrollBar.reset(),L.trigger(this._element,Ff)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(L.trigger(this._element,lv).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._element.style.overflowY;f==="hidden"||this._element.classList.contains(eu)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(eu),this._queueCallback(()=>{this._element.classList.remove(eu),this._queueCallback(()=>{this._element.style.overflowY=f},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._scrollBar.getWidth(),_=f>0;if(_&&!l){const P=se()?"paddingLeft":"paddingRight";this._element.style[P]=`${f}px`}if(!_&&l){const P=se()?"paddingRight":"paddingLeft";this._element.style[P]=`${f}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,f){return this.each(function(){const _=si.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError(`No method named "${l}"`);_[l](f)}})}}L.on(document,pv,'[data-bs-toggle="modal"]',function(m){const l=ee.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&m.preventDefault(),L.one(l,Uf,_=>{_.defaultPrevented||L.one(l,Ff,()=>{g(this)&&this.focus()})});const f=ee.findOne(".modal.show");f&&si.getInstance(f).hide(),si.getOrCreateInstance(l).toggle(this)}),jt(si),Y(si);const js=".bs.offcanvas",Bf=".data-api",_v=`load${js}${Bf}`,Hf="show",qf="showing",Wf="hiding",zf=".offcanvas.show",yv=`show${js}`,vv=`shown${js}`,wv=`hide${js}`,Kf=`hidePrevented${js}`,Gf=`hidden${js}`,Ev=`resize${js}`,Tv=`click${js}${Bf}`,bv=`keydown.dismiss${js}`,Iv={backdrop:!0,keyboard:!0,scroll:!1},Av={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class $s extends te{constructor(l,f){super(l,f),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Iv}static get DefaultType(){return Av}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||L.trigger(this._element,yv,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Zc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(qf),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Hf),this._element.classList.remove(qf),L.trigger(this._element,vv,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(L.trigger(this._element,wv).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Wf),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Hf,Wf),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Zc().reset(),L.trigger(this._element,Gf)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new Of({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():L.trigger(this._element,Kf)}:null})}_initializeFocusTrap(){return new xf({trapElement:this._element})}_addEventListeners(){L.on(this._element,bv,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():L.trigger(this._element,Kf))})}static jQueryInterface(l){return this.each(function(){const f=$s.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}L.on(document,Tv,'[data-bs-toggle="offcanvas"]',function(m){const l=ee.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),y(this))return;L.one(l,Gf,()=>{g(this)&&this.focus()});const f=ee.findOne(zf);f&&f!==l&&$s.getInstance(f).hide(),$s.getOrCreateInstance(l).toggle(this)}),L.on(window,_v,()=>{for(const m of ee.find(zf))$s.getOrCreateInstance(m).show()}),L.on(window,Ev,()=>{for(const m of ee.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(m).position!=="fixed"&&$s.getOrCreateInstance(m).hide()}),jt($s),Y($s);const Qf={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Sv=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Cv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Rv=(m,l)=>{const f=m.nodeName.toLowerCase();return l.includes(f)?!Sv.has(f)||!!Cv.test(m.nodeValue):l.filter(_=>_ instanceof RegExp).some(_=>_.test(f))},Pv={allowList:Qf,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},kv={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Dv={entry:"(string|element|function|null)",selector:"(string|element)"};class Ov extends he{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return Pv}static get DefaultType(){return kv}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[P,k]of Object.entries(this._config.content))this._setContent(l,k,P);const f=l.children[0],_=this._resolvePossibleFunction(this._config.extraClass);return _&&f.classList.add(..._.split(" ")),f}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[f,_]of Object.entries(l))super._typeCheckConfig({selector:f,entry:_},Dv)}_setContent(l,f,_){const P=ee.findOne(_,l);P&&((f=this._resolvePossibleFunction(f))?u(f)?this._putElementInTemplate(d(f),P):this._config.html?P.innerHTML=this._maybeSanitize(f):P.textContent=f:P.remove())}_maybeSanitize(l){return this._config.sanitize?(function(f,_,P){if(!f.length)return f;if(P&&typeof P=="function")return P(f);const k=new window.DOMParser().parseFromString(f,"text/html"),M=[].concat(...k.body.querySelectorAll("*"));for(const q of M){const X=q.nodeName.toLowerCase();if(!Object.keys(_).includes(X)){q.remove();continue}const le=[].concat(...q.attributes),ce=[].concat(_["*"]||[],_[X]||[]);for(const re of le)Rv(re,ce)||q.removeAttribute(re.nodeName)}return k.body.innerHTML})(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return ae(l,[void 0,this])}_putElementInTemplate(l,f){if(this._config.html)return f.innerHTML="",void f.append(l);f.textContent=l.textContent}}const Nv=new Set(["sanitize","allowList","sanitizeFn"]),tu="fade",fl="show",xv=".tooltip-inner",Jf=".modal",Yf="hide.bs.modal",Jo="hover",nu="focus",su="click",Vv={AUTO:"auto",TOP:"top",RIGHT:se()?"left":"right",BOTTOM:"bottom",LEFT:se()?"right":"left"},Mv={allowList:Qf,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Lv={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ri extends te{constructor(l,f){if(Xt===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(l,f),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Mv}static get DefaultType(){return Lv}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),L.off(this._element.closest(Jf),Yf,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=L.trigger(this._element,this.constructor.eventName("show")),f=(A(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!f)return;this._disposePopper();const _=this._getTipElement();this._element.setAttribute("aria-describedby",_.getAttribute("id"));const{container:P}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(P.append(_),L.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(_),_.classList.add(fl),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))L.on(k,"mouseover",O);this._queueCallback(()=>{L.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!L.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(fl),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))L.off(l,"mouseover",O);this._activeTrigger[su]=!1,this._activeTrigger[nu]=!1,this._activeTrigger[Jo]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),L.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const f=this._getTemplateFactory(l).toHtml();if(!f)return null;f.classList.remove(tu,fl),f.classList.add(`bs-${this.constructor.NAME}-auto`);const _=(P=>{do P+=Math.floor(1e6*Math.random());while(document.getElementById(P));return P})(this.constructor.NAME).toString();return f.setAttribute("id",_),this._isAnimated()&&f.classList.add(tu),f}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new Ov({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[xv]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(tu)}_isShown(){return this.tip&&this.tip.classList.contains(fl)}_createPopper(l){const f=ae(this._config.placement,[this,l,this._element]),_=Vv[f.toUpperCase()];return wr(this._element,l,this._getPopperConfig(_))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_resolvePossibleFunction(l){return ae(l,[this._element,this._element])}_getPopperConfig(l){const f={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:_=>{this._getTipElement().setAttribute("data-popper-placement",_.state.placement)}}]};return{...f,...ae(this._config.popperConfig,[void 0,f])}}_setListeners(){const l=this._config.trigger.split(" ");for(const f of l)if(f==="click")L.on(this._element,this.constructor.eventName("click"),this._config.selector,_=>{const P=this._initializeOnDelegatedTarget(_);P._activeTrigger[su]=!(P._isShown()&&P._activeTrigger[su]),P.toggle()});else if(f!=="manual"){const _=f===Jo?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),P=f===Jo?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");L.on(this._element,_,this._config.selector,k=>{const M=this._initializeOnDelegatedTarget(k);M._activeTrigger[k.type==="focusin"?nu:Jo]=!0,M._enter()}),L.on(this._element,P,this._config.selector,k=>{const M=this._initializeOnDelegatedTarget(k);M._activeTrigger[k.type==="focusout"?nu:Jo]=M._element.contains(k.relatedTarget),M._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},L.on(this._element.closest(Jf),Yf,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,f){clearTimeout(this._timeout),this._timeout=setTimeout(l,f)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const f=kt.getDataAttributes(this._element);for(const _ of Object.keys(f))Nv.has(_)&&delete f[_];return l={...f,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:d(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[f,_]of Object.entries(this._config))this.constructor.Default[f]!==_&&(l[f]=_);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const f=ri.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}}Y(ri);const Fv=".popover-header",Uv=".popover-body",jv={...ri.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},$v={...ri.DefaultType,content:"(null|string|element|function)"};class dl extends ri{static get Default(){return jv}static get DefaultType(){return $v}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Fv]:this._getTitle(),[Uv]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const f=dl.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}}Y(dl);const ru=".bs.scrollspy",Bv=`activate${ru}`,Xf=`click${ru}`,Hv=`load${ru}.data-api`,qi="active",iu="[href]",Zf=".nav-link",qv=`${Zf}, .nav-item > ${Zf}, .list-group-item`,Wv={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},zv={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Yo extends te{constructor(l,f){super(l,f),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Wv}static get DefaultType(){return zv}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=d(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(f=>Number.parseFloat(f))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(L.off(this._config.target,Xf),L.on(this._config.target,Xf,iu,l=>{const f=this._observableSections.get(l.target.hash);if(f){l.preventDefault();const _=this._rootElement||window,P=f.offsetTop-this._element.offsetTop;if(_.scrollTo)return void _.scrollTo({top:P,behavior:"smooth"});_.scrollTop=P}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(f=>this._observerCallback(f),l)}_observerCallback(l){const f=M=>this._targetLinks.get(`#${M.target.id}`),_=M=>{this._previousScrollData.visibleEntryTop=M.target.offsetTop,this._process(f(M))},P=(this._rootElement||document.documentElement).scrollTop,k=P>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=P;for(const M of l){if(!M.isIntersecting){this._activeTarget=null,this._clearActiveClass(f(M));continue}const q=M.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&q){if(_(M),!P)return}else k||q||_(M)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=ee.find(iu,this._config.target);for(const f of l){if(!f.hash||y(f))continue;const _=ee.findOne(decodeURI(f.hash),this._element);g(_)&&(this._targetLinks.set(decodeURI(f.hash),f),this._observableSections.set(f.hash,_))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(qi),this._activateParents(l),L.trigger(this._element,Bv,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))ee.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(qi);else for(const f of ee.parents(l,".nav, .list-group"))for(const _ of ee.prev(f,qv))_.classList.add(qi)}_clearActiveClass(l){l.classList.remove(qi);const f=ee.find(`${iu}.${qi}`,l);for(const _ of f)_.classList.remove(qi)}static jQueryInterface(l){return this.each(function(){const f=Yo.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}L.on(window,Hv,()=>{for(const m of ee.find('[data-bs-spy="scroll"]'))Yo.getOrCreateInstance(m)}),Y(Yo);const ii=".bs.tab",Kv=`hide${ii}`,Gv=`hidden${ii}`,Qv=`show${ii}`,Jv=`shown${ii}`,Yv=`click${ii}`,Xv=`keydown${ii}`,Zv=`load${ii}`,ew="ArrowLeft",ed="ArrowRight",tw="ArrowUp",td="ArrowDown",ou="Home",nd="End",oi="active",sd="fade",au="show",rd=".dropdown-toggle",lu=`:not(${rd})`,id='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',cu=`.nav-link${lu}, .list-group-item${lu}, [role="tab"]${lu}, ${id}`,nw=`.${oi}[data-bs-toggle="tab"], .${oi}[data-bs-toggle="pill"], .${oi}[data-bs-toggle="list"]`;class ai extends te{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),L.on(this._element,Xv,f=>this._keydown(f)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const f=this._getActiveElem(),_=f?L.trigger(f,Kv,{relatedTarget:l}):null;L.trigger(l,Qv,{relatedTarget:f}).defaultPrevented||_&&_.defaultPrevented||(this._deactivate(f,l),this._activate(l,f))}_activate(l,f){l&&(l.classList.add(oi),this._activate(ee.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),L.trigger(l,Jv,{relatedTarget:f})):l.classList.add(au)},l,l.classList.contains(sd)))}_deactivate(l,f){l&&(l.classList.remove(oi),l.blur(),this._deactivate(ee.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),L.trigger(l,Gv,{relatedTarget:f})):l.classList.remove(au)},l,l.classList.contains(sd)))}_keydown(l){if(![ew,ed,tw,td,ou,nd].includes(l.key))return;l.stopPropagation(),l.preventDefault();const f=this._getChildren().filter(P=>!y(P));let _;if([ou,nd].includes(l.key))_=f[l.key===ou?0:f.length-1];else{const P=[ed,td].includes(l.key);_=De(f,l.target,P,!0)}_&&(_.focus({preventScroll:!0}),ai.getOrCreateInstance(_).show())}_getChildren(){return ee.find(cu,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,f){this._setAttributeIfNotExists(l,"role","tablist");for(const _ of f)this._setInitialAttributesOnChild(_)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const f=this._elemIsActive(l),_=this._getOuterElement(l);l.setAttribute("aria-selected",f),_!==l&&this._setAttributeIfNotExists(_,"role","presentation"),f||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const f=ee.getElementFromSelector(l);f&&(this._setAttributeIfNotExists(f,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(f,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,f){const _=this._getOuterElement(l);if(!_.classList.contains("dropdown"))return;const P=(k,M)=>{const q=ee.findOne(k,_);q&&q.classList.toggle(M,f)};P(rd,oi),P(".dropdown-menu",au),_.setAttribute("aria-expanded",f)}_setAttributeIfNotExists(l,f,_){l.hasAttribute(f)||l.setAttribute(f,_)}_elemIsActive(l){return l.classList.contains(oi)}_getInnerElement(l){return l.matches(cu)?l:ee.findOne(cu,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const f=ai.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}L.on(document,Yv,id,function(m){["A","AREA"].includes(this.tagName)&&m.preventDefault(),y(this)||ai.getOrCreateInstance(this).show()}),L.on(window,Zv,()=>{for(const m of ee.find(nw))ai.getOrCreateInstance(m)}),Y(ai);const Er=".bs.toast",sw=`mouseover${Er}`,rw=`mouseout${Er}`,iw=`focusin${Er}`,ow=`focusout${Er}`,aw=`hide${Er}`,lw=`hidden${Er}`,cw=`show${Er}`,uw=`shown${Er}`,od="hide",pl="show",gl="showing",hw={animation:"boolean",autohide:"boolean",delay:"number"},fw={animation:!0,autohide:!0,delay:5e3};class Xo extends te{constructor(l,f){super(l,f),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return fw}static get DefaultType(){return hw}static get NAME(){return"toast"}show(){L.trigger(this._element,cw).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(od),$(this._element),this._element.classList.add(pl,gl),this._queueCallback(()=>{this._element.classList.remove(gl),L.trigger(this._element,uw),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(L.trigger(this._element,aw).defaultPrevented||(this._element.classList.add(gl),this._queueCallback(()=>{this._element.classList.add(od),this._element.classList.remove(gl,pl),L.trigger(this._element,lw)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(pl),super.dispose()}isShown(){return this._element.classList.contains(pl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,f){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=f;break;case"focusin":case"focusout":this._hasKeyboardInteraction=f}if(f)return void this._clearTimeout();const _=l.relatedTarget;this._element===_||this._element.contains(_)||this._maybeScheduleHide()}_setListeners(){L.on(this._element,sw,l=>this._onInteraction(l,!0)),L.on(this._element,rw,l=>this._onInteraction(l,!1)),L.on(this._element,iw,l=>this._onInteraction(l,!0)),L.on(this._element,ow,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const f=Xo.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l](this)}})}}return jt(Xo),Y(Xo),{Alert:V,Button:j,Carousel:hr,Collapse:Os,Dropdown:Hn,Modal:si,Offcanvas:$s,Popover:dl,ScrollSpy:Yo,Tab:ai,Toast:Xo,Tooltip:ri}})})(Ol)),Ol.exports}QT();const JT={class:"movie-card card h-100 border-0 shadow-sm"},YT=["src","alt"],XT={key:1,class:"poster poster-placeholder"},ZT={class:"card-body d-flex flex-column"},eb={class:"d-flex justify-content-between align-items-start gap-2 mb-2"},tb={class:"movie-title h6 mb-0"},nb={class:"rating badge text-bg-warning"},sb={class:"text-secondary small mb-3"},rb={class:"mt-auto d-grid gap-2"},Au={__name:"MovieCard",props:{movie:{type:Object,required:!0},isWatchlisted:{type:Boolean,default:!1}},emits:["select","toggle-watchlist"],setup(t){return(e,n)=>(be(),Re("article",JT,[oe("button",{class:"poster-button",type:"button",onClick:n[0]||(n[0]=s=>e.$emit("select",t.movie))},[t.movie.posterUrl?(be(),Re("img",{key:0,class:"card-img-top poster",src:t.movie.posterUrl,alt:t.movie.title},null,8,YT)):(be(),Re("div",XT,"No poster"))]),oe("div",ZT,[oe("div",eb,[oe("h2",tb,Ze(t.movie.title),1),oe("span",nb,Ze(t.movie.rating),1)]),oe("p",sb,Ze(t.movie.year),1),oe("div",rb,[oe("button",{class:"btn btn-sm btn-outline-light",type:"button",onClick:n[1]||(n[1]=s=>e.$emit("select",t.movie))}," Details "),oe("button",{class:Ma(["btn btn-sm",t.isWatchlisted?"btn-success":"btn-outline-warning"]),type:"button",onClick:n[2]||(n[2]=s=>e.$emit("toggle-watchlist",t.movie))},Ze(t.isWatchlisted?"In Watchlist":"Add Watchlist"),3)])])]))}},ib="https://api.themoviedb.org/3",ob="https://image.tmdb.org/t/p/w500",ab="https://image.tmdb.org/t/p/original",lb="https://image.tmdb.org/t/p/w185",cb="23145b3ce4c5a7c6a6e2b76169528bdc",ub=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:878,name:"Sci-Fi"},{id:53,name:"Thriller"}],po=[{id:27205,title:"Inception",overview:"A thief who steals corporate secrets through dream-sharing technology is offered a chance to erase his criminal history.",poster_path:"/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",backdrop_path:"/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",release_date:"2010-07-16",vote_average:8.4,genre_ids:[28,878,53],credits:{cast:[{id:6193,name:"Leonardo DiCaprio",character:"Dom Cobb",profile_path:"/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"},{id:27578,name:"Joseph Gordon-Levitt",character:"Arthur",profile_path:"/4U9G4YwTlIEbAymBaseltS38eH4.jpg"},{id:24045,name:"Elliot Page",character:"Ariadne",profile_path:"/eCeFgzS8dYHnMfWQT0oQitCrsSz.jpg"},{id:2524,name:"Tom Hardy",character:"Eames",profile_path:"/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg"}]}},{id:157336,title:"Interstellar",overview:"A team of explorers travels through a wormhole in space in an attempt to secure humanitys future.",poster_path:"/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",backdrop_path:"/xJHokMbljvjADYdit5fK5VQsXEG.jpg",release_date:"2014-11-07",vote_average:8.5,genre_ids:[12,18,878],credits:{cast:[{id:10297,name:"Matthew McConaughey",character:"Cooper",profile_path:"/wJiGedOCZhwMx9DezY8uwbNxmAY.jpg"},{id:1813,name:"Anne Hathaway",character:"Brand",profile_path:"/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg"},{id:3895,name:"Jessica Chastain",character:"Murph",profile_path:"/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg"},{id:1892,name:"Michael Caine",character:"Professor Brand",profile_path:"/hZruclwEPCKw3e83rnFSIH5sRFZ.jpg"}]}},{id:496243,title:"Parasite",overview:"Greed and class discrimination threaten the newly formed relationship between a wealthy family and a poor household.",poster_path:"/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",backdrop_path:"/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",release_date:"2019-05-30",vote_average:8.5,genre_ids:[18,53],credits:{cast:[{id:20738,name:"Song Kang-ho",character:"Kim Ki-taek",profile_path:"/1rNoqfQ30F84YfL1jnmZbe8jdzn.jpg"},{id:556435,name:"Lee Sun-kyun",character:"Park Dong-ik",profile_path:"/mOko1Bex8eGv2tMEnnE8CaM8G9a.jpg"},{id:1255886,name:"Cho Yeo-jeong",character:"Yeon-kyo",profile_path:"/mQGmlJUzKAYhVGmfnkscrZsGb3Z.jpg"},{id:1342698,name:"Choi Woo-shik",character:"Ki-woo",profile_path:"/x7vWu14a87qOZ8OSZqYn3gYMN3X.jpg"}]}},{id:129,title:"Spirited Away",overview:"A young girl enters a world ruled by gods, witches, and spirits after her parents are transformed.",poster_path:"/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",backdrop_path:"/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",release_date:"2001-07-20",vote_average:8.5,genre_ids:[12,16],credits:{cast:[{id:19587,name:"Rumi Hiiragi",character:"Chihiro Ogino",profile_path:null},{id:6837,name:"Miyu Irino",character:"Haku",profile_path:"/kBcrF346CAwSFypBS5x2HJGqJhZ.jpg"},{id:19588,name:"Mari Natsuki",character:"Yubaba",profile_path:"/z2QpDkx7Mra4b0SsA9nP8Lt2RGD.jpg"},{id:19589,name:"Takashi Naito",character:"Akio Ogino",profile_path:null}]}}];function hb(t){return t?`${ob}${t}`:""}function fb(t){return t?`${ab}${t}`:""}function Dm(t){return t?`${lb}${t}`:""}function db(t){return{...t,profileUrl:Dm(t.profile_path)}}function er(t){var e;return{...t,posterUrl:hb(t.poster_path),backdropUrl:fb(t.backdrop_path),year:t.release_date?t.release_date.slice(0,4):"TBD",rating:t.vote_average?t.vote_average.toFixed(1):"NR",credits:t.credits?{...t.credits,cast:((e=t.credits.cast)==null?void 0:e.map(db))||[]}:void 0}}function ep(t){var e,n;return{...t,profileUrl:Dm(t.profile_path),movieCredits:{cast:((n=(e=t.movie_credits)==null?void 0:e.cast)==null?void 0:n.map(er))||[]}}}async function To(t,e={}){const n=new URL(`${ib}${t}`);n.search=new URLSearchParams({api_key:cb,language:"en-US",...e});const s=await fetch(n);if(!s.ok)throw new Error("TMDB request failed");return s.json()}async function Om(){try{return(await To("/trending/movie/week")).results.map(er)}catch{return po.map(er)}}async function pb(t){if(!t.trim())return Om();try{return(await To("/search/movie",{query:t,include_adult:"false"})).results.map(er)}catch{const e=t.toLowerCase();return po.filter(n=>n.title.toLowerCase().includes(e)).map(er)}}async function gb(){try{return(await To("/genre/movie/list")).genres}catch{return ub}}async function tp(t){try{const e=await To(`/movie/${t}`,{append_to_response:"credits,videos"});return er(e)}catch{const e=po.find(n=>n.id===Number(t));return e?er(e):null}}async function mb(t){const e=new Set(t.map(n=>n.id));if(!t.length)return[];try{const n=await Promise.all(t.slice(0,5).map(async r=>(await To(`/movie/${r.id}/recommendations`)).results||[])),s=new Set(e);return n.flat().filter(r=>s.has(r.id)?!1:(s.add(r.id),!0)).sort((r,i)=>i.vote_average-r.vote_average).slice(0,12).map(er)}catch{const n=new Set(t.flatMap(s=>s.genre_ids||[]));return po.filter(s=>!e.has(s.id)).filter(s=>s.genre_ids.some(r=>n.has(r))).map(er)}}async function _b(t){try{const e=await To(`/person/${t}`,{append_to_response:"movie_credits"});return ep(e)}catch{const e=po.flatMap(s=>{var r;return((r=s.credits)==null?void 0:r.cast)||[]}).find(s=>s.id===Number(t));if(!e)return null;const n=po.filter(s=>{var r,i;return(i=(r=s.credits)==null?void 0:r.cast)==null?void 0:i.some(a=>a.id===Number(t))});return ep({...e,biography:"Biography details are available from TMDB when an API key is configured.",known_for_department:"Acting",movie_credits:{cast:n}})}}const yb=()=>{};var np={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},vb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],c=t[n++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,c=a?t[r+1]:0,u=r+2<t.length,d=u?t[r+2]:0,g=i>>2,y=(i&3)<<4|c>>4;let A=(c&15)<<2|d>>6,O=d&63;u||(O=64,a||(A=64)),s.push(n[g],n[y],n[A],n[O])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const y=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||d==null||y==null)throw new wb;const A=i<<2|c>>4;if(s.push(A),d!==64){const O=c<<4&240|d>>2;if(s.push(O),y!==64){const $=d<<6&192|y;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eb=function(t){const e=Nm(t);return xm.encodeByteArray(e,!0)},Yl=function(t){return Eb(t).replace(/\./g,"")},Vm=function(t){try{return xm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=()=>Tb().__FIREBASE_DEFAULTS__,Ib=()=>{if(typeof process>"u"||typeof np>"u")return;const t=np.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ab=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vm(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return yb()||bb()||Ib()||Ab()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mm=t=>{var e,n;return(n=(e=Pc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Sb=t=>{const e=Mm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Lm=()=>{var t;return(t=Pc())==null?void 0:t.config},Fm=t=>{var e;return(e=Pc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Yl(JSON.stringify(n)),Yl(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function kb(){var e;const t=(e=Pc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Db(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ob(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xb(){const t=on();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vb(){return!kb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mb(){try{return typeof indexedDB=="object"}catch{return!1}}function Lb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="FirebaseError";class or extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fb,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Ub(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new or(r,c,s)}}function Ub(t,e){return t.replace(jb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const jb=/\{\$([^}]+)}/g;function $b(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(sp(i)&&sp(a)){if(!vi(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function sp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bb(t,e){const n=new Hb(t,e);return n.subscribe.bind(n)}class Hb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");qb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Su),r.error===void 0&&(r.error=Su),r.complete===void 0&&(r.complete=Su);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Su(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Um(t){return(await fetch(t,{credentials:"include"})).ok}class wi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Cb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kb(e))try{this.getOrInitializeService({instanceIdentifier:fi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fi){return this.instances.has(e)}getOptions(e=fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fi){return this.component?this.component.multipleInstances?e:fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zb(t){return t===fi?void 0:t}function Kb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ue||(Ue={}));const Qb={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},Jb=Ue.INFO,Yb={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},Xb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Yb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lh{constructor(e){this.name=e,this._logLevel=Jb,this._logHandler=Xb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const Zb=(t,e)=>e.some(n=>t instanceof n);let rp,ip;function eI(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tI(){return ip||(ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jm=new WeakMap,Qu=new WeakMap,$m=new WeakMap,Cu=new WeakMap,Fh=new WeakMap;function nI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Pr(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&jm.set(n,t)}).catch(()=>{}),Fh.set(e,t),e}function sI(t){if(Qu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Qu.set(t,e)}let Ju={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$m.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rI(t){Ju=t(Ju)}function iI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ru(this),e,...n);return $m.set(s,e.sort?e.sort():[e]),Pr(s)}:tI().includes(t)?function(...e){return t.apply(Ru(this),e),Pr(jm.get(this))}:function(...e){return Pr(t.apply(Ru(this),e))}}function oI(t){return typeof t=="function"?iI(t):(t instanceof IDBTransaction&&sI(t),Zb(t,eI())?new Proxy(t,Ju):t)}function Pr(t){if(t instanceof IDBRequest)return nI(t);if(Cu.has(t))return Cu.get(t);const e=oI(t);return e!==t&&(Cu.set(t,e),Fh.set(e,t)),e}const Ru=t=>Fh.get(t);function aI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),c=Pr(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Pr(a.result),u.oldVersion,u.newVersion,Pr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const lI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],Pu=new Map;function op(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pu.get(e))return Pu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=cI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||lI.includes(n)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),r&&u.done]))[0]};return Pu.set(e,i),i}rI(t=>({...t,get:(e,n,s)=>op(e,n)||t.get(e,n,s),has:(e,n)=>!!op(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yu="@firebase/app",ap="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Lh("@firebase/app"),fI="@firebase/app-compat",dI="@firebase/analytics-compat",pI="@firebase/analytics",gI="@firebase/app-check-compat",mI="@firebase/app-check",_I="@firebase/auth",yI="@firebase/auth-compat",vI="@firebase/database",wI="@firebase/data-connect",EI="@firebase/database-compat",TI="@firebase/functions",bI="@firebase/functions-compat",II="@firebase/installations",AI="@firebase/installations-compat",SI="@firebase/messaging",CI="@firebase/messaging-compat",RI="@firebase/performance",PI="@firebase/performance-compat",kI="@firebase/remote-config",DI="@firebase/remote-config-compat",OI="@firebase/storage",NI="@firebase/storage-compat",xI="@firebase/firestore",VI="@firebase/ai",MI="@firebase/firestore-compat",LI="firebase",FI="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="[DEFAULT]",UI={[Yu]:"fire-core",[fI]:"fire-core-compat",[pI]:"fire-analytics",[dI]:"fire-analytics-compat",[mI]:"fire-app-check",[gI]:"fire-app-check-compat",[_I]:"fire-auth",[yI]:"fire-auth-compat",[vI]:"fire-rtdb",[wI]:"fire-data-connect",[EI]:"fire-rtdb-compat",[TI]:"fire-fn",[bI]:"fire-fn-compat",[II]:"fire-iid",[AI]:"fire-iid-compat",[SI]:"fire-fcm",[CI]:"fire-fcm-compat",[RI]:"fire-perf",[PI]:"fire-perf-compat",[kI]:"fire-rc",[DI]:"fire-rc-compat",[OI]:"fire-gcs",[NI]:"fire-gcs-compat",[xI]:"fire-fst",[MI]:"fire-fst-compat",[VI]:"fire-vertex","fire-js":"fire-js",[LI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map,jI=new Map,Zu=new Map;function lp(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function go(t){const e=t.name;if(Zu.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;Zu.set(e,t);for(const n of Xl.values())lp(n,t);for(const n of jI.values())lp(n,t);return!0}function Uh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new ja("app","Firebase",$I);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=FI;function Bm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Xu,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw kr.create("bad-app-name",{appName:String(r)});if(n||(n=Lm()),!n)throw kr.create("no-options");const i=Xl.get(r);if(i){if(vi(n,i.options)&&vi(s,i.config))return i;throw kr.create("duplicate-app",{appName:r})}const a=new Gb(r);for(const u of Zu.values())a.addComponent(u);const c=new BI(n,s,a);return Xl.set(r,c),c}function Hm(t=Xu){const e=Xl.get(t);if(!e&&t===Xu&&Lm())return Bm();if(!e)throw kr.create("no-app",{appName:t});return e}function Dr(t,e,n){let s=UI[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(a.join(" "));return}go(new wi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="firebase-heartbeat-database",qI=1,Aa="firebase-heartbeat-store";let ku=null;function qm(){return ku||(ku=aI(HI,qI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Aa)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),ku}async function WI(t){try{const n=(await qm()).transaction(Aa),s=await n.objectStore(Aa).get(Wm(t));return await n.done,s}catch(e){if(e instanceof or)tr.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function cp(t,e){try{const s=(await qm()).transaction(Aa,"readwrite");await s.objectStore(Aa).put(e,Wm(t)),await s.done}catch(n){if(n instanceof or)tr.warn(n.message);else{const s=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(s.message)}}}function Wm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1024,KI=30;class GI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=up();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>KI){const a=YI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=up(),{heartbeatsToSend:s,unsentEntries:r}=QI(this._heartbeatsCache.heartbeats),i=Yl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return tr.warn(n),""}}}function up(){return new Date().toISOString().substring(0,10)}function QI(t,e=zI){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),hp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),hp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class JI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mb()?Lb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hp(t){return Yl(JSON.stringify({version:2,heartbeats:t})).length}function YI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){go(new wi("platform-logger",e=>new uI(e),"PRIVATE")),go(new wi("heartbeat",e=>new GI(e),"PRIVATE")),Dr(Yu,ap,t),Dr(Yu,ap,"esm2020"),Dr("fire-js","")}XI("");function zm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZI=zm,Km=new ja("auth","Firebase",zm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Lh("@firebase/auth");function eA(t,...e){Zl.logLevel<=Ue.WARN&&Zl.warn(`Auth (${bo}): ${t}`,...e)}function Nl(t,...e){Zl.logLevel<=Ue.ERROR&&Zl.error(`Auth (${bo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t,...e){throw $h(t,...e)}function Jn(t,...e){return $h(t,...e)}function jh(t,e,n){const s={...ZI(),[e]:n};return new ja("auth","Firebase",s).create(e,{appName:t.name})}function yi(t){return jh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tA(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ss(t,"argument-error"),jh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $h(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Km.create(t,...e)}function ve(t,e,...n){if(!t)throw $h(e,...n)}function Gs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nl(e),new Error(e)}function nr(t,e){t||Gs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function nA(){return fp()==="http:"||fp()==="https:"}function fp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nA()||Ob()||"connection"in navigator)?navigator.onLine:!0}function rA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=Pb()||Nb()}get(){return sA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aA=new Ha(3e4,6e4);function Hh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Io(t,e,n,s,r={}){return Qm(t,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=$a({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return Db()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Ba(t.emulatorConfig.host)&&(d.credentials="include"),Gm.fetch()(await Jm(t,t.config.apiHost,n,c),d)})}async function Qm(t,e,n){t._canInitEmulator=!1;const s={...iA,...e};try{const r=new cA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Tl(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Tl(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Tl(t,"user-disabled",a);const g=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw jh(t,g,d);Ss(t,g)}}catch(r){if(r instanceof or)throw r;Ss(t,"network-request-failed",{message:String(r)})}}async function lA(t,e,n,s,r={}){const i=await Io(t,e,n,s,r);return"mfaPendingCredential"in i&&Ss(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jm(t,e,n,s){const r=`${e}${n}?${s}`,i=t,a=i.config.emulator?Bh(t.config,r):`${t.config.apiScheme}://${r}`;return oA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class cA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),aA.get())})}}function Tl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Jn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){return Io(t,"POST","/v1/accounts:delete",e)}async function ec(t,e){return Io(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hA(t,e=!1){const n=In(t),s=await n.getIdToken(e),r=qh(s);ve(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ga(Du(r.auth_time)),issuedAtTime:ga(Du(r.iat)),expirationTime:ga(Du(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Du(t){return Number(t)*1e3}function qh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vm(n);return r?JSON.parse(r):(Nl("Failed to decode base64 JWT payload"),null)}catch(r){return Nl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function dp(t){const e=qh(t);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof or&&fA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function fA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(t){var y;const e=t.auth,n=await t.getIdToken(),s=await Sa(t,ec(e,{idToken:n}));ve(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(y=r.providerUserInfo)!=null&&y.length?Ym(r.providerUserInfo):[],a=gA(t.providerData,i),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new th(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function pA(t){const e=In(t);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gA(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ym(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e){const n=await Qm(t,{},async()=>{const s=$a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,a=await Jm(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return t.emulatorConfig&&Ba(t.emulatorConfig.host)&&(u.credentials="include"),Gm.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _A(t,e){return Io(t,"POST","/v2/accounts:revokeToken",Hh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const n=dp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await mA(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,a=new ro;return s&&(ve(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ve(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(ve(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Gs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){ve(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new dA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new th(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Sa(this,this.stsTokenManager.getToken(this.auth,e));return ve(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hA(this,e)}reload(){return pA(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await tc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await Sa(this,uA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:y,emailVerified:A,isAnonymous:O,providerData:$,stsTokenManager:B}=n;ve(y&&B,e,"internal-error");const Q=ro.fromJSON(this.name,B);ve(typeof y=="string",e,"internal-error"),br(s,e.name),br(r,e.name),ve(typeof A=="boolean",e,"internal-error"),ve(typeof O=="boolean",e,"internal-error"),br(i,e.name),br(a,e.name),br(c,e.name),br(u,e.name),br(d,e.name),br(g,e.name);const se=new zn({uid:y,auth:e,email:r,emailVerified:A,displayName:s,isAnonymous:O,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:Q,createdAt:d,lastLoginAt:g});return $&&Array.isArray($)&&(se.providerData=$.map(Y=>({...Y}))),u&&(se._redirectEventId=u),se}static async _fromIdTokenResponse(e,n,s=!1){const r=new ro;r.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await tc(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ve(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ym(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new ro;c.updateFromIdToken(s);const u=new zn({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new th(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function Qs(t){nr(t instanceof Function,"Expected a class definition");let e=pp.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xm.type="NONE";const gp=Xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t,e,n){return`firebase:${t}:${e}:${n}`}class io{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=xl(this.userKey,r.apiKey,i),this.fullPersistenceKey=xl("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ec(this.auth,{idToken:e}).catch(()=>{});return n?zn._fromGetAccountInfoResponse(this.auth,n,e):null}return zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new io(Qs(gp),e,s);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||Qs(gp);const a=xl(s,e.config.apiKey,e.name);let c=null;for(const d of n)try{const g=await d._get(a);if(g){let y;if(typeof g=="string"){const A=await ec(e,{idToken:g}).catch(()=>{});if(!A)break;y=await zn._fromGetAccountInfoResponse(e,A,g)}else y=zn._fromJSON(e,g);d!==i&&(c=y),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new io(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new io(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r_(e))return"Blackberry";if(i_(e))return"Webos";if(e_(e))return"Safari";if((e.includes("chrome/")||t_(e))&&!e.includes("edge/"))return"Chrome";if(s_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zm(t=on()){return/firefox\//i.test(t)}function e_(t=on()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t_(t=on()){return/crios\//i.test(t)}function n_(t=on()){return/iemobile/i.test(t)}function s_(t=on()){return/android/i.test(t)}function r_(t=on()){return/blackberry/i.test(t)}function i_(t=on()){return/webos/i.test(t)}function Wh(t=on()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yA(t=on()){var e;return Wh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function vA(){return xb()&&document.documentMode===10}function o_(t=on()){return Wh(t)||s_(t)||i_(t)||r_(t)||/windows phone/i.test(t)||n_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t,e=[]){let n;switch(t){case"Browser":n=mp(on());break;case"Worker":n=`${mp(on())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e={}){return Io(t,"GET","/v2/passwordPolicy",Hh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=6;class bA{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??TA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new wA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Km,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qs(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ec(this,{idToken:e}),s=await zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Wn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(yi(this));const n=e?In(e):null;return n&&ve(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EA(this),n=new bA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _A(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qs(e)||this._popupRedirectResolver;ve(n,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[Qs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=a_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&eA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function kc(t){return In(t)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bb(n=>this.observer=n)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AA(t){zh=t}function SA(t){return zh.loadJS(t)}function CA(){return zh.gapiScript}function RA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t,e){const n=Uh(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(vi(i,e??{}))return r;Ss(r,"already-initialized")}return n.initialize({options:e})}function kA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function DA(t,e,n){const s=kc(t);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=l_(e),{host:a,port:c}=OA(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},g=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(vi(d,s.config.emulator)&&vi(g,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=g,s.settings.appVerificationDisabledForTesting=!0,Ba(a)?Um(`${i}//${a}${u}`):NA()}function l_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OA(t){const e=l_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:yp(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:yp(a)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gs("not implemented")}_getIdTokenResponse(e){return Gs("not implemented")}_linkToIdToken(e,n){return Gs("not implemented")}_getReauthenticationResolver(e){return Gs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e){return lA(t,"POST","/v1/accounts:signInWithIdp",Hh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="http://localhost";class Ei extends c_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ss("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const a=new Ei(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return oo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,oo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oo(e,n)}buildRequest(){const e={requestUri:xA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$a(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Kh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends qa{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ks.credential(n,s)}catch{return null}}}Ks.GOOGLE_SIGN_IN_METHOD="google.com";Ks.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends qa{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends qa{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rr.credential(n,s)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await zn._fromIdTokenResponse(e,s,r),a=vp(s);return new mo({user:i,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=vp(s);return new mo({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends or{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new nc(e,n,s,r)}}function u_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(t,i,e,s):i})}async function VA(t,e,n=!1){const s=await Sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mo._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(t,e,n=!1){const{auth:s}=t;if(Wn(s.app))return Promise.reject(yi(s));const r="reauthenticate";try{const i=await Sa(t,u_(s,r,e,t),n);ve(i.idToken,s,"internal-error");const a=qh(i.idToken);ve(a,s,"internal-error");const{sub:c}=a;return ve(t.uid===c,s,"user-mismatch"),mo._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ss(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e,n=!1){if(Wn(t.app))return Promise.reject(yi(t));const s="signIn",r=await u_(t,s,e),i=await mo._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function FA(t,e,n,s){return In(t).onIdTokenChanged(e,n,s)}function UA(t,e,n){return In(t).beforeAuthStateChanged(e,n)}function jA(t,e,n,s){return In(t).onAuthStateChanged(e,n,s)}function $A(t){return In(t).signOut()}const sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sc,"1"),this.storage.removeItem(sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=1e3,HA=10;class f_ extends h_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=o_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);vA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,HA):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}f_.type="LOCAL";const qA=f_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends h_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d_.type="SESSION";const p_=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(n.origin,i)),u=await WA(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Gh("",20);r.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(y){const A=y;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(A.data.response);break;default:clearTimeout(g),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){return window}function KA(t){ws().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(){return typeof ws().WorkerGlobalScope<"u"&&typeof ws().importScripts=="function"}async function GA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function JA(){return g_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="firebaseLocalStorageDb",YA=1,rc="firebaseLocalStorage",__="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oc(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function XA(){const t=indexedDB.deleteDatabase(m_);return new Wa(t).toPromise()}function nh(){const t=indexedDB.open(m_,YA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(rc,{keyPath:__})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(rc)?e(s):(s.close(),await XA(),e(await nh()))})})}async function wp(t,e,n){const s=Oc(t,!0).put({[__]:e,value:n});return new Wa(s).toPromise()}async function ZA(t,e){const n=Oc(t,!1).get(e),s=await new Wa(n).toPromise();return s===void 0?null:s.value}function Ep(t,e){const n=Oc(t,!0).delete(e);return new Wa(n).toPromise()}const eS=800,tS=3;class y_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return g_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(JA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await GA(),!this.activeServiceWorker)return;this.sender=new zA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nh();return await wp(e,sc,"1"),await Ep(e,sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>wp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ZA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ep(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Oc(r,!1).getAll();return new Wa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}y_.type="LOCAL";const nS=y_;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t,e){return e?Qs(e):(ve(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends c_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sS(t){return LA(t.auth,new Qh(t),t.bypassAuthState)}function rS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),MA(n,new Qh(t),t.bypassAuthState)}async function iS(t){const{auth:e,user:n}=t;return ve(n,e,"internal-error"),VA(n,new Qh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sS;case"linkViaPopup":case"linkViaRedirect":return iS;case"reauthViaPopup":case"reauthViaRedirect":return rS;default:Ss(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new Ha(2e3,1e4);async function aS(t,e,n){if(Wn(t.app))return Promise.reject(Jn(t,"operation-not-supported-in-this-environment"));const s=kc(t);tA(t,e,Kh);const r=v_(s,n);return new pi(s,"signInViaPopup",e,r).executeNotNull()}class pi extends w_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oS.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS="pendingRedirect",Vl=new Map;class cS extends w_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const s=await uS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uS(t,e){const n=dS(e),s=fS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function hS(t,e){Vl.set(t._key(),e)}function fS(t){return Qs(t._redirectPersistence)}function dS(t){return xl(lS,t.config.apiKey,t.name)}async function pS(t,e,n=!1){if(Wn(t.app))return Promise.reject(yi(t));const s=kc(t),r=v_(s,e),a=await new cS(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=600*1e3;class mS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_S(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!E_(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(e))}saveEventToCache(e){this.cachedEventUids.add(Tp(e)),this.lastProcessedEventTime=Date.now()}}function Tp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function E_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _S(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return E_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t,e={}){return Io(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wS=/^https?/;async function ES(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yS(t);for(const n of e)try{if(TS(n))return}catch{}Ss(t,"unauthorized-domain")}function TS(t){const e=eh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!wS.test(n))return!1;if(vS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=new Ha(3e4,6e4);function bp(){const t=ws().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IS(t){return new Promise((e,n)=>{var r,i,a;function s(){bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bp(),n(Jn(t,"network-request-failed"))},timeout:bS.get()})}if((i=(r=ws().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ws().gapi)!=null&&a.load)s();else{const c=RA("iframefcb");return ws()[c]=()=>{gapi.load?s():n(Jn(t,"network-request-failed"))},SA(`${CA()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function AS(t){return Ml=Ml||IS(t),Ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new Ha(5e3,15e3),CS="__/auth/iframe",RS="emulator/auth/iframe",PS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DS(t){const e=t.config;ve(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bh(e,RS):`https://${t.config.authDomain}/${CS}`,s={apiKey:e.apiKey,appName:t.name,v:bo},r=kS.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$a(s).slice(1)}`}async function OS(t){const e=await AS(t),n=ws().gapi;return ve(n,t,"internal-error"),e.open({where:document.body,url:DS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PS,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Jn(t,"network-request-failed"),c=ws().setTimeout(()=>{i(a)},SS.get());function u(){ws().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xS=500,VS=600,MS="_blank",LS="http://localhost";class Ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FS(t,e,n,s=xS,r=VS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...NS,width:s.toString(),height:r.toString(),top:i,left:a},d=on().toLowerCase();n&&(c=t_(d)?MS:n),Zm(d)&&(e=e||LS,u.scrollbars="yes");const g=Object.entries(u).reduce((A,[O,$])=>`${A}${O}=${$},`,"");if(yA(d)&&c!=="_self")return US(e||"",c),new Ip(null);const y=window.open(e||"",c,g);ve(y,t,"popup-blocked");try{y.focus()}catch{}return new Ip(y)}function US(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="__/auth/handler",$S="emulator/auth/handler",BS=encodeURIComponent("fac");async function Ap(t,e,n,s,r,i){ve(t.config.authDomain,t,"auth-domain-config-required"),ve(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bo,eventId:r};if(e instanceof Kh){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",$b(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,y]of Object.entries({}))a[g]=y}if(e instanceof qa){const g=e.getScopes().filter(y=>y!=="");g.length>0&&(a.scopes=g.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await t._getAppCheckToken(),d=u?`#${BS}=${encodeURIComponent(u)}`:"";return`${HS(t)}?${$a(c).slice(1)}${d}`}function HS({config:t}){return t.emulator?Bh(t,$S):`https://${t.authDomain}/${jS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="webStorageSupport";class qS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=p_,this._completeRedirectFn=pS,this._overrideRedirectResult=hS}async _openPopup(e,n,s,r){var a;nr((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ap(e,n,s,eh(),r);return FS(e,i,Gh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ap(e,n,s,eh(),r);return KA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(nr(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await OS(e),s=new mS(e);return n.register("authEvent",r=>(ve(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ou,{type:Ou},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[Ou];i!==void 0&&n(!!i),Ss(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ES(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return o_()||e_()||Wh()}}const WS=qS;var Sp="@firebase/auth",Cp="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GS(t){go(new wi("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;ve(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:a_(t)},d=new IA(s,r,i,u);return kA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),go(new wi("auth-internal",e=>{const n=kc(e.getProvider("auth").getImmediate());return(s=>new zS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dr(Sp,Cp,KS(t)),Dr(Sp,Cp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=300,JS=Fm("authIdTokenMaxAge")||QS;let Rp=null;const YS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>JS)return;const r=n==null?void 0:n.token;Rp!==r&&(Rp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function XS(t=Hm()){const e=Uh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PA(t,{popupRedirectResolver:WS,persistence:[nS,qA,p_]}),s=Fm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=YS(i.toString());UA(n,a,()=>a(n.currentUser)),FA(n,c=>a(c))}}const r=Mm("auth");return r&&DA(n,`http://${r}`),n}function ZS(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}AA({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Jn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",ZS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GS("Browser");var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,T_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function b(){}b.prototype=w.prototype,S.F=w.prototype,S.prototype=new b,S.prototype.constructor=S,S.D=function(C,I,D){for(var T=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)T[mt-2]=arguments[mt];return w.prototype[I].apply(C,T)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,w,b){b||(b=0);const C=Array(16);if(typeof w=="string")for(var I=0;I<16;++I)C[I]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(I=0;I<16;++I)C[I]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=S.g[0],b=S.g[1],I=S.g[2];let D=S.g[3],T;T=w+(D^b&(I^D))+C[0]+3614090360&4294967295,w=b+(T<<7&4294967295|T>>>25),T=D+(I^w&(b^I))+C[1]+3905402710&4294967295,D=w+(T<<12&4294967295|T>>>20),T=I+(b^D&(w^b))+C[2]+606105819&4294967295,I=D+(T<<17&4294967295|T>>>15),T=b+(w^I&(D^w))+C[3]+3250441966&4294967295,b=I+(T<<22&4294967295|T>>>10),T=w+(D^b&(I^D))+C[4]+4118548399&4294967295,w=b+(T<<7&4294967295|T>>>25),T=D+(I^w&(b^I))+C[5]+1200080426&4294967295,D=w+(T<<12&4294967295|T>>>20),T=I+(b^D&(w^b))+C[6]+2821735955&4294967295,I=D+(T<<17&4294967295|T>>>15),T=b+(w^I&(D^w))+C[7]+4249261313&4294967295,b=I+(T<<22&4294967295|T>>>10),T=w+(D^b&(I^D))+C[8]+1770035416&4294967295,w=b+(T<<7&4294967295|T>>>25),T=D+(I^w&(b^I))+C[9]+2336552879&4294967295,D=w+(T<<12&4294967295|T>>>20),T=I+(b^D&(w^b))+C[10]+4294925233&4294967295,I=D+(T<<17&4294967295|T>>>15),T=b+(w^I&(D^w))+C[11]+2304563134&4294967295,b=I+(T<<22&4294967295|T>>>10),T=w+(D^b&(I^D))+C[12]+1804603682&4294967295,w=b+(T<<7&4294967295|T>>>25),T=D+(I^w&(b^I))+C[13]+4254626195&4294967295,D=w+(T<<12&4294967295|T>>>20),T=I+(b^D&(w^b))+C[14]+2792965006&4294967295,I=D+(T<<17&4294967295|T>>>15),T=b+(w^I&(D^w))+C[15]+1236535329&4294967295,b=I+(T<<22&4294967295|T>>>10),T=w+(I^D&(b^I))+C[1]+4129170786&4294967295,w=b+(T<<5&4294967295|T>>>27),T=D+(b^I&(w^b))+C[6]+3225465664&4294967295,D=w+(T<<9&4294967295|T>>>23),T=I+(w^b&(D^w))+C[11]+643717713&4294967295,I=D+(T<<14&4294967295|T>>>18),T=b+(D^w&(I^D))+C[0]+3921069994&4294967295,b=I+(T<<20&4294967295|T>>>12),T=w+(I^D&(b^I))+C[5]+3593408605&4294967295,w=b+(T<<5&4294967295|T>>>27),T=D+(b^I&(w^b))+C[10]+38016083&4294967295,D=w+(T<<9&4294967295|T>>>23),T=I+(w^b&(D^w))+C[15]+3634488961&4294967295,I=D+(T<<14&4294967295|T>>>18),T=b+(D^w&(I^D))+C[4]+3889429448&4294967295,b=I+(T<<20&4294967295|T>>>12),T=w+(I^D&(b^I))+C[9]+568446438&4294967295,w=b+(T<<5&4294967295|T>>>27),T=D+(b^I&(w^b))+C[14]+3275163606&4294967295,D=w+(T<<9&4294967295|T>>>23),T=I+(w^b&(D^w))+C[3]+4107603335&4294967295,I=D+(T<<14&4294967295|T>>>18),T=b+(D^w&(I^D))+C[8]+1163531501&4294967295,b=I+(T<<20&4294967295|T>>>12),T=w+(I^D&(b^I))+C[13]+2850285829&4294967295,w=b+(T<<5&4294967295|T>>>27),T=D+(b^I&(w^b))+C[2]+4243563512&4294967295,D=w+(T<<9&4294967295|T>>>23),T=I+(w^b&(D^w))+C[7]+1735328473&4294967295,I=D+(T<<14&4294967295|T>>>18),T=b+(D^w&(I^D))+C[12]+2368359562&4294967295,b=I+(T<<20&4294967295|T>>>12),T=w+(b^I^D)+C[5]+4294588738&4294967295,w=b+(T<<4&4294967295|T>>>28),T=D+(w^b^I)+C[8]+2272392833&4294967295,D=w+(T<<11&4294967295|T>>>21),T=I+(D^w^b)+C[11]+1839030562&4294967295,I=D+(T<<16&4294967295|T>>>16),T=b+(I^D^w)+C[14]+4259657740&4294967295,b=I+(T<<23&4294967295|T>>>9),T=w+(b^I^D)+C[1]+2763975236&4294967295,w=b+(T<<4&4294967295|T>>>28),T=D+(w^b^I)+C[4]+1272893353&4294967295,D=w+(T<<11&4294967295|T>>>21),T=I+(D^w^b)+C[7]+4139469664&4294967295,I=D+(T<<16&4294967295|T>>>16),T=b+(I^D^w)+C[10]+3200236656&4294967295,b=I+(T<<23&4294967295|T>>>9),T=w+(b^I^D)+C[13]+681279174&4294967295,w=b+(T<<4&4294967295|T>>>28),T=D+(w^b^I)+C[0]+3936430074&4294967295,D=w+(T<<11&4294967295|T>>>21),T=I+(D^w^b)+C[3]+3572445317&4294967295,I=D+(T<<16&4294967295|T>>>16),T=b+(I^D^w)+C[6]+76029189&4294967295,b=I+(T<<23&4294967295|T>>>9),T=w+(b^I^D)+C[9]+3654602809&4294967295,w=b+(T<<4&4294967295|T>>>28),T=D+(w^b^I)+C[12]+3873151461&4294967295,D=w+(T<<11&4294967295|T>>>21),T=I+(D^w^b)+C[15]+530742520&4294967295,I=D+(T<<16&4294967295|T>>>16),T=b+(I^D^w)+C[2]+3299628645&4294967295,b=I+(T<<23&4294967295|T>>>9),T=w+(I^(b|~D))+C[0]+4096336452&4294967295,w=b+(T<<6&4294967295|T>>>26),T=D+(b^(w|~I))+C[7]+1126891415&4294967295,D=w+(T<<10&4294967295|T>>>22),T=I+(w^(D|~b))+C[14]+2878612391&4294967295,I=D+(T<<15&4294967295|T>>>17),T=b+(D^(I|~w))+C[5]+4237533241&4294967295,b=I+(T<<21&4294967295|T>>>11),T=w+(I^(b|~D))+C[12]+1700485571&4294967295,w=b+(T<<6&4294967295|T>>>26),T=D+(b^(w|~I))+C[3]+2399980690&4294967295,D=w+(T<<10&4294967295|T>>>22),T=I+(w^(D|~b))+C[10]+4293915773&4294967295,I=D+(T<<15&4294967295|T>>>17),T=b+(D^(I|~w))+C[1]+2240044497&4294967295,b=I+(T<<21&4294967295|T>>>11),T=w+(I^(b|~D))+C[8]+1873313359&4294967295,w=b+(T<<6&4294967295|T>>>26),T=D+(b^(w|~I))+C[15]+4264355552&4294967295,D=w+(T<<10&4294967295|T>>>22),T=I+(w^(D|~b))+C[6]+2734768916&4294967295,I=D+(T<<15&4294967295|T>>>17),T=b+(D^(I|~w))+C[13]+1309151649&4294967295,b=I+(T<<21&4294967295|T>>>11),T=w+(I^(b|~D))+C[4]+4149444226&4294967295,w=b+(T<<6&4294967295|T>>>26),T=D+(b^(w|~I))+C[11]+3174756917&4294967295,D=w+(T<<10&4294967295|T>>>22),T=I+(w^(D|~b))+C[2]+718787259&4294967295,I=D+(T<<15&4294967295|T>>>17),T=b+(D^(I|~w))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,S.g[2]=S.g[2]+I&4294967295,S.g[3]=S.g[3]+D&4294967295}s.prototype.v=function(S,w){w===void 0&&(w=S.length);const b=w-this.blockSize,C=this.C;let I=this.h,D=0;for(;D<w;){if(I==0)for(;D<=b;)r(this,S,D),D+=this.blockSize;if(typeof S=="string"){for(;D<w;)if(C[I++]=S.charCodeAt(D++),I==this.blockSize){r(this,C),I=0;break}}else for(;D<w;)if(C[I++]=S[D++],I==this.blockSize){r(this,C),I=0;break}}this.h=I,this.o+=w},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var b=S.length-8;b<S.length;++b)S[b]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,b=0;b<4;++b)for(let C=0;C<32;C+=8)S[w++]=this.g[b]>>>C&255;return S};function i(S,w){var b=c;return Object.prototype.hasOwnProperty.call(b,S)?b[S]:b[S]=w(S)}function a(S,w){this.h=w;const b=[];let C=!0;for(let I=S.length-1;I>=0;I--){const D=S[I]|0;C&&D==w||(b[I]=D,C=!1)}this.g=b}var c={};function u(S){return-128<=S&&S<128?i(S,function(w){return new a([w|0],w<0?-1:0)}):new a([S|0],S<0?-1:0)}function d(S){if(isNaN(S)||!isFinite(S))return y;if(S<0)return Q(d(-S));const w=[];let b=1;for(let C=0;S>=b;C++)w[C]=S/b|0,b*=4294967296;return new a(w,0)}function g(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return Q(g(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(w,8));let C=y;for(let D=0;D<S.length;D+=8){var I=Math.min(8,S.length-D);const T=parseInt(S.substring(D,D+I),w);I<8?(I=d(Math.pow(w,I)),C=C.j(I).add(d(T))):(C=C.j(b),C=C.add(d(T)))}return C}var y=u(0),A=u(1),O=u(16777216);t=a.prototype,t.m=function(){if(B(this))return-Q(this).m();let S=0,w=1;for(let b=0;b<this.g.length;b++){const C=this.i(b);S+=(C>=0?C:4294967296+C)*w,w*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if($(this))return"0";if(B(this))return"-"+Q(this).toString(S);const w=d(Math.pow(S,6));var b=this;let C="";for(;;){const I=ue(b,w).g;b=se(b,I.j(w));let D=((b.g.length>0?b.g[0]:b.h)>>>0).toString(S);if(b=I,$(b))return D+C;for(;D.length<6;)D="0"+D;C=D+C}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function $(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function B(S){return S.h==-1}t.l=function(S){return S=se(this,S),B(S)?-1:$(S)?0:1};function Q(S){const w=S.g.length,b=[];for(let C=0;C<w;C++)b[C]=~S.g[C];return new a(b,~S.h).add(A)}t.abs=function(){return B(this)?Q(this):this},t.add=function(S){const w=Math.max(this.g.length,S.g.length),b=[];let C=0;for(let I=0;I<=w;I++){let D=C+(this.i(I)&65535)+(S.i(I)&65535),T=(D>>>16)+(this.i(I)>>>16)+(S.i(I)>>>16);C=T>>>16,D&=65535,T&=65535,b[I]=T<<16|D}return new a(b,b[b.length-1]&-2147483648?-1:0)};function se(S,w){return S.add(Q(w))}t.j=function(S){if($(this)||$(S))return y;if(B(this))return B(S)?Q(this).j(Q(S)):Q(Q(this).j(S));if(B(S))return Q(this.j(Q(S)));if(this.l(O)<0&&S.l(O)<0)return d(this.m()*S.m());const w=this.g.length+S.g.length,b=[];for(var C=0;C<2*w;C++)b[C]=0;for(C=0;C<this.g.length;C++)for(let I=0;I<S.g.length;I++){const D=this.i(C)>>>16,T=this.i(C)&65535,mt=S.i(I)>>>16,zt=S.i(I)&65535;b[2*C+2*I]+=T*zt,Y(b,2*C+2*I),b[2*C+2*I+1]+=D*zt,Y(b,2*C+2*I+1),b[2*C+2*I+1]+=T*mt,Y(b,2*C+2*I+1),b[2*C+2*I+2]+=D*mt,Y(b,2*C+2*I+2)}for(S=0;S<w;S++)b[S]=b[2*S+1]<<16|b[2*S];for(S=w;S<2*w;S++)b[S]=0;return new a(b,0)};function Y(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function ae(S,w){this.g=S,this.h=w}function ue(S,w){if($(w))throw Error("division by zero");if($(S))return new ae(y,y);if(B(S))return w=ue(Q(S),w),new ae(Q(w.g),Q(w.h));if(B(w))return w=ue(S,Q(w)),new ae(Q(w.g),w.h);if(S.g.length>30){if(B(S)||B(w))throw Error("slowDivide_ only works with positive integers.");for(var b=A,C=w;C.l(S)<=0;)b=De(b),C=De(C);var I=Je(b,1),D=Je(C,1);for(C=Je(C,2),b=Je(b,2);!$(C);){var T=D.add(C);T.l(S)<=0&&(I=I.add(b),D=T),C=Je(C,1),b=Je(b,1)}return w=se(S,I.j(w)),new ae(I,w)}for(I=y;S.l(w)>=0;){for(b=Math.max(1,Math.floor(S.m()/w.m())),C=Math.ceil(Math.log(b)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),D=d(b),T=D.j(w);B(T)||T.l(S)>0;)b-=C,D=d(b),T=D.j(w);$(D)&&(D=A),I=I.add(D),S=se(S,T)}return new ae(I,S)}t.B=function(S){return ue(this,S).h},t.and=function(S){const w=Math.max(this.g.length,S.g.length),b=[];for(let C=0;C<w;C++)b[C]=this.i(C)&S.i(C);return new a(b,this.h&S.h)},t.or=function(S){const w=Math.max(this.g.length,S.g.length),b=[];for(let C=0;C<w;C++)b[C]=this.i(C)|S.i(C);return new a(b,this.h|S.h)},t.xor=function(S){const w=Math.max(this.g.length,S.g.length),b=[];for(let C=0;C<w;C++)b[C]=this.i(C)^S.i(C);return new a(b,this.h^S.h)};function De(S){const w=S.g.length+1,b=[];for(let C=0;C<w;C++)b[C]=S.i(C)<<1|S.i(C-1)>>>31;return new a(b,S.h)}function Je(S,w){const b=w>>5;w%=32;const C=S.g.length-b,I=[];for(let D=0;D<C;D++)I[D]=w>0?S.i(D+b)>>>w|S.i(D+b+1)<<32-w:S.i(D+b);return new a(I,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,T_=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Or=a}).apply(typeof Pp<"u"?Pp:typeof self<"u"?self:typeof window<"u"?window:{});var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var b_,ra,I_,Ll,sh,A_,S_,C_;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bl=="object"&&bl];for(var h=0;h<o.length;++h){var p=o[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=n(this);function r(o,h){if(h)e:{var p=s;o=o.split(".");for(var v=0;v<o.length-1;v++){var N=o[v];if(!(N in p))break e;p=p[N]}o=o[o.length-1],v=p[o],h=h(v),h!=v&&h!=null&&e(p,o,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(h){var p=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&p.push([v,h[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function u(o,h,p){return o.call.apply(o.bind,arguments)}function d(o,h,p){return d=u,d.apply(null,arguments)}function g(o,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),o.apply(this,v)}}function y(o,h){function p(){}p.prototype=h.prototype,o.Z=h.prototype,o.prototype=new p,o.prototype.constructor=o,o.Ob=function(v,N,x){for(var J=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)J[ke-2]=arguments[ke];return h.prototype[N].apply(v,J)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function O(o){const h=o.length;if(h>0){const p=Array(h);for(let v=0;v<h;v++)p[v]=o[v];return p}return[]}function $(o,h){for(let v=1;v<arguments.length;v++){const N=arguments[v];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=o.length||0;const x=N.length||0;o.length=p+x;for(let J=0;J<x;J++)o[p+J]=N[J]}else o.push(N)}}class B{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function Q(o){a.setTimeout(()=>{throw o},0)}function se(){var o=S;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class Y{constructor(){this.h=this.g=null}add(h,p){const v=ae.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ae=new B(()=>new ue,o=>o.reset());class ue{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let De,Je=!1,S=new Y,w=()=>{const o=Promise.resolve(void 0);De=()=>{o.then(b)}};function b(){for(var o;o=se();){try{o.h.call(o.g)}catch(p){Q(p)}var h=ae;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}Je=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var D=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return o})();function T(o){return/^[\s\xa0]*$/.test(o)}function mt(o,h){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}y(mt,I),mt.prototype.init=function(o,h){const p=this.type=o.type,v=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(p=="mouseover"?h=o.fromElement:p=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&mt.Z.h.call(this)},mt.prototype.h=function(){mt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zt="closure_listenable_"+(Math.random()*1e6|0),_t=0;function qe(o,h,p,v,N){this.listener=o,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=N,this.key=++_t,this.da=this.fa=!1}function xe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Kt(o,h,p){for(const v in o)h.call(p,o[v],v,o)}function Fn(o,h){for(const p in o)h.call(void 0,o[p],p,o)}function L(o){const h={};for(const p in o)h[p]=o[p];return h}const Pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function es(o,h){let p,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(p in v)o[p]=v[p];for(let x=0;x<Pt.length;x++)p=Pt[x],Object.prototype.hasOwnProperty.call(v,p)&&(o[p]=v[p])}}function vn(o){this.src=o,this.g={},this.h=0}vn.prototype.add=function(o,h,p,v,N){const x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);const J=he(o,h,v,N);return J>-1?(h=o[J],p||(h.fa=!1)):(h=new qe(h,this.src,x,!!v,N),h.fa=p,o.push(h)),h};function kt(o,h){const p=h.type;if(p in o.g){var v=o.g[p],N=Array.prototype.indexOf.call(v,h,void 0),x;(x=N>=0)&&Array.prototype.splice.call(v,N,1),x&&(xe(h),o.g[p].length==0&&(delete o.g[p],o.h--))}}function he(o,h,p,v){for(let N=0;N<o.length;++N){const x=o[N];if(!x.da&&x.listener==h&&x.capture==!!p&&x.ha==v)return N}return-1}var te="closure_lm_"+(Math.random()*1e6|0),et={};function ee(o,h,p,v,N){if(Array.isArray(h)){for(let x=0;x<h.length;x++)ee(o,h[x],p,v,N);return null}return p=Z(p),o&&o[zt]?o.J(h,p,c(v)?!!v.capture:!1,N):jt(o,h,p,!1,v,N)}function jt(o,h,p,v,N,x){if(!h)throw Error("Invalid event type");const J=c(N)?!!N.capture:!!N;let ke=j(o);if(ke||(o[te]=ke=new vn(o)),p=ke.add(h,p,v,J,x),p.proxy)return p;if(v=Ae(),p.proxy=v,v.src=o,v.listener=p,o.addEventListener)D||(N=J),N===void 0&&(N=!1),o.addEventListener(h.toString(),v,N);else if(o.attachEvent)o.attachEvent(V(h.toString()),v);else if(o.addListener&&o.removeListener)o.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ae(){function o(p){return h.call(o.src,o.listener,p)}const h=z;return o}function E(o,h,p,v,N){if(Array.isArray(h))for(var x=0;x<h.length;x++)E(o,h[x],p,v,N);else v=c(v)?!!v.capture:!!v,p=Z(p),o&&o[zt]?(o=o.i,x=String(h).toString(),x in o.g&&(h=o.g[x],p=he(h,p,v,N),p>-1&&(xe(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete o.g[x],o.h--)))):o&&(o=j(o))&&(h=o.g[h.toString()],o=-1,h&&(o=he(h,p,v,N)),(p=o>-1?h[o]:null)&&R(p))}function R(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[zt])kt(h.i,o);else{var p=o.type,v=o.proxy;h.removeEventListener?h.removeEventListener(p,v,o.capture):h.detachEvent?h.detachEvent(V(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=j(h))?(kt(p,o),p.h==0&&(p.src=null,h[te]=null)):xe(o)}}}function V(o){return o in et?et[o]:et[o]="on"+o}function z(o,h){if(o.da)o=!0;else{h=new mt(h,this);const p=o.listener,v=o.ha||o.src;o.fa&&R(o),o=p.call(v,h)}return o}function j(o){return o=o[te],o instanceof vn?o:null}var F="__closure_events_fn_"+(Math.random()*1e9>>>0);function Z(o){return typeof o=="function"?o:(o[F]||(o[F]=function(h){return o.handleEvent(h)}),o[F])}function G(){C.call(this),this.i=new vn(this),this.M=this,this.G=null}y(G,C),G.prototype[zt]=!0,G.prototype.removeEventListener=function(o,h,p,v){E(this,o,h,p,v)};function K(o,h){var p,v=o.G;if(v)for(p=[];v;v=v.G)p.push(v);if(o=o.M,v=h.type||h,typeof h=="string")h=new I(h,o);else if(h instanceof I)h.target=h.target||o;else{var N=h;h=new I(v,o),es(h,N)}N=!0;let x,J;if(p)for(J=p.length-1;J>=0;J--)x=h.g=p[J],N=H(x,v,!0,h)&&N;if(x=h.g=o,N=H(x,v,!0,h)&&N,N=H(x,v,!1,h)&&N,p)for(J=0;J<p.length;J++)x=h.g=p[J],N=H(x,v,!1,h)&&N}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const p=o.g[h];for(let v=0;v<p.length;v++)xe(p[v]);delete o.g[h],o.h--}}this.G=null},G.prototype.J=function(o,h,p,v){return this.i.add(String(o),h,!1,p,v)},G.prototype.K=function(o,h,p,v){return this.i.add(String(o),h,!0,p,v)};function H(o,h,p,v){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let x=0;x<h.length;++x){const J=h[x];if(J&&!J.da&&J.capture==p){const ke=J.listener,Et=J.ha||J.src;J.fa&&kt(o.i,J),N=ke.call(Et,v)!==!1&&N}}return N&&!v.defaultPrevented}function ge(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function ne(o){o.g=ge(()=>{o.g=null,o.i&&(o.i=!1,ne(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class de extends C{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(o){C.call(this),this.h=o,this.g={}}y(pe,C);var Te=[];function We(o){Kt(o.g,function(h,p){this.g.hasOwnProperty(p)&&R(h)},o),o.g={}}pe.prototype.N=function(){pe.Z.N.call(this),We(this)},pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $e=a.JSON.stringify,pt=a.JSON.parse,ut=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function It(){}function At(){}var Gt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ar(){I.call(this,"d")}y(ar,I);function wt(){I.call(this,"c")}y(wt,I);var St={},Hr=null;function ks(){return Hr=Hr||new G}St.Ia="serverreachability";function Xa(o){I.call(this,St.Ia,o)}y(Xa,I);function qr(o){const h=ks();K(h,new Xa(h))}St.STAT_EVENT="statevent";function Za(o,h){I.call(this,St.STAT_EVENT,o),this.stat=h}y(Za,I);function Vt(o){const h=ks();K(h,new Za(h,o))}St.Ja="timingevent";function Wr(o,h){I.call(this,St.Ja,o),this.size=h}y(Wr,I);function lr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function cr(){this.g=!0}cr.prototype.ua=function(){this.g=!1};function Kc(o,h,p,v,N,x){o.info(function(){if(o.g)if(x){var J="",ke=x.split("&");for(let Be=0;Be<ke.length;Be++){var Et=ke[Be].split("=");if(Et.length>1){const at=Et[0];Et=Et[1];const Cn=at.split("_");J=Cn.length>=2&&Cn[1]=="type"?J+(at+"="+Et+"&"):J+(at+"=redacted&")}}}else J=null;else J=x;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+h+`
`+p+`
`+J})}function Gc(o,h,p,v,N,x,J){o.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+h+`
`+p+`
`+x+" "+J})}function ur(o,h,p,v){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+hr(o,p)+(v?" "+v:"")})}function Qc(o,h){o.info(function(){return"TIMEOUT: "+h})}cr.prototype.info=function(){};function hr(o,h){if(!o.g)return h;if(!h)return null;try{const x=JSON.parse(h);if(x){for(o=0;o<x.length;o++)if(Array.isArray(x[o])){var p=x[o];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var N=v[0];if(N!="noop"&&N!="stop"&&N!="close")for(let J=1;J<v.length;J++)v[J]=""}}}}return $e(x)}catch{return h}}var ts={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},el={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tl;function ko(){}y(ko,It),ko.prototype.g=function(){return new XMLHttpRequest},tl=new ko;function zr(o){return encodeURIComponent(String(o))}function Jc(o){var h=1;o=o.split(":");const p=[];for(;h>0&&o.length;)p.push(o.shift()),h--;return o.length&&p.push(o.join(":")),p}function An(o,h,p,v){this.j=o,this.i=h,this.l=p,this.S=v||1,this.V=new pe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ds}function Ds(){this.i=null,this.g="",this.h=!1}var Kr={},Do={};function Gr(o,h,p){o.M=1,o.A=Jr(wn(h)),o.u=p,o.R=!0,nl(o,null)}function nl(o,h){o.F=Date.now(),Mt(o),o.B=wn(o.A);var p=o.B,v=o.S;Array.isArray(v)||(v=[String(v)]),xi(p.i,"t",v),o.C=0,p=o.j.L,o.h=new Ds,o.g=ll(o.j,p?h:null,!o.u),o.P>0&&(o.O=new de(d(o.Y,o,o.g),o.P)),h=o.V,p=o.g,v=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(Te[0]=N.toString()),N=Te);for(let x=0;x<N.length;x++){const J=ee(p,N[x],v||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=o.J?L(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),qr(),Kc(o.i,o.v,o.B,o.l,o.S,o.u)}An.prototype.ba=function(o){o=o.target;const h=this.O;h&&Bn(o)==3?h.j():this.Y(o)},An.prototype.Y=function(o){try{if(o==this.g)e:{const ke=Bn(this.g),Et=this.g.ya(),Be=this.g.ca();if(!(ke<3)&&(ke!=3||this.g&&(this.h.h||this.g.la()||Ui(this.g)))){this.K||ke!=4||Et==7||(Et==8||Be<=0?qr(3):qr(2)),Dt(this);var h=this.g.ca();this.X=h;var p=Yc(this);if(this.o=h==200,Gc(this.i,this.v,this.B,this.l,this.S,ke,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,N=this.g;if((v=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var x=v;break t}}x=null}if(o=x)ur(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Un(this,o);else{this.o=!1,this.m=3,Vt(12),pn(this),ns(this);break e}}if(this.R){o=!0;let at;for(;!this.K&&this.C<p.length;)if(at=$t(this,p),at==Do){ke==4&&(this.m=4,Vt(14),o=!1),ur(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Kr){this.m=4,Vt(15),ur(this.i,this.l,p,"[Invalid Chunk]"),o=!1;break}else ur(this.i,this.l,at,null),Un(this,at);if(Os(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||p.length!=0||this.h.h||(this.m=1,Vt(16),o=!1),this.o=this.o&&o,!o)ur(this.i,this.l,p,"[Invalid Chunked Response]"),pn(this),ns(this);else if(p.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),$i(J),J.P=!0,Vt(11))}}else ur(this.i,this.l,p,null),Un(this,p);ke==4&&pn(this),this.o&&!this.K&&(ke==4?ol(this.j,this):(this.o=!1,Mt(this)))}else Bo(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Vt(12)):(this.m=0,Vt(13)),pn(this),ns(this)}}}catch{}finally{}};function Yc(o){if(!Os(o))return o.g.la();const h=Ui(o.g);if(h==="")return"";let p="";const v=h.length,N=Bn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return pn(o),ns(o),"";o.h.i=new a.TextDecoder}for(let x=0;x<v;x++)o.h.h=!0,p+=o.h.i.decode(h[x],{stream:!(N&&x==v-1)});return h.length=0,o.h.g+=p,o.C=0,o.h.g}function Os(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function $t(o,h){var p=o.C,v=h.indexOf(`
`,p);return v==-1?Do:(p=Number(h.substring(p,v)),isNaN(p)?Kr:(v+=1,v+p>h.length?Do:(h=h.slice(v,v+p),o.C=v+p,h)))}An.prototype.cancel=function(){this.K=!0,pn(this)};function Mt(o){o.T=Date.now()+o.H,Qt(o,o.H)}function Qt(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=lr(d(o.aa,o),h)}function Dt(o){o.D&&(a.clearTimeout(o.D),o.D=null)}An.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Qc(this.i,this.B),this.M!=2&&(qr(),Vt(17)),pn(this),this.m=2,ns(this)):Qt(this,this.T-o)};function ns(o){o.j.I==0||o.K||ol(o.j,o)}function pn(o){Dt(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,We(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function Un(o,h){try{var p=o.j;if(p.I!=0&&(p.g==o||ki(p.h,o))){if(!o.L&&ki(p.h,o)&&p.I==3){try{var v=p.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<o.F)ti(p),_r(p);else break e;ji(p),Vt(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=lr(d(p.Va,p),6e3));Ns(p.h)<=1&&p.ta&&(p.ta=void 0)}else os(p,11)}else if((o.L||p.g==o)&&ti(p),!T(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let Be=N[h];const at=Be[0];if(!(at<=p.K))if(p.K=at,Be=Be[1],p.I==2)if(Be[0]=="c"){p.M=Be[1],p.ba=Be[2];const Cn=Be[3];Cn!=null&&(p.ka=Cn,p.j.info("VER="+p.ka));const Rn=Be[4];Rn!=null&&(p.za=Rn,p.j.info("SVER="+p.za));const cs=Be[5];cs!=null&&typeof cs=="number"&&cs>0&&(v=1.5*cs,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const us=o.g;if(us){const Hi=us.g?us.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var x=v.h;x.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Qr(x,x.h),x.h=null))}if(v.G){const Qo=us.g?us.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(v.wa=Qo,tt(v.J,v.G,Qo))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-o.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var J=o;if(v.na=ni(v,v.L?v.ba:null,v.W),J.L){Di(v.h,J);var ke=J,Et=v.O;Et&&(ke.H=Et),ke.D&&(Dt(ke),Mt(ke)),v.g=J}else zo(v);p.i.length>0&&ei(p)}else Be[0]!="stop"&&Be[0]!="close"||os(p,7);else p.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?os(p,7):Us(p):Be[0]!="noop"&&p.l&&p.l.qa(Be),p.A=0)}}qr(4)}catch{}}var fr=class{constructor(o,h){this.g=o,this.map=h}};function Oo(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ns(o){return o.h?1:o.g?o.g.size:0}function ki(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Qr(o,h){o.g?o.g.add(h):o.h=h}function Di(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Oo.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function No(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const p of o.g.values())h=h.concat(p.G);return h}return O(o.i)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sl(o,h){if(o){o=o.split("&");for(let p=0;p<o.length;p++){const v=o[p].indexOf("=");let N,x=null;v>=0?(N=o[p].substring(0,v),x=o[p].substring(v+1)):N=o[p],h(N,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function jn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof jn?(this.l=o.l,dr(this,o.j),this.o=o.o,this.g=o.g,pr(this,o.u),this.h=o.h,Oi(this,Fo(o.i)),this.m=o.m):o&&(h=String(o).match(xo))?(this.l=!1,dr(this,h[1]||"",!0),this.o=Jt(h[2]||""),this.g=Jt(h[3]||"",!0),pr(this,h[4]),this.h=Jt(h[5]||"",!0),Oi(this,h[6]||"",!0),this.m=Jt(h[7]||"")):(this.l=!1,this.i=new ss(null,this.l))}jn.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(Ot(h,an,!0),":");var p=this.g;return(p||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Ot(h,an,!0),"@"),o.push(zr(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&o.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Ot(p,p.charAt(0)=="/"?Mo:Vo,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Ot(p,Vs)),o.join("")},jn.prototype.resolve=function(o){const h=wn(this);let p=!!o.j;p?dr(h,o.j):p=!!o.o,p?h.o=o.o:p=!!o.g,p?h.g=o.g:p=o.u!=null;var v=o.h;if(p)pr(h,o.u);else if(p=!!o.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var N=h.h.lastIndexOf("/");N!=-1&&(v=h.h.slice(0,N+1)+v)}if(N=v,N==".."||N==".")v="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){v=N.lastIndexOf("/",0)==0,N=N.split("/");const x=[];for(let J=0;J<N.length;){const ke=N[J++];ke=="."?v&&J==N.length&&x.push(""):ke==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),v&&J==N.length&&x.push("")):(x.push(ke),v=!0)}v=x.join("/")}else v=N}return p?h.h=v:p=o.i.toString()!=="",p?Oi(h,Fo(o.i)):p=!!o.m,p&&(h.m=o.m),h};function wn(o){return new jn(o)}function dr(o,h,p){o.j=p?Jt(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function pr(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function Oi(o,h,p){h instanceof ss?(o.i=h,Xc(o.i,o.l)):(p||(h=Ot(h,Sn)),o.i=new ss(h,o.l))}function tt(o,h,p){o.i.set(h,p)}function Jr(o){return tt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Jt(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ot(o,h,p){return typeof o=="string"?(o=encodeURI(o).replace(h,xs),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xs(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var an=/[#\/\?@]/g,Vo=/[#\?:]/g,Mo=/[#\?]/g,Sn=/[#\?@]/g,Vs=/#/g;function ss(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function gn(o){o.g||(o.g=new Map,o.h=0,o.i&&sl(o.i,function(h,p){o.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ss.prototype,t.add=function(o,h){gn(this),this.i=null,o=Yt(this,o);let p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(h),this.h+=1,this};function Ni(o,h){gn(o),h=Yt(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Lo(o,h){return gn(o),h=Yt(o,h),o.g.has(h)}t.forEach=function(o,h){gn(this),this.g.forEach(function(p,v){p.forEach(function(N){o.call(h,N,v,this)},this)},this)};function Ms(o,h){gn(o);let p=[];if(typeof h=="string")Lo(o,h)&&(p=p.concat(o.g.get(Yt(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)p=p.concat(o[h]);return p}t.set=function(o,h){return gn(this),this.i=null,o=Yt(this,o),Lo(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=Ms(this,o),o.length>0?String(o[0]):h):h};function xi(o,h,p){Ni(o,h),p.length>0&&(o.i=null,o.g.set(Yt(o,h),O(p)),o.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var p=h[v];const N=zr(p);p=Ms(this,p);for(let x=0;x<p.length;x++){let J=N;p[x]!==""&&(J+="="+zr(p[x])),o.push(J)}}return this.i=o.join("&")};function Fo(o){const h=new ss;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function Yt(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function Xc(o,h){h&&!o.j&&(gn(o),o.i=null,o.g.forEach(function(p,v){const N=v.toLowerCase();v!=N&&(Ni(this,v),xi(this,N,p))},o)),o.j=h}function rs(o,h){const p=new cr;if(a.Image){const v=new Image;v.onload=g($n,p,"TestLoadImage: loaded",!0,h,v),v.onerror=g($n,p,"TestLoadImage: error",!1,h,v),v.onabort=g($n,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=g($n,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=o}else h(!1)}function Vi(o,h){const p=new cr,v=new AbortController,N=setTimeout(()=>{v.abort(),$n(p,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:v.signal}).then(x=>{clearTimeout(N),x.ok?$n(p,"TestPingServer: ok",!0,h):$n(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),$n(p,"TestPingServer: error",!1,h)})}function $n(o,h,p,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(p)}catch{}}function Yr(){this.g=new ut}function Xr(o){this.i=o.Sb||null,this.h=o.ab||!1}y(Xr,It),Xr.prototype.g=function(){return new is(this.i,this.h)};function is(o,h){G.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(is,G),t=is.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,mr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Uo(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Uo(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?gr(this):mr(this),this.readyState==3&&Uo(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,gr(this))},t.Na=function(o){this.g&&(this.response=o,gr(this))},t.ga=function(){this.g&&gr(this)};function gr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,mr(o)}t.setRequestHeader=function(o,h){this.A.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=h.next();return o.join(`\r
`)};function mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ls(o){let h="";return Kt(o,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function jo(o,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Ls(p),typeof o=="string"?p!=null&&zr(p):tt(o,h,p))}function ht(o){G.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ht,G);var $o=/^https?$/i,Mi=["POST","PUT"];t=ht.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tl.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(x){Li(this,x);return}if(o=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)p.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const x of v.keys())p.set(x,v.get(x));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),N=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Mi,h,void 0)>=0)||v||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,J]of p)this.g.setRequestHeader(x,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(x){Li(this,x)}};function Li(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,rl(o),Fi(o)}function rl(o){o.A||(o.A=!0,K(o,"complete"),K(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,K(this,"complete"),K(this,"abort"),Fi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),ht.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zr(this):this.Xa())},t.Xa=function(){Zr(this)};function Zr(o){if(o.h&&typeof i<"u"){if(o.v&&Bn(o)==4)setTimeout(o.Ca.bind(o),0);else if(K(o,"readystatechange"),Bn(o)==4){o.h=!1;try{const x=o.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=x===0){let J=String(o.D).match(xo)[1]||null;!J&&a.self&&a.self.location&&(J=a.self.location.protocol.slice(0,-1)),v=!$o.test(J?J.toLowerCase():"")}p=v}if(p)K(o,"complete"),K(o,"success");else{o.o=6;try{var N=Bn(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",rl(o)}}finally{Fi(o)}}}}function Fi(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const p=o.g;o.g=null,h||K(o,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Bn(o){return o.g?o.g.readyState:0}t.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),pt(h)}};function Ui(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Bo(o){const h={};o=(o.g&&Bn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<o.length;v++){if(T(o[v]))continue;var p=Jc(o[v]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=h[N]||[];h[N]=x,x.push(p)}Fn(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(o,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||h}function Ho(o){this.za=0,this.i=[],this.j=new cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fs("baseRetryDelayMs",5e3,o),this.Za=Fs("retryDelaySeedMs",1e4,o),this.Ta=Fs("forwardChannelMaxRetries",2,o),this.va=Fs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Oo(o&&o.concurrentRequestLimit),this.Ba=new Yr,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ho.prototype,t.ka=8,t.I=1,t.connect=function(o,h,p,v){Vt(0),this.W=o,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=ni(this,null,this.W),ei(this)};function Us(o){if(qo(o),o.I==3){var h=o.V++,p=wn(o.J);if(tt(p,"SID",o.M),tt(p,"RID",h),tt(p,"TYPE","terminate"),vr(o,p),h=new An(o,o.j,h),h.M=2,h.A=Jr(wn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.A,p=!0),p||(h.g=ll(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Mt(h)}Ko(o)}function _r(o){o.g&&($i(o),o.g.cancel(),o.g=null)}function qo(o){_r(o),o.v&&(a.clearTimeout(o.v),o.v=null),ti(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ei(o){if(!Pi(o.h)&&!o.m){o.m=!0;var h=o.Ea;De||w(),Je||(De(),Je=!0),S.add(h,o),o.D=0}}function yr(o,h){return Ns(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=lr(d(o.Ea,o,h),al(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new An(this,this.j,o);let x=this.o;if(this.U&&(x?(x=L(x),es(x,this.U)):x=this.U),this.u!==null||this.R||(N.J=x,x=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Wo(this,N,h),p=wn(this.J),tt(p,"RID",o),tt(p,"CVER",22),this.G&&tt(p,"X-HTTP-Session-Id",this.G),vr(this,p),x&&(this.R?h="headers="+zr(Ls(x))+"&"+h:this.u&&jo(p,this.u,x)),Qr(this.h,N),this.Ra&&tt(p,"TYPE","init"),this.S?(tt(p,"$req",h),tt(p,"SID","null"),N.U=!0,Gr(N,p,null)):Gr(N,p,h),this.I=2}}else this.I==3&&(o?il(this,o):this.i.length==0||Pi(this.h)||il(this))};function il(o,h){var p;h?p=h.l:p=o.V++;const v=wn(o.J);tt(v,"SID",o.M),tt(v,"RID",p),tt(v,"AID",o.K),vr(o,v),o.u&&o.o&&jo(v,o.u,o.o),p=new An(o,o.j,p,o.D+1),o.u===null&&(p.J=o.o),h&&(o.i=h.G.concat(o.i)),h=Wo(o,p,1e3),p.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Qr(o.h,p),Gr(p,v,h)}function vr(o,h){o.H&&Kt(o.H,function(p,v){tt(h,v,p)}),o.l&&Kt({},function(p,v){tt(h,v,p)})}function Wo(o,h,p){p=Math.min(o.i.length,p);const v=o.l?d(o.l.Ka,o.l,o):null;e:{var N=o.i;let ke=-1;for(;;){const Et=["count="+p];ke==-1?p>0?(ke=N[0].g,Et.push("ofs="+ke)):ke=0:Et.push("ofs="+ke);let Be=!0;for(let at=0;at<p;at++){var x=N[at].g;const Cn=N[at].map;if(x-=ke,x<0)ke=Math.max(0,N[at].g-100),Be=!1;else try{x="req"+x+"_"||"";try{var J=Cn instanceof Map?Cn:Object.entries(Cn);for(const[Rn,cs]of J){let us=cs;c(cs)&&(us=$e(cs)),Et.push(x+Rn+"="+encodeURIComponent(us))}}catch(Rn){throw Et.push(x+"type="+encodeURIComponent("_badmap")),Rn}}catch{v&&v(Cn)}}if(Be){J=Et.join("&");break e}}J=void 0}return o=o.i.splice(0,p),h.G=o,J}function zo(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;De||w(),Je||(De(),Je=!0),S.add(h,o),o.A=0}}function ji(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=lr(d(o.Da,o),al(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,Bi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=lr(d(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Vt(10),_r(this),Bi(this))};function $i(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Bi(o){o.g=new An(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=wn(o.na);tt(h,"RID","rpc"),tt(h,"SID",o.M),tt(h,"AID",o.K),tt(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&tt(h,"TO",o.ia),tt(h,"TYPE","xmlhttp"),vr(o,h),o.u&&o.o&&jo(h,o.u,o.o),o.O&&(o.g.H=o.O);var p=o.g;o=o.ba,p.M=1,p.A=Jr(wn(h)),p.u=null,p.R=!0,nl(p,o)}t.Va=function(){this.C!=null&&(this.C=null,_r(this),ji(this),Vt(19))};function ti(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ol(o,h){var p=null;if(o.g==h){ti(o),$i(o),o.g=null;var v=2}else if(ki(o.h,h))p=h.G,Di(o.h,h),v=1;else return;if(o.I!=0){if(h.o)if(v==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=o.D;v=ks(),K(v,new Wr(v,p)),ei(o)}else zo(o);else if(N=h.m,N==3||N==0&&h.X>0||!(v==1&&yr(o,h)||v==2&&ji(o)))switch(p&&p.length>0&&(h=o.h,h.i=h.i.concat(p)),N){case 1:os(o,5);break;case 4:os(o,10);break;case 3:os(o,6);break;default:os(o,2)}}}function al(o,h){let p=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(p*=2),p*h}function os(o,h){if(o.j.info("Error code "+h),h==2){var p=d(o.bb,o),v=o.Ua;const N=!v;v=new jn(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||dr(v,"https"),Jr(v),N?rs(v.toString(),p):Vi(v.toString(),p)}else Vt(2);o.I=0,o.l&&o.l.pa(h),Ko(o),qo(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Ko(o){if(o.I=0,o.ja=[],o.l){const h=No(o.h);(h.length!=0||o.i.length!=0)&&($(o.ja,h),$(o.ja,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.oa()}}function ni(o,h,p){var v=p instanceof jn?wn(p):new jn(p);if(v.g!="")h&&(v.g=h+"."+v.g),pr(v,v.u);else{var N=a.location;v=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const x=new jn(null);v&&dr(x,v),h&&(x.g=h),N&&pr(x,N),p&&(x.h=p),v=x}return p=o.G,h=o.wa,p&&h&&tt(v,p,h),tt(v,"VER",o.ka),vr(o,v),v}function ll(o,h,p){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new ht(new Xr({ab:p})):new ht(o.ma),h.Fa(o.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cl(){}t=cl.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wr(){}wr.prototype.g=function(o,h){return new Xt(o,h)};function Xt(o,h){G.call(this),this.g=new Ho(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!T(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new ls(this)}y(Xt,G),Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Us(this.g)},Xt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.v&&(p={},p.__data__=$e(o),o=p);h.i.push(new fr(h.Ya++,o)),h.I==3&&ei(h)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Us(this.g),delete this.g,Xt.Z.N.call(this)};function Go(o){ar.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const p in h){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}y(Go,ar);function as(){wt.call(this),this.status=1}y(as,wt);function ls(o){this.g=o}y(ls,cl),ls.prototype.ra=function(){K(this.g,"a")},ls.prototype.qa=function(o){K(this.g,new Go(o))},ls.prototype.pa=function(o){K(this.g,new as)},ls.prototype.oa=function(){K(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,C_=function(){return new wr},S_=function(){return ks()},A_=St,sh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,Ll=ts,el.COMPLETE="complete",I_=el,At.EventType=Gt,Gt.OPEN="a",Gt.CLOSE="b",Gt.ERROR="c",Gt.MESSAGE="d",G.prototype.listen=G.prototype.J,ra=At,ht.prototype.listenOnce=ht.prototype.K,ht.prototype.getLastError=ht.prototype.Ha,ht.prototype.getLastErrorCode=ht.prototype.ya,ht.prototype.getStatus=ht.prototype.ca,ht.prototype.getResponseJson=ht.prototype.La,ht.prototype.getResponseText=ht.prototype.la,ht.prototype.send=ht.prototype.ea,ht.prototype.setWithCredentials=ht.prototype.Fa,b_=ht}).apply(typeof bl<"u"?bl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="12.13.0";function eC(t){Ao=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new Lh("@firebase/firestore");function Qi(){return Ti.logLevel}function ie(t,...e){if(Ti.logLevel<=Ue.DEBUG){const n=e.map(Jh);Ti.debug(`Firestore (${Ao}): ${t}`,...n)}}function sr(t,...e){if(Ti.logLevel<=Ue.ERROR){const n=e.map(Jh);Ti.error(`Firestore (${Ao}): ${t}`,...n)}}function bi(t,...e){if(Ti.logLevel<=Ue.WARN){const n=e.map(Jh);Ti.warn(`Firestore (${Ao}): ${t}`,...n)}}function Jh(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,R_(t,s,n)}function R_(t,e,n){let s=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw sr(s),new Error(s)}function Qe(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||R_(e,r,s)}function Pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends or{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(en.UNAUTHENTICATED)))}shutdown(){}}class nC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Qe(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let i=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nr,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},c=u=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nr)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string",31837,{l:s}),new P_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class rC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=en.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class iC{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new rC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(en.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Qe(this.o===void 0,3512);const s=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new kp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=aC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Le(t,e){return t<e?-1:t>e?1:0}function rh(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return Nu(r)===Nu(i)?Le(r,i):Nu(r)?1:-1}return Le(t.length,e.length)}const lC=55296,cC=57343;function Nu(t){const e=t.charCodeAt(0);return e>=lC&&e<=cC}function _o(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="__name__";class gs{constructor(e,n,s){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ye(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return gs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gs?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=gs.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Le(e.length,n.length)}static compareSegments(e,n){const s=gs.isNumericId(e),r=gs.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?gs.extractNumericId(e).compare(gs.extractNumericId(n)):rh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Or.fromString(e.substring(4,e.length-2))}}class ft extends gs{construct(e,n,s){return new ft(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new ft(n)}static emptyPath(){return new ft([])}}const uC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends gs{construct(e,n,s){return new qt(e,n,s)}static isValidIdentifier(e){return uC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dp}static keyField(){return new qt([Dp])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new fe(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new fe(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new fe(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(n)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(ft.fromString(e))}static fromName(e){return new me(ft.fromString(e).popFirst(5))}static empty(){return new me(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new ft(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t,e,n){if(!n)throw new fe(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hC(t,e,n,s){if(e===!0&&s===!0)throw new fe(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Op(t){if(!me.isDocumentKey(t))throw new fe(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Np(t){if(me.isDocumentKey(t))throw new fe(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function D_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Xh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function yo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xh(t);throw new fe(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){const n={typeString:t};return e&&(n.value=e),n}function za(t,e){if(!D_(t))throw new fe(W.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(r&&typeof a!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new fe(W.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=-62135596800,Vp=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Vp);return new dt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xp)throw new fe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vp}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(za(e,dt._jsonSchema))return new dt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:Rt("string",dt._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new dt(0,0))}static max(){return new Ie(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=-1;function fC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Ie.fromTimestamp(s===1e9?new dt(n+1,0):new dt(n,s));return new Mr(r,me.empty(),e)}function dC(t){return new Mr(t.readTime,t.key,Ca)}class Mr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Mr(Ie.min(),me.empty(),Ca)}static max(){return new Mr(Ie.max(),me.empty(),Ca)}}function pC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(t.documentKey,e.documentKey),n!==0?n:Le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==gC)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):U.reject(n)}static resolve(e){return new U(((n,s)=>{n(e)}))}static reject(e){return new U(((n,s)=>{s(e)}))}static waitFor(e){return new U(((n,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&n()}),(u=>s(u)))})),a=!0,i===r&&n()}))}static or(e){let n=U.resolve(!1);for(const s of e)n=n.next((r=>r?U.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new U(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next((g=>{a[d]=g,++c,c===i&&s(a)}),(g=>r(g)))}}))}static doWhile(e,n){return new U(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function _C(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=-1;function xc(t){return t==null}function ic(t){return t===0&&1/t==-1/0}function yC(t){return typeof t=="number"&&Number.isInteger(t)&&!ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="";function vC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mp(e)),e=wC(t.get(n),e);return Mp(e)}function wC(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case O_:n+="";break;default:n+=i}}return n}function Mp(t){return t+O_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ai(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function N_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new gt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ht.RED,this.left=r??Ht.EMPTY,this.right=i??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ht(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ht.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fp(this.data.getIterator())}getIteratorFrom(e){return new Fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class Fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new Kn([])}unionWith(e){let n=new xt(qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new x_("Invalid base64 string: "+i):i}})(e);return new Wt(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const EC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(Qe(!!t,39018),typeof t=="string"){let e=0;const n=EC.exec(t);if(Qe(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:bt(t.seconds),nanos:bt(t.nanos)}}function bt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="server_timestamp",M_="__type__",L_="__previous_value__",F_="__local_write_time__";function ef(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[M_])==null?void 0:s.stringValue)===V_}function Vc(t){const e=t.mapValue.fields[L_];return ef(e)?Vc(e):e}function Ra(t){const e=Lr(t.mapValue.fields[F_].timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,s,r,i,a,c,u,d,g,y){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=g,this.apiKey=y}}const oc="(default)";class Pa{constructor(e,n){this.projectId=e,this.database=n||oc}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===oc}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}function bC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new fe(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="__type__",IC="__max__",Al={mapValue:{}},j_="__vector__",ac="value";function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ef(t)?4:SC(t)?9007199254740991:AC(t)?10:11:ye(28295,{value:t})}function Cs(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Lr(r.timestampValue),c=Lr(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Fr(r.bytesValue).isEqual(Fr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return bt(r.geoPointValue.latitude)===bt(i.geoPointValue.latitude)&&bt(r.geoPointValue.longitude)===bt(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return bt(r.integerValue)===bt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=bt(r.doubleValue),c=bt(i.doubleValue);return a===c?ic(a)===ic(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return _o(t.arrayValue.values||[],e.arrayValue.values||[],Cs);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Lp(a)!==Lp(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Cs(a[u],c[u])))return!1;return!0})(t,e);default:return ye(52216,{left:t})}}function ka(t,e){return(t.values||[]).find((n=>Cs(n,e)))!==void 0}function vo(t,e){if(t===e)return 0;const n=Ur(t),s=Ur(e);if(n!==s)return Le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=bt(i.integerValue||i.doubleValue),u=bt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(t,e);case 3:return Up(t.timestampValue,e.timestampValue);case 4:return Up(Ra(t),Ra(e));case 5:return rh(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=Fr(i),u=Fr(a);return c.compareTo(u)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const g=Le(c[d],u[d]);if(g!==0)return g}return Le(c.length,u.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=Le(bt(i.latitude),bt(a.latitude));return c!==0?c:Le(bt(i.longitude),bt(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return jp(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var A,O,$,B;const c=i.fields||{},u=a.fields||{},d=(A=c[ac])==null?void 0:A.arrayValue,g=(O=u[ac])==null?void 0:O.arrayValue,y=Le((($=d==null?void 0:d.values)==null?void 0:$.length)||0,((B=g==null?void 0:g.values)==null?void 0:B.length)||0);return y!==0?y:jp(d,g)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Al.mapValue&&a===Al.mapValue)return 0;if(i===Al.mapValue)return 1;if(a===Al.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let y=0;y<u.length&&y<g.length;++y){const A=rh(u[y],g[y]);if(A!==0)return A;const O=vo(c[u[y]],d[g[y]]);if(O!==0)return O}return Le(u.length,g.length)})(t.mapValue,e.mapValue);default:throw ye(23264,{he:n})}}function Up(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Le(t,e);const n=Lr(t),s=Lr(e),r=Le(n.seconds,s.seconds);return r!==0?r:Le(n.nanos,s.nanos)}function jp(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=vo(n[r],s[r]);if(i)return i}return Le(n.length,s.length)}function wo(t){return ih(t)}function ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=Lr(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Fr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return me.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=ih(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${ih(n.fields[a])}`;return r+"}"})(t.mapValue):ye(61005,{value:t})}function Fl(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vc(t);return e?16+Fl(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Fl(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return Ai(s.fields,((i,a)=>{r+=i.length+Fl(a)})),r})(t.mapValue);default:throw ye(13486,{value:t})}}function oh(t){return!!t&&"integerValue"in t}function tf(t){return!!t&&"arrayValue"in t}function $p(t){return!!t&&"nullValue"in t}function Bp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function AC(t){var n,s;return((s=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[U_])==null?void 0:s.stringValue)===j_}function ma(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ai(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=ma(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return{...t}}function SC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===IC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=qt.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,s,r),s={},r=[],n=c.popLast()}a?s[c.lastSegment()]=ma(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ul(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ai(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Nn(ma(this.value))}}function $_(t){const e=[];return Ai(t.fields,((n,s)=>{const r=new qt([n]);if(Ul(s)){const i=$_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new Kn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,s,r,i,a,c){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new nn(e,0,Ie.min(),Ie.min(),Ie.min(),Nn.empty(),0)}static newFoundDocument(e,n,s,r){return new nn(e,1,n,Ie.min(),s,r,0)}static newNoDocument(e,n){return new nn(e,2,n,Ie.min(),Ie.min(),Nn.empty(),0)}static newUnknownDocument(e,n){return new nn(e,3,n,Ie.min(),Ie.min(),Nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.position=e,this.inclusive=n}}function Hp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],a=t.position[r];if(i.field.isKeyField()?s=me.comparator(me.fromName(a.referenceValue),n.key):s=vo(a,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function qp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cs(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n="asc"){this.field=e,this.dir=n}}function CC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{}class Nt extends B_{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new PC(e,n,s):n==="array-contains"?new OC(e,s):n==="in"?new NC(e,s):n==="not-in"?new xC(e,s):n==="array-contains-any"?new VC(e,s):new Nt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new kC(e,s):new DC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vo(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rs extends B_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Rs(e,n)}matches(e){return H_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function H_(t){return t.op==="and"}function q_(t){return RC(t)&&H_(t)}function RC(t){for(const e of t.filters)if(e instanceof Rs)return!1;return!0}function ah(t){if(t instanceof Nt)return t.field.canonicalString()+t.op.toString()+wo(t.value);if(q_(t))return t.filters.map((e=>ah(e))).join(",");{const e=t.filters.map((n=>ah(n))).join(",");return`${t.op}(${e})`}}function W_(t,e){return t instanceof Nt?(function(s,r){return r instanceof Nt&&s.op===r.op&&s.field.isEqual(r.field)&&Cs(s.value,r.value)})(t,e):t instanceof Rs?(function(s,r){return r instanceof Rs&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&W_(a,r.filters[c])),!0):!1})(t,e):void ye(19439)}function z_(t){return t instanceof Nt?(function(n){return`${n.field.canonicalString()} ${n.op} ${wo(n.value)}`})(t):t instanceof Rs?(function(n){return n.op.toString()+" {"+n.getFilters().map(z_).join(" ,")+"}"})(t):"Filter"}class PC extends Nt{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class kC extends Nt{constructor(e,n){super(e,"in",n),this.keys=K_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class DC extends Nt{constructor(e,n){super(e,"not-in",n),this.keys=K_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function K_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((s=>me.fromName(s.referenceValue)))}class OC extends Nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tf(n)&&ka(n.arrayValue,this.value)}}class NC extends Nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class xC extends Nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ka(this.value.arrayValue,n)}}class VC extends Nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>ka(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Wp(t,e=null,n=[],s=[],r=null,i=null,a=null){return new MC(t,e,n,s,r,i,a)}function nf(t){const e=Pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>ah(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=n}return e.Te}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!W_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qp(t.startAt,e.startAt)&&qp(t.endAt,e.endAt)}function lh(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function LC(t,e,n,s,r,i,a,c){return new Mc(t,e,n,s,r,i,a,c)}function G_(t){return new Mc(t)}function zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function FC(t){return me.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function UC(t){return t.collectionGroup!==null}function _a(t){const e=Pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new xt(qt.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new cc(i,s))})),n.has(qt.keyField().canonicalString())||e.Ie.push(new cc(qt.keyField(),s))}return e.Ie}function Es(t){const e=Pe(t);return e.Ee||(e.Ee=jC(e,_a(t))),e.Ee}function jC(t,e){if(t.limitType==="F")return Wp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new cc(r.field,i)}));const n=t.endAt?new lc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new lc(t.startAt.position,t.startAt.inclusive):null;return Wp(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function ch(t,e,n){return new Mc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return sf(Es(t),Es(e))&&t.limitType===e.limitType}function Q_(t){return`${nf(Es(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>z_(r))).join(", ")}]`),xc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>wo(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>wo(r))).join(",")),`Target(${s})`})(Es(t))}; limitType=${t.limitType})`}function Fc(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):me.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of _a(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,u){const d=Hp(a,c,u);return a.inclusive?d<=0:d<0})(s.startAt,_a(s),r)||s.endAt&&!(function(a,c,u){const d=Hp(a,c,u);return a.inclusive?d>=0:d>0})(s.endAt,_a(s),r))})(t,e)}function $C(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function J_(t){return(e,n)=>{let s=!1;for(const r of _a(t)){const i=BC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function BC(t,e,n){const s=t.field.isKeyField()?me.comparator(e.key,n.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?vo(u,d):ye(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return N_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new gt(me.comparator);function rr(){return HC}const Y_=new gt(me.comparator);function ia(...t){let e=Y_;for(const n of t)e=e.insert(n.key,n);return e}function X_(t){let e=Y_;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function gi(){return ya()}function Z_(){return ya()}function ya(){return new Si((t=>t.toString()),((t,e)=>t.isEqual(e)))}const qC=new gt(me.comparator),WC=new xt(me.comparator);function Fe(...t){let e=WC;for(const n of t)e=e.add(n);return e}const zC=new xt(Le);function KC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function ey(t){return{integerValue:""+t}}function GC(t,e){return yC(e)?ey(e):rf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this._=void 0}}function QC(t,e,n){return t instanceof Da?(function(r,i){const a={fields:{[M_]:{stringValue:V_},[F_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ef(i)&&(i=Vc(i)),i&&(a.fields[L_]=i),{mapValue:a}})(n,e):t instanceof Oa?ny(t,e):t instanceof Na?sy(t,e):(function(r,i){const a=ty(r,i),c=Kp(a)+Kp(r.Ae);return oh(a)&&oh(r.Ae)?ey(c):rf(r.serializer,c)})(t,e)}function JC(t,e,n){return t instanceof Oa?ny(t,e):t instanceof Na?sy(t,e):n}function ty(t,e){return t instanceof uc?(function(s){return oh(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Da extends Uc{}class Oa extends Uc{constructor(e){super(),this.elements=e}}function ny(t,e){const n=ry(e);for(const s of t.elements)n.some((r=>Cs(r,s)))||n.push(s);return{arrayValue:{values:n}}}class Na extends Uc{constructor(e){super(),this.elements=e}}function sy(t,e){let n=ry(e);for(const s of t.elements)n=n.filter((r=>!Cs(r,s)));return{arrayValue:{values:n}}}class uc extends Uc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Kp(t){return bt(t.integerValue||t.doubleValue)}function ry(t){return tf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.field=e,this.transform=n}}function XC(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Oa&&r instanceof Oa||s instanceof Na&&r instanceof Na?_o(s.elements,r.elements,Cs):s instanceof uc&&r instanceof uc?Cs(s.Ae,r.Ae):s instanceof Da&&r instanceof Da})(t.transform,e.transform)}class ZC{constructor(e,n){this.version=e,this.transformResults=n}}class Ts{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ts}static exists(e){return new Ts(void 0,e)}static updateTime(e){return new Ts(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function iy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new of(t.key,Ts.none()):new Ka(t.key,t.data,Ts.none());{const n=t.data,s=Nn.empty();let r=new xt(qt.comparator);for(let i of e.fields)if(!r.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Ci(t.key,s,new Kn(r.toArray()),Ts.none())}}function e0(t,e,n){t instanceof Ka?(function(r,i,a){const c=r.value.clone(),u=Qp(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Ci?(function(r,i,a){if(!jl(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Qp(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(oy(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(t,e,n):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function va(t,e,n,s){return t instanceof Ka?(function(i,a,c,u){if(!jl(i.precondition,a))return c;const d=i.value.clone(),g=Jp(i.fieldTransforms,u,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(t,e,n,s):t instanceof Ci?(function(i,a,c,u){if(!jl(i.precondition,a))return c;const d=Jp(i.fieldTransforms,u,a),g=a.data;return g.setAll(oy(i)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((y=>y.field)))})(t,e,n,s):(function(i,a,c){return jl(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function t0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ty(s.transform,r||null);i!=null&&(n===null&&(n=Nn.empty()),n.set(s.field,i))}return n||null}function Gp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&_o(s,r,((i,a)=>XC(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ka extends jc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ci extends jc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function oy(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Qp(t,e,n){const s=new Map;Qe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let r=0;r<n.length;r++){const i=t[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,JC(a,c,n[r]))}return s}function Jp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,a=n.data.field(r.field);s.set(r.field,QC(i,a,e))}return s}class of extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n0 extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&e0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=va(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=va(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Z_();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(r.key)?null:c;const u=iy(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(Ie.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Fe())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((n,s)=>Gp(n,s)))&&_o(this.baseMutations,e.baseMutations,((n,s)=>Gp(n,s)))}}class af{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Qe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return qC})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new af(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,He;function o0(t){switch(t){case W.OK:return ye(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function ay(t){if(t===void 0)return sr("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ct.OK:return W.OK;case Ct.CANCELLED:return W.CANCELLED;case Ct.UNKNOWN:return W.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return W.INTERNAL;case Ct.UNAVAILABLE:return W.UNAVAILABLE;case Ct.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ct.NOT_FOUND:return W.NOT_FOUND;case Ct.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ct.ABORTED:return W.ABORTED;case Ct.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ct.DATA_LOSS:return W.DATA_LOSS;default:return ye(39323,{code:t})}}(He=Ct||(Ct={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new Or([4294967295,4294967295],0);function Yp(t){const e=a0().encode(t),n=new T_;return n.update(e),new Uint8Array(n.digest())}function Xp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Or([n,s],0),new Or([r,i],0)]}class lf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new oa(`Invalid padding: ${n}`);if(s<0)throw new oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new oa(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new oa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Or.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(Or.fromNumber(s)));return r.compare(l0)===1&&(r=new Or([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Yp(e),[s,r]=Xp(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new lf(i,r,n);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const n=Yp(e),[s,r]=Xp(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ga(Ie.min(),r,new gt(Le),rr(),Fe())}}class Qa{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Qa(s,n,Fe(),Fe(),Fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class ly{constructor(e,n){this.targetId=e,this.Ce=n}}class cy{constructor(e,n,s=Wt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Zp{constructor(){this.ve=0,this.Fe=eg(),this.Me=Wt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Fe(),n=Fe(),s=Fe();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ye(38017,{changeType:i})}})),new Qa(this.Me,this.xe,e,n,s)}Ke(){this.Oe=!1,this.Fe=eg()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class c0{constructor(e){this.Ge=e,this.ze=new Map,this.je=rr(),this.Je=Sl(),this.He=Sl(),this.Ze=new gt(Le)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,r)=>{this.rt(r)&&n(r)}))}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(lh(i))if(s===0){const a=new me(i.path);this.et(n,a,nn.newNoDocument(a,Ie.min()))}else Qe(s===1,20013,{expectedCount:s});else{const a=this._t(n);if(a!==s){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let a,c;try{a=Fr(s).toUint8Array()}catch(u){if(u instanceof x_)return bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new lf(a,r,i)}catch(u){return bi(u instanceof oa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),r++)})),r}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&lh(c.target)){const u=new me(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,nn.newNoDocument(u,e))}i.Be&&(n.set(a,i.ke()),i.Ke())}}));let s=Fe();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Ga(e,n,this.Ze,this.je,s);return this.je=rr(),this.Je=Sl(),this.He=Sl(),this.Ze=new gt(Le),r}Ye(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.qe(n,1):r.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Zp,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new xt(Le),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new xt(Le),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Sl(){return new gt(me.comparator)}function eg(){return new gt(me.comparator)}const u0={asc:"ASCENDING",desc:"DESCENDING"},h0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f0={and:"AND",or:"OR"};class d0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uh(t,e){return t.useProto3Json||xc(e)?e:{value:e}}function hc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function p0(t,e){return hc(t,e.toTimestamp())}function bs(t){return Qe(!!t,49232),Ie.fromTimestamp((function(n){const s=Lr(n);return new dt(s.seconds,s.nanos)})(t))}function cf(t,e){return hh(t,e).canonicalString()}function hh(t,e){const n=(function(r){return new ft(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function hy(t){const e=ft.fromString(t);return Qe(my(e),10190,{key:e.toString()}),e}function fh(t,e){return cf(t.databaseId,e.path)}function xu(t,e){const n=hy(e);if(n.get(1)!==t.databaseId.projectId)throw new fe(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fe(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new me(dy(n))}function fy(t,e){return cf(t.databaseId,e)}function g0(t){const e=hy(t);return e.length===4?ft.emptyPath():dy(e)}function dh(t){return new ft(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dy(t){return Qe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tg(t,e,n){return{name:fh(t,e),fields:n.value.mapValue.fields}}function m0(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ye(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(d,g){return d.useProto3Json?(Qe(g===void 0||typeof g=="string",58123),Wt.fromBase64String(g||"")):(Qe(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),Wt.fromUint8Array(g||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const g=d.code===void 0?W.UNKNOWN:ay(d.code);return new fe(g,d.message||"")})(a);n=new cy(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=xu(t,s.document.name),i=bs(s.document.updateTime),a=s.document.createTime?bs(s.document.createTime):Ie.min(),c=new Nn({mapValue:{fields:s.document.fields}}),u=nn.newFoundDocument(r,i,a,c),d=s.targetIds||[],g=s.removedTargetIds||[];n=new $l(d,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=xu(t,s.document),i=s.readTime?bs(s.readTime):Ie.min(),a=nn.newNoDocument(r,i),c=s.removedTargetIds||[];n=new $l([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=xu(t,s.document),i=s.removedTargetIds||[];n=new $l([],i,r,null)}else{if(!("filter"in e))return ye(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new i0(r,i),c=s.targetId;n=new ly(c,a)}}return n}function _0(t,e){let n;if(e instanceof Ka)n={update:tg(t,e.key,e.value)};else if(e instanceof of)n={delete:fh(t,e.key)};else if(e instanceof Ci)n={update:tg(t,e.key,e.data),updateMask:S0(e.fieldMask)};else{if(!(e instanceof n0))return ye(16599,{dt:e.type});n={verify:fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof Da)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Oa)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Na)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof uc)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ye(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:p0(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)})(t,e.precondition)),n}function y0(t,e){return t&&t.length>0?(Qe(e!==void 0,14353),t.map((n=>(function(r,i){let a=r.updateTime?bs(r.updateTime):bs(i);return a.isEqual(Ie.min())&&(a=bs(i)),new ZC(a,r.transformResults||[])})(n,e)))):[]}function v0(t,e){return{documents:[fy(t,e.path)]}}function w0(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=fy(t,r);const i=(function(d){if(d.length!==0)return gy(Rs.create(d,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((g=>(function(A){return{field:Yi(A.field),direction:b0(A.dir)}})(g)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=uh(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:n,parent:r}}function E0(t){let e=g0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Qe(s===1,65062);const g=n.from[0];g.allDescendants?r=g.collectionId:e=e.child(g.collectionId)}let i=[];n.where&&(i=(function(y){const A=py(y);return A instanceof Rs&&q_(A)?A.getFilters():[A]})(n.where));let a=[];n.orderBy&&(a=(function(y){return y.map((A=>(function($){return new cc(Xi($.field),(function(Q){switch(Q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(A)))})(n.orderBy));let c=null;n.limit&&(c=(function(y){let A;return A=typeof y=="object"?y.value:y,xc(A)?null:A})(n.limit));let u=null;n.startAt&&(u=(function(y){const A=!!y.before,O=y.values||[];return new lc(O,A)})(n.startAt));let d=null;return n.endAt&&(d=(function(y){const A=!y.before,O=y.values||[];return new lc(O,A)})(n.endAt)),LC(e,r,a,i,c,"F",u,d)}function T0(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function py(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Xi(n.unaryFilter.field);return Nt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Xi(n.unaryFilter.field);return Nt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xi(n.unaryFilter.field);return Nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xi(n.unaryFilter.field);return Nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Nt.create(Xi(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Rs.create(n.compositeFilter.filters.map((s=>py(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(n.compositeFilter.op))})(t):ye(30097,{filter:t})}function b0(t){return u0[t]}function I0(t){return h0[t]}function A0(t){return f0[t]}function Yi(t){return{fieldPath:t.canonicalString()}}function Xi(t){return qt.fromServerFormat(t.fieldPath)}function gy(t){return t instanceof Nt?(function(n){if(n.op==="=="){if(Bp(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NAN"}};if($p(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bp(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NAN"}};if($p(n.value))return{unaryFilter:{field:Yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(n.field),op:I0(n.op),value:n.value}}})(t):t instanceof Rs?(function(n){const s=n.getFilters().map((r=>gy(r)));return s.length===1?s[0]:{compositeFilter:{op:A0(n.op),filters:s}}})(t):ye(54877,{filter:t})}function S0(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function my(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function _y(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,s,r,i=Ie.min(),a=Ie.min(),c=Wt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.yt=e}}function R0(t){const e=E0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ch(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.bn=new k0}addToCollectionParentIndex(e,n){return this.bn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Mr.min())}updateCollectionGroup(e,n,s){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class k0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new xt(ft.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new xt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yy=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(yy,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new jr(0)}static ar(){return new jr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="LruGarbageCollector",D0=1048576;function rg([t,e],[n,s]){const r=Le(t,n);return r===0?Le(e,s):r}class O0{constructor(e){this.Pr=e,this.buffer=new xt(rg),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();rg(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class N0{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ie(sg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Co(n)?ie(sg,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Ar(3e5)}))}}class x0{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return U.resolve(Nc.ce);const s=new O0(n);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(ng)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ng):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,r,i,a,c,u,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),r=this.params.maximumSequenceNumbersToCollect):r=y,a=Date.now(),this.nthSequenceNumber(e,r)))).next((y=>(s=y,c=Date.now(),this.removeTargets(e,s,n)))).next((y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((y=>(d=Date.now(),Qi()<=Ue.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-g}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:y}))))}}function V0(t,e){return new x0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.changes=new Si((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?U.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&va(s.mutation,r,Kn.empty(),dt.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Fe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Fe()){const r=gi();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let a=ia();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const s=gi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Fe())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,s,r){let i=rr();const a=ya(),c=(function(){return ya()})();return n.forEach(((u,d)=>{const g=s.get(d.key);r.has(d.key)&&(g===void 0||g.mutation instanceof Ci)?i=i.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),va(g.mutation,d,g.mutation.getFieldMask(),dt.now())):a.set(d.key,Kn.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,g)=>a.set(d,g))),n.forEach(((d,g)=>c.set(d,new L0(g,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,n){const s=ya();let r=new gt(((a,c)=>a-c)),i=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=n.get(u);if(d===null)return;let g=s.get(u)||Kn.empty();g=c.applyToLocalView(d,g),s.set(u,g);const y=(r.get(c.batchId)||Fe()).add(u);r=r.insert(c.batchId,y)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,g=u.value,y=Z_();g.forEach((A=>{if(!i.has(A)){const O=iy(n.get(A),s.get(A));O!==null&&y.set(A,O),i=i.add(A)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return U.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return FC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):U.resolve(gi());let c=Ca,u=i;return a.next((d=>U.forEach(d,((g,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(g)?U.resolve():this.remoteDocumentCache.getEntry(e,g).next((A=>{u=u.insert(g,A)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,Fe()))).next((g=>({batchId:c,changes:X_(g)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((s=>{let r=ia();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let a=ia();return this.indexManager.getCollectionParents(e,i).next((c=>U.forEach(c,(u=>{const d=(function(y,A){return new Mc(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((g=>{g.forEach(((y,A)=>{a=a.insert(y,A)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((a=>{i.forEach(((u,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,nn.newInvalidDocument(g)))}));let c=ia();return a.forEach(((u,d)=>{const g=i.get(u);g!==void 0&&va(g.mutation,d,Kn.empty(),dt.now()),Fc(n,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return U.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:bs(r.createTime)}})(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(r){return{name:r.name,query:R0(r.bundledQuery),readTime:bs(r.readTime)}})(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.overlays=new gt(me.comparator),this.Lr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const s=gi();return U.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.St(e,n,i)})),U.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),U.resolve()}getOverlaysForCollection(e,n,s){const r=gi(),i=n.length+1,a=new me(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return U.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new gt(((d,g)=>d-g));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>s){let g=i.get(d.largestBatchId);g===null&&(g=gi(),i=i.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=gi(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,g)=>c.set(d,g))),!(c.size()>=r)););return U.resolve(c)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new r0(n,s));let i=this.Lr.get(n);i===void 0&&(i=Fe(),this.Lr.set(n,i)),this.Lr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.kr=new xt(Ft.Kr),this.qr=new xt(Ft.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new Ft(e,n);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new Ft(e,n))}Qr(e,n){e.forEach((s=>this.removeReference(s,n)))}Gr(e){const n=new me(new ft([])),s=new Ft(n,e),r=new Ft(n,e+1),i=[];return this.qr.forEachInRange([s,r],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new me(new ft([])),s=new Ft(n,e),r=new Ft(n,e+1);let i=Fe();return this.qr.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ft(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ft{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return me.comparator(e.key,n.key)||Le(e.Jr,n.Jr)}static Ur(e,n){return Le(e.Jr,n.Jr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new xt(Ft.Kr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new s0(i,n,s,r);this.mutationQueue.push(a);for(const c of r)this.Hr=this.Hr.add(new Ft(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(a)}lookupMutationBatch(e,n){return U.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Xr(s),i=r<0?0:r;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Zh:this.Yn-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ft(n,0),r=new Ft(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],(a=>{const c=this.Zr(a.Jr);i.push(c)})),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xt(Le);return n.forEach((r=>{const i=new Ft(r,0),a=new Ft(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],(c=>{s=s.add(c.Jr)}))})),U.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;me.isDocumentKey(i)||(i=i.child(""));const a=new Ft(new me(i),0);let c=new xt(Le);return this.Hr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(u.Jr)),!0)}),a),U.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){Qe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return U.forEach(n.mutations,(r=>{const i=new Ft(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,n){const s=new Ft(n,0),r=this.Hr.firstAfterOrEqual(s);return U.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.ti=e,this.docs=(function(){return new gt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return U.resolve(s?s.document.mutableCopy():nn.newInvalidDocument(n))}getEntries(e,n){let s=rr();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():nn.newInvalidDocument(r))})),U.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=rr();const a=n.path,c=new me(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||pC(dC(g),s)<=0||(r.has(g.key)||Fc(n,g))&&(i=i.insert(g.key,g.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ye(9500)}ni(e,n){return U.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new q0(this)}getSize(e){return U.resolve(this.size)}}class q0 extends M0{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),U.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.persistence=e,this.ri=new Si((n=>nf(n)),sf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.ii=0,this.si=new uf,this.targetCount=0,this.oi=jr._r()}forEachTarget(e,n){return this.ri.forEach(((s,r)=>n(r))),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),U.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new jr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.lr(n),U.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),U.waitFor(i).next((()=>r))}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return U.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),U.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return U.resolve(s)}containsKey(e,n){return U.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this._i={},this.overlays={},this.ai=new Nc(0),this.ui=!1,this.ui=!0,this.ci=new $0,this.referenceDelegate=e(this),this.li=new W0(this),this.indexManager=new P0,this.remoteDocumentCache=(function(r){return new H0(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new C0(n),this.Pi=new U0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new j0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new B0(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const r=new z0(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ii(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,n){return U.or(Object.values(this._i).map((s=>()=>s.containsKey(e,n))))}}class z0 extends mC{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new uf,this.Ai=null}static Vi(e){return new hf(e)}get di(){if(this.Ai)return this.Ai;throw ye(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),U.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.di,(s=>{const r=me.fromPath(s);return this.mi(e,r).next((i=>{i||n.removeEntry(r,Ie.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class fc{constructor(e,n){this.persistence=e,this.fi=new Si((s=>vC(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=V0(this,n)}static Vi(e,n){return new fc(e,n)}Ti(){}Ii(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}pr(e){let n=0;return this.mr(e,(s=>{n++})).next((()=>n))}mr(e,n){return U.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?U.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,n).next((c=>{c||(s++,i.removeEntry(a,Ie.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),U.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),U.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Fl(e.data.value)),n}wr(e,n,s){return U.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.fi.get(n);return U.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ts=s,this.Is=r}static Es(e,n){let s=Fe(),r=Fe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ff(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Vb()?8:_C(on())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.gs(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(e,n,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new K0;return this.ys(e,n,a).next((c=>{if(i.result=c,this.As)return this.ws(e,n,a,c.size)}))})).next((()=>i.result))}ws(e,n,s,r){return s.documentReadCount<this.Vs?(Qi()<=Ue.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),U.resolve()):(Qi()<=Ue.DEBUG&&ie("QueryEngine","Query:",Ji(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Qi()<=Ue.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Es(n))):U.resolve())}gs(e,n){if(zp(n))return U.resolve(null);let s=Es(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=ch(n,null,"F"),s=Es(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=Fe(...i);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.Ss(n,c);return this.bs(n,d,a,u.readTime)?this.gs(e,ch(n,null,"F")):this.Ds(e,d,n,u)}))))})))))}ps(e,n,s,r){return zp(n)||r.isEqual(Ie.min())?U.resolve(null):this.fs.getDocuments(e,s).next((i=>{const a=this.Ss(n,i);return this.bs(n,a,s,r)?U.resolve(null):(Qi()<=Ue.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ji(n)),this.Ds(e,a,n,fC(r,Ca)).next((c=>c)))}))}Ss(e,n){let s=new xt(J_(e));return n.forEach(((r,i)=>{Fc(e,i)&&(s=s.add(i))})),s}bs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,n,s){return Qi()<=Ue.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.fs.getDocumentsMatchingQuery(e,n,Mr.min(),s)}Ds(e,n,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="LocalStore",Q0=3e8;class J0{constructor(e,n,s,r){this.persistence=e,this.Cs=n,this.serializer=r,this.vs=new gt(Le),this.Fs=new Si((i=>nf(i)),sf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function Y0(t,e,n,s){return new J0(t,e,n,s)}async function wy(t,e){const n=Pe(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Os(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let u=Fe();for(const d of r){a.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of i){c.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return n.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function X0(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,g){const y=d.batch,A=y.keys();let O=U.resolve();return A.forEach(($=>{O=O.next((()=>g.getEntry(u,$))).next((B=>{const Q=d.docVersions.get($);Qe(Q!==null,48541),B.version.compareTo(Q)<0&&(y.applyToRemoteDocument(B,d),B.isValidDocument()&&(B.setReadTime(d.commitVersion),g.addEntry(B)))}))})),O.next((()=>c.mutationQueue.removeMutationBatch(u,y)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let u=Fe();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function Ey(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function Z0(t,e){const n=Pe(t),s=e.snapshotVersion;let r=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});r=n.vs;const c=[];e.targetChanges.forEach(((g,y)=>{const A=r.get(y);if(!A)return;c.push(n.li.removeMatchingKeys(i,g.removedDocuments,y).next((()=>n.li.addMatchingKeys(i,g.addedDocuments,y))));let O=A.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?O=O.withResumeToken(Wt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):g.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(g.resumeToken,s)),r=r.insert(y,O),(function(B,Q,se){return B.resumeToken.approximateByteSize()===0||Q.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Q0?!0:se.addedDocuments.size+se.modifiedDocuments.size+se.removedDocuments.size>0})(A,O,g)&&c.push(n.li.updateTargetData(i,O))}));let u=rr(),d=Fe();if(e.documentUpdates.forEach((g=>{e.resolvedLimboDocuments.has(g)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,g))})),c.push(eR(i,a,e.documentUpdates).next((g=>{u=g.Bs,d=g.Ls}))),!s.isEqual(Ie.min())){const g=n.li.getLastRemoteSnapshotVersion(i).next((y=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(g)}return U.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(n.vs=r,i)))}function eR(t,e,n){let s=Fe(),r=Fe();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let a=rr();return n.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(Ie.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):ie(df,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:a,Ls:r}}))}function tR(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Zh),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function nR(t,e){const n=Pe(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.li.getTargetData(s,e).next((i=>i?(r=i,U.resolve(r)):n.li.allocateTargetId(s).next((a=>(r=new Js(e,a,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(e,s.targetId)),s}))}async function ph(t,e,n){const s=Pe(t),r=s.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!Co(a))throw a;ie(df,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function ig(t,e,n){const s=Pe(t);let r=Ie.min(),i=Fe();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,g){const y=Pe(u),A=y.Fs.get(g);return A!==void 0?U.resolve(y.vs.get(A)):y.li.getTargetData(d,g)})(s,a,Es(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,n?r:Ie.min(),n?i:Fe()))).next((c=>(sR(s,$C(e),c),{documents:c,ks:i})))))}function sR(t,e,n){let s=t.Ms.get(e)||Ie.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.Ms.set(e,s)}class og{constructor(){this.activeTargetIds=KC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rR{constructor(){this.vo=new og,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new og,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="ConnectivityMonitor";class lg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ie(ag,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ie(ag,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl=null;function gh(){return Cl===null?Cl=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cl++,"0x"+Cl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="RestConnection",oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class aR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===oc?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,n,s,r,i){const a=gh(),c=this.Qo(e,n.toUriEncodedString());ie(Vu,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,i);const{host:d}=new URL(c),g=Ba(d);return this.zo(e,c,u,s,g).then((y=>(ie(Vu,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw bi(Vu,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",s),y}))}jo(e,n,s,r,i,a){return this.Wo(e,n,s,r,i)}Go(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ao})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,n){const s=oR[e];let r=`${this.qo}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="WebChannelConnection",ta=(t,e,n)=>{t.listen(e,(s=>{try{n(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class ao extends aR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ao.c_){const e=S_();ta(e,A_.STAT_EVENT,(n=>{n.stat===sh.PROXY?ie(Zt,"STAT_EVENT: detected buffering proxy"):n.stat===sh.NOPROXY&&ie(Zt,"STAT_EVENT: detected no buffering proxy")})),ao.c_=!0}}zo(e,n,s,r,i){const a=gh();return new Promise(((c,u)=>{const d=new b_;d.setWithCredentials(!0),d.listenOnce(I_.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ll.NO_ERROR:const y=d.getResponseJson();ie(Zt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case Ll.TIMEOUT:ie(Zt,`RPC '${e}' ${a} timed out`),u(new fe(W.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const A=d.getStatus();if(ie(Zt,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let O=d.getResponseJson();Array.isArray(O)&&(O=O[0]);const $=O==null?void 0:O.error;if($&&$.status&&$.message){const B=(function(se){const Y=se.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(Y)>=0?Y:W.UNKNOWN})($.status);u(new fe(B,$.message))}else u(new fe(W.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new fe(W.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{ie(Zt,`RPC '${e}' ${a} completed.`)}}));const g=JSON.stringify(r);ie(Zt,`RPC '${e}' ${a} sending request:`,r),d.send(n,"POST",g,s,15)}))}T_(e,n,s){const r=gh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=i.join("");ie(Zt,`Creating RPC '${e}' stream ${r}: ${d}`,c);const g=a.createWebChannel(d,c);this.I_(g);let y=!1,A=!1;const O=new lR({Jo:$=>{A?ie(Zt,`Not sending because RPC '${e}' stream ${r} is closed:`,$):(y||(ie(Zt,`Opening RPC '${e}' stream ${r} transport.`),g.open(),y=!0),ie(Zt,`RPC '${e}' stream ${r} sending:`,$),g.send($))},Ho:()=>g.close()});return ta(g,ra.EventType.OPEN,(()=>{A||(ie(Zt,`RPC '${e}' stream ${r} transport opened.`),O.i_())})),ta(g,ra.EventType.CLOSE,(()=>{A||(A=!0,ie(Zt,`RPC '${e}' stream ${r} transport closed`),O.o_(),this.E_(g))})),ta(g,ra.EventType.ERROR,($=>{A||(A=!0,bi(Zt,`RPC '${e}' stream ${r} transport errored. Name:`,$.name,"Message:",$.message),O.o_(new fe(W.UNAVAILABLE,"The operation could not be completed")))})),ta(g,ra.EventType.MESSAGE,($=>{var B;if(!A){const Q=$.data[0];Qe(!!Q,16349);const se=Q,Y=(se==null?void 0:se.error)||((B=se[0])==null?void 0:B.error);if(Y){ie(Zt,`RPC '${e}' stream ${r} received error:`,Y);const ae=Y.status;let ue=(function(S){const w=Ct[S];if(w!==void 0)return ay(w)})(ae),De=Y.message;ae==="NOT_FOUND"&&De.includes("database")&&De.includes("does not exist")&&De.includes(this.databaseId.database)&&bi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ue===void 0&&(ue=W.INTERNAL,De="Unknown error status: "+ae+" with message "+Y.message),A=!0,O.o_(new fe(ue,De)),g.close()}else ie(Zt,`RPC '${e}' stream ${r} received:`,Q),O.__(Q)}})),ao.u_(),setTimeout((()=>{O.s_()}),0),O}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return C_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){return new ao(t)}function Mu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t){return new d0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ao.c_=!1;class Ty{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&ie("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="PersistentStream";class by{constructor(e,n,s,r,i,a,c,u){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ty(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===n&&this.G_(s,r)}),(s=>{e((()=>{const r=new fe(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(ie(cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uR extends by{constructor(e,n,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=m0(this.serializer,e),s=(function(i){if(!("targetChange"in i))return Ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Ie.min():a.readTime?bs(a.readTime):Ie.min()})(e);return this.listener.H_(n,s)}Z_(e){const n={};n.database=dh(this.serializer),n.addTarget=(function(i,a){let c;const u=a.target;if(c=lh(u)?{documents:v0(i,u)}:{query:w0(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=uy(i,a.resumeToken);const d=uh(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(Ie.min())>0){c.readTime=hc(i,a.snapshotVersion.toTimestamp());const d=uh(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=T0(this.serializer,e);s&&(n.labels=s),this.K_(n)}X_(e){const n={};n.database=dh(this.serializer),n.removeTarget=e,this.K_(n)}}class hR extends by{constructor(e,n,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=y0(e.writeResults,e.commitTime),s=bs(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=dh(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>_0(this.serializer,s)))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{}class dR extends fR{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new fe(W.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,hh(n,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new fe(W.UNKNOWN,i.toString())}))}jo(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,hh(n,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new fe(W.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function pR(t,e,n,s){return new dR(t,e,n,s)}class gR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sr(n),this.aa=!1):ie("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="RemoteStore";class mR{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new jr(1e3),this.Va=new jr(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((a=>{s.enqueueAndForget((async()=>{Ri(this)&&(ie(Ps,"Restarting streams for network reachability change."),await(async function(u){const d=Pe(u);d.da.add(4),await Ja(d),d.ga.set("Unknown"),d.da.delete(4),await Bc(d)})(this))}))})),this.ga=new gR(s,r)}}async function Bc(t){if(Ri(t))for(const e of t.ma)await e(!0)}async function Ja(t){for(const e of t.ma)await e(!1)}function mh(t,e){return t.Ea.get(e)||void 0}function Iy(t,e){const n=Pe(t),s=mh(n,e.targetId);if(s!==void 0&&n.Ia.has(s))return;const r=(function(c,u){const d=mh(c,u);d!==void 0&&c.Ra.delete(d);const g=(function(A,O){return O%2!=0?A.Va.next():A.Aa.next()})(c,u);return c.Ea.set(u,g),c.Ra.set(g,u),g})(n,e.targetId);ie(Ps,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new Js(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(r,i),_f(n)?mf(n):Ro(n).O_()&&gf(n,i)}function pf(t,e){const n=Pe(t),s=Ro(n),r=mh(n,e);ie(Ps,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),n.Ia.delete(r),n.Ea.delete(e),n.Ra.delete(r),s.O_()&&Ay(n,r),n.Ia.size===0&&(s.O_()?s.L_():Ri(n)&&n.ga.set("Unknown"))}function gf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void ie(Ps,"SDK target ID not found for remote ID: "+e.targetId);const s=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(s)}Ro(t).Z_(e)}function Ay(t,e){t.pa.$e(e),Ro(t).X_(e)}function mf(t){t.pa=new c0({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):Fe()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.ga.ua()}function _f(t){return Ri(t)&&!Ro(t).x_()&&t.Ia.size>0}function Ri(t){return Pe(t).da.size===0}function Sy(t){t.pa=void 0}async function _R(t){t.ga.set("Online")}async function yR(t){t.Ia.forEach(((e,n)=>{gf(t,e)}))}async function vR(t,e){Sy(t),_f(t)?(t.ga.ha(e),mf(t)):t.ga.set("Unknown")}async function wR(t,e,n){if(t.ga.set("Online"),e instanceof cy&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const c of i.targetIds){if(r.Ia.has(c)){const u=r.Ra.get(c);u!==void 0&&(await r.remoteSyncer.rejectListen(u,a),r.Ea.delete(u),r.Ra.delete(c)),r.Ia.delete(c)}r.pa.removeTarget(c)}})(t,e)}catch(s){ie(Ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await dc(t,s)}else if(e instanceof $l?t.pa.Xe(e):e instanceof ly?t.pa.st(e):t.pa.tt(e),!n.isEqual(Ie.min()))try{const s=await Ey(t.localStore);n.compareTo(s)>=0&&await(function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach(((d,g)=>{if(d.resumeToken.approximateByteSize()>0){const y=i.Ia.get(g);y&&i.Ia.set(g,y.withResumeToken(d.resumeToken,a))}})),c.targetMismatches.forEach(((d,g)=>{const y=i.Ia.get(d);if(!y)return;i.Ia.set(d,y.withResumeToken(Wt.EMPTY_BYTE_STRING,y.snapshotVersion)),Ay(i,d);const A=new Js(y.target,d,g,y.sequenceNumber);gf(i,A)}));const u=(function(g,y){const A=new Map;y.targetChanges.forEach((($,B)=>{const Q=g.Ra.get(B);Q!==void 0&&A.set(Q,$)}));let O=new gt(Le);return y.targetMismatches.forEach((($,B)=>{const Q=g.Ra.get($);Q!==void 0&&(O=O.insert(Q,B))})),new Ga(y.snapshotVersion,A,O,y.documentUpdates,y.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(u)})(t,n)}catch(s){ie(Ps,"Failed to raise snapshot:",s),await dc(t,s)}}async function dc(t,e,n){if(!Co(e))throw e;t.da.add(1),await Ja(t),t.ga.set("Offline"),n||(n=()=>Ey(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ie(Ps,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Bc(t)}))}function Cy(t,e){return e().catch((n=>dc(t,n,e)))}async function Hc(t){const e=Pe(t),n=$r(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zh;for(;ER(e);)try{const r=await tR(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,TR(e,r)}catch(r){await dc(e,r)}Ry(e)&&Py(e)}function ER(t){return Ri(t)&&t.Ta.length<10}function TR(t,e){t.Ta.push(e);const n=$r(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Ry(t){return Ri(t)&&!$r(t).x_()&&t.Ta.length>0}function Py(t){$r(t).start()}async function bR(t){$r(t).ra()}async function IR(t){const e=$r(t);for(const n of t.Ta)e.ea(n.mutations)}async function AR(t,e,n){const s=t.Ta.shift(),r=af.from(s,e,n);await Cy(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Hc(t)}async function SR(t,e){e&&$r(t).Y_&&await(async function(s,r){if((function(a){return o0(a)&&a!==W.ABORTED})(r.code)){const i=s.Ta.shift();$r(s).B_(),await Cy(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Hc(s)}})(t,e),Ry(t)&&Py(t)}async function ug(t,e){const n=Pe(t);n.asyncQueue.verifyOperationInProgress(),ie(Ps,"RemoteStore received new credentials");const s=Ri(n);n.da.add(3),await Ja(n),s&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Bc(n)}async function CR(t,e){const n=Pe(t);e?(n.da.delete(2),await Bc(n)):e||(n.da.add(2),await Ja(n),n.ga.set("Unknown"))}function Ro(t){return t.ya||(t.ya=(function(n,s,r){const i=Pe(n);return i.sa(),new uR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:_R.bind(null,t),Yo:yR.bind(null,t),t_:vR.bind(null,t),H_:wR.bind(null,t)}),t.ma.push((async e=>{e?(t.ya.B_(),_f(t)?mf(t):t.ga.set("Unknown")):(await t.ya.stop(),Sy(t))}))),t.ya}function $r(t){return t.wa||(t.wa=(function(n,s,r){const i=Pe(n);return i.sa(),new hR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bR.bind(null,t),t_:SR.bind(null,t),ta:IR.bind(null,t),na:AR.bind(null,t)}),t.ma.push((async e=>{e?(t.wa.B_(),await Hc(t)):(await t.wa.stop(),t.Ta.length>0&&(ie(Ps,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const a=Date.now()+s,c=new yf(e,n,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(t,e){if(sr("AsyncQueue",`${e}: ${t}`),Co(t))return new fe(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||me.comparator(n.key,s.key):(n,s)=>me.comparator(n.key,s.key),this.keyedMap=ia(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.Sa=new gt(me.comparator)}track(e){const n=e.doc.key,s=this.Sa.get(n);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(n):e.type===1&&s.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):ye(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Eo{constructor(e,n,s,r,i,a,c,u,d){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,s,r,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new Eo(e,n,lo.emptySet(n),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class PR{constructor(){this.queries=fg(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,s){const r=Pe(n),i=r.queries;r.queries=fg(),i.forEach(((a,c)=>{for(const u of c.va)u.onError(s)}))})(this,new fe(W.ABORTED,"Firestore shutting down"))}}function fg(){return new Si((t=>Q_(t)),Lc)}async function kR(t,e){const n=Pe(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Fa()&&e.Ma()&&(s=2):(i=new RR,s=e.Ma()?0:1);try{switch(s){case 0:i.Ca=await n.onListen(r,!0);break;case 1:i.Ca=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const c=vf(a,`Initialization of query '${Ji(e.query)}' failed`);return void e.onError(c)}n.queries.set(r,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&wf(n)}async function DR(t,e){const n=Pe(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?r=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function OR(t,e){const n=Pe(t);let s=!1;for(const r of e){const i=r.query,a=n.queries.get(i);if(a){for(const c of a.va)c.Na(r)&&(s=!0);a.Ca=r}}s&&wf(n)}function NR(t,e,n){const s=Pe(t),r=s.queries.get(e);if(r)for(const i of r.va)i.onError(n);s.queries.delete(e)}function wf(t){t.xa.forEach((e=>{e.next()}))}var _h,dg;(dg=_h||(_h={})).Ba="default",dg.Cache="cache";class xR{constructor(e,n,s){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const s=n!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==_h.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.key=e}}class Dy{constructor(e){this.key=e}}class VR{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=Fe(),this.mutatedKeys=Fe(),this.iu=J_(e),this.su=new lo(this.iu)}get ou(){return this.tu}_u(e,n){const s=n?n.au:new hg,r=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((g,y)=>{const A=r.get(g),O=Fc(this.query,y)?y:null,$=!!A&&this.mutatedKeys.has(A.key),B=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let Q=!1;A&&O?A.data.isEqual(O.data)?$!==B&&(s.track({type:3,doc:O}),Q=!0):this.uu(A,O)||(s.track({type:2,doc:O}),Q=!0,(u&&this.iu(O,u)>0||d&&this.iu(O,d)<0)&&(c=!0)):!A&&O?(s.track({type:0,doc:O}),Q=!0):A&&!O&&(s.track({type:1,doc:A}),Q=!0,(u||d)&&(c=!0)),Q&&(O?(a=a.add(O),i=B?i.add(g):i.delete(g)):(a=a.delete(g),i=i.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),i=i.delete(g.key),s.track({type:1,doc:g})}return{su:a,au:s,bs:c,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort(((g,y)=>(function(O,$){const B=Q=>{switch(Q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Vt:Q})}};return B(O)-B($)})(g.type,y.type)||this.iu(g.doc,y.doc))),this.cu(s),r=r??!1;const c=n&&!r?this.lu():[],u=this.ru.size===0&&this.current&&!r?1:0,d=u!==this.nu;return this.nu=u,a.length!==0||d?{snapshot:new Eo(this.query,e.su,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new hg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((n=>this.tu=this.tu.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.tu=this.tu.delete(n))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=Fe(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const n=[];return e.forEach((s=>{this.ru.has(s)||n.push(new Dy(s))})),this.ru.forEach((s=>{e.has(s)||n.push(new ky(s))})),n}Tu(e){this.tu=e.ks,this.ru=Fe();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Eo.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Ef="SyncEngine";class MR{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class LR{constructor(e){this.key=e,this.Eu=!1}}class FR{constructor(e,n,s,r,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Si((c=>Q_(c)),Lc),this.Vu=new Map,this.du=new Set,this.mu=new gt(me.comparator),this.fu=new Map,this.gu=new uf,this.pu={},this.yu=new Map,this.wu=jr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function UR(t,e,n=!0){const s=Ly(t);let r;const i=s.Au.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Iu()):r=await Oy(s,e,n,!0),r}async function jR(t,e){const n=Ly(t);await Oy(n,e,!0,!1)}async function Oy(t,e,n,s){const r=await nR(t.localStore,Es(e)),i=r.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return s&&(c=await $R(t,e,i,a==="current",r.resumeToken)),t.isPrimaryClient&&n&&Iy(t.remoteStore,r),c}async function $R(t,e,n,s,r){t.bu=(y,A,O)=>(async function(B,Q,se,Y){let ae=Q.view._u(se);ae.bs&&(ae=await ig(B.localStore,Q.query,!1).then((({documents:S})=>Q.view._u(S,ae))));const ue=Y&&Y.targetChanges.get(Q.targetId),De=Y&&Y.targetMismatches.get(Q.targetId)!=null,Je=Q.view.applyChanges(ae,B.isPrimaryClient,ue,De);return gg(B,Q.targetId,Je.hu),Je.snapshot})(t,y,A,O);const i=await ig(t.localStore,e,!0),a=new VR(e,i.ks),c=a._u(i.documents),u=Qa.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),d=a.applyChanges(c,t.isPrimaryClient,u);gg(t,n,d.hu);const g=new MR(e,n,a);return t.Au.set(e,g),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),d.snapshot}async function BR(t,e,n){const s=Pe(t),r=s.Au.get(e),i=s.Vu.get(r.targetId);if(i.length>1)return s.Vu.set(r.targetId,i.filter((a=>!Lc(a,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ph(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&pf(s.remoteStore,r.targetId),yh(s,r.targetId)})).catch(So)):(yh(s,r.targetId),await ph(s.localStore,r.targetId,!0))}async function HR(t,e){const n=Pe(t),s=n.Au.get(e),r=n.Vu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),pf(n.remoteStore,s.targetId))}async function qR(t,e,n){const s=YR(t);try{const r=await(function(a,c){const u=Pe(a),d=dt.now(),g=c.reduce(((O,$)=>O.add($.key)),Fe());let y,A;return u.persistence.runTransaction("Locally write mutations","readwrite",(O=>{let $=rr(),B=Fe();return u.xs.getEntries(O,g).next((Q=>{$=Q,$.forEach(((se,Y)=>{Y.isValidDocument()||(B=B.add(se))}))})).next((()=>u.localDocuments.getOverlayedDocuments(O,$))).next((Q=>{y=Q;const se=[];for(const Y of c){const ae=t0(Y,y.get(Y.key).overlayedDocument);ae!=null&&se.push(new Ci(Y.key,ae,$_(ae.value.mapValue),Ts.exists(!0)))}return u.mutationQueue.addMutationBatch(O,d,se,c)})).next((Q=>{A=Q;const se=Q.applyToLocalDocumentSet(y,B);return u.documentOverlayCache.saveOverlays(O,Q.batchId,se)}))})).then((()=>({batchId:A.batchId,changes:X_(y)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,u){let d=a.pu[a.currentUser.toKey()];d||(d=new gt(Le)),d=d.insert(c,u),a.pu[a.currentUser.toKey()]=d})(s,r.batchId,n),await Ya(s,r.changes),await Hc(s.remoteStore)}catch(r){const i=vf(r,"Failed to persist write");n.reject(i)}}async function Ny(t,e){const n=Pe(t);try{const s=await Z0(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=n.fu.get(i);a&&(Qe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Eu=!0:r.modifiedDocuments.size>0?Qe(a.Eu,14607):r.removedDocuments.size>0&&(Qe(a.Eu,42227),a.Eu=!1))})),await Ya(n,s,e)}catch(s){await So(s)}}function pg(t,e,n){const s=Pe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Au.forEach(((i,a)=>{const c=a.view.Oa(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const u=Pe(a);u.onlineState=c;let d=!1;u.queries.forEach(((g,y)=>{for(const A of y.va)A.Oa(c)&&(d=!0)})),d&&wf(u)})(s.eventManager,e),r.length&&s.Ru.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function WR(t,e,n){const s=Pe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.fu.get(e),i=r&&r.key;if(i){let a=new gt(me.comparator);a=a.insert(i,nn.newNoDocument(i,Ie.min()));const c=Fe().add(i),u=new Ga(Ie.min(),new Map,new gt(Le),a,c);await Ny(s,u),s.mu=s.mu.remove(i),s.fu.delete(e),Tf(s)}else await ph(s.localStore,e,!1).then((()=>yh(s,e,n))).catch(So)}async function zR(t,e){const n=Pe(t),s=e.batch.batchId;try{const r=await X0(n.localStore,e);Vy(n,s,null),xy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ya(n,r)}catch(r){await So(r)}}async function KR(t,e,n){const s=Pe(t);try{const r=await(function(a,c){const u=Pe(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let g;return u.mutationQueue.lookupMutationBatch(d,c).next((y=>(Qe(y!==null,37113),g=y.keys(),u.mutationQueue.removeMutationBatch(d,y)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,g,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g))).next((()=>u.localDocuments.getDocuments(d,g)))}))})(s.localStore,e);Vy(s,e,n),xy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ya(s,r)}catch(r){await So(r)}}function xy(t,e){(t.yu.get(e)||[]).forEach((n=>{n.resolve()})),t.yu.delete(e)}function Vy(t,e,n){const s=Pe(t);let r=s.pu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Vu.get(e))t.Au.delete(s),n&&t.Ru.Du(s,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach((s=>{t.gu.containsKey(s)||My(t,s)}))}function My(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(pf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Tf(t))}function gg(t,e,n){for(const s of n)s instanceof ky?(t.gu.addReference(s.key,e),GR(t,s)):s instanceof Dy?(ie(Ef,"Document no longer in limbo: "+s.key),t.gu.removeReference(s.key,e),t.gu.containsKey(s.key)||My(t,s.key)):ye(19791,{Cu:s})}function GR(t,e){const n=e.key,s=n.path.canonicalString();t.mu.get(n)||t.du.has(s)||(ie(Ef,"New document in limbo: "+n),t.du.add(s),Tf(t))}function Tf(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new me(ft.fromString(e)),s=t.wu.next();t.fu.set(s,new LR(n)),t.mu=t.mu.insert(n,s),Iy(t.remoteStore,new Js(Es(G_(n.path)),s,"TargetPurposeLimboResolution",Nc.ce))}}async function Ya(t,e,n){const s=Pe(t),r=[],i=[],a=[];s.Au.isEmpty()||(s.Au.forEach(((c,u)=>{a.push(s.bu(u,e,n).then((d=>{var g;if((d||n)&&s.isPrimaryClient){const y=d?!d.fromCache:(g=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:g.current;s.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){r.push(d);const y=ff.Es(u.targetId,d);i.push(y)}})))})),await Promise.all(a),s.Ru.H_(r),await(async function(u,d){const g=Pe(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>U.forEach(d,(A=>U.forEach(A.Ts,(O=>g.persistence.referenceDelegate.addReference(y,A.targetId,O))).next((()=>U.forEach(A.Is,(O=>g.persistence.referenceDelegate.removeReference(y,A.targetId,O)))))))))}catch(y){if(!Co(y))throw y;ie(df,"Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const O=g.vs.get(A),$=O.snapshotVersion,B=O.withLastLimboFreeSnapshotVersion($);g.vs=g.vs.insert(A,B)}}})(s.localStore,i))}async function QR(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){ie(Ef,"User change. New user:",e.toKey());const s=await wy(n.localStore,e);n.currentUser=e,(function(i,a){i.yu.forEach((c=>{c.forEach((u=>{u.reject(new fe(W.CANCELLED,a))}))})),i.yu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ya(n,s.Ns)}}function JR(t,e){const n=Pe(t),s=n.fu.get(e);if(s&&s.Eu)return Fe().add(s.key);{let r=Fe();const i=n.Vu.get(e);if(!i)return r;for(const a of i){const c=n.Au.get(a);r=r.unionWith(c.view.ou)}return r}}function Ly(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WR.bind(null,e),e.Ru.H_=OR.bind(null,e.eventManager),e.Ru.Du=NR.bind(null,e.eventManager),e}function YR(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KR.bind(null,e),e}class pc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$c(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return Y0(this.persistence,new G0,e.initialUser,this.serializer)}xu(e){return new vy(hf.Vi,this.serializer)}Mu(e){return new rR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pc.provider={build:()=>new pc};class XR extends pc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){Qe(this.persistence.referenceDelegate instanceof fc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new N0(s,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new vy((s=>fc.Vi(s,n)),this.serializer)}}class vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=QR.bind(null,this.syncEngine),await CR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new PR})()}createDatastore(e){const n=$c(e.databaseInfo.databaseId),s=cR(e.databaseInfo);return pR(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,a,c){return new mR(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>pg(this.syncEngine,n,0)),(function(){return lg.v()?new lg:new iR})())}createSyncEngine(e,n){return(function(r,i,a,c,u,d,g){const y=new FR(r,i,a,c,u,d);return g&&(y.Su=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(r){const i=Pe(r);ie(Ps,"RemoteStore shutting down."),i.da.add(5),await Ja(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}vh.provider={build:()=>new vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirestoreClient";class eP{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=r,this.user=en.UNAUTHENTICATED,this.clientId=Yh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{ie(Br,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(ie(Br,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=vf(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Lu(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await wy(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function mg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tP(t);ie(Br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>ug(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>ug(e.remoteStore,r))),t._onlineComponents=e}async function tP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Br,"Using user provided OfflineComponentProvider");try{await Lu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===W.FAILED_PRECONDITION||r.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;bi("Error using user provided cache. Falling back to memory cache: "+n),await Lu(t,new pc)}}else ie(Br,"Using default OfflineComponentProvider"),await Lu(t,new XR(void 0));return t._offlineComponents}async function Fy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Br,"Using user provided OnlineComponentProvider"),await mg(t,t._uninitializedComponentsProvider._online)):(ie(Br,"Using default OnlineComponentProvider"),await mg(t,new vh))),t._onlineComponents}function nP(t){return Fy(t).then((e=>e.syncEngine))}async function sP(t){const e=await Fy(t),n=e.eventManager;return n.onListen=UR.bind(null,e.syncEngine),n.onUnlisten=BR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HR.bind(null,e.syncEngine),n}function rP(t,e,n={}){const s=new Nr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const g=new ZR({next:A=>{g.Ku(),a.enqueueAndForget((()=>DR(i,y))),A.fromCache&&u.source==="server"?d.reject(new fe(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new xR(c,g,{includeMetadataChanges:!0,Wa:!0});return kR(i,y)})(await sP(t),t.asyncQueue,e,n,s))),s.promise}function iP(t,e){const n=new Nr;return t.asyncQueue.enqueueAndForget((async()=>qR(await nP(t),e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="ComponentProvider",_g=new Map;function aP(t,e,n,s,r){return new TC(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Uy(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="firestore.googleapis.com",yg=!0;class vg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jy,this.ssl=yg}else this.host=e.host,this.ssl=e.ssl??yg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D0)throw new fe(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uy(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new tC;switch(s.type){case"firstParty":return new iC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=_g.get(n);s&&(ie(oP,"Removing Datastore"),_g.delete(n),s.terminate())})(this),Promise.resolve()}}function lP(t,e,n,s={}){var d;t=yo(t,qc);const r=Ba(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;r&&Um(`https://${c}`),i.host!==jy&&i.host!==c&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:r,emulatorOptions:s};if(!vi(u,a)&&(t._setSettings(u),s.mockUserToken)){let g,y;if(typeof s.mockUserToken=="string")g=s.mockUserToken,y=en.MOCK_USER;else{g=Rb(s.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new fe(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new en(A)}t._authCredentials=new nC(new P_(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wc(this.firestore,e,this._query)}}class Ut{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}toJSON(){return{type:Ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(za(n,Ut._jsonSchema))return new Ut(e,s||null,new me(ft.fromString(n.referencePath)))}}Ut._jsonSchemaVersion="firestore/documentReference/1.0",Ut._jsonSchema={type:Rt("string",Ut._jsonSchemaVersion),referencePath:Rt("string")};class xr extends Wc{constructor(e,n,s){super(e,n,G_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new me(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function cP(t,e,...n){if(t=In(t),k_("collection","path",e),t instanceof qc){const s=ft.fromString(e,...n);return Np(s),new xr(t,null,s)}{if(!(t instanceof Ut||t instanceof xr))throw new fe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ft.fromString(e,...n));return Np(s),new xr(t.firestore,null,s)}}function $y(t,e,...n){if(t=In(t),arguments.length===1&&(e=Yh.newId()),k_("doc","path",e),t instanceof qc){const s=ft.fromString(e,...n);return Op(s),new Ut(t,null,new me(s))}{if(!(t instanceof Ut||t instanceof xr))throw new fe(W.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ft.fromString(e,...n));return Op(s),new Ut(t.firestore,t instanceof xr?t.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="AsyncQueue";class Eg{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Ty(this,"async_queue_retry"),this.lc=()=>{const s=Mu();s&&ie(wg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const n=Mu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Mu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const n=new Nr;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Co(e))throw e;ie(wg,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const n=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,sr("INTERNAL UNHANDLED ERROR: ",Tg(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=n,n}enqueueAfterDelay(e,n,s){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const r=yf.createAndSchedule(this,e,n,s,(i=>this.Ec(i)));return this.oc.push(r),r}Pc(){this._c&&ye(47125,{Rc:Tg(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Tg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class zc extends qc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Eg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eg(e),this._firestoreClient=void 0,await e}}}function uP(t,e){const n=typeof t=="object"?t:Hm(),s=typeof t=="string"?t:oc,r=Uh(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Sb("firestore");i&&lP(r,...i)}return r}function By(t){if(t._terminated)throw new fe(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hP(t),t._firestoreClient}function hP(t){var s,r,i,a;const e=t._freezeSettings(),n=aP(t._databaseId,((s=t._app)==null?void 0:s.options.appId)||"",t._persistenceKey,(r=t._app)==null?void 0:r.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new eP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Wt.fromBase64String(e))}catch(n){throw new fe(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xn(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(za(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:Rt("string",xn._jsonSchemaVersion),bytes:Rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Is._jsonSchemaVersion}}static fromJSON(e){if(za(e,Is._jsonSchema))return new Is(e.latitude,e.longitude)}}Is._jsonSchemaVersion="firestore/geoPoint/1.0",Is._jsonSchema={type:Rt("string",Is._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(za(e,Yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Yn(e.vectorValues);throw new fe(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:Rt("string",Yn._jsonSchemaVersion),vectorValues:Rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=/^__.*__$/;class dP{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ka(e,this.data,n,this.fieldTransforms)}}function qy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{dataSource:t})}}class If{constructor(e,n,s,r,i,a){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new If({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const n=(r=this.path)==null?void 0:r.child(e),s=this.i({path:n,arrayElement:!1});return s.wc(e),s}Sc(e){var r;const n=(r=this.path)==null?void 0:r.child(e),s=this.i({path:n,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return gc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(qy(this.dataSource)&&fP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class pP{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||$c(e)}V(e,n,s,r=!1){return new If({dataSource:e,methodName:n,targetDoc:s,path:qt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gP(t){const e=t._freezeSettings(),n=$c(t._databaseId);return new pP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mP(t,e,n,s,r,i={}){const a=t.V(i.merge||i.mergeFields?2:0,e,n,r);Gy("Data must be an object, but it was:",a,s);const c=zy(s,a);let u,d;if(i.merge)u=new Kn(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const g=[];for(const y of i.mergeFields){const A=Sf(e,y,n);if(!a.contains(A))throw new fe(W.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);vP(g,A)||g.push(A)}u=new Kn(g),d=a.fieldTransforms.filter((y=>u.covers(y.field)))}else u=null,d=a.fieldTransforms;return new dP(new Nn(c),u,d)}class Af extends bf{_toFieldTransform(e){return new YC(e.path,new Da)}isEqual(e){return e instanceof Af}}function Wy(t,e){if(Ky(t=In(t)))return Gy("Unsupported field value:",e,t),zy(t,e);if(t instanceof bf)return(function(s,r){if(!qy(r.dataSource))throw r.Dc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let u=Wy(c,r.bc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=In(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return GC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=dt.fromDate(s);return{timestampValue:hc(r.serializer,i)}}if(s instanceof dt){const i=new dt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hc(r.serializer,i)}}if(s instanceof Is)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof xn)return{bytesValue:uy(r.serializer,s._byteString)};if(s instanceof Ut){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cf(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Yn)return(function(a,c){const u=a instanceof Yn?a.toArray():a;return{mapValue:{fields:{[U_]:{stringValue:j_},[ac]:{arrayValue:{values:u.map((g=>{if(typeof g!="number")throw c.Dc("VectorValues must only contain numeric values.");return rf(c.serializer,g)}))}}}}}})(s,r);if(_y(s))return s._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${Xh(s)}`)})(t,e)}function zy(t,e){const n={};return N_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(t,((s,r)=>{const i=Wy(r,e.yc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function Ky(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof Is||t instanceof xn||t instanceof Ut||t instanceof bf||t instanceof Yn||_y(t))}function Gy(t,e,n){if(!Ky(n)||!D_(n)){const s=Xh(n);throw s==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+s)}}function Sf(t,e,n){if((e=In(e))instanceof Hy)return e._internalPath;if(typeof e=="string")return yP(t,e);throw gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _P=new RegExp("[~\\*/\\[\\]]");function yP(t,e,n){if(e.search(_P)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hy(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gc(t,e,n,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new fe(W.INVALID_ARGUMENT,c+t+u)}function vP(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Ai(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){var s,r,i;const n=(i=(r=(s=e.fields)==null?void 0:s[ac].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>bt(a.doubleValue)));return new Yn(n)}convertGeoPoint(e){return new Is(bt(e.latitude),bt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ft.fromString(e);Qe(my(s),9688,{name:e});const r=new Pa(s.get(1),s.get(3)),i=new me(s.popFirst(5));return r.isEqual(n)||sr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP extends wP{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function TP(){return new Af("serverTimestamp")}const bg="@firebase/firestore",Ig="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Sf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bP extends Qy{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new fe(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function AP(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class Rl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class co extends Qy{constructor(e,n,s,r,i,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Sf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=co._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}co._jsonSchemaVersion="firestore/documentSnapshot/1.0",co._jsonSchema={type:Rt("string",co._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class Bl extends co{data(e={}){return super.data(e)}}class uo{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Rl(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new Bl(this._firestore,this._userDataWriter,s.key,s,new Rl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const u=new Bl(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Rl(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Bl(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Rl(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,g=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:SP(c.type),doc:u,oldIndex:d,newIndex:g}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:Rt("string",uo._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};function CP(t){t=yo(t,Wc);const e=yo(t.firestore,zc),n=By(e),s=new EP(e);return IP(t._query),rP(n,t._query).then((r=>new uo(e,s,t,r)))}function RP(t,e,n){t=yo(t,Ut);const s=yo(t.firestore,zc),r=AP(t.converter,e),i=gP(s);return Jy(s,[mP(i,"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ts.none())])}function PP(t){return Jy(yo(t.firestore,zc),[new of(t._key,Ts.none())])}function Jy(t,e){const n=By(t);return iP(n,e)}(function(e,n=!0){eC(bo),go(new wi("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new zc(new sC(s.getProvider("auth-internal")),new oC(a,s.getProvider("app-check-internal")),bC(a,r),a);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Dr(bg,Ig,e),Dr(bg,Ig,"esm2020")})();var kP="firebase",DP="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr(kP,DP,"app");const aa={apiKey:"AIzaSyCEDVal9uLQ_bJLij6M2PFA3MWuiA0uCfU",authDomain:"moviediscovery-75a03.firebaseapp.com",projectId:"moviediscovery-75a03",storageBucket:"moviediscovery-75a03.firebasestorage.app",messagingSenderId:"967866909978",appId:"1:967866909978:web:8025ff7d7ebf52011ed8a3",measurementId:"G-0HQ1X88MBB"},OP=!!(aa.apiKey&&aa.authDomain&&aa.projectId&&aa.appId),xa=OP?Bm(aa):null,Po=!!xa,Cf=xa?XS(xa):null,Rf=xa?uP(xa):null,NP=new Ks;function xP(t){return Po?jA(Cf,t):(t(null),()=>{})}async function VP(){if(!Po)throw new Error("Firebase is not configured");await aS(Cf,NP)}async function MP(){Po&&await $A(Cf)}async function LP(t){return!Po||!t?[]:(await CP(cP(Rf,"users",t,"watchlist"))).docs.map(n=>n.data())}async function FP(t,e){var n;!Po||!t||await RP($y(Rf,"users",t,"watchlist",String(e.id)),{id:e.id,title:e.title,overview:e.overview||"",poster_path:e.poster_path||"",backdrop_path:e.backdrop_path||"",posterUrl:e.posterUrl||"",backdropUrl:e.backdropUrl||"",release_date:e.release_date||"",vote_average:e.vote_average||0,genre_ids:e.genre_ids||((n=e.genres)==null?void 0:n.map(s=>s.id))||[],year:e.year||"",rating:e.rating||"NR",addedAt:TP()})}async function UP(t,e){!Po||!t||await PP($y(Rf,"users",t,"watchlist",String(e)))}const jP={class:"hero-overlay"},$P={class:"container py-4 d-flex align-items-center justify-content-between gap-3"},BP={class:"nav-actions"},HP={class:"badge text-bg-dark ms-1"},qP={key:1,class:"account-pill"},WP=["src","alt"],zP={class:"container hero-content"},KP={class:"hero-copy"},GP={class:"content-band"},QP={class:"container py-4 py-lg-5"},JP={class:"toolbar mb-4"},YP=["value"],XP={key:0,class:"alert alert-warning auth-alert",role:"alert"},ZP={class:"d-flex align-items-end justify-content-between gap-3 mb-3"},ek={class:"section-kicker mb-1"},tk={class:"h3 mb-0"},nk={key:1,class:"loading-state"},sk={key:2,class:"empty-state"},rk={key:3,class:"row g-4"},ik={key:4,class:"recommendations-section"},ok={key:0,class:"loading-state compact-state"},ak={key:1,class:"empty-state compact-state"},lk={key:2,class:"row g-4"},ck={key:0,class:"detail-page"},uk={class:"container py-5"},hk={class:"row g-4 align-items-start"},fk={class:"col-md-4 col-lg-3"},dk=["src","alt"],pk={class:"col-md-8 col-lg-9"},gk={class:"detail-meta mb-3"},mk={class:"badge text-bg-warning"},_k={key:0},yk={class:"display-5 fw-bold"},vk={class:"lead text-secondary"},wk={class:"d-flex flex-wrap gap-2 mb-4"},Ek={key:0,class:"cast-section mt-5"},Tk={class:"cast-grid"},bk=["onClick"],Ik=["src","alt"],Ak={key:1,class:"cast-photo cast-photo-placeholder"},Sk={class:"cast-copy"},Ck={key:1,class:"profile-page"},Rk={class:"container py-5"},Pk={key:0,class:"loading-state"},kk={key:1,class:"row g-4 align-items-start"},Dk={class:"col-md-4 col-lg-3"},Ok=["src","alt"],Nk={key:1,class:"profile-photo-placeholder"},xk={class:"col-md-8 col-lg-9"},Vk={class:"detail-meta mb-3"},Mk={key:0},Lk={key:1},Fk={class:"display-5 fw-bold"},Uk={class:"lead text-secondary profile-bio"},jk={class:"profile-credits mt-5"},$k={key:0,class:"empty-state compact-state"},Bk={key:1,class:"row g-4"},Hk={__name:"App",setup(t){const e=mn([]),n=mn([]),s=mn(JSON.parse(localStorage.getItem("movie-watchlist")||"[]")),r=mn(null),i=mn(""),a=mn(""),c=mn(null),u=mn(null),d=mn(!0),g=mn(""),y=mn(!1),A=mn([]),O=mn(!1),$=mn("home");let B=0,Q=0,se=null;const Y=Ir(()=>e.value[0]),ae=Ir(()=>$.value==="watchlist"?s.value:e.value),ue=Ir(()=>a.value?ae.value.filter(he=>{var et;return(he.genre_ids||((et=he.genres)==null?void 0:et.map(ee=>ee.id))||[]).includes(Number(a.value))}):ae.value),De=Ir(()=>$.value==="watchlist"?"Your Watchlist":i.value?`Results for "${i.value}"`:"Trending Movies"),Je=Ir(()=>c.value?c.value.genres?c.value.genres:n.value.filter(he=>{var te;return(te=c.value.genre_ids)==null?void 0:te.includes(he.id)}):[]),S=Ir(()=>{var he,te,et;return((et=(te=(he=c.value)==null?void 0:he.credits)==null?void 0:te.cast)==null?void 0:et.slice(0,12))||[]}),w=Ir(()=>{var te,et;const he=new Set;return(((et=(te=u.value)==null?void 0:te.movieCredits)==null?void 0:et.cast)||[]).filter(ee=>ee.posterUrl).filter(ee=>he.has(ee.id)?!1:(he.add(ee.id),!0)).sort((ee,jt)=>{const Ae=ee.release_date||"";return(jt.release_date||"").localeCompare(Ae)}).slice(0,18)});function b(){localStorage.setItem("movie-watchlist",JSON.stringify(s.value))}function C(he){return s.value.some(te=>te.id===he)}async function I(he){var te,et;if(g.value="",C(he.id)){s.value=s.value.filter(ee=>ee.id!==he.id);try{await UP((te=r.value)==null?void 0:te.uid,he.id)}catch(ee){g.value=ee.message||"Unable to update your account watchlist."}}else{s.value=[he,...s.value];try{await FP((et=r.value)==null?void 0:et.uid,he)}catch(ee){g.value=ee.message||"Unable to update your account watchlist."}}r.value||b(),qe()}async function D(){g.value="";try{await VP()}catch(he){g.value=he.message||"Unable to sign in."}}async function T(){g.value="";try{await MP()}catch(he){g.value=he.message||"Unable to sign out."}}async function mt(he){if(r.value=he,g.value="",!he){s.value=JSON.parse(localStorage.getItem("movie-watchlist")||"[]"),qe();return}try{const te=await LP(he.uid);s.value=te,qe()}catch(te){g.value=te.message||"Unable to load your account watchlist."}}function zt(he=""){return he.split(" ").filter(Boolean).slice(0,2).map(te=>te[0]).join("").toUpperCase()}async function _t(){d.value=!0,$.value="home",c.value=null,e.value=await pb(i.value),d.value=!1}async function qe(){const he=++B;if(!s.value.length){A.value=[],O.value=!1;return}O.value=!0;const te=await mb(s.value);he===B&&(A.value=te,O.value=!1)}async function xe(he){const te=await tp(he.id);c.value=te||he,u.value=null,window.history.pushState({},"",`#movie-${he.id}`)}async function Kt(he){await xe(he),u.value=null}async function Fn(he){const te=++Q;y.value=!0,u.value=null;const et=await _b(he.id);te===Q&&(u.value=et||{...he,biography:"No profile available.",movieCredits:{cast:[]}},y.value=!1)}function L(){u.value=null,y.value=!1}function Pt(){c.value=null,u.value=null,window.history.pushState({},"",window.location.pathname)}function es(){$.value="watchlist",c.value=null,u.value=null,window.history.pushState({},"",window.location.pathname)}function vn(){$.value="home",c.value=null,u.value=null,window.history.pushState({},"",window.location.pathname)}async function kt(){const he=window.location.hash.match(/^#movie-(\d+)$/);if(!he){c.value=null,u.value=null;return}const te=await tp(he[1]);c.value=te}return om(async()=>{se=xP(mt);const[he,te]=await Promise.all([Om(),gb()]);e.value=he,n.value=te,d.value=!1,qe(),await kt(),window.addEventListener("popstate",kt)}),Nh(()=>{se==null||se(),window.removeEventListener("popstate",kt)}),(he,te)=>{var et,ee,jt;return be(),Re("main",null,[oe("section",{class:"hero",style:Tc({backgroundImage:(et=Y.value)!=null&&et.backdropUrl?`url(${Y.value.backdropUrl})`:""})},[oe("div",jP,[oe("nav",$P,[oe("button",{class:"brand-button",type:"button",onClick:vn},"Movie Discovery"),oe("div",BP,[oe("button",{class:"btn btn-warning",type:"button",onClick:es},[te[4]||(te[4]=Cm(" Watchlist ",-1)),oe("span",HP,Ze(s.value.length),1)]),r.value?(be(),Re("div",qP,[r.value.photoURL?(be(),Re("img",{key:0,class:"account-avatar",src:r.value.photoURL,alt:r.value.displayName||r.value.email},null,8,WP)):Tn("",!0),oe("span",null,Ze(r.value.displayName||r.value.email),1),oe("button",{class:"btn btn-sm btn-outline-light",type:"button",onClick:T},"Sign out")])):(be(),Re("button",{key:0,class:"btn btn-outline-light",type:"button",onClick:D}," Sign in "))])]),oe("div",zP,[te[5]||(te[5]=oe("p",{class:"text-warning fw-semibold mb-2"},"Trending this week",-1)),oe("h1",null,Ze(((ee=Y.value)==null?void 0:ee.title)||"Discover your next movie"),1),oe("p",KP,Ze(((jt=Y.value)==null?void 0:jt.overview)||"Search, filter, rate, and save movies with TMDB data."),1),Y.value?(be(),Re("button",{key:0,class:"btn btn-light btn-lg",type:"button",onClick:te[0]||(te[0]=Ae=>xe(Y.value))}," View Details ")):Tn("",!0)])])],4),oe("section",GP,[oe("div",QP,[oe("div",JP,[oe("form",{class:"search-form",onSubmit:BT(_t,["prevent"])},[Id(oe("input",{"onUpdate:modelValue":te[1]||(te[1]=Ae=>i.value=Ae),class:"form-control form-control-lg",type:"search",placeholder:"Search movies","aria-label":"Search movies"},null,512),[[FT,i.value]]),te[6]||(te[6]=oe("button",{class:"btn btn-warning btn-lg",type:"submit"},"Search",-1))],32),Id(oe("select",{"onUpdate:modelValue":te[2]||(te[2]=Ae=>a.value=Ae),class:"form-select form-select-lg genre-select","aria-label":"Filter by genre"},[te[7]||(te[7]=oe("option",{value:""},"All genres",-1)),(be(!0),Re(fn,null,Ki(n.value,Ae=>(be(),Re("option",{key:Ae.id,value:Ae.id},Ze(Ae.name),9,YP))),128))],512),[[UT,a.value]])]),g.value?(be(),Re("div",XP,Ze(g.value),1)):Tn("",!0),oe("div",ZP,[oe("div",null,[oe("p",ek,Ze($.value==="watchlist"?"Saved picks":"Browse"),1),oe("h2",tk,Ze(De.value),1)]),$.value==="watchlist"?(be(),Re("button",{key:0,class:"btn btn-outline-light",type:"button",onClick:vn}," Back to Movies ")):Tn("",!0)]),d.value?(be(),Re("div",nk,"Loading movies...")):ue.value.length===0?(be(),Re("div",sk," No movies found. Try another search or genre. ")):(be(),Re("div",rk,[(be(!0),Re(fn,null,Ki(ue.value,Ae=>(be(),Re("div",{key:Ae.id,class:"col-6 col-md-4 col-lg-3 col-xl-2"},[Ln(Au,{movie:Ae,"is-watchlisted":C(Ae.id),onSelect:xe,onToggleWatchlist:I},null,8,["movie","is-watchlisted"])]))),128))])),s.value.length?(be(),Re("div",ik,[te[8]||(te[8]=oe("div",{class:"d-flex align-items-end justify-content-between gap-3 mb-3"},[oe("div",null,[oe("p",{class:"section-kicker mb-1"},"For your watchlist"),oe("h2",{class:"h3 mb-0"},"Recommended Movies")])],-1)),O.value?(be(),Re("div",ok,"Finding similar movies...")):A.value.length===0?(be(),Re("div",ak," Add a few more movies to improve recommendations. ")):(be(),Re("div",lk,[(be(!0),Re(fn,null,Ki(A.value,Ae=>(be(),Re("div",{key:Ae.id,class:"col-6 col-md-4 col-lg-3 col-xl-2"},[Ln(Au,{movie:Ae,"is-watchlisted":C(Ae.id),onSelect:xe,onToggleWatchlist:I},null,8,["movie","is-watchlisted"])]))),128))]))])):Tn("",!0)])]),c.value?(be(),Re("section",ck,[oe("div",uk,[oe("button",{class:"btn btn-outline-light mb-4",type:"button",onClick:Pt},"Back"),oe("div",hk,[oe("div",fk,[c.value.posterUrl?(be(),Re("img",{key:0,class:"detail-poster",src:c.value.posterUrl,alt:c.value.title},null,8,dk)):Tn("",!0)]),oe("div",pk,[oe("div",gk,[oe("span",mk,Ze(c.value.rating),1),oe("span",null,Ze(c.value.year),1),c.value.runtime?(be(),Re("span",_k,Ze(c.value.runtime)+" min",1)):Tn("",!0)]),oe("h2",yk,Ze(c.value.title),1),oe("p",vk,Ze(c.value.overview),1),oe("div",wk,[(be(!0),Re(fn,null,Ki(Je.value,Ae=>(be(),Re("span",{key:Ae.id,class:"badge rounded-pill text-bg-secondary"},Ze(Ae.name),1))),128))]),oe("button",{class:Ma(["btn btn-lg",C(c.value.id)?"btn-success":"btn-warning"]),type:"button",onClick:te[3]||(te[3]=Ae=>I(c.value))},Ze(C(c.value.id)?"Remove from Watchlist":"Add to Watchlist"),3),S.value.length?(be(),Re("div",Ek,[te[9]||(te[9]=oe("div",{class:"d-flex align-items-end justify-content-between gap-3 mb-3"},[oe("div",null,[oe("h3",{class:"mb-1"},"Cast")])],-1)),oe("div",Tk,[(be(!0),Re(fn,null,Ki(S.value,Ae=>(be(),Re("button",{key:Ae.cast_id||Ae.credit_id||Ae.id,class:"cast-card",type:"button",onClick:E=>Fn(Ae)},[Ae.profileUrl?(be(),Re("img",{key:0,class:"cast-photo",src:Ae.profileUrl,alt:Ae.name},null,8,Ik)):(be(),Re("div",Ak,Ze(zt(Ae.name)),1)),oe("div",Sk,[oe("h4",null,Ze(Ae.name),1),oe("p",null,Ze(Ae.character||"Cast member"),1)])],8,bk))),128))])])):Tn("",!0)])])])])):Tn("",!0),u.value||y.value?(be(),Re("section",Ck,[oe("div",Rk,[oe("button",{class:"btn btn-outline-light mb-4",type:"button",onClick:L},"Back to Movie"),y.value?(be(),Re("div",Pk,"Loading profile...")):u.value?(be(),Re("div",kk,[oe("div",Dk,[u.value.profileUrl?(be(),Re("img",{key:0,class:"detail-poster",src:u.value.profileUrl,alt:u.value.name},null,8,Ok)):(be(),Re("div",Nk,Ze(zt(u.value.name)),1))]),oe("div",xk,[oe("div",Vk,[oe("span",null,Ze(u.value.known_for_department||"Film"),1),u.value.birthday?(be(),Re("span",Mk,"Born "+Ze(u.value.birthday),1)):Tn("",!0),u.value.place_of_birth?(be(),Re("span",Lk,Ze(u.value.place_of_birth),1)):Tn("",!0)]),oe("h2",Fk,Ze(u.value.name),1),oe("p",Uk,Ze(u.value.biography||"No biography available."),1),oe("div",jk,[te[10]||(te[10]=oe("p",{class:"section-kicker mb-1"},"Filmography",-1)),te[11]||(te[11]=oe("h3",{class:"h4 mb-3"},"Movies",-1)),w.value.length===0?(be(),Re("div",$k," No movie credits found. ")):(be(),Re("div",Bk,[(be(!0),Re(fn,null,Ki(w.value,Ae=>(be(),Re("div",{key:Ae.credit_id||Ae.id,class:"col-6 col-md-4 col-lg-3 col-xl-2"},[Ln(Au,{movie:Ae,"is-watchlisted":C(Ae.id),onSelect:Kt,onToggleWatchlist:I},null,8,["movie","is-watchlisted"])]))),128))]))])])])):Tn("",!0)])])):Tn("",!0)])}}};WT(Hk).mount("#app");
