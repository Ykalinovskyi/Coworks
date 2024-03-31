//находим кнопку
const scrollButton = document.querySelector('#scrollToTopBtn');

//слушаем событие скрола на странице
window.addEventListener('scroll', function(){
    
    //Если пользователь проскролил страницу больше чем высота экрана
    //То мы будем показывать кнопку
    if(window.pageYOffset > window.innerHeight) {
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible')
    }

})
