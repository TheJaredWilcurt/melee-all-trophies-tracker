/*!
  * pinia v2.0.20
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var Pinia=function(E,I){"use strict";let f;const R=t=>f=t;const h=Symbol("pinia");function s(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}const L="function"==typeof Proxy,C="devtools-plugin:setup";let e,n;function M(){return void 0!==e||("undefined"!=typeof window&&window.performance?(e=!0,n=window.performance):"undefined"!=typeof global&&null!=(t=global.perf_hooks)&&t.performance?(e=!0,n=global.perf_hooks.performance):e=!1),(e?n:Date).now();var t}class D{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const c in t.settings){var o=t.settings[c];n[c]=o.defaultValue}const a="__vue-devtools-plugin-settings__"+t.id;let r=Object.assign({},n);try{var i=localStorage.getItem(a),s=JSON.parse(i);Object.assign(r,s)}catch(t){}this.fallbacks={getSettings(){return r},setSettings(t){try{localStorage.setItem(a,JSON.stringify(t))}catch(t){}r=t},now(){return M()}},e&&e.on("plugin:settings:set",(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,n)=>this.target?this.target[n]:"on"===n?this.proxiedOn:Object.keys(this.fallbacks).includes(n)?(...t)=>(this.targetQueue.push({method:n,args:t,resolve:()=>{}}),this.fallbacks[n](...t)):(...e)=>new Promise(t=>{this.targetQueue.push({method:n,args:e,resolve:t})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function o(t,e){var n=t;const o=s(),a=s().__VUE_DEVTOOLS_GLOBAL_HOOK__;var r=L&&n.enableEarlyProxy;if(!a||!o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&r){r=r?new D(n,a):null;const i=o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:e,proxy:r}),r&&e(r.proxiedTarget)}else a.emit(C,t,e)}function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}E.MutationType=void 0,(T=E.MutationType||(E.MutationType={})).direct="direct",T.patchObject="patch object",T.patchFunction="patch function";const A="undefined"!=typeof window,r=A,u=(()=>"object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:"object"==typeof globalThis?globalThis:{HTMLElement:null})();function l(t,e,n){const o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){c(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&e.status<=299}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}const t="object"==typeof navigator?navigator:{userAgent:""},p=(()=>/Macintosh/.test(t.userAgent)&&/AppleWebKit/.test(t.userAgent)&&!/Safari/.test(t.userAgent))(),c=A?"undefined"!=typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!p?function(t,e="download",n){const o=document.createElement("a");o.download=e,o.rel="noopener","string"==typeof t?(o.href=t,o.origin!==location.origin?a(o.href)?l(t,e,n):(o.target="_blank",i(o)):i(o)):(o.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(o.href)},4e4),setTimeout(function(){i(o)},0))}:"msSaveOrOpenBlob"in t?function(t,e="download",n){if("string"==typeof t)if(a(t))l(t,e,n);else{const o=document.createElement("a");o.href=t,o.target="_blank",setTimeout(function(){i(o)})}else navigator.msSaveOrOpenBlob(function(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,n),e)}:function(t,e,n,o){(o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading...");if("string"==typeof t)return l(t,e,n);const a="application/octet-stream"===t.type,r=/constructor/i.test(String(u.HTMLElement))||"safari"in u,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||a&&r||p)&&"undefined"!=typeof FileReader){const s=new FileReader;s.onloadend=function(){let t=s.result;if("string"!=typeof t)throw o=null,new Error("Wrong reader.result type");t=i?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location.assign(t),o=null},s.readAsDataURL(t)}else{const c=URL.createObjectURL(t);o?o.location.assign(c):location.href=c,o=null,setTimeout(function(){URL.revokeObjectURL(c)},4e4)}}:()=>{};function d(t,e){t="🍍 "+t;"function"==typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(t,e):"error"===e?console.error(t):"warn"===e?console.warn(t):console.log(t)}function y(t){return"_a"in t&&"install"in t}function g(){return!("clipboard"in navigator)&&(d("Your browser doesn't support the Clipboard API","error"),1)}function N(t){return t instanceof Error&&t.message.toLowerCase().includes("document is not focused")&&(d('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),1)}let m;async function F(t){try{m||((m=document.createElement("input")).type="file",m.accept=".json");const a=await function(){return new Promise((n,t)=>{m.onchange=async()=>{const t=m.files;if(!t)return n(null);const e=t.item(0);return e?n({text:await e.text(),file:e}):n(null)},m.oncancel=()=>n(null),m.onerror=t,m.click()})};var e=await a();if(!e)return;var{text:n,file:o}=e;t.state.value=JSON.parse(n),d(`Global state imported from "${o.name}".`)}catch(t){d("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}function v(t){return{_custom:{display:t}}}const H="🍍 Pinia (root)",_="_root";function J(t){return y(t)?{id:_,label:H}:{id:t.$id,label:t.$id}}let b=!0;const w=[],$="pinia:mutations",S="pinia",O=t=>"🍍 "+t;function G(a,r){o({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:w,app:a},t=>{"function"!=typeof t.now&&d("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),t.addTimelineLayer({id:$,label:"Pinia 🍍",color:15064968}),t.addInspector({id:S,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{!async function(t){if(!g())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),d("Global state copied to clipboard.")}catch(t){if(N(t))return;d("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}(r)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await async function(t){if(!g())try{t.state.value=JSON.parse(await navigator.clipboard.readText()),d("Global state pasted from clipboard.")}catch(t){if(N(t))return;d("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}(r),t.sendInspectorTree(S),t.sendInspectorState(S)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{!async function(t){try{c(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){d("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}(r)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await F(r),t.sendInspectorTree(S),t.sendInspectorState(S)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:t=>{const e=r._s.get(t);e?e._isOptionsAPI?(e.$reset(),d(`Store "${t}" reset.`)):d(`Cannot reset "${t}" store because it's a setup store.`,"warn"):d(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),t.on.inspectComponent((t,e)=>{var n=t.componentInstance&&t.componentInstance.proxy;n&&n._pStores&&(n=t.componentInstance.proxy._pStores,Object.values(n).forEach(o=>{t.instanceData.state.push({type:O(o.$id),key:"state",editable:!0,value:o._isOptionsAPI?{_custom:{value:I.toRaw(o.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>o.$reset()}]}}:Object.keys(o.$state).reduce((t,e)=>(t[e]=o.$state[e],t),{})}),o._getters&&o._getters.length&&t.instanceData.state.push({type:O(o.$id),key:"getters",editable:!1,value:o._getters.reduce((e,n)=>{try{e[n]=o[n]}catch(t){e[n]=t}return e},{})})}))}),t.on.getInspectorTree(e=>{if(e.app===a&&e.inspectorId===S){let t=[r];t=t.concat(Array.from(r._s.values())),e.rootNodes=(e.filter?t.filter(t=>("$id"in t?t.$id:H).toLowerCase().includes(e.filter.toLowerCase())):t).map(J)}}),t.on.getInspectorState(t=>{var e;t.app===a&&t.inspectorId===S&&(e=t.nodeId===_?r:r._s.get(t.nodeId))&&(t.state=function(e){if(y(e)){const n=Array.from(e._s.keys()),o=e._s,t={state:n.map(t=>({editable:!0,key:t,value:e.state.value[t]})),getters:n.filter(t=>o.get(t)._getters).map(t=>{const n=o.get(t);return{editable:!1,key:t,value:n._getters.reduce((t,e)=>(t[e]=n[e],t),{})}})};return t}const t={state:Object.keys(e.$state).map(t=>({editable:!0,key:t,value:e.$state[t]}))};return e._getters&&e._getters.length&&(t.getters=e._getters.map(t=>({editable:!1,key:t,value:e[t]}))),e._customProperties.size&&(t.customProperties=Array.from(e._customProperties).map(t=>({editable:!0,key:t,value:e[t]}))),t}(e))}),t.on.editInspectorState((t,e)=>{if(t.app===a&&t.inspectorId===S){const n=t.nodeId===_?r:r._s.get(t.nodeId);if(!n)return d(`store "${t.nodeId}" not found`,"error");const o=t["path"];y(n)?o.unshift("state"):(1!==o.length||!n._customProperties.has(o[0])||o[0]in n.$state)&&o.unshift("$state"),b=!1,t.set(n,o,t.state.value),b=!0}}),t.on.editComponentState(t=>{if(t.type.startsWith("🍍")){var e=t.type.replace(/^🍍\s*/,""),n=r._s.get(e);if(!n)return d(`store "${e}" not found`,"error");const o=t["path"];if("state"!==o[0])return d(`Invalid path for store "${e}":
${o}
Only state can be modified.`);o[0]="$state",b=!1,t.set(n,o,t.state.value),b=!0}})})}function B(t,s){w.includes(O(s.$id))||w.push(O(s.$id)),o({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:w,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},r=>{const i="function"==typeof r.now?r.now.bind(r):Date.now,e=(s.$onAction(({after:t,onError:e,name:n,args:o})=>{const a=Q++;r.addTimelineEvent({layerId:$,event:{time:i(),title:"🛫 "+n,subtitle:"start",data:{store:v(s.$id),action:v(n),args:o},groupId:a}}),t(t=>{k=void 0,r.addTimelineEvent({layerId:$,event:{time:i(),title:"🛬 "+n,subtitle:"end",data:{store:v(s.$id),action:v(n),args:o,result:t},groupId:a}})}),e(t=>{k=void 0,r.addTimelineEvent({layerId:$,event:{time:i(),logType:"error",title:"💥 "+n,subtitle:"end",data:{store:v(s.$id),action:v(n),args:o,error:t},groupId:a}})})},!0),s._customProperties.forEach(n=>{I.watch(()=>I.unref(s[n]),(t,e)=>{r.notifyComponentUpdate(),r.sendInspectorState(S),b&&r.addTimelineEvent({layerId:$,event:{time:i(),title:"Change",subtitle:n,data:{newValue:t,oldValue:e},groupId:k}})},{deep:!0})}),s.$subscribe(({events:t,type:e},n)=>{if(r.notifyComponentUpdate(),r.sendInspectorState(S),b){const a={time:i(),title:function(t){switch(t){case E.MutationType.direct:return"mutation";case E.MutationType.patchFunction:case E.MutationType.patchObject:return"$patch";default:return"unknown"}}(e),data:{store:v(s.$id),...(o=t,o?Array.isArray(o)?o.reduce((t,e)=>(t.keys.push(e.key),t.operations.push(e.type),t.oldValue[e.key]=e.oldValue,t.newValue[e.key]=e.newValue,t),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:v(o.type),key:v(o.key),oldValue:o.oldValue,newValue:o.newValue}:{})},groupId:k};var o;k=void 0,e===E.MutationType.patchFunction?a.subtitle="⤵️":e===E.MutationType.patchObject?a.subtitle="🧩":t&&!Array.isArray(t)&&(a.subtitle=t.type),t&&(a.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:t}}),r.addTimelineEvent({layerId:$,event:a})}},{detached:!0,flush:"sync"}),s._hotUpdate),t=(s._hotUpdate=I.markRaw(t=>{e(t),r.addTimelineEvent({layerId:$,event:{time:i(),title:"🔥 "+s.$id,subtitle:"HMR update",data:{store:v(s.$id),info:v("HMR update")}}}),r.notifyComponentUpdate(),r.sendInspectorTree(S),r.sendInspectorState(S)}),s)["$dispose"];s.$dispose=()=>{t(),r.notifyComponentUpdate(),r.sendInspectorTree(S),r.sendInspectorState(S),r.getSettings().logStoreChanges&&d(`Disposed "${s.$id}" store 🗑`)},r.notifyComponentUpdate(),r.sendInspectorTree(S),r.sendInspectorState(S),r.getSettings().logStoreChanges&&d(`"${s.$id}" store installed 🆕`)})}let Q=0,k;function W(n,t){const o=t.reduce((t,e)=>(t[e]=I.toRaw(n)[e],t),{});for(const a in o)n[a]=function(){const e=Q;var t=new Proxy(n,{get(...t){return k=e,Reflect.get(...t)},set(...t){return k=e,Reflect.set(...t)}});return o[a].apply(t,arguments)}}function z({app:t,store:e,options:n}){if(!e.$id.startsWith("__hot:")){if(n.state&&(e._isOptionsAPI=!0),"function"==typeof n.state){W(e,Object.keys(n.actions));const o=e._hotUpdate;I.toRaw(e)._hotUpdate=function(t){o.apply(this,arguments),W(e,Object.keys(t._hmrPayload.actions))}}B(t,e)}}const Y=()=>{};function q(e,n,t,o=Y){e.push(n);var a=()=>{var t=e.indexOf(n);-1<t&&(e.splice(t,1),o())};return!t&&I.getCurrentInstance()&&I.onUnmounted(a),a}function V(t,...e){t.slice().forEach(t=>{t(...e)})}function x(t,e){for(const a in e){var n,o;e.hasOwnProperty(a)&&(n=e[a],j(o=t[a])&&j(n)&&t.hasOwnProperty(a)&&!I.isRef(n)&&!I.isReactive(n)?t[a]=x(o,n):t[a]=n)}return t}const K=Symbol("pinia:skipHydration"),X=new WeakMap;const U=Object["assign"];function Z(t){return I.isRef(t)&&t.effect}function tt(o,t,a,e){const{state:r,actions:i,getters:s}=t,c=a.state.value[o];let n;return(n=P(o,function(){c||e||(I.isVue2?I.set(a.state.value,o,r?r():{}):a.state.value[o]=r?r():{});const n=e?I.toRefs(I.ref(r?r():{}).value):I.toRefs(a.state.value[o]);return U(n,i,Object.keys(s||{}).reduce((t,e)=>(e in n&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${e}" in store "${o}".`),t[e]=I.markRaw(I.computed(()=>{R(a);var t=a._s.get(o);if(!I.isVue2||t._r)return s[e].call(t,t)})),t),{}))},t,a,e,!0)).$reset=function(){const e=r?r():{};this.$patch(t=>{U(t,e)})},n}function P(i,t,e={},s,n,c){let a;const o=U({actions:{}},e);if(!s._e.active)throw new Error("Pinia destroyed");const r={deep:!0};I.isVue2||(r.onTrigger=t=>{u?f=t:0!=u||w._hotUpdating||(Array.isArray(f)?f.push(t):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))});let u,l,p=I.markRaw([]),d=I.markRaw([]),f;var h=s.state.value[i];c||h||n||(I.isVue2?I.set(s.state.value,i,{}):s.state.value[i]={});const y=I.ref({});let g;function m(t){let e;u=l=!1,f=[],e="function"==typeof t?(t(s.state.value[i]),{type:E.MutationType.patchFunction,storeId:i,events:f}):(x(s.state.value[i],t),{type:E.MutationType.patchObject,payload:t,storeId:i,events:f});const n=g=Symbol();I.nextTick().then(()=>{g===n&&(u=!0)}),l=!0,V(p,e,s.state.value[i])}function v(a,r){return function(){R(s);var t=Array.from(arguments);const e=[],n=[];V(d,{args:t,name:a,store:w,after:function(t){e.push(t)},onError:function(t){n.push(t)}});let o;try{o=r.apply(this&&this.$id===i?this:w,t)}catch(t){throw V(n,t),t}return o instanceof Promise?o.then(t=>(V(e,t),t)).catch(t=>(V(n,t),Promise.reject(t))):(V(e,o),o)}}const _=I.markRaw({actions:{},getters:{},state:[],hotState:y}),b={_p:s,$id:i,$onAction:q.bind(null,d),$patch:m,$reset:()=>{throw new Error(`🍍: Store "${i}" is built using the setup syntax and does not implement $reset().`)},$subscribe(e,n={}){var t=q(p,e,n.detached,()=>o());const o=a.run(()=>I.watch(()=>s.state.value[i],t=>{("sync"===n.flush?l:u)&&e({storeId:i,type:E.MutationType.direct,events:f},t)},U({},r,n)));return t},$dispose:function(){a.stop(),p=[],d=[],s._s.delete(i)}},w=(I.isVue2&&(b._r=!1),I.reactive(U(A?{_customProperties:I.markRaw(new Set),_hmrPayload:_}:{},b))),$=(s._s.set(i,w),s._e.run(()=>(a=I.effectScope()).run(()=>t())));for(const O in $){const k=$[O];if(I.isRef(k)&&!Z(k)||I.isReactive(k))n?I.set(y.value,O,I.toRef($,O)):c||(!h||(S=k,I.isVue2?X.has(S):j(S)&&S.hasOwnProperty(K))||(I.isRef(k)?k.value=h[O]:x(k,h[O])),I.isVue2?I.set(s.state.value[i],O,k):s.state.value[i][O]=k),_.state.push(O);else if("function"==typeof k){var S=n?k:v(O,k);I.isVue2?I.set($,O,S):$[O]=S,_.actions[O]=k,o.actions[O]=k}else if(Z(k)&&(_.getters[O]=c?e.getters[O]:k,A)){const P=$._getters||($._getters=I.markRaw([]));P.push(O)}}I.isVue2?Object.keys($).forEach(t=>{I.set(w,t,$[t])}):(U(w,$),U(I.toRaw(w),$)),Object.defineProperty(w,"$state",{get:()=>n?y.value:s.state.value[i],set:e=>{if(n)throw new Error("cannot set hotState");m(t=>{U(t,e)})}});{w._hotUpdate=I.markRaw(o=>{w._hotUpdating=!0,o._hmrPayload.state.forEach(t=>{var e,n;t in w.$state&&(e=o.$state[t],n=w.$state[t],"object"==typeof e&&j(e)&&j(n)?function t(e,n){for(const r in n){var o,a=n[r];r in e&&(j(o=e[r])&&j(a)&&!I.isRef(a)&&!I.isReactive(a)?e[r]=t(o,a):I.isVue2?I.set(e,r,a):e[r]=a)}return e}(e,n):o.$state[t]=n),I.set(w,t,I.toRef(o.$state,t))}),Object.keys(w.$state).forEach(t=>{t in o.$state||I.del(w,t)}),u=!1,l=!1,s.state.value[i]=I.toRef(o._hmrPayload,"hotState"),l=!0,I.nextTick().then(()=>{u=!0});for(const n in o._hmrPayload.actions){var t=o[n];I.set(w,n,v(n,t))}for(const a in o._hmrPayload.getters){const r=o._hmrPayload.getters[a];var e=c?I.computed(()=>(R(s),r.call(w,w))):r;I.set(w,a,e)}Object.keys(w._hmrPayload.getters).forEach(t=>{t in o._hmrPayload.getters||I.del(w,t)}),Object.keys(w._hmrPayload.actions).forEach(t=>{t in o._hmrPayload.actions||I.del(w,t)}),w._hmrPayload=o._hmrPayload,w._getters=o._getters,w._hotUpdating=!1});const T={writable:!0,configurable:!0,enumerable:!1};A&&["_p","_hmrPayload","_getters","_customProperties"].forEach(t=>{Object.defineProperty(w,t,{value:w[t],...T})})}return I.isVue2&&(w._r=!0),s._p.forEach(t=>{var e;A?(e=a.run(()=>t({store:w,app:s._a,pinia:s,options:o})),Object.keys(e||{}).forEach(t=>w._customProperties.add(t)),U(w,e)):U(w,a.run(()=>t({store:w,app:s._a,pinia:s,options:o})))}),w.$state&&"object"==typeof w.$state&&"function"==typeof w.$state.constructor&&!w.$state.constructor.toString().includes("[native code]")&&console.warn('[🍍]: The "state" must be a plain object. It cannot be\n\tstate: () => new MyClass()\n'+`Found in store "${w.$id}".`),h&&c&&e.hydrate&&e.hydrate(w.$state,h),u=!0,l=!0,w}let et="Store";function nt(o,a){return Array.isArray(a)?a.reduce((t,e)=>(t[e]=function(){return o(this.$pinia)[e]},t),{}):Object.keys(a).reduce((t,n)=>(t[n]=function(){var t=o(this.$pinia);const e=a[n];return"function"==typeof e?e.call(this,t):t[e]},t),{})}var T=nt;return E.PiniaVuePlugin=function(t){t.mixin({beforeCreate(){var t=this.$options;if(t.pinia){const e=t.pinia;if(!this._provided){const n={};Object.defineProperty(this,"_provided",{get:()=>n,set:t=>Object.assign(n,t)})}this._provided[h]=e,this.$pinia||(this.$pinia=e),e._a=this,A&&R(e),r&&G(e._a,e)}else!this.$pinia&&t.parent&&t.parent.$pinia&&(this.$pinia=t.parent.$pinia)},destroyed(){delete this._pStores}})},E.acceptHMRUpdate=function(r,i){return t=>{const e=i.data.pinia||r._pinia;if(e){i.data.pinia=e;for(const o in t){const a=t[o];if("function"==typeof(n=a)&&"string"==typeof n.$id&&e._s.has(a.$id)){n=a.$id;if(n!==r.$id)return console.warn(`The id of the store changed from "${r.$id}" to "${n}". Reloading.`),i.invalidate();n=e._s.get(n);if(!n)return void console.log("[Pinia]: skipping hmr because store doesn't exist yet");a(e,n)}}var n}}},E.createPinia=function(){const t=I.effectScope(!0);var e=t.run(()=>I.ref({}));let n=[],o=[];const a=I.markRaw({install(t){R(a),I.isVue2||((a._a=t).provide(h,a),t.config.globalProperties.$pinia=a,r&&G(t,a),o.forEach(t=>n.push(t)),o=[])},use(t){return(this._a||I.isVue2?n:o).push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r&&"undefined"!=typeof Proxy&&a.use(z),a},E.defineStore=function(t,c,e){let u,l;const p="function"==typeof c;function d(t,e){var n=I.getCurrentInstance();if((t=t||n&&I.inject(h))&&R(t),!f)throw new Error("[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?\n\tconst pinia = createPinia()\n\tapp.use(pinia)\nThis will fail in production.");(t=f)._s.has(u)||(p?P(u,c,l,t):tt(u,l,t),d._pinia=t);var o,a,r=t._s.get(u);if(e&&(o="__hot:"+u,a=p?P(o,c,l,t,!0):tt(o,U({},l),t,!0),e._hotUpdate(a),delete t.state.value[o],t._s.delete(o)),A&&n&&n.proxy&&!e){const i=n.proxy,s="_pStores"in i?i._pStores:i._pStores={};s[u]=r}return r}return"string"==typeof t?(u=t,l=p?e:c):(l=t,u=t.id),d.$id=u,d},E.getActivePinia=()=>I.getCurrentInstance()&&I.inject(h)||f,E.mapActions=function(n,o){return Array.isArray(o)?o.reduce((t,e)=>(t[e]=function(...t){return n(this.$pinia)[e](...t)},t),{}):Object.keys(o).reduce((t,e)=>(t[e]=function(...t){return n(this.$pinia)[o[e]](...t)},t),{})},E.mapGetters=T,E.mapState=nt,E.mapStores=function(...t){return Array.isArray(t[0])&&(console.warn('[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:\nReplace\n\tmapStores([useAuthStore, useCartStore])\nwith\n\tmapStores(useAuthStore, useCartStore)\nThis will fail in production if not fixed.'),t=t[0]),t.reduce((t,e)=>(t[e.$id+et]=function(){return e(this.$pinia)},t),{})},E.mapWritableState=function(n,o){return Array.isArray(o)?o.reduce((t,e)=>(t[e]={get(){return n(this.$pinia)[e]},set(t){return n(this.$pinia)[e]=t}},t),{}):Object.keys(o).reduce((t,e)=>(t[e]={get(){return n(this.$pinia)[o[e]]},set(t){return n(this.$pinia)[o[e]]=t}},t),{})},E.setActivePinia=R,E.setMapStoreSuffix=function(t){et=t},E.skipHydrate=function(t){return I.isVue2?X.set(t,1)&&t:Object.defineProperty(t,K,{})},E.storeToRefs=function(t){if(I.isVue2)return I.toRefs(t);{const n={};for(const o in t=I.toRaw(t)){var e=t[o];(I.isRef(e)||I.isReactive(e))&&(n[o]=I.toRef(t,o))}return n}},Object.defineProperty(E,"__esModule",{value:!0}),E}({},VueDemi);