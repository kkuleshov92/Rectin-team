setTimeout(initSelect, 1000);

function initSelect() {
    var inputSelect = $(".country-select").first(),
        customSelect = $(".custom-select"),
        customOptions = $(".options");

    //set options to custom select
    let selected = $('.selected');
    let currentCountry = $('.country-select option:selected').first();
    let currentCountryCode = currentCountry.val();

    let selectedText = $('<span>', {
        class: 'option__text',
        text: currentCountry.text()
    });

    selected.addClass(currentCountryCode);
    selectedText.appendTo(selected);

    function setOptions(select) {

        inputSelect.find('option').each(function (i, option) {
            let countryCode = option.value;
            let countryName = option.text;
            let link = $('<a>', {
                class: countryCode + ' option',
                href: "?&country_code=".concat(option.value),
                'data-value': countryCode,
            });
            let optionText = $('<span>', {
                class: 'option__text',
                text: countryName
            });
            optionText.appendTo(link);
            if (countryCode !== currentCountryCode) {
                link.appendTo(customOptions);
            } else {
                link.prependTo(customOptions);
            }

        });
    }


    setOptions(inputSelect);



    // ---------- {
    // коли поправлять скрипт everad.js на сервері (не раніше 05.08.19), 
    // можна цей блок видалити нафіг

    $('.ever-popup .custom-select').each(function () {
        $(this).on('click', function () {
            let selected = $(this).find('.selected')
            if (!selected.hasClass('hide')) {
                selected.addClass('hide');
                $(this).find('.options').addClass('opened');
            } else {
                $('.hide').removeClass('hide');
                $('.opened').removeClass('opened');
            }
        });
    });
    // -------- }

    $(window).on('click', function (e) {
        // console.log($(e.target));
        var target = $(e.target);
        if (target.hasClass('selected')) {
            target.addClass('hide');
            target.parent().find('.options').addClass('opened');
        } else {
            $('.hide').removeClass('hide');
            $('.opened').removeClass('opened');
        }
    });


}

{
    //Переход по якорю
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 60
        }, 1000);
    });
}