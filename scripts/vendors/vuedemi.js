// VueDemi v0.13.8
var VueDemi=function(e,t,i){if(e.install)return e;if(!t)return console.error("[vue-demi] no Vue instance found, please be sure to import `vue` before `vue-demi`."),e;if("2.7."===t.version.slice(0,4)){for(var n in t)e[n]=t[n];e.isVue2=!0,e.isVue3=!1,e.install=function(){},e.Vue=t,e.Vue2=t,e.version=t.version,e.createApp=function(n,o){var r,u={},s={config:t.config,use:t.use.bind(t),mixin:t.mixin.bind(t),component:t.component.bind(t),provide:function(e,i){return u[e]=i,this},directive:function(e,i){return i?(t.directive(e,i),s):t.directive(e)},mount:function(e,i){return r||((r=new t(Object.assign({propsData:o},n,{provide:Object.assign(u,n.provide)}))).$mount(e,i),r)},unmount:function(){r&&(r.$destroy(),r=void 0)}};return s}}else if("2."===t.version.slice(0,2))if(i){for(var n in i)e[n]=i[n];e.isVue2=!0,e.isVue3=!1,e.install=function(){},e.Vue=t,e.Vue2=t,e.version=t.version}else console.error("[vue-demi] no VueCompositionAPI instance found, please be sure to import `@vue/composition-api` before `vue-demi`.");else if("3."===t.version.slice(0,2)){for(var n in t)e[n]=t[n];e.isVue2=!1,e.isVue3=!0,e.install=function(){},e.Vue=t,e.Vue2=void 0,e.version=t.version,e.set=function(e,i,n){return Array.isArray(e)?(e.length=Math.max(e.length,i),e.splice(i,1,n),n):e[i]=n},e.del=function(e,i){Array.isArray(e)?e.splice(i,1):delete e[i]}}else console.error("[vue-demi] Vue version "+t.version+" is unsupported.");return e}(this.VueDemi=this.VueDemi||(void 0!==VueDemi?VueDemi:{}),this.Vue||("undefined"!=typeof Vue?Vue:void 0),this.VueCompositionAPI||("undefined"!=typeof VueCompositionAPI?VueCompositionAPI:void 0));
