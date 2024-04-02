/* tiny slider */
const slider = tns({
    autoWidth: true,
    
    items: 2.7,
    gutter: 10,
    mouseDrag: true,
    lazyload: true,
    container: '.slider',
    swipeAngle: false,
    speed: 400,
    // loop: false,
    
    controlsContainer: '.locations__controls',
    nav: false,

}); 


// Rкнопки управления слайдером на мобильном устройстве

const prevMobile = document.querySelector('.locations__controls--mobile .prev'); //кнопка назад
const nextMobile = document.querySelector('.locations__controls--mobile .next'); //кнопка вперед

// Обращаемся к кнопкам и вешаем обработчик события для управления слайдами
prevMobile.onclick = () => slider.goTo('prev');

nextMobile.onclick = () => slider.goTo('next');


