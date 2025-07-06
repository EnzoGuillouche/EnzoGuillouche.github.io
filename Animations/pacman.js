let pacman = document.getElementsByClassName(`pacman`)[0];

let pellets = [];
pellets.push(document.getElementsByClassName(`p1`)[0]);
pellets.push(document.getElementsByClassName(`p2`)[0]);

function getPacmanWidth() {
    const pacmanStyle = window.getComputedStyle(pacman);
    const fontSize = parseFloat(pacmanStyle.fontSize); // px value of 1em
    return 2.5 * fontSize; // 2.5 which is the pacman object width in the css
}

function checkPellets() {
    let pacObj = pacman.getBoundingClientRect();
    let pacX = pacObj.left + window.scrollX;

    const pacmanWidth = getPacmanWidth();

    pellets.slice().forEach((pellet, index) => {
        if (!pellet) return;

        let pelletObj = pellet.getBoundingClientRect();
        let pelletX = pelletObj.left + window.scrollX;

        if (pacX + pacmanWidth >= pelletX) {
            console.log(`ate a pellet`);
            pellet.remove();
            pellets.splice(index, 1);
        }
    });
}

function resetPellets() {
    // recreate pellets in the DOM
    const container = document.querySelector('.pacmanAnim') || document.body;

    const p1 = document.createElement('div');
    p1.className = 'pellet p1';
    container.appendChild(p1);

    const p2 = document.createElement('div');
    p2.className = 'pellet p2';
    container.appendChild(p2);

    pellets = [p1, p2];
}

function setupAnimationListener() {
    pacman.addEventListener('animationiteration', (event) => {
        if (event.animationName === 'move-pacman') {
            console.log(`'move-pacman' looped — resetting pellets`);
            resetPellets();
        }
    });
}

export function animatePacman() {
    setupAnimationListener();
    setInterval(checkPellets, 100); 
}
