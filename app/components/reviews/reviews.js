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
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: false,
                            adaptiveHeight: false
                        }
                    },
                    {
                        breakpoint: 639,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            adaptiveHeight: false,
                            centerPadding: '80px'
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


{
    let reviewsArea = document.querySelector('.reviews__textarea'),
        reviewsBtn = document.querySelector('.reviews__btn'),
        thanksBox = document.querySelector('.thanks-box'),
        thanksClose = document.querySelector('.thanks__close');

    reviewsBtn.addEventListener('click', function () {
        if (reviewsArea.value) {
            thanksBox.style.display = 'block';
        }
    });

    thanksClose.addEventListener('click', function () {
        thanksBox.style.display = 'none';
        reviewsArea.value = '';
    });
}