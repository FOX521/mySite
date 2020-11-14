'use strict';

let nav = document.querySelector(`.nav`);
let navButton = document.querySelector(`.nav__button`);

navButton.addEventListener(`click`, function () {
    if(nav.classList.contains(`nav__opened`)) {
        nav.classList.add(`nav__closed`);
        nav.classList.remove(`nav__opened`);
    } else {
        nav.classList.remove(`nav__closed`);
        nav.classList.add(`nav__opened`);
    }
});

(function () {
    nav.classList.add(`nav__closed`);
    nav.classList.remove(`nav__opened`);
})();