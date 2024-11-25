const box = document.querySelectorAll('.box');

// START THE GAME

window.addEventListener('DOMContentLoaded', startTheGame);

function startTheGame() {
    box[Math.floor(Math.random() * 4)].innerHTML = `
        <div class="pop-up">
            <img src="./assets/character.png" alt="character" class="pop-up-image">
        </div>`
    ;
    const popUp = document.querySelector('.pop-up');
    popUp.addEventListener('click', () => {
        for (const boxes of box) {
            boxes.innerHTML = '';
        };
        console.log('Caught');
        box[Math.floor(Math.random() * 4)].innerHTML = `
        <div class="pop-up">
            <img src="./assets/character.png" alt="character" class="pop-up-image">
        </div>`
        ;
    });
};