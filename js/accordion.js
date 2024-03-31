/* Скрипты аккордеона */ 

// находим все топики 
const topics = document.querySelectorAll('.topic');

topics.forEach(function(topic){
    topic.addEventListener('click', function(event){
        if(event.target.closest('.topic__button')) {
            
            const isOpened = topic.classList.toggle('topic--open');
           
            const img =  topic.querySelector('.topic__icon');
            const content = topic.querySelector('.topic__content')
            
            if(isOpened){
                img.src = './img/icons/btn-minus.svg';
                content.style.maxHeight = content.scrollHeight + 'px';
            }else {
                img.src = './img/icons/btn-plus.svg';
                content.style.maxHeight = '0px';
            }
        };
    });
})