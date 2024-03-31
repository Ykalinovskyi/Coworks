// Мобильная навигация

// Кнопка открытия навигации
const mobileNavBtnOpen = document.querySelector('#openMobileNav');

// Кнопка закрытия навигации
const mobileNavBtnClose = document.querySelector('#closeMobileNav');

// Блок мобильной навигации
const mobileNav = document.querySelector('.mobile-nav');

//Ссылки внутри навигации
const mobileNavLinks = mobileNav.querySelectorAll('a, button')


mobileNavBtnOpen.addEventListener('click', function(){
    mobileNav.classList.add('mobile-nav--open');

    // Убрали скрол на странице при открытии навигации
    document.body.classList.add('no-scroll');
});

mobileNavBtnClose.addEventListener('click', function(){
    mobileNav.classList.remove('mobile-nav--open');

    document.body.classList.remove('no-scroll');
});

// Закрываем мобильную навигацию при клике на ссылках внутри
mobileNavLinks.forEach(function(item){
    item.addEventListener('click', function(){
        mobileNav.classList.remove('mobile-nav--open');

        document.body.classList.remove('no-scroll');
    })
})
