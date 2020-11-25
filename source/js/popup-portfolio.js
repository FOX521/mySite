'use strict';

let portfolio = document.querySelector(`.portfolio`);
let portfolioList = portfolio.querySelector(`.portfolio__list`);
let portfolioElement = portfolioList.querySelectorAll(`.portfolio__element`);
let imgKeksBook = portfolio.querySelector(`.portfolio__img-main-keksobooking`);
let imgCatEnergy = portfolio.querySelector(`.portfolio__img-main-cat-energy`);
let imgGlacy = portfolio.querySelector(`.portfolio__img-main-glacy`);
let popupGlacy = document.querySelector(`.wrapper-glacy`);
let popupCatEnergy = document.querySelector(`.wrapper-cat-energy`);
let popupKeksobooking = document.querySelector(`.wrapper-keksobooking`);
let wrapperPopup = document.querySelectorAll(`.wrapper__popup`);
let wrapperPopupDescribe = document.querySelectorAll(`.wrapper__popup-describe`);

for(let i = 0; i < wrapperPopup.length; i++) {
    wrapperPopup[i].addEventListener(`mousemove`, omMouseMove);
};

function omMouseMove (movEvt) {
    movEvt.preventDefault();
    
    let moveX = movEvt.clientX;
    let resultX = Math.floor(moveX);
    let closeButton = document.querySelectorAll(`.wrapper__popup-close-button`);
    if ( 500 < resultX && 1050 > resultX) {
        console.log();
        for(let i = 0; i < wrapperPopupDescribe.length; i++) {
            wrapperPopupDescribe[i].style.display = `none`;
        }
        for(let i = 0; i < closeButton.length; i++) {
            closeButton[i].classList.remove(`wrapper__popup-close-button-white`);
        }
    } else {
        for(let i = 0; i < wrapperPopupDescribe.length; i++) {
            wrapperPopupDescribe[i].style.display = `block`;
        }
        for(let i = 0; i < closeButton.length; i++) {
            closeButton[i].classList.add(`wrapper__popup-close-button-white`);
        }
    }
}

imgCatEnergy.addEventListener(`click`, function () {
    popupCatEnergy.setAttribute(`style`, `display: block`);
    closePopup(popupCatEnergy);
});

imgGlacy.addEventListener(`click`, function (evt) {
    popupGlacy.setAttribute(`style`, `display: block`);
    closePopup(popupGlacy);
});

imgKeksBook.addEventListener(`click`, function (evt) {
    popupKeksobooking.setAttribute(`style`, `display: block`);
    closePopup(popupKeksobooking);
});

function closePopup (type) {
    let closeButton = type .querySelector(`.wrapper__popup-close-button`);
    closeButton.addEventListener(`click`, function onClickClose () {
        type.setAttribute(`style`, `display: none`);
    });
};

