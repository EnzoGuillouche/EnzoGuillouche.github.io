import { checkPellets, resetPellets } from './pellets.js';

const pacman = document.querySelector('.pacman');
let pacmanDirection = 1; // 0 = top, 1 = right, 2 = bottom, 3 = left

let pacmanPos = [0, 0];
let maxMovement = 15;

function getRotationDeg() {
    switch (pacmanDirection) {
        case 0: return -90; // up
        case 1: return 0;   // right
        case 2: return 90;  // down
        case 3: return 180; // left
    }
}

function updatePacmanTransform() {
    const x = pacmanPos[0];
    const y = pacmanPos[1];
    const angle = getRotationDeg();

    pacman.style.transition = 'transform 3s linear';
    pacman.style.transform = `translate(${x}em, ${y}em) rotate(${angle}deg)`;
}

function animate() {
    
    switch (pacmanDirection) {
        case 0: pacmanPos[1] -= maxMovement; break; // up
        case 1: pacmanPos[0] += maxMovement; break; // right
        case 2: pacmanPos[1] += maxMovement; break; // down
        case 3: pacmanPos[0] -= maxMovement; break; // left
    }
    updatePacmanTransform();
}

function setupAnimationListener() {
    pacman.addEventListener('transitionend', () => {
        if (pacmanDirection === 0) resetPellets(pacman);
        pacmanDirection = (pacmanDirection + 1) % 4;

        const x = pacmanPos[0];
        const y = pacmanPos[1];
        const angle = getRotationDeg();

        pacman.style.transition = 'none';
        pacman.style.transform = `translate(${x}em, ${y}em) rotate(${angle}deg)`;

        setTimeout(animate, 1);
    });
}

export function animatePacman() {
    setupAnimationListener();
    setTimeout(animate, 1);
    setInterval(checkPellets, 100);
}
