"use strict"
const isMobile = {
    Android: () => {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: () => {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: () => {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: () => {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: () => {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: () => {
      return (isMobile.Android() || 
      isMobile.BlackBerry() || 
      isMobile.iOS() || 
      isMobile.Opera() || 
      isMobile.Windows());
    }
  };

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function(e) {
                menuArrow.parentElement.classList.toggle('_active');
            })
        }
    }
} else {
    document.body.classList.add('_pc');
}
// Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}




// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach (menuLink => {
        menuLink.addEventListener("click", onMenuClick);
    });

    function onMenuClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 10;


            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

console.log("Score: 136 / 150 \n1. вёрстка валидная (10/10) \n2. вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5 (footer, header, main, nav, section), используются заголовки h1,h2,h3. Заголовок h1 может быть только один. (16/20)");
console.log("3. для оформления СV используются css-стили (10/10)\n4. контент размещается в блоке, который горизонтально центрируется на странице (10/10)\n5. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется (10/10)");
console.log("6. есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным (10/10)\n7. на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (10/10)")
console.log("8. контакты для связи и перечень навыков оформлены в виде списка ul>li (10/10)\n9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (10/10)\n10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js (10/10)")
console.log("11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий (10/10)\n12. CV выполнено на английском языке (10/10)")
console.log("13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) (10/10)")


