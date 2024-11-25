const box = document.querySelectorAll('.box');

// START THE GAME

window.addEventListener('DOMContentLoaded', startTheGame);

function startTheGame() {
    box[Math.floor(Math.random() * 3)].innerHTML = `
        <div class="pop-up">
            <img src="./assets/character.png" alt="character" class="pop-up-image">
        </div>`
    ;
};