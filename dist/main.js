(()=>{var t={513:function(t,e,n){(function(){"use strict";var t;function e(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}}var r="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t},i=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof n.g&&n.g];for(var e=0;e<t.length;++e){var r=t[e];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function o(t,e){if(e)t:{var n=i;t=t.split(".");for(var o=0;o<t.length-1;o++){var a=t[o];if(!(a in n))break t;n=n[a]}(e=e(o=n[t=t[t.length-1]]))!=o&&null!=e&&r(n,t,{configurable:!0,writable:!0,value:e})}}function a(t){return(t={next:t})[Symbol.iterator]=function(){return this},t}function s(t){var n="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return n?n.call(t):{next:e(t)}}function u(t){if(!(t instanceof Array)){t=s(t);for(var e,n=[];!(e=t.next()).done;)n.push(e.value);t=n}return t}o("Symbol",(function(t){function e(t,e){this.g=t,r(this,"description",{configurable:!0,writable:!0,value:e})}if(t)return t;e.prototype.toString=function(){return this.g};var n="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",i=0;return function t(r){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new e(n+(r||"")+"_"+i++,r)}})),o("Symbol.iterator",(function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var n="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),o=0;o<n.length;o++){var s=i[n[o]];"function"==typeof s&&"function"!=typeof s.prototype[t]&&r(s.prototype,t,{configurable:!0,writable:!0,value:function(){return a(e(this))}})}return t}));var c,l="function"==typeof Object.create?Object.create:function(t){function e(){}return e.prototype=t,new e};if("function"==typeof Object.setPrototypeOf)c=Object.setPrototypeOf;else{var f;t:{var h={};try{h.__proto__={a:!0},f=h.a;break t}catch(t){}f=!1}c=f?function(t,e){if(t.__proto__=e,t.__proto__!==e)throw new TypeError(t+" is not extensible");return t}:null}var g=c;function d(t,e){if(t.prototype=l(e.prototype),t.prototype.constructor=t,g)g(t,e);else for(var n in e)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r)}else t[n]=e[n];t.ea=e.prototype}function p(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function v(t){if(t.l)throw new TypeError("Generator is already running");t.l=!0}function m(t,e){t.j={U:e,V:!0},t.g=t.m||t.s}function y(t,e,n){return t.g=n,{value:e}}function b(t){this.g=new p,this.h=t}function w(t,e,n,r){try{var i=e.call(t.g.i,n);if(!(i instanceof Object))throw new TypeError("Iterator result "+i+" is not an object");if(!i.done)return t.g.l=!1,i;var o=i.value}catch(e){return t.g.i=null,m(t.g,e),A(t)}return t.g.i=null,r.call(t.g,o),A(t)}function A(t){for(;t.g.g;)try{var e=t.h(t.g);if(e)return t.g.l=!1,{value:e.value,done:!1}}catch(e){t.g.h=void 0,m(t.g,e)}if(t.g.l=!1,t.g.j){if(e=t.g.j,t.g.j=null,e.V)throw e.U;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function j(t){this.next=function(e){return v(t.g),t.g.i?e=w(t,t.g.i.next,e,t.g.o):(t.g.o(e),e=A(t)),e},this.throw=function(e){return v(t.g),t.g.i?e=w(t,t.g.i.throw,e,t.g.o):(m(t.g,e),e=A(t)),e},this.return=function(e){return function(t,e){v(t.g);var n=t.g.i;return n?w(t,"return"in n?n.return:function(t){return{value:t,done:!0}},e,t.g.return):(t.g.return(e),A(t))}(t,e)},this[Symbol.iterator]=function(){return this}}function x(t,e){return e=new j(new b(e)),g&&t.prototype&&g(e,t.prototype),e}p.prototype.o=function(t){this.h=t},p.prototype.return=function(t){this.j={return:t},this.g=this.s};var O="function"==typeof Object.assign?Object.assign:function(t,e){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t};o("Object.assign",(function(t){return t||O})),o("Promise",(function(t){function e(t){this.h=0,this.i=void 0,this.g=[],this.o=!1;var e=this.j();try{t(e.resolve,e.reject)}catch(t){e.reject(t)}}function n(){this.g=null}function r(t){return t instanceof e?t:new e((function(e){e(t)}))}if(t)return t;n.prototype.h=function(t){if(null==this.g){this.g=[];var e=this;this.i((function(){e.l()}))}this.g.push(t)};var o=i.setTimeout;n.prototype.i=function(t){o(t,0)},n.prototype.l=function(){for(;this.g&&this.g.length;){var t=this.g;this.g=[];for(var e=0;e<t.length;++e){var n=t[e];t[e]=null;try{n()}catch(t){this.j(t)}}}this.g=null},n.prototype.j=function(t){this.i((function(){throw t}))},e.prototype.j=function(){function t(t){return function(r){n||(n=!0,t.call(e,r))}}var e=this,n=!1;return{resolve:t(this.C),reject:t(this.l)}},e.prototype.C=function(t){if(t===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(t instanceof e)this.F(t);else{t:switch(typeof t){case"object":var n=null!=t;break t;case"function":n=!0;break t;default:n=!1}n?this.u(t):this.m(t)}},e.prototype.u=function(t){var e=void 0;try{e=t.then}catch(t){return void this.l(t)}"function"==typeof e?this.G(e,t):this.m(t)},e.prototype.l=function(t){this.s(2,t)},e.prototype.m=function(t){this.s(1,t)},e.prototype.s=function(t,e){if(0!=this.h)throw Error("Cannot settle("+t+", "+e+"): Promise already settled in state"+this.h);this.h=t,this.i=e,2===this.h&&this.D(),this.A()},e.prototype.D=function(){var t=this;o((function(){if(t.B()){var e=i.console;void 0!==e&&e.error(t.i)}}),1)},e.prototype.B=function(){if(this.o)return!1;var t=i.CustomEvent,e=i.Event,n=i.dispatchEvent;return void 0===n||("function"==typeof t?t=new t("unhandledrejection",{cancelable:!0}):"function"==typeof e?t=new e("unhandledrejection",{cancelable:!0}):(t=i.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,t),t.promise=this,t.reason=this.i,n(t))},e.prototype.A=function(){if(null!=this.g){for(var t=0;t<this.g.length;++t)a.h(this.g[t]);this.g=null}};var a=new n;return e.prototype.F=function(t){var e=this.j();t.J(e.resolve,e.reject)},e.prototype.G=function(t,e){var n=this.j();try{t.call(e,n.resolve,n.reject)}catch(t){n.reject(t)}},e.prototype.then=function(t,n){function r(t,e){return"function"==typeof t?function(e){try{i(t(e))}catch(t){o(t)}}:e}var i,o,a=new e((function(t,e){i=t,o=e}));return this.J(r(t,i),r(n,o)),a},e.prototype.catch=function(t){return this.then(void 0,t)},e.prototype.J=function(t,e){function n(){switch(r.h){case 1:t(r.i);break;case 2:e(r.i);break;default:throw Error("Unexpected state: "+r.h)}}var r=this;null==this.g?a.h(n):this.g.push(n),this.o=!0},e.resolve=r,e.reject=function(t){return new e((function(e,n){n(t)}))},e.race=function(t){return new e((function(e,n){for(var i=s(t),o=i.next();!o.done;o=i.next())r(o.value).J(e,n)}))},e.all=function(t){var n=s(t),i=n.next();return i.done?r([]):new e((function(t,e){function o(e){return function(n){a[e]=n,0==--s&&t(a)}}var a=[],s=0;do{a.push(void 0),s++,r(i.value).J(o(a.length-1),e),i=n.next()}while(!i.done)}))},e})),o("Object.is",(function(t){return t||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}})),o("Array.prototype.includes",(function(t){return t||function(t,e){var n=this;n instanceof String&&(n=String(n));var r=n.length;for(0>(e=e||0)&&(e=Math.max(e+r,0));e<r;e++){var i=n[e];if(i===t||Object.is(i,t))return!0}return!1}})),o("String.prototype.includes",(function(t){return t||function(t,e){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(t instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(t,e||0)}})),o("Array.prototype.keys",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(t){return t}))}}));var E=this||self;function _(t,e){t=t.split(".");var n,r=E;t[0]in r||void 0===r.execScript||r.execScript("var "+t[0]);for(;t.length&&(n=t.shift());)t.length||void 0===e?r=r[n]&&r[n]!==Object.prototype[n]?r[n]:r[n]={}:r[n]=e}function k(t,e){return e=String.fromCharCode.apply(null,e),null==t?e:t+e}var S,F,R="undefined"!=typeof TextDecoder,T="undefined"!=typeof TextEncoder;function B(t){if(T)t=(F||(F=new TextEncoder)).encode(t);else{var e=void 0;e=void 0!==e&&e;for(var n=0,r=new Uint8Array(3*t.length),i=0;i<t.length;i++){var o=t.charCodeAt(i);if(128>o)r[n++]=o;else{if(2048>o)r[n++]=o>>6|192;else{if(55296<=o&&57343>=o){if(56319>=o&&i<t.length){var a=t.charCodeAt(++i);if(56320<=a&&57343>=a){o=1024*(o-55296)+a-56320+65536,r[n++]=o>>18|240,r[n++]=o>>12&63|128,r[n++]=o>>6&63|128,r[n++]=63&o|128;continue}i--}if(e)throw Error("Found an unpaired surrogate");o=65533}r[n++]=o>>12|224,r[n++]=o>>6&63|128}r[n++]=63&o|128}}t=r.subarray(0,n)}return t}var C={},L=null;function P(t,e){void 0===e&&(e=0),U(),e=C[e];for(var n=Array(Math.floor(t.length/3)),r=e[64]||"",i=0,o=0;i<t.length-2;i+=3){var a=t[i],s=t[i+1],u=t[i+2],c=e[a>>2];a=e[(3&a)<<4|s>>4],s=e[(15&s)<<2|u>>6],u=e[63&u],n[o++]=c+a+s+u}switch(c=0,u=r,t.length-i){case 2:u=e[(15&(c=t[i+1]))<<2]||r;case 1:t=t[i],n[o]=e[t>>2]+e[(3&t)<<4|c>>4]+u+r}return n.join("")}function U(){if(!L){L={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var r=t.concat(e[n].split(""));C[n]=r;for(var i=0;i<r.length;i++){var o=r[i];void 0===L[o]&&(L[o]=i)}}}}var M,I="function"==typeof Uint8Array.prototype.slice;function N(t,e,n){return e===n?M||(M=new Uint8Array(0)):I?t.slice(e,n):new Uint8Array(t.subarray(e,n))}var D=0;function G(t,e){e=void 0!==(e=void 0===e?{}:e).v&&e.v,this.h=null,this.g=this.i=this.j=0,this.l=!1,this.v=e,t&&W(this,t)}function W(t,e){e=e.constructor===Uint8Array?e:e.constructor===ArrayBuffer||e.constructor===Array?new Uint8Array(e):e.constructor===String?function(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):-1!="=.".indexOf(t[e-1])&&(n=-1!="=.".indexOf(t[e-2])?n-2:n-1);var r=new Uint8Array(n),i=0;return function(t,e){function n(e){for(;r<t.length;){var n=t.charAt(r++),i=L[n];if(null!=i)return i;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}U();for(var r=0;;){var i=n(-1),o=n(0),a=n(64),s=n(64);if(64===s&&-1===i)break;e(i<<2|o>>4),64!=a&&(e(o<<4&240|a>>2),64!=s&&e(a<<6&192|s))}}(t,(function(t){r[i++]=t})),r.subarray(0,i)}(e):e instanceof Uint8Array?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(0),t.h=e,t.j=0,t.i=t.h.length,t.g=t.j}function V(t){var e=t.h,n=e[t.g],r=127&n;return 128>n?(t.g+=1,r):(r|=(127&(n=e[t.g+1]))<<7,128>n?(t.g+=2,r):(r|=(127&(n=e[t.g+2]))<<14,128>n?(t.g+=3,r):(r|=(127&(n=e[t.g+3]))<<21,128>n?(t.g+=4,r):(r|=(15&(n=e[t.g+4]))<<28,128>n?(t.g+=5,r>>>0):(t.g+=5,128<=e[t.g++]&&128<=e[t.g++]&&128<=e[t.g++]&&128<=e[t.g++]&&t.g++,r)))))}function H(t){var e=t.h[t.g],n=t.h[t.g+1],r=t.h[t.g+2],i=t.h[t.g+3];return t.g+=4,t=2*((n=(e<<0|n<<8|r<<16|i<<24)>>>0)>>31)+1,e=n>>>23&255,n&=8388607,255==e?n?NaN:1/0*t:0==e?t*Math.pow(2,-149)*n:t*Math.pow(2,e-150)*(n+Math.pow(2,23))}G.prototype.reset=function(){this.g=this.j};var z=[];function X(){this.g=new Uint8Array(64),this.h=0}function Y(t,e){for(;127<e;)t.push(127&e|128),e>>>=7;t.push(e)}function J(t){var e={},n=void 0!==e.N&&e.N;this.o={v:void 0!==e.v&&e.v},this.N=n,e=this.o,z.length?(n=z.pop(),e&&(n.v=e.v),t&&W(n,t),t=n):t=new G(t,e),this.g=t,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}function K(t){var e=t.g;if((e=e.g==e.i)||(e=t.j)||(e=(e=t.g).l||0>e.g||e.g>e.i),e)return!1;t.m=t.g.g;var n=7&(e=V(t.g));return 0!=n&&5!=n&&1!=n&&2!=n&&3!=n&&4!=n?(t.j=!0,!1):(t.i=e,t.l=e>>>3,t.h=n,!0)}function $(t){switch(t.h){case 0:if(0!=t.h)$(t);else{for(t=t.g;128&t.h[t.g];)t.g++;t.g++}break;case 1:1!=t.h?$(t):(t=t.g).g+=8;break;case 2:if(2!=t.h)$(t);else{var e=V(t.g);(t=t.g).g+=e}break;case 5:5!=t.h?$(t):(t=t.g).g+=4;break;case 3:for(e=t.l;;){if(!K(t)){t.j=!0;break}if(4==t.h){t.l!=e&&(t.j=!0);break}$(t)}break;default:t.j=!0}}function Z(t,e,n){var r=t.g.i,i=V(t.g);return i=t.g.g+i,t.g.i=i,n(e,t),t.g.g=i,t.g.i=r,e}function q(t){var e,n=V(t.g),r=(t=t.g).g;if(t.g+=n,t=t.h,R)(e=S)||(e=S=new TextDecoder("utf-8",{fatal:!1})),e=e.decode(t.subarray(r,r+n));else{n=r+n;for(var i,o,a,s=[],u=null;r<n;)128>(i=t[r++])?s.push(i):224>i?r>=n?s.push(65533):(o=t[r++],194>i||128!=(192&o)?(r--,s.push(65533)):s.push((31&i)<<6|63&o)):240>i?r>=n-1?s.push(65533):128!=(192&(o=t[r++]))||224===i&&160>o||237===i&&160<=o||128!=(192&(e=t[r++]))?(r--,s.push(65533)):s.push((15&i)<<12|(63&o)<<6|63&e):244>=i?r>=n-2?s.push(65533):128!=(192&(o=t[r++]))||0!=o-144+(i<<28)>>30||128!=(192&(e=t[r++]))||128!=(192&(a=t[r++]))?(r--,s.push(65533)):(i=(7&i)<<18|(63&o)<<12|(63&e)<<6|63&a,i-=65536,s.push(55296+(i>>10&1023),56320+(1023&i))):s.push(65533),8192<=s.length&&(u=k(u,s),s.length=0);e=k(u,s)}return e}function Q(){this.h=[],this.i=0,this.g=new X}function tt(t,e){0!==e.length&&(t.h.push(e),t.i+=e.length)}function et(t){var e=t.i+t.g.length();if(0===e)return new Uint8Array(0);e=new Uint8Array(e);for(var n=t.h,r=n.length,i=0,o=0;o<r;o++){var a=n[o];0!==a.length&&(e.set(a,i),i+=a.length)}return 0!==(r=(n=t.g).h)&&(e.set(n.g.subarray(0,r),i),n.h=0),t.h=[e],e}function nt(t,e,n){if(null!=n){Y(t.g,8*e+5),t=t.g;var r=n;0===(r=(n=0>r?1:0)?-r:r)?D=0<1/r?0:2147483648:isNaN(r)?D=2147483647:34028234663852886e22<r?D=(n<<31|2139095040)>>>0:11754943508222875e-54>r?(r=Math.round(r/Math.pow(2,-149)),D=(n<<31|r)>>>0):(e=Math.floor(Math.log(r)/Math.LN2),r*=Math.pow(2,-e),r=8388607&Math.round(8388608*r),D=(n<<31|e+127<<23|r)>>>0),n=D,t.push(n>>>0&255),t.push(n>>>8&255),t.push(n>>>16&255),t.push(n>>>24&255)}}X.prototype.push=function(t){if(!(this.h+1<this.g.length)){var e=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(e)}this.g[this.h++]=t},X.prototype.length=function(){return this.h},X.prototype.end=function(){var t=this.g,e=this.h;return this.h=0,N(t,0,e)},J.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};var rt="function"==typeof Uint8Array;function it(t,e,n){if(null!=t)return"object"==typeof t?rt&&t instanceof Uint8Array?n(t):ot(t,e,n):e(t)}function ot(t,e,n){if(Array.isArray(t)){for(var r=Array(t.length),i=0;i<t.length;i++)r[i]=it(t[i],e,n);return Array.isArray(t)&&t.W&&ct(r),r}for(i in r={},t)r[i]=it(t[i],e,n);return r}function at(t){return"number"==typeof t?isFinite(t)?t:String(t):t}var st,ut={W:{value:!0,configurable:!0}};function ct(t){return Array.isArray(t)&&!Object.isFrozen(t)&&Object.defineProperties(t,ut),t}function lt(t,e,n){var r=st;if(st=null,t||(t=r),r=this.constructor.ca,t||(t=r?[r]:[]),this.j=r?0:-1,this.i=null,this.g=t,t=(r=this.g.length)-1,r&&null!==(r=this.g[t])&&"object"==typeof r&&r.constructor===Object?(this.l=t-this.j,this.h=r):void 0!==e&&-1<e?(this.l=Math.max(e,t+1-this.j),this.h=null):this.l=Number.MAX_VALUE,n)for(e=0;e<n.length;e++)(t=n[e])<this.l?(t+=this.j,(r=this.g[t])?ct(r):this.g[t]=ft):(ht(this),(r=this.h[t])?ct(r):this.h[t]=ft)}var ft=Object.freeze(ct([]));function ht(t){var e=t.l+t.j;t.g[e]||(t.h=t.g[e]={})}function gt(t,e,n){return-1===e?null:void 0!==n&&n||e>=t.l?t.h?t.h[e]:void 0:t.g[e+t.j]}function dt(t){var e=void 0!==e&&e,n=gt(t,1,e);return null==n&&(n=ft),n===ft&&vt(t,1,n=ct([]),e),n}function pt(t,e,n){return null==(t=null==(t=gt(t,e))?t:+t)?void 0===n?0:n:t}function vt(t,e,n,r){void 0!==r&&r||e>=t.l?(ht(t),t.h[e]=n):t.g[e+t.j]=n}function mt(t,e){t.i||(t.i={});var n=t.i[1];if(!n){var r=dt(t);n=[];for(var i=0;i<r.length;i++)n[i]=new e(r[i]);t.i[1]=n}return n}function yt(t,e,n,r){var i=mt(t,n);e=e||new n,t=dt(t),null!=r?(i.splice(r,0,e),t.splice(r,0,bt(e,!1))):(i.push(e),t.push(bt(e,!1)))}function bt(t,e){if(t.i)for(var n in t.i){var r=t.i[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)r[i]&&bt(r[i],e);else r&&bt(r,e)}return t.g}function wt(t,e){return null==(t=gt(t,e))?0:t}function At(t,e){return null==(t=gt(t,e))?"":t}function jt(t,e){if(t=t.m){tt(e,e.g.end());for(var n=0;n<t.length;n++)tt(e,t[n])}}function xt(t,e){if(4==e.h)return!1;var n=e.m;return $(e),e.N||(e=N(e.g.h,n,e.g.g),(n=t.m)?n.push(e):t.m=[e]),!0}function Ot(t,e){var n=void 0;return new(n||(n=Promise))((function(r,i){function o(t){try{s(e.next(t))}catch(t){i(t)}}function a(t){try{s(e.throw(t))}catch(t){i(t)}}function s(t){t.done?r(t.value):new n((function(e){e(t.value)})).then(o,a)}s((e=e.apply(t,void 0)).next())}))}function Et(t){lt.call(this,t)}function _t(t,e){for(;K(e);)switch(e.i){case 8:var n=V(e.g);vt(t,1,n);break;case 21:vt(t,2,n=H(e.g));break;case 26:vt(t,3,n=q(e));break;case 34:vt(t,4,n=q(e));break;default:if(!xt(t,e))return t}return t}function kt(t){lt.call(this,t,-1,St)}lt.prototype.toJSON=function(){return ot(bt(this,!1),at,P)},lt.prototype.toString=function(){return bt(this,!1).toString()},d(Et,lt),d(kt,lt),kt.prototype.addClassification=function(t,e){yt(this,t,Et,e)};var St=[1];function Ft(t){lt.call(this,t)}function Rt(t,e){for(;K(e);)switch(e.i){case 13:var n=H(e.g);vt(t,1,n);break;case 21:vt(t,2,n=H(e.g));break;case 29:vt(t,3,n=H(e.g));break;case 37:vt(t,4,n=H(e.g));break;case 45:vt(t,5,n=H(e.g));break;default:if(!xt(t,e))return t}return t}function Tt(t){lt.call(this,t,-1,Bt)}d(Ft,lt),d(Tt,lt);var Bt=[1];function Ct(t){lt.call(this,t)}function Lt(t,e,n){if(n=t.createShader(0===n?t.VERTEX_SHADER:t.FRAGMENT_SHADER),t.shaderSource(n,e),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+t.getShaderInfoLog(n));return n}function Pt(t){return mt(t,Et).map((function(t){return{index:wt(t,1),Y:pt(t,2),label:null!=gt(t,3)?At(t,3):void 0,displayName:null!=gt(t,4)?At(t,4):void 0}}))}function Ut(t){return{x:pt(t,1),y:pt(t,2),z:pt(t,3),visibility:null!=gt(t,4)?pt(t,4):void 0}}function Mt(t,e){this.h=t,this.g=e,this.l=0}function It(t,e,n){return function(t,e){var n=t.g;if(void 0===t.m){var r=Lt(n,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),i=Lt(n,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),o=n.createProgram();if(n.attachShader(o,r),n.attachShader(o,i),n.linkProgram(o),!n.getProgramParameter(o,n.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+n.getProgramInfoLog(o));r=t.m=o,n.useProgram(r),i=n.getUniformLocation(r,"sampler0"),t.j={I:n.getAttribLocation(r,"aVertex"),H:n.getAttribLocation(r,"aTex"),da:i},t.s=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,t.s),n.enableVertexAttribArray(t.j.I),n.vertexAttribPointer(t.j.I,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),t.o=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,t.o),n.enableVertexAttribArray(t.j.H),n.vertexAttribPointer(t.j.H,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.uniform1i(i,0)}r=t.j,n.useProgram(t.m),n.canvas.width=e.width,n.canvas.height=e.height,n.viewport(0,0,e.width,e.height),n.activeTexture(n.TEXTURE0),t.h.bindTexture2d(e.glName),n.enableVertexAttribArray(r.I),n.bindBuffer(n.ARRAY_BUFFER,t.s),n.vertexAttribPointer(r.I,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(r.H),n.bindBuffer(n.ARRAY_BUFFER,t.o),n.vertexAttribPointer(r.H,2,n.FLOAT,!1,0,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER?n.DRAW_FRAMEBUFFER:n.FRAMEBUFFER,null),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.colorMask(!0,!0,!0,!0),n.drawArrays(n.TRIANGLE_FAN,0,4),n.disableVertexAttribArray(r.I),n.disableVertexAttribArray(r.H),n.bindBuffer(n.ARRAY_BUFFER,null),t.h.bindTexture2d(0)}(t,e),"function"==typeof t.g.canvas.transferToImageBitmap?Promise.resolve(t.g.canvas.transferToImageBitmap()):n?Promise.resolve(t.g.canvas):"function"==typeof createImageBitmap?createImageBitmap(t.g.canvas):(void 0===t.i&&(t.i=document.createElement("canvas")),new Promise((function(e){t.i.height=t.g.canvas.height,t.i.width=t.g.canvas.width,t.i.getContext("2d",{}).drawImage(t.g.canvas,0,0,t.g.canvas.width,t.g.canvas.height),e(t.i)})))}function Nt(t){this.g=t}d(Ct,lt);var Dt=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Gt(t,e){return e+t}function Wt(t,e){window[t]=e}function Vt(t){if(this.g=t,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=t&&t.locateFile||Gt,"object"==typeof window)var e=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if("undefined"==typeof location)throw Error("solutions can only be loaded on a web page or in a web worker");e=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.S=e,t.options)for(var n=(e=s(Object.keys(t.options))).next();!n.done;n=e.next()){n=n.value;var r=t.options[n].default;void 0!==r&&(this.j[n]="function"==typeof r?r():r)}}function Ht(t,e){return Ot(t,(function t(){var n,r,i=this;return x(t,(function(t){return e in i.F?t.return(i.F[e]):(n=i.locateFile(e,""),r=fetch(n).then((function(t){return t.arrayBuffer()})),i.F[e]=r,t.return(r))}))}))}function zt(t,e){for(var n=e.name||"$",r=[].concat(u(e.wants)),i=new t.h.StringList,o=s(e.wants),a=o.next();!a.done;a=o.next())i.push_back(a.value);o=t.h.PacketListener.implement({onResults:function(i){for(var o={},a=0;a<e.wants.length;++a)o[r[a]]=i.get(a);var u=t.listeners[n];u&&(t.C=function(t,e,n){return Ot(t,(function t(){var r,i,o,a,u,c,l,f,h,g,d,p,v,m,b=this;return x(t,(function(t){switch(t.g){case 1:if(!n)return t.return(e);for(r={},i=0,o=s(Object.keys(n)),a=o.next();!a.done;a=o.next())u=a.value,"string"!=typeof(c=n[u])&&"texture"===c.type&&void 0!==e[c.stream]&&++i;1<i&&(b.G=!1),l=s(Object.keys(n)),a=l.next();case 2:if(a.done){t.g=4;break}if(f=a.value,"string"==typeof(h=n[f]))return v=r,m=f,y(t,function(t,e,n){return Ot(t,(function t(){var r,i=this;return x(t,(function(t){return"number"==typeof n||n instanceof Uint8Array||n instanceof i.h.Uint8BlobList?t.return(n):n instanceof i.h.Texture2dDataOut?((r=i.s[e])||(r=new Mt(i.h,i.D),i.s[e]=r),t.return(It(r,n,i.G))):t.return(void 0)}))}))}(b,f,e[h]),14);if(g=e[h.stream],"detection_list"===h.type){if(g){for(var w=g.getRectList(),A=g.getLandmarksList(),j=g.getClassificationsList(),O=[],E=0;E<w.size();++E){var _=w.get(E);t:{var k=new Ct;for(_=new J(_);K(_);)switch(_.i){case 13:var S=H(_.g);vt(k,1,S);break;case 21:vt(k,2,S=H(_.g));break;case 29:vt(k,3,S=H(_.g));break;case 37:vt(k,4,S=H(_.g));break;case 45:vt(k,5,S=H(_.g));break;case 48:for(var F=_.g,R=128,T=0,B=S=0;4>B&&128<=R;B++)T|=(127&(R=F.h[F.g++]))<<7*B;if(128<=R&&(T|=(127&(R=F.h[F.g++]))<<28,S|=(127&R)>>4),128<=R)for(B=0;5>B&&128<=R;B++)S|=(127&(R=F.h[F.g++]))<<7*B+3;128>R?(F=T>>>0,(S=2147483648&(R=S>>>0))&&(R=~R>>>0,0==(F=1+~F>>>0)&&(R=R+1>>>0)),F=4294967296*R+(F>>>0),S=S?-F:F):(F.l=!0,S=void 0),vt(k,6,S);break;default:if(!xt(k,_))break t}}k={Z:pt(k,1),$:pt(k,2),height:pt(k,3),width:pt(k,4),rotation:pt(k,5,0),X:wt(k,6)},S=A.get(E);t:for(_=new Tt,S=new J(S);K(S);)if(10===S.i)yt(_,F=Z(S,new Ft,Rt),Ft,void 0);else if(!xt(_,S))break t;_=mt(_,Ft).map(Ut),F=j.get(E);t:for(S=new kt,F=new J(F);K(F);)if(10===F.i)S.addClassification(Z(F,new Et,_t));else if(!xt(S,F))break t;k={T:k,O:_,M:Pt(S)},O.push(k)}w=O}else w=[];r[f]=w,t.g=7;break}if("proto_list"===h.type){if(g){for(w=Array(g.size()),A=0;A<g.size();A++)w[A]=g.get(A);g.delete()}else w=[];r[f]=w,t.g=7;break}if(void 0===g){t.g=3;break}if("float_list"===h.type){r[f]=g,t.g=7;break}if("proto"===h.type){r[f]=g,t.g=7;break}if("texture"!==h.type)throw Error("Unknown output config type: '"+h.type+"'");return(d=b.s[f])||(d=new Mt(b.h,b.D),b.s[f]=d),y(t,It(d,g,b.G),13);case 13:p=t.h,r[f]=p;case 7:h.transform&&r[f]&&(r[f]=h.transform(r[f])),t.g=3;break;case 14:v[m]=t.h;case 3:a=l.next(),t.g=2;break;case 4:return t.return(r)}}))}))}(t,o,e.outs).then((function(n){n=u(n);for(var i=0;i<e.wants.length;++i){var a=o[r[i]];"object"==typeof a&&a.hasOwnProperty&&a.hasOwnProperty("delete")&&a.delete()}n&&(t.C=n)})))}}),t.i.attachMultiListener(i,o),i.delete()}function Xt(t){return void 0===t&&(t=0),1===t?"selfie_segmentation_landscape.tflite":"selfie_segmentation.tflite"}function Yt(t){var e=this;t=t||{},this.g=new Vt({locateFile:t.locateFile,files:function(t){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:Xt(t.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(t){return Ot(e,(function e(){var n,r,i,o=this;return x(e,(function(e){return 1==e.g?(n=Xt(t),r="third_party/mediapipe/modules/selfie_segmentation/"+n,y(e,Ht(o.g,n),2)):(i=e.h,o.g.overrideFile(r,i),e.return(!0))}))}))}}}})}(t=Vt.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},t.reset=function(){return Ot(this,(function t(){var e=this;return x(t,(function(t){e.i&&(e.i.reset(),e.m={},e.s={}),t.g=0}))}))},t.setOptions=function(t,e){var n=this;if(e=e||this.g.options){for(var r=[],i=[],o={},a=s(Object.keys(t)),u=a.next();!u.done;o={K:o.K,L:o.L},u=a.next()){var c=u.value;c in this.j&&this.j[c]===t[c]||(this.j[c]=t[c],void 0!==(u=e[c])&&(u.onChange&&(o.K=u.onChange,o.L=t[c],r.push(function(t){return function(){return Ot(n,(function e(){var n=this;return x(e,(function(e){if(1==e.g)return y(e,t.K(t.L),2);!0===e.h&&(n.o=!0),e.g=0}))}))}}(o))),u.graphOptionXref&&(c={valueNumber:1===u.type?t[c]:0,valueBoolean:0===u.type&&t[c],valueString:2===u.type?t[c]:""},u=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),u.graphOptionXref),c),i.push(u))))}0===r.length&&0===i.length||(this.o=!0,this.A=(void 0===this.A?[]:this.A).concat(i),this.u=(void 0===this.u?[]:this.u).concat(r))}},t.initialize=function(){return Ot(this,(function t(){var e=this;return x(t,(function(t){return 1==t.g?y(t,Ot(e,(function t(){var e,n,r,i,o,a,s,c,l,f,h,g=this;return x(t,(function(t){switch(t.g){case 1:return e=g,g.R?(n=function(t,e){return void 0===t.g.files?[]:"function"==typeof t.g.files?t.g.files(e):t.g.files}(g,g.j),y(t,function(){return Ot(this,(function t(){return x(t,(function(t){switch(t.g){case 1:return t.m=2,y(t,WebAssembly.instantiate(Dt),4);case 4:t.g=3,t.m=0;break;case 2:return t.m=0,t.j=null,t.return(!1);case 3:return t.return(!0)}}))}))}(),2)):t.return();case 2:if(r=t.h,"object"==typeof window)return Wt("createMediapipeSolutionsWasm",{locateFile:g.locateFile}),Wt("createMediapipeSolutionsPackedAssets",{locateFile:g.locateFile}),a=n.filter((function(t){return void 0!==t.data})),s=n.filter((function(t){return void 0===t.data})),c=Promise.all(a.map((function(t){var n=Ht(e,t.url);if(void 0!==t.path){var r=t.path;n=n.then((function(t){return e.overrideFile(r,t),Promise.resolve(t)}))}return n}))),l=Promise.all(s.map((function(t){return void 0===t.simd||t.simd&&r||!t.simd&&!r?function(t){var e=document.createElement("script");return e.setAttribute("src",t),e.setAttribute("crossorigin","anonymous"),new Promise((function(t){e.addEventListener("load",(function(){t()}),!1),e.addEventListener("error",(function(){t()}),!1),document.body.appendChild(e)}))}(e.locateFile(t.url,e.S)):Promise.resolve()}))).then((function(){return Ot(e,(function t(){var e,n,r=this;return x(t,(function(t){if(1==t.g)return e=window.createMediapipeSolutionsWasm,n=window.createMediapipeSolutionsPackedAssets,y(t,e(n),2);r.h=t.h,t.g=0}))}))})),f=Ot(e,(function t(){var e=this;return x(t,(function(t){return e.g.graph&&e.g.graph.url?t=y(t,Ht(e,e.g.graph.url),0):(t.g=0,t=void 0),t}))})),y(t,Promise.all([l,c,f]),7);if("function"!=typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");return i=n.filter((function(t){return void 0===t.simd||t.simd&&r||!t.simd&&!r})).map((function(t){return e.locateFile(t.url,e.S)})),importScripts.apply(null,u(i)),y(t,createMediapipeSolutionsWasm(Module),6);case 6:g.h=t.h,g.l=new OffscreenCanvas(1,1),g.h.canvas=g.l,o=g.h.GL.createContext(g.l,{antialias:!1,alpha:!1,ba:"undefined"!=typeof WebGL2RenderingContext?2:1}),g.h.GL.makeContextCurrent(o),t.g=4;break;case 7:if(g.l=document.createElement("canvas"),!(h=g.l.getContext("webgl2",{}))&&!(h=g.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),t.return();g.D=h,g.h.canvas=g.l,g.h.createContext(g.l,!0,!0,{});case 4:g.i=new g.h.SolutionWasm,g.R=!1,t.g=0}}))})),2):3!=t.g?y(t,Ot(e,(function t(){var e,n,r,i,o,a,u,c,l=this;return x(t,(function(t){if(1==t.g)return l.g.graph&&l.g.graph.url&&l.P===l.g.graph.url?t.return():(l.o=!0,l.g.graph&&l.g.graph.url?(l.P=l.g.graph.url,y(t,Ht(l,l.g.graph.url),3)):void(t.g=2));for(2!=t.g&&(e=t.h,l.i.loadGraph(e)),n=s(Object.keys(l.B)),r=n.next();!r.done;r=n.next())i=r.value,l.i.overrideFile(i,l.B[i]);if(l.B={},l.g.listeners)for(o=s(l.g.listeners),a=o.next();!a.done;a=o.next())u=a.value,zt(l,u);c=l.j,l.j={},l.setOptions(c),t.g=0}))})),3):y(t,function(t){return Ot(t,(function t(){var e,n,r,i,o,a,u=this;return x(t,(function(t){switch(t.g){case 1:if(!u.o)return t.return();if(!u.u){t.g=2;break}e=s(u.u),n=e.next();case 3:if(n.done){t.g=5;break}return y(t,(0,n.value)(),4);case 4:n=e.next(),t.g=3;break;case 5:u.u=void 0;case 2:if(u.A){for(r=new u.h.GraphOptionChangeRequestList,i=s(u.A),o=i.next();!o.done;o=i.next())a=o.value,r.push_back(a);u.i.changeOptions(r),r.delete(),u.A=void 0}u.o=!1,t.g=0}}))}))}(e),0)}))}))},t.overrideFile=function(t,e){this.i?this.i.overrideFile(t,e):this.B[t]=e},t.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},t.send=function(t,e){return Ot(this,(function n(){var r,i,o,a,u,c,l,f,h,g=this;return x(n,(function(n){switch(n.g){case 1:return g.g.inputs?(r=1e3*(null==e?performance.now():e),y(n,g.C,2)):n.return();case 2:return y(n,g.initialize(),3);case 3:for(i=new g.h.PacketDataList,o=s(Object.keys(t)),a=o.next();!a.done;a=o.next())if(u=a.value,c=g.g.inputs[u]){t:{var d=g,p=t[u];switch(c.type){case"video":var v=d.m[c.stream];if(v||(v=new Mt(d.h,d.D),d.m[c.stream]=v),0===(d=v).l&&(d.l=d.h.createTexture()),"undefined"!=typeof HTMLVideoElement&&p instanceof HTMLVideoElement){var m=p.videoWidth;v=p.videoHeight}else"undefined"!=typeof HTMLImageElement&&p instanceof HTMLImageElement?(m=p.naturalWidth,v=p.naturalHeight):(m=p.width,v=p.height);v={glName:d.l,width:m,height:v},(m=d.g).canvas.width=v.width,m.canvas.height=v.height,m.activeTexture(m.TEXTURE0),d.h.bindTexture2d(d.l),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,m.RGBA,m.UNSIGNED_BYTE,p),d.h.bindTexture2d(0),d=v;break t;case"detections":for((v=d.m[c.stream])||(v=new Nt(d.h),d.m[c.stream]=v),(d=v).data||(d.data=new d.g.DetectionListData),d.data.reset(p.length),v=0;v<p.length;++v){m=p[v];var b=d.data,w=b.setBoundingBox,A=v,j=m.T,x=new Ct;vt(x,1,j.Z),vt(x,2,j.$),vt(x,3,j.height),vt(x,4,j.width),vt(x,5,j.rotation),vt(x,6,j.X);var O=j=new Q;nt(O,1,gt(x,1)),nt(O,2,gt(x,2)),nt(O,3,gt(x,3)),nt(O,4,gt(x,4)),nt(O,5,gt(x,5));var E=gt(x,6);if(null!=E&&null!=E){Y(O.g,48);var _=O.g,k=E;E=0>k;var S=(k=Math.abs(k))>>>0;for(k=Math.floor((k-S)/4294967296),k>>>=0,E&&(k=~k>>>0,4294967295<(S=1+(~S>>>0))&&(S=0,4294967295<++k&&(k=0))),E=D=S,S=k;0<S||127<E;)_.push(127&E|128),E=(E>>>7|S<<25)>>>0,S>>>=7;_.push(E)}if(jt(x,O),j=et(j),w.call(b,A,j),m.O)for(b=0;b<m.O.length;++b)O=!!(x=m.O[b]).visibility,A=(w=d.data).addNormalizedLandmark,j=v,x=Object.assign(Object.assign({},x),{visibility:O?x.visibility:0}),vt(O=new Ft,1,x.x),vt(O,2,x.y),vt(O,3,x.z),x.visibility&&vt(O,4,x.visibility),nt(_=x=new Q,1,gt(O,1)),nt(_,2,gt(O,2)),nt(_,3,gt(O,3)),nt(_,4,gt(O,4)),nt(_,5,gt(O,5)),jt(O,_),x=et(x),A.call(w,j,x);if(m.M)for(b=0;b<m.M.length;++b){if(A=(w=d.data).addClassification,j=v,x=m.M[b],vt(O=new Et,2,x.Y),x.index&&vt(O,1,x.index),x.label&&vt(O,3,x.label),x.displayName&&vt(O,4,x.displayName),_=x=new Q,null!=(S=gt(O,1))&&null!=S)if(Y(_.g,8),E=_.g,0<=S)Y(E,S);else{for(k=0;9>k;k++)E.push(127&S|128),S>>=7;E.push(1)}nt(_,2,gt(O,2)),null!=(E=gt(O,3))&&(E=B(E),Y(_.g,26),Y(_.g,E.length),tt(_,_.g.end()),tt(_,E)),null!=(E=gt(O,4))&&(E=B(E),Y(_.g,34),Y(_.g,E.length),tt(_,_.g.end()),tt(_,E)),jt(O,_),x=et(x),A.call(w,j,x)}}d=d.data;break t;default:d={}}}switch(l=d,f=c.stream,c.type){case"video":i.pushTexture2d(Object.assign(Object.assign({},l),{stream:f,timestamp:r}));break;case"detections":(h=l).stream=f,h.timestamp=r,i.pushDetectionList(h);break;default:throw Error("Unknown input config type: '"+c.type+"'")}}return g.i.send(i),y(n,g.C,4);case 4:i.delete(),n.g=0}}))}))},t.onResults=function(t,e){this.listeners[e||"$"]=t},_("Solution",Vt),_("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(t=Yt.prototype).close=function(){return this.g.close(),Promise.resolve()},t.onResults=function(t){this.g.onResults(t)},t.initialize=function(){return Ot(this,(function t(){var e=this;return x(t,(function(t){return y(t,e.g.initialize(),0)}))}))},t.reset=function(){this.g.reset()},t.send=function(t){return Ot(this,(function e(){var n=this;return x(e,(function(e){return y(e,n.g.send(t),0)}))}))},t.setOptions=function(t){this.g.setOptions(t)},_("SelfieSegmentation",Yt),_("VERSION","0.1.1632777926")}).call(this)}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(513),e=n.n(t);function r(t){c.save(),c.clearRect(0,0,u.width,u.height),c.drawImage(t.segmentationMask,0,0,u.width,u.height),c.globalCompositeOperation="source-out",c.drawImage(l,0,0,l.width,l.height,0,0,i,o),c.globalCompositeOperation="destination-atop",c.drawImage(t.image,0,0,u.width,u.height),c.restore()}const i=640,o=450;let a=!1;const s=document.getElementsByClassName("input_video")[0],u=document.getElementsByClassName("output_canvas")[0],c=u.getContext("2d");c.width=i,c.height=o;const l=new Image;document.getElementById("input-btn").addEventListener("click",(async()=>{const t=document.getElementById("input-text").value;if(0!=t.length)try{const n=await fetch(t);if(404!=n.status){const t=await n.blob(),a=URL.createObjectURL(t);l.src=a,(()=>{const t=new(e())({locateFile:t=>`${t}`});t.setOptions({modelSelection:1}),t.onResults(r),new Camera(s,{onFrame:async()=>{await t.send({image:s})},width:i,height:o}).start()})()}else alert("Image not found")}catch(t){alert("Cannot fetch the image")}else alert("Please enter image URL")})),document.getElementById("selfie-btn").addEventListener("click",(async()=>{a=!a,a?(document.getElementsByClassName("input_video")[0].classList.add("selfie-mode"),document.getElementsByClassName("output_canvas")[0].classList.add("selfie-mode"),document.getElementById("selfie-btn").value="Selfie Mode: On",document.getElementById("selfie-btn").classList.add("grass-green-bg"),document.getElementById("selfie-btn").classList.remove("red-bg")):(document.getElementsByClassName("input_video")[0].classList.remove("selfie-mode"),document.getElementsByClassName("output_canvas")[0].classList.remove("selfie-mode"),document.getElementById("selfie-btn").value="Selfie Mode: Off",document.getElementById("selfie-btn").classList.remove("grass-green-bg"),document.getElementById("selfie-btn").classList.add("red-bg"))}))})()})();