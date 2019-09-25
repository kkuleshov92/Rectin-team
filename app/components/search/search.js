let count = document.querySelector('.search__count span'),
    maxNum = count.textContent,
    curNum = 0,
    indicator = true,
    helpSection = document.querySelector('.help');

let countAdder = function () {
    count.textContent = curNum;
    curNum += 11;

    if (curNum > maxNum) {
        count.textContent = maxNum;
        return false;
    }

    setTimeout(countAdder, 1);
    indicator = false;
};


if (window.pageYOffset > helpSection.offsetTop) {
    countAdder();
}

window.addEventListener('scroll', function () {
    if (indicator == true) {
        if (window.pageYOffset > helpSection.offsetTop) {
            countAdder();
        }
    }
});