!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var a=r("iU1Pc"),i=document.querySelector(".form"),l={delay:i.elements.delay.value,step:i.elements.step.value,amount:i.elements.amount.value};function u(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(n){n.preventDefault(),l.delay=n.currentTarget.delay.value,l.step=n.currentTarget.step.value,l.amount=n.currentTarget.amount.value;for(var t=1;t<=l.amount;t+=1)u(t,l.delay).then((function(n){var t=n.position,o=n.delay;e(a).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(a).Notify.failure("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.566415b2.js.map
