const d: Document = document;

const query: HTMLElement = d.querySelector('.slider');
const queryImg = d.querySelectorAll('.slider__img');

const queryNext: HTMLElement = d.querySelector('.after');
const queryBefore: HTMLElement = d.querySelector('.before');

const queryContainer: HTMLElement = d.querySelector('.container__slider');

const size = queryImg[0].clientWidth;

let counter: number = 0;

queryContainer.style.width = (<HTMLElement>queryImg[0]).clientWidth.toString() + 'px';

queryNext.addEventListener('click', () => {
    query.style.transition = 'transform 0.4s easy-in-out';

    if(counter === queryImg.length - 1) counter = 0;
    else counter++;

    query.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

queryBefore.addEventListener('click', () => {
    query.style.transition = 'transform 0.4s easy-in-out';

    if(counter === 0) counter = queryImg.length - 1;
    else counter--;

    query.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

