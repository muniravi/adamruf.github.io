function rotateTerm1(){var e=$("#rotate-1").data("term")||0;$("#rotate-1").data("term",e===terms1.length-1?0:e+1).text(terms1[e]).fadeIn().delay(2e3).fadeOut(250,rotateTerm1)}function rotateTerm2(){var e=$("#rotate-2").data("term")||0;$("#rotate-2").data("term",e===terms2.length-1?0:e+1).text(terms2[e]).fadeIn().delay(4e3).fadeOut(250,rotateTerm2)}$(document).ready(function(){$(document).scroll(function(){$(".banner").toggleClass("shadowy",$(document).scrollTop()>0)})});var stickyItem="newsletter-banner",readAssistOffset=75,duration=250,doc=document.documentElement;keydown=function(e){var t=document.activeElement.nodeName;if(32===e.keyCode&&"BODY"===t||33===e.keyCode||34===e.keyCode){var o=window.innerHeight,n=document.getElementById(stickyItem).offsetHeight,r=o-n-readAssistOffset;e.preventDefault(),isShift=e?!(!e.shiftKey&&33!==e.keyCode):!(!window.event.shiftKey&&33!==e.keyCode),currScrollPosition=(window.pageYOffset||doc.scrollTop)-(doc.clientTop||0),scrollToHere=r+currScrollPosition,isShift&&(scrollToHere=currScrollPosition-r),smoothScrollTo(scrollToHere)}},window.smoothScrollTo=function(){var e,t,o;return function(n){function r(){var n;o=(Date.now()-t)/duration,o>=1&&(clearInterval(e),o=1),n=o*s+a,window.scrollBy(0,n-window.pageYOffset)}var a=window.pageYOffset,s=n-window.pageYOffset;return t=Date.now(),o=0,e&&clearInterval(e),e=setInterval(r,10)}}(),window.onkeydown=keydown,$(".tipped").tooltip();var terms1=["codes.","leads.","writes.","mentors.","streams.","cares."],terms2=["smiles.","solutions.","impact.","kaizen.","innovation.","systems."];$(rotateTerm1),$(rotateTerm2),$(".js--404").click(function(){$(this).addClass("animated hinge")}),$(document).ready(function(){var e=1e3,t=250;$(window).scroll(function(){$(this).scrollTop()>1e3?$(".back-to-top").fadeIn():$(".back-to-top").fadeOut()}),$(".back-to-top").click(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},250),!1})}),function(){var e,t,o,n,r=document,a=r.getElementById,s=r.createElement,i=r.getElementsByTagName,c="typef_orm";a.call(r,c)||(t=s.call(r,"script"),t.id=c,t.src="https://s3-eu-west-1.amazonaws.com/share.typeform.com/share.js",o=i.call(r,"script")[0],o.parentNode.insertBefore(t,o))}(),AOS.init({disable:"phone",duration:1200});