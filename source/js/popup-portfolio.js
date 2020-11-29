const KEY_CODE_ESC = 27;
let fullCloneElement;
let index;
let popupGlacy;
let wrapperPopup;
let popupKeksobooking;
let footerElement = document.querySelector(`footer`);
let portfolio = document.querySelector(`.portfolio`);
let imgMain = portfolio.querySelectorAll(`.portfolio__img-main`);
let wrapper = document.querySelectorAll(`.wrapper`);




if (window.utill.windowInnerWidth > 1000 ) {

function hiddenScroll () {
    window.utill.body.setAttribute(`style`, `overflow: hidden`);
}

function showScroll () {
    window.utill.body.setAttribute(`style`, `overflow: auto`);
}

const dataPopup = [
    {
        popupTitle: `Gllacy`,
        img: `./img/glacy.png`,
        describePopup: `Данный проект был пролностью реализован мной.
        Какие технологии использовалась: 
        - HTML5
        - CSS3
        - Чистый JavaScript без использования библиотек и фреймворков.
        - Sass.
        - Gulp для сборки Sass модулей.
        - Git.
        - DOM API. 
        - Медиа запросы.
        - БЭМ.
        Что было сделано:
        - Разметка и верстка.
        - Разбиение CSS3 на Sass модули.
        - Настройка Gulp для сборки модулей.
        - Валидация формы.
        - Адаптивная верстка.
        - Добавление интерактивности при помощи JS.`
    },
    {
        popupTitle: `Cat Energy`,
        img: `./img/cat-energy.png`,
        describePopup: ` Данный проект был пролностью реализован мной.
        Какие технологии использовалась:
        - HTML5
        - CSS3
        - Чистый JavaScript без использования библиотек и фреймворков.
        - Sass.
        - Gulp для сборки Sass модулей.
        - Git.
        - DOM API. 
        - Медиа запросы.
        - БЭМ.
        Что было сделано:
        - Разметка и верстка.
        - Разбиение CSS3 на Sass модули.
        - Настройка Gulp для сборки модулей.
        - Валидация формы.
        - Адаптивная верстка.
        - Добавление интерактивности при помощи JS.`
    },
    {
        popupTitle: `Keksobooking`,
        img: `./img/keksobooking.png`,  
        describePopup: `В данном проекте использовалась готовая верстка сайта.<br>
        Какие технологии использовалась:<br><br>
        - Webpack для сборки js модулей.<br>
        - Чистый JavaScript без использования библиотек и фреймворков.<br>
        - XmlHttpRequest.<br>
        - DOM API. <br>
        - JSON.<br><br>
        Что было сделано мной:<br>
        - Рендеринг отдельных элементов.<br>
        - Получение данных и последующая обработка.<br>
        - Валидация формы и последующая отправка на сервер.<br>
        - Обработка исключений.<br>
        - Парсинг JSON.`     
    }
];

createPopup = (currentIndex) => {
    let templatePopup = document.querySelector(`#template-popup`).content;
    let popupArticle = templatePopup.querySelector(`article`);
    let cloneElement = popupArticle.cloneNode(true);
    fullCloneElement = addInfo(cloneElement, currentIndex);
    footerElement.append(fullCloneElement);
};

addInfo = (emptyClone, currentIndex) => {
    emptyClone.querySelector(`.wrapper__popup-title`).textContent = dataPopup[currentIndex].popupTitle;
    emptyClone.querySelector(`.wrapper__popup-img`).setAttribute(`src`, dataPopup[currentIndex].img);
    emptyClone.querySelector(`.wrapper__popup-title-describe`).textContent = dataPopup[currentIndex].popupTitle;
    emptyClone.querySelector(`.wrapper__popup-text`).textContent = dataPopup[currentIndex].describePopup;
    return emptyClone;
};
for(let i = 0; i < imgMain.length; i++) {
    imgMain[i].addEventListener(`click`, (evt) => {
        evt.stopPropagation();
            index = Number(evt.target.getAttribute(`data-index`));
                createPopup(index);
                popupGlacy = document.querySelector(`.wrapper`);
                popupGlacy.setAttribute(`style`, `display: block`);
                closeButton = document.querySelector(`.wrapper__popup-close-button`);
                wrapperPopup = popupGlacy.querySelector(`.wrapper__popup-describe`);
                wrapperPopup.addEventListener(`mouseover`, omMouseOver);
                wrapperPopup.addEventListener(`mouseout`, omMouseOut);
                hiddenScroll();
                closePopup(`.wrapper`);
    });
};

function closePopup (popupElement) {
    document.addEventListener(`keydown`, (evt) =>  {
        if (evt.keyCode === KEY_CODE_ESC) {
            let popup = document.querySelector(popupElement)
            popup.remove();
            wrapperPopup.removeEventListener(`mouseover`, omMouseOver);
            wrapperPopup.removeEventListener(`mouseout`, omMouseOut);
            showScroll();
        }
    });
    closeButton.addEventListener(`click`,  () => {
        let  popup = document.querySelector(popupElement);
        console.log(popup)
        popup.remove();
        wrapperPopup.removeEventListener(`mouseover`, omMouseOver);
        wrapperPopup.removeEventListener(`mouseout`, omMouseOut);
        showScroll();
    });
}

function omMouseOut () {
    closeButton.classList.toggle(`wrapper__popup-close-button-white`);
};

function omMouseOver (movEvt) {
    movEvt.preventDefault();
    let resultX = Math.floor(movEvt.clientX);
    if (  1000 > resultX || resultX > 1470) {
        omMouseOut();
    } else { 
        closeButton.classList.toggle(`wrapper__popup-close-button-white`);
    }
}
};
