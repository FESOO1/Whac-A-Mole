const box = document.querySelectorAll('.box');
let gamePoints = 0;

// START THE GAME

window.addEventListener('DOMContentLoaded', startTheGame);

function startTheGame() {
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up')
    popUp.innerHTML = `
        <img draggable="false" src="./assets/character.png" alt="character" class="pop-up-image">
    `;
    setInterval(() => {
        popUp.classList.remove('shot');
        box[Math.floor(Math.random() * 4)].appendChild(popUp);
    }, 500);

    popUp.addEventListener('click', () => {
        gamePoints += 100;
        console.log('Game Points: ' + gamePoints);
        popUp.classList.add('shot');
    });
};