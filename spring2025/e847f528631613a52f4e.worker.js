(function(e){self["webpackChunk"]=function(n,r){for(var i in r)e[i]=r[i];while(n.length)t[n.pop()]=1};var n={},t={main:1},r={};var i={"09ec":function(){return{"./quacs_rs_bg.js":{__wbindgen_string_new:function(e,t){return n["7599"].exports["j"](e,t)},__wbindgen_object_drop_ref:function(e){return n["7599"].exports["i"](e)},__wbg_new_abda76e883ba8a5f:function(){return n["7599"].exports["d"]()},__wbg_stack_658279fe44541cf6:function(e,t){return n["7599"].exports["f"](e,t)},__wbg_error_f851667af71bcfc6:function(e,t){return n["7599"].exports["b"](e,t)},__wbg_log_00fe3b9721f7fdaf:function(e){return n["7599"].exports["c"](e)},__wbg_time_85096c49b56b8172:function(e,t){return n["7599"].exports["h"](e,t)},__wbg_timeEnd_6c9b6d0ddd085ea4:function(e,t){return n["7599"].exports["g"](e,t)},__wbindgen_throw:function(e,t){return n["7599"].exports["k"](e,t)}}}}};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[];n.push(Promise.resolve().then((function(){t[e]||importScripts(o.p+""+e+".e847f528631613a52f4e.worker.js")})));var u={"chunk-cfd8699e":["09ec"]}[e]||[];return u.forEach((function(e){var t=r[e];if(t)n.push(t);else{var u,c=i[e](),s=fetch(o.p+""+{"09ec":"890e050e0d858772b1ab"}[e]+".module.wasm");if(c instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)u=Promise.all([WebAssembly.compileStreaming(s),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)u=WebAssembly.instantiateStreaming(s,c);else{var a=s.then((function(e){return e.arrayBuffer()}));u=a.then((function(e){return WebAssembly.instantiate(e,c)}))}n.push(r[e]=u.then((function(n){return o.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/spring2025/",o.w={},o(o.s="13cf")})({"13cf":function(e,n,t){"use strict";t.r(n),t.d(n,"init",(function(){return c})),t.d(n,"generateSchedulesAndConflicts",(function(){return s})),t.d(n,"setSelected",(function(){return a})),t.d(n,"isInConflict",(function(){return f})),t.d(n,"getSchedule",(function(){return l}));function r(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function u(e){try{s(r.next(e))}catch(n){o(n)}}function c(e){try{s(r["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):i(e.value).then(u,c)}s((r=r.apply(e,n||[])).next())}))}function i(e,n){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(n){return s([e,n])}}function s(o){if(t)throw new TypeError("Generator is already executing.");while(u)try{if(t=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(c){o=[6,c],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;Object.create;var o=null;function u(){return r(this,void 0,Promise,(function(){return i(this,(function(e){switch(e.label){case 0:return null!==o&&0!==o.ptr?[3,2]:[4,new Promise((function(e){return setTimeout(e,0)}))];case 1:return e.sent(),[3,0];case 2:return[2]}}))}))}function c(){return r(this,void 0,Promise,(function(){var e,n,r;return i(this,(function(i){switch(i.label){case 0:return e=Date.now(),[4,t.e("chunk-cfd8699e").then(t.bind(null,"f5ca"))];case 1:return n=i.sent(),n.init(),o=new n.WasmContext,r=Date.now(),console.log("wasm initialized, took "+(r-e)+"ms"),[2]}}))}))}function s(){return r(this,void 0,Promise,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,u()];case 1:return e.sent(),[2,o.generateSchedulesAndConflicts()]}}))}))}function a(e,n){return r(this,void 0,Promise,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,u()];case 1:return t.sent(),[2,o.setSelected(parseInt(e),n)]}}))}))}function f(e){return r(this,void 0,Promise,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,u()];case 1:return n.sent(),[2,o.isInConflict(e)]}}))}))}function l(e){return r(this,void 0,Promise,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,u()];case 1:return n.sent(),[2,o.getSchedule(e)]}}))}))}addEventListener("message",(function(e){var t,r,i=e.data,o=i.type,u=i.method,c=i.id,s=i.params;"RPC"===o&&u&&(r=(t=n[u])?Promise.resolve().then((function(){return t.apply(n,s)})):Promise.reject("No such method"),r.then((function(e){postMessage({type:"RPC",id:c,result:e})})).catch((function(e){var n={message:e};e.stack&&(n.message=e.message,n.stack=e.stack,n.name=e.name),postMessage({type:"RPC",id:c,error:n})})))})),postMessage({type:"RPC",method:"ready"})}});
//# sourceMappingURL=e847f528631613a52f4e.worker.js.map