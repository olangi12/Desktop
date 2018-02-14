!function(e){"use strict";function t(){}function n(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var a;t.prototype={constructor:t,debug:!1,trace:function(t){this.debug&&e.console&&e.console.log(t)},timerStart:function(){a=(new Date).getTime()},timerStop:function(){var e=(new Date).getTime()-a;this.trace("seconds elapsed: "+.001*e)},preloadImages:function(e){function t(){a++,a==e.length&&o(n)}for(var n=[],a=0,o=function(){},e="object"!=typeof e?[e]:e,r=0;r<e.length;r++)n[r]=new Image,n[r].onload=function(){t()},n[r].onerror=function(){t()},n[r].src=e[r];return{done:function(e){o=e||o}}},qs:function(e,t){return(t||document).querySelector(e)},qsa:function(e,t){return(t||document).querySelectorAll(e)},on:function(e,t,n,a){var o;o="string"==typeof e?qs(e):e,o.addEventListener(t,n,a||!1)},delegate:function(e,t,n,a){function o(n){var o=n.target,i=r.qsa(t,e),s=Array.prototype.indexOf.call(i,o)>=0;s&&a.call(o,n)}var r=this,i="blur"===n||"focus"===n;this.on(e,n,o,i)},parent:function(e,t){return e.parentNode?e.parentNode.tagName.toLowerCase()===t.toLowerCase()?e.parentNode:this.parent(e.parentNode,t):void 0},makeVar:function(e,t,n){var a;return a=n?e.replace(/-(.)|_(.)/g,function(e,t,n){var a="";return t&&(a+=t.charAt(0).toUpperCase()+t.substring(1,t.length)),n&&(a+=n.toUpperCase()),a}):e.replace(/-/g,"_"),t[a]=document.getElementById(e)},makeVars:function(e,t,n,a){for(var o=e.length,r;o--;)r=this.makeVar(e[o],t,a),n.push(r)},getAllIdElements:function(e){for(var t=e.getElementsByTagName("*"),n=[],a=t.length;a--;)t[a].hasAttribute("id")&&n.push(t[a]);return n},getAllIds:function(e,t,n){for(var a=e.getElementsByTagName("*"),o=[],r=a.length;r--;)if(a[r].hasAttribute("id")&&(o.push(a[r].id),t)){var i=n||"bu",s=a[r].id.replace(/-/g,"_");this.trace("var "+s+" = "+i+".qs('#"+a[r].id+"');")}return o},makeVarsFromIds:function(t,n,a,o){var r=this.getAllIds(t);this.makeVars(r,n||e,a||[],o)},recordStates:function(e){(!e||e.length<1)&&(e=this.getAllIdElements(document));for(var t=e.length;t--;)e[t].cl="",e[t].cl+=e[t].className},resetStates:function(e,t){(!e||e.length<1)&&(e=this.getAllIdElements(document));for(var n=e.length;n--;)e[n].cl?e[n].className=e[n].cl:this.trace("initial state not recorded for: "+e[n].id);if(t){var a=10*e.length;setTimeout(function(){t.apply()},a)}}},NodeList.prototype.forEach=Array.prototype.forEach;var o,r;e.addEventListener?(o=function(e,t,n){e.addEventListener(t,n,!1)},r=function(e,t,n){e.removeEventListener(t,n,!1)}):(o=function(t,n,a){t["e"+n+a]=a,t[n+a]=function(){t["e"+n+a](e.event)},t.attachEvent("on"+n,t[n+a])},r=function(e,t,n){e.detachEvent("on"+t,e[t+n]),e[t+n]=null}),t.prototype.addListener=o,t.prototype.removeListener=r;var i;i=e.stopPropagation?function(e){e.stopPropagation(),e.preventDefault()}:function(e){e.returnValue=!1,e.cancelBubble=!0},t.prototype.stopPropagation=i;var s;s=e.requestAnimationFrame?function(t){return e.requestAnimationFrame(t)}:e.webkitRequestAnimationFrame?function(t){return e.webkitRequestAnimationFrame(t)}:e.MozRequestAnimationFrame?function(t){return e.MozRequestAnimationFrame(t)}:function(t){return e.setTimeout(t,17)},t.prototype.requestFrame=s;var l;l=e.cancelAnimationFrame?function(t){return e.cancelAnimationFrame(t)}:e.webkitCancelAnimationFrame?function(t){return e.webkitCancelAnimationFrame(t)}:e.MozCancelAnimationFrame?function(t){return e.MozCancelAnimationFrame(t)}:function(t){return e.clearTimeout(t)},t.prototype.cancelFrame=l;var c;c=e.getComputedStyle?function(t){return e.getComputedStyle(t)}:function(e){return e.currentStyle},t.prototype.getStyle=c;var u,m,d;"classList"in document.documentElement?(u=function(e,t){return e.classList.contains(t)},m=function(e,t){e.classList.add(t)},d=function(e,t){e.classList.remove(t)}):(u=function(e,t){return n(t).test(e.className)},m=function(e,t){u(e,t)||(e.className=e.className+" "+t)},d=function(e,t){e.className=e.className.replace(n(t)," ")}),t.prototype.addClass=m,t.prototype.removeClass=d,t.prototype.hasClass=u,t.prototype.replaceClass=function(e,t,n){d(e,t),m(e,n)},e.BannerUtils=t}(window);var Banner={init:function(){"use strict";function e(){w?(p(),TweenLite.set(k,{clearProps:"all"}),h.resetStates(k,t)):(h.recordStates(k),d(),t())}function t(){h.removeClass(F,"alpha-0"),TweenLite.from(F,.5,{y:200}),h.removeClass(b,"alpha-0"),TweenLite.from(b,.5,{x:"-50",alpha:0,delay:.5}),TweenLite.delayedCall(2,n)}function n(){TweenLite.to(b,.5,{alpha:0}),TweenLite.delayedCall(1,a)}function a(){h.removeClass(A,"alpha-0"),TweenLite.from(A,.5,{x:"-50",alpha:0}),h.removeClass(E,"alpha-0"),TweenLite.from(E,.5,{alpha:0}),TweenLite.delayedCall(2,o)}function o(){TweenLite.to([A,F,E],.5,{alpha:0}),TweenLite.delayedCall(1,r)}function r(){h.removeClass(q,"alpha-0"),TweenLite.from(q,.5,{x:"-50",alpha:0}),TweenLite.delayedCall(3,i)}function i(){TweenLite.to(q,.5,{alpha:0}),TweenLite.delayedCall(1,s)}function s(){h.removeClass(T,"alpha-0"),TweenLite.from(T,.5,{x:"-50",alpha:0}),h.removeClass(y,"alpha-0"),TweenLite.from(y,.5,{x:50,alpha:0}),h.removeClass(C,"alpha-0"),TweenLite.from(C,.5,{x:"-50",alpha:0,delay:1}),h.removeClass(L,"alpha-0"),TweenLite.from(L,.5,{alpha:0})}function l(){f(),w=!0}function c(e){window.open(window.clickTag)}function u(e){TweenLite.to(L,.5,{alpha:.7})}function m(e){TweenLite.to(L,.5,{alpha:1})}function d(){h.addListener(S,"touchEnd",c),h.addListener(S,"click",c)}function f(){h.addListener(S,"mouseenter",u),h.addListener(S,"mouseleave",m)}function p(){h.removeListener(S,"mouseenter",u),h.removeListener(S,"mouseleave",m)}var h=new BannerUtils,v=300,g=250,w=!1,L=h.qs("#cta"),y=h.qs("#device_3"),C=h.qs("#subcopy"),T=h.qs("#headline_4"),q=h.qs("#headline_3"),A=h.qs("#headline_2"),E=h.qs("#device_2"),b=h.qs("#headline_1"),F=h.qs("#device_1"),N=h.qs("#branding"),S=h.qs("#ad_content"),k=h.getAllIdElements(document);e()}};window.onload=function(){Banner.init()};