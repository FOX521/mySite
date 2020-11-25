const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;
if (windowInnerWidth <= 1000) {
    let skills = document.querySelector(`.skills`);
    let skillsElement = skills.querySelectorAll(`.skills__element`);
    for(let i = 0; i < skillsElement.length; i++) {
        skillsElement[i].addEventListener(`click`, (evt) => {
            evt.stopPropagation();
            let skillsListBlock = evt.currentTarget.querySelector(`.skills__list-block`);
            skillsListBlock.setAttribute(`style`,`display:block`);
            let skillsCloseButton = skillsListBlock.querySelector(`.skills__button-close`);     
            skillsCloseButton.addEventListener(`click`, (evt) =>  {
                evt.stopPropagation();
                skillsListBlock.setAttribute(`style`,`display:none`)
            }); 
        });
    };
};