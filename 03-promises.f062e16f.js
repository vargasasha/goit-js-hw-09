!function(){var e=document.querySelector(".form"),n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');function u(e,n){var o=Math.random()>.3;return new Promise((function(t,u){setTimeout((function(){o?t({position:e,delay:n}):u({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(c){c.preventDefault();for(var i=Number(n.value),a=Number(o.value),r=0;r<t.value;r+=1)u(r+1,i+r*a).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}));e.reset()}))}();
//# sourceMappingURL=03-promises.f062e16f.js.map