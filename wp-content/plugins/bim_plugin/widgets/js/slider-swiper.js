(function($) {
    "use strict";


    $(window).on("load", function() { // makes sure the whole site is loaded 


	//slider for home slider 
	 var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1000,
        mousewheel: true,
        parallax: true,
        loop: true,
        pagination: {
            el: '.slide-full .parallax-slider .swiper-pagination',
            clickable: true
        },
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.slide-full .parallax-slider .swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.slide-full .parallax-slider .next-ctrl',
            prevEl: '.slide-full .parallax-slider .prev-ctrl'
        }
    };
    parallaxSlider = new Swiper('.slide-full .parallax-slider', parallaxSliderOptions);


		
    });


})(jQuery);