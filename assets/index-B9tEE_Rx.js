(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Th(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},Zi=[],ys=()=>{},Sg=()=>!1,yc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vc=n=>n.startsWith("onUpdate:"),nn=Object.assign,bh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Tw=Object.prototype.hasOwnProperty,ze=(n,e)=>Tw.call(n,e),we=Array.isArray,eo=n=>Va(n)==="[object Map]",wc=n=>Va(n)==="[object Set]",Ed=n=>Va(n)==="[object Date]",ke=n=>typeof n=="function",mt=n=>typeof n=="string",Is=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Cg=n=>(et(n)||ke(n))&&ke(n.then)&&ke(n.catch),Rg=Object.prototype.toString,Va=n=>Rg.call(n),bw=n=>Va(n).slice(8,-1),Pg=n=>Va(n)==="[object Object]",Ih=n=>mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,la=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Iw=/-\w/g,Gn=Ec(n=>n.replace(Iw,e=>e.slice(1).toUpperCase())),Aw=/\B([A-Z])/g,Ii=Ec(n=>n.replace(Aw,"-$1").toLowerCase()),kg=Ec(n=>n.charAt(0).toUpperCase()+n.slice(1)),gu=Ec(n=>n?`on${kg(n)}`:""),_s=(n,e)=>!Object.is(n,e),Pl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Dg=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Tc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Td;const bc=()=>Td||(Td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(n){if(we(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=mt(s)?Pw(s):Ic(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(mt(n)||et(n))return n}const Sw=/;(?![^(]*\))/g,Cw=/:([^]+)/,Rw=/\/\*[^]*?\*\//g;function Pw(n){const e={};return n.replace(Rw,"").split(Sw).forEach(t=>{if(t){const s=t.split(Cw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ma(n){let e="";if(mt(n))e=n;else if(we(n))for(let t=0;t<n.length;t++){const s=Ma(n[t]);s&&(e+=s+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dw=Th(kw);function Og(n){return!!n||n===""}function Ow(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=La(n[s],e[s]);return t}function La(n,e){if(n===e)return!0;let t=Ed(n),s=Ed(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=Is(n),s=Is(e),t||s)return n===e;if(t=we(n),s=we(e),t||s)return t&&s?Ow(n,e):!1;if(t=et(n),s=et(e),t||s){if(!t||!s)return!1;const r=Object.keys(n).length,i=Object.keys(e).length;if(r!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),u=e.hasOwnProperty(a);if(c&&!u||!c&&u||!La(n[a],e[a]))return!1}}return String(n)===String(e)}function Nw(n,e){return n.findIndex(t=>La(t,e))}const Ng=n=>!!(n&&n.__v_isRef===!0),Je=n=>mt(n)?n:n==null?"":we(n)||et(n)&&(n.toString===Rg||!ke(n.toString))?Ng(n)?Je(n.value):JSON.stringify(n,xg,2):String(n),xg=(n,e)=>Ng(e)?xg(n,e.value):eo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[mu(s,i)+" =>"]=r,t),{})}:wc(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>mu(t))}:Is(e)?mu(e):et(e)&&!we(e)&&!Pg(e)?String(e):e,mu=(n,e="")=>{var t;return Is(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class xw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&jt&&(jt.active?(this.parent=jt,this.index=(jt.scopes||(jt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){if(this._on>0&&--this._on===0){if(jt===this)jt=this.prevScope;else{let e=jt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vw(){return jt}let ot;const _u=new WeakSet;class Vg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&(jt.active?jt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_u.has(this)&&(_u.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bd(this),Fg(this);const e=ot,t=Qn;ot=this,Qn=!0;try{return this.fn()}finally{Ug(this),ot=e,Qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ch(e);this.deps=this.depsTail=void 0,bd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_u.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ju(this)&&this.run()}get dirty(){return ju(this)}}let Mg=0,ca,ua;function Lg(n,e=!1){if(n.flags|=8,e){n.next=ua,ua=n;return}n.next=ca,ca=n}function Ah(){Mg++}function Sh(){if(--Mg>0)return;if(ua){let e=ua;for(ua=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ca;){let e=ca;for(ca=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Fg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ug(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Ch(s),Mw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function ju(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function jg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wa)||(n.globalVersion=wa,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ju(n))))return;n.flags|=2;const e=n.dep,t=ot,s=Qn;ot=n,Qn=!0;try{Fg(n);const r=n.fn(n._value);(e.version===0||_s(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=t,Qn=s,Ug(n),n.flags&=-3}}function Ch(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Ch(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Mw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Qn=!0;const $g=[];function Ys(){$g.push(Qn),Qn=!1}function Xs(){const n=$g.pop();Qn=n===void 0?!0:n}function bd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let wa=0;class Lw{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ot||!Qn||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new Lw(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,Bg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=s)}return t}trigger(e){this.version++,wa++,this.notify(e)}notify(e){Ah();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Sh()}}}function Bg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Bg(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const $u=new WeakMap,mi=Symbol(""),Bu=Symbol(""),Ea=Symbol("");function Zt(n,e,t){if(Qn&&ot){let s=$u.get(n);s||$u.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Rh),r.map=s,r.key=t),r.track()}}function Ws(n,e,t,s,r,i){const a=$u.get(n);if(!a){wa++;return}const c=u=>{u&&u.trigger()};if(Ah(),e==="clear")a.forEach(c);else{const u=we(n),d=u&&Ih(t);if(u&&t==="length"){const g=Number(s);a.forEach((_,A)=>{(A==="length"||A===Ea||!Is(A)&&A>=g)&&c(_)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),d&&c(a.get(Ea)),e){case"add":u?d&&c(a.get("length")):(c(a.get(mi)),eo(n)&&c(a.get(Bu)));break;case"delete":u||(c(a.get(mi)),eo(n)&&c(a.get(Bu)));break;case"set":eo(n)&&c(a.get(mi));break}}Sh()}function zi(n){const e=We(n);return e===n?e:(Zt(e,"iterate",Ea),Mn(n)?e:e.map(Xn))}function Ac(n){return Zt(n=We(n),"iterate",Ea),n}function gs(n,e){return Zs(n)?ho(_i(n)?Xn(e):e):Xn(e)}const Fw={__proto__:null,[Symbol.iterator](){return yu(this,Symbol.iterator,n=>gs(this,n))},concat(...n){return zi(this).concat(...n.map(e=>we(e)?zi(e):e))},entries(){return yu(this,"entries",n=>(n[1]=gs(this,n[1]),n))},every(n,e){return $s(this,"every",n,e,void 0,arguments)},filter(n,e){return $s(this,"filter",n,e,t=>t.map(s=>gs(this,s)),arguments)},find(n,e){return $s(this,"find",n,e,t=>gs(this,t),arguments)},findIndex(n,e){return $s(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return $s(this,"findLast",n,e,t=>gs(this,t),arguments)},findLastIndex(n,e){return $s(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return $s(this,"forEach",n,e,void 0,arguments)},includes(...n){return vu(this,"includes",n)},indexOf(...n){return vu(this,"indexOf",n)},join(n){return zi(this).join(n)},lastIndexOf(...n){return vu(this,"lastIndexOf",n)},map(n,e){return $s(this,"map",n,e,void 0,arguments)},pop(){return Zo(this,"pop")},push(...n){return Zo(this,"push",n)},reduce(n,...e){return Id(this,"reduce",n,e)},reduceRight(n,...e){return Id(this,"reduceRight",n,e)},shift(){return Zo(this,"shift")},some(n,e){return $s(this,"some",n,e,void 0,arguments)},splice(...n){return Zo(this,"splice",n)},toReversed(){return zi(this).toReversed()},toSorted(n){return zi(this).toSorted(n)},toSpliced(...n){return zi(this).toSpliced(...n)},unshift(...n){return Zo(this,"unshift",n)},values(){return yu(this,"values",n=>gs(this,n))}};function yu(n,e,t){const s=Ac(n),r=s[e]();return s!==n&&!Mn(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=t(i.value)),i}),r}const Uw=Array.prototype;function $s(n,e,t,s,r,i){const a=Ac(n),c=a!==n&&!Mn(n),u=a[e];if(u!==Uw[e]){const _=u.apply(n,i);return c?Xn(_):_}let d=t;a!==n&&(c?d=function(_,A){return t.call(this,gs(n,_),A,n)}:t.length>2&&(d=function(_,A){return t.call(this,_,A,n)}));const g=u.call(a,d,s);return c&&r?r(g):g}function Id(n,e,t,s){const r=Ac(n),i=r!==n&&!Mn(n);let a=t,c=!1;r!==n&&(i?(c=s.length===0,a=function(d,g,_){return c&&(c=!1,d=gs(n,d)),t.call(this,d,gs(n,g),_,n)}):t.length>3&&(a=function(d,g,_){return t.call(this,d,g,_,n)}));const u=r[e](a,...s);return c?gs(n,u):u}function vu(n,e,t){const s=We(n);Zt(s,"iterate",Ea);const r=s[e](...t);return(r===-1||r===!1)&&Oh(t[0])?(t[0]=We(t[0]),s[e](...t)):r}function Zo(n,e,t=[]){Ys(),Ah();const s=We(n)[e].apply(n,t);return Sh(),Xs(),s}const jw=Th("__proto__,__v_isRef,__isVue"),Hg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Is));function $w(n){Is(n)||(n=String(n));const e=We(this);return Zt(e,"has",n),e.hasOwnProperty(n)}class qg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?Yw:Gg:i?Kg:zg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=we(e);if(!r){let u;if(a&&(u=Fw[t]))return u;if(t==="hasOwnProperty")return $w}const c=Reflect.get(e,t,tn(e)?e:s);if((Is(t)?Hg.has(t):jw(t))||(r||Zt(e,"get",t),i))return c;if(tn(c)){const u=a&&Ih(t)?c:c.value;return r&&et(u)?qu(u):u}return et(c)?r?qu(c):kh(c):c}}class Wg extends qg{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];const a=we(e)&&Ih(t);if(!this._isShallow){const d=Zs(i);if(!Mn(s)&&!Zs(s)&&(i=We(i),s=We(s)),!a&&tn(i)&&!tn(s))return d||(i.value=s),!0}const c=a?Number(t)<e.length:ze(e,t),u=Reflect.set(e,t,s,tn(e)?e:r);return e===We(r)&&(c?_s(s,i)&&Ws(e,"set",t,s):Ws(e,"add",t,s)),u}deleteProperty(e,t){const s=ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&Ws(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!Is(t)||!Hg.has(t))&&Zt(e,"has",t),s}ownKeys(e){return Zt(e,"iterate",we(e)?"length":mi),Reflect.ownKeys(e)}}class Bw extends qg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Hw=new Wg,qw=new Bw,Ww=new Wg(!0);const Hu=n=>n,vl=n=>Reflect.getPrototypeOf(n);function zw(n,e,t){return function(...s){const r=this.__v_raw,i=We(r),a=eo(i),c=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,d=r[n](...s),g=t?Hu:e?ho:Xn;return!e&&Zt(i,"iterate",u?Bu:mi),nn(Object.create(d),{next(){const{value:_,done:A}=d.next();return A?{value:_,done:A}:{value:c?[g(_[0]),g(_[1])]:g(_),done:A}}})}}function wl(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Kw(n,e){const t={get(r){const i=this.__v_raw,a=We(i),c=We(r);n||(_s(r,c)&&Zt(a,"get",r),Zt(a,"get",c));const{has:u}=vl(a),d=e?Hu:n?ho:Xn;if(u.call(a,r))return d(i.get(r));if(u.call(a,c))return d(i.get(c));i!==a&&i.get(r)},get size(){const r=this.__v_raw;return!n&&Zt(We(r),"iterate",mi),r.size},has(r){const i=this.__v_raw,a=We(i),c=We(r);return n||(_s(r,c)&&Zt(a,"has",r),Zt(a,"has",c)),r===c?i.has(r):i.has(r)||i.has(c)},forEach(r,i){const a=this,c=a.__v_raw,u=We(c),d=e?Hu:n?ho:Xn;return!n&&Zt(u,"iterate",mi),c.forEach((g,_)=>r.call(i,d(g),d(_),a))}};return nn(t,n?{add:wl("add"),set:wl("set"),delete:wl("delete"),clear:wl("clear")}:{add(r){const i=We(this),a=vl(i),c=We(r),u=!e&&!Mn(r)&&!Zs(r)?c:r;return a.has.call(i,u)||_s(r,u)&&a.has.call(i,r)||_s(c,u)&&a.has.call(i,c)||(i.add(u),Ws(i,"add",u,u)),this},set(r,i){!e&&!Mn(i)&&!Zs(i)&&(i=We(i));const a=We(this),{has:c,get:u}=vl(a);let d=c.call(a,r);d||(r=We(r),d=c.call(a,r));const g=u.call(a,r);return a.set(r,i),d?_s(i,g)&&Ws(a,"set",r,i):Ws(a,"add",r,i),this},delete(r){const i=We(this),{has:a,get:c}=vl(i);let u=a.call(i,r);u||(r=We(r),u=a.call(i,r)),c&&c.call(i,r);const d=i.delete(r);return u&&Ws(i,"delete",r,void 0),d},clear(){const r=We(this),i=r.size!==0,a=r.clear();return i&&Ws(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=zw(r,n,e)}),t}function Ph(n,e){const t=Kw(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(ze(t,r)&&r in s?t:s,r,i)}const Gw={get:Ph(!1,!1)},Qw={get:Ph(!1,!0)},Jw={get:Ph(!0,!1)};const zg=new WeakMap,Kg=new WeakMap,Gg=new WeakMap,Yw=new WeakMap;function Xw(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kh(n){return Zs(n)?n:Dh(n,!1,Hw,Gw,zg)}function Zw(n){return Dh(n,!1,Ww,Qw,Kg)}function qu(n){return Dh(n,!0,qw,Jw,Gg)}function Dh(n,e,t,s,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const i=r.get(n);if(i)return i;const a=Xw(bw(n));if(a===0)return n;const c=new Proxy(n,a===2?s:t);return r.set(n,c),c}function _i(n){return Zs(n)?_i(n.__v_raw):!!(n&&n.__v_isReactive)}function Zs(n){return!!(n&&n.__v_isReadonly)}function Mn(n){return!!(n&&n.__v_isShallow)}function Oh(n){return n?!!n.__v_raw:!1}function We(n){const e=n&&n.__v_raw;return e?We(e):n}function eE(n){return!ze(n,"__v_skip")&&Object.isExtensible(n)&&Dg(n,"__v_skip",!0),n}const Xn=n=>et(n)?kh(n):n,ho=n=>et(n)?qu(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Jt(n){return tE(n,!1)}function tE(n,e){return tn(n)?n:new nE(n,e)}class nE{constructor(e,t){this.dep=new Rh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:We(e),this._value=t?e:Xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||Mn(e)||Zs(e);e=s?e:We(e),_s(e,t)&&(this._rawValue=e,this._value=s?e:Xn(e),this.dep.trigger())}}function sE(n){return tn(n)?n.value:n}const rE={get:(n,e,t)=>e==="__v_raw"?n:sE(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return tn(r)&&!tn(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function Qg(n){return _i(n)?n:new Proxy(n,rE)}class iE{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return Lg(this,!0),!0}get value(){const e=this.dep.track();return jg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function oE(n,e,t=!1){let s,r;return ke(n)?s=n:(s=n.get,r=n.set),new iE(s,r,t)}const El={},Wl=new WeakMap;let hi;function aE(n,e=!1,t=hi){if(t){let s=Wl.get(t);s||Wl.set(t,s=[]),s.push(n)}}function lE(n,e,t=nt){const{immediate:s,deep:r,once:i,scheduler:a,augmentJob:c,call:u}=t,d=oe=>r?oe:Mn(oe)||r===!1||r===0?zs(oe,1):zs(oe);let g,_,A,x,Q=!1,B=!1;if(tn(n)?(_=()=>n.value,Q=Mn(n)):_i(n)?(_=()=>d(n),Q=!0):we(n)?(B=!0,Q=n.some(oe=>_i(oe)||Mn(oe)),_=()=>n.map(oe=>{if(tn(oe))return oe.value;if(_i(oe))return d(oe);if(ke(oe))return u?u(oe,2):oe()})):ke(n)?e?_=u?()=>u(n,2):n:_=()=>{if(A){Ys();try{A()}finally{Xs()}}const oe=hi;hi=g;try{return u?u(n,3,[x]):n(x)}finally{hi=oe}}:_=ys,e&&r){const oe=_,Ce=r===!0?1/0:r;_=()=>zs(oe(),Ce)}const J=Vw(),ne=()=>{g.stop(),J&&J.active&&bh(J.effects,g)};if(i&&e){const oe=e;e=(...Ce)=>{oe(...Ce),ne()}}let Z=B?new Array(n.length).fill(El):El;const ie=oe=>{if(!(!(g.flags&1)||!g.dirty&&!oe))if(e){const Ce=g.run();if(r||Q||(B?Ce.some((Be,S)=>_s(Be,Z[S])):_s(Ce,Z))){A&&A();const Be=hi;hi=g;try{const S=[Ce,Z===El?void 0:B&&Z[0]===El?[]:Z,x];Z=Ce,u?u(e,3,S):e(...S)}finally{hi=Be}}}else g.run()};return c&&c(ie),g=new Vg(_),g.scheduler=a?()=>a(ie,!1):ie,x=oe=>aE(oe,!1,g),A=g.onStop=()=>{const oe=Wl.get(g);if(oe){if(u)u(oe,4);else for(const Ce of oe)Ce();Wl.delete(g)}},e?s?ie(!0):Z=g.run():a?a(ie.bind(null,!0),!0):g.run(),ne.pause=g.pause.bind(g),ne.resume=g.resume.bind(g),ne.stop=ne,ne}function zs(n,e=1/0,t){if(e<=0||!et(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tn(n))zs(n.value,e,t);else if(we(n))for(let s=0;s<n.length;s++)zs(n[s],e,t);else if(wc(n)||eo(n))n.forEach(s=>{zs(s,e,t)});else if(Pg(n)){for(const s in n)zs(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&zs(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fa(n,e,t,s){try{return s?n(...s):n()}catch(r){Sc(r,e,t)}}function Zn(n,e,t,s){if(ke(n)){const r=Fa(n,e,t,s);return r&&Cg(r)&&r.catch(i=>{Sc(i,e,t)}),r}if(we(n)){const r=[];for(let i=0;i<n.length;i++)r.push(Zn(n[i],e,t,s));return r}}function Sc(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||nt;if(e){let c=e.parent;const u=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const g=c.ec;if(g){for(let _=0;_<g.length;_++)if(g[_](n,u,d)===!1)return}c=c.parent}if(i){Ys(),Fa(i,null,10,[n,u,d]),Xs();return}}cE(n,t,r,s,a)}function cE(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const cn=[];let ds=-1;const to=[];let Ir=null,Gi=0;const Jg=Promise.resolve();let zl=null;function Yg(n){const e=zl||Jg;return n?e.then(this?n.bind(this):n):e}function uE(n){let e=ds+1,t=cn.length;for(;e<t;){const s=e+t>>>1,r=cn[s],i=Ta(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function Nh(n){if(!(n.flags&1)){const e=Ta(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=Ta(t)?cn.push(n):cn.splice(uE(e),0,n),n.flags|=1,Xg()}}function Xg(){zl||(zl=Jg.then(em))}function hE(n){we(n)?to.push(...n):Ir&&n.id===-1?Ir.splice(Gi+1,0,n):n.flags&1||(to.push(n),n.flags|=1),Xg()}function Ad(n,e,t=ds+1){for(;t<cn.length;t++){const s=cn[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;cn.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Zg(n){if(to.length){const e=[...new Set(to)].sort((t,s)=>Ta(t)-Ta(s));if(to.length=0,Ir){Ir.push(...e);return}for(Ir=e,Gi=0;Gi<Ir.length;Gi++){const t=Ir[Gi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ir=null,Gi=0}}const Ta=n=>n.id==null?n.flags&2?-1:1/0:n.id;function em(n){try{for(ds=0;ds<cn.length;ds++){const e=cn[ds];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ds<cn.length;ds++){const e=cn[ds];e&&(e.flags&=-2)}ds=-1,cn.length=0,Zg(),zl=null,(cn.length||to.length)&&em()}}let Vn=null,tm=null;function Kl(n){const e=Vn;return Vn=n,tm=n&&n.type.__scopeId||null,e}function fE(n,e=Vn,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&Md(-1);const i=Kl(e);let a;try{a=n(...r)}finally{Kl(i),s._d&&Md(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function wu(n,e){if(Vn===null)return n;const t=kc(Vn),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,a,c,u=nt]=e[r];i&&(ke(i)&&(i={mounted:i,updated:i}),i.deep&&zs(a),s.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:u}))}return n}function ci(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];i&&(c.oldValue=i[a].value);let u=c.dir[s];u&&(Ys(),Zn(u,t,8,[n.el,c,n,e]),Xs())}}function dE(n,e){if(hn){let t=hn.provides;const s=hn.parent&&hn.parent.provides;s===t&&(t=hn.provides=Object.create(s)),t[n]=e}}function kl(n,e,t=!1){const s=fT();if(s||no){let r=no?no._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(s&&s.proxy):e}}const pE=Symbol.for("v-scx"),gE=()=>kl(pE);function Dl(n,e,t){return nm(n,e,t)}function nm(n,e,t=nt){const{immediate:s,deep:r,flush:i,once:a}=t,c=nn({},t),u=e&&s||!e&&i!=="post";let d;if(Ia){if(i==="sync"){const x=gE();d=x.__watcherHandles||(x.__watcherHandles=[])}else if(!u){const x=()=>{};return x.stop=ys,x.resume=ys,x.pause=ys,x}}const g=hn;c.call=(x,Q,B)=>Zn(x,g,Q,B);let _=!1;i==="post"?c.scheduler=x=>{mn(x,g&&g.suspense)}:i!=="sync"&&(_=!0,c.scheduler=(x,Q)=>{Q?x():Nh(x)}),c.augmentJob=x=>{e&&(x.flags|=4),_&&(x.flags|=2,g&&(x.id=g.uid,x.i=g))};const A=lE(n,e,c);return Ia&&(d?d.push(A):u&&A()),A}function mE(n,e,t){const s=this.proxy,r=mt(n)?n.includes(".")?sm(s,n):()=>s[n]:n.bind(s,s);let i;ke(e)?i=e:(i=e.handler,t=e);const a=Ua(this),c=nm(r,i.bind(s),t);return a(),c}function sm(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const _E=Symbol("_vte"),yE=n=>n.__isTeleport,Eu=Symbol("_leaveCb");function xh(n,e){n.shapeFlag&6&&n.component?(n.transition=e,xh(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function rm(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Sd(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Gl=new WeakMap;function ha(n,e,t,s,r=!1){if(we(n)){n.forEach((B,J)=>ha(B,e&&(we(e)?e[J]:e),t,s,r));return}if(fa(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ha(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?kc(s.component):s.el,a=r?null:i,{i:c,r:u}=n,d=e&&e.r,g=c.refs===nt?c.refs={}:c.refs,_=c.setupState,A=We(_),x=_===nt?Sg:B=>Sd(g,B)?!1:ze(A,B),Q=(B,J)=>!(J&&Sd(g,J));if(d!=null&&d!==u){if(Cd(e),mt(d))g[d]=null,x(d)&&(_[d]=null);else if(tn(d)){const B=e;Q(d,B.k)&&(d.value=null),B.k&&(g[B.k]=null)}}if(ke(u))Fa(u,c,12,[a,g]);else{const B=mt(u),J=tn(u);if(B||J){const ne=()=>{if(n.f){const Z=B?x(u)?_[u]:g[u]:Q()||!n.k?u.value:g[n.k];if(r)we(Z)&&bh(Z,i);else if(we(Z))Z.includes(i)||Z.push(i);else if(B)g[u]=[i],x(u)&&(_[u]=g[u]);else{const ie=[i];Q(u,n.k)&&(u.value=ie),n.k&&(g[n.k]=ie)}}else B?(g[u]=a,x(u)&&(_[u]=a)):J&&(Q(u,n.k)&&(u.value=a),n.k&&(g[n.k]=a))};if(a){const Z=()=>{ne(),Gl.delete(n)};Z.id=-1,Gl.set(n,Z),mn(Z,t)}else Cd(n),ne()}}}function Cd(n){const e=Gl.get(n);e&&(e.flags|=8,Gl.delete(n))}bc().requestIdleCallback;bc().cancelIdleCallback;const fa=n=>!!n.type.__asyncLoader,im=n=>n.type.__isKeepAlive;function vE(n,e){om(n,"a",e)}function wE(n,e){om(n,"da",e)}function om(n,e,t=hn){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Cc(e,s,t),t){let r=t.parent;for(;r&&r.parent;)im(r.parent.vnode)&&EE(s,e,t,r),r=r.parent}}function EE(n,e,t,s){const r=Cc(e,n,s,!0);Vh(()=>{bh(s[e],r)},t)}function Cc(n,e,t=hn,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{Ys();const c=Ua(t),u=Zn(e,t,n,a);return c(),Xs(),u});return s?r.unshift(i):r.push(i),i}}const ir=n=>(e,t=hn)=>{(!Ia||n==="sp")&&Cc(n,(...s)=>e(...s),t)},TE=ir("bm"),am=ir("m"),bE=ir("bu"),IE=ir("u"),AE=ir("bum"),Vh=ir("um"),SE=ir("sp"),CE=ir("rtg"),RE=ir("rtc");function PE(n,e=hn){Cc("ec",n,e)}const kE=Symbol.for("v-ndc");function Ki(n,e,t,s){let r;const i=t,a=we(n);if(a||mt(n)){const c=a&&_i(n);let u=!1,d=!1;c&&(u=!Mn(n),d=Zs(n),n=Ac(n)),r=new Array(n.length);for(let g=0,_=n.length;g<_;g++)r[g]=e(u?d?ho(Xn(n[g])):Xn(n[g]):n[g],g,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let c=0;c<n;c++)r[c]=e(c+1,c,void 0,i)}else if(et(n))if(n[Symbol.iterator])r=Array.from(n,(c,u)=>e(c,u,void 0,i));else{const c=Object.keys(n);r=new Array(c.length);for(let u=0,d=c.length;u<d;u++){const g=c[u];r[u]=e(n[g],g,u,i)}}else r=[];return r}const Wu=n=>n?Pm(n)?kc(n):Wu(n.parent):null,da=nn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wu(n.parent),$root:n=>Wu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>cm(n),$forceUpdate:n=>n.f||(n.f=()=>{Nh(n.update)}),$nextTick:n=>n.n||(n.n=Yg.bind(n.proxy)),$watch:n=>mE.bind(n)}),Tu=(n,e)=>n!==nt&&!n.__isScriptSetup&&ze(n,e),DE={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:a,type:c,appContext:u}=n;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(Tu(s,e))return a[e]=1,s[e];if(r!==nt&&ze(r,e))return a[e]=2,r[e];if(ze(i,e))return a[e]=3,i[e];if(t!==nt&&ze(t,e))return a[e]=4,t[e];zu&&(a[e]=0)}}const d=da[e];let g,_;if(d)return e==="$attrs"&&Zt(n.attrs,"get",""),d(n);if((g=c.__cssModules)&&(g=g[e]))return g;if(t!==nt&&ze(t,e))return a[e]=4,t[e];if(_=u.config.globalProperties,ze(_,e))return _[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return Tu(r,e)?(r[e]=t,!0):s!==nt&&ze(s,e)?(s[e]=t,!0):ze(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,props:i,type:a}},c){let u;return!!(t[c]||n!==nt&&c[0]!=="$"&&ze(n,c)||Tu(e,c)||ze(i,c)||ze(s,c)||ze(da,c)||ze(r.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ze(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Rd(n){return we(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let zu=!0;function OE(n){const e=cm(n),t=n.proxy,s=n.ctx;zu=!1,e.beforeCreate&&Pd(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:a,watch:c,provide:u,inject:d,created:g,beforeMount:_,mounted:A,beforeUpdate:x,updated:Q,activated:B,deactivated:J,beforeDestroy:ne,beforeUnmount:Z,destroyed:ie,unmounted:oe,render:Ce,renderTracked:Be,renderTriggered:S,errorCaptured:w,serverPrefetch:b,expose:R,inheritAttrs:I,components:O,directives:E,filters:st}=e;if(d&&NE(d,s,null),a)for(const He in a){const De=a[He];ke(De)&&(s[He]=De.bind(t))}if(r){const He=r.call(t,t);et(He)&&(n.data=kh(He))}if(zu=!0,i)for(const He in i){const De=i[He],Ct=ke(De)?De.bind(t,t):ke(De.get)?De.get.bind(t,t):ys,Ln=!ke(De)&&ke(De.set)?De.set.bind(t):ys,$=Bs({get:Ct,set:Ln});Object.defineProperty(s,He,{enumerable:!0,configurable:!0,get:()=>$.value,set:Rt=>$.value=Rt})}if(c)for(const He in c)lm(c[He],s,t,He);if(u){const He=ke(u)?u.call(t):u;Reflect.ownKeys(He).forEach(De=>{dE(De,He[De])})}g&&Pd(g,n,"c");function at(He,De){we(De)?De.forEach(Ct=>He(Ct.bind(t))):De&&He(De.bind(t))}if(at(TE,_),at(am,A),at(bE,x),at(IE,Q),at(vE,B),at(wE,J),at(PE,w),at(RE,Be),at(CE,S),at(AE,Z),at(Vh,oe),at(SE,b),we(R))if(R.length){const He=n.exposed||(n.exposed={});R.forEach(De=>{Object.defineProperty(He,De,{get:()=>t[De],set:Ct=>t[De]=Ct,enumerable:!0})})}else n.exposed||(n.exposed={});Ce&&n.render===ys&&(n.render=Ce),I!=null&&(n.inheritAttrs=I),O&&(n.components=O),E&&(n.directives=E),b&&rm(n)}function NE(n,e,t=ys){we(n)&&(n=Ku(n));for(const s in n){const r=n[s];let i;et(r)?"default"in r?i=kl(r.from||s,r.default,!0):i=kl(r.from||s):i=kl(r),tn(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[s]=i}}function Pd(n,e,t){Zn(we(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function lm(n,e,t,s){let r=s.includes(".")?sm(t,s):()=>t[s];if(mt(n)){const i=e[n];ke(i)&&Dl(r,i)}else if(ke(n))Dl(r,n.bind(t));else if(et(n))if(we(n))n.forEach(i=>lm(i,e,t,s));else{const i=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(i)&&Dl(r,i,n)}}function cm(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let u;return c?u=c:!r.length&&!t&&!s?u=e:(u={},r.length&&r.forEach(d=>Ql(u,d,a,!0)),Ql(u,e,a)),et(e)&&i.set(e,u),u}function Ql(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&Ql(n,i,t,!0),r&&r.forEach(a=>Ql(n,a,t,!0));for(const a in e)if(!(s&&a==="expose")){const c=xE[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const xE={data:kd,props:Dd,emits:Dd,methods:na,computed:na,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:na,directives:na,watch:ME,provide:kd,inject:VE};function kd(n,e){return e?n?function(){return nn(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function VE(n,e){return na(Ku(n),Ku(e))}function Ku(n){if(we(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ln(n,e){return n?[...new Set([].concat(n,e))]:e}function na(n,e){return n?nn(Object.create(null),n,e):e}function Dd(n,e){return n?we(n)&&we(e)?[...new Set([...n,...e])]:nn(Object.create(null),Rd(n),Rd(e??{})):e}function ME(n,e){if(!n)return e;if(!e)return n;const t=nn(Object.create(null),n);for(const s in e)t[s]=ln(n[s],e[s]);return t}function um(){return{app:null,config:{isNativeTag:Sg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LE=0;function FE(n,e){return function(s,r=null){ke(s)||(s=nn({},s)),r!=null&&!et(r)&&(r=null);const i=um(),a=new WeakSet,c=[];let u=!1;const d=i.app={_uid:LE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:yT,get config(){return i.config},set config(g){},use(g,..._){return a.has(g)||(g&&ke(g.install)?(a.add(g),g.install(d,..._)):ke(g)&&(a.add(g),g(d,..._))),d},mixin(g){return i.mixins.includes(g)||i.mixins.push(g),d},component(g,_){return _?(i.components[g]=_,d):i.components[g]},directive(g,_){return _?(i.directives[g]=_,d):i.directives[g]},mount(g,_,A){if(!u){const x=d._ceVNode||Tn(s,r);return x.appContext=i,A===!0?A="svg":A===!1&&(A=void 0),n(x,g,A),u=!0,d._container=g,g.__vue_app__=d,kc(x.component)}},onUnmount(g){c.push(g)},unmount(){u&&(Zn(c,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(g,_){return i.provides[g]=_,d},runWithContext(g){const _=no;no=d;try{return g()}finally{no=_}}};return d}}let no=null;const UE=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Gn(e)}Modifiers`]||n[`${Ii(e)}Modifiers`];function jE(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||nt;let r=t;const i=e.startsWith("update:"),a=i&&UE(s,e.slice(7));a&&(a.trim&&(r=t.map(g=>mt(g)?g.trim():g)),a.number&&(r=t.map(Tc)));let c,u=s[c=gu(e)]||s[c=gu(Gn(e))];!u&&i&&(u=s[c=gu(Ii(e))]),u&&Zn(u,n,6,r);const d=s[c+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Zn(d,n,6,r)}}const $E=new WeakMap;function hm(n,e,t=!1){const s=t?$E:e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let a={},c=!1;if(!ke(n)){const u=d=>{const g=hm(d,e,!0);g&&(c=!0,nn(a,g))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!c?(et(n)&&s.set(n,null),null):(we(i)?i.forEach(u=>a[u]=null):nn(a,i),et(n)&&s.set(n,a),a)}function Rc(n,e){return!n||!yc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ze(n,e[0].toLowerCase()+e.slice(1))||ze(n,Ii(e))||ze(n,e))}function Od(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:a,attrs:c,emit:u,render:d,renderCache:g,props:_,data:A,setupState:x,ctx:Q,inheritAttrs:B}=n,J=Kl(n);let ne,Z;try{if(t.shapeFlag&4){const oe=r||s,Ce=oe;ne=ms(d.call(Ce,oe,g,_,x,A,Q)),Z=c}else{const oe=e;ne=ms(oe.length>1?oe(_,{attrs:c,slots:a,emit:u}):oe(_,null)),Z=e.props?c:BE(c)}}catch(oe){pa.length=0,Sc(oe,n,1),ne=Tn(xr)}let ie=ne;if(Z&&B!==!1){const oe=Object.keys(Z),{shapeFlag:Ce}=ie;oe.length&&Ce&7&&(i&&oe.some(vc)&&(Z=HE(Z,i)),ie=fo(ie,Z,!1,!0))}return t.dirs&&(ie=fo(ie,null,!1,!0),ie.dirs=ie.dirs?ie.dirs.concat(t.dirs):t.dirs),t.transition&&xh(ie,t.transition),ne=ie,Kl(J),ne}const BE=n=>{let e;for(const t in n)(t==="class"||t==="style"||yc(t))&&((e||(e={}))[t]=n[t]);return e},HE=(n,e)=>{const t={};for(const s in n)(!vc(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function qE(n,e,t){const{props:s,children:r,component:i}=n,{props:a,children:c,patchFlag:u}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return s?Nd(s,a,d):!!a;if(u&8){const g=e.dynamicProps;for(let _=0;_<g.length;_++){const A=g[_];if(fm(a,s,A)&&!Rc(d,A))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?Nd(s,a,d):!0:!!a;return!1}function Nd(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(fm(e,n,i)&&!Rc(t,i))return!0}return!1}function fm(n,e,t){const s=n[t],r=e[t];return t==="style"&&et(s)&&et(r)?!La(s,r):s!==r}function WE({vnode:n,parent:e,suspense:t},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=s,n=r),r===n)(n=e.vnode).el=s,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=s)}const dm={},pm=()=>Object.create(dm),gm=n=>Object.getPrototypeOf(n)===dm;function zE(n,e,t,s=!1){const r={},i=pm();n.propsDefaults=Object.create(null),mm(n,e,r,i);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=s?r:Zw(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function KE(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:a}}=n,c=We(r),[u]=n.propsOptions;let d=!1;if((s||a>0)&&!(a&16)){if(a&8){const g=n.vnode.dynamicProps;for(let _=0;_<g.length;_++){let A=g[_];if(Rc(n.emitsOptions,A))continue;const x=e[A];if(u)if(ze(i,A))x!==i[A]&&(i[A]=x,d=!0);else{const Q=Gn(A);r[Q]=Gu(u,c,Q,x,n,!1)}else x!==i[A]&&(i[A]=x,d=!0)}}}else{mm(n,e,r,i)&&(d=!0);let g;for(const _ in c)(!e||!ze(e,_)&&((g=Ii(_))===_||!ze(e,g)))&&(u?t&&(t[_]!==void 0||t[g]!==void 0)&&(r[_]=Gu(u,c,_,void 0,n,!0)):delete r[_]);if(i!==c)for(const _ in i)(!e||!ze(e,_))&&(delete i[_],d=!0)}d&&Ws(n.attrs,"set","")}function mm(n,e,t,s){const[r,i]=n.propsOptions;let a=!1,c;if(e)for(let u in e){if(la(u))continue;const d=e[u];let g;r&&ze(r,g=Gn(u))?!i||!i.includes(g)?t[g]=d:(c||(c={}))[g]=d:Rc(n.emitsOptions,u)||(!(u in s)||d!==s[u])&&(s[u]=d,a=!0)}if(i){const u=We(t),d=c||nt;for(let g=0;g<i.length;g++){const _=i[g];t[_]=Gu(r,u,_,d[_],n,!ze(d,_))}}return a}function Gu(n,e,t,s,r,i){const a=n[t];if(a!=null){const c=ze(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ke(u)){const{propsDefaults:d}=r;if(t in d)s=d[t];else{const g=Ua(r);s=d[t]=u.call(null,e),g()}}else s=u;r.ce&&r.ce._setProp(t,s)}a[0]&&(i&&!c?s=!1:a[1]&&(s===""||s===Ii(t))&&(s=!0))}return s}const GE=new WeakMap;function _m(n,e,t=!1){const s=t?GE:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,a={},c=[];let u=!1;if(!ke(n)){const g=_=>{u=!0;const[A,x]=_m(_,e,!0);nn(a,A),x&&c.push(...x)};!t&&e.mixins.length&&e.mixins.forEach(g),n.extends&&g(n.extends),n.mixins&&n.mixins.forEach(g)}if(!i&&!u)return et(n)&&s.set(n,Zi),Zi;if(we(i))for(let g=0;g<i.length;g++){const _=Gn(i[g]);xd(_)&&(a[_]=nt)}else if(i)for(const g in i){const _=Gn(g);if(xd(_)){const A=i[g],x=a[_]=we(A)||ke(A)?{type:A}:nn({},A),Q=x.type;let B=!1,J=!0;if(we(Q))for(let ne=0;ne<Q.length;++ne){const Z=Q[ne],ie=ke(Z)&&Z.name;if(ie==="Boolean"){B=!0;break}else ie==="String"&&(J=!1)}else B=ke(Q)&&Q.name==="Boolean";x[0]=B,x[1]=J,(B||ze(x,"default"))&&c.push(_)}}const d=[a,c];return et(n)&&s.set(n,d),d}function xd(n){return n[0]!=="$"&&!la(n)}const Mh=n=>n==="_"||n==="_ctx"||n==="$stable",Lh=n=>we(n)?n.map(ms):[ms(n)],QE=(n,e,t)=>{if(e._n)return e;const s=fE((...r)=>Lh(e(...r)),t);return s._c=!1,s},ym=(n,e,t)=>{const s=n._ctx;for(const r in n){if(Mh(r))continue;const i=n[r];if(ke(i))e[r]=QE(r,i,s);else if(i!=null){const a=Lh(i);e[r]=()=>a}}},vm=(n,e)=>{const t=Lh(e);n.slots.default=()=>t},wm=(n,e,t)=>{for(const s in e)(t||!Mh(s))&&(n[s]=e[s])},JE=(n,e,t)=>{const s=n.slots=pm();if(n.vnode.shapeFlag&32){const r=e._;r?(wm(s,e,t),t&&Dg(s,"_",r,!0)):ym(e,s)}else e&&vm(n,e)},YE=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,a=nt;if(s.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:wm(r,e,t):(i=!e.$stable,ym(e,r)),a=e}else e&&(vm(n,e),a={default:1});if(i)for(const c in r)!Mh(c)&&a[c]==null&&delete r[c]},mn=nT;function XE(n){return ZE(n)}function ZE(n,e){const t=bc();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:a,createText:c,createComment:u,setText:d,setElementText:g,parentNode:_,nextSibling:A,setScopeId:x=ys,insertStaticContent:Q}=n,B=(T,C,U,N=null,P=null,L=null,W=void 0,K=null,F=!!C.dynamicChildren)=>{if(T===C)return;T&&!ea(T,C)&&(N=lt(T),Rt(T,P,L,!0),T=null),C.patchFlag===-2&&(F=!1,C.dynamicChildren=null);const{type:q,ref:de,shapeFlag:ee}=C;switch(q){case Pc:J(T,C,U,N);break;case xr:ne(T,C,U,N);break;case Ol:T==null&&Z(C,U,N,W);break;case un:O(T,C,U,N,P,L,W,K,F);break;default:ee&1?Ce(T,C,U,N,P,L,W,K,F):ee&6?E(T,C,U,N,P,L,W,K,F):(ee&64||ee&128)&&q.process(T,C,U,N,P,L,W,K,F,fn)}de!=null&&P?ha(de,T&&T.ref,L,C||T,!C):de==null&&T&&T.ref!=null&&ha(T.ref,null,L,T,!0)},J=(T,C,U,N)=>{if(T==null)s(C.el=c(C.children),U,N);else{const P=C.el=T.el;C.children!==T.children&&d(P,C.children)}},ne=(T,C,U,N)=>{T==null?s(C.el=u(C.children||""),U,N):C.el=T.el},Z=(T,C,U,N)=>{[T.el,T.anchor]=Q(T.children,C,U,N,T.el,T.anchor)},ie=({el:T,anchor:C},U,N)=>{let P;for(;T&&T!==C;)P=A(T),s(T,U,N),T=P;s(C,U,N)},oe=({el:T,anchor:C})=>{let U;for(;T&&T!==C;)U=A(T),r(T),T=U;r(C)},Ce=(T,C,U,N,P,L,W,K,F)=>{if(C.type==="svg"?W="svg":C.type==="math"&&(W="mathml"),T==null)Be(C,U,N,P,L,W,K,F);else{const q=T.el&&T.el._isVueCE?T.el:null;try{q&&q._beginPatch(),b(T,C,P,L,W,K,F)}finally{q&&q._endPatch()}}},Be=(T,C,U,N,P,L,W,K)=>{let F,q;const{props:de,shapeFlag:ee,transition:he,dirs:fe}=T;if(F=T.el=a(T.type,L,de&&de.is,de),ee&8?g(F,T.children):ee&16&&w(T.children,F,null,N,P,bu(T,L),W,K),fe&&ci(T,null,N,"created"),S(F,T,T.scopeId,W,N),de){for(const $e in de)$e!=="value"&&!la($e)&&i(F,$e,null,de[$e],L,N);"value"in de&&i(F,"value",null,de.value,L),(q=de.onVnodeBeforeMount)&&fs(q,N,T)}fe&&ci(T,null,N,"beforeMount");const Ee=eT(P,he);Ee&&he.beforeEnter(F),s(F,C,U),((q=de&&de.onVnodeMounted)||Ee||fe)&&mn(()=>{try{q&&fs(q,N,T),Ee&&he.enter(F),fe&&ci(T,null,N,"mounted")}finally{}},P)},S=(T,C,U,N,P)=>{if(U&&x(T,U),N)for(let L=0;L<N.length;L++)x(T,N[L]);if(P){let L=P.subTree;if(C===L||Im(L.type)&&(L.ssContent===C||L.ssFallback===C)){const W=P.vnode;S(T,W,W.scopeId,W.slotScopeIds,P.parent)}}},w=(T,C,U,N,P,L,W,K,F=0)=>{for(let q=F;q<T.length;q++){const de=T[q]=K?qs(T[q]):ms(T[q]);B(null,de,C,U,N,P,L,W,K)}},b=(T,C,U,N,P,L,W)=>{const K=C.el=T.el;let{patchFlag:F,dynamicChildren:q,dirs:de}=C;F|=T.patchFlag&16;const ee=T.props||nt,he=C.props||nt;let fe;if(U&&ui(U,!1),(fe=he.onVnodeBeforeUpdate)&&fs(fe,U,C,T),de&&ci(C,T,U,"beforeUpdate"),U&&ui(U,!0),(ee.innerHTML&&he.innerHTML==null||ee.textContent&&he.textContent==null)&&g(K,""),q?R(T.dynamicChildren,q,K,U,N,bu(C,P),L):W||De(T,C,K,null,U,N,bu(C,P),L,!1),F>0){if(F&16)I(K,ee,he,U,P);else if(F&2&&ee.class!==he.class&&i(K,"class",null,he.class,P),F&4&&i(K,"style",ee.style,he.style,P),F&8){const Ee=C.dynamicProps;for(let $e=0;$e<Ee.length;$e++){const Fe=Ee[$e],dt=ee[Fe],ct=he[Fe];(ct!==dt||Fe==="value")&&i(K,Fe,dt,ct,P,U)}}F&1&&T.children!==C.children&&g(K,C.children)}else!W&&q==null&&I(K,ee,he,U,P);((fe=he.onVnodeUpdated)||de)&&mn(()=>{fe&&fs(fe,U,C,T),de&&ci(C,T,U,"updated")},N)},R=(T,C,U,N,P,L,W)=>{for(let K=0;K<C.length;K++){const F=T[K],q=C[K],de=F.el&&(F.type===un||!ea(F,q)||F.shapeFlag&198)?_(F.el):U;B(F,q,de,null,N,P,L,W,!0)}},I=(T,C,U,N,P)=>{if(C!==U){if(C!==nt)for(const L in C)!la(L)&&!(L in U)&&i(T,L,C[L],null,P,N);for(const L in U){if(la(L))continue;const W=U[L],K=C[L];W!==K&&L!=="value"&&i(T,L,K,W,P,N)}"value"in U&&i(T,"value",C.value,U.value,P)}},O=(T,C,U,N,P,L,W,K,F)=>{const q=C.el=T?T.el:c(""),de=C.anchor=T?T.anchor:c("");let{patchFlag:ee,dynamicChildren:he,slotScopeIds:fe}=C;fe&&(K=K?K.concat(fe):fe),T==null?(s(q,U,N),s(de,U,N),w(C.children||[],U,de,P,L,W,K,F)):ee>0&&ee&64&&he&&T.dynamicChildren&&T.dynamicChildren.length===he.length?(R(T.dynamicChildren,he,U,P,L,W,K),(C.key!=null||P&&C===P.subTree)&&Em(T,C,!0)):De(T,C,U,de,P,L,W,K,F)},E=(T,C,U,N,P,L,W,K,F)=>{C.slotScopeIds=K,T==null?C.shapeFlag&512?P.ctx.activate(C,U,N,W,F):st(C,U,N,P,L,W,F):qt(T,C,F)},st=(T,C,U,N,P,L,W)=>{const K=T.component=hT(T,N,P);if(im(T)&&(K.ctx.renderer=fn),dT(K,!1,W),K.asyncDep){if(P&&P.registerDep(K,at,W),!T.el){const F=K.subTree=Tn(xr);ne(null,F,C,U),T.placeholder=F.el}}else at(K,T,C,U,P,L,W)},qt=(T,C,U)=>{const N=C.component=T.component;if(qE(T,C,U))if(N.asyncDep&&!N.asyncResolved){He(N,C,U);return}else N.next=C,N.update();else C.el=T.el,N.vnode=C},at=(T,C,U,N,P,L,W)=>{const K=()=>{if(T.isMounted){let{next:ee,bu:he,u:fe,parent:Ee,vnode:$e}=T;{const bt=Tm(T);if(bt){ee&&(ee.el=$e.el,He(T,ee,W)),bt.asyncDep.then(()=>{mn(()=>{T.isUnmounted||q()},P)});return}}let Fe=ee,dt;ui(T,!1),ee?(ee.el=$e.el,He(T,ee,W)):ee=$e,he&&Pl(he),(dt=ee.props&&ee.props.onVnodeBeforeUpdate)&&fs(dt,Ee,ee,$e),ui(T,!0);const ct=Od(T),Tt=T.subTree;T.subTree=ct,B(Tt,ct,_(Tt.el),lt(Tt),T,P,L),ee.el=ct.el,Fe===null&&WE(T,ct.el),fe&&mn(fe,P),(dt=ee.props&&ee.props.onVnodeUpdated)&&mn(()=>fs(dt,Ee,ee,$e),P)}else{let ee;const{el:he,props:fe}=C,{bm:Ee,m:$e,parent:Fe,root:dt,type:ct}=T,Tt=fa(C);ui(T,!1),Ee&&Pl(Ee),!Tt&&(ee=fe&&fe.onVnodeBeforeMount)&&fs(ee,Fe,C),ui(T,!0);{dt.ce&&dt.ce._hasShadowRoot()&&dt.ce._injectChildStyle(ct,T.parent?T.parent.type:void 0);const bt=T.subTree=Od(T);B(null,bt,U,N,T,P,L),C.el=bt.el}if($e&&mn($e,P),!Tt&&(ee=fe&&fe.onVnodeMounted)){const bt=C;mn(()=>fs(ee,Fe,bt),P)}(C.shapeFlag&256||Fe&&fa(Fe.vnode)&&Fe.vnode.shapeFlag&256)&&T.a&&mn(T.a,P),T.isMounted=!0,C=U=N=null}};T.scope.on();const F=T.effect=new Vg(K);T.scope.off();const q=T.update=F.run.bind(F),de=T.job=F.runIfDirty.bind(F);de.i=T,de.id=T.uid,F.scheduler=()=>Nh(de),ui(T,!0),q()},He=(T,C,U)=>{C.component=T;const N=T.vnode.props;T.vnode=C,T.next=null,KE(T,C.props,N,U),YE(T,C.children,U),Ys(),Ad(T),Xs()},De=(T,C,U,N,P,L,W,K,F=!1)=>{const q=T&&T.children,de=T?T.shapeFlag:0,ee=C.children,{patchFlag:he,shapeFlag:fe}=C;if(he>0){if(he&128){Ln(q,ee,U,N,P,L,W,K,F);return}else if(he&256){Ct(q,ee,U,N,P,L,W,K,F);return}}fe&8?(de&16&&Ft(q,P,L),ee!==q&&g(U,ee)):de&16?fe&16?Ln(q,ee,U,N,P,L,W,K,F):Ft(q,P,L,!0):(de&8&&g(U,""),fe&16&&w(ee,U,N,P,L,W,K,F))},Ct=(T,C,U,N,P,L,W,K,F)=>{T=T||Zi,C=C||Zi;const q=T.length,de=C.length,ee=Math.min(q,de);let he;for(he=0;he<ee;he++){const fe=C[he]=F?qs(C[he]):ms(C[he]);B(T[he],fe,U,null,P,L,W,K,F)}q>de?Ft(T,P,L,!0,!1,ee):w(C,U,N,P,L,W,K,F,ee)},Ln=(T,C,U,N,P,L,W,K,F)=>{let q=0;const de=C.length;let ee=T.length-1,he=de-1;for(;q<=ee&&q<=he;){const fe=T[q],Ee=C[q]=F?qs(C[q]):ms(C[q]);if(ea(fe,Ee))B(fe,Ee,U,null,P,L,W,K,F);else break;q++}for(;q<=ee&&q<=he;){const fe=T[ee],Ee=C[he]=F?qs(C[he]):ms(C[he]);if(ea(fe,Ee))B(fe,Ee,U,null,P,L,W,K,F);else break;ee--,he--}if(q>ee){if(q<=he){const fe=he+1,Ee=fe<de?C[fe].el:N;for(;q<=he;)B(null,C[q]=F?qs(C[q]):ms(C[q]),U,Ee,P,L,W,K,F),q++}}else if(q>he)for(;q<=ee;)Rt(T[q],P,L,!0),q++;else{const fe=q,Ee=q,$e=new Map;for(q=Ee;q<=he;q++){const _t=C[q]=F?qs(C[q]):ms(C[q]);_t.key!=null&&$e.set(_t.key,q)}let Fe,dt=0;const ct=he-Ee+1;let Tt=!1,bt=0;const Wt=new Array(ct);for(q=0;q<ct;q++)Wt[q]=0;for(q=fe;q<=ee;q++){const _t=T[q];if(dt>=ct){Rt(_t,P,L,!0);continue}let It;if(_t.key!=null)It=$e.get(_t.key);else for(Fe=Ee;Fe<=he;Fe++)if(Wt[Fe-Ee]===0&&ea(_t,C[Fe])){It=Fe;break}It===void 0?Rt(_t,P,L,!0):(Wt[It-Ee]=q+1,It>=bt?bt=It:Tt=!0,B(_t,C[It],U,null,P,L,W,K,F),dt++)}const ar=Tt?tT(Wt):Zi;for(Fe=ar.length-1,q=ct-1;q>=0;q--){const _t=Ee+q,It=C[_t],Hr=C[_t+1],Ps=_t+1<de?Hr.el||bm(Hr):N;Wt[q]===0?B(null,It,U,Ps,P,L,W,K,F):Tt&&(Fe<0||q!==ar[Fe]?$(It,U,Ps,2):Fe--)}}},$=(T,C,U,N,P=null)=>{const{el:L,type:W,transition:K,children:F,shapeFlag:q}=T;if(q&6){$(T.component.subTree,C,U,N);return}if(q&128){T.suspense.move(C,U,N);return}if(q&64){W.move(T,C,U,fn);return}if(W===un){s(L,C,U);for(let ee=0;ee<F.length;ee++)$(F[ee],C,U,N);s(T.anchor,C,U);return}if(W===Ol){ie(T,C,U);return}if(N!==2&&q&1&&K)if(N===0)K.persisted&&!L[Eu]?s(L,C,U):(K.beforeEnter(L),s(L,C,U),mn(()=>K.enter(L),P));else{const{leave:ee,delayLeave:he,afterLeave:fe}=K,Ee=()=>{T.ctx.isUnmounted?r(L):s(L,C,U)},$e=()=>{const Fe=L._isLeaving||!!L[Eu];L._isLeaving&&L[Eu](!0),K.persisted&&!Fe?Ee():ee(L,()=>{Ee(),fe&&fe()})};he?he(L,Ee,$e):$e()}else s(L,C,U)},Rt=(T,C,U,N=!1,P=!1)=>{const{type:L,props:W,ref:K,children:F,dynamicChildren:q,shapeFlag:de,patchFlag:ee,dirs:he,cacheIndex:fe,memo:Ee}=T;if(ee===-2&&(P=!1),K!=null&&(Ys(),ha(K,null,U,T,!0),Xs()),fe!=null&&(C.renderCache[fe]=void 0),de&256){C.ctx.deactivate(T);return}const $e=de&1&&he,Fe=!fa(T);let dt;if(Fe&&(dt=W&&W.onVnodeBeforeUnmount)&&fs(dt,C,T),de&6)Et(T.component,U,N);else{if(de&128){T.suspense.unmount(U,N);return}$e&&ci(T,null,C,"beforeUnmount"),de&64?T.type.remove(T,C,U,fn,N):q&&!q.hasOnce&&(L!==un||ee>0&&ee&64)?Ft(q,C,U,!1,!0):(L===un&&ee&384||!P&&de&16)&&Ft(F,C,U),N&&Fn(T)}const ct=Ee!=null&&fe==null;(Fe&&(dt=W&&W.onVnodeUnmounted)||$e||ct)&&mn(()=>{dt&&fs(dt,C,T),$e&&ci(T,null,C,"unmounted"),ct&&(T.el=null)},U)},Fn=T=>{const{type:C,el:U,anchor:N,transition:P}=T;if(C===un){In(U,N);return}if(C===Ol){oe(T);return}const L=()=>{r(U),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(T.shapeFlag&1&&P&&!P.persisted){const{leave:W,delayLeave:K}=P,F=()=>W(U,L);K?K(T.el,L,F):F()}else L()},In=(T,C)=>{let U;for(;T!==C;)U=A(T),r(T),T=U;r(C)},Et=(T,C,U)=>{const{bum:N,scope:P,job:L,subTree:W,um:K,m:F,a:q}=T;Vd(F),Vd(q),N&&Pl(N),P.stop(),L&&(L.flags|=8,Rt(W,T,C,U)),K&&mn(K,C),mn(()=>{T.isUnmounted=!0},C)},Ft=(T,C,U,N=!1,P=!1,L=0)=>{for(let W=L;W<T.length;W++)Rt(T[W],C,U,N,P)},lt=T=>{if(T.shapeFlag&6)return lt(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const C=A(T.anchor||T.el),U=C&&C[_E];return U?A(U):C};let yn=!1;const ce=(T,C,U)=>{let N;T==null?C._vnode&&(Rt(C._vnode,null,null,!0),N=C._vnode.component):B(C._vnode||null,T,C,null,null,null,U),C._vnode=T,yn||(yn=!0,Ad(N),Zg(),yn=!1)},fn={p:B,um:Rt,m:$,r:Fn,mt:st,mc:w,pc:De,pbc:R,n:lt,o:n};return{render:ce,hydrate:void 0,createApp:FE(ce)}}function bu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function eT(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Em(n,e,t=!1){const s=n.children,r=e.children;if(we(s)&&we(r))for(let i=0;i<s.length;i++){const a=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=qs(r[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Em(a,c)),c.type===Pc&&(c.patchFlag===-1&&(c=r[i]=qs(c)),c.el=a.el),c.type===xr&&!c.el&&(c.el=a.el)}}function tT(n){const e=n.slice(),t=[0];let s,r,i,a,c;const u=n.length;for(s=0;s<u;s++){const d=n[s];if(d!==0){if(r=t[t.length-1],n[r]<d){e[s]=r,t.push(s);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<d?i=c+1:a=c;d<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Tm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Tm(e)}function Vd(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function bm(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?bm(e.subTree):null}const Im=n=>n.__isSuspense;function nT(n,e){e&&e.pendingBranch?we(n)?e.effects.push(...n):e.effects.push(n):hE(n)}const un=Symbol.for("v-fgt"),Pc=Symbol.for("v-txt"),xr=Symbol.for("v-cmt"),Ol=Symbol.for("v-stc"),pa=[];let En=null;function ve(n=!1){pa.push(En=n?null:[])}function sT(){pa.pop(),En=pa[pa.length-1]||null}let ba=1;function Md(n,e=!1){ba+=n,n<0&&En&&e&&(En.hasOnce=!0)}function Am(n){return n.dynamicChildren=ba>0?En||Zi:null,sT(),ba>0&&En&&En.push(n),n}function Te(n,e,t,s,r,i){return Am(re(n,e,t,s,r,i,!0))}function rT(n,e,t,s,r){return Am(Tn(n,e,t,s,r,!0))}function Sm(n){return n?n.__v_isVNode===!0:!1}function ea(n,e){return n.type===e.type&&n.key===e.key}const Cm=({key:n})=>n??null,Nl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?mt(n)||tn(n)||ke(n)?{i:Vn,r:n,k:e,f:!!t}:n:null);function re(n,e=null,t=null,s=0,r=null,i=n===un?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Cm(e),ref:e&&Nl(e),scopeId:tm,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vn};return c?(Fh(u,t),i&128&&n.normalize(u)):t&&(u.shapeFlag|=mt(t)?8:16),ba>0&&!a&&En&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&En.push(u),u}const Tn=iT;function iT(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===kE)&&(n=xr),Sm(n)){const c=fo(n,e,!0);return t&&Fh(c,t),ba>0&&!i&&En&&(c.shapeFlag&6?En[En.indexOf(n)]=c:En.push(c)),c.patchFlag=-2,c}if(_T(n)&&(n=n.__vccOpts),e){e=oT(e);let{class:c,style:u}=e;c&&!mt(c)&&(e.class=Ma(c)),et(u)&&(Oh(u)&&!we(u)&&(u=nn({},u)),e.style=Ic(u))}const a=mt(n)?1:Im(n)?128:yE(n)?64:et(n)?4:ke(n)?2:0;return re(n,e,t,s,r,a,i,!0)}function oT(n){return n?Oh(n)||gm(n)?nn({},n):n:null}function fo(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:a,children:c,transition:u}=n,d=e?lT(r||{},e):r,g={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&Cm(d),ref:e&&e.ref?t&&i?we(i)?i.concat(Nl(e)):[i,Nl(e)]:Nl(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==un?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fo(n.ssContent),ssFallback:n.ssFallback&&fo(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&s&&xh(g,u.clone(g)),g}function Rm(n=" ",e=0){return Tn(Pc,null,n,e)}function aT(n,e){const t=Tn(Ol,null,n);return t.staticCount=e,t}function gn(n="",e=!1){return e?(ve(),rT(xr,null,n)):Tn(xr,null,n)}function ms(n){return n==null||typeof n=="boolean"?Tn(xr):we(n)?Tn(un,null,n.slice()):Sm(n)?qs(n):Tn(Pc,null,String(n))}function qs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fo(n)}function Fh(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(we(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Fh(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!gm(e)?e._ctx=Vn:r===3&&Vn&&(Vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Vn},t=32):(e=String(e),s&64?(t=16,e=[Rm(e)]):t=8);n.children=e,n.shapeFlag|=t}function lT(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ma([e.class,s.class]));else if(r==="style")e.style=Ic([e.style,s.style]);else if(yc(r)){const i=e[r],a=s[r];a&&i!==a&&!(we(i)&&i.includes(a))?e[r]=i?[].concat(i,a):a:a==null&&i==null&&!vc(r)&&(e[r]=a)}else r!==""&&(e[r]=s[r])}return e}function fs(n,e,t,s=null){Zn(n,e,7,[t,s])}const cT=um();let uT=0;function hT(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||cT,i={uid:uT++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(s,r),emitsOptions:hm(s,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:s.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jE.bind(null,i),n.ce&&n.ce(i),i}let hn=null;const fT=()=>hn||Vn;let Jl,Qu;{const n=bc(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(a=>a(i)):r[0](i)}};Jl=e("__VUE_INSTANCE_SETTERS__",t=>hn=t),Qu=e("__VUE_SSR_SETTERS__",t=>Ia=t)}const Ua=n=>{const e=hn;return Jl(n),n.scope.on(),()=>{n.scope.off(),Jl(e)}},Ld=()=>{hn&&hn.scope.off(),Jl(null)};function Pm(n){return n.vnode.shapeFlag&4}let Ia=!1;function dT(n,e=!1,t=!1){e&&Qu(e);const{props:s,children:r}=n.vnode,i=Pm(n);zE(n,s,i,e),JE(n,r,t||e);const a=i?pT(n,e):void 0;return e&&Qu(!1),a}function pT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,DE);const{setup:s}=t;if(s){Ys();const r=n.setupContext=s.length>1?mT(n):null,i=Ua(n),a=Fa(s,n,0,[n.props,r]),c=Cg(a);if(Xs(),i(),(c||n.sp)&&!fa(n)&&rm(n),c){if(a.then(Ld,Ld),e)return a.then(u=>{Fd(n,u)}).catch(u=>{Sc(u,n,0)});n.asyncDep=a}else Fd(n,a)}else km(n)}function Fd(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=Qg(e)),km(n)}function km(n,e,t){const s=n.type;n.render||(n.render=s.render||ys);{const r=Ua(n);Ys();try{OE(n)}finally{Xs(),r()}}}const gT={get(n,e){return Zt(n,"get",""),n[e]}};function mT(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,gT),slots:n.slots,emit:n.emit,expose:e}}function kc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qg(eE(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in da)return da[t](n)},has(e,t){return t in e||t in da}})):n.proxy}function _T(n){return ke(n)&&"__vccOpts"in n}const Bs=(n,e)=>oE(n,e,Ia),yT="3.5.35";/**
* @vue/runtime-dom v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ju;const Ud=typeof window<"u"&&window.trustedTypes;if(Ud)try{Ju=Ud.createPolicy("vue",{createHTML:n=>n})}catch{}const Dm=Ju?n=>Ju.createHTML(n):n=>n,vT="http://www.w3.org/2000/svg",wT="http://www.w3.org/1998/Math/MathML",Hs=typeof document<"u"?document:null,jd=Hs&&Hs.createElement("template"),ET={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?Hs.createElementNS(vT,n):e==="mathml"?Hs.createElementNS(wT,n):t?Hs.createElement(n,{is:t}):Hs.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>Hs.createTextNode(n),createComment:n=>Hs.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Hs.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const a=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{jd.innerHTML=Dm(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const c=jd.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},TT=Symbol("_vtc");function bT(n,e,t){const s=n[TT];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $d=Symbol("_vod"),IT=Symbol("_vsh"),AT=Symbol(""),ST=/(?:^|;)\s*display\s*:/;function CT(n,e,t){const s=n.style,r=mt(t);let i=!1;if(t&&!r){if(e)if(mt(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&sa(s,c,"")}else for(const a in e)t[a]==null&&sa(s,a,"");for(const a in t){a==="display"&&(i=!0);const c=t[a];c!=null?PT(n,a,!mt(e)&&e?e[a]:void 0,c)||sa(s,a,c):sa(s,a,"")}}else if(r){if(e!==t){const a=s[AT];a&&(t+=";"+a),s.cssText=t,i=ST.test(t)}}else e&&n.removeAttribute("style");$d in n&&(n[$d]=i?s.display:"",n[IT]&&(s.display="none"))}const Bd=/\s*!important$/;function sa(n,e,t){if(we(t))t.forEach(s=>sa(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=RT(n,e);Bd.test(t)?n.setProperty(Ii(s),t.replace(Bd,""),"important"):n[s]=t}}const Hd=["Webkit","Moz","ms"],Iu={};function RT(n,e){const t=Iu[e];if(t)return t;let s=Gn(e);if(s!=="filter"&&s in n)return Iu[e]=s;s=kg(s);for(let r=0;r<Hd.length;r++){const i=Hd[r]+s;if(i in n)return Iu[e]=i}return e}function PT(n,e,t,s){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&mt(s)&&t===s}const qd="http://www.w3.org/1999/xlink";function Wd(n,e,t,s,r,i=Dw(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qd,e.slice(6,e.length)):n.setAttributeNS(qd,e,t):t==null||i&&!Og(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Is(t)?String(t):t)}function zd(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Dm(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?n.type==="checkbox"?"on":"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Og(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function di(n,e,t,s){n.addEventListener(e,t,s)}function kT(n,e,t,s){n.removeEventListener(e,t,s)}const Kd=Symbol("_vei");function DT(n,e,t,s,r=null){const i=n[Kd]||(n[Kd]={}),a=i[e];if(s&&a)a.value=s;else{const[c,u]=OT(e);if(s){const d=i[e]=VT(s,r);di(n,c,d,u)}else a&&(kT(n,c,a,u),i[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function OT(n){let e;if(Gd.test(n)){e={};let s;for(;s=n.match(Gd);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ii(n.slice(2)),e]}let Au=0;const NT=Promise.resolve(),xT=()=>Au||(NT.then(()=>Au=0),Au=Date.now());function VT(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;const r=t.value;if(we(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const a=r.slice(),c=[s];for(let u=0;u<a.length&&!s._stopped;u++){const d=a[u];d&&Zn(d,e,5,c)}}else Zn(r,e,5,[s])};return t.value=n,t.attached=xT(),t}const Qd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,MT=(n,e,t,s,r,i)=>{const a=r==="svg";e==="class"?bT(n,s,a):e==="style"?CT(n,t,s):yc(e)?vc(e)||DT(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):LT(n,e,s,a))?(zd(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wd(n,e,s,a,i,e!=="value")):n._isVueCE&&(FT(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!mt(s)))?zd(n,Gn(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Wd(n,e,s,a))};function LT(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qd(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qd(e)&&mt(t)?!1:e in n}function FT(n,e){const t=n._def.props;if(!t)return!1;const s=Gn(e);return Array.isArray(t)?t.some(r=>Gn(r)===s):Object.keys(t).some(r=>Gn(r)===s)}const Yl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return we(e)?t=>Pl(e,t):e};function UT(n){n.target.composing=!0}function Jd(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const so=Symbol("_assign");function Yd(n,e,t){return e&&(n=n.trim()),t&&(n=Tc(n)),n}const jT={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[so]=Yl(r);const i=s||r.props&&r.props.type==="number";di(n,e?"change":"input",a=>{a.target.composing||n[so](Yd(n.value,t,i))}),(t||i)&&di(n,"change",()=>{n.value=Yd(n.value,t,i)}),e||(di(n,"compositionstart",UT),di(n,"compositionend",Jd),di(n,"change",Jd))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},a){if(n[so]=Yl(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?Tc(n.value):n.value,u=e??"";if(c===u)return;const d=n.getRootNode();(d instanceof Document||d instanceof ShadowRoot)&&d.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===u)||(n.value=u)}},Xd={deep:!0,created(n,{value:e,modifiers:{number:t}},s){const r=wc(e);di(n,"change",()=>{const i=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Tc(Xl(a)):Xl(a));n[so](n.multiple?r?new Set(i):i:i[0]),n._assigning=!0,Yg(()=>{n._assigning=!1})}),n[so]=Yl(s)},mounted(n,{value:e}){Zd(n,e)},beforeUpdate(n,e,t){n[so]=Yl(t)},updated(n,{value:e}){n._assigning||Zd(n,e)}};function Zd(n,e){const t=n.multiple,s=we(e);if(!(t&&!s&&!wc(e))){for(let r=0,i=n.options.length;r<i;r++){const a=n.options[r],c=Xl(a);if(t)if(s){const u=typeof c;u==="string"||u==="number"?a.selected=e.some(d=>String(d)===String(c)):a.selected=Nw(e,c)>-1}else a.selected=e.has(c);else if(La(Xl(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Xl(n){return"_value"in n?n._value:n.value}const $T=["ctrl","shift","alt","meta"],BT={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>$T.some(t=>n[`${t}Key`]&&!e.includes(t))},HT=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=((r,...i)=>{for(let a=0;a<e.length;a++){const c=BT[e[a]];if(c&&c(r,e))return}return n(r,...i)}))},qT=nn({patchProp:MT},ET);let ep;function WT(){return ep||(ep=XE(qT))}const zT=((...n)=>{const e=WT().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=GT(s);if(!r)return;const i=e._component;!ke(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,KT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function KT(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function GT(n){return mt(n)?document.querySelector(n):n}var xl={exports:{}};/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var QT=xl.exports,tp;function JT(){return tp||(tp=1,(function(n,e){(function(t,s){n.exports=s()})(QT,function(){const t=new Map,s={set(m,l,f){t.has(m)||t.set(m,new Map);const y=t.get(m);y.has(l)||y.size===0?y.set(l,f):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`)},get:(m,l)=>t.has(m)&&t.get(m).get(l)||null,remove(m,l){if(!t.has(m))return;const f=t.get(m);f.delete(l),f.size===0&&t.delete(m)}},r="transitionend",i=m=>(m&&window.CSS&&window.CSS.escape&&(m=m.replace(/#([^\s"#']+)/g,(l,f)=>`#${CSS.escape(f)}`)),m),a=m=>m==null?`${m}`:Object.prototype.toString.call(m).match(/\s([a-z]+)/i)[1].toLowerCase(),c=m=>{m.dispatchEvent(new Event(r))},u=m=>!(!m||typeof m!="object")&&(m.jquery!==void 0&&(m=m[0]),m.nodeType!==void 0),d=m=>u(m)?m.jquery?m[0]:m:typeof m=="string"&&m.length>0?document.querySelector(i(m)):null,g=m=>{if(!u(m)||m.getClientRects().length===0)return!1;const l=getComputedStyle(m).getPropertyValue("visibility")==="visible",f=m.closest("details:not([open])");if(!f)return l;if(f!==m){const y=m.closest("summary");if(y&&y.parentNode!==f||y===null)return!1}return l},_=m=>!m||m.nodeType!==Node.ELEMENT_NODE||!!m.classList.contains("disabled")||(m.disabled!==void 0?m.disabled:m.hasAttribute("disabled")&&m.getAttribute("disabled")!=="false"),A=m=>{if(!document.documentElement.attachShadow)return null;if(typeof m.getRootNode=="function"){const l=m.getRootNode();return l instanceof ShadowRoot?l:null}return m instanceof ShadowRoot?m:m.parentNode?A(m.parentNode):null},x=()=>{},Q=m=>{m.offsetHeight},B=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,J=[],ne=()=>document.documentElement.dir==="rtl",Z=m=>{var l;l=()=>{const f=B();if(f){const y=m.NAME,k=f.fn[y];f.fn[y]=m.jQueryInterface,f.fn[y].Constructor=m,f.fn[y].noConflict=()=>(f.fn[y]=k,m.jQueryInterface)}},document.readyState==="loading"?(J.length||document.addEventListener("DOMContentLoaded",()=>{for(const f of J)f()}),J.push(l)):l()},ie=(m,l=[],f=m)=>typeof m=="function"?m.call(...l):f,oe=(m,l,f=!0)=>{if(!f)return void ie(m);const y=(j=>{if(!j)return 0;let{transitionDuration:z,transitionDelay:X}=window.getComputedStyle(j);const ae=Number.parseFloat(z),le=Number.parseFloat(X);return ae||le?(z=z.split(",")[0],X=X.split(",")[0],1e3*(Number.parseFloat(z)+Number.parseFloat(X))):0})(l)+5;let k=!1;const D=({target:j})=>{j===l&&(k=!0,l.removeEventListener(r,D),ie(m))};l.addEventListener(r,D),setTimeout(()=>{k||c(l)},y)},Ce=(m,l,f,y)=>{const k=m.length;let D=m.indexOf(l);return D===-1?!f&&y?m[k-1]:m[0]:(D+=f?1:-1,y&&(D=(D+k)%k),m[Math.max(0,Math.min(D,k-1))])},Be=/[^.]*(?=\..*)\.|.*/,S=/\..*/,w=/::\d+$/,b={};let R=1;const I={mouseenter:"mouseover",mouseleave:"mouseout"},O=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function E(m,l){return l&&`${l}::${R++}`||m.uidEvent||R++}function st(m){const l=E(m);return m.uidEvent=l,b[l]=b[l]||{},b[l]}function qt(m,l,f=null){return Object.values(m).find(y=>y.callable===l&&y.delegationSelector===f)}function at(m,l,f){const y=typeof l=="string",k=y?f:l||f;let D=Ln(m);return O.has(D)||(D=m),[y,k,D]}function He(m,l,f,y,k){if(typeof l!="string"||!m)return;let[D,j,z]=at(l,f,y);l in I&&(j=(Ie=>function(ye){if(!ye.relatedTarget||ye.relatedTarget!==ye.delegateTarget&&!ye.delegateTarget.contains(ye.relatedTarget))return Ie.call(this,ye)})(j));const X=st(m),ae=X[z]||(X[z]={}),le=qt(ae,j,D?f:null);if(le)return void(le.oneOff=le.oneOff&&k);const te=E(j,l.replace(Be,"")),Pe=D?(function(ge,Ie,ye){return function Ae(Xe){const it=ge.querySelectorAll(Ie);for(let{target:Ne}=Xe;Ne&&Ne!==this;Ne=Ne.parentNode)for(const qe of it)if(qe===Ne)return Rt(Xe,{delegateTarget:Ne}),Ae.oneOff&&$.off(ge,Xe.type,Ie,ye),ye.apply(Ne,[Xe])}})(m,f,j):(function(ge,Ie){return function ye(Ae){return Rt(Ae,{delegateTarget:ge}),ye.oneOff&&$.off(ge,Ae.type,Ie),Ie.apply(ge,[Ae])}})(m,j);Pe.delegationSelector=D?f:null,Pe.callable=j,Pe.oneOff=k,Pe.uidEvent=te,ae[te]=Pe,m.addEventListener(z,Pe,D)}function De(m,l,f,y,k){const D=qt(l[f],y,k);D&&(m.removeEventListener(f,D,!!k),delete l[f][D.uidEvent])}function Ct(m,l,f,y){const k=l[f]||{};for(const[D,j]of Object.entries(k))D.includes(y)&&De(m,l,f,j.callable,j.delegationSelector)}function Ln(m){return m=m.replace(S,""),I[m]||m}const $={on(m,l,f,y){He(m,l,f,y,!1)},one(m,l,f,y){He(m,l,f,y,!0)},off(m,l,f,y){if(typeof l!="string"||!m)return;const[k,D,j]=at(l,f,y),z=j!==l,X=st(m),ae=X[j]||{},le=l.startsWith(".");if(D===void 0){if(le)for(const te of Object.keys(X))Ct(m,X,te,l.slice(1));for(const[te,Pe]of Object.entries(ae)){const ge=te.replace(w,"");z&&!l.includes(ge)||De(m,X,j,Pe.callable,Pe.delegationSelector)}}else{if(!Object.keys(ae).length)return;De(m,X,j,D,k?f:null)}},trigger(m,l,f){if(typeof l!="string"||!m)return null;const y=B();let k=null,D=!0,j=!0,z=!1;l!==Ln(l)&&y&&(k=y.Event(l,f),y(m).trigger(k),D=!k.isPropagationStopped(),j=!k.isImmediatePropagationStopped(),z=k.isDefaultPrevented());const X=Rt(new Event(l,{bubbles:D,cancelable:!0}),f);return z&&X.preventDefault(),j&&m.dispatchEvent(X),X.defaultPrevented&&k&&k.preventDefault(),X}};function Rt(m,l={}){for(const[f,y]of Object.entries(l))try{m[f]=y}catch{Object.defineProperty(m,f,{configurable:!0,get:()=>y})}return m}function Fn(m){if(m==="true")return!0;if(m==="false")return!1;if(m===Number(m).toString())return Number(m);if(m===""||m==="null")return null;if(typeof m!="string")return m;try{return JSON.parse(decodeURIComponent(m))}catch{return m}}function In(m){return m.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const Et={setDataAttribute(m,l,f){m.setAttribute(`data-bs-${In(l)}`,f)},removeDataAttribute(m,l){m.removeAttribute(`data-bs-${In(l)}`)},getDataAttributes(m){if(!m)return{};const l={},f=Object.keys(m.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of f){let k=y.replace(/^bs/,"");k=k.charAt(0).toLowerCase()+k.slice(1),l[k]=Fn(m.dataset[y])}return l},getDataAttribute:(m,l)=>Fn(m.getAttribute(`data-bs-${In(l)}`))};class Ft{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,f){const y=u(f)?Et.getDataAttribute(f,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...u(f)?Et.getDataAttributes(f):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,f=this.constructor.DefaultType){for(const[y,k]of Object.entries(f)){const D=l[y],j=u(D)?"element":a(D);if(!new RegExp(k).test(j))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${j}" but expected type "${k}".`)}}}class lt extends Ft{constructor(l,f){super(),(l=d(l))&&(this._element=l,this._config=this._getConfig(f),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),$.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,f,y=!0){oe(l,f,y)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return s.get(d(l),this.DATA_KEY)}static getOrCreateInstance(l,f={}){return this.getInstance(l)||new this(l,typeof f=="object"?f:null)}static get VERSION(){return"5.3.8"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const yn=m=>{let l=m.getAttribute("data-bs-target");if(!l||l==="#"){let f=m.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),l=f&&f!=="#"?f.trim():null}return l?l.split(",").map(f=>i(f)).join(","):null},ce={find:(m,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,m)),findOne:(m,l=document.documentElement)=>Element.prototype.querySelector.call(l,m),children:(m,l)=>[].concat(...m.children).filter(f=>f.matches(l)),parents(m,l){const f=[];let y=m.parentNode.closest(l);for(;y;)f.push(y),y=y.parentNode.closest(l);return f},prev(m,l){let f=m.previousElementSibling;for(;f;){if(f.matches(l))return[f];f=f.previousElementSibling}return[]},next(m,l){let f=m.nextElementSibling;for(;f;){if(f.matches(l))return[f];f=f.nextElementSibling}return[]},focusableChildren(m){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(f=>`${f}:not([tabindex^="-"])`).join(",");return this.find(l,m).filter(f=>!_(f)&&g(f))},getSelectorFromElement(m){const l=yn(m);return l&&ce.findOne(l)?l:null},getElementFromSelector(m){const l=yn(m);return l?ce.findOne(l):null},getMultipleElementsFromSelector(m){const l=yn(m);return l?ce.find(l):[]}},fn=(m,l="hide")=>{const f=`click.dismiss${m.EVENT_KEY}`,y=m.NAME;$.on(document,f,`[data-bs-dismiss="${y}"]`,function(k){if(["A","AREA"].includes(this.tagName)&&k.preventDefault(),_(this))return;const D=ce.getElementFromSelector(this)||this.closest(`.${y}`);m.getOrCreateInstance(D)[l]()})},Br=".bs.alert",T=`close${Br}`,C=`closed${Br}`;class U extends lt{static get NAME(){return"alert"}close(){if($.trigger(this._element,T).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),$.trigger(this._element,C),this.dispose()}static jQueryInterface(l){return this.each(function(){const f=U.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}fn(U,"close"),Z(U);const N='[data-bs-toggle="button"]';class P extends lt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const f=P.getOrCreateInstance(this);l==="toggle"&&f[l]()})}}$.on(document,"click.bs.button.data-api",N,m=>{m.preventDefault();const l=m.target.closest(N);P.getOrCreateInstance(l).toggle()}),Z(P);const L=".bs.swipe",W=`touchstart${L}`,K=`touchmove${L}`,F=`touchend${L}`,q=`pointerdown${L}`,de=`pointerup${L}`,ee={endCallback:null,leftCallback:null,rightCallback:null},he={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class fe extends Ft{constructor(l,f){super(),this._element=l,l&&fe.isSupported()&&(this._config=this._getConfig(f),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ee}static get DefaultType(){return he}static get NAME(){return"swipe"}dispose(){$.off(this._element,L)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),ie(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const f=l/this._deltaX;this._deltaX=0,f&&ie(f>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?($.on(this._element,q,l=>this._start(l)),$.on(this._element,de,l=>this._end(l)),this._element.classList.add("pointer-event")):($.on(this._element,W,l=>this._start(l)),$.on(this._element,K,l=>this._move(l)),$.on(this._element,F,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ee=".bs.carousel",$e=".data-api",Fe="ArrowLeft",dt="ArrowRight",ct="next",Tt="prev",bt="left",Wt="right",ar=`slide${Ee}`,_t=`slid${Ee}`,It=`keydown${Ee}`,Hr=`mouseenter${Ee}`,Ps=`mouseleave${Ee}`,Xa=`dragstart${Ee}`,qr=`load${Ee}${$e}`,Za=`click${Ee}${$e}`,Nt="carousel",Wr="active",lr=".active",cr=".carousel-item",Qc=lr+cr,Jc={[Fe]:Wt,[dt]:bt},ur={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Yc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class hr extends lt{constructor(l,f){super(l,f),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ce.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Nt&&this.cycle()}static get Default(){return ur}static get DefaultType(){return Yc}static get NAME(){return"carousel"}next(){this._slide(ct)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(Tt)}pause(){this._isSliding&&c(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?$.one(this._element,_t,()=>this.cycle()):this.cycle())}to(l){const f=this._getItems();if(l>f.length-1||l<0)return;if(this._isSliding)return void $.one(this._element,_t,()=>this.to(l));const y=this._getItemIndex(this._getActive());if(y===l)return;const k=l>y?ct:Tt;this._slide(k,f[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&$.on(this._element,It,l=>this._keydown(l)),this._config.pause==="hover"&&($.on(this._element,Hr,()=>this.pause()),$.on(this._element,Ps,()=>this._maybeEnableCycle())),this._config.touch&&fe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const f of ce.find(".carousel-item img",this._element))$.on(f,Xa,y=>y.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(bt)),rightCallback:()=>this._slide(this._directionToOrder(Wt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new fe(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const f=Jc[l.key];f&&(l.preventDefault(),this._slide(this._directionToOrder(f)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const f=ce.findOne(lr,this._indicatorsElement);f.classList.remove(Wr),f.removeAttribute("aria-current");const y=ce.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);y&&(y.classList.add(Wr),y.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const f=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=f||this._config.defaultInterval}_slide(l,f=null){if(this._isSliding)return;const y=this._getActive(),k=l===ct,D=f||Ce(this._getItems(),y,k,this._config.wrap);if(D===y)return;const j=this._getItemIndex(D),z=te=>$.trigger(this._element,te,{relatedTarget:D,direction:this._orderToDirection(l),from:this._getItemIndex(y),to:j});if(z(ar).defaultPrevented||!y||!D)return;const X=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(j),this._activeElement=D;const ae=k?"carousel-item-start":"carousel-item-end",le=k?"carousel-item-next":"carousel-item-prev";D.classList.add(le),Q(D),y.classList.add(ae),D.classList.add(ae),this._queueCallback(()=>{D.classList.remove(ae,le),D.classList.add(Wr),y.classList.remove(Wr,le,ae),this._isSliding=!1,z(_t)},y,this._isAnimated()),X&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return ce.findOne(Qc,this._element)}_getItems(){return ce.find(cr,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return ne()?l===bt?Tt:ct:l===bt?ct:Tt}_orderToDirection(l){return ne()?l===Tt?bt:Wt:l===Tt?Wt:bt}static jQueryInterface(l){return this.each(function(){const f=hr.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}}else f.to(l)})}}$.on(document,Za,"[data-bs-slide], [data-bs-slide-to]",function(m){const l=ce.getElementFromSelector(this);if(!l||!l.classList.contains(Nt))return;m.preventDefault();const f=hr.getOrCreateInstance(l),y=this.getAttribute("data-bs-slide-to");return y?(f.to(y),void f._maybeEnableCycle()):Et.getDataAttribute(this,"slide")==="next"?(f.next(),void f._maybeEnableCycle()):(f.prev(),void f._maybeEnableCycle())}),$.on(window,qr,()=>{const m=ce.find('[data-bs-ride="carousel"]');for(const l of m)hr.getOrCreateInstance(l)}),Z(hr);const es=".bs.collapse",el=`show${es}`,tl=`shown${es}`,ko=`hide${es}`,zr=`hidden${es}`,Xc=`click${es}.data-api`,An="show",ks="collapse",Kr="collapsing",Do=`:scope .${ks} .${ks}`,Gr='[data-bs-toggle="collapse"]',nl={parent:null,toggle:!0},Zc={parent:"(null|element)",toggle:"boolean"};class Ds extends lt{constructor(l,f){super(l,f),this._isTransitioning=!1,this._triggerArray=[];const y=ce.find(Gr);for(const k of y){const D=ce.getSelectorFromElement(k),j=ce.find(D).filter(z=>z===this._element);D!==null&&j.length&&this._triggerArray.push(k)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return nl}static get DefaultType(){return Zc}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(k=>k!==this._element).map(k=>Ds.getOrCreateInstance(k,{toggle:!1}))),l.length&&l[0]._isTransitioning||$.trigger(this._element,el).defaultPrevented)return;for(const k of l)k.hide();const f=this._getDimension();this._element.classList.remove(ks),this._element.classList.add(Kr),this._element.style[f]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const y=`scroll${f[0].toUpperCase()+f.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(ks,An),this._element.style[f]="",$.trigger(this._element,tl)},this._element,!0),this._element.style[f]=`${this._element[y]}px`}hide(){if(this._isTransitioning||!this._isShown()||$.trigger(this._element,ko).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,Q(this._element),this._element.classList.add(Kr),this._element.classList.remove(ks,An);for(const f of this._triggerArray){const y=ce.getElementFromSelector(f);y&&!this._isShown(y)&&this._addAriaAndCollapsedClass([f],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Kr),this._element.classList.add(ks),$.trigger(this._element,zr)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(An)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=d(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Gr);for(const f of l){const y=ce.getElementFromSelector(f);y&&this._addAriaAndCollapsedClass([f],this._isShown(y))}}_getFirstLevelChildren(l){const f=ce.find(Do,this._config.parent);return ce.find(l,this._config.parent).filter(y=>!f.includes(y))}_addAriaAndCollapsedClass(l,f){if(l.length)for(const y of l)y.classList.toggle("collapsed",!f),y.setAttribute("aria-expanded",f)}static jQueryInterface(l){const f={};return typeof l=="string"&&/show|hide/.test(l)&&(f.toggle=!1),this.each(function(){const y=Ds.getOrCreateInstance(this,f);if(typeof l=="string"){if(y[l]===void 0)throw new TypeError(`No method named "${l}"`);y[l]()}})}}$.on(document,Xc,Gr,function(m){(m.target.tagName==="A"||m.delegateTarget&&m.delegateTarget.tagName==="A")&&m.preventDefault();for(const l of ce.getMultipleElementsFromSelector(this))Ds.getOrCreateInstance(l,{toggle:!1}).toggle()}),Z(Ds);var Ut="top",xt="bottom",zt="right",Pt="left",ts="auto",dn=[Ut,xt,zt,Pt],Un="start",fr="end",Oo="clippingParents",Pi="viewport",Os="popper",ki="reference",Qr=dn.reduce(function(m,l){return m.concat([l+"-"+Un,l+"-"+fr])},[]),Di=[].concat(dn,[ts]).reduce(function(m,l){return m.concat([l,l+"-"+Un,l+"-"+fr])},[]),No="beforeRead",xo="read",sl="afterRead",jn="beforeMain",vn="main",dr="afterMain",pr="beforeWrite",Oi="write",Ye="afterWrite",Jr=[No,xo,sl,jn,vn,dr,pr,Oi,Ye];function Kt(m){return m?(m.nodeName||"").toLowerCase():null}function kt(m){if(m==null)return window;if(m.toString()!=="[object Window]"){var l=m.ownerDocument;return l&&l.defaultView||window}return m}function Ns(m){return m instanceof kt(m).Element||m instanceof Element}function rn(m){return m instanceof kt(m).HTMLElement||m instanceof HTMLElement}function Vo(m){return typeof ShadowRoot<"u"&&(m instanceof kt(m).ShadowRoot||m instanceof ShadowRoot)}const Mo={name:"applyStyles",enabled:!0,phase:"write",fn:function(m){var l=m.state;Object.keys(l.elements).forEach(function(f){var y=l.styles[f]||{},k=l.attributes[f]||{},D=l.elements[f];rn(D)&&Kt(D)&&(Object.assign(D.style,y),Object.keys(k).forEach(function(j){var z=k[j];z===!1?D.removeAttribute(j):D.setAttribute(j,z===!0?"":z)}))})},effect:function(m){var l=m.state,f={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,f.popper),l.styles=f,l.elements.arrow&&Object.assign(l.elements.arrow.style,f.arrow),function(){Object.keys(l.elements).forEach(function(y){var k=l.elements[y],D=l.attributes[y]||{},j=Object.keys(l.styles.hasOwnProperty(y)?l.styles[y]:f[y]).reduce(function(z,X){return z[X]="",z},{});rn(k)&&Kt(k)&&(Object.assign(k.style,j),Object.keys(D).forEach(function(z){k.removeAttribute(z)}))})}},requires:["computeStyles"]};function Sn(m){return m.split("-")[0]}var xs=Math.max,ns=Math.min,pn=Math.round;function Ni(){var m=navigator.userAgentData;return m!=null&&m.brands&&Array.isArray(m.brands)?m.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function Lo(){return!/^((?!chrome|android).)*safari/i.test(Ni())}function Vs(m,l,f){l===void 0&&(l=!1),f===void 0&&(f=!1);var y=m.getBoundingClientRect(),k=1,D=1;l&&rn(m)&&(k=m.offsetWidth>0&&pn(y.width)/m.offsetWidth||1,D=m.offsetHeight>0&&pn(y.height)/m.offsetHeight||1);var j=(Ns(m)?kt(m):window).visualViewport,z=!Lo()&&f,X=(y.left+(z&&j?j.offsetLeft:0))/k,ae=(y.top+(z&&j?j.offsetTop:0))/D,le=y.width/k,te=y.height/D;return{width:le,height:te,top:ae,right:X+le,bottom:ae+te,left:X,x:X,y:ae}}function xi(m){var l=Vs(m),f=m.offsetWidth,y=m.offsetHeight;return Math.abs(l.width-f)<=1&&(f=l.width),Math.abs(l.height-y)<=1&&(y=l.height),{x:m.offsetLeft,y:m.offsetTop,width:f,height:y}}function Fo(m,l){var f=l.getRootNode&&l.getRootNode();if(m.contains(l))return!0;if(f&&Vo(f)){var y=l;do{if(y&&m.isSameNode(y))return!0;y=y.parentNode||y.host}while(y)}return!1}function Gt(m){return kt(m).getComputedStyle(m)}function eu(m){return["table","td","th"].indexOf(Kt(m))>=0}function ss(m){return((Ns(m)?m.ownerDocument:m.document)||window.document).documentElement}function Vi(m){return Kt(m)==="html"?m:m.assignedSlot||m.parentNode||(Vo(m)?m.host:null)||ss(m)}function $n(m){return rn(m)&&Gt(m).position!=="fixed"?m.offsetParent:null}function Yr(m){for(var l=kt(m),f=$n(m);f&&eu(f)&&Gt(f).position==="static";)f=$n(f);return f&&(Kt(f)==="html"||Kt(f)==="body"&&Gt(f).position==="static")?l:f||(function(y){var k=/firefox/i.test(Ni());if(/Trident/i.test(Ni())&&rn(y)&&Gt(y).position==="fixed")return null;var D=Vi(y);for(Vo(D)&&(D=D.host);rn(D)&&["html","body"].indexOf(Kt(D))<0;){var j=Gt(D);if(j.transform!=="none"||j.perspective!=="none"||j.contain==="paint"||["transform","perspective"].indexOf(j.willChange)!==-1||k&&j.willChange==="filter"||k&&j.filter&&j.filter!=="none")return D;D=D.parentNode}return null})(m)||l}function Xr(m){return["top","bottom"].indexOf(m)>=0?"x":"y"}function rs(m,l,f){return xs(m,ns(l,f))}function Uo(m){return Object.assign({},{top:0,right:0,bottom:0,left:0},m)}function gr(m,l){return l.reduce(function(f,y){return f[y]=m,f},{})}const mr={name:"arrow",enabled:!0,phase:"main",fn:function(m){var l,f=m.state,y=m.name,k=m.options,D=f.elements.arrow,j=f.modifiersData.popperOffsets,z=Sn(f.placement),X=Xr(z),ae=[Pt,zt].indexOf(z)>=0?"height":"width";if(D&&j){var le=(function(Ze,Qe){return Uo(typeof(Ze=typeof Ze=="function"?Ze(Object.assign({},Qe.rects,{placement:Qe.placement})):Ze)!="number"?Ze:gr(Ze,dn))})(k.padding,f),te=xi(D),Pe=X==="y"?Ut:Pt,ge=X==="y"?xt:zt,Ie=f.rects.reference[ae]+f.rects.reference[X]-j[X]-f.rects.popper[ae],ye=j[X]-f.rects.reference[X],Ae=Yr(D),Xe=Ae?X==="y"?Ae.clientHeight||0:Ae.clientWidth||0:0,it=Ie/2-ye/2,Ne=le[Pe],qe=Xe-te[ae]-le[ge],Oe=Xe/2-te[ae]/2+it,Le=rs(Ne,Oe,qe),Ge=X;f.modifiersData[y]=((l={})[Ge]=Le,l.centerOffset=Le-Oe,l)}},effect:function(m){var l=m.state,f=m.options.element,y=f===void 0?"[data-popper-arrow]":f;y!=null&&(typeof y!="string"||(y=l.elements.popper.querySelector(y)))&&Fo(l.elements.popper,y)&&(l.elements.arrow=y)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ms(m){return m.split("-")[1]}var jo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ut(m){var l,f=m.popper,y=m.popperRect,k=m.placement,D=m.variation,j=m.offsets,z=m.position,X=m.gpuAcceleration,ae=m.adaptive,le=m.roundOffsets,te=m.isFixed,Pe=j.x,ge=Pe===void 0?0:Pe,Ie=j.y,ye=Ie===void 0?0:Ie,Ae=typeof le=="function"?le({x:ge,y:ye}):{x:ge,y:ye};ge=Ae.x,ye=Ae.y;var Xe=j.hasOwnProperty("x"),it=j.hasOwnProperty("y"),Ne=Pt,qe=Ut,Oe=window;if(ae){var Le=Yr(f),Ge="clientHeight",Ze="clientWidth";Le===kt(f)&&Gt(Le=ss(f)).position!=="static"&&z==="absolute"&&(Ge="scrollHeight",Ze="scrollWidth"),(k===Ut||(k===Pt||k===zt)&&D===fr)&&(qe=xt,ye-=(te&&Le===Oe&&Oe.visualViewport?Oe.visualViewport.height:Le[Ge])-y.height,ye*=X?1:-1),k!==Pt&&(k!==Ut&&k!==xt||D!==fr)||(Ne=zt,ge-=(te&&Le===Oe&&Oe.visualViewport?Oe.visualViewport.width:Le[Ze])-y.width,ge*=X?1:-1)}var Qe,vt=Object.assign({position:z},ae&&jo),wn=le===!0?(function(qn,on){var kn=qn.x,Dn=qn.y,gt=on.devicePixelRatio||1;return{x:pn(kn*gt)/gt||0,y:pn(Dn*gt)/gt||0}})({x:ge,y:ye},kt(f)):{x:ge,y:ye};return ge=wn.x,ye=wn.y,X?Object.assign({},vt,((Qe={})[qe]=it?"0":"",Qe[Ne]=Xe?"0":"",Qe.transform=(Oe.devicePixelRatio||1)<=1?"translate("+ge+"px, "+ye+"px)":"translate3d("+ge+"px, "+ye+"px, 0)",Qe)):Object.assign({},vt,((l={})[qe]=it?ye+"px":"",l[Ne]=Xe?ge+"px":"",l.transform="",l))}const $o={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(m){var l=m.state,f=m.options,y=f.gpuAcceleration,k=y===void 0||y,D=f.adaptive,j=D===void 0||D,z=f.roundOffsets,X=z===void 0||z,ae={placement:Sn(l.placement),variation:Ms(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:k,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,ut(Object.assign({},ae,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:j,roundOffsets:X})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,ut(Object.assign({},ae,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:X})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var Mi={passive:!0};const Li={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(m){var l=m.state,f=m.instance,y=m.options,k=y.scroll,D=k===void 0||k,j=y.resize,z=j===void 0||j,X=kt(l.elements.popper),ae=[].concat(l.scrollParents.reference,l.scrollParents.popper);return D&&ae.forEach(function(le){le.addEventListener("scroll",f.update,Mi)}),z&&X.addEventListener("resize",f.update,Mi),function(){D&&ae.forEach(function(le){le.removeEventListener("scroll",f.update,Mi)}),z&&X.removeEventListener("resize",f.update,Mi)}},data:{}};var rl={left:"right",right:"left",bottom:"top",top:"bottom"};function Zr(m){return m.replace(/left|right|bottom|top/g,function(l){return rl[l]})}var Fi={start:"end",end:"start"};function Bn(m){return m.replace(/start|end/g,function(l){return Fi[l]})}function Ui(m){var l=kt(m);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function Bo(m){return Vs(ss(m)).left+Ui(m).scrollLeft}function Ls(m){var l=Gt(m),f=l.overflow,y=l.overflowX,k=l.overflowY;return/auto|scroll|overlay|hidden/.test(f+k+y)}function Ho(m){return["html","body","#document"].indexOf(Kt(m))>=0?m.ownerDocument.body:rn(m)&&Ls(m)?m:Ho(Vi(m))}function Fs(m,l){var f;l===void 0&&(l=[]);var y=Ho(m),k=y===((f=m.ownerDocument)==null?void 0:f.body),D=kt(y),j=k?[D].concat(D.visualViewport||[],Ls(y)?y:[]):y,z=l.concat(j);return k?z:z.concat(Fs(Vi(j)))}function _r(m){return Object.assign({},m,{left:m.x,top:m.y,right:m.x+m.width,bottom:m.y+m.height})}function qo(m,l,f){return l===Pi?_r((function(y,k){var D=kt(y),j=ss(y),z=D.visualViewport,X=j.clientWidth,ae=j.clientHeight,le=0,te=0;if(z){X=z.width,ae=z.height;var Pe=Lo();(Pe||!Pe&&k==="fixed")&&(le=z.offsetLeft,te=z.offsetTop)}return{width:X,height:ae,x:le+Bo(y),y:te}})(m,f)):Ns(l)?(function(y,k){var D=Vs(y,!1,k==="fixed");return D.top=D.top+y.clientTop,D.left=D.left+y.clientLeft,D.bottom=D.top+y.clientHeight,D.right=D.left+y.clientWidth,D.width=y.clientWidth,D.height=y.clientHeight,D.x=D.left,D.y=D.top,D})(l,f):_r((function(y){var k,D=ss(y),j=Ui(y),z=(k=y.ownerDocument)==null?void 0:k.body,X=xs(D.scrollWidth,D.clientWidth,z?z.scrollWidth:0,z?z.clientWidth:0),ae=xs(D.scrollHeight,D.clientHeight,z?z.scrollHeight:0,z?z.clientHeight:0),le=-j.scrollLeft+Bo(y),te=-j.scrollTop;return Gt(z||D).direction==="rtl"&&(le+=xs(D.clientWidth,z?z.clientWidth:0)-X),{width:X,height:ae,x:le,y:te}})(ss(m)))}function ei(m){var l,f=m.reference,y=m.element,k=m.placement,D=k?Sn(k):null,j=k?Ms(k):null,z=f.x+f.width/2-y.width/2,X=f.y+f.height/2-y.height/2;switch(D){case Ut:l={x:z,y:f.y-y.height};break;case xt:l={x:z,y:f.y+f.height};break;case zt:l={x:f.x+f.width,y:X};break;case Pt:l={x:f.x-y.width,y:X};break;default:l={x:f.x,y:f.y}}var ae=D?Xr(D):null;if(ae!=null){var le=ae==="y"?"height":"width";switch(j){case Un:l[ae]=l[ae]-(f[le]/2-y[le]/2);break;case fr:l[ae]=l[ae]+(f[le]/2-y[le]/2)}}return l}function yr(m,l){l===void 0&&(l={});var f=l,y=f.placement,k=y===void 0?m.placement:y,D=f.strategy,j=D===void 0?m.strategy:D,z=f.boundary,X=z===void 0?Oo:z,ae=f.rootBoundary,le=ae===void 0?Pi:ae,te=f.elementContext,Pe=te===void 0?Os:te,ge=f.altBoundary,Ie=ge!==void 0&&ge,ye=f.padding,Ae=ye===void 0?0:ye,Xe=Uo(typeof Ae!="number"?Ae:gr(Ae,dn)),it=Pe===Os?ki:Os,Ne=m.rects.popper,qe=m.elements[Ie?it:Pe],Oe=(function(on,kn,Dn,gt){var us=kn==="clippingParents"?(function(tt){var an=Fs(Vi(tt)),On=["absolute","fixed"].indexOf(Gt(tt).position)>=0&&rn(tt)?Yr(tt):tt;return Ns(On)?an.filter(function(Tr){return Ns(Tr)&&Fo(Tr,On)&&Kt(Tr)!=="body"}):[]})(on):[].concat(kn),hs=[].concat(us,[Dn]),Wi=hs[0],Vt=hs.reduce(function(tt,an){var On=qo(on,an,gt);return tt.top=xs(On.top,tt.top),tt.right=ns(On.right,tt.right),tt.bottom=ns(On.bottom,tt.bottom),tt.left=xs(On.left,tt.left),tt},qo(on,Wi,gt));return Vt.width=Vt.right-Vt.left,Vt.height=Vt.bottom-Vt.top,Vt.x=Vt.left,Vt.y=Vt.top,Vt})(Ns(qe)?qe:qe.contextElement||ss(m.elements.popper),X,le,j),Le=Vs(m.elements.reference),Ge=ei({reference:Le,element:Ne,placement:k}),Ze=_r(Object.assign({},Ne,Ge)),Qe=Pe===Os?Ze:Le,vt={top:Oe.top-Qe.top+Xe.top,bottom:Qe.bottom-Oe.bottom+Xe.bottom,left:Oe.left-Qe.left+Xe.left,right:Qe.right-Oe.right+Xe.right},wn=m.modifiersData.offset;if(Pe===Os&&wn){var qn=wn[k];Object.keys(vt).forEach(function(on){var kn=[zt,xt].indexOf(on)>=0?1:-1,Dn=[Ut,xt].indexOf(on)>=0?"y":"x";vt[on]+=qn[Dn]*kn})}return vt}function il(m,l){l===void 0&&(l={});var f=l,y=f.placement,k=f.boundary,D=f.rootBoundary,j=f.padding,z=f.flipVariations,X=f.allowedAutoPlacements,ae=X===void 0?Di:X,le=Ms(y),te=le?z?Qr:Qr.filter(function(Ie){return Ms(Ie)===le}):dn,Pe=te.filter(function(Ie){return ae.indexOf(Ie)>=0});Pe.length===0&&(Pe=te);var ge=Pe.reduce(function(Ie,ye){return Ie[ye]=yr(m,{placement:ye,boundary:k,rootBoundary:D,padding:j})[Sn(ye)],Ie},{});return Object.keys(ge).sort(function(Ie,ye){return ge[Ie]-ge[ye]})}const vr={name:"flip",enabled:!0,phase:"main",fn:function(m){var l=m.state,f=m.options,y=m.name;if(!l.modifiersData[y]._skip){for(var k=f.mainAxis,D=k===void 0||k,j=f.altAxis,z=j===void 0||j,X=f.fallbackPlacements,ae=f.padding,le=f.boundary,te=f.rootBoundary,Pe=f.altBoundary,ge=f.flipVariations,Ie=ge===void 0||ge,ye=f.allowedAutoPlacements,Ae=l.options.placement,Xe=Sn(Ae),it=X||(Xe!==Ae&&Ie?(function(tt){if(Sn(tt)===ts)return[];var an=Zr(tt);return[Bn(tt),an,Bn(an)]})(Ae):[Zr(Ae)]),Ne=[Ae].concat(it).reduce(function(tt,an){return tt.concat(Sn(an)===ts?il(l,{placement:an,boundary:le,rootBoundary:te,padding:ae,flipVariations:Ie,allowedAutoPlacements:ye}):an)},[]),qe=l.rects.reference,Oe=l.rects.popper,Le=new Map,Ge=!0,Ze=Ne[0],Qe=0;Qe<Ne.length;Qe++){var vt=Ne[Qe],wn=Sn(vt),qn=Ms(vt)===Un,on=[Ut,xt].indexOf(wn)>=0,kn=on?"width":"height",Dn=yr(l,{placement:vt,boundary:le,rootBoundary:te,altBoundary:Pe,padding:ae}),gt=on?qn?zt:Pt:qn?xt:Ut;qe[kn]>Oe[kn]&&(gt=Zr(gt));var us=Zr(gt),hs=[];if(D&&hs.push(Dn[wn]<=0),z&&hs.push(Dn[gt]<=0,Dn[us]<=0),hs.every(function(tt){return tt})){Ze=vt,Ge=!1;break}Le.set(vt,hs)}if(Ge)for(var Wi=function(tt){var an=Ne.find(function(On){var Tr=Le.get(On);if(Tr)return Tr.slice(0,tt).every(function(ml){return ml})});if(an)return Ze=an,"break"},Vt=Ie?3:1;Vt>0&&Wi(Vt)!=="break";Vt--);l.placement!==Ze&&(l.modifiersData[y]._skip=!0,l.placement=Ze,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Wo(m,l,f){return f===void 0&&(f={x:0,y:0}),{top:m.top-l.height-f.y,right:m.right-l.width+f.x,bottom:m.bottom-l.height+f.y,left:m.left-l.width-f.x}}function zo(m){return[Ut,zt,xt,Pt].some(function(l){return m[l]>=0})}const ji={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(m){var l=m.state,f=m.name,y=l.rects.reference,k=l.rects.popper,D=l.modifiersData.preventOverflow,j=yr(l,{elementContext:"reference"}),z=yr(l,{altBoundary:!0}),X=Wo(j,y),ae=Wo(z,k,D),le=zo(X),te=zo(ae);l.modifiersData[f]={referenceClippingOffsets:X,popperEscapeOffsets:ae,isReferenceHidden:le,hasPopperEscaped:te},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":le,"data-popper-escaped":te})}},$i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(m){var l=m.state,f=m.options,y=m.name,k=f.offset,D=k===void 0?[0,0]:k,j=Di.reduce(function(le,te){return le[te]=(function(Pe,ge,Ie){var ye=Sn(Pe),Ae=[Pt,Ut].indexOf(ye)>=0?-1:1,Xe=typeof Ie=="function"?Ie(Object.assign({},ge,{placement:Pe})):Ie,it=Xe[0],Ne=Xe[1];return it=it||0,Ne=(Ne||0)*Ae,[Pt,zt].indexOf(ye)>=0?{x:Ne,y:it}:{x:it,y:Ne}})(te,l.rects,D),le},{}),z=j[l.placement],X=z.x,ae=z.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=X,l.modifiersData.popperOffsets.y+=ae),l.modifiersData[y]=j}},Bi={name:"popperOffsets",enabled:!0,phase:"read",fn:function(m){var l=m.state,f=m.name;l.modifiersData[f]=ei({reference:l.rects.reference,element:l.rects.popper,placement:l.placement})},data:{}},ti={name:"preventOverflow",enabled:!0,phase:"main",fn:function(m){var l=m.state,f=m.options,y=m.name,k=f.mainAxis,D=k===void 0||k,j=f.altAxis,z=j!==void 0&&j,X=f.boundary,ae=f.rootBoundary,le=f.altBoundary,te=f.padding,Pe=f.tether,ge=Pe===void 0||Pe,Ie=f.tetherOffset,ye=Ie===void 0?0:Ie,Ae=yr(l,{boundary:X,rootBoundary:ae,padding:te,altBoundary:le}),Xe=Sn(l.placement),it=Ms(l.placement),Ne=!it,qe=Xr(Xe),Oe=qe==="x"?"y":"x",Le=l.modifiersData.popperOffsets,Ge=l.rects.reference,Ze=l.rects.popper,Qe=typeof ye=="function"?ye(Object.assign({},l.rects,{placement:l.placement})):ye,vt=typeof Qe=="number"?{mainAxis:Qe,altAxis:Qe}:Object.assign({mainAxis:0,altAxis:0},Qe),wn=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,qn={x:0,y:0};if(Le){if(D){var on,kn=qe==="y"?Ut:Pt,Dn=qe==="y"?xt:zt,gt=qe==="y"?"height":"width",us=Le[qe],hs=us+Ae[kn],Wi=us-Ae[Dn],Vt=ge?-Ze[gt]/2:0,tt=it===Un?Ge[gt]:Ze[gt],an=it===Un?-Ze[gt]:-Ge[gt],On=l.elements.arrow,Tr=ge&&On?xi(On):{width:0,height:0},ml=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},cd=ml[kn],ud=ml[Dn],_l=rs(0,Ge[gt],Tr[gt]),pw=Ne?Ge[gt]/2-Vt-_l-cd-vt.mainAxis:tt-_l-cd-vt.mainAxis,gw=Ne?-Ge[gt]/2+Vt+_l+ud+vt.mainAxis:an+_l+ud+vt.mainAxis,fu=l.elements.arrow&&Yr(l.elements.arrow),mw=fu?qe==="y"?fu.clientTop||0:fu.clientLeft||0:0,hd=(on=wn==null?void 0:wn[qe])!=null?on:0,_w=us+gw-hd,fd=rs(ge?ns(hs,us+pw-hd-mw):hs,us,ge?xs(Wi,_w):Wi);Le[qe]=fd,qn[qe]=fd-us}if(z){var dd,yw=qe==="x"?Ut:Pt,vw=qe==="x"?xt:zt,li=Le[Oe],yl=Oe==="y"?"height":"width",pd=li+Ae[yw],gd=li-Ae[vw],du=[Ut,Pt].indexOf(Xe)!==-1,md=(dd=wn==null?void 0:wn[Oe])!=null?dd:0,_d=du?pd:li-Ge[yl]-Ze[yl]-md+vt.altAxis,yd=du?li+Ge[yl]+Ze[yl]-md-vt.altAxis:gd,vd=ge&&du?(function(ww,Ew,pu){var wd=rs(ww,Ew,pu);return wd>pu?pu:wd})(_d,li,yd):rs(ge?_d:pd,li,ge?yd:gd);Le[Oe]=vd,qn[Oe]=vd-li}l.modifiersData[y]=qn}},requiresIfExists:["offset"]};function ol(m,l,f){f===void 0&&(f=!1);var y,k,D=rn(l),j=rn(l)&&(function(te){var Pe=te.getBoundingClientRect(),ge=pn(Pe.width)/te.offsetWidth||1,Ie=pn(Pe.height)/te.offsetHeight||1;return ge!==1||Ie!==1})(l),z=ss(l),X=Vs(m,j,f),ae={scrollLeft:0,scrollTop:0},le={x:0,y:0};return(D||!D&&!f)&&((Kt(l)!=="body"||Ls(z))&&(ae=(y=l)!==kt(y)&&rn(y)?{scrollLeft:(k=y).scrollLeft,scrollTop:k.scrollTop}:Ui(y)),rn(l)?((le=Vs(l,!0)).x+=l.clientLeft,le.y+=l.clientTop):z&&(le.x=Bo(z))),{x:X.left+ae.scrollLeft-le.x,y:X.top+ae.scrollTop-le.y,width:X.width,height:X.height}}function al(m){var l=new Map,f=new Set,y=[];function k(D){f.add(D.name),[].concat(D.requires||[],D.requiresIfExists||[]).forEach(function(j){if(!f.has(j)){var z=l.get(j);z&&k(z)}}),y.push(D)}return m.forEach(function(D){l.set(D.name,D)}),m.forEach(function(D){f.has(D.name)||k(D)}),y}var is={placement:"bottom",modifiers:[],strategy:"absolute"};function Ko(){for(var m=arguments.length,l=new Array(m),f=0;f<m;f++)l[f]=arguments[f];return!l.some(function(y){return!(y&&typeof y.getBoundingClientRect=="function")})}function ni(m){m===void 0&&(m={});var l=m,f=l.defaultModifiers,y=f===void 0?[]:f,k=l.defaultOptions,D=k===void 0?is:k;return function(j,z,X){X===void 0&&(X=D);var ae,le,te={placement:"bottom",orderedModifiers:[],options:Object.assign({},is,D),modifiersData:{},elements:{reference:j,popper:z},attributes:{},styles:{}},Pe=[],ge=!1,Ie={state:te,setOptions:function(Ae){var Xe=typeof Ae=="function"?Ae(te.options):Ae;ye(),te.options=Object.assign({},D,te.options,Xe),te.scrollParents={reference:Ns(j)?Fs(j):j.contextElement?Fs(j.contextElement):[],popper:Fs(z)};var it,Ne,qe=(function(Oe){var Le=al(Oe);return Jr.reduce(function(Ge,Ze){return Ge.concat(Le.filter(function(Qe){return Qe.phase===Ze}))},[])})((it=[].concat(y,te.options.modifiers),Ne=it.reduce(function(Oe,Le){var Ge=Oe[Le.name];return Oe[Le.name]=Ge?Object.assign({},Ge,Le,{options:Object.assign({},Ge.options,Le.options),data:Object.assign({},Ge.data,Le.data)}):Le,Oe},{}),Object.keys(Ne).map(function(Oe){return Ne[Oe]})));return te.orderedModifiers=qe.filter(function(Oe){return Oe.enabled}),te.orderedModifiers.forEach(function(Oe){var Le=Oe.name,Ge=Oe.options,Ze=Ge===void 0?{}:Ge,Qe=Oe.effect;if(typeof Qe=="function"){var vt=Qe({state:te,name:Le,instance:Ie,options:Ze});Pe.push(vt||function(){})}}),Ie.update()},forceUpdate:function(){if(!ge){var Ae=te.elements,Xe=Ae.reference,it=Ae.popper;if(Ko(Xe,it)){te.rects={reference:ol(Xe,Yr(it),te.options.strategy==="fixed"),popper:xi(it)},te.reset=!1,te.placement=te.options.placement,te.orderedModifiers.forEach(function(Qe){return te.modifiersData[Qe.name]=Object.assign({},Qe.data)});for(var Ne=0;Ne<te.orderedModifiers.length;Ne++)if(te.reset!==!0){var qe=te.orderedModifiers[Ne],Oe=qe.fn,Le=qe.options,Ge=Le===void 0?{}:Le,Ze=qe.name;typeof Oe=="function"&&(te=Oe({state:te,options:Ge,name:Ze,instance:Ie})||te)}else te.reset=!1,Ne=-1}}},update:(ae=function(){return new Promise(function(Ae){Ie.forceUpdate(),Ae(te)})},function(){return le||(le=new Promise(function(Ae){Promise.resolve().then(function(){le=void 0,Ae(ae())})})),le}),destroy:function(){ye(),ge=!0}};if(!Ko(j,z))return Ie;function ye(){Pe.forEach(function(Ae){return Ae()}),Pe=[]}return Ie.setOptions(X).then(function(Ae){!ge&&X.onFirstUpdate&&X.onFirstUpdate(Ae)}),Ie}}var ll=ni(),cl=ni({defaultModifiers:[Li,Bi,$o,Mo]}),wr=ni({defaultModifiers:[Li,Bi,$o,Mo,$i,vr,ti,mr,ji]});const Qt=Object.freeze(Object.defineProperty({__proto__:null,afterMain:dr,afterRead:sl,afterWrite:Ye,applyStyles:Mo,arrow:mr,auto:ts,basePlacements:dn,beforeMain:jn,beforeRead:No,beforeWrite:pr,bottom:xt,clippingParents:Oo,computeStyles:$o,createPopper:wr,createPopperBase:ll,createPopperLite:cl,detectOverflow:yr,end:fr,eventListeners:Li,flip:vr,hide:ji,left:Pt,main:vn,modifierPhases:Jr,offset:$i,placements:Di,popper:Os,popperGenerator:ni,popperOffsets:Bi,preventOverflow:ti,read:xo,reference:ki,right:zt,start:Un,top:Ut,variationPlacements:Qr,viewport:Pi,write:Oi},Symbol.toStringTag,{value:"Module"})),Go="dropdown",os=".bs.dropdown",as=".data-api",o="ArrowUp",h="ArrowDown",p=`hide${os}`,v=`hidden${os}`,V=`show${os}`,M=`shown${os}`,Y=`click${os}${as}`,Re=`keydown${os}${as}`,yt=`keyup${os}${as}`,Ue="show",rt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Cn=`${rt}.${Ue}`,Rn=".dropdown-menu",ls=ne()?"top-end":"top-start",cs=ne()?"top-start":"top-end",Hi=ne()?"bottom-end":"bottom-start",Qo=ne()?"bottom-start":"bottom-end",Xy=ne()?"left-start":"right-start",Zy=ne()?"right-start":"left-start",ev={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},tv={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Hn extends lt{constructor(l,f){super(l,f),this._popper=null,this._parent=this._element.parentNode,this._menu=ce.next(this._element,Rn)[0]||ce.prev(this._element,Rn)[0]||ce.findOne(Rn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ev}static get DefaultType(){return tv}static get NAME(){return Go}toggle(){return this._isShown()?this.hide():this.show()}show(){if(_(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!$.trigger(this._element,V,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const f of[].concat(...document.body.children))$.on(f,"mouseover",x);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ue),this._element.classList.add(Ue),$.trigger(this._element,M,l)}}hide(){if(_(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!$.trigger(this._element,p,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const f of[].concat(...document.body.children))$.off(f,"mouseover",x);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ue),this._element.classList.remove(Ue),this._element.setAttribute("aria-expanded","false"),Et.removeDataAttribute(this._menu,"popper"),$.trigger(this._element,v,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!u(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${Go.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(Qt===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let l=this._element;this._config.reference==="parent"?l=this._parent:u(this._config.reference)?l=d(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const f=this._getPopperConfig();this._popper=wr(l,this._menu,f)}_isShown(){return this._menu.classList.contains(Ue)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return Xy;if(l.classList.contains("dropstart"))return Zy;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const f=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?f?cs:ls:f?Qo:Hi}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Et.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...ie(this._config.popperConfig,[void 0,l])}}_selectMenuItem({key:l,target:f}){const y=ce.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(k=>g(k));y.length&&Ce(y,f,l===h,!y.includes(f)).focus()}static jQueryInterface(l){return this.each(function(){const f=Hn.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const f=ce.find(Cn);for(const y of f){const k=Hn.getInstance(y);if(!k||k._config.autoClose===!1)continue;const D=l.composedPath(),j=D.includes(k._menu);if(D.includes(k._element)||k._config.autoClose==="inside"&&!j||k._config.autoClose==="outside"&&j||k._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const z={relatedTarget:k._element};l.type==="click"&&(z.clickEvent=l),k._completeHide(z)}}static dataApiKeydownHandler(l){const f=/input|textarea/i.test(l.target.tagName),y=l.key==="Escape",k=[o,h].includes(l.key);if(!k&&!y||f&&!y)return;l.preventDefault();const D=this.matches(rt)?this:ce.prev(this,rt)[0]||ce.next(this,rt)[0]||ce.findOne(rt,l.delegateTarget.parentNode),j=Hn.getOrCreateInstance(D);if(k)return l.stopPropagation(),j.show(),void j._selectMenuItem(l);j._isShown()&&(l.stopPropagation(),j.hide(),D.focus())}}$.on(document,Re,rt,Hn.dataApiKeydownHandler),$.on(document,Re,Rn,Hn.dataApiKeydownHandler),$.on(document,Y,Hn.clearMenus),$.on(document,yt,Hn.clearMenus),$.on(document,Y,rt,function(m){m.preventDefault(),Hn.getOrCreateInstance(this).toggle()}),Z(Hn);const Df="backdrop",Of="show",Nf=`mousedown.bs.${Df}`,nv={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},sv={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class xf extends Ft{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return nv}static get DefaultType(){return sv}static get NAME(){return Df}show(l){if(!this._config.isVisible)return void ie(l);this._append();const f=this._getElement();this._config.isAnimated&&Q(f),f.classList.add(Of),this._emulateAnimation(()=>{ie(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(Of),this._emulateAnimation(()=>{this.dispose(),ie(l)})):ie(l)}dispose(){this._isAppended&&($.off(this._element,Nf),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=d(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),$.on(l,Nf,()=>{ie(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){oe(l,this._getElement(),this._config.isAnimated)}}const ul=".bs.focustrap",rv=`focusin${ul}`,iv=`keydown.tab${ul}`,Vf="backward",ov={autofocus:!0,trapElement:null},av={autofocus:"boolean",trapElement:"element"};class Mf extends Ft{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ov}static get DefaultType(){return av}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),$.off(document,ul),$.on(document,rv,l=>this._handleFocusin(l)),$.on(document,iv,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,$.off(document,ul))}_handleFocusin(l){const{trapElement:f}=this._config;if(l.target===document||l.target===f||f.contains(l.target))return;const y=ce.focusableChildren(f);y.length===0?f.focus():this._lastTabNavDirection===Vf?y[y.length-1].focus():y[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?Vf:"forward")}}const Lf=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ff=".sticky-top",hl="padding-right",Uf="margin-right";class tu{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,hl,f=>f+l),this._setElementAttributes(Lf,hl,f=>f+l),this._setElementAttributes(Ff,Uf,f=>f-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,hl),this._resetElementAttributes(Lf,hl),this._resetElementAttributes(Ff,Uf)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,f,y){const k=this.getWidth();this._applyManipulationCallback(l,D=>{if(D!==this._element&&window.innerWidth>D.clientWidth+k)return;this._saveInitialAttribute(D,f);const j=window.getComputedStyle(D).getPropertyValue(f);D.style.setProperty(f,`${y(Number.parseFloat(j))}px`)})}_saveInitialAttribute(l,f){const y=l.style.getPropertyValue(f);y&&Et.setDataAttribute(l,f,y)}_resetElementAttributes(l,f){this._applyManipulationCallback(l,y=>{const k=Et.getDataAttribute(y,f);k!==null?(Et.removeDataAttribute(y,f),y.style.setProperty(f,k)):y.style.removeProperty(f)})}_applyManipulationCallback(l,f){if(u(l))f(l);else for(const y of ce.find(l,this._element))f(y)}}const Pn=".bs.modal",lv=`hide${Pn}`,cv=`hidePrevented${Pn}`,jf=`hidden${Pn}`,$f=`show${Pn}`,uv=`shown${Pn}`,hv=`resize${Pn}`,fv=`click.dismiss${Pn}`,dv=`mousedown.dismiss${Pn}`,pv=`keydown.dismiss${Pn}`,gv=`click${Pn}.data-api`,Bf="modal-open",Hf="show",nu="modal-static",mv={backdrop:!0,focus:!0,keyboard:!0},_v={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class si extends lt{constructor(l,f){super(l,f),this._dialog=ce.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new tu,this._addEventListeners()}static get Default(){return mv}static get DefaultType(){return _v}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||$.trigger(this._element,$f,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Bf),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&($.trigger(this._element,lv).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Hf),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){$.off(window,Pn),$.off(this._dialog,Pn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xf({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Mf({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const f=ce.findOne(".modal-body",this._dialog);f&&(f.scrollTop=0),Q(this._element),this._element.classList.add(Hf),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,$.trigger(this._element,uv,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){$.on(this._element,pv,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),$.on(window,hv,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),$.on(this._element,dv,l=>{$.one(this._element,fv,f=>{this._element===l.target&&this._element===f.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Bf),this._resetAdjustments(),this._scrollBar.reset(),$.trigger(this._element,jf)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if($.trigger(this._element,cv).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._element.style.overflowY;f==="hidden"||this._element.classList.contains(nu)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(nu),this._queueCallback(()=>{this._element.classList.remove(nu),this._queueCallback(()=>{this._element.style.overflowY=f},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,f=this._scrollBar.getWidth(),y=f>0;if(y&&!l){const k=ne()?"paddingLeft":"paddingRight";this._element.style[k]=`${f}px`}if(!y&&l){const k=ne()?"paddingRight":"paddingLeft";this._element.style[k]=`${f}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,f){return this.each(function(){const y=si.getOrCreateInstance(this,l);if(typeof l=="string"){if(y[l]===void 0)throw new TypeError(`No method named "${l}"`);y[l](f)}})}}$.on(document,gv,'[data-bs-toggle="modal"]',function(m){const l=ce.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&m.preventDefault(),$.one(l,$f,y=>{y.defaultPrevented||$.one(l,jf,()=>{g(this)&&this.focus()})});const f=ce.findOne(".modal.show");f&&si.getInstance(f).hide(),si.getOrCreateInstance(l).toggle(this)}),fn(si),Z(si);const Us=".bs.offcanvas",qf=".data-api",yv=`load${Us}${qf}`,Wf="show",zf="showing",Kf="hiding",Gf=".offcanvas.show",vv=`show${Us}`,wv=`shown${Us}`,Ev=`hide${Us}`,Qf=`hidePrevented${Us}`,Jf=`hidden${Us}`,Tv=`resize${Us}`,bv=`click${Us}${qf}`,Iv=`keydown.dismiss${Us}`,Av={backdrop:!0,keyboard:!0,scroll:!1},Sv={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class js extends lt{constructor(l,f){super(l,f),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Av}static get DefaultType(){return Sv}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||$.trigger(this._element,vv,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new tu().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(zf),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Wf),this._element.classList.remove(zf),$.trigger(this._element,wv,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&($.trigger(this._element,Ev).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Kf),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Wf,Kf),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new tu().reset(),$.trigger(this._element,Jf)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new xf({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():$.trigger(this._element,Qf)}:null})}_initializeFocusTrap(){return new Mf({trapElement:this._element})}_addEventListeners(){$.on(this._element,Iv,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():$.trigger(this._element,Qf))})}static jQueryInterface(l){return this.each(function(){const f=js.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l](this)}})}}$.on(document,bv,'[data-bs-toggle="offcanvas"]',function(m){const l=ce.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&m.preventDefault(),_(this))return;$.one(l,Jf,()=>{g(this)&&this.focus()});const f=ce.findOne(Gf);f&&f!==l&&js.getInstance(f).hide(),js.getOrCreateInstance(l).toggle(this)}),$.on(window,yv,()=>{for(const m of ce.find(Gf))js.getOrCreateInstance(m).show()}),$.on(window,Tv,()=>{for(const m of ce.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(m).position!=="fixed"&&js.getOrCreateInstance(m).hide()}),fn(js),Z(js);const Yf={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Cv=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Rv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Pv=(m,l)=>{const f=m.nodeName.toLowerCase();return l.includes(f)?!Cv.has(f)||!!Rv.test(m.nodeValue):l.filter(y=>y instanceof RegExp).some(y=>y.test(f))},kv={allowList:Yf,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Dv={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ov={entry:"(string|element|function|null)",selector:"(string|element)"};class Nv extends Ft{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return kv}static get DefaultType(){return Dv}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[k,D]of Object.entries(this._config.content))this._setContent(l,D,k);const f=l.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&f.classList.add(...y.split(" ")),f}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[f,y]of Object.entries(l))super._typeCheckConfig({selector:f,entry:y},Ov)}_setContent(l,f,y){const k=ce.findOne(y,l);k&&((f=this._resolvePossibleFunction(f))?u(f)?this._putElementInTemplate(d(f),k):this._config.html?k.innerHTML=this._maybeSanitize(f):k.textContent=f:k.remove())}_maybeSanitize(l){return this._config.sanitize?(function(f,y,k){if(!f.length)return f;if(k&&typeof k=="function")return k(f);const D=new window.DOMParser().parseFromString(f,"text/html"),j=[].concat(...D.body.querySelectorAll("*"));for(const z of j){const X=z.nodeName.toLowerCase();if(!Object.keys(y).includes(X)){z.remove();continue}const ae=[].concat(...z.attributes),le=[].concat(y["*"]||[],y[X]||[]);for(const te of ae)Pv(te,le)||z.removeAttribute(te.nodeName)}return D.body.innerHTML})(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return ie(l,[void 0,this])}_putElementInTemplate(l,f){if(this._config.html)return f.innerHTML="",void f.append(l);f.textContent=l.textContent}}const xv=new Set(["sanitize","allowList","sanitizeFn"]),su="fade",fl="show",Vv=".tooltip-inner",Xf=".modal",Zf="hide.bs.modal",Jo="hover",ru="focus",iu="click",Mv={AUTO:"auto",TOP:"top",RIGHT:ne()?"left":"right",BOTTOM:"bottom",LEFT:ne()?"right":"left"},Lv={allowList:Yf,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Fv={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ri extends lt{constructor(l,f){if(Qt===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(l,f),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Lv}static get DefaultType(){return Fv}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),$.off(this._element.closest(Xf),Zf,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=$.trigger(this._element,this.constructor.eventName("show")),f=(A(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!f)return;this._disposePopper();const y=this._getTipElement();this._element.setAttribute("aria-describedby",y.getAttribute("id"));const{container:k}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(k.append(y),$.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(y),y.classList.add(fl),"ontouchstart"in document.documentElement)for(const D of[].concat(...document.body.children))$.on(D,"mouseover",x);this._queueCallback(()=>{$.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!$.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(fl),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))$.off(l,"mouseover",x);this._activeTrigger[iu]=!1,this._activeTrigger[ru]=!1,this._activeTrigger[Jo]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),$.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const f=this._getTemplateFactory(l).toHtml();if(!f)return null;f.classList.remove(su,fl),f.classList.add(`bs-${this.constructor.NAME}-auto`);const y=(k=>{do k+=Math.floor(1e6*Math.random());while(document.getElementById(k));return k})(this.constructor.NAME).toString();return f.setAttribute("id",y),this._isAnimated()&&f.classList.add(su),f}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new Nv({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Vv]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(su)}_isShown(){return this.tip&&this.tip.classList.contains(fl)}_createPopper(l){const f=ie(this._config.placement,[this,l,this._element]),y=Mv[f.toUpperCase()];return wr(this._element,l,this._getPopperConfig(y))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(f=>Number.parseInt(f,10)):typeof l=="function"?f=>l(f,this._element):l}_resolvePossibleFunction(l){return ie(l,[this._element,this._element])}_getPopperConfig(l){const f={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...f,...ie(this._config.popperConfig,[void 0,f])}}_setListeners(){const l=this._config.trigger.split(" ");for(const f of l)if(f==="click")$.on(this._element,this.constructor.eventName("click"),this._config.selector,y=>{const k=this._initializeOnDelegatedTarget(y);k._activeTrigger[iu]=!(k._isShown()&&k._activeTrigger[iu]),k.toggle()});else if(f!=="manual"){const y=f===Jo?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),k=f===Jo?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");$.on(this._element,y,this._config.selector,D=>{const j=this._initializeOnDelegatedTarget(D);j._activeTrigger[D.type==="focusin"?ru:Jo]=!0,j._enter()}),$.on(this._element,k,this._config.selector,D=>{const j=this._initializeOnDelegatedTarget(D);j._activeTrigger[D.type==="focusout"?ru:Jo]=j._element.contains(D.relatedTarget),j._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},$.on(this._element.closest(Xf),Zf,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,f){clearTimeout(this._timeout),this._timeout=setTimeout(l,f)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const f=Et.getDataAttributes(this._element);for(const y of Object.keys(f))xv.has(y)&&delete f[y];return l={...f,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:d(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[f,y]of Object.entries(this._config))this.constructor.Default[f]!==y&&(l[f]=y);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const f=ri.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}}Z(ri);const Uv=".popover-header",jv=".popover-body",$v={...ri.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Bv={...ri.DefaultType,content:"(null|string|element|function)"};class dl extends ri{static get Default(){return $v}static get DefaultType(){return Bv}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Uv]:this._getTitle(),[jv]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const f=dl.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l]()}})}}Z(dl);const ou=".bs.scrollspy",Hv=`activate${ou}`,ed=`click${ou}`,qv=`load${ou}.data-api`,qi="active",au="[href]",td=".nav-link",Wv=`${td}, .nav-item > ${td}, .list-group-item`,zv={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Kv={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Yo extends lt{constructor(l,f){super(l,f),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return zv}static get DefaultType(){return Kv}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=d(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(f=>Number.parseFloat(f))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&($.off(this._config.target,ed),$.on(this._config.target,ed,au,l=>{const f=this._observableSections.get(l.target.hash);if(f){l.preventDefault();const y=this._rootElement||window,k=f.offsetTop-this._element.offsetTop;if(y.scrollTo)return void y.scrollTo({top:k,behavior:"smooth"});y.scrollTop=k}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(f=>this._observerCallback(f),l)}_observerCallback(l){const f=j=>this._targetLinks.get(`#${j.target.id}`),y=j=>{this._previousScrollData.visibleEntryTop=j.target.offsetTop,this._process(f(j))},k=(this._rootElement||document.documentElement).scrollTop,D=k>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=k;for(const j of l){if(!j.isIntersecting){this._activeTarget=null,this._clearActiveClass(f(j));continue}const z=j.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(D&&z){if(y(j),!k)return}else D||z||y(j)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=ce.find(au,this._config.target);for(const f of l){if(!f.hash||_(f))continue;const y=ce.findOne(decodeURI(f.hash),this._element);g(y)&&(this._targetLinks.set(decodeURI(f.hash),f),this._observableSections.set(f.hash,y))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(qi),this._activateParents(l),$.trigger(this._element,Hv,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))ce.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(qi);else for(const f of ce.parents(l,".nav, .list-group"))for(const y of ce.prev(f,Wv))y.classList.add(qi)}_clearActiveClass(l){l.classList.remove(qi);const f=ce.find(`${au}.${qi}`,l);for(const y of f)y.classList.remove(qi)}static jQueryInterface(l){return this.each(function(){const f=Yo.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}$.on(window,qv,()=>{for(const m of ce.find('[data-bs-spy="scroll"]'))Yo.getOrCreateInstance(m)}),Z(Yo);const ii=".bs.tab",Gv=`hide${ii}`,Qv=`hidden${ii}`,Jv=`show${ii}`,Yv=`shown${ii}`,Xv=`click${ii}`,Zv=`keydown${ii}`,ew=`load${ii}`,tw="ArrowLeft",nd="ArrowRight",nw="ArrowUp",sd="ArrowDown",lu="Home",rd="End",oi="active",id="fade",cu="show",od=".dropdown-toggle",uu=`:not(${od})`,ad='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',hu=`.nav-link${uu}, .list-group-item${uu}, [role="tab"]${uu}, ${ad}`,sw=`.${oi}[data-bs-toggle="tab"], .${oi}[data-bs-toggle="pill"], .${oi}[data-bs-toggle="list"]`;class ai extends lt{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),$.on(this._element,Zv,f=>this._keydown(f)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const f=this._getActiveElem(),y=f?$.trigger(f,Gv,{relatedTarget:l}):null;$.trigger(l,Jv,{relatedTarget:f}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(f,l),this._activate(l,f))}_activate(l,f){l&&(l.classList.add(oi),this._activate(ce.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),$.trigger(l,Yv,{relatedTarget:f})):l.classList.add(cu)},l,l.classList.contains(id)))}_deactivate(l,f){l&&(l.classList.remove(oi),l.blur(),this._deactivate(ce.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),$.trigger(l,Qv,{relatedTarget:f})):l.classList.remove(cu)},l,l.classList.contains(id)))}_keydown(l){if(![tw,nd,nw,sd,lu,rd].includes(l.key))return;l.stopPropagation(),l.preventDefault();const f=this._getChildren().filter(k=>!_(k));let y;if([lu,rd].includes(l.key))y=f[l.key===lu?0:f.length-1];else{const k=[nd,sd].includes(l.key);y=Ce(f,l.target,k,!0)}y&&(y.focus({preventScroll:!0}),ai.getOrCreateInstance(y).show())}_getChildren(){return ce.find(hu,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,f){this._setAttributeIfNotExists(l,"role","tablist");for(const y of f)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const f=this._elemIsActive(l),y=this._getOuterElement(l);l.setAttribute("aria-selected",f),y!==l&&this._setAttributeIfNotExists(y,"role","presentation"),f||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const f=ce.getElementFromSelector(l);f&&(this._setAttributeIfNotExists(f,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(f,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,f){const y=this._getOuterElement(l);if(!y.classList.contains("dropdown"))return;const k=(D,j)=>{const z=ce.findOne(D,y);z&&z.classList.toggle(j,f)};k(od,oi),k(".dropdown-menu",cu),y.setAttribute("aria-expanded",f)}_setAttributeIfNotExists(l,f,y){l.hasAttribute(f)||l.setAttribute(f,y)}_elemIsActive(l){return l.classList.contains(oi)}_getInnerElement(l){return l.matches(hu)?l:ce.findOne(hu,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const f=ai.getOrCreateInstance(this);if(typeof l=="string"){if(f[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);f[l]()}})}}$.on(document,Xv,ad,function(m){["A","AREA"].includes(this.tagName)&&m.preventDefault(),_(this)||ai.getOrCreateInstance(this).show()}),$.on(window,ew,()=>{for(const m of ce.find(sw))ai.getOrCreateInstance(m)}),Z(ai);const Er=".bs.toast",rw=`mouseover${Er}`,iw=`mouseout${Er}`,ow=`focusin${Er}`,aw=`focusout${Er}`,lw=`hide${Er}`,cw=`hidden${Er}`,uw=`show${Er}`,hw=`shown${Er}`,ld="hide",pl="show",gl="showing",fw={animation:"boolean",autohide:"boolean",delay:"number"},dw={animation:!0,autohide:!0,delay:5e3};class Xo extends lt{constructor(l,f){super(l,f),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return dw}static get DefaultType(){return fw}static get NAME(){return"toast"}show(){$.trigger(this._element,uw).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ld),Q(this._element),this._element.classList.add(pl,gl),this._queueCallback(()=>{this._element.classList.remove(gl),$.trigger(this._element,hw),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&($.trigger(this._element,lw).defaultPrevented||(this._element.classList.add(gl),this._queueCallback(()=>{this._element.classList.add(ld),this._element.classList.remove(gl,pl),$.trigger(this._element,cw)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(pl),super.dispose()}isShown(){return this._element.classList.contains(pl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,f){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=f;break;case"focusin":case"focusout":this._hasKeyboardInteraction=f}if(f)return void this._clearTimeout();const y=l.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){$.on(this._element,rw,l=>this._onInteraction(l,!0)),$.on(this._element,iw,l=>this._onInteraction(l,!1)),$.on(this._element,ow,l=>this._onInteraction(l,!0)),$.on(this._element,aw,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const f=Xo.getOrCreateInstance(this,l);if(typeof l=="string"){if(f[l]===void 0)throw new TypeError(`No method named "${l}"`);f[l](this)}})}}return fn(Xo),Z(Xo),{Alert:U,Button:P,Carousel:hr,Collapse:Ds,Dropdown:Hn,Modal:si,Offcanvas:js,Popover:dl,ScrollSpy:Yo,Tab:ai,Toast:Xo,Tooltip:ri}})})(xl)),xl.exports}JT();const YT={class:"movie-card card h-100 border-0 shadow-sm"},XT=["src","alt"],ZT={key:1,class:"poster poster-placeholder"},eb={class:"card-body d-flex flex-column"},tb={class:"d-flex justify-content-between align-items-start gap-2 mb-2"},nb={class:"movie-title h6 mb-0"},sb={class:"rating badge text-bg-warning"},rb={class:"text-secondary small mb-3"},ib={class:"mt-auto d-grid gap-2"},Su={__name:"MovieCard",props:{movie:{type:Object,required:!0},isWatchlisted:{type:Boolean,default:!1}},emits:["select","toggle-watchlist"],setup(n){return(e,t)=>(ve(),Te("article",YT,[re("button",{class:"poster-button",type:"button",onClick:t[0]||(t[0]=s=>e.$emit("select",n.movie))},[n.movie.posterUrl?(ve(),Te("img",{key:0,class:"card-img-top poster",src:n.movie.posterUrl,alt:n.movie.title},null,8,XT)):(ve(),Te("div",ZT,"No poster"))]),re("div",eb,[re("div",tb,[re("h2",nb,Je(n.movie.title),1),re("span",sb,Je(n.movie.rating),1)]),re("p",rb,Je(n.movie.year),1),re("div",ib,[re("button",{class:"btn btn-sm btn-outline-light",type:"button",onClick:t[1]||(t[1]=s=>e.$emit("select",n.movie))}," Details "),re("button",{class:Ma(["btn btn-sm",n.isWatchlisted?"btn-success":"btn-outline-warning"]),type:"button",onClick:t[2]||(t[2]=s=>e.$emit("toggle-watchlist",n.movie))},Je(n.isWatchlisted?"In Watchlist":"Add Watchlist"),3)])])]))}},ob="https://api.themoviedb.org/3",ab="https://image.tmdb.org/t/p/w500",lb="https://image.tmdb.org/t/p/original",cb="https://image.tmdb.org/t/p/w185",ub="23145b3ce4c5a7c6a6e2b76169528bdc",hb=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:878,name:"Sci-Fi"},{id:53,name:"Thriller"}],po=[{id:27205,title:"Inception",overview:"A thief who steals corporate secrets through dream-sharing technology is offered a chance to erase his criminal history.",poster_path:"/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",backdrop_path:"/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",release_date:"2010-07-16",vote_average:8.4,runtime:148,genre_ids:[28,878,53],credits:{cast:[{id:6193,name:"Leonardo DiCaprio",character:"Dom Cobb",profile_path:"/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"},{id:27578,name:"Joseph Gordon-Levitt",character:"Arthur",profile_path:"/4U9G4YwTlIEbAymBaseltS38eH4.jpg"},{id:24045,name:"Elliot Page",character:"Ariadne",profile_path:"/eCeFgzS8dYHnMfWQT0oQitCrsSz.jpg"},{id:2524,name:"Tom Hardy",character:"Eames",profile_path:"/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg"}]}},{id:157336,title:"Interstellar",overview:"A team of explorers travels through a wormhole in space in an attempt to secure humanitys future.",poster_path:"/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",backdrop_path:"/xJHokMbljvjADYdit5fK5VQsXEG.jpg",release_date:"2014-11-07",vote_average:8.5,runtime:169,genre_ids:[12,18,878],credits:{cast:[{id:10297,name:"Matthew McConaughey",character:"Cooper",profile_path:"/wJiGedOCZhwMx9DezY8uwbNxmAY.jpg"},{id:1813,name:"Anne Hathaway",character:"Brand",profile_path:"/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg"},{id:3895,name:"Jessica Chastain",character:"Murph",profile_path:"/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg"},{id:1892,name:"Michael Caine",character:"Professor Brand",profile_path:"/hZruclwEPCKw3e83rnFSIH5sRFZ.jpg"}]}},{id:496243,title:"Parasite",overview:"Greed and class discrimination threaten the newly formed relationship between a wealthy family and a poor household.",poster_path:"/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",backdrop_path:"/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",release_date:"2019-05-30",vote_average:8.5,runtime:133,genre_ids:[18,53],credits:{cast:[{id:20738,name:"Song Kang-ho",character:"Kim Ki-taek",profile_path:"/1rNoqfQ30F84YfL1jnmZbe8jdzn.jpg"},{id:556435,name:"Lee Sun-kyun",character:"Park Dong-ik",profile_path:"/mOko1Bex8eGv2tMEnnE8CaM8G9a.jpg"},{id:1255886,name:"Cho Yeo-jeong",character:"Yeon-kyo",profile_path:"/mQGmlJUzKAYhVGmfnkscrZsGb3Z.jpg"},{id:1342698,name:"Choi Woo-shik",character:"Ki-woo",profile_path:"/x7vWu14a87qOZ8OSZqYn3gYMN3X.jpg"}]}},{id:129,title:"Spirited Away",overview:"A young girl enters a world ruled by gods, witches, and spirits after her parents are transformed.",poster_path:"/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",backdrop_path:"/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",release_date:"2001-07-20",vote_average:8.5,runtime:125,genre_ids:[12,16],credits:{cast:[{id:19587,name:"Rumi Hiiragi",character:"Chihiro Ogino",profile_path:null},{id:6837,name:"Miyu Irino",character:"Haku",profile_path:"/kBcrF346CAwSFypBS5x2HJGqJhZ.jpg"},{id:19588,name:"Mari Natsuki",character:"Yubaba",profile_path:"/z2QpDkx7Mra4b0SsA9nP8Lt2RGD.jpg"},{id:19589,name:"Takashi Naito",character:"Akio Ogino",profile_path:null}]}}];function fb(n){return n?`${ab}${n}`:""}function db(n){return n?`${lb}${n}`:""}function Om(n){return n?`${cb}${n}`:""}function pb(n){return{...n,profileUrl:Om(n.profile_path)}}function er(n){var e;return{...n,posterUrl:fb(n.poster_path),backdropUrl:db(n.backdrop_path),year:n.release_date?n.release_date.slice(0,4):"TBD",rating:n.vote_average?n.vote_average.toFixed(1):"NR",credits:n.credits?{...n.credits,cast:((e=n.credits.cast)==null?void 0:e.map(pb))||[]}:void 0}}function np(n){var e,t;return{...n,profileUrl:Om(n.profile_path),movieCredits:{cast:((t=(e=n.movie_credits)==null?void 0:e.cast)==null?void 0:t.map(er))||[]}}}function gb(n){const e=n.toLowerCase().trim(),t=[];return e.includes("star wars")&&t.push("mandalorian grogu"),t}function mb(n){const e=new Set;return n.flat().filter(t=>e.has(t.id)?!1:(e.add(t.id),!0))}async function To(n,e={}){const t=new URL(`${ob}${n}`);t.search=new URLSearchParams({api_key:ub,language:"en-US",...e});const s=await fetch(t);if(!s.ok)throw new Error("TMDB request failed");return s.json()}async function Nm(){try{return(await To("/trending/movie/week")).results.map(er)}catch{return po.map(er)}}async function _b(n){if(!n.trim())return Nm();try{const e=[n,...gb(n)],t=await Promise.all(e.map(async s=>(await To("/search/movie",{query:s,include_adult:"false"})).results||[]));return mb(t).map(er)}catch{const e=n.toLowerCase();return po.filter(t=>t.title.toLowerCase().includes(e)).map(er)}}async function yb(){try{return(await To("/genre/movie/list")).genres}catch{return hb}}async function Cu(n){try{const e=await To(`/movie/${n}`,{append_to_response:"credits,videos"});return er(e)}catch{const e=po.find(t=>t.id===Number(n));return e?er(e):null}}async function vb(n){const e=new Set(n.map(t=>t.id));if(!n.length)return[];try{const t=await Promise.all(n.slice(0,5).map(async r=>(await To(`/movie/${r.id}/recommendations`)).results||[])),s=new Set(e);return t.flat().filter(r=>s.has(r.id)?!1:(s.add(r.id),!0)).sort((r,i)=>i.vote_average-r.vote_average).slice(0,12).map(er)}catch{const t=new Set(n.flatMap(s=>s.genre_ids||[]));return po.filter(s=>!e.has(s.id)).filter(s=>s.genre_ids.some(r=>t.has(r))).map(er)}}async function wb(n){try{const e=await To(`/person/${n}`,{append_to_response:"movie_credits"});return np(e)}catch{const e=po.flatMap(s=>{var r;return((r=s.credits)==null?void 0:r.cast)||[]}).find(s=>s.id===Number(n));if(!e)return null;const t=po.filter(s=>{var r,i;return(i=(r=s.credits)==null?void 0:r.cast)==null?void 0:i.some(a=>a.id===Number(n))});return np({...e,biography:"Biography details are available from TMDB when an API key is configured.",known_for_department:"Acting",movie_credits:{cast:t}})}}const Eb=()=>{};var sp={};/**
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
 */const xm=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Tb=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,d=u?n[r+2]:0,g=i>>2,_=(i&3)<<4|c>>4;let A=(c&15)<<2|d>>6,x=d&63;u||(x=64,a||(A=64)),s.push(t[g],t[_],t[A],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tb(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const _=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||d==null||_==null)throw new bb;const A=i<<2|c>>4;if(s.push(A),d!==64){const x=c<<4&240|d>>2;if(s.push(x),_!==64){const Q=d<<6&192|_;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ib=function(n){const e=xm(n);return Vm.encodeByteArray(e,!0)},Zl=function(n){return Ib(n).replace(/\./g,"")},Mm=function(n){try{return Vm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ab(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sb=()=>Ab().__FIREBASE_DEFAULTS__,Cb=()=>{if(typeof process>"u"||typeof sp>"u")return;const n=sp.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mm(n[1]);return e&&JSON.parse(e)},Dc=()=>{try{return Eb()||Sb()||Cb()||Rb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lm=n=>{var e,t;return(t=(e=Dc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Pb=n=>{const e=Lm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Fm=()=>{var n;return(n=Dc())==null?void 0:n.config},Um=n=>{var e;return(e=Dc())==null?void 0:e[`_${n}`]};/**
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
 */class kb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Db(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zl(JSON.stringify(t)),Zl(JSON.stringify(a)),""].join(".")}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ob(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function Nb(){var e;const n=(e=Dc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vb(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lb(){const n=sn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fb(){return!Nb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ub(){try{return typeof indexedDB=="object"}catch{return!1}}function jb(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const $b="FirebaseError";class or extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$b,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Bb(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new or(r,c,s)}}function Bb(n,e){return n.replace(Hb,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Hb=/\{\$([^}]+)}/g;function qb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(rp(i)&&rp(a)){if(!vi(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function rp(n){return n!==null&&typeof n=="object"}/**
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
 */function $a(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Wb(n,e){const t=new zb(n,e);return t.subscribe.bind(t)}class zb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Kb(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ru),r.error===void 0&&(r.error=Ru),r.complete===void 0&&(r.complete=Ru);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ru(){}/**
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
 */function bn(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Ba(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jm(n){return(await fetch(n,{credentials:"include"})).ok}class wi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Gb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new kb;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jb(e))try{this.getOrInitializeService({instanceIdentifier:fi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fi){return this.instances.has(e)}getOptions(e=fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qb(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fi){return this.component?this.component.multipleInstances?e:fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qb(n){return n===fi?void 0:n}function Jb(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const Xb={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},Zb=Me.INFO,eI={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},tI=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=eI[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uh{constructor(e){this.name=e,this._logLevel=Zb,this._logHandler=tI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const nI=(n,e)=>e.some(t=>n instanceof t);let ip,op;function sI(){return ip||(ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rI(){return op||(op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $m=new WeakMap,Yu=new WeakMap,Bm=new WeakMap,Pu=new WeakMap,jh=new WeakMap;function iI(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Rr(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$m.set(t,n)}).catch(()=>{}),jh.set(e,n),e}function oI(n){if(Yu.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Yu.set(n,e)}let Xu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aI(n){Xu=n(Xu)}function lI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ku(this),e,...t);return Bm.set(s,e.sort?e.sort():[e]),Rr(s)}:rI().includes(n)?function(...e){return n.apply(ku(this),e),Rr($m.get(this))}:function(...e){return Rr(n.apply(ku(this),e))}}function cI(n){return typeof n=="function"?lI(n):(n instanceof IDBTransaction&&oI(n),nI(n,sI())?new Proxy(n,Xu):n)}function Rr(n){if(n instanceof IDBRequest)return iI(n);if(Pu.has(n))return Pu.get(n);const e=cI(n);return e!==n&&(Pu.set(n,e),jh.set(e,n)),e}const ku=n=>jh.get(n);function uI(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Rr(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Rr(a.result),u.oldVersion,u.newVersion,Rr(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const hI=["get","getKey","getAll","getAllKeys","count"],fI=["put","add","delete","clear"],Du=new Map;function ap(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Du.get(e))return Du.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=fI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||hI.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),r&&u.done]))[0]};return Du.set(e,i),i}aI(n=>({...n,get:(e,t,s)=>ap(e,t)||n.get(e,t,s),has:(e,t)=>!!ap(e,t)||n.has(e,t)}));/**
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
 */class dI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zu="@firebase/app",lp="0.14.12";/**
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
 */const tr=new Uh("@firebase/app"),gI="@firebase/app-compat",mI="@firebase/analytics-compat",_I="@firebase/analytics",yI="@firebase/app-check-compat",vI="@firebase/app-check",wI="@firebase/auth",EI="@firebase/auth-compat",TI="@firebase/database",bI="@firebase/data-connect",II="@firebase/database-compat",AI="@firebase/functions",SI="@firebase/functions-compat",CI="@firebase/installations",RI="@firebase/installations-compat",PI="@firebase/messaging",kI="@firebase/messaging-compat",DI="@firebase/performance",OI="@firebase/performance-compat",NI="@firebase/remote-config",xI="@firebase/remote-config-compat",VI="@firebase/storage",MI="@firebase/storage-compat",LI="@firebase/firestore",FI="@firebase/ai",UI="@firebase/firestore-compat",jI="firebase",$I="12.13.0";/**
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
 */const eh="[DEFAULT]",BI={[Zu]:"fire-core",[gI]:"fire-core-compat",[_I]:"fire-analytics",[mI]:"fire-analytics-compat",[vI]:"fire-app-check",[yI]:"fire-app-check-compat",[wI]:"fire-auth",[EI]:"fire-auth-compat",[TI]:"fire-rtdb",[bI]:"fire-data-connect",[II]:"fire-rtdb-compat",[AI]:"fire-fn",[SI]:"fire-fn-compat",[CI]:"fire-iid",[RI]:"fire-iid-compat",[PI]:"fire-fcm",[kI]:"fire-fcm-compat",[DI]:"fire-perf",[OI]:"fire-perf-compat",[NI]:"fire-rc",[xI]:"fire-rc-compat",[VI]:"fire-gcs",[MI]:"fire-gcs-compat",[LI]:"fire-fst",[UI]:"fire-fst-compat",[FI]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
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
 */const ec=new Map,HI=new Map,th=new Map;function cp(n,e){try{n.container.addComponent(e)}catch(t){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function go(n){const e=n.name;if(th.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,n);for(const t of ec.values())cp(t,n);for(const t of HI.values())cp(t,n);return!0}function $h(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new ja("app","Firebase",qI);/**
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
 */class WI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=$I;function Hm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:eh,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Pr.create("bad-app-name",{appName:String(r)});if(t||(t=Fm()),!t)throw Pr.create("no-options");const i=ec.get(r);if(i){if(vi(t,i.options)&&vi(s,i.config))return i;throw Pr.create("duplicate-app",{appName:r})}const a=new Yb(r);for(const u of th.values())a.addComponent(u);const c=new WI(t,s,a);return ec.set(r,c),c}function qm(n=eh){const e=ec.get(n);if(!e&&n===eh&&Fm())return Hm();if(!e)throw Pr.create("no-app",{appName:n});return e}function kr(n,e,t){let s=BI[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(a.join(" "));return}go(new wi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zI="firebase-heartbeat-database",KI=1,Aa="firebase-heartbeat-store";let Ou=null;function Wm(){return Ou||(Ou=uI(zI,KI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Aa)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pr.create("idb-open",{originalErrorMessage:n.message})})),Ou}async function GI(n){try{const t=(await Wm()).transaction(Aa),s=await t.objectStore(Aa).get(zm(n));return await t.done,s}catch(e){if(e instanceof or)tr.warn(e.message);else{const t=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(t.message)}}}async function up(n,e){try{const s=(await Wm()).transaction(Aa,"readwrite");await s.objectStore(Aa).put(e,zm(n)),await s.done}catch(t){if(t instanceof or)tr.warn(t.message);else{const s=Pr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tr.warn(s.message)}}}function zm(n){return`${n.name}!${n.options.appId}`}/**
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
 */const QI=1024,JI=30;class YI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>JI){const a=eA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hp(),{heartbeatsToSend:s,unsentEntries:r}=XI(this._heartbeatsCache.heartbeats),i=Zl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return tr.warn(t),""}}}function hp(){return new Date().toISOString().substring(0,10)}function XI(n,e=QI){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),fp(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),fp(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ZI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ub()?jb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return up(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return up(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fp(n){return Zl(JSON.stringify({version:2,heartbeats:n})).length}function eA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function tA(n){go(new wi("platform-logger",e=>new dI(e),"PRIVATE")),go(new wi("heartbeat",e=>new YI(e),"PRIVATE")),kr(Zu,lp,n),kr(Zu,lp,"esm2020"),kr("fire-js","")}tA("");function Km(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nA=Km,Gm=new ja("auth","Firebase",Km());/**
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
 */const tc=new Uh("@firebase/auth");function sA(n,...e){tc.logLevel<=Me.WARN&&tc.warn(`Auth (${bo}): ${n}`,...e)}function Vl(n,...e){tc.logLevel<=Me.ERROR&&tc.error(`Auth (${bo}): ${n}`,...e)}/**
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
 */function As(n,...e){throw Hh(n,...e)}function Jn(n,...e){return Hh(n,...e)}function Bh(n,e,t){const s={...nA(),[e]:t};return new ja("auth","Firebase",s).create(e,{appName:n.name})}function yi(n){return Bh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rA(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&As(n,"argument-error"),Bh(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Gm.create(n,...e)}function _e(n,e,...t){if(!n)throw Hh(e,...t)}function Gs(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vl(e),new Error(e)}function nr(n,e){n||Gs(e)}/**
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
 */function nh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function iA(){return dp()==="http:"||dp()==="https:"}function dp(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iA()||Vb()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,nr(t>e,"Short delay should be less than long delay!"),this.isMobile=Ob()||Mb()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qh(n,e){nr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qm{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uA=new Ha(3e4,6e4);function Wh(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Io(n,e,t,s,r={}){return Jm(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=$a({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return xb()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Ba(n.emulatorConfig.host)&&(d.credentials="include"),Qm.fetch()(await Ym(n,n.config.apiHost,t,c),d)})}async function Jm(n,e,t){n._canInitEmulator=!1;const s={...lA,...e};try{const r=new fA(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Tl(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Tl(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Tl(n,"user-disabled",a);const g=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Bh(n,g,d);As(n,g)}}catch(r){if(r instanceof or)throw r;As(n,"network-request-failed",{message:String(r)})}}async function hA(n,e,t,s,r={}){const i=await Io(n,e,t,s,r);return"mfaPendingCredential"in i&&As(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ym(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?qh(n.config,r):`${n.config.apiScheme}://${r}`;return cA.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class fA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),uA.get())})}}function Tl(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Jn(n,e,s);return r.customData._tokenResponse=t,r}/**
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
 */async function dA(n,e){return Io(n,"POST","/v1/accounts:delete",e)}async function nc(n,e){return Io(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ga(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pA(n,e=!1){const t=bn(n),s=await t.getIdToken(e),r=zh(s);_e(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ga(Nu(r.auth_time)),issuedAtTime:ga(Nu(r.iat)),expirationTime:ga(Nu(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nu(n){return Number(n)*1e3}function zh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Vl("JWT malformed, contained fewer than 3 sections"),null;try{const r=Mm(t);return r?JSON.parse(r):(Vl("Failed to decode base64 JWT payload"),null)}catch(r){return Vl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function pp(n){const e=zh(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sa(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof or&&gA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function gA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sc(n){var _;const e=n.auth,t=await n.getIdToken(),s=await Sa(n,nc(e,{idToken:t}));_e(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(_=r.providerUserInfo)!=null&&_.length?Xm(r.providerUserInfo):[],a=yA(n.providerData,i),c=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new sh(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function _A(n){const e=bn(n);await sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yA(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Xm(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function vA(n,e){const t=await Jm(n,{},async()=>{const s=$a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Ym(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&Ba(n.emulatorConfig.host)&&(u.credentials="include"),Qm.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wA(n,e){return Io(n,"POST","/v2/accounts:revokeToken",Wh(n,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=pp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await vA(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new ro;return s&&(_e(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(_e(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(_e(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Gs("not implemented")}}/**
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
 */function br(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zn{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new mA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new sh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Sa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pA(this,e)}reload(){return _A(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await sc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await Sa(this,dA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:_,emailVerified:A,isAnonymous:x,providerData:Q,stsTokenManager:B}=t;_e(_&&B,e,"internal-error");const J=ro.fromJSON(this.name,B);_e(typeof _=="string",e,"internal-error"),br(s,e.name),br(r,e.name),_e(typeof A=="boolean",e,"internal-error"),_e(typeof x=="boolean",e,"internal-error"),br(i,e.name),br(a,e.name),br(c,e.name),br(u,e.name),br(d,e.name),br(g,e.name);const ne=new zn({uid:_,auth:e,email:r,emailVerified:A,displayName:s,isAnonymous:x,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:J,createdAt:d,lastLoginAt:g});return Q&&Array.isArray(Q)&&(ne.providerData=Q.map(Z=>({...Z}))),u&&(ne._redirectEventId=u),ne}static async _fromIdTokenResponse(e,t,s=!1){const r=new ro;r.updateFromServerResponse(t);const i=new zn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await sc(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];_e(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Xm(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new ro;c.updateFromIdToken(s);const u=new zn({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new sh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const gp=new Map;function Qs(n){nr(n instanceof Function,"Expected a class definition");let e=gp.get(n);return e?(nr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gp.set(n,e),e)}/**
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
 */class Zm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zm.type="NONE";const mp=Zm;/**
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
 */function Ml(n,e,t){return`firebase:${n}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ml(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ml("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await nc(this.auth,{idToken:e}).catch(()=>{});return t?zn._fromGetAccountInfoResponse(this.auth,t,e):null}return zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(Qs(mp),e,s);const r=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=r[0]||Qs(mp);const a=Ml(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const g=await d._get(a);if(g){let _;if(typeof g=="string"){const A=await nc(e,{idToken:g}).catch(()=>{});if(!A)break;_=await zn._fromGetAccountInfoResponse(e,A,g)}else _=zn._fromJSON(e,g);d!==i&&(c=_),i=d;break}}catch{}const u=r.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new io(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new io(i,e,s))}}/**
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
 */function _p(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i_(e))return"Blackberry";if(o_(e))return"Webos";if(t_(e))return"Safari";if((e.includes("chrome/")||n_(e))&&!e.includes("edge/"))return"Chrome";if(r_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function e_(n=sn()){return/firefox\//i.test(n)}function t_(n=sn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n_(n=sn()){return/crios\//i.test(n)}function s_(n=sn()){return/iemobile/i.test(n)}function r_(n=sn()){return/android/i.test(n)}function i_(n=sn()){return/blackberry/i.test(n)}function o_(n=sn()){return/webos/i.test(n)}function Kh(n=sn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function EA(n=sn()){var e;return Kh(n)&&!!((e=window.navigator)!=null&&e.standalone)}function TA(){return Lb()&&document.documentMode===10}function a_(n=sn()){return Kh(n)||r_(n)||o_(n)||i_(n)||/windows phone/i.test(n)||s_(n)}/**
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
 */function l_(n,e=[]){let t;switch(n){case"Browser":t=_p(sn());break;case"Worker":t=`${_p(sn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${s}`}/**
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
 */class bA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function IA(n,e={}){return Io(n,"GET","/v2/passwordPolicy",Wh(n,e))}/**
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
 */const AA=6;class SA{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??AA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class CA{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new bA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qs(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nc(this,{idToken:e}),s=await zn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Wn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(yi(this));const t=e?bn(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IA(this),t=new SA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await wA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qs(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[Qs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Oc(n){return bn(n)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wb(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RA(n){Gh=n}function PA(n){return Gh.loadJS(n)}function kA(){return Gh.gapiScript}function DA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function OA(n,e){const t=$h(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(vi(i,e??{}))return r;As(r,"already-initialized")}return t.initialize({options:e})}function NA(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Qs);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function xA(n,e,t){const s=Oc(n);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=c_(e),{host:a,port:c}=VA(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},g=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(vi(d,s.config.emulator)&&vi(g,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=g,s.settings.appVerificationDisabledForTesting=!0,Ba(a)?jm(`${i}//${a}${u}`):MA()}function c_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function VA(n){const e=c_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:vp(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:vp(a)}}}function vp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function MA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class u_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gs("not implemented")}_getIdTokenResponse(e){return Gs("not implemented")}_linkToIdToken(e,t){return Gs("not implemented")}_getReauthenticationResolver(e){return Gs("not implemented")}}/**
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
 */async function oo(n,e){return hA(n,"POST","/v1/accounts:signInWithIdp",Wh(n,e))}/**
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
 */const LA="http://localhost";class Ei extends u_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):As("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new Ei(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return oo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,oo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oo(e,t)}buildRequest(){const e={requestUri:LA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$a(t)}return e}}/**
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
 */class Qh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qa extends Qh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends qa{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class Ks extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ei._fromParams({providerId:Ks.PROVIDER_ID,signInMethod:Ks.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ks.credentialFromTaggedObject(e)}static credentialFromError(e){return Ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ks.credential(t,s)}catch{return null}}}Ks.GOOGLE_SIGN_IN_METHOD="google.com";Ks.PROVIDER_ID="google.com";/**
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
 */class Sr extends qa{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
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
 */class Cr extends qa{constructor(){super("twitter.com")}static credential(e,t){return Ei._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Cr.credential(t,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
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
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await zn._fromIdTokenResponse(e,s,r),a=wp(s);return new mo({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=wp(s);return new mo({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function wp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class rc extends or{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,rc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new rc(e,t,s,r)}}function h_(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?rc._fromErrorAndOperation(n,i,e,s):i})}async function FA(n,e,t=!1){const s=await Sa(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mo._forOperation(n,"link",s)}/**
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
 */async function UA(n,e,t=!1){const{auth:s}=n;if(Wn(s.app))return Promise.reject(yi(s));const r="reauthenticate";try{const i=await Sa(n,h_(s,r,e,n),t);_e(i.idToken,s,"internal-error");const a=zh(i.idToken);_e(a,s,"internal-error");const{sub:c}=a;return _e(n.uid===c,s,"user-mismatch"),mo._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&As(s,"user-mismatch"),i}}/**
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
 */async function jA(n,e,t=!1){if(Wn(n.app))return Promise.reject(yi(n));const s="signIn",r=await h_(n,s,e),i=await mo._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function $A(n,e,t,s){return bn(n).onIdTokenChanged(e,t,s)}function BA(n,e,t){return bn(n).beforeAuthStateChanged(e,t)}function HA(n,e,t,s){return bn(n).onAuthStateChanged(e,t,s)}function qA(n){return bn(n).signOut()}const ic="__sak";/**
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
 */class f_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const WA=1e3,zA=10;class d_ extends f_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);TA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,zA):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}d_.type="LOCAL";const KA=d_;/**
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
 */class p_ extends f_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}p_.type="SESSION";const g_=p_;/**
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
 */function GA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Nc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await GA(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nc.receivers=[];/**
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
 */function Jh(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class QA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Jh("",20);r.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(_){const A=_;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(A.data.response);break;default:clearTimeout(g),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function vs(){return window}function JA(n){vs().location.href=n}/**
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
 */function m_(){return typeof vs().WorkerGlobalScope<"u"&&typeof vs().importScripts=="function"}async function YA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ZA(){return m_()?self:null}/**
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
 */const __="firebaseLocalStorageDb",eS=1,oc="firebaseLocalStorage",y_="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xc(n,e){return n.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function tS(){const n=indexedDB.deleteDatabase(__);return new Wa(n).toPromise()}function rh(){const n=indexedDB.open(__,eS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(oc,{keyPath:y_})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(oc)?e(s):(s.close(),await tS(),e(await rh()))})})}async function Ep(n,e,t){const s=xc(n,!0).put({[y_]:e,value:t});return new Wa(s).toPromise()}async function nS(n,e){const t=xc(n,!1).get(e),s=await new Wa(t).toPromise();return s===void 0?null:s.value}function Tp(n,e){const t=xc(n,!0).delete(e);return new Wa(t).toPromise()}const sS=800,rS=3;class v_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return m_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nc._getInstance(ZA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await YA(),!this.activeServiceWorker)return;this.sender=new QA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rh();return await Ep(e,ic,"1"),await Tp(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ep(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>nS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=xc(r,!1).getAll();return new Wa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v_.type="LOCAL";const iS=v_;new Ha(3e4,6e4);/**
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
 */function w_(n,e){return e?Qs(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yh extends u_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oS(n){return jA(n.auth,new Yh(n),n.bypassAuthState)}function aS(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),UA(t,new Yh(n),n.bypassAuthState)}async function lS(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),FA(t,new Yh(n),n.bypassAuthState)}/**
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
 */class E_{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oS;case"linkViaPopup":case"linkViaRedirect":return lS;case"reauthViaPopup":case"reauthViaRedirect":return aS;default:As(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cS=new Ha(2e3,1e4);async function uS(n,e,t){if(Wn(n.app))return Promise.reject(Jn(n,"operation-not-supported-in-this-environment"));const s=Oc(n);rA(n,e,Qh);const r=w_(s,t);return new pi(s,"signInViaPopup",e,r).executeNotNull()}class pi extends E_{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cS.get())};e()}}pi.currentPopupAction=null;/**
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
 */const hS="pendingRedirect",Ll=new Map;class fS extends E_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const s=await dS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dS(n,e){const t=mS(e),s=gS(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function pS(n,e){Ll.set(n._key(),e)}function gS(n){return Qs(n._redirectPersistence)}function mS(n){return Ml(hS,n.config.apiKey,n.name)}async function _S(n,e,t=!1){if(Wn(n.app))return Promise.reject(yi(n));const s=Oc(n),r=w_(s,e),a=await new fS(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const yS=600*1e3;class vS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!T_(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yS&&this.cachedEventUids.clear(),this.cachedEventUids.has(bp(e))}saveEventToCache(e){this.cachedEventUids.add(bp(e)),this.lastProcessedEventTime=Date.now()}}function bp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function T_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wS(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return T_(n);default:return!1}}/**
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
 */async function ES(n,e={}){return Io(n,"GET","/v1/projects",e)}/**
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
 */const TS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bS=/^https?/;async function IS(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ES(n);for(const t of e)try{if(AS(t))return}catch{}As(n,"unauthorized-domain")}function AS(n){const e=nh(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!bS.test(t))return!1;if(TS.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const SS=new Ha(3e4,6e4);function Ip(){const n=vs().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CS(n){return new Promise((e,t)=>{var r,i,a;function s(){Ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ip(),t(Jn(n,"network-request-failed"))},timeout:SS.get()})}if((i=(r=vs().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=vs().gapi)!=null&&a.load)s();else{const c=DA("iframefcb");return vs()[c]=()=>{gapi.load?s():t(Jn(n,"network-request-failed"))},PA(`${kA()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function RS(n){return Fl=Fl||CS(n),Fl}/**
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
 */const PS=new Ha(5e3,15e3),kS="__/auth/iframe",DS="emulator/auth/iframe",OS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xS(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qh(e,DS):`https://${n.config.authDomain}/${kS}`,s={apiKey:e.apiKey,appName:n.name,v:bo},r=NS.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${$a(s).slice(1)}`}async function VS(n){const e=await RS(n),t=vs().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:xS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OS,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=Jn(n,"network-request-failed"),c=vs().setTimeout(()=>{i(a)},PS.get());function u(){vs().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const MS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LS=500,FS=600,US="_blank",jS="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $S(n,e,t,s=LS,r=FS){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...MS,width:s.toString(),height:r.toString(),top:i,left:a},d=sn().toLowerCase();t&&(c=n_(d)?US:t),e_(d)&&(e=e||jS,u.scrollbars="yes");const g=Object.entries(u).reduce((A,[x,Q])=>`${A}${x}=${Q},`,"");if(EA(d)&&c!=="_self")return BS(e||"",c),new Ap(null);const _=window.open(e||"",c,g);_e(_,n,"popup-blocked");try{_.focus()}catch{}return new Ap(_)}function BS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const HS="__/auth/handler",qS="emulator/auth/handler",WS=encodeURIComponent("fac");async function Sp(n,e,t,s,r,i){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:bo,eventId:r};if(e instanceof Qh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",qb(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,_]of Object.entries({}))a[g]=_}if(e instanceof qa){const g=e.getScopes().filter(_=>_!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await n._getAppCheckToken(),d=u?`#${WS}=${encodeURIComponent(u)}`:"";return`${zS(n)}?${$a(c).slice(1)}${d}`}function zS({config:n}){return n.emulator?qh(n,qS):`https://${n.authDomain}/${HS}`}/**
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
 */const xu="webStorageSupport";class KS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=_S,this._overrideRedirectResult=pS}async _openPopup(e,t,s,r){var a;nr((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Sp(e,t,s,nh(),r);return $S(e,i,Jh())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Sp(e,t,s,nh(),r);return JA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(nr(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await VS(e),s=new vS(e);return t.register("authEvent",r=>(_e(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xu,{type:xu},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[xu];i!==void 0&&t(!!i),As(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=IS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return a_()||t_()||Kh()}}const GS=KS;var Cp="@firebase/auth",Rp="1.13.1";/**
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
 */class QS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YS(n){go(new wi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;_e(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l_(n)},d=new CA(s,r,i,u);return NA(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),go(new wi("auth-internal",e=>{const t=Oc(e.getProvider("auth").getImmediate());return(s=>new QS(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kr(Cp,Rp,JS(n)),kr(Cp,Rp,"esm2020")}/**
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
 */const XS=300,ZS=Um("authIdTokenMaxAge")||XS;let Pp=null;const eC=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ZS)return;const r=t==null?void 0:t.token;Pp!==r&&(Pp=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function tC(n=qm()){const e=$h(n,"auth");if(e.isInitialized())return e.getImmediate();const t=OA(n,{popupRedirectResolver:GS,persistence:[iS,KA,g_]}),s=Um("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=eC(i.toString());BA(t,a,()=>a(t.currentUser)),$A(t,c=>a(c))}}const r=Lm("auth");return r&&xA(t,`http://${r}`),t}function nC(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}RA({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Jn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",nC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YS("Browser");var kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,b_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function b(){}b.prototype=w.prototype,S.F=w.prototype,S.prototype=new b,S.prototype.constructor=S,S.D=function(R,I,O){for(var E=Array(arguments.length-2),st=2;st<arguments.length;st++)E[st-2]=arguments[st];return w.prototype[I].apply(R,E)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,w,b){b||(b=0);const R=Array(16);if(typeof w=="string")for(var I=0;I<16;++I)R[I]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(I=0;I<16;++I)R[I]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=S.g[0],b=S.g[1],I=S.g[2];let O=S.g[3],E;E=w+(O^b&(I^O))+R[0]+3614090360&4294967295,w=b+(E<<7&4294967295|E>>>25),E=O+(I^w&(b^I))+R[1]+3905402710&4294967295,O=w+(E<<12&4294967295|E>>>20),E=I+(b^O&(w^b))+R[2]+606105819&4294967295,I=O+(E<<17&4294967295|E>>>15),E=b+(w^I&(O^w))+R[3]+3250441966&4294967295,b=I+(E<<22&4294967295|E>>>10),E=w+(O^b&(I^O))+R[4]+4118548399&4294967295,w=b+(E<<7&4294967295|E>>>25),E=O+(I^w&(b^I))+R[5]+1200080426&4294967295,O=w+(E<<12&4294967295|E>>>20),E=I+(b^O&(w^b))+R[6]+2821735955&4294967295,I=O+(E<<17&4294967295|E>>>15),E=b+(w^I&(O^w))+R[7]+4249261313&4294967295,b=I+(E<<22&4294967295|E>>>10),E=w+(O^b&(I^O))+R[8]+1770035416&4294967295,w=b+(E<<7&4294967295|E>>>25),E=O+(I^w&(b^I))+R[9]+2336552879&4294967295,O=w+(E<<12&4294967295|E>>>20),E=I+(b^O&(w^b))+R[10]+4294925233&4294967295,I=O+(E<<17&4294967295|E>>>15),E=b+(w^I&(O^w))+R[11]+2304563134&4294967295,b=I+(E<<22&4294967295|E>>>10),E=w+(O^b&(I^O))+R[12]+1804603682&4294967295,w=b+(E<<7&4294967295|E>>>25),E=O+(I^w&(b^I))+R[13]+4254626195&4294967295,O=w+(E<<12&4294967295|E>>>20),E=I+(b^O&(w^b))+R[14]+2792965006&4294967295,I=O+(E<<17&4294967295|E>>>15),E=b+(w^I&(O^w))+R[15]+1236535329&4294967295,b=I+(E<<22&4294967295|E>>>10),E=w+(I^O&(b^I))+R[1]+4129170786&4294967295,w=b+(E<<5&4294967295|E>>>27),E=O+(b^I&(w^b))+R[6]+3225465664&4294967295,O=w+(E<<9&4294967295|E>>>23),E=I+(w^b&(O^w))+R[11]+643717713&4294967295,I=O+(E<<14&4294967295|E>>>18),E=b+(O^w&(I^O))+R[0]+3921069994&4294967295,b=I+(E<<20&4294967295|E>>>12),E=w+(I^O&(b^I))+R[5]+3593408605&4294967295,w=b+(E<<5&4294967295|E>>>27),E=O+(b^I&(w^b))+R[10]+38016083&4294967295,O=w+(E<<9&4294967295|E>>>23),E=I+(w^b&(O^w))+R[15]+3634488961&4294967295,I=O+(E<<14&4294967295|E>>>18),E=b+(O^w&(I^O))+R[4]+3889429448&4294967295,b=I+(E<<20&4294967295|E>>>12),E=w+(I^O&(b^I))+R[9]+568446438&4294967295,w=b+(E<<5&4294967295|E>>>27),E=O+(b^I&(w^b))+R[14]+3275163606&4294967295,O=w+(E<<9&4294967295|E>>>23),E=I+(w^b&(O^w))+R[3]+4107603335&4294967295,I=O+(E<<14&4294967295|E>>>18),E=b+(O^w&(I^O))+R[8]+1163531501&4294967295,b=I+(E<<20&4294967295|E>>>12),E=w+(I^O&(b^I))+R[13]+2850285829&4294967295,w=b+(E<<5&4294967295|E>>>27),E=O+(b^I&(w^b))+R[2]+4243563512&4294967295,O=w+(E<<9&4294967295|E>>>23),E=I+(w^b&(O^w))+R[7]+1735328473&4294967295,I=O+(E<<14&4294967295|E>>>18),E=b+(O^w&(I^O))+R[12]+2368359562&4294967295,b=I+(E<<20&4294967295|E>>>12),E=w+(b^I^O)+R[5]+4294588738&4294967295,w=b+(E<<4&4294967295|E>>>28),E=O+(w^b^I)+R[8]+2272392833&4294967295,O=w+(E<<11&4294967295|E>>>21),E=I+(O^w^b)+R[11]+1839030562&4294967295,I=O+(E<<16&4294967295|E>>>16),E=b+(I^O^w)+R[14]+4259657740&4294967295,b=I+(E<<23&4294967295|E>>>9),E=w+(b^I^O)+R[1]+2763975236&4294967295,w=b+(E<<4&4294967295|E>>>28),E=O+(w^b^I)+R[4]+1272893353&4294967295,O=w+(E<<11&4294967295|E>>>21),E=I+(O^w^b)+R[7]+4139469664&4294967295,I=O+(E<<16&4294967295|E>>>16),E=b+(I^O^w)+R[10]+3200236656&4294967295,b=I+(E<<23&4294967295|E>>>9),E=w+(b^I^O)+R[13]+681279174&4294967295,w=b+(E<<4&4294967295|E>>>28),E=O+(w^b^I)+R[0]+3936430074&4294967295,O=w+(E<<11&4294967295|E>>>21),E=I+(O^w^b)+R[3]+3572445317&4294967295,I=O+(E<<16&4294967295|E>>>16),E=b+(I^O^w)+R[6]+76029189&4294967295,b=I+(E<<23&4294967295|E>>>9),E=w+(b^I^O)+R[9]+3654602809&4294967295,w=b+(E<<4&4294967295|E>>>28),E=O+(w^b^I)+R[12]+3873151461&4294967295,O=w+(E<<11&4294967295|E>>>21),E=I+(O^w^b)+R[15]+530742520&4294967295,I=O+(E<<16&4294967295|E>>>16),E=b+(I^O^w)+R[2]+3299628645&4294967295,b=I+(E<<23&4294967295|E>>>9),E=w+(I^(b|~O))+R[0]+4096336452&4294967295,w=b+(E<<6&4294967295|E>>>26),E=O+(b^(w|~I))+R[7]+1126891415&4294967295,O=w+(E<<10&4294967295|E>>>22),E=I+(w^(O|~b))+R[14]+2878612391&4294967295,I=O+(E<<15&4294967295|E>>>17),E=b+(O^(I|~w))+R[5]+4237533241&4294967295,b=I+(E<<21&4294967295|E>>>11),E=w+(I^(b|~O))+R[12]+1700485571&4294967295,w=b+(E<<6&4294967295|E>>>26),E=O+(b^(w|~I))+R[3]+2399980690&4294967295,O=w+(E<<10&4294967295|E>>>22),E=I+(w^(O|~b))+R[10]+4293915773&4294967295,I=O+(E<<15&4294967295|E>>>17),E=b+(O^(I|~w))+R[1]+2240044497&4294967295,b=I+(E<<21&4294967295|E>>>11),E=w+(I^(b|~O))+R[8]+1873313359&4294967295,w=b+(E<<6&4294967295|E>>>26),E=O+(b^(w|~I))+R[15]+4264355552&4294967295,O=w+(E<<10&4294967295|E>>>22),E=I+(w^(O|~b))+R[6]+2734768916&4294967295,I=O+(E<<15&4294967295|E>>>17),E=b+(O^(I|~w))+R[13]+1309151649&4294967295,b=I+(E<<21&4294967295|E>>>11),E=w+(I^(b|~O))+R[4]+4149444226&4294967295,w=b+(E<<6&4294967295|E>>>26),E=O+(b^(w|~I))+R[11]+3174756917&4294967295,O=w+(E<<10&4294967295|E>>>22),E=I+(w^(O|~b))+R[2]+718787259&4294967295,I=O+(E<<15&4294967295|E>>>17),E=b+(O^(I|~w))+R[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+I&4294967295,S.g[3]=S.g[3]+O&4294967295}s.prototype.v=function(S,w){w===void 0&&(w=S.length);const b=w-this.blockSize,R=this.C;let I=this.h,O=0;for(;O<w;){if(I==0)for(;O<=b;)r(this,S,O),O+=this.blockSize;if(typeof S=="string"){for(;O<w;)if(R[I++]=S.charCodeAt(O++),I==this.blockSize){r(this,R),I=0;break}}else for(;O<w;)if(R[I++]=S[O++],I==this.blockSize){r(this,R),I=0;break}}this.h=I,this.o+=w},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var b=S.length-8;b<S.length;++b)S[b]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,b=0;b<4;++b)for(let R=0;R<32;R+=8)S[w++]=this.g[b]>>>R&255;return S};function i(S,w){var b=c;return Object.prototype.hasOwnProperty.call(b,S)?b[S]:b[S]=w(S)}function a(S,w){this.h=w;const b=[];let R=!0;for(let I=S.length-1;I>=0;I--){const O=S[I]|0;R&&O==w||(b[I]=O,R=!1)}this.g=b}var c={};function u(S){return-128<=S&&S<128?i(S,function(w){return new a([w|0],w<0?-1:0)}):new a([S|0],S<0?-1:0)}function d(S){if(isNaN(S)||!isFinite(S))return _;if(S<0)return J(d(-S));const w=[];let b=1;for(let R=0;S>=b;R++)w[R]=S/b|0,b*=4294967296;return new a(w,0)}function g(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return J(g(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(w,8));let R=_;for(let O=0;O<S.length;O+=8){var I=Math.min(8,S.length-O);const E=parseInt(S.substring(O,O+I),w);I<8?(I=d(Math.pow(w,I)),R=R.j(I).add(d(E))):(R=R.j(b),R=R.add(d(E)))}return R}var _=u(0),A=u(1),x=u(16777216);n=a.prototype,n.m=function(){if(B(this))return-J(this).m();let S=0,w=1;for(let b=0;b<this.g.length;b++){const R=this.i(b);S+=(R>=0?R:4294967296+R)*w,w*=4294967296}return S},n.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(Q(this))return"0";if(B(this))return"-"+J(this).toString(S);const w=d(Math.pow(S,6));var b=this;let R="";for(;;){const I=oe(b,w).g;b=ne(b,I.j(w));let O=((b.g.length>0?b.g[0]:b.h)>>>0).toString(S);if(b=I,Q(b))return O+R;for(;O.length<6;)O="0"+O;R=O+R}},n.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function Q(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function B(S){return S.h==-1}n.l=function(S){return S=ne(this,S),B(S)?-1:Q(S)?0:1};function J(S){const w=S.g.length,b=[];for(let R=0;R<w;R++)b[R]=~S.g[R];return new a(b,~S.h).add(A)}n.abs=function(){return B(this)?J(this):this},n.add=function(S){const w=Math.max(this.g.length,S.g.length),b=[];let R=0;for(let I=0;I<=w;I++){let O=R+(this.i(I)&65535)+(S.i(I)&65535),E=(O>>>16)+(this.i(I)>>>16)+(S.i(I)>>>16);R=E>>>16,O&=65535,E&=65535,b[I]=E<<16|O}return new a(b,b[b.length-1]&-2147483648?-1:0)};function ne(S,w){return S.add(J(w))}n.j=function(S){if(Q(this)||Q(S))return _;if(B(this))return B(S)?J(this).j(J(S)):J(J(this).j(S));if(B(S))return J(this.j(J(S)));if(this.l(x)<0&&S.l(x)<0)return d(this.m()*S.m());const w=this.g.length+S.g.length,b=[];for(var R=0;R<2*w;R++)b[R]=0;for(R=0;R<this.g.length;R++)for(let I=0;I<S.g.length;I++){const O=this.i(R)>>>16,E=this.i(R)&65535,st=S.i(I)>>>16,qt=S.i(I)&65535;b[2*R+2*I]+=E*qt,Z(b,2*R+2*I),b[2*R+2*I+1]+=O*qt,Z(b,2*R+2*I+1),b[2*R+2*I+1]+=E*st,Z(b,2*R+2*I+1),b[2*R+2*I+2]+=O*st,Z(b,2*R+2*I+2)}for(S=0;S<w;S++)b[S]=b[2*S+1]<<16|b[2*S];for(S=w;S<2*w;S++)b[S]=0;return new a(b,0)};function Z(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function ie(S,w){this.g=S,this.h=w}function oe(S,w){if(Q(w))throw Error("division by zero");if(Q(S))return new ie(_,_);if(B(S))return w=oe(J(S),w),new ie(J(w.g),J(w.h));if(B(w))return w=oe(S,J(w)),new ie(J(w.g),w.h);if(S.g.length>30){if(B(S)||B(w))throw Error("slowDivide_ only works with positive integers.");for(var b=A,R=w;R.l(S)<=0;)b=Ce(b),R=Ce(R);var I=Be(b,1),O=Be(R,1);for(R=Be(R,2),b=Be(b,2);!Q(R);){var E=O.add(R);E.l(S)<=0&&(I=I.add(b),O=E),R=Be(R,1),b=Be(b,1)}return w=ne(S,I.j(w)),new ie(I,w)}for(I=_;S.l(w)>=0;){for(b=Math.max(1,Math.floor(S.m()/w.m())),R=Math.ceil(Math.log(b)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),O=d(b),E=O.j(w);B(E)||E.l(S)>0;)b-=R,O=d(b),E=O.j(w);Q(O)&&(O=A),I=I.add(O),S=ne(S,E)}return new ie(I,S)}n.B=function(S){return oe(this,S).h},n.and=function(S){const w=Math.max(this.g.length,S.g.length),b=[];for(let R=0;R<w;R++)b[R]=this.i(R)&S.i(R);return new a(b,this.h&S.h)},n.or=function(S){const w=Math.max(this.g.length,S.g.length),b=[];for(let R=0;R<w;R++)b[R]=this.i(R)|S.i(R);return new a(b,this.h|S.h)},n.xor=function(S){const w=Math.max(this.g.length,S.g.length),b=[];for(let R=0;R<w;R++)b[R]=this.i(R)^S.i(R);return new a(b,this.h^S.h)};function Ce(S){const w=S.g.length+1,b=[];for(let R=0;R<w;R++)b[R]=S.i(R)<<1|S.i(R-1)>>>31;return new a(b,S.h)}function Be(S,w){const b=w>>5;w%=32;const R=S.g.length-b,I=[];for(let O=0;O<R;O++)I[O]=w>0?S.i(O+b)>>>w|S.i(O+b+1)<<32-w:S.i(O+b);return new a(I,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,b_=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,Dr=a}).apply(typeof kp<"u"?kp:typeof self<"u"?self:typeof window<"u"?window:{});var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var I_,ra,A_,Ul,ih,S_,C_,R_;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bl=="object"&&bl];for(var h=0;h<o.length;++h){var p=o[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function r(o,h){if(h)e:{var p=s;o=o.split(".");for(var v=0;v<o.length-1;v++){var V=o[v];if(!(V in p))break e;p=p[V]}o=o[o.length-1],v=p[o],h=h(v),h!=v&&h!=null&&e(p,o,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(h){var p=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&p.push([v,h[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function u(o,h,p){return o.call.apply(o.bind,arguments)}function d(o,h,p){return d=u,d.apply(null,arguments)}function g(o,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),o.apply(this,v)}}function _(o,h){function p(){}p.prototype=h.prototype,o.Z=h.prototype,o.prototype=new p,o.prototype.constructor=o,o.Ob=function(v,V,M){for(var Y=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)Y[Re-2]=arguments[Re];return h.prototype[V].apply(v,Y)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function x(o){const h=o.length;if(h>0){const p=Array(h);for(let v=0;v<h;v++)p[v]=o[v];return p}return[]}function Q(o,h){for(let v=1;v<arguments.length;v++){const V=arguments[v];var p=typeof V;if(p=p!="object"?p:V?Array.isArray(V)?"array":p:"null",p=="array"||p=="object"&&typeof V.length=="number"){p=o.length||0;const M=V.length||0;o.length=p+M;for(let Y=0;Y<M;Y++)o[p+Y]=V[Y]}else o.push(V)}}class B{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function J(o){a.setTimeout(()=>{throw o},0)}function ne(){var o=S;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class Z{constructor(){this.h=this.g=null}add(h,p){const v=ie.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ie=new B(()=>new oe,o=>o.reset());class oe{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Be=!1,S=new Z,w=()=>{const o=Promise.resolve(void 0);Ce=()=>{o.then(b)}};function b(){for(var o;o=ne();){try{o.h.call(o.g)}catch(p){J(p)}var h=ie;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}Be=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return o})();function E(o){return/^[\s\xa0]*$/.test(o)}function st(o,h){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}_(st,I),st.prototype.init=function(o,h){const p=this.type=o.type,v=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(p=="mouseover"?h=o.fromElement:p=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var qt="closure_listenable_"+(Math.random()*1e6|0),at=0;function He(o,h,p,v,V){this.listener=o,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=V,this.key=++at,this.da=this.fa=!1}function De(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ct(o,h,p){for(const v in o)h.call(p,o[v],v,o)}function Ln(o,h){for(const p in o)h.call(void 0,o[p],p,o)}function $(o){const h={};for(const p in o)h[p]=o[p];return h}const Rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fn(o,h){let p,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(p in v)o[p]=v[p];for(let M=0;M<Rt.length;M++)p=Rt[M],Object.prototype.hasOwnProperty.call(v,p)&&(o[p]=v[p])}}function In(o){this.src=o,this.g={},this.h=0}In.prototype.add=function(o,h,p,v,V){const M=o.toString();o=this.g[M],o||(o=this.g[M]=[],this.h++);const Y=Ft(o,h,v,V);return Y>-1?(h=o[Y],p||(h.fa=!1)):(h=new He(h,this.src,M,!!v,V),h.fa=p,o.push(h)),h};function Et(o,h){const p=h.type;if(p in o.g){var v=o.g[p],V=Array.prototype.indexOf.call(v,h,void 0),M;(M=V>=0)&&Array.prototype.splice.call(v,V,1),M&&(De(h),o.g[p].length==0&&(delete o.g[p],o.h--))}}function Ft(o,h,p,v){for(let V=0;V<o.length;++V){const M=o[V];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==v)return V}return-1}var lt="closure_lm_"+(Math.random()*1e6|0),yn={};function ce(o,h,p,v,V){if(Array.isArray(h)){for(let M=0;M<h.length;M++)ce(o,h[M],p,v,V);return null}return p=W(p),o&&o[qt]?o.J(h,p,c(v)?!!v.capture:!1,V):fn(o,h,p,!1,v,V)}function fn(o,h,p,v,V,M){if(!h)throw Error("Invalid event type");const Y=c(V)?!!V.capture:!!V;let Re=P(o);if(Re||(o[lt]=Re=new In(o)),p=Re.add(h,p,v,Y,M),p.proxy)return p;if(v=Br(),p.proxy=v,v.src=o,v.listener=p,o.addEventListener)O||(V=Y),V===void 0&&(V=!1),o.addEventListener(h.toString(),v,V);else if(o.attachEvent)o.attachEvent(U(h.toString()),v);else if(o.addListener&&o.removeListener)o.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Br(){function o(p){return h.call(o.src,o.listener,p)}const h=N;return o}function T(o,h,p,v,V){if(Array.isArray(h))for(var M=0;M<h.length;M++)T(o,h[M],p,v,V);else v=c(v)?!!v.capture:!!v,p=W(p),o&&o[qt]?(o=o.i,M=String(h).toString(),M in o.g&&(h=o.g[M],p=Ft(h,p,v,V),p>-1&&(De(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete o.g[M],o.h--)))):o&&(o=P(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Ft(h,p,v,V)),(p=o>-1?h[o]:null)&&C(p))}function C(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[qt])Et(h.i,o);else{var p=o.type,v=o.proxy;h.removeEventListener?h.removeEventListener(p,v,o.capture):h.detachEvent?h.detachEvent(U(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=P(h))?(Et(p,o),p.h==0&&(p.src=null,h[lt]=null)):De(o)}}}function U(o){return o in yn?yn[o]:yn[o]="on"+o}function N(o,h){if(o.da)o=!0;else{h=new st(h,this);const p=o.listener,v=o.ha||o.src;o.fa&&C(o),o=p.call(v,h)}return o}function P(o){return o=o[lt],o instanceof In?o:null}var L="__closure_events_fn_"+(Math.random()*1e9>>>0);function W(o){return typeof o=="function"?o:(o[L]||(o[L]=function(h){return o.handleEvent(h)}),o[L])}function K(){R.call(this),this.i=new In(this),this.M=this,this.G=null}_(K,R),K.prototype[qt]=!0,K.prototype.removeEventListener=function(o,h,p,v){T(this,o,h,p,v)};function F(o,h){var p,v=o.G;if(v)for(p=[];v;v=v.G)p.push(v);if(o=o.M,v=h.type||h,typeof h=="string")h=new I(h,o);else if(h instanceof I)h.target=h.target||o;else{var V=h;h=new I(v,o),Fn(h,V)}V=!0;let M,Y;if(p)for(Y=p.length-1;Y>=0;Y--)M=h.g=p[Y],V=q(M,v,!0,h)&&V;if(M=h.g=o,V=q(M,v,!0,h)&&V,V=q(M,v,!1,h)&&V,p)for(Y=0;Y<p.length;Y++)M=h.g=p[Y],V=q(M,v,!1,h)&&V}K.prototype.N=function(){if(K.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const p=o.g[h];for(let v=0;v<p.length;v++)De(p[v]);delete o.g[h],o.h--}}this.G=null},K.prototype.J=function(o,h,p,v){return this.i.add(String(o),h,!1,p,v)},K.prototype.K=function(o,h,p,v){return this.i.add(String(o),h,!0,p,v)};function q(o,h,p,v){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let V=!0;for(let M=0;M<h.length;++M){const Y=h[M];if(Y&&!Y.da&&Y.capture==p){const Re=Y.listener,yt=Y.ha||Y.src;Y.fa&&Et(o.i,Y),V=Re.call(yt,v)!==!1&&V}}return V&&!v.defaultPrevented}function de(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function ee(o){o.g=de(()=>{o.g=null,o.i&&(o.i=!1,ee(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class he extends R{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fe(o){R.call(this),this.h=o,this.g={}}_(fe,R);var Ee=[];function $e(o){Ct(o.g,function(h,p){this.g.hasOwnProperty(p)&&C(h)},o),o.g={}}fe.prototype.N=function(){fe.Z.N.call(this),$e(this)},fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fe=a.JSON.stringify,dt=a.JSON.parse,ct=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Tt(){}function bt(){}var Wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ar(){I.call(this,"d")}_(ar,I);function _t(){I.call(this,"c")}_(_t,I);var It={},Hr=null;function Ps(){return Hr=Hr||new K}It.Ia="serverreachability";function Xa(o){I.call(this,It.Ia,o)}_(Xa,I);function qr(o){const h=Ps();F(h,new Xa(h))}It.STAT_EVENT="statevent";function Za(o,h){I.call(this,It.STAT_EVENT,o),this.stat=h}_(Za,I);function Nt(o){const h=Ps();F(h,new Za(h,o))}It.Ja="timingevent";function Wr(o,h){I.call(this,It.Ja,o),this.size=h}_(Wr,I);function lr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function cr(){this.g=!0}cr.prototype.ua=function(){this.g=!1};function Qc(o,h,p,v,V,M){o.info(function(){if(o.g)if(M){var Y="",Re=M.split("&");for(let Ue=0;Ue<Re.length;Ue++){var yt=Re[Ue].split("=");if(yt.length>1){const rt=yt[0];yt=yt[1];const Cn=rt.split("_");Y=Cn.length>=2&&Cn[1]=="type"?Y+(rt+"="+yt+"&"):Y+(rt+"=redacted&")}}}else Y=null;else Y=M;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+h+`
`+p+`
`+Y})}function Jc(o,h,p,v,V,M,Y){o.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+h+`
`+p+`
`+M+" "+Y})}function ur(o,h,p,v){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+hr(o,p)+(v?" "+v:"")})}function Yc(o,h){o.info(function(){return"TIMEOUT: "+h})}cr.prototype.info=function(){};function hr(o,h){if(!o.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(o=0;o<M.length;o++)if(Array.isArray(M[o])){var p=M[o];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var V=v[0];if(V!="noop"&&V!="stop"&&V!="close")for(let Y=1;Y<v.length;Y++)v[Y]=""}}}}return Fe(M)}catch{return h}}var es={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},el={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tl;function ko(){}_(ko,Tt),ko.prototype.g=function(){return new XMLHttpRequest},tl=new ko;function zr(o){return encodeURIComponent(String(o))}function Xc(o){var h=1;o=o.split(":");const p=[];for(;h>0&&o.length;)p.push(o.shift()),h--;return o.length&&p.push(o.join(":")),p}function An(o,h,p,v){this.j=o,this.i=h,this.l=p,this.S=v||1,this.V=new fe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ks}function ks(){this.i=null,this.g="",this.h=!1}var Kr={},Do={};function Gr(o,h,p){o.M=1,o.A=Jr(vn(h)),o.u=p,o.R=!0,nl(o,null)}function nl(o,h){o.F=Date.now(),xt(o),o.B=vn(o.A);var p=o.B,v=o.S;Array.isArray(v)||(v=[String(v)]),xi(p.i,"t",v),o.C=0,p=o.j.L,o.h=new ks,o.g=ll(o.j,p?h:null,!o.u),o.P>0&&(o.O=new he(d(o.Y,o,o.g),o.P)),h=o.V,p=o.g,v=o.ba;var V="readystatechange";Array.isArray(V)||(V&&(Ee[0]=V.toString()),V=Ee);for(let M=0;M<V.length;M++){const Y=ce(p,V[M],v||h.handleEvent,!1,h.h||h);if(!Y)break;h.g[Y.key]=Y}h=o.J?$(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),qr(),Qc(o.i,o.v,o.B,o.l,o.S,o.u)}An.prototype.ba=function(o){o=o.target;const h=this.O;h&&Bn(o)==3?h.j():this.Y(o)},An.prototype.Y=function(o){try{if(o==this.g)e:{const Re=Bn(this.g),yt=this.g.ya(),Ue=this.g.ca();if(!(Re<3)&&(Re!=3||this.g&&(this.h.h||this.g.la()||Ui(this.g)))){this.K||Re!=4||yt==7||(yt==8||Ue<=0?qr(3):qr(2)),Pt(this);var h=this.g.ca();this.X=h;var p=Zc(this);if(this.o=h==200,Jc(this.i,this.v,this.B,this.l,this.S,Re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,V=this.g;if((v=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(v)){var M=v;break t}}M=null}if(o=M)ur(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Un(this,o);else{this.o=!1,this.m=3,Nt(12),dn(this),ts(this);break e}}if(this.R){o=!0;let rt;for(;!this.K&&this.C<p.length;)if(rt=Ut(this,p),rt==Do){Re==4&&(this.m=4,Nt(14),o=!1),ur(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==Kr){this.m=4,Nt(15),ur(this.i,this.l,p,"[Invalid Chunk]"),o=!1;break}else ur(this.i,this.l,rt,null),Un(this,rt);if(Ds(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||p.length!=0||this.h.h||(this.m=1,Nt(16),o=!1),this.o=this.o&&o,!o)ur(this.i,this.l,p,"[Invalid Chunked Response]"),dn(this),ts(this);else if(p.length>0&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.aa&&!Y.P&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),$i(Y),Y.P=!0,Nt(11))}}else ur(this.i,this.l,p,null),Un(this,p);Re==4&&dn(this),this.o&&!this.K&&(Re==4?ol(this.j,this):(this.o=!1,xt(this)))}else Bo(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Nt(12)):(this.m=0,Nt(13)),dn(this),ts(this)}}}catch{}finally{}};function Zc(o){if(!Ds(o))return o.g.la();const h=Ui(o.g);if(h==="")return"";let p="";const v=h.length,V=Bn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return dn(o),ts(o),"";o.h.i=new a.TextDecoder}for(let M=0;M<v;M++)o.h.h=!0,p+=o.h.i.decode(h[M],{stream:!(V&&M==v-1)});return h.length=0,o.h.g+=p,o.C=0,o.h.g}function Ds(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Ut(o,h){var p=o.C,v=h.indexOf(`
`,p);return v==-1?Do:(p=Number(h.substring(p,v)),isNaN(p)?Kr:(v+=1,v+p>h.length?Do:(h=h.slice(v,v+p),o.C=v+p,h)))}An.prototype.cancel=function(){this.K=!0,dn(this)};function xt(o){o.T=Date.now()+o.H,zt(o,o.H)}function zt(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=lr(d(o.aa,o),h)}function Pt(o){o.D&&(a.clearTimeout(o.D),o.D=null)}An.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Yc(this.i,this.B),this.M!=2&&(qr(),Nt(17)),dn(this),this.m=2,ts(this)):zt(this,this.T-o)};function ts(o){o.j.I==0||o.K||ol(o.j,o)}function dn(o){Pt(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,$e(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function Un(o,h){try{var p=o.j;if(p.I!=0&&(p.g==o||ki(p.h,o))){if(!o.L&&ki(p.h,o)&&p.I==3){try{var v=p.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<o.F)ti(p),_r(p);else break e;ji(p),Nt(18)}}else p.xa=V[1],0<p.xa-p.K&&V[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=lr(d(p.Va,p),6e3));Os(p.h)<=1&&p.ta&&(p.ta=void 0)}else is(p,11)}else if((o.L||p.g==o)&&ti(p),!E(h))for(V=p.Ba.g.parse(h),h=0;h<V.length;h++){let Ue=V[h];const rt=Ue[0];if(!(rt<=p.K))if(p.K=rt,Ue=Ue[1],p.I==2)if(Ue[0]=="c"){p.M=Ue[1],p.ba=Ue[2];const Cn=Ue[3];Cn!=null&&(p.ka=Cn,p.j.info("VER="+p.ka));const Rn=Ue[4];Rn!=null&&(p.za=Rn,p.j.info("SVER="+p.za));const ls=Ue[5];ls!=null&&typeof ls=="number"&&ls>0&&(v=1.5*ls,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const cs=o.g;if(cs){const Hi=cs.g?cs.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var M=v.h;M.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Qr(M,M.h),M.h=null))}if(v.G){const Qo=cs.g?cs.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(v.wa=Qo,Ye(v.J,v.G,Qo))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-o.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var Y=o;if(v.na=ni(v,v.L?v.ba:null,v.W),Y.L){Di(v.h,Y);var Re=Y,yt=v.O;yt&&(Re.H=yt),Re.D&&(Pt(Re),xt(Re)),v.g=Y}else zo(v);p.i.length>0&&ei(p)}else Ue[0]!="stop"&&Ue[0]!="close"||is(p,7);else p.I==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?is(p,7):Fs(p):Ue[0]!="noop"&&p.l&&p.l.qa(Ue),p.A=0)}}qr(4)}catch{}}var fr=class{constructor(o,h){this.g=o,this.map=h}};function Oo(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Os(o){return o.h?1:o.g?o.g.size:0}function ki(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Qr(o,h){o.g?o.g.add(h):o.h=h}function Di(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Oo.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function No(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const p of o.g.values())h=h.concat(p.G);return h}return x(o.i)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sl(o,h){if(o){o=o.split("&");for(let p=0;p<o.length;p++){const v=o[p].indexOf("=");let V,M=null;v>=0?(V=o[p].substring(0,v),M=o[p].substring(v+1)):V=o[p],h(V,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function jn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof jn?(this.l=o.l,dr(this,o.j),this.o=o.o,this.g=o.g,pr(this,o.u),this.h=o.h,Oi(this,Fo(o.i)),this.m=o.m):o&&(h=String(o).match(xo))?(this.l=!1,dr(this,h[1]||"",!0),this.o=Kt(h[2]||""),this.g=Kt(h[3]||"",!0),pr(this,h[4]),this.h=Kt(h[5]||"",!0),Oi(this,h[6]||"",!0),this.m=Kt(h[7]||"")):(this.l=!1,this.i=new ns(null,this.l))}jn.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(kt(h,rn,!0),":");var p=this.g;return(p||h=="file")&&(o.push("//"),(h=this.o)&&o.push(kt(h,rn,!0),"@"),o.push(zr(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&o.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(kt(p,p.charAt(0)=="/"?Mo:Vo,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",kt(p,xs)),o.join("")},jn.prototype.resolve=function(o){const h=vn(this);let p=!!o.j;p?dr(h,o.j):p=!!o.o,p?h.o=o.o:p=!!o.g,p?h.g=o.g:p=o.u!=null;var v=o.h;if(p)pr(h,o.u);else if(p=!!o.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var V=h.h.lastIndexOf("/");V!=-1&&(v=h.h.slice(0,V+1)+v)}if(V=v,V==".."||V==".")v="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){v=V.lastIndexOf("/",0)==0,V=V.split("/");const M=[];for(let Y=0;Y<V.length;){const Re=V[Y++];Re=="."?v&&Y==V.length&&M.push(""):Re==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),v&&Y==V.length&&M.push("")):(M.push(Re),v=!0)}v=M.join("/")}else v=V}return p?h.h=v:p=o.i.toString()!=="",p?Oi(h,Fo(o.i)):p=!!o.m,p&&(h.m=o.m),h};function vn(o){return new jn(o)}function dr(o,h,p){o.j=p?Kt(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function pr(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function Oi(o,h,p){h instanceof ns?(o.i=h,eu(o.i,o.l)):(p||(h=kt(h,Sn)),o.i=new ns(h,o.l))}function Ye(o,h,p){o.i.set(h,p)}function Jr(o){return Ye(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Kt(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function kt(o,h,p){return typeof o=="string"?(o=encodeURI(o).replace(h,Ns),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ns(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var rn=/[#\/\?@]/g,Vo=/[#\?:]/g,Mo=/[#\?]/g,Sn=/[#\?@]/g,xs=/#/g;function ns(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function pn(o){o.g||(o.g=new Map,o.h=0,o.i&&sl(o.i,function(h,p){o.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=ns.prototype,n.add=function(o,h){pn(this),this.i=null,o=Gt(this,o);let p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(h),this.h+=1,this};function Ni(o,h){pn(o),h=Gt(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Lo(o,h){return pn(o),h=Gt(o,h),o.g.has(h)}n.forEach=function(o,h){pn(this),this.g.forEach(function(p,v){p.forEach(function(V){o.call(h,V,v,this)},this)},this)};function Vs(o,h){pn(o);let p=[];if(typeof h=="string")Lo(o,h)&&(p=p.concat(o.g.get(Gt(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)p=p.concat(o[h]);return p}n.set=function(o,h){return pn(this),this.i=null,o=Gt(this,o),Lo(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=Vs(this,o),o.length>0?String(o[0]):h):h};function xi(o,h,p){Ni(o,h),p.length>0&&(o.i=null,o.g.set(Gt(o,h),x(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var p=h[v];const V=zr(p);p=Vs(this,p);for(let M=0;M<p.length;M++){let Y=V;p[M]!==""&&(Y+="="+zr(p[M])),o.push(Y)}}return this.i=o.join("&")};function Fo(o){const h=new ns;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function Gt(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function eu(o,h){h&&!o.j&&(pn(o),o.i=null,o.g.forEach(function(p,v){const V=v.toLowerCase();v!=V&&(Ni(this,v),xi(this,V,p))},o)),o.j=h}function ss(o,h){const p=new cr;if(a.Image){const v=new Image;v.onload=g($n,p,"TestLoadImage: loaded",!0,h,v),v.onerror=g($n,p,"TestLoadImage: error",!1,h,v),v.onabort=g($n,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=g($n,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=o}else h(!1)}function Vi(o,h){const p=new cr,v=new AbortController,V=setTimeout(()=>{v.abort(),$n(p,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:v.signal}).then(M=>{clearTimeout(V),M.ok?$n(p,"TestPingServer: ok",!0,h):$n(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),$n(p,"TestPingServer: error",!1,h)})}function $n(o,h,p,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(p)}catch{}}function Yr(){this.g=new ct}function Xr(o){this.i=o.Sb||null,this.h=o.ab||!1}_(Xr,Tt),Xr.prototype.g=function(){return new rs(this.i,this.h)};function rs(o,h){K.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(rs,K),n=rs.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,mr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Uo(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Uo(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?gr(this):mr(this),this.readyState==3&&Uo(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,gr(this))},n.Na=function(o){this.g&&(this.response=o,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,mr(o)}n.setRequestHeader=function(o,h){this.A.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=h.next();return o.join(`\r
`)};function mr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ms(o){let h="";return Ct(o,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function jo(o,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Ms(p),typeof o=="string"?p!=null&&zr(p):Ye(o,h,p))}function ut(o){K.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(ut,K);var $o=/^https?$/i,Mi=["POST","PUT"];n=ut.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tl.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(M){Li(this,M);return}if(o=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)p.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())p.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),V=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Mi,h,void 0)>=0)||v||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,Y]of p)this.g.setRequestHeader(M,Y);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(M){Li(this,M)}};function Li(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,rl(o),Fi(o)}function rl(o){o.A||(o.A=!0,F(o,"complete"),F(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,F(this,"complete"),F(this,"abort"),Fi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),ut.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Zr(this):this.Xa())},n.Xa=function(){Zr(this)};function Zr(o){if(o.h&&typeof i<"u"){if(o.v&&Bn(o)==4)setTimeout(o.Ca.bind(o),0);else if(F(o,"readystatechange"),Bn(o)==4){o.h=!1;try{const M=o.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=M===0){let Y=String(o.D).match(xo)[1]||null;!Y&&a.self&&a.self.location&&(Y=a.self.location.protocol.slice(0,-1)),v=!$o.test(Y?Y.toLowerCase():"")}p=v}if(p)F(o,"complete"),F(o,"success");else{o.o=6;try{var V=Bn(o)>2?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.ca()+"]",rl(o)}}finally{Fi(o)}}}}function Fi(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const p=o.g;o.g=null,h||F(o,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),dt(h)}};function Ui(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Bo(o){const h={};o=(o.g&&Bn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<o.length;v++){if(E(o[v]))continue;var p=Xc(o[v]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[V]||[];h[V]=M,M.push(p)}Ln(h,function(v){return v.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(o,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||h}function Ho(o){this.za=0,this.i=[],this.j=new cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ls("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ls("baseRetryDelayMs",5e3,o),this.Za=Ls("retryDelaySeedMs",1e4,o),this.Ta=Ls("forwardChannelMaxRetries",2,o),this.va=Ls("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Oo(o&&o.concurrentRequestLimit),this.Ba=new Yr,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ho.prototype,n.ka=8,n.I=1,n.connect=function(o,h,p,v){Nt(0),this.W=o,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=ni(this,null,this.W),ei(this)};function Fs(o){if(qo(o),o.I==3){var h=o.V++,p=vn(o.J);if(Ye(p,"SID",o.M),Ye(p,"RID",h),Ye(p,"TYPE","terminate"),vr(o,p),h=new An(o,o.j,h),h.M=2,h.A=Jr(vn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.A,p=!0),p||(h.g=ll(h.j,null),h.g.ea(h.A)),h.F=Date.now(),xt(h)}Ko(o)}function _r(o){o.g&&($i(o),o.g.cancel(),o.g=null)}function qo(o){_r(o),o.v&&(a.clearTimeout(o.v),o.v=null),ti(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ei(o){if(!Pi(o.h)&&!o.m){o.m=!0;var h=o.Ea;Ce||w(),Be||(Ce(),Be=!0),S.add(h,o),o.D=0}}function yr(o,h){return Os(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=lr(d(o.Ea,o,h),al(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const V=new An(this,this.j,o);let M=this.o;if(this.U&&(M?(M=$(M),Fn(M,this.U)):M=this.U),this.u!==null||this.R||(V.J=M,M=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Wo(this,V,h),p=vn(this.J),Ye(p,"RID",o),Ye(p,"CVER",22),this.G&&Ye(p,"X-HTTP-Session-Id",this.G),vr(this,p),M&&(this.R?h="headers="+zr(Ms(M))+"&"+h:this.u&&jo(p,this.u,M)),Qr(this.h,V),this.Ra&&Ye(p,"TYPE","init"),this.S?(Ye(p,"$req",h),Ye(p,"SID","null"),V.U=!0,Gr(V,p,null)):Gr(V,p,h),this.I=2}}else this.I==3&&(o?il(this,o):this.i.length==0||Pi(this.h)||il(this))};function il(o,h){var p;h?p=h.l:p=o.V++;const v=vn(o.J);Ye(v,"SID",o.M),Ye(v,"RID",p),Ye(v,"AID",o.K),vr(o,v),o.u&&o.o&&jo(v,o.u,o.o),p=new An(o,o.j,p,o.D+1),o.u===null&&(p.J=o.o),h&&(o.i=h.G.concat(o.i)),h=Wo(o,p,1e3),p.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Qr(o.h,p),Gr(p,v,h)}function vr(o,h){o.H&&Ct(o.H,function(p,v){Ye(h,v,p)}),o.l&&Ct({},function(p,v){Ye(h,v,p)})}function Wo(o,h,p){p=Math.min(o.i.length,p);const v=o.l?d(o.l.Ka,o.l,o):null;e:{var V=o.i;let Re=-1;for(;;){const yt=["count="+p];Re==-1?p>0?(Re=V[0].g,yt.push("ofs="+Re)):Re=0:yt.push("ofs="+Re);let Ue=!0;for(let rt=0;rt<p;rt++){var M=V[rt].g;const Cn=V[rt].map;if(M-=Re,M<0)Re=Math.max(0,V[rt].g-100),Ue=!1;else try{M="req"+M+"_"||"";try{var Y=Cn instanceof Map?Cn:Object.entries(Cn);for(const[Rn,ls]of Y){let cs=ls;c(ls)&&(cs=Fe(ls)),yt.push(M+Rn+"="+encodeURIComponent(cs))}}catch(Rn){throw yt.push(M+"type="+encodeURIComponent("_badmap")),Rn}}catch{v&&v(Cn)}}if(Ue){Y=yt.join("&");break e}}Y=void 0}return o=o.i.splice(0,p),h.G=o,Y}function zo(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;Ce||w(),Be||(Ce(),Be=!0),S.add(h,o),o.A=0}}function ji(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=lr(d(o.Da,o),al(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Bi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=lr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Nt(10),_r(this),Bi(this))};function $i(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Bi(o){o.g=new An(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=vn(o.na);Ye(h,"RID","rpc"),Ye(h,"SID",o.M),Ye(h,"AID",o.K),Ye(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ye(h,"TO",o.ia),Ye(h,"TYPE","xmlhttp"),vr(o,h),o.u&&o.o&&jo(h,o.u,o.o),o.O&&(o.g.H=o.O);var p=o.g;o=o.ba,p.M=1,p.A=Jr(vn(h)),p.u=null,p.R=!0,nl(p,o)}n.Va=function(){this.C!=null&&(this.C=null,_r(this),ji(this),Nt(19))};function ti(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ol(o,h){var p=null;if(o.g==h){ti(o),$i(o),o.g=null;var v=2}else if(ki(o.h,h))p=h.G,Di(o.h,h),v=1;else return;if(o.I!=0){if(h.o)if(v==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var V=o.D;v=Ps(),F(v,new Wr(v,p)),ei(o)}else zo(o);else if(V=h.m,V==3||V==0&&h.X>0||!(v==1&&yr(o,h)||v==2&&ji(o)))switch(p&&p.length>0&&(h=o.h,h.i=h.i.concat(p)),V){case 1:is(o,5);break;case 4:is(o,10);break;case 3:is(o,6);break;default:is(o,2)}}}function al(o,h){let p=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(p*=2),p*h}function is(o,h){if(o.j.info("Error code "+h),h==2){var p=d(o.bb,o),v=o.Ua;const V=!v;v=new jn(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||dr(v,"https"),Jr(v),V?ss(v.toString(),p):Vi(v.toString(),p)}else Nt(2);o.I=0,o.l&&o.l.pa(h),Ko(o),qo(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Ko(o){if(o.I=0,o.ja=[],o.l){const h=No(o.h);(h.length!=0||o.i.length!=0)&&(Q(o.ja,h),Q(o.ja,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.oa()}}function ni(o,h,p){var v=p instanceof jn?vn(p):new jn(p);if(v.g!="")h&&(v.g=h+"."+v.g),pr(v,v.u);else{var V=a.location;v=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;const M=new jn(null);v&&dr(M,v),h&&(M.g=h),V&&pr(M,V),p&&(M.h=p),v=M}return p=o.G,h=o.wa,p&&h&&Ye(v,p,h),Ye(v,"VER",o.ka),vr(o,v),v}function ll(o,h,p){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new ut(new Xr({ab:p})):new ut(o.ma),h.Fa(o.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function cl(){}n=cl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function wr(){}wr.prototype.g=function(o,h){return new Qt(o,h)};function Qt(o,h){K.call(this),this.g=new Ho(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!E(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new as(this)}_(Qt,K),Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Fs(this.g)},Qt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.v&&(p={},p.__data__=Fe(o),o=p);h.i.push(new fr(h.Ya++,o)),h.I==3&&ei(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Fs(this.g),delete this.g,Qt.Z.N.call(this)};function Go(o){ar.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const p in h){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}_(Go,ar);function os(){_t.call(this),this.status=1}_(os,_t);function as(o){this.g=o}_(as,cl),as.prototype.ra=function(){F(this.g,"a")},as.prototype.qa=function(o){F(this.g,new Go(o))},as.prototype.pa=function(o){F(this.g,new os)},as.prototype.oa=function(){F(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,R_=function(){return new wr},C_=function(){return Ps()},S_=It,ih={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},es.NO_ERROR=0,es.TIMEOUT=8,es.HTTP_ERROR=6,Ul=es,el.COMPLETE="complete",A_=el,bt.EventType=Wt,Wt.OPEN="a",Wt.CLOSE="b",Wt.ERROR="c",Wt.MESSAGE="d",K.prototype.listen=K.prototype.J,ra=bt,ut.prototype.listenOnce=ut.prototype.K,ut.prototype.getLastError=ut.prototype.Ha,ut.prototype.getLastErrorCode=ut.prototype.ya,ut.prototype.getStatus=ut.prototype.ca,ut.prototype.getResponseJson=ut.prototype.La,ut.prototype.getResponseText=ut.prototype.la,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Fa,I_=ut}).apply(typeof bl<"u"?bl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let Ao="12.13.0";function sC(n){Ao=n}/**
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
 */const Ti=new Uh("@firebase/firestore");function Qi(){return Ti.logLevel}function se(n,...e){if(Ti.logLevel<=Me.DEBUG){const t=e.map(Xh);Ti.debug(`Firestore (${Ao}): ${n}`,...t)}}function sr(n,...e){if(Ti.logLevel<=Me.ERROR){const t=e.map(Xh);Ti.error(`Firestore (${Ao}): ${n}`,...t)}}function bi(n,...e){if(Ti.logLevel<=Me.WARN){const t=e.map(Xh);Ti.warn(`Firestore (${Ao}): ${n}`,...t)}}function Xh(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function me(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,P_(n,s,t)}function P_(n,e,t){let s=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw sr(s),new Error(s)}function Ke(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||P_(e,r,s)}function Se(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends or{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Or{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class k_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xt.UNAUTHENTICATED)))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class oC{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Or,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},c=u=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Or)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new k_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class aC{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class lC{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new aC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Xt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const s=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,se("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Dp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dp(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Zh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=uC(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function xe(n,e){return n<e?-1:n>e?1:0}function oh(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Vu(r)===Vu(i)?xe(r,i):Vu(r)?1:-1}return xe(n.length,e.length)}const hC=55296,fC=57343;function Vu(n){const e=n.charCodeAt(0);return e>=hC&&e<=fC}function _o(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Op="__name__";class ps{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&me(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ps.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ps?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=ps.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return xe(e.length,t.length)}static compareSegments(e,t){const s=ps.isNumericId(e),r=ps.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?ps.extractNumericId(e).compare(ps.extractNumericId(t)):oh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class ht extends ps{construct(e,t,s){return new ht(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new ht(t)}static emptyPath(){return new ht([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends ps{construct(e,t,s){return new Bt(e,t,s)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Op}static keyField(){return new Bt([Op])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new ue(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ue(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new ue(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(t)}static emptyPath(){return new Bt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(ht.fromString(e))}static fromName(e){return new pe(ht.fromString(e).popFirst(5))}static empty(){return new pe(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ht.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new ht(e.slice()))}}/**
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
 */function D_(n,e,t){if(!t)throw new ue(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pC(n,e,t,s){if(e===!0&&s===!0)throw new ue(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Np(n){if(!pe.isDocumentKey(n))throw new ue(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xp(n){if(pe.isDocumentKey(n))throw new ue(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function O_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ef(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":me(12329,{type:typeof n})}function yo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ef(n);throw new ue(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function St(n,e){const t={typeString:n};return e&&(t.value=e),t}function za(n,e){if(!O_(n))throw new ue(G.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new ue(G.INVALID_ARGUMENT,t);return!0}/**
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
 */const Vp=-62135596800,Mp=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Mp);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Vp)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mp}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(za(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:St("string",ft._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new ft(0,0))}static max(){return new be(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ca=-1;function gC(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=be.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new Vr(r,pe.empty(),e)}function mC(n){return new Vr(n.readTime,n.key,Ca)}class Vr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Vr(be.min(),pe.empty(),Ca)}static max(){return new Vr(be.max(),pe.empty(),Ca)}}function _C(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
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
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function So(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==yC)throw n;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&t()}),(u=>s(u)))})),a=!0,i===r&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((r=>r?H.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((g=>{a[d]=g,++c,c===i&&s(a)}),(g=>r(g)))}}))}static doWhile(e,t){return new H(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function wC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Co(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vc.ce=-1;/**
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
 */const tf=-1;function Mc(n){return n==null}function ac(n){return n===0&&1/n==-1/0}function EC(n){return typeof n=="number"&&Number.isInteger(n)&&!ac(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const N_="";function TC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Lp(e)),e=bC(n.get(t),e);return Lp(e)}function bC(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case N_:t+="";break;default:t+=i}}return t}function Lp(n){return n+N_+""}/**
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
 */function Fp(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ai(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function x_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class pt{constructor(e,t){this.comparator=e,this.root=t||$t.EMPTY}insert(e,t){return new pt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$t.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$t.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $t{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??$t.RED,this.left=r??$t.EMPTY,this.right=i??$t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new $t(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return $t.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}$t.EMPTY=null,$t.RED=!0,$t.BLACK=!1;$t.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new $t(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Up(this.data.getIterator())}getIteratorFrom(e){return new Up(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ot(this.comparator);return t.data=e,t}}class Up{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kn{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new Kn([])}unionWith(e){let t=new Ot(Bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class V_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new V_("Invalid base64 string: "+i):i}})(e);return new Ht(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new Ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const IC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(n){if(Ke(!!n,39018),typeof n=="string"){let e=0;const t=IC.exec(n);if(Ke(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lr(n){return typeof n=="string"?Ht.fromBase64String(n):Ht.fromUint8Array(n)}/**
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
 */const M_="server_timestamp",L_="__type__",F_="__previous_value__",U_="__local_write_time__";function nf(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[L_])==null?void 0:s.stringValue)===M_}function Lc(n){const e=n.mapValue.fields[F_];return nf(e)?Lc(e):e}function Ra(n){const e=Mr(n.mapValue.fields[U_].timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class AC{constructor(e,t,s,r,i,a,c,u,d,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=g,this.apiKey=_}}const lc="(default)";class Pa{constructor(e,t){this.projectId=e,this.database=t||lc}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===lc}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}function SC(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new ue(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(n.options.projectId,e)}/**
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
 */const j_="__type__",CC="__max__",Al={mapValue:{}},$_="__vector__",cc="value";function Fr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?nf(n)?4:PC(n)?9007199254740991:RC(n)?10:11:me(28295,{value:n})}function Ss(n,e){if(n===e)return!0;const t=Fr(n);if(t!==Fr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ra(n).isEqual(Ra(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Mr(r.timestampValue),c=Mr(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Lr(r.bytesValue).isEqual(Lr(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return wt(r.geoPointValue.latitude)===wt(i.geoPointValue.latitude)&&wt(r.geoPointValue.longitude)===wt(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return wt(r.integerValue)===wt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=wt(r.doubleValue),c=wt(i.doubleValue);return a===c?ac(a)===ac(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return _o(n.arrayValue.values||[],e.arrayValue.values||[],Ss);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Fp(a)!==Fp(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ss(a[u],c[u])))return!1;return!0})(n,e);default:return me(52216,{left:n})}}function ka(n,e){return(n.values||[]).find((t=>Ss(t,e)))!==void 0}function vo(n,e){if(n===e)return 0;const t=Fr(n),s=Fr(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=wt(i.integerValue||i.doubleValue),u=wt(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return jp(n.timestampValue,e.timestampValue);case 4:return jp(Ra(n),Ra(e));case 5:return oh(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Lr(i),u=Lr(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const g=xe(c[d],u[d]);if(g!==0)return g}return xe(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=xe(wt(i.latitude),wt(a.latitude));return c!==0?c:xe(wt(i.longitude),wt(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return $p(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var A,x,Q,B;const c=i.fields||{},u=a.fields||{},d=(A=c[cc])==null?void 0:A.arrayValue,g=(x=u[cc])==null?void 0:x.arrayValue,_=xe(((Q=d==null?void 0:d.values)==null?void 0:Q.length)||0,((B=g==null?void 0:g.values)==null?void 0:B.length)||0);return _!==0?_:$p(d,g)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Al.mapValue&&a===Al.mapValue)return 0;if(i===Al.mapValue)return 1;if(a===Al.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let _=0;_<u.length&&_<g.length;++_){const A=oh(u[_],g[_]);if(A!==0)return A;const x=vo(c[u[_]],d[g[_]]);if(x!==0)return x}return xe(u.length,g.length)})(n.mapValue,e.mapValue);default:throw me(23264,{he:t})}}function jp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Mr(n),s=Mr(e),r=xe(t.seconds,s.seconds);return r!==0?r:xe(t.nanos,s.nanos)}function $p(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=vo(t[r],s[r]);if(i)return i}return xe(t.length,s.length)}function wo(n){return ah(n)}function ah(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Mr(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Lr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return pe.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=ah(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${ah(t.fields[a])}`;return r+"}"})(n.mapValue):me(61005,{value:n})}function jl(n){switch(Fr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lc(n);return e?16+jl(e):16;case 5:return 2*n.stringValue.length;case 6:return Lr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+jl(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Ai(s.fields,((i,a)=>{r+=i.length+jl(a)})),r})(n.mapValue);default:throw me(13486,{value:n})}}function lh(n){return!!n&&"integerValue"in n}function sf(n){return!!n&&"arrayValue"in n}function Bp(n){return!!n&&"nullValue"in n}function Hp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $l(n){return!!n&&"mapValue"in n}function RC(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[j_])==null?void 0:s.stringValue)===$_}function ma(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ai(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ma(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ma(n.arrayValue.values[t]);return e}return{...n}}function PC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===CC}/**
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
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!$l(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(t)}setAll(e){let t=Bt.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=ma(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());$l(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ss(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];$l(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Ai(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Nn(ma(this.value))}}function B_(n){const e=[];return Ai(n.fields,((t,s)=>{const r=new Bt([t]);if($l(s)){const i=B_(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new Kn(e)}/**
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
 */class en{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new en(e,0,be.min(),be.min(),be.min(),Nn.empty(),0)}static newFoundDocument(e,t,s,r){return new en(e,1,t,be.min(),s,r,0)}static newNoDocument(e,t){return new en(e,2,t,be.min(),be.min(),Nn.empty(),0)}static newUnknownDocument(e,t){return new en(e,3,t,be.min(),be.min(),Nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class uc{constructor(e,t){this.position=e,this.inclusive=t}}function qp(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=pe.comparator(pe.fromName(a.referenceValue),t.key):s=vo(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ss(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hc{constructor(e,t="asc"){this.field=e,this.dir=t}}function kC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class H_{}class Dt extends H_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new OC(e,t,s):t==="array-contains"?new VC(e,s):t==="in"?new MC(e,s):t==="not-in"?new LC(e,s):t==="array-contains-any"?new FC(e,s):new Dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new NC(e,s):new xC(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vo(t,this.value)):t!==null&&Fr(this.value)===Fr(t)&&this.matchesComparison(vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cs extends H_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Cs(e,t)}matches(e){return q_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function q_(n){return n.op==="and"}function W_(n){return DC(n)&&q_(n)}function DC(n){for(const e of n.filters)if(e instanceof Cs)return!1;return!0}function ch(n){if(n instanceof Dt)return n.field.canonicalString()+n.op.toString()+wo(n.value);if(W_(n))return n.filters.map((e=>ch(e))).join(",");{const e=n.filters.map((t=>ch(t))).join(",");return`${n.op}(${e})`}}function z_(n,e){return n instanceof Dt?(function(s,r){return r instanceof Dt&&s.op===r.op&&s.field.isEqual(r.field)&&Ss(s.value,r.value)})(n,e):n instanceof Cs?(function(s,r){return r instanceof Cs&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&z_(a,r.filters[c])),!0):!1})(n,e):void me(19439)}function K_(n){return n instanceof Dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(n):n instanceof Cs?(function(t){return t.op.toString()+" {"+t.getFilters().map(K_).join(" ,")+"}"})(n):"Filter"}class OC extends Dt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class NC extends Dt{constructor(e,t){super(e,"in",t),this.keys=G_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xC extends Dt{constructor(e,t){super(e,"not-in",t),this.keys=G_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function G_(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class VC extends Dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&ka(t.arrayValue,this.value)}}class MC extends Dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ka(this.value.arrayValue,t)}}class LC extends Dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ka(this.value.arrayValue,t)}}class FC extends Dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ka(this.value.arrayValue,s)))}}/**
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
 */class UC{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function zp(n,e=null,t=[],s=[],r=null,i=null,a=null){return new UC(n,e,t,s,r,i,a)}function rf(n){const e=Se(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ch(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=t}return e.Te}function of(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!kC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!z_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Wp(n.startAt,e.startAt)&&Wp(n.endAt,e.endAt)}function uh(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fc{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function jC(n,e,t,s,r,i,a,c){return new Fc(n,e,t,s,r,i,a,c)}function Q_(n){return new Fc(n)}function Kp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $C(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function BC(n){return n.collectionGroup!==null}function _a(n){const e=Se(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ot(Bt.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new hc(i,s))})),t.has(Bt.keyField().canonicalString())||e.Ie.push(new hc(Bt.keyField(),s))}return e.Ie}function ws(n){const e=Se(n);return e.Ee||(e.Ee=HC(e,_a(n))),e.Ee}function HC(n,e){if(n.limitType==="F")return zp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new hc(r.field,i)}));const t=n.endAt?new uc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new uc(n.startAt.position,n.startAt.inclusive):null;return zp(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function hh(n,e,t){return new Fc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Uc(n,e){return of(ws(n),ws(e))&&n.limitType===e.limitType}function J_(n){return`${rf(ws(n))}|lt:${n.limitType}`}function Ji(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>K_(r))).join(", ")}]`),Mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>wo(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>wo(r))).join(",")),`Target(${s})`})(ws(n))}; limitType=${n.limitType})`}function jc(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):pe.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of _a(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,u){const d=qp(a,c,u);return a.inclusive?d<=0:d<0})(s.startAt,_a(s),r)||s.endAt&&!(function(a,c,u){const d=qp(a,c,u);return a.inclusive?d>=0:d>0})(s.endAt,_a(s),r))})(n,e)}function qC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Y_(n){return(e,t)=>{let s=!1;for(const r of _a(n)){const i=WC(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function WC(n,e,t){const s=n.field.isKeyField()?pe.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?vo(u,d):me(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:n.dir})}}/**
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
 */class Si{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return x_(this.inner)}size(){return this.innerSize}}/**
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
 */const zC=new pt(pe.comparator);function rr(){return zC}const X_=new pt(pe.comparator);function ia(...n){let e=X_;for(const t of n)e=e.insert(t.key,t);return e}function Z_(n){let e=X_;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function gi(){return ya()}function ey(){return ya()}function ya(){return new Si((n=>n.toString()),((n,e)=>n.isEqual(e)))}const KC=new pt(pe.comparator),GC=new Ot(pe.comparator);function Ve(...n){let e=GC;for(const t of n)e=e.add(t);return e}const QC=new Ot(xe);function JC(){return QC}/**
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
 */function af(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ac(e)?"-0":e}}function ty(n){return{integerValue:""+n}}function YC(n,e){return EC(e)?ty(e):af(n,e)}/**
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
 */class $c{constructor(){this._=void 0}}function XC(n,e,t){return n instanceof Da?(function(r,i){const a={fields:{[L_]:{stringValue:M_},[U_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&nf(i)&&(i=Lc(i)),i&&(a.fields[F_]=i),{mapValue:a}})(t,e):n instanceof Oa?sy(n,e):n instanceof Na?ry(n,e):(function(r,i){const a=ny(r,i),c=Gp(a)+Gp(r.Ae);return lh(a)&&lh(r.Ae)?ty(c):af(r.serializer,c)})(n,e)}function ZC(n,e,t){return n instanceof Oa?sy(n,e):n instanceof Na?ry(n,e):t}function ny(n,e){return n instanceof fc?(function(s){return lh(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Da extends $c{}class Oa extends $c{constructor(e){super(),this.elements=e}}function sy(n,e){const t=iy(e);for(const s of n.elements)t.some((r=>Ss(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Na extends $c{constructor(e){super(),this.elements=e}}function ry(n,e){let t=iy(e);for(const s of n.elements)t=t.filter((r=>!Ss(r,s)));return{arrayValue:{values:t}}}class fc extends $c{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Gp(n){return wt(n.integerValue||n.doubleValue)}function iy(n){return sf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class e0{constructor(e,t){this.field=e,this.transform=t}}function t0(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Oa&&r instanceof Oa||s instanceof Na&&r instanceof Na?_o(s.elements,r.elements,Ss):s instanceof fc&&r instanceof fc?Ss(s.Ae,r.Ae):s instanceof Da&&r instanceof Da})(n.transform,e.transform)}class n0{constructor(e,t){this.version=e,this.transformResults=t}}class Es{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Es}static exists(e){return new Es(void 0,e)}static updateTime(e){return new Es(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bc{}function oy(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lf(n.key,Es.none()):new Ka(n.key,n.data,Es.none());{const t=n.data,s=Nn.empty();let r=new Ot(Bt.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Ci(n.key,s,new Kn(r.toArray()),Es.none())}}function s0(n,e,t){n instanceof Ka?(function(r,i,a){const c=r.value.clone(),u=Jp(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Ci?(function(r,i,a){if(!Bl(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Jp(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ay(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function va(n,e,t,s){return n instanceof Ka?(function(i,a,c,u){if(!Bl(i.precondition,a))return c;const d=i.value.clone(),g=Yp(i.fieldTransforms,u,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof Ci?(function(i,a,c,u){if(!Bl(i.precondition,a))return c;const d=Yp(i.fieldTransforms,u,a),g=a.data;return g.setAll(ay(i)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((_=>_.field)))})(n,e,t,s):(function(i,a,c){return Bl(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function r0(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=ny(s.transform,r||null);i!=null&&(t===null&&(t=Nn.empty()),t.set(s.field,i))}return t||null}function Qp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&_o(s,r,((i,a)=>t0(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ka extends Bc{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ci extends Bc{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ay(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Jp(n,e,t){const s=new Map;Ke(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,ZC(a,c,t[r]))}return s}function Yp(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,XC(i,a,e))}return s}class lf extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i0 extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class o0{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&s0(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=va(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ey();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const u=oy(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(be.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((t,s)=>Qp(t,s)))&&_o(this.baseMutations,e.baseMutations,((t,s)=>Qp(t,s)))}}class cf{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Ke(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=(function(){return KC})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new cf(e,t,s,r)}}/**
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
 */class a0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class l0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var At,je;function c0(n){switch(n){case G.OK:return me(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return me(15467,{code:n})}}function ly(n){if(n===void 0)return sr("GRPC error has no .code"),G.UNKNOWN;switch(n){case At.OK:return G.OK;case At.CANCELLED:return G.CANCELLED;case At.UNKNOWN:return G.UNKNOWN;case At.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case At.INTERNAL:return G.INTERNAL;case At.UNAVAILABLE:return G.UNAVAILABLE;case At.UNAUTHENTICATED:return G.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case At.NOT_FOUND:return G.NOT_FOUND;case At.ALREADY_EXISTS:return G.ALREADY_EXISTS;case At.PERMISSION_DENIED:return G.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case At.ABORTED:return G.ABORTED;case At.OUT_OF_RANGE:return G.OUT_OF_RANGE;case At.UNIMPLEMENTED:return G.UNIMPLEMENTED;case At.DATA_LOSS:return G.DATA_LOSS;default:return me(39323,{code:n})}}(je=At||(At={}))[je.OK=0]="OK",je[je.CANCELLED=1]="CANCELLED",je[je.UNKNOWN=2]="UNKNOWN",je[je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",je[je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",je[je.NOT_FOUND=5]="NOT_FOUND",je[je.ALREADY_EXISTS=6]="ALREADY_EXISTS",je[je.PERMISSION_DENIED=7]="PERMISSION_DENIED",je[je.UNAUTHENTICATED=16]="UNAUTHENTICATED",je[je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",je[je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",je[je.ABORTED=10]="ABORTED",je[je.OUT_OF_RANGE=11]="OUT_OF_RANGE",je[je.UNIMPLEMENTED=12]="UNIMPLEMENTED",je[je.INTERNAL=13]="INTERNAL",je[je.UNAVAILABLE=14]="UNAVAILABLE",je[je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function u0(){return new TextEncoder}/**
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
 */const h0=new Dr([4294967295,4294967295],0);function Xp(n){const e=u0().encode(n),t=new b_;return t.update(e),new Uint8Array(t.digest())}function Zp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([t,s],0),new Dr([r,i],0)]}class uf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new oa(`Invalid padding: ${t}`);if(s<0)throw new oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new oa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dr.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(Dr.fromNumber(s)));return r.compare(h0)===1&&(r=new Dr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Xp(e),[s,r]=Zp(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);if(!this.we(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new uf(i,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Xp(e),[s,r]=Zp(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(s,r,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ga{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ga(be.min(),r,new pt(xe),rr(),Ve())}}class Qa{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Qa(s,t,Ve(),Ve(),Ve())}}/**
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
 */class Hl{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class cy{constructor(e,t){this.targetId=e,this.Ce=t}}class uy{constructor(e,t,s=Ht.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class eg{constructor(){this.ve=0,this.Fe=tg(),this.Me=Ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),t=Ve(),s=Ve();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:me(38017,{changeType:i})}})),new Qa(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=tg()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class f0{constructor(e){this.Ge=e,this.ze=new Map,this.je=rr(),this.Je=Sl(),this.He=Sl(),this.Ze=new pt(xe)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:me(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(uh(i))if(s===0){const a=new pe(i.path);this.et(t,a,en.newNoDocument(a,be.min()))}else Ke(s===1,20013,{expectedCount:s});else{const a=this._t(t);if(a!==s){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=Lr(s).toUint8Array()}catch(u){if(u instanceof V_)return bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new uf(a,r,i)}catch(u){return bi(u instanceof oa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&uh(c.target)){const u=new pe(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,en.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}}));let s=Ve();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const r=new Ga(e,t,this.Ze,this.je,s);return this.je=rr(),this.Je=Sl(),this.He=Sl(),this.Ze=new pt(xe),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new eg,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new Ot(xe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ot(xe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new eg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Sl(){return new pt(pe.comparator)}function tg(){return new pt(pe.comparator)}const d0={asc:"ASCENDING",desc:"DESCENDING"},p0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},g0={and:"AND",or:"OR"};class m0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function fh(n,e){return n.useProto3Json||Mc(e)?e:{value:e}}function dc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hy(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _0(n,e){return dc(n,e.toTimestamp())}function Ts(n){return Ke(!!n,49232),be.fromTimestamp((function(t){const s=Mr(t);return new ft(s.seconds,s.nanos)})(n))}function hf(n,e){return dh(n,e).canonicalString()}function dh(n,e){const t=(function(r){return new ht(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function fy(n){const e=ht.fromString(n);return Ke(_y(e),10190,{key:e.toString()}),e}function ph(n,e){return hf(n.databaseId,e.path)}function Mu(n,e){const t=fy(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(py(t))}function dy(n,e){return hf(n.databaseId,e)}function y0(n){const e=fy(n);return e.length===4?ht.emptyPath():py(e)}function gh(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function py(n){return Ke(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ng(n,e,t){return{name:ph(n,e),fields:t.value.mapValue.fields}}function v0(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:me(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(d,g){return d.useProto3Json?(Ke(g===void 0||typeof g=="string",58123),Ht.fromBase64String(g||"")):(Ke(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),Ht.fromUint8Array(g||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const g=d.code===void 0?G.UNKNOWN:ly(d.code);return new ue(g,d.message||"")})(a);t=new uy(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Mu(n,s.document.name),i=Ts(s.document.updateTime),a=s.document.createTime?Ts(s.document.createTime):be.min(),c=new Nn({mapValue:{fields:s.document.fields}}),u=en.newFoundDocument(r,i,a,c),d=s.targetIds||[],g=s.removedTargetIds||[];t=new Hl(d,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Mu(n,s.document),i=s.readTime?Ts(s.readTime):be.min(),a=en.newNoDocument(r,i),c=s.removedTargetIds||[];t=new Hl([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Mu(n,s.document),i=s.removedTargetIds||[];t=new Hl([],i,r,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new l0(r,i),c=s.targetId;t=new cy(c,a)}}return t}function w0(n,e){let t;if(e instanceof Ka)t={update:ng(n,e.key,e.value)};else if(e instanceof lf)t={delete:ph(n,e.key)};else if(e instanceof Ci)t={update:ng(n,e.key,e.data),updateMask:P0(e.fieldMask)};else{if(!(e instanceof i0))return me(16599,{dt:e.type});t={verify:ph(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof Da)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Oa)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Na)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fc)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw me(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:_0(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)})(n,e.precondition)),t}function E0(n,e){return n&&n.length>0?(Ke(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?Ts(r.updateTime):Ts(i);return a.isEqual(be.min())&&(a=Ts(i)),new n0(a,r.transformResults||[])})(t,e)))):[]}function T0(n,e){return{documents:[dy(n,e.path)]}}function b0(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=dy(n,r);const i=(function(d){if(d.length!==0)return my(Cs.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((g=>(function(A){return{field:Yi(A.field),direction:S0(A.dir)}})(g)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=fh(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:r}}function I0(n){let e=y0(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Ke(s===1,65062);const g=t.from[0];g.allDescendants?r=g.collectionId:e=e.child(g.collectionId)}let i=[];t.where&&(i=(function(_){const A=gy(_);return A instanceof Cs&&W_(A)?A.getFilters():[A]})(t.where));let a=[];t.orderBy&&(a=(function(_){return _.map((A=>(function(Q){return new hc(Xi(Q.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(A)))})(t.orderBy));let c=null;t.limit&&(c=(function(_){let A;return A=typeof _=="object"?_.value:_,Mc(A)?null:A})(t.limit));let u=null;t.startAt&&(u=(function(_){const A=!!_.before,x=_.values||[];return new uc(x,A)})(t.startAt));let d=null;return t.endAt&&(d=(function(_){const A=!_.before,x=_.values||[];return new uc(x,A)})(t.endAt)),jC(e,r,a,i,c,"F",u,d)}function A0(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gy(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Xi(t.unaryFilter.field);return Dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Xi(t.unaryFilter.field);return Dt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xi(t.unaryFilter.field);return Dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xi(t.unaryFilter.field);return Dt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Dt.create(Xi(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Cs.create(t.compositeFilter.filters.map((s=>gy(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return me(1026)}})(t.compositeFilter.op))})(n):me(30097,{filter:n})}function S0(n){return d0[n]}function C0(n){return p0[n]}function R0(n){return g0[n]}function Yi(n){return{fieldPath:n.canonicalString()}}function Xi(n){return Bt.fromServerFormat(n.fieldPath)}function my(n){return n instanceof Dt?(function(t){if(t.op==="=="){if(Hp(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NAN"}};if(Bp(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hp(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NOT_NAN"}};if(Bp(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(t.field),op:C0(t.op),value:t.value}}})(n):n instanceof Cs?(function(t){const s=t.getFilters().map((r=>my(r)));return s.length===1?s[0]:{compositeFilter:{op:R0(t.op),filters:s}}})(n):me(54877,{filter:n})}function P0(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function _y(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function yy(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Js{constructor(e,t,s,r,i=be.min(),a=be.min(),c=Ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class k0{constructor(e){this.yt=e}}function D0(n){const e=I0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hh(e,e.limit,"L"):e}/**
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
 */class O0{constructor(){this.bn=new N0}addToCollectionParentIndex(e,t){return this.bn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Vr.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class N0{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ot(ht.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ot(ht.comparator)).toArray()}}/**
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
 */const sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vy=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(vy,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
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
 */class Ur{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ur(0)}static ar(){return new Ur(-1)}}/**
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
 */const rg="LruGarbageCollector",x0=1048576;function ig([n,e],[t,s]){const r=xe(n,t);return r===0?xe(e,s):r}class V0{constructor(e){this.Pr=e,this.buffer=new Ot(ig),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ig(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class M0{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){se(rg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Co(t)?se(rg,"Ignoring IndexedDB error during garbage collection: ",t):await So(t)}await this.Ar(3e5)}))}}class L0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(Vc.ce);const s=new V0(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(sg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,a,c,u,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((_=>(_>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),r=this.params.maximumSequenceNumbersToCollect):r=_,a=Date.now(),this.nthSequenceNumber(e,r)))).next((_=>(s=_,c=Date.now(),this.removeTargets(e,s,t)))).next((_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((_=>(d=Date.now(),Qi()<=Me.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-g}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:_}))))}}function F0(n,e){return new L0(n,e)}/**
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
 */class U0{constructor(){this.changes=new Si((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class j0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $0{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&va(s.mutation,r,Kn.empty(),ft.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ve()){const r=gi();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=ia();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=gi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ve())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let i=rr();const a=ya(),c=(function(){return ya()})();return t.forEach(((u,d)=>{const g=s.get(d.key);r.has(d.key)&&(g===void 0||g.mutation instanceof Ci)?i=i.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),va(g.mutation,d,g.mutation.getFieldMask(),ft.now())):a.set(d.key,Kn.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,g)=>a.set(d,g))),t.forEach(((d,g)=>c.set(d,new j0(g,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=ya();let r=new pt(((a,c)=>a-c)),i=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let g=s.get(u)||Kn.empty();g=c.applyToLocalView(d,g),s.set(u,g);const _=(r.get(c.batchId)||Ve()).add(u);r=r.insert(c.batchId,_)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,g=u.value,_=ey();g.forEach((A=>{if(!i.has(A)){const x=oy(t.get(A),s.get(A));x!==null&&_.set(A,x),i=i.add(A)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return H.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return $C(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):H.resolve(gi());let c=Ca,u=i;return a.next((d=>H.forEach(d,((g,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),i.get(g)?H.resolve():this.remoteDocumentCache.getEntry(e,g).next((A=>{u=u.insert(g,A)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,Ve()))).next((g=>({batchId:c,changes:Z_(g)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let r=ia();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=ia();return this.indexManager.getCollectionParents(e,i).next((c=>H.forEach(c,(u=>{const d=(function(_,A){return new Fc(A,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,s,r).next((g=>{g.forEach(((_,A)=>{a=a.insert(_,A)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((u,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,en.newInvalidDocument(g)))}));let c=ia();return a.forEach(((u,d)=>{const g=i.get(u);g!==void 0&&va(g.mutation,d,Kn.empty(),ft.now()),jc(t,d)&&(c=c.insert(u,d))})),c}))}}/**
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
 */class B0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return H.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Ts(r.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:D0(r.bundledQuery),readTime:Ts(r.readTime)}})(t)),H.resolve()}}/**
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
 */class H0{constructor(){this.overlays=new pt(pe.comparator),this.Lr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=gi();return H.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.St(e,t,i)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const r=gi(),i=t.length+1,a=new pe(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return H.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new pt(((d,g)=>d-g));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let g=i.get(d.largestBatchId);g===null&&(g=gi(),i=i.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=gi(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,g)=>c.set(d,g))),!(c.size()>=r)););return H.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new a0(t,s));let i=this.Lr.get(t);i===void 0&&(i=Ve(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
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
 */class q0{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class ff{constructor(){this.kr=new Ot(Mt.Kr),this.qr=new Ot(Mt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Mt(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Mt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new pe(new ht([])),s=new Mt(t,e),r=new Mt(t,e+1),i=[];return this.qr.forEachInRange([s,r],(a=>{this.Wr(a),i.push(a.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new pe(new ht([])),s=new Mt(t,e),r=new Mt(t,e+1);let i=Ve();return this.qr.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Mt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Mt{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return pe.comparator(e.key,t.key)||xe(e.Jr,t.Jr)}static Ur(e,t){return xe(e.Jr,t.Jr)||pe.comparator(e.key,t.key)}}/**
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
 */class W0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new Ot(Mt.Kr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new o0(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Hr=this.Hr.add(new Mt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return H.resolve(a)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?tf:this.Yn-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Mt(t,0),r=new Mt(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],(a=>{const c=this.Zr(a.Jr);i.push(c)})),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ot(xe);return t.forEach((r=>{const i=new Mt(r,0),a=new Mt(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],(c=>{s=s.add(c.Jr)}))})),H.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;pe.isDocumentKey(i)||(i=i.child(""));const a=new Mt(new pe(i),0);let c=new Ot(xe);return this.Hr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===r&&(c=c.add(u.Jr)),!0)}),a),H.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){Ke(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return H.forEach(t.mutations,(r=>{const i=new Mt(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=s}))}nr(e){}containsKey(e,t){const s=new Mt(t,0),r=this.Hr.firstAfterOrEqual(s);return H.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class z0{constructor(e){this.ti=e,this.docs=(function(){return new pt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():en.newInvalidDocument(t))}getEntries(e,t){let s=rr();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():en.newInvalidDocument(r))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=rr();const a=t.path,c=new pe(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||_C(mC(g),s)<=0||(r.has(g.key)||jc(t,g))&&(i=i.insert(g.key,g.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,t,s,r){me(9500)}ni(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new K0(this)}getSize(e){return H.resolve(this.size)}}class K0 extends U0{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class G0{constructor(e){this.persistence=e,this.ri=new Si((t=>rf(t)),of),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.ii=0,this.si=new ff,this.targetCount=0,this.oi=Ur._r()}forEachTarget(e,t){return this.ri.forEach(((s,r)=>t(r))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),H.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ur(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.lr(t),H.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),H.waitFor(i).next((()=>r))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),H.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.si.containsKey(t))}}/**
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
 */class wy{constructor(e,t){this._i={},this.overlays={},this.ai=new Vc(0),this.ui=!1,this.ui=!0,this.ci=new q0,this.referenceDelegate=e(this),this.li=new G0(this),this.indexManager=new O0,this.remoteDocumentCache=(function(r){return new z0(r)})((s=>this.referenceDelegate.hi(s))),this.serializer=new k0(t),this.Pi=new B0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new H0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new W0(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const r=new Q0(this.ai.next());return this.referenceDelegate.Ti(),s(r).next((i=>this.referenceDelegate.Ii(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,t){return H.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Q0 extends vC{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Ri=new ff,this.Ai=null}static Vi(e){return new df(e)}get di(){if(this.Ai)return this.Ai;throw me(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.di.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.di,(s=>{const r=pe.fromPath(s);return this.mi(e,r).next((i=>{i||t.removeEntry(r,be.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class pc{constructor(e,t){this.persistence=e,this.fi=new Si((s=>TC(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=F0(this,t)}static Vi(e,t){return new pc(e,t)}Ti(){}Ii(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return H.forEach(this.fi,((s,r)=>this.wr(e,s,r).next((i=>i?H.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,(a=>this.wr(e,a,t).next((c=>{c||(s++,i.removeEntry(a,be.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),H.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jl(e.data.value)),t}wr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return H.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class pf{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=Ve(),r=Ve();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new pf(e,t.fromCache,s,r)}}/**
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
 */class J0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Y0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Fb()?8:wC(sn())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ps(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new J0;return this.ys(e,t,a).next((c=>{if(i.result=c,this.As)return this.ws(e,t,a,c.size)}))})).next((()=>i.result))}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Qi()<=Me.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Ji(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(Qi()<=Me.DEBUG&&se("QueryEngine","Query:",Ji(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Qi()<=Me.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Ji(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ws(t))):H.resolve())}gs(e,t){if(Kp(t))return H.resolve(null);let s=ws(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=hh(t,null,"F"),s=ws(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=Ve(...i);return this.fs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.Ss(t,c);return this.bs(t,d,a,u.readTime)?this.gs(e,hh(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,s,r){return Kp(t)||r.isEqual(be.min())?H.resolve(null):this.fs.getDocuments(e,s).next((i=>{const a=this.Ss(t,i);return this.bs(t,a,s,r)?H.resolve(null):(Qi()<=Me.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ji(t)),this.Ds(e,a,t,gC(r,Ca)).next((c=>c)))}))}Ss(e,t){let s=new Ot(Y_(e));return t.forEach(((r,i)=>{jc(e,i)&&(s=s.add(i))})),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Qi()<=Me.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Ji(t)),this.fs.getDocumentsMatchingQuery(e,t,Vr.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const gf="LocalStore",X0=3e8;class Z0{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new pt(xe),this.Fs=new Si((i=>rf(i)),of),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function eR(n,e,t,s){return new Z0(n,e,t,s)}async function Ey(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let u=Ve();for(const d of r){a.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of i){c.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function tR(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,g){const _=d.batch,A=_.keys();let x=H.resolve();return A.forEach((Q=>{x=x.next((()=>g.getEntry(u,Q))).next((B=>{const J=d.docVersions.get(Q);Ke(J!==null,48541),B.version.compareTo(J)<0&&(_.applyToRemoteDocument(B,d),B.isValidDocument()&&(B.setReadTime(d.commitVersion),g.addEntry(B)))}))})),x.next((()=>c.mutationQueue.removeMutationBatch(u,_)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let u=Ve();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Ty(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function nR(n,e){const t=Se(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((g,_)=>{const A=r.get(_);if(!A)return;c.push(t.li.removeMatchingKeys(i,g.removedDocuments,_).next((()=>t.li.addMatchingKeys(i,g.addedDocuments,_))));let x=A.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?x=x.withResumeToken(Ht.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):g.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(g.resumeToken,s)),r=r.insert(_,x),(function(B,J,ne){return B.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=X0?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0})(A,x,g)&&c.push(t.li.updateTargetData(i,x))}));let u=rr(),d=Ve();if(e.documentUpdates.forEach((g=>{e.resolvedLimboDocuments.has(g)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,g))})),c.push(sR(i,a,e.documentUpdates).next((g=>{u=g.Bs,d=g.Ls}))),!s.isEqual(be.min())){const g=t.li.getLastRemoteSnapshotVersion(i).next((_=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(g)}return H.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.vs=r,i)))}function sR(n,e,t){let s=Ve(),r=Ve();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=rr();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(be.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):se(gf,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:a,Ls:r}}))}function rR(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=tf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function iR(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.li.getTargetData(s,e).next((i=>i?(r=i,H.resolve(r)):t.li.allocateTargetId(s).next((a=>(r=new Js(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function mh(n,e,t){const s=Se(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!Co(a))throw a;se(gf,`Failed to update sequence numbers for target ${e}: ${a}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function og(n,e,t){const s=Se(n);let r=be.min(),i=Ve();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,g){const _=Se(u),A=_.Fs.get(g);return A!==void 0?H.resolve(_.vs.get(A)):_.li.getTargetData(d,g)})(s,a,ws(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:be.min(),t?i:Ve()))).next((c=>(oR(s,qC(e),c),{documents:c,ks:i})))))}function oR(n,e,t){let s=n.Ms.get(e)||be.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.Ms.set(e,s)}class ag{constructor(){this.activeTargetIds=JC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aR{constructor(){this.vo=new ag,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ag,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lR{Mo(e){}shutdown(){}}/**
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
 */const lg="ConnectivityMonitor";class cg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){se(lg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){se(lg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cl=null;function _h(){return Cl===null?Cl=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cl++,"0x"+Cl.toString(16)}/**
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
 */const Lu="RestConnection",cR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===lc?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=_h(),c=this.Qo(e,t.toUriEncodedString());se(Lu,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,i);const{host:d}=new URL(c),g=Ba(d);return this.zo(e,c,u,s,g).then((_=>(se(Lu,`Received RPC '${e}' ${a}: `,_),_)),(_=>{throw bi(Lu,`RPC '${e}' ${a} failed with error: `,_,"url: ",c,"request:",s),_}))}jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ao})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Qo(e,t){const s=cR[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class hR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Yt="WebChannelConnection",ta=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class ao extends uR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ao.c_){const e=C_();ta(e,S_.STAT_EVENT,(t=>{t.stat===ih.PROXY?se(Yt,"STAT_EVENT: detected buffering proxy"):t.stat===ih.NOPROXY&&se(Yt,"STAT_EVENT: detected no buffering proxy")})),ao.c_=!0}}zo(e,t,s,r,i){const a=_h();return new Promise(((c,u)=>{const d=new I_;d.setWithCredentials(!0),d.listenOnce(A_.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ul.NO_ERROR:const _=d.getResponseJson();se(Yt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),c(_);break;case Ul.TIMEOUT:se(Yt,`RPC '${e}' ${a} timed out`),u(new ue(G.DEADLINE_EXCEEDED,"Request time out"));break;case Ul.HTTP_ERROR:const A=d.getStatus();if(se(Yt,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let x=d.getResponseJson();Array.isArray(x)&&(x=x[0]);const Q=x==null?void 0:x.error;if(Q&&Q.status&&Q.message){const B=(function(ne){const Z=ne.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(Z)>=0?Z:G.UNKNOWN})(Q.status);u(new ue(B,Q.message))}else u(new ue(G.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new ue(G.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{se(Yt,`RPC '${e}' ${a} completed.`)}}));const g=JSON.stringify(r);se(Yt,`RPC '${e}' ${a} sending request:`,r),d.send(t,"POST",g,s,15)}))}T_(e,t,s){const r=_h(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=i.join("");se(Yt,`Creating RPC '${e}' stream ${r}: ${d}`,c);const g=a.createWebChannel(d,c);this.I_(g);let _=!1,A=!1;const x=new hR({Jo:Q=>{A?se(Yt,`Not sending because RPC '${e}' stream ${r} is closed:`,Q):(_||(se(Yt,`Opening RPC '${e}' stream ${r} transport.`),g.open(),_=!0),se(Yt,`RPC '${e}' stream ${r} sending:`,Q),g.send(Q))},Ho:()=>g.close()});return ta(g,ra.EventType.OPEN,(()=>{A||(se(Yt,`RPC '${e}' stream ${r} transport opened.`),x.i_())})),ta(g,ra.EventType.CLOSE,(()=>{A||(A=!0,se(Yt,`RPC '${e}' stream ${r} transport closed`),x.o_(),this.E_(g))})),ta(g,ra.EventType.ERROR,(Q=>{A||(A=!0,bi(Yt,`RPC '${e}' stream ${r} transport errored. Name:`,Q.name,"Message:",Q.message),x.o_(new ue(G.UNAVAILABLE,"The operation could not be completed")))})),ta(g,ra.EventType.MESSAGE,(Q=>{var B;if(!A){const J=Q.data[0];Ke(!!J,16349);const ne=J,Z=(ne==null?void 0:ne.error)||((B=ne[0])==null?void 0:B.error);if(Z){se(Yt,`RPC '${e}' stream ${r} received error:`,Z);const ie=Z.status;let oe=(function(S){const w=At[S];if(w!==void 0)return ly(w)})(ie),Ce=Z.message;ie==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&bi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),oe===void 0&&(oe=G.INTERNAL,Ce="Unknown error status: "+ie+" with message "+Z.message),A=!0,x.o_(new ue(oe,Ce)),g.close()}else se(Yt,`RPC '${e}' stream ${r} received:`,J),x.__(J)}})),ao.u_(),setTimeout((()=>{x.s_()}),0),x}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return R_()}}/**
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
 */function fR(n){return new ao(n)}function Fu(){return typeof document<"u"?document:null}/**
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
 */function Hc(n){return new m0(n,!0)}/**
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
 */ao.c_=!1;class by{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&se("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ug="PersistentStream";class Iy{constructor(e,t,s,r,i,a,c,u){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new by(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(sr(t.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.D_===t&&this.G_(s,r)}),(s=>{e((()=>{const r=new ue(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{s((()=>this.z_(r)))})),this.stream.onMessage((r=>{s((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return se(ug,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(se(ug,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class dR extends Iy{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=v0(this.serializer,e),s=(function(i){if(!("targetChange"in i))return be.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?be.min():a.readTime?Ts(a.readTime):be.min()})(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=gh(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=uh(u)?{documents:T0(i,u)}:{query:b0(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=hy(i,a.resumeToken);const d=fh(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(be.min())>0){c.readTime=dc(i,a.snapshotVersion.toTimestamp());const d=fh(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=A0(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=gh(this.serializer),t.removeTarget=e,this.K_(t)}}class pR extends Iy{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=E0(e.writeResults,e.commitTime),s=Ts(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=gh(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>w0(this.serializer,s)))};this.K_(t)}}/**
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
 */class gR{}class mR extends gR{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,dh(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(G.UNKNOWN,i.toString())}))}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(e,dh(t,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(G.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function _R(n,e,t,s){return new mR(n,e,t,s)}class yR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sr(t),this.aa=!1):se("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Rs="RemoteStore";class vR{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ur(1e3),this.Va=new Ur(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((a=>{s.enqueueAndForget((async()=>{Ri(this)&&(se(Rs,"Restarting streams for network reachability change."),await(async function(u){const d=Se(u);d.da.add(4),await Ja(d),d.ga.set("Unknown"),d.da.delete(4),await qc(d)})(this))}))})),this.ga=new yR(s,r)}}async function qc(n){if(Ri(n))for(const e of n.ma)await e(!0)}async function Ja(n){for(const e of n.ma)await e(!1)}function yh(n,e){return n.Ea.get(e)||void 0}function Ay(n,e){const t=Se(n),s=yh(t,e.targetId);if(s!==void 0&&t.Ia.has(s))return;const r=(function(c,u){const d=yh(c,u);d!==void 0&&c.Ra.delete(d);const g=(function(A,x){return x%2!=0?A.Va.next():A.Aa.next()})(c,u);return c.Ea.set(u,g),c.Ra.set(g,u),g})(t,e.targetId);se(Rs,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new Js(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(r,i),vf(t)?yf(t):Ro(t).O_()&&_f(t,i)}function mf(n,e){const t=Se(n),s=Ro(t),r=yh(t,e);se(Rs,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ia.delete(r),t.Ea.delete(e),t.Ra.delete(r),s.O_()&&Sy(t,r),t.Ia.size===0&&(s.O_()?s.L_():Ri(t)&&t.ga.set("Unknown"))}function _f(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void se(Rs,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}Ro(n).Z_(e)}function Sy(n,e){n.pa.$e(e),Ro(n).X_(e)}function yf(n){n.pa=new f0({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):Ve()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ro(n).start(),n.ga.ua()}function vf(n){return Ri(n)&&!Ro(n).x_()&&n.Ia.size>0}function Ri(n){return Se(n).da.size===0}function Cy(n){n.pa=void 0}async function wR(n){n.ga.set("Online")}async function ER(n){n.Ia.forEach(((e,t)=>{_f(n,e)}))}async function TR(n,e){Cy(n),vf(n)?(n.ga.ha(e),yf(n)):n.ga.set("Unknown")}async function bR(n,e,t){if(n.ga.set("Online"),e instanceof uy&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const c of i.targetIds){if(r.Ia.has(c)){const u=r.Ra.get(c);u!==void 0&&(await r.remoteSyncer.rejectListen(u,a),r.Ea.delete(u),r.Ra.delete(c)),r.Ia.delete(c)}r.pa.removeTarget(c)}})(n,e)}catch(s){se(Rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gc(n,s)}else if(e instanceof Hl?n.pa.Xe(e):e instanceof cy?n.pa.st(e):n.pa.tt(e),!t.isEqual(be.min()))try{const s=await Ty(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const c=i.pa.Tt(a);c.targetChanges.forEach(((d,g)=>{if(d.resumeToken.approximateByteSize()>0){const _=i.Ia.get(g);_&&i.Ia.set(g,_.withResumeToken(d.resumeToken,a))}})),c.targetMismatches.forEach(((d,g)=>{const _=i.Ia.get(d);if(!_)return;i.Ia.set(d,_.withResumeToken(Ht.EMPTY_BYTE_STRING,_.snapshotVersion)),Sy(i,d);const A=new Js(_.target,d,g,_.sequenceNumber);_f(i,A)}));const u=(function(g,_){const A=new Map;_.targetChanges.forEach(((Q,B)=>{const J=g.Ra.get(B);J!==void 0&&A.set(J,Q)}));let x=new pt(xe);return _.targetMismatches.forEach(((Q,B)=>{const J=g.Ra.get(Q);J!==void 0&&(x=x.insert(J,B))})),new Ga(_.snapshotVersion,A,x,_.documentUpdates,_.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(s){se(Rs,"Failed to raise snapshot:",s),await gc(n,s)}}async function gc(n,e,t){if(!Co(e))throw e;n.da.add(1),await Ja(n),n.ga.set("Offline"),t||(t=()=>Ty(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{se(Rs,"Retrying IndexedDB access"),await t(),n.da.delete(1),await qc(n)}))}function Ry(n,e){return e().catch((t=>gc(n,t,e)))}async function Wc(n){const e=Se(n),t=jr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:tf;for(;IR(e);)try{const r=await rR(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,AR(e,r)}catch(r){await gc(e,r)}Py(e)&&ky(e)}function IR(n){return Ri(n)&&n.Ta.length<10}function AR(n,e){n.Ta.push(e);const t=jr(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Py(n){return Ri(n)&&!jr(n).x_()&&n.Ta.length>0}function ky(n){jr(n).start()}async function SR(n){jr(n).ra()}async function CR(n){const e=jr(n);for(const t of n.Ta)e.ea(t.mutations)}async function RR(n,e,t){const s=n.Ta.shift(),r=cf.from(s,e,t);await Ry(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Wc(n)}async function PR(n,e){e&&jr(n).Y_&&await(async function(s,r){if((function(a){return c0(a)&&a!==G.ABORTED})(r.code)){const i=s.Ta.shift();jr(s).B_(),await Ry(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Wc(s)}})(n,e),Py(n)&&ky(n)}async function hg(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),se(Rs,"RemoteStore received new credentials");const s=Ri(t);t.da.add(3),await Ja(t),s&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await qc(t)}async function kR(n,e){const t=Se(n);e?(t.da.delete(2),await qc(t)):e||(t.da.add(2),await Ja(t),t.ga.set("Unknown"))}function Ro(n){return n.ya||(n.ya=(function(t,s,r){const i=Se(t);return i.sa(),new dR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:wR.bind(null,n),Yo:ER.bind(null,n),t_:TR.bind(null,n),H_:bR.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),vf(n)?yf(n):n.ga.set("Unknown")):(await n.ya.stop(),Cy(n))}))),n.ya}function jr(n){return n.wa||(n.wa=(function(t,s,r){const i=Se(t);return i.sa(),new pR(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:SR.bind(null,n),t_:PR.bind(null,n),ta:CR.bind(null,n),na:RR.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await Wc(n)):(await n.wa.stop(),n.Ta.length>0&&(se(Rs,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
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
 */class wf{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new wf(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ef(n,e){if(sr("AsyncQueue",`${e}: ${n}`),Co(n))return new ue(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=ia(),this.sortedSet=new pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class fg{constructor(){this.Sa=new pt(pe.comparator)}track(e){const t=e.doc.key,s=this.Sa.get(t);s?e.type!==0&&s.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&s.type!==1?this.Sa=this.Sa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Sa=this.Sa.remove(t):e.type===1&&s.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):me(63341,{Vt:e,ba:s}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Eo{constructor(e,t,s,r,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Eo(e,t,lo.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class DR{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class OR{constructor(){this.queries=dg(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,s){const r=Se(t),i=r.queries;r.queries=dg(),i.forEach(((a,c)=>{for(const u of c.va)u.onError(s)}))})(this,new ue(G.ABORTED,"Firestore shutting down"))}}function dg(){return new Si((n=>J_(n)),Uc)}async function NR(n,e){const t=Se(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Fa()&&e.Ma()&&(s=2):(i=new DR,s=e.Ma()?0:1);try{switch(s){case 0:i.Ca=await t.onListen(r,!0);break;case 1:i.Ca=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=Ef(a,`Initialization of query '${Ji(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&Tf(t)}async function xR(n,e){const t=Se(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.va.indexOf(e);a>=0&&(i.va.splice(a,1),i.va.length===0?r=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function VR(n,e){const t=Se(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.va)c.Na(r)&&(s=!0);a.Ca=r}}s&&Tf(t)}function MR(n,e,t){const s=Se(n),r=s.queries.get(e);if(r)for(const i of r.va)i.onError(t);s.queries.delete(e)}function Tf(n){n.xa.forEach((e=>{e.next()}))}var vh,pg;(pg=vh||(vh={})).Ba="default",pg.Cache="cache";class LR{constructor(e,t,s){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=s||{}}Na(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const s=t!=="Offline";return(!this.options.Wa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==vh.Cache}}/**
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
 */class Dy{constructor(e){this.key=e}}class Oy{constructor(e){this.key=e}}class FR{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=Ve(),this.mutatedKeys=Ve(),this.iu=Y_(e),this.su=new lo(this.iu)}get ou(){return this.tu}_u(e,t){const s=t?t.au:new fg,r=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,d=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((g,_)=>{const A=r.get(g),x=jc(this.query,_)?_:null,Q=!!A&&this.mutatedKeys.has(A.key),B=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let J=!1;A&&x?A.data.isEqual(x.data)?Q!==B&&(s.track({type:3,doc:x}),J=!0):this.uu(A,x)||(s.track({type:2,doc:x}),J=!0,(u&&this.iu(x,u)>0||d&&this.iu(x,d)<0)&&(c=!0)):!A&&x?(s.track({type:0,doc:x}),J=!0):A&&!x&&(s.track({type:1,doc:A}),J=!0,(u||d)&&(c=!0)),J&&(x?(a=a.add(x),i=B?i.add(g):i.delete(g)):(a=a.delete(g),i=i.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),i=i.delete(g.key),s.track({type:1,doc:g})}return{su:a,au:s,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort(((g,_)=>(function(x,Q){const B=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:J})}};return B(x)-B(Q)})(g.type,_.type)||this.iu(g.doc,_.doc))),this.cu(s),r=r??!1;const c=t&&!r?this.lu():[],u=this.ru.size===0&&this.current&&!r?1:0,d=u!==this.nu;return this.nu=u,a.length!==0||d?{snapshot:new Eo(this.query,e.su,i,a,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new fg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=Ve(),this.su.forEach((s=>{this.Pu(s.key)&&(this.ru=this.ru.add(s.key))}));const t=[];return e.forEach((s=>{this.ru.has(s)||t.push(new Oy(s))})),this.ru.forEach((s=>{e.has(s)||t.push(new Dy(s))})),t}Tu(e){this.tu=e.ks,this.ru=Ve();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return Eo.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const bf="SyncEngine";class UR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class jR{constructor(e){this.key=e,this.Eu=!1}}class $R{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new Si((c=>J_(c)),Uc),this.Vu=new Map,this.du=new Set,this.mu=new pt(pe.comparator),this.fu=new Map,this.gu=new ff,this.pu={},this.yu=new Map,this.wu=Ur.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function BR(n,e,t=!0){const s=Fy(n);let r;const i=s.Au.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Iu()):r=await Ny(s,e,t,!0),r}async function HR(n,e){const t=Fy(n);await Ny(t,e,!0,!1)}async function Ny(n,e,t,s){const r=await iR(n.localStore,ws(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await qR(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&Ay(n.remoteStore,r),c}async function qR(n,e,t,s,r){n.bu=(_,A,x)=>(async function(B,J,ne,Z){let ie=J.view._u(ne);ie.bs&&(ie=await og(B.localStore,J.query,!1).then((({documents:S})=>J.view._u(S,ie))));const oe=Z&&Z.targetChanges.get(J.targetId),Ce=Z&&Z.targetMismatches.get(J.targetId)!=null,Be=J.view.applyChanges(ie,B.isPrimaryClient,oe,Ce);return mg(B,J.targetId,Be.hu),Be.snapshot})(n,_,A,x);const i=await og(n.localStore,e,!0),a=new FR(e,i.ks),c=a._u(i.documents),u=Qa.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),d=a.applyChanges(c,n.isPrimaryClient,u);mg(n,t,d.hu);const g=new UR(e,t,a);return n.Au.set(e,g),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),d.snapshot}async function WR(n,e,t){const s=Se(n),r=s.Au.get(e),i=s.Vu.get(r.targetId);if(i.length>1)return s.Vu.set(r.targetId,i.filter((a=>!Uc(a,e)))),void s.Au.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await mh(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&mf(s.remoteStore,r.targetId),wh(s,r.targetId)})).catch(So)):(wh(s,r.targetId),await mh(s.localStore,r.targetId,!0))}async function zR(n,e){const t=Se(n),s=t.Au.get(e),r=t.Vu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),mf(t.remoteStore,s.targetId))}async function KR(n,e,t){const s=eP(n);try{const r=await(function(a,c){const u=Se(a),d=ft.now(),g=c.reduce(((x,Q)=>x.add(Q.key)),Ve());let _,A;return u.persistence.runTransaction("Locally write mutations","readwrite",(x=>{let Q=rr(),B=Ve();return u.xs.getEntries(x,g).next((J=>{Q=J,Q.forEach(((ne,Z)=>{Z.isValidDocument()||(B=B.add(ne))}))})).next((()=>u.localDocuments.getOverlayedDocuments(x,Q))).next((J=>{_=J;const ne=[];for(const Z of c){const ie=r0(Z,_.get(Z.key).overlayedDocument);ie!=null&&ne.push(new Ci(Z.key,ie,B_(ie.value.mapValue),Es.exists(!0)))}return u.mutationQueue.addMutationBatch(x,d,ne,c)})).next((J=>{A=J;const ne=J.applyToLocalDocumentSet(_,B);return u.documentOverlayCache.saveOverlays(x,J.batchId,ne)}))})).then((()=>({batchId:A.batchId,changes:Z_(_)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,u){let d=a.pu[a.currentUser.toKey()];d||(d=new pt(xe)),d=d.insert(c,u),a.pu[a.currentUser.toKey()]=d})(s,r.batchId,t),await Ya(s,r.changes),await Wc(s.remoteStore)}catch(r){const i=Ef(r,"Failed to persist write");t.reject(i)}}async function xy(n,e){const t=Se(n);try{const s=await nR(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.fu.get(i);a&&(Ke(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Eu=!0:r.modifiedDocuments.size>0?Ke(a.Eu,14607):r.removedDocuments.size>0&&(Ke(a.Eu,42227),a.Eu=!1))})),await Ya(t,s,e)}catch(s){await So(s)}}function gg(n,e,t){const s=Se(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Au.forEach(((i,a)=>{const c=a.view.Oa(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const u=Se(a);u.onlineState=c;let d=!1;u.queries.forEach(((g,_)=>{for(const A of _.va)A.Oa(c)&&(d=!0)})),d&&Tf(u)})(s.eventManager,e),r.length&&s.Ru.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function GR(n,e,t){const s=Se(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.fu.get(e),i=r&&r.key;if(i){let a=new pt(pe.comparator);a=a.insert(i,en.newNoDocument(i,be.min()));const c=Ve().add(i),u=new Ga(be.min(),new Map,new pt(xe),a,c);await xy(s,u),s.mu=s.mu.remove(i),s.fu.delete(e),If(s)}else await mh(s.localStore,e,!1).then((()=>wh(s,e,t))).catch(So)}async function QR(n,e){const t=Se(n),s=e.batch.batchId;try{const r=await tR(t.localStore,e);My(t,s,null),Vy(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ya(t,r)}catch(r){await So(r)}}async function JR(n,e,t){const s=Se(n);try{const r=await(function(a,c){const u=Se(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let g;return u.mutationQueue.lookupMutationBatch(d,c).next((_=>(Ke(_!==null,37113),g=_.keys(),u.mutationQueue.removeMutationBatch(d,_)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,g,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g))).next((()=>u.localDocuments.getDocuments(d,g)))}))})(s.localStore,e);My(s,e,t),Vy(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ya(s,r)}catch(r){await So(r)}}function Vy(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function My(n,e,t){const s=Se(n);let r=s.pu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.pu[s.currentUser.toKey()]=r}}function wh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Vu.get(e))n.Au.delete(s),t&&n.Ru.Du(s,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((s=>{n.gu.containsKey(s)||Ly(n,s)}))}function Ly(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(mf(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),If(n))}function mg(n,e,t){for(const s of t)s instanceof Dy?(n.gu.addReference(s.key,e),YR(n,s)):s instanceof Oy?(se(bf,"Document no longer in limbo: "+s.key),n.gu.removeReference(s.key,e),n.gu.containsKey(s.key)||Ly(n,s.key)):me(19791,{Cu:s})}function YR(n,e){const t=e.key,s=t.path.canonicalString();n.mu.get(t)||n.du.has(s)||(se(bf,"New document in limbo: "+t),n.du.add(s),If(n))}function If(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new pe(ht.fromString(e)),s=n.wu.next();n.fu.set(s,new jR(t)),n.mu=n.mu.insert(t,s),Ay(n.remoteStore,new Js(ws(Q_(t.path)),s,"TargetPurposeLimboResolution",Vc.ce))}}async function Ya(n,e,t){const s=Se(n),r=[],i=[],a=[];s.Au.isEmpty()||(s.Au.forEach(((c,u)=>{a.push(s.bu(u,e,t).then((d=>{var g;if((d||t)&&s.isPrimaryClient){const _=d?!d.fromCache:(g=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:g.current;s.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){r.push(d);const _=pf.Es(u.targetId,d);i.push(_)}})))})),await Promise.all(a),s.Ru.H_(r),await(async function(u,d){const g=Se(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(_=>H.forEach(d,(A=>H.forEach(A.Ts,(x=>g.persistence.referenceDelegate.addReference(_,A.targetId,x))).next((()=>H.forEach(A.Is,(x=>g.persistence.referenceDelegate.removeReference(_,A.targetId,x)))))))))}catch(_){if(!Co(_))throw _;se(gf,"Failed to update sequence numbers: "+_)}for(const _ of d){const A=_.targetId;if(!_.fromCache){const x=g.vs.get(A),Q=x.snapshotVersion,B=x.withLastLimboFreeSnapshotVersion(Q);g.vs=g.vs.insert(A,B)}}})(s.localStore,i))}async function XR(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){se(bf,"User change. New user:",e.toKey());const s=await Ey(t.localStore,e);t.currentUser=e,(function(i,a){i.yu.forEach((c=>{c.forEach((u=>{u.reject(new ue(G.CANCELLED,a))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ya(t,s.Ns)}}function ZR(n,e){const t=Se(n),s=t.fu.get(e);if(s&&s.Eu)return Ve().add(s.key);{let r=Ve();const i=t.Vu.get(e);if(!i)return r;for(const a of i){const c=t.Au.get(a);r=r.unionWith(c.view.ou)}return r}}function Fy(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GR.bind(null,e),e.Ru.H_=VR.bind(null,e.eventManager),e.Ru.Du=MR.bind(null,e.eventManager),e}function eP(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JR.bind(null,e),e}class mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return eR(this.persistence,new Y0,e.initialUser,this.serializer)}xu(e){return new wy(df.Vi,this.serializer)}Mu(e){return new aR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mc.provider={build:()=>new mc};class tP extends mc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){Ke(this.persistence.referenceDelegate instanceof pc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new M0(s,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new wy((s=>pc.Vi(s,t)),this.serializer)}}class Eh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=XR.bind(null,this.syncEngine),await kR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new OR})()}createDatastore(e){const t=Hc(e.databaseInfo.databaseId),s=fR(e.databaseInfo);return _R(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,c){return new vR(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>gg(this.syncEngine,t,0)),(function(){return cg.v()?new cg:new lR})())}createSyncEngine(e,t){return(function(r,i,a,c,u,d,g){const _=new $R(r,i,a,c,u,d);return g&&(_.Su=!0),_})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=Se(r);se(Rs,"RemoteStore shutting down."),i.da.add(5),await Ja(i),i.fa.shutdown(),i.ga.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Eh.provider={build:()=>new Eh};/**
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
 */class nP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const $r="FirestoreClient";class sP{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Xt.UNAUTHENTICATED,this.clientId=Zh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{se($r,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(se($r,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ef(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Uu(n,e){n.asyncQueue.verifyOperationInProgress(),se($r,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Ey(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function _g(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rP(n);se($r,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>hg(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>hg(e.remoteStore,r))),n._onlineComponents=e}async function rP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){se($r,"Using user provided OfflineComponentProvider");try{await Uu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===G.FAILED_PRECONDITION||r.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;bi("Error using user provided cache. Falling back to memory cache: "+t),await Uu(n,new mc)}}else se($r,"Using default OfflineComponentProvider"),await Uu(n,new tP(void 0));return n._offlineComponents}async function Uy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(se($r,"Using user provided OnlineComponentProvider"),await _g(n,n._uninitializedComponentsProvider._online)):(se($r,"Using default OnlineComponentProvider"),await _g(n,new Eh))),n._onlineComponents}function iP(n){return Uy(n).then((e=>e.syncEngine))}async function oP(n){const e=await Uy(n),t=e.eventManager;return t.onListen=BR.bind(null,e.syncEngine),t.onUnlisten=WR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zR.bind(null,e.syncEngine),t}function aP(n,e,t={}){const s=new Or;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const g=new nP({next:A=>{g.Ku(),a.enqueueAndForget((()=>xR(i,_))),A.fromCache&&u.source==="server"?d.reject(new ue(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),_=new LR(c,g,{includeMetadataChanges:!0,Wa:!0});return NR(i,_)})(await oP(n),n.asyncQueue,e,t,s))),s.promise}function lP(n,e){const t=new Or;return n.asyncQueue.enqueueAndForget((async()=>KR(await iP(n),e,t))),t.promise}/**
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
 */function jy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const cP="ComponentProvider",yg=new Map;function uP(n,e,t,s,r){return new AC(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,jy(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const $y="firestore.googleapis.com",vg=!0;class wg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$y,this.ssl=vg}else this.host=e.host,this.ssl=e.ssl??vg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<x0)throw new ue(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jy(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new rC;switch(s.type){case"firstParty":return new lC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=yg.get(t);s&&(se(cP,"Removing Datastore"),yg.delete(t),s.terminate())})(this),Promise.resolve()}}function hP(n,e,t,s={}){var d;n=yo(n,zc);const r=Ba(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&jm(`https://${c}`),i.host!==$y&&i.host!==c&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:r,emulatorOptions:s};if(!vi(u,a)&&(n._setSettings(u),s.mockUserToken)){let g,_;if(typeof s.mockUserToken=="string")g=s.mockUserToken,_=Xt.MOCK_USER;else{g=Db(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ue(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Xt(A)}n._authCredentials=new iC(new k_(g,_))}}/**
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
 */class Kc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Kc(this.firestore,e,this._query)}}class Lt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(za(t,Lt._jsonSchema))return new Lt(e,s||null,new pe(ht.fromString(t.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:St("string",Lt._jsonSchemaVersion),referencePath:St("string")};class Nr extends Kc{constructor(e,t,s){super(e,t,Q_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new pe(e))}withConverter(e){return new Nr(this.firestore,e,this._path)}}function fP(n,e,...t){if(n=bn(n),D_("collection","path",e),n instanceof zc){const s=ht.fromString(e,...t);return xp(s),new Nr(n,null,s)}{if(!(n instanceof Lt||n instanceof Nr))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ht.fromString(e,...t));return xp(s),new Nr(n.firestore,null,s)}}function By(n,e,...t){if(n=bn(n),arguments.length===1&&(e=Zh.newId()),D_("doc","path",e),n instanceof zc){const s=ht.fromString(e,...t);return Np(s),new Lt(n,null,new pe(s))}{if(!(n instanceof Lt||n instanceof Nr))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ht.fromString(e,...t));return Np(s),new Lt(n.firestore,n instanceof Nr?n.converter:null,new pe(s))}}/**
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
 */const Eg="AsyncQueue";class Tg{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new by(this,"async_queue_retry"),this.lc=()=>{const s=Fu();s&&se(Eg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.hc=e;const t=Fu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Fu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new Or;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Co(e))throw e;se(Eg,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((s=>{throw this._c=s,this.ac=!1,sr("INTERNAL UNHANDLED ERROR: ",bg(s)),s})).then((s=>(this.ac=!1,s))))));return this.hc=t,t}enqueueAfterDelay(e,t,s){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const r=wf.createAndSchedule(this,e,t,s,(i=>this.Ec(i)));return this.oc.push(r),r}Pc(){this._c&&me(47125,{Rc:bg(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function bg(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Gc extends zc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Tg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function dP(n,e){const t=typeof n=="object"?n:qm(),s=typeof n=="string"?n:lc,r=$h(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Pb("firestore");i&&hP(r,...i)}return r}function Hy(n){if(n._terminated)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||pP(n),n._firestoreClient}function pP(n){var s,r,i,a;const e=n._freezeSettings(),t=uP(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new sP(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
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
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(Ht.fromBase64String(e))}catch(t){throw new ue(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xn(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(za(e,xn._jsonSchema))return xn.fromBase64String(e.bytes)}}xn._jsonSchemaVersion="firestore/bytes/1.0",xn._jsonSchema={type:St("string",xn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class qy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Af{constructor(e){this._methodName=e}}/**
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
 */class bs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bs._jsonSchemaVersion}}static fromJSON(e){if(za(e,bs._jsonSchema))return new bs(e.latitude,e.longitude)}}bs._jsonSchemaVersion="firestore/geoPoint/1.0",bs._jsonSchema={type:St("string",bs._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Yn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(za(e,Yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Yn(e.vectorValues);throw new ue(G.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:St("string",Yn._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const gP=/^__.*__$/;class mP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ka(e,this.data,t,this.fieldTransforms)}}function Wy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{dataSource:n})}}class Sf{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.wc(e),s}Sc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.fc(),s}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return _c(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Wy(this.dataSource)&&gP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class _P{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Hc(e)}V(e,t,s,r=!1){return new Sf({dataSource:e,methodName:t,targetDoc:s,path:Bt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yP(n){const e=n._freezeSettings(),t=Hc(n._databaseId);return new _P(n._databaseId,!!e.ignoreUndefinedProperties,t)}function vP(n,e,t,s,r,i={}){const a=n.V(i.merge||i.mergeFields?2:0,e,t,r);Qy("Data must be an object, but it was:",a,s);const c=Ky(s,a);let u,d;if(i.merge)u=new Kn(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const g=[];for(const _ of i.mergeFields){const A=Rf(e,_,t);if(!a.contains(A))throw new ue(G.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);TP(g,A)||g.push(A)}u=new Kn(g),d=a.fieldTransforms.filter((_=>u.covers(_.field)))}else u=null,d=a.fieldTransforms;return new mP(new Nn(c),u,d)}class Cf extends Af{_toFieldTransform(e){return new e0(e.path,new Da)}isEqual(e){return e instanceof Cf}}function zy(n,e){if(Gy(n=bn(n)))return Qy("Unsupported field value:",e,n),Ky(n,e);if(n instanceof Af)return(function(s,r){if(!Wy(r.dataSource))throw r.Dc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let u=zy(c,r.bc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=bn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return YC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ft.fromDate(s);return{timestampValue:dc(r.serializer,i)}}if(s instanceof ft){const i=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:dc(r.serializer,i)}}if(s instanceof bs)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof xn)return{bytesValue:hy(r.serializer,s._byteString)};if(s instanceof Lt){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hf(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Yn)return(function(a,c){const u=a instanceof Yn?a.toArray():a;return{mapValue:{fields:{[j_]:{stringValue:$_},[cc]:{arrayValue:{values:u.map((g=>{if(typeof g!="number")throw c.Dc("VectorValues must only contain numeric values.");return af(c.serializer,g)}))}}}}}})(s,r);if(yy(s))return s._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${ef(s)}`)})(n,e)}function Ky(n,e){const t={};return x_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(n,((s,r)=>{const i=zy(r,e.yc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Gy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ft||n instanceof bs||n instanceof xn||n instanceof Lt||n instanceof Af||n instanceof Yn||yy(n))}function Qy(n,e,t){if(!Gy(t)||!O_(t)){const s=ef(t);throw s==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+s)}}function Rf(n,e,t){if((e=bn(e))instanceof qy)return e._internalPath;if(typeof e=="string")return EP(n,e);throw _c("Field path arguments must be of type string or ",n,!1,void 0,t)}const wP=new RegExp("[~\\*/\\[\\]]");function EP(n,e,t){if(e.search(wP)>=0)throw _c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qy(...e.split("."))._internalPath}catch{throw _c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _c(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new ue(G.INVALID_ARGUMENT,c+n+u)}function TP(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class bP{convertValue(e,t="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ai(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[cc].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>wt(a.doubleValue)));return new Yn(t)}convertGeoPoint(e){return new bs(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Lc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const t=Mr(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ht.fromString(e);Ke(_y(s),9688,{name:e});const r=new Pa(s.get(1),s.get(3)),i=new pe(s.popFirst(5));return r.isEqual(t)||sr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class IP extends bP{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,t)}}function AP(){return new Cf("serverTimestamp")}const Ig="@firebase/firestore",Ag="4.14.1";/**
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
 */class Jy{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class SP extends Jy{data(){return super.data()}}/**
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
 */function CP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function RP(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Rl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class co extends Jy{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(G.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=co._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}co._jsonSchemaVersion="firestore/documentSnapshot/1.0",co._jsonSchema={type:St("string",co._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class ql extends co{data(e={}){return super.data(e)}}class uo{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Rl(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ql(this._firestore,this._userDataWriter,s.key,s,new Rl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const u=new ql(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Rl(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new ql(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Rl(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let d=-1,g=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:PP(c.type),doc:u,oldIndex:d,newIndex:g}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(G.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:n})}}/**
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
 */uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:St("string",uo._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};function kP(n){n=yo(n,Kc);const e=yo(n.firestore,Gc),t=Hy(e),s=new IP(e);return CP(n._query),aP(t,n._query).then((r=>new uo(e,s,n,r)))}function DP(n,e,t){n=yo(n,Lt);const s=yo(n.firestore,Gc),r=RP(n.converter,e),i=yP(s);return Yy(s,[vP(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Es.none())])}function OP(n){return Yy(yo(n.firestore,Gc),[new lf(n._key,Es.none())])}function Yy(n,e){const t=Hy(n);return lP(t,e)}(function(e,t=!0){sC(bo),go(new wi("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new Gc(new oC(s.getProvider("auth-internal")),new cC(a,s.getProvider("app-check-internal")),SC(a,r),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),kr(Ig,Ag,e),kr(Ig,Ag,"esm2020")})();var NP="firebase",xP="12.13.0";/**
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
 */kr(NP,xP,"app");const aa={apiKey:"AIzaSyCEDVal9uLQ_bJLij6M2PFA3MWuiA0uCfU",authDomain:"moviediscovery-75a03.firebaseapp.com",projectId:"moviediscovery-75a03",storageBucket:"moviediscovery-75a03.firebasestorage.app",messagingSenderId:"967866909978",appId:"1:967866909978:web:8025ff7d7ebf52011ed8a3",measurementId:"G-0HQ1X88MBB"},VP=!!(aa.apiKey&&aa.authDomain&&aa.projectId&&aa.appId),xa=VP?Hm(aa):null,Po=!!xa,Pf=xa?tC(xa):null,kf=xa?dP(xa):null,MP=new Ks;function LP(n){return Po?HA(Pf,n):(n(null),()=>{})}async function FP(){if(!Po)throw new Error("Firebase is not configured");await uS(Pf,MP)}async function UP(){Po&&await qA(Pf)}async function jP(n){return!Po||!n?[]:(await kP(fP(kf,"users",n,"watchlist"))).docs.map(t=>t.data())}async function $P(n,e){var t;!Po||!n||await DP(By(kf,"users",n,"watchlist",String(e.id)),{id:e.id,title:e.title,overview:e.overview||"",poster_path:e.poster_path||"",backdrop_path:e.backdrop_path||"",posterUrl:e.posterUrl||"",backdropUrl:e.backdropUrl||"",release_date:e.release_date||"",vote_average:e.vote_average||0,genre_ids:e.genre_ids||((t=e.genres)==null?void 0:t.map(s=>s.id))||[],year:e.year||"",rating:e.rating||"NR",addedAt:AP()})}async function BP(n,e){!Po||!n||await OP(By(kf,"users",n,"watchlist",String(e)))}const HP={class:"hero-overlay"},qP={class:"container py-4 d-flex align-items-center justify-content-between gap-3"},WP={class:"nav-actions"},zP={key:1,class:"account-pill"},KP=["src","alt"],GP={class:"badge text-bg-dark ms-1"},QP={class:"container hero-content"},JP={class:"hero-copy"},YP={class:"content-band"},XP={class:"container py-4 py-lg-5"},ZP={class:"toolbar mb-4"},ek=["value"],tk={key:0,class:"alert alert-warning auth-alert",role:"alert"},nk={class:"d-flex align-items-end justify-content-between gap-3 mb-3"},sk={class:"section-kicker mb-1"},rk={class:"h3 mb-0"},ik={key:1,class:"loading-state"},ok={key:2,class:"empty-state"},ak={key:3,class:"row g-4"},lk={key:4,class:"recommendations-section"},ck={key:0,class:"loading-state compact-state"},uk={key:1,class:"empty-state compact-state"},hk={key:2,class:"row g-4"},fk={key:0,class:"detail-page"},dk={class:"container py-5"},pk={class:"row g-4 align-items-start"},gk={class:"col-md-4 col-lg-3"},mk=["src","alt"],_k={class:"col-md-8 col-lg-9"},yk={class:"detail-meta mb-3"},vk={class:"badge text-bg-warning"},wk={key:0},Ek={class:"display-5 fw-bold"},Tk={class:"lead text-secondary"},bk={class:"d-flex flex-wrap gap-2 mb-4"},Ik={key:0,class:"cast-section mt-5"},Ak={class:"cast-grid"},Sk=["onClick"],Ck=["src","alt"],Rk={key:1,class:"cast-photo cast-photo-placeholder"},Pk={class:"cast-copy"},kk={key:1,class:"profile-page"},Dk={class:"container py-5"},Ok={key:0,class:"loading-state"},Nk={key:1,class:"row g-4 align-items-start"},xk={class:"col-md-4 col-lg-3"},Vk=["src","alt"],Mk={key:1,class:"profile-photo-placeholder"},Lk={class:"col-md-8 col-lg-9"},Fk={class:"detail-meta mb-3"},Uk={key:0},jk={key:1},$k={class:"display-5 fw-bold"},Bk={class:"lead text-secondary profile-bio"},Hk={class:"profile-credits mt-5"},qk={key:0,class:"empty-state compact-state"},Wk={key:1,class:"row g-4"},zk={__name:"App",setup(n){const e=Jt([]),t=Jt([]),s=Jt(JSON.parse(localStorage.getItem("movie-watchlist")||"[]")),r=Jt(null),i=Jt(""),a=Jt(""),c=Jt("year"),u=Jt(null),d=Jt(null),g=Jt(!0),_=Jt(""),A=Jt(!1),x=Jt([]),Q=Jt(!1),B=Jt("home"),J=Jt({});let ne=0,Z=0,ie=null;const oe=Bs(()=>e.value[0]),Ce=Bs(()=>B.value==="watchlist"?s.value:e.value),Be=Bs(()=>a.value?Ce.value.filter(N=>{var L;return(N.genre_ids||((L=N.genres)==null?void 0:L.map(W=>W.id))||[]).includes(Number(a.value))}):Ce.value),S=Bs(()=>[...Be.value].sort((P,L)=>{switch(c.value){case"rating-desc":return st(L)-st(P);case"rating-asc":return st(P)-st(L);case"runtime-desc":return De(L,-1)-De(P,-1);case"runtime-asc":return De(P,Number.MAX_SAFE_INTEGER)-De(L,Number.MAX_SAFE_INTEGER);case"title-asc":return at(P).localeCompare(at(L));case"title-desc":return at(L).localeCompare(at(P));case"year":default:return qt(L)-qt(P)}})),w=Bs(()=>B.value==="watchlist"?"Your Watchlist":i.value?`Results for "${i.value}"`:"Trending Movies"),b=Bs(()=>u.value?u.value.genres?u.value.genres:t.value.filter(N=>{var P;return(P=u.value.genre_ids)==null?void 0:P.includes(N.id)}):[]),R=Bs(()=>{var N,P,L;return((L=(P=(N=u.value)==null?void 0:N.credits)==null?void 0:P.cast)==null?void 0:L.slice(0,12))||[]}),I=Bs(()=>{var P,L;const N=new Set;return(((L=(P=d.value)==null?void 0:P.movieCredits)==null?void 0:L.cast)||[]).filter(W=>W.posterUrl).filter(W=>N.has(W.id)?!1:(N.add(W.id),!0)).sort((W,K)=>{const F=W.release_date||"";return(K.release_date||"").localeCompare(F)}).slice(0,18)});function O(){localStorage.setItem("movie-watchlist",JSON.stringify(s.value))}function E(N){return s.value.some(P=>P.id===N)}function st(N){return Number(N.vote_average||N.rating||0)}function qt(N){var P;return Number(((P=N.release_date)==null?void 0:P.slice(0,4))||N.year||0)}function at(N){return N.title||N.name||""}function He(N){return Number(J.value[N.id]||N.runtime||0)}function De(N,P){return He(N)||P}async function Ct(N){var P,L;if(_.value="",E(N.id)){s.value=s.value.filter(W=>W.id!==N.id);try{await BP((P=r.value)==null?void 0:P.uid,N.id)}catch(W){_.value=W.message||"Unable to update your account watchlist."}}else{s.value=[N,...s.value];try{await $P((L=r.value)==null?void 0:L.uid,N)}catch(W){_.value=W.message||"Unable to update your account watchlist."}}r.value||O(),Et()}async function Ln(){_.value="";try{await FP()}catch(N){_.value=N.message||"Unable to sign in."}}async function $(){_.value="";try{await UP()}catch(N){_.value=N.message||"Unable to sign out."}}async function Rt(N){if(r.value=N,_.value="",!N){B.value==="watchlist"&&(B.value="home"),s.value=JSON.parse(localStorage.getItem("movie-watchlist")||"[]"),Et();return}try{const P=await jP(N.uid);s.value=P,Et()}catch(P){_.value=P.message||"Unable to load your account watchlist."}}function Fn(N=""){return N.split(" ").filter(Boolean).slice(0,2).map(P=>P[0]).join("").toUpperCase()}async function In(){g.value=!0,B.value="home",u.value=null,e.value=await _b(i.value),g.value=!1}async function Et(){const N=++ne;if(!s.value.length){x.value=[],Q.value=!1;return}Q.value=!0;const P=await vb(s.value);N===ne&&(x.value=P,Q.value=!1)}async function Ft(){if(!c.value.startsWith("runtime"))return;const N=Be.value.filter(W=>!He(W)).slice(0,30);if(!N.length)return;const P=await Promise.all(N.map(W=>Cu(W.id))),L={...J.value};P.forEach(W=>{W!=null&&W.runtime&&(L[W.id]=W.runtime)}),J.value=L}async function lt(N){const P=await Cu(N.id);u.value=P||N,P!=null&&P.runtime&&(J.value={...J.value,[P.id]:P.runtime}),d.value=null,window.history.pushState({},"",`#movie-${N.id}`)}async function yn(N){await lt(N),d.value=null}async function ce(N){const P=++Z;A.value=!0,d.value=null;const L=await wb(N.id);P===Z&&(d.value=L||{...N,biography:"No profile available.",movieCredits:{cast:[]}},A.value=!1)}function fn(){d.value=null,A.value=!1}function Br(){u.value=null,d.value=null,window.history.pushState({},"",window.location.pathname)}function T(){B.value="watchlist",u.value=null,d.value=null,window.history.pushState({},"",window.location.pathname)}function C(){B.value="home",u.value=null,d.value=null,window.history.pushState({},"",window.location.pathname)}async function U(){const N=window.location.hash.match(/^#movie-(\d+)$/);if(!N){u.value=null,d.value=null;return}const P=await Cu(N[1]);u.value=P}return am(async()=>{ie=LP(Rt);const[N,P]=await Promise.all([Nm(),yb()]);e.value=N,t.value=P,g.value=!1,Et(),await U(),window.addEventListener("popstate",U)}),Dl([c,Be],()=>{Ft()}),Vh(()=>{ie==null||ie(),window.removeEventListener("popstate",U)}),(N,P)=>{var L,W,K;return ve(),Te("main",null,[re("section",{class:"hero",style:Ic({backgroundImage:(L=oe.value)!=null&&L.backdropUrl?`url(${oe.value.backdropUrl})`:""})},[re("div",HP,[re("nav",qP,[re("button",{class:"brand-button",type:"button",onClick:C},"Movie Discovery"),re("div",WP,[r.value?(ve(),Te("div",zP,[r.value.photoURL?(ve(),Te("img",{key:0,class:"account-avatar",src:r.value.photoURL,alt:r.value.displayName||r.value.email},null,8,KP)):gn("",!0),re("span",null,Je(r.value.displayName||r.value.email),1),re("button",{class:"btn btn-sm btn-outline-light",type:"button",onClick:$},"Sign out")])):(ve(),Te("button",{key:0,class:"btn btn-outline-light",type:"button",onClick:Ln}," Sign in ")),r.value?(ve(),Te("button",{key:2,class:"btn btn-warning",type:"button",onClick:T},[P[5]||(P[5]=Rm(" Watchlist ",-1)),re("span",GP,Je(s.value.length),1)])):gn("",!0)])]),re("div",QP,[P[6]||(P[6]=re("p",{class:"text-warning fw-semibold mb-2"},"Trending this week",-1)),re("h1",null,Je(((W=oe.value)==null?void 0:W.title)||"Discover your next movie"),1),re("p",JP,Je(((K=oe.value)==null?void 0:K.overview)||"Search, filter, rate, and save movies with TMDB data."),1),oe.value?(ve(),Te("button",{key:0,class:"btn btn-light btn-lg",type:"button",onClick:P[0]||(P[0]=F=>lt(oe.value))}," View Details ")):gn("",!0)])])],4),re("section",YP,[re("div",XP,[re("div",ZP,[re("form",{class:"search-form",onSubmit:HT(In,["prevent"])},[wu(re("input",{"onUpdate:modelValue":P[1]||(P[1]=F=>i.value=F),class:"form-control form-control-lg",type:"search",placeholder:"Search movies","aria-label":"Search movies"},null,512),[[jT,i.value]]),P[7]||(P[7]=re("button",{class:"btn btn-warning btn-lg",type:"submit"},"Search",-1))],32),wu(re("select",{"onUpdate:modelValue":P[2]||(P[2]=F=>a.value=F),class:"form-select form-select-lg genre-select","aria-label":"Filter by genre"},[P[8]||(P[8]=re("option",{value:""},"All genres",-1)),(ve(!0),Te(un,null,Ki(t.value,F=>(ve(),Te("option",{key:F.id,value:F.id},Je(F.name),9,ek))),128))],512),[[Xd,a.value]]),wu(re("select",{"onUpdate:modelValue":P[3]||(P[3]=F=>c.value=F),class:"form-select form-select-lg sort-select","aria-label":"Sort movies"},[...P[9]||(P[9]=[aT('<option value="year">Year</option><option value="rating-desc">Highest rating</option><option value="rating-asc">Lowest rating</option><option value="runtime-desc">Longest runtime</option><option value="runtime-asc">Lowest runtime</option><option value="title-asc">Alphabetical A-Z</option><option value="title-desc">Alphabetical Z-A</option>',7)])],512),[[Xd,c.value]])]),_.value?(ve(),Te("div",tk,Je(_.value),1)):gn("",!0),re("div",nk,[re("div",null,[re("p",sk,Je(B.value==="watchlist"?"Saved picks":"Browse"),1),re("h2",rk,Je(w.value),1)]),B.value==="watchlist"?(ve(),Te("button",{key:0,class:"btn btn-outline-light",type:"button",onClick:C}," Back to Movies ")):gn("",!0)]),g.value?(ve(),Te("div",ik,"Loading movies...")):S.value.length===0?(ve(),Te("div",ok," No movies found. Try another search or genre. ")):(ve(),Te("div",ak,[(ve(!0),Te(un,null,Ki(S.value,F=>(ve(),Te("div",{key:F.id,class:"col-6 col-md-4 col-lg-3 col-xl-2"},[Tn(Su,{movie:F,"is-watchlisted":E(F.id),onSelect:lt,onToggleWatchlist:Ct},null,8,["movie","is-watchlisted"])]))),128))])),s.value.length?(ve(),Te("div",lk,[P[10]||(P[10]=re("div",{class:"d-flex align-items-end justify-content-between gap-3 mb-3"},[re("div",null,[re("p",{class:"section-kicker mb-1"},"For your watchlist"),re("h2",{class:"h3 mb-0"},"Recommended Movies")])],-1)),Q.value?(ve(),Te("div",ck,"Finding similar movies...")):x.value.length===0?(ve(),Te("div",uk," Add a few more movies to improve recommendations. ")):(ve(),Te("div",hk,[(ve(!0),Te(un,null,Ki(x.value,F=>(ve(),Te("div",{key:F.id,class:"col-6 col-md-4 col-lg-3 col-xl-2"},[Tn(Su,{movie:F,"is-watchlisted":E(F.id),onSelect:lt,onToggleWatchlist:Ct},null,8,["movie","is-watchlisted"])]))),128))]))])):gn("",!0)])]),u.value?(ve(),Te("section",fk,[re("div",dk,[re("button",{class:"btn btn-outline-light mb-4",type:"button",onClick:Br},"Back"),re("div",pk,[re("div",gk,[u.value.posterUrl?(ve(),Te("img",{key:0,class:"detail-poster",src:u.value.posterUrl,alt:u.value.title},null,8,mk)):gn("",!0)]),re("div",_k,[re("div",yk,[re("span",vk,Je(u.value.rating),1),re("span",null,Je(u.value.year),1),u.value.runtime?(ve(),Te("span",wk,Je(u.value.runtime)+" min",1)):gn("",!0)]),re("h2",Ek,Je(u.value.title),1),re("p",Tk,Je(u.value.overview),1),re("div",bk,[(ve(!0),Te(un,null,Ki(b.value,F=>(ve(),Te("span",{key:F.id,class:"badge rounded-pill text-bg-secondary"},Je(F.name),1))),128))]),re("button",{class:Ma(["btn btn-lg",E(u.value.id)?"btn-success":"btn-warning"]),type:"button",onClick:P[4]||(P[4]=F=>Ct(u.value))},Je(E(u.value.id)?"Remove from Watchlist":"Add to Watchlist"),3),R.value.length?(ve(),Te("div",Ik,[P[11]||(P[11]=re("div",{class:"d-flex align-items-end justify-content-between gap-3 mb-3"},[re("div",null,[re("h3",{class:"mb-1"},"Cast")])],-1)),re("div",Ak,[(ve(!0),Te(un,null,Ki(R.value,F=>(ve(),Te("button",{key:F.cast_id||F.credit_id||F.id,class:"cast-card",type:"button",onClick:q=>ce(F)},[F.profileUrl?(ve(),Te("img",{key:0,class:"cast-photo",src:F.profileUrl,alt:F.name},null,8,Ck)):(ve(),Te("div",Rk,Je(Fn(F.name)),1)),re("div",Pk,[re("h4",null,Je(F.name),1),re("p",null,Je(F.character||"Cast member"),1)])],8,Sk))),128))])])):gn("",!0)])])])])):gn("",!0),d.value||A.value?(ve(),Te("section",kk,[re("div",Dk,[re("button",{class:"btn btn-outline-light mb-4",type:"button",onClick:fn},"Back to Movie"),A.value?(ve(),Te("div",Ok,"Loading profile...")):d.value?(ve(),Te("div",Nk,[re("div",xk,[d.value.profileUrl?(ve(),Te("img",{key:0,class:"detail-poster",src:d.value.profileUrl,alt:d.value.name},null,8,Vk)):(ve(),Te("div",Mk,Je(Fn(d.value.name)),1))]),re("div",Lk,[re("div",Fk,[re("span",null,Je(d.value.known_for_department||"Film"),1),d.value.birthday?(ve(),Te("span",Uk,"Born "+Je(d.value.birthday),1)):gn("",!0),d.value.place_of_birth?(ve(),Te("span",jk,Je(d.value.place_of_birth),1)):gn("",!0)]),re("h2",$k,Je(d.value.name),1),re("p",Bk,Je(d.value.biography||"No biography available."),1),re("div",Hk,[P[12]||(P[12]=re("p",{class:"section-kicker mb-1"},"Filmography",-1)),P[13]||(P[13]=re("h3",{class:"h4 mb-3"},"Movies",-1)),I.value.length===0?(ve(),Te("div",qk," No movie credits found. ")):(ve(),Te("div",Wk,[(ve(!0),Te(un,null,Ki(I.value,F=>(ve(),Te("div",{key:F.credit_id||F.id,class:"col-6 col-md-4 col-lg-3 col-xl-2"},[Tn(Su,{movie:F,"is-watchlisted":E(F.id),onSelect:yn,onToggleWatchlist:Ct},null,8,["movie","is-watchlisted"])]))),128))]))])])])):gn("",!0)])])):gn("",!0)])}}};zT(zk).mount("#app");
