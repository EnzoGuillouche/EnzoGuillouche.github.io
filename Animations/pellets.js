let pellets = [
  document.getElementsByClassName(`p1`)[0],
  document.getElementsByClassName(`p2`)[0],
  document.getElementsByClassName(`p3`)[0],
  document.getElementsByClassName(`p4`)[0],
  document.getElementsByClassName(`p5`)[0],
  document.getElementsByClassName(`p6`)[0],
  document.getElementsByClassName(`p7`)[0],
  document.getElementsByClassName(`p8`)[0],
  document.getElementsByClassName(`p9`)[0],
  document.getElementsByClassName(`p10`)[0],
  document.getElementsByClassName(`p11`)[0],
  document.getElementsByClassName(`p12`)[0],
];

export function checkPellets() {
  let pacObj = document.querySelector('.pacman').getBoundingClientRect();
  let pacX = pacObj.left + window.scrollX;
  let pacY = pacObj.top + window.scrollY;
  let pacmanWidth = 5 * parseFloat(window.getComputedStyle(document.querySelector('.pacman')).fontSize);

  pellets.slice().forEach((pellet, index) => {
    if (!pellet) return;

    let pelletObj = pellet.getBoundingClientRect();
    let pelletX = pelletObj.left + window.scrollX;
    let pelletY = pelletObj.top + window.scrollY;
    let pelletWidth = 1 * parseFloat(window.getComputedStyle(pellet).fontSize);
    
    if (pelletX >= pacX && pelletX+pelletWidth <= pacX+pacmanWidth && pelletY >= pacY && pelletY+pelletWidth <= pacY+pacmanWidth) {
      console.log(`ate a pellet`);
      pellet.remove();
      pellets.splice(index, 1);
    }
  });
}

export function resetPellets(pacman) {
  const container = document.querySelector('.pacmanAnim');

  // empty the container
  container.innerHTML = '';

  // then reassign everything
  container.appendChild(pacman);

  for (let i = 1; i <= 12; i++) {
    const pellet = document.createElement('div');
    pellet.className = `pellet p${i}`;
    container.appendChild(pellet);
    pellets.push(pellet);
  }
}