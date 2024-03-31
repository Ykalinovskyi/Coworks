/* tiny slider */
const slider = tns({
    container: '.slider',
    items: 2.7,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    loop: false,
    autoWidth: true,
    autoHeight: true,
    controlsContainer: '.locations__controls',
    nav: false,

    lazyload: true
}); 

// Rкнопки управления слайдером на мобильном устройстве

const prevMobile = document.querySelector('.locations__controls--mobile .prev'); //кнопка назад
const nextMobile = document.querySelector('.locations__controls--mobile .next'); //кнопка вперед

// Обращаемся к кнопкам и вешаем обработчик события для управления слайдами
prevMobile.onclick = () => slider.goTo('prev');

nextMobile.onclick = () => slider.goTo('next');


