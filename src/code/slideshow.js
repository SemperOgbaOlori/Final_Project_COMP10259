var play = true;

/*global $,jQuery,console,window*/
(function ($) {
    "use strict";
    var slideshow = (function () {
        var counter = 0,
            i,
            j,
            slides = $("#slideshow .slide"),
            slidesLen = slides.length - 1;
        for (i = 0, j = 9999; i < slides.length; i += 1, j -= 1) {
            $(slides[i]).css("z-index", j);
        }
        return {
            startSlideshow: function () {
                window.setInterval(function () {
                    if (counter === 0) {
                        slides.eq(counter).fadeOut();
                        counter += play? 1: 0;
                    } else if (counter === slidesLen) {
                        counter = 0;
                        slides.eq(counter).fadeIn(function () {
                            slides.fadeIn();
                        });
                    } else {
                        slides.eq(counter).fadeOut();
                        counter += play? 1: 0;
                    }
                }, 1000);
            },
        };
    })();
    slideshow.startSlideshow();
})(jQuery);

$(function () {
    // Create click event handler on the document.
    $(document).on("click", function (event) {
        if ($(event.target).closest("#slideshow").length === 0) {
            // stop slideshow
            play = false;
        }
    });
    $("#slideshow").on("click", function () {
        // play / continue slideshow
        play = true;
    });
});
