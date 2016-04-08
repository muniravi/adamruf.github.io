// Sticky shadowy header
$( document ).ready(function() {
	$(document).scroll(function() {
	  $('.navbar-fixed-top').toggleClass('shadowy', $(document).scrollTop() >0);
	});
});

//Fixing Sticky Header to work with keyboard controls
var stickyItem = 'top-nav';   // the ID of the fixed-position element
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
var terms1 = ["codes", "cares", "listens", "leads", "mentors"];
var terms2 = ["smiles", "insights", "outcomes", "innovation", "solutions", "results"];

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

$( document ).ready(function() {
    var offset = 1000;
    var duration = 250;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

// Mixpanel code

// Tracking pageview?
mixpanel.track(window.location.pathname);

// Tracking navigation clicks
$('#home').click(function() {
    mixpanel.track_links('#home', 'Nav: Home', {
        'referrer': document.referrer
    });
});
$('#services').click(function() {
    mixpanel.track_links('#services', 'Nav: Services', {
        'referrer': document.referrer
    });
});
$('#portfolio').click(function() {
    mixpanel.track_links('#portfolio', 'Nav: Portfolio', {
        'referrer': document.referrer
    });
});
$('#resources').click(function() {
    mixpanel.track_links('#resources', 'Nav: Resources', {
        'referrer': document.referrer
    });
});
$('#blog').click(function() {
    mixpanel.track_links('#blog', 'Nav: Blog', {
        'referrer': document.referrer
    });
});
$('#about').click(function() {
    mixpanel.track_links('#about', 'Nav: About', {
        'referrer': document.referrer
    });
});
$('#contact').click(function() {
    mixpanel.track_links('#contact', 'Nav: Contact', {
        'referrer': document.referrer
    });
});

// Tracking Portfolio item clicks
$('#portfolio-gsd-toolbox').click(function() {
    mixpanel.track_links('#portfolio-gsd-toolbox', 'Viewed GSD Toolbox', {
        'referrer': document.referrer
    });
});

$('#portfolio-bracelets-by-deb').click(function() {
    mixpanel.track_links('#portfolio-bracelets-by-deb', 'Viewed Bracelets by Deb', {
        'referrer': document.referrer
    });
});
$('#portfolio-fontastic-questions').click(function() {
    mixpanel.track_links('#portfolio-fontastic-questions', 'Viewed Fontastic Questions', {
        'referrer': document.referrer
    });
});
$('#portfolio-gsd-toolbox').click(function() {
    mixpanel.track_links('#portfolio-gsd-toolbox', 'Viewed GSD Toolbox', {
        'referrer': document.referrer
    });
});
$('#portfolio-mainichi-japanese').click(function() {
    mixpanel.track_links('#portfolio-mainichi-japanese', 'Viewed Mainichi Japanese', {
        'referrer': document.referrer
    });
});
$('#portfolio-random-nihongo').click(function() {
    mixpanel.track_links('#portfolio-random-nihongo', 'Viewed Japanese Challenge', {
        'referrer': document.referrer
    });
});
$('#portfolio-sunday-friends').click(function() {
    mixpanel.track_links('#portfolio-sunday-friends', 'Viewed Sunday Friends', {
        'referrer': document.referrer
    });
});

//Tracking CTAs
$('#hero-cta').click(function() {
    mixpanel.track_links('#hero-cta', 'Clicked Hero CTA', {
        'referrer': document.referrer
    });
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
