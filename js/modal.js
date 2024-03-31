/* Модальные окна */

//Находим кнопки открывающие модальное окно
const openModalBtn = document.querySelectorAll('[data-action="modal"]');

// Находим модальное окно
const modal = document.querySelector('.modal');

// Находим кнопку закрытия модального окна 
const closeModalBtn = document.querySelector('#closeModal');

// находим тело модального окна
const modalBody = document.querySelector('.modal__body');

function closeModal() {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
}

function openModal() {
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
}

//Обрабатываем кнопки и добавляем обработчик события клик
openModalBtn.forEach(function(item){
    item.addEventListener('click',openModal);
});


// Закрываем модальное окно по кнопке
closeModalBtn.addEventListener('click', closeModal);

//Закрытие модального окна по оверлею
modal.addEventListener('click', closeModal);

//Запрещаем событию клика дойти до родителя
modalBody.addEventListener('click', function(e){
    e.stopPropagation();
});

// закрываем окно по клавише escape
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27) {
        closeModal();
    }
});

