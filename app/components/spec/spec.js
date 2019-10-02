"use strict";

{
  (function () {
    var showMeName = function showMeName() {
      var num = +specMainFace.getAttribute('src').slice(-5, -4),
          personList = document.querySelectorAll('.spec__person'),
          textList = document.querySelectorAll('.spec__text');

      for (var _i2 = 0; _i2 < personList.length; _i2++) {
        personList[_i2].classList.remove('active');

        textList[_i2].classList.remove('active');
      }

      personList[num - 1].classList.add('active');
      textList[num - 1].classList.add('active');
    };

    var specFaces = document.querySelectorAll('.spec__img'),
        specMainFace = document.querySelector('.spec__img1'),
        arrowsNav = document.querySelectorAll('.spec__arr');

    for (var i = 0; i < arrowsNav.length; i++) {
      arrowsNav[i].addEventListener('click', function (event) {
        if (event.target === arrowsNav[0]) {
          var num = +specMainFace.getAttribute('src').slice(-5, -4) - 1;

          if (num < 1) {
            num = specFaces.length;
          }

          for (var j = 0; j < specFaces.length; j++) {
            if (+specFaces[j].getAttribute('src').slice(-5, -4) === num) {
              specFaces[j].click();
            }
          }
        } else {
          var _num = +specMainFace.getAttribute('src').slice(-5, -4) + 1;

          if (_num > specFaces.length) {
            _num = 1;
          }

          for (var _j = 0; _j < specFaces.length; _j++) {
            if (+specFaces[_j].getAttribute('src').slice(-5, -4) === _num) {
              specFaces[_j].click();
            }
          }
        }
      });
    }

    for (var _i = 0; _i < specFaces.length; _i++) {
      specFaces[_i].addEventListener('click', function (event) {
        if (event.target === specFaces[0]) {
          return false;
        }

        var endCurrSrc = specMainFace.getAttribute('src').slice(-5),
            endNewSrc = this.getAttribute('src').slice(-5);
        specMainFace.setAttribute('src', specMainFace.getAttribute('src').slice(0, -5) + endNewSrc);
        this.setAttribute('src', this.getAttribute('src').slice(0, -5) + endCurrSrc);
        specMainFace.style.opacity = '.1';
        var n = .3;

        var appearance = function appearance() {
          var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : specMainFace;
          element.style.opacity = n + '';
          n += .05;

          if (getComputedStyle(element).opacity == 1) {
            return false;
          }

          setTimeout(appearance, 10);
        };

        appearance(specMainFace);
        showMeName();
      });
    }
  })();
}