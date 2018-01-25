// Sticky shadowy header
$( document ).ready(function() {
	$(document).scroll(function() {
	  $('.banner').toggleClass('shadowy', $(document).scrollTop() >0);
	});
});

//Fixing Sticky Header to work with keyboard controls
var stickyItem = 'newsletter-banner';   // the ID of the fixed-position element
var readAssistOffset = 75;          // screen height - this offset value = scroll distance
var duration = 250;                 // scroll speed in ms
var doc = document.documentElement;

keydown = function (e) {
    var curElement = document.activeElement.nodeName;
    if ((e.keyCode === 32 && curElement === "BODY") || (e.keyCode === 33 || e.keyCode === 34)) {
        var viewportHeight = window.innerHeight;
        var stickyHeaderHeight = document.getElementById(stickyItem).offsetHeight;
        var newViewportHeight = viewportHeight - stickyHeaderHeight - readAssistOffset;
        e.preventDefault();
        if(e) {
            isShift = e.shiftKey || e.keyCode === 33 ? true : false;
        } else {
            isShift = window.event.shiftKey || e.keyCode === 33 ? true : false;
        };
        currScrollPosition = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        scrollToHere = newViewportHeight + currScrollPosition;
        if (isShift) {
            scrollToHere = currScrollPosition - newViewportHeight;
        }
        smoothScrollTo(scrollToHere)
    }
}

window.smoothScrollTo = (function () {
    var timer, start, factor;
    return function (target) {
        var offset = window.pageYOffset,
            delta = target - window.pageYOffset;
        start = Date.now();
        factor = 0;
        if( timer ) {
            clearInterval(timer);
        }

        function step() {
            var y;
            factor = (Date.now() - start) / duration;
            if( factor >= 1 ) {
                clearInterval(timer);
                factor = 1;
            }
            y = factor * delta + offset;
            window.scrollBy(0, y - window.pageYOffset);
        }

        timer = setInterval(step, 10);
        return timer;
    };
}());

window.onkeydown = keydown;
//End Fixing Sticky Header

// Activate tooltips
$('.tipped').tooltip();

// Rotate words in Hero
var terms1 = ["codes.", "leads.", "writes.", "mentors.", "streams.", "cares."];
var terms2 = ["smiles.", "solutions.", "impact.", "kaizen.", "innovation.", "systems."];

function rotateTerm1() {
  var ct = $("#rotate-1").data("term") || 0;
  $("#rotate-1").data("term", ct === terms1.length -1 ? 0 : ct + 1).text(terms1[ct]).fadeIn()
              .delay(2000).fadeOut(250, rotateTerm1);
}
function rotateTerm2() {
  var ct = $("#rotate-2").data("term") || 0;
  $("#rotate-2").data("term", ct === terms2.length -1 ? 0 : ct + 1).text(terms2[ct]).fadeIn()
              .delay(4000).fadeOut(250, rotateTerm2);
}
$(rotateTerm1);
$(rotateTerm2);

// Animate 404 page image
$('.js--404').click(function() {
    $(this).addClass('animated hinge');
});

// Back to Top link
$( document ).ready(function() {
    var offset = 1000;
    var duration = 250;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          // TODO replace this with an opacity transition for smoother visual appearance
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

// Typeform embed code
(function() {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm',
        b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
    if (!gi.call(d, id)) {
        js = ce.call(d, 'script');
        js.id = id;
        js.src = b + 'share.js';
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(js, q);
    }
})();

// Initialize AOS scrolling animation library
AOS.init({
	disable: 'phone',
  duration: 1200,
});
