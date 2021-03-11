var d = document;
var query = d.querySelector('.slider');
var queryImg = d.querySelectorAll('.slider__img');
var queryNext = d.querySelector('.after');
var queryBefore = d.querySelector('.before');
var queryContainer = d.querySelector('.container__slider');
var size = queryImg[0].clientWidth;
var counter = 0;
queryContainer.style.width = queryImg[0].clientWidth.toString() + 'px';
queryNext.addEventListener('click', function () {
    query.style.transition = 'transform 0.4s easy-in-out';
    if (counter === queryImg.length - 1)
        counter = 0;
    else
        counter++;
    query.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
queryBefore.addEventListener('click', function () {
    query.style.transition = 'transform 0.4s easy-in-out';
    if (counter === 0)
        counter = queryImg.length - 1;
    else
        counter--;
    query.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
