(()=>{"use strict";var e=[,(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});r(2);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(i=n.key,l=void 0,l=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(l)?l:String(l)),n)}var i,l}const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add("hello-world-button");var t=document.querySelector("body");e.addEventListener("click",(function(){var e=document.createElement("p");e.innerHTML="Hello everyone! We are learning webpack",e.classList.add("hello-world-text"),t.appendChild(e)})),t.appendChild(e)}}])&&n(t.prototype,r),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,r)=>{r.r(t)},(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});r(4);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(i=n.key,l=void 0,l=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(l)?l:String(l)),n)}var i,l}const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,(r=[{key:"render",value:function(){var e=document.createElement("h1"),t=document.querySelector("body");e.innerHTML="webpack is awesome",t.appendChild(e)}}])&&n(t.prototype,r),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()},(e,t,r)=>{r.r(t)}],t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{r.r(o);var e=r(1),t=r(3),n=new e.default;(new t.default).render(),n.render(),"production"===process.env.NODE_ENV?console.log("Production mode"):"development"===process.env.NODE_ENV&&console.log("Development mode")})()})();