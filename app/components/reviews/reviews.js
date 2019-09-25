// {
//     window.addEventListener('resize', function () {
//         if (window.innerWidth < 1024) {
//             $('.reviews__list').slick({
//                 slidesToShow: 2
//             });
//         }
//     });
// }



{
    let slider1 = $('.reviews__list');

    function initSlider(slider, options) {
        slider.on('init', function () {
            setTimeout(function () {
                slider.addClass('is-ready');
            }, 100);
        });
        slider.not('.slick-initialized').slick(options);
    }


    function destroySlider(slider) {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
    }


    function showSlider() {
        var tablet = ($(window).width()) < 1024;
        if (tablet) {
            initSlider(slider1, {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: true,
                adaptiveHeight: true,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: false,
                            adaptiveHeight: false
                        }
                    }
                ]
            });
        } else {
            destroySlider(slider1);
        }
    };
    showSlider();
    $(window).on('resize', showSlider);
}