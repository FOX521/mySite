const KEY_CODE_ESC = 27;
let portfolio = document.querySelector(`.portfolio`);
let wrapper = document.querySelectorAll(`.wrapper`);
let portfolioList = portfolio.querySelector(`.portfolio__list`);
let portfolioElement = portfolioList.querySelectorAll(`.portfolio__element`);
let imgKeksBook = portfolio.querySelector(`.portfolio__img-main-keksobooking`);
let imgCatEnergy = portfolio.querySelector(`.portfolio__img-main-cat-energy`);
let imgGlacy = portfolio.querySelector(`.portfolio__img-main-glacy`);
let popupGlacy = document.querySelector(`.wrapper-glacy`);
let popupCatEnergy = document.querySelector(`.wrapper-cat-energy`);
let popupKeksobooking = document.querySelector(`.wrapper-keksobooking`);
let wrapperPopup = document.querySelectorAll(`.wrapper__popup-describe`);
let wrapperPopupDescribe = document.querySelectorAll(`.wrapper__popup-describe`);
let closeButton = document.querySelectorAll(`.wrapper__popup-close-button`);



if (window.utill.windowInnerWidth > 1000 ) {
for(let i = 0; i < wrapperPopup.length; i++) {
    wrapperPopup[i].addEventListener(`mouseover`, omMouseOver);
    wrapperPopup[i].addEventListener(`mouseout`, omMouseOut);
};

function omMouseOut () {
    for(let i = 0; i < closeButton.length; i++) {
        closeButton[i].classList.toggle(`wrapper__popup-close-button-white`);
    }
}

function omMouseOver (movEvt) {
    movEvt.preventDefault();
    let resultX = Math.floor(movEvt.clientX);
    if (  1000 > resultX || resultX > 1470) {
        omMouseOut();
    } else { 
        for(let i = 0; i < closeButton.length; i++) {
            closeButton[i].classList.toggle(`wrapper__popup-close-button-white`);
        }
    }
}
};



for(let i = 0; i < wrapper.length; i++) {
    document.addEventListener(`keydown`, (evt) =>  {
        if (evt.keyCode === KEY_CODE_ESC) {
            wrapper[i].setAttribute(`style`, `display: none`);
        }
        showScroll();
    });
};

function hiddenScroll () {
    window.utill.body.setAttribute(`style`, `overflow: hidden`);
}

function showScroll () {
    window.utill.body.setAttribute(`style`, `overflow: auto`);
}

imgCatEnergy.addEventListener(`click`, () => {
    popupCatEnergy.setAttribute(`style`, `display: block`);
    hiddenScroll();
    closePopup(popupCatEnergy);
});

imgGlacy.addEventListener(`click`, () => {
    popupGlacy.setAttribute(`style`, `display: block`);
    hiddenScroll();
    closePopup(popupGlacy);
});

imgKeksBook.addEventListener(`click`, () => {
    popupKeksobooking.setAttribute(`style`, `display: block`);
    hiddenScroll();
    closePopup(popupKeksobooking);
});

function closePopup (type) {
    let closeButton = type .querySelector(`.wrapper__popup-close-button`);
    closeButton.addEventListener(`click`,  () => {
        type.setAttribute(`style`, `display: none`);
        showScroll();
    });
};
