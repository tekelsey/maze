const gerbil = 'G';
const seed = 'S';
const wall = '#';
const empty = ' ';

// ... rest of the code ...

window.onload = function () {
  const btnUp = document.getElementById('btnUp');
  const btnDown = document.getElementById('btnDown');
  const btnLeft = document.getElementById('btnLeft');
  const btnRight = document.getElementById('btnRight');

  btnUp.addEventListener('click', () => moveGerbil(0, -1));
  btnDown.addEventListener('click', () => moveGerbil(0, 1));
  btnLeft.addEventListener('click', () => moveGerbil(-1, 0));
  btnRight.addEventListener('click', () => moveGerbil(1, 0));

function renderMaze() {
  let mazeString = '';

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      mazeString += maze[y][x];
    }
    mazeString += '<br>'; // Use a line break instead of '\n'
  }

  mazeElement.innerHTML = mazeString; // Use innerHTML instead of textContent
}


  renderMaze();
  document.addEventListener('keydown', handleKeydown);
};
