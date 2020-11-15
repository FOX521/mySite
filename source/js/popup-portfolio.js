'use strict';

let portfolio = document.querySelector(`.portfolio`);
let imgKeksBook = portfolio.querySelector(`.portfolio__img-main-keksobooking`);
let imgCatEnergy = portfolio.querySelector(`.portfolio__img-main-cat-energy`);
let imgGlacy = portfolio.querySelector(`.portfolio__img-main-glacy`);
let popupGlacy = document.querySelector(`.wrapper-glacy`);
let popupCatEnergy = document.querySelector(`.wrapper-cat-energy`);
let popupKeksobooking = document.querySelector(`.wrapper-keksobooking`);

imgCatEnergy.addEventListener(`click`, function () {
    popupCatEnergy.setAttribute(`style`, `display: block`);
    closePopup(popupCatEnergy);
});

imgGlacy.addEventListener(`click`, function (evt) {
    popupGlacy.setAttribute(`style`, `display: block`);
    closePopup(popupGlacy);
});

imgKeksBook.addEventListener(`click`, function () {
    popupKeksobooking.setAttribute(`style`, `display: block`);
    closePopup(popupKeksobooking);
});

function closePopup (type) {
    let closeButton = type .querySelector(`.wrapper__popup-close-button`);
    closeButton.addEventListener(`click`, function onClickClose () {
        type.setAttribute(`style`, `display: none`);
    });
};