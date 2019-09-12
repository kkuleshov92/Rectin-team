{
    let specFaces = document.querySelectorAll('.spec__img'),
        specMainFace = document.querySelector('.spec__img1'),
        arrowsNav = document.querySelectorAll('.spec__arr');

    for (let i = 0; i < arrowsNav.length; i++) {
        arrowsNav[i].addEventListener('click', function (event) {
            if (event.target === arrowsNav[0]) {
                let num = +specMainFace.getAttribute('src').slice(-5, -4) - 1;

                if (num < 1) {
                    num = specFaces.length;
                }

                for (let j = 0; j < specFaces.length; j++) {
                    if (+specFaces[j].getAttribute('src').slice(-5, -4) === num) {
                        specFaces[j].click();
                    }
                }
            } else {
                let num = +specMainFace.getAttribute('src').slice(-5, -4) + 1;

                if (num > specFaces.length) {
                    num = 1;
                }

                for (let j = 0; j < specFaces.length; j++) {
                    if (+specFaces[j].getAttribute('src').slice(-5, -4) === num) {
                        specFaces[j].click();
                    }
                }
            }
        })
    }

    for (let i = 0; i < specFaces.length; i++) {
        specFaces[i].addEventListener('click', function (event) {
            if (event.target === specFaces[0]) {
                return false;
            }

            let endCurrSrc = specMainFace.getAttribute('src').slice(-5),
                endNewSrc = this.getAttribute('src').slice(-5);

            specMainFace.setAttribute('src', specMainFace.getAttribute('src').slice(0, -5) + endNewSrc);
            this.setAttribute('src', this.getAttribute('src').slice(0, -5) + endCurrSrc);

            specMainFace.style.opacity = '.1';
            let n = .3;


            let appearance = function (element = specMainFace) {
                element.style.opacity = n + '';
                n += .05;

                if (getComputedStyle(element).opacity == 1) {
                    return false;
                }

                setTimeout(appearance, 10);
            }

            appearance(specMainFace);

            showMeName();
        })
    }

    function showMeName() {
        let num = +specMainFace.getAttribute('src').slice(-5, -4),
            personList = document.querySelectorAll('.spec__person'),
            textList = document.querySelectorAll('.spec__text');

        for (let i = 0; i < personList.length; i++) {
            personList[i].classList.remove('active');
            textList[i].classList.remove('active');
        }

        personList[num - 1].classList.add('active');
        textList[num - 1].classList.add('active');
    }


}