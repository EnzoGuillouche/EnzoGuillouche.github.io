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

export function resetPellets() {
  for (let i = 0; i < pellets.length; i++) {
    const pellet = pellets[i];
    pellet.remove();
    pellets.splice(i, 1);
  }

  const container = document.querySelector('.pacmanAnim');
  let p1 = document.createElement('div');
  p1.className = 'pellet p1';
  container.appendChild(p1);

  let p2 = document.createElement('div');
  p2.className = 'pellet p2';
  container.appendChild(p2);

  let p3 = document.createElement('div');
  p2.className = 'pellet p3';
  container.appendChild(p3);

  pellets = [p1, p2, p3];
}