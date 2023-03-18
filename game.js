const mazeElement = document.getElementById('maze');

const gerbil = 'G';
const seed = 'S';
const wall = '#';
const empty = ' ';

const maze = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', 'G', ' ', ' ', ' ', ' ', '#', ' ', 'S', '#'],
  ['#', ' ', '#', '#', ' ', '#', '#', ' ', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#', '#'],
  ['#', ' ', ' ', ' ', '#', '#', ' ', ' ', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#', '#'],
  ['#', ' ', '#', '#', ' ', '#', '#', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#'],
  ['#', ' ', '#', '#', '#', '#', '#', ' ', 'S', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];


function renderMaze() {
  mazeElement.innerHTML = '';

  for (let y = 0; y < maze.length; y++) {
    const row = document.createElement('tr');
    for (let x = 0; x < maze[y].length; x++) {
      const cell = document.createElement('td');
      cell.textContent = maze[y][x];
      row.appendChild(cell);
    }
    mazeElement.appendChild(row);
  }
};

function handleKeydown(event) {
  let dx = 0;
  let dy = 0;

  switch (event.key) {
    case 'ArrowUp':
      dy = -1;
      break;
    case 'ArrowDown':
      dy = 1;
      break;
    case 'ArrowLeft':
      dx = -1;
      break;
    case 'ArrowRight':
      dx = 1;
      break;
    default:
      return;
  }

  event.preventDefault();
  moveGerbil(dx, dy);
};

function moveGerbil(dx, dy) {
  const gerbilPos = findGerbil();
  const targetX = gerbilPos.x + dx;
  const targetY = gerbilPos.y + dy;

  const targetCell = maze[targetY] && maze[targetY][targetX];
  if (targetCell === seed) {
    maze[targetY][targetX] = empty;
  } else if (targetCell !== empty) {
    return;
  }

  maze[gerbilPos.y][gerbilPos.x] = empty;
  maze[targetY][targetX] = gerbil;

  renderMaze();
};

function findGerbil() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === gerbil) {
        return { x, y };
      }
    }
  }
};

renderMaze();
document.addEventListener('keydown', handleKeydown);

window.onload = function () {
  const btnUp = document.getElementById('btnUp');
  const btnDown = document.getElementById('btnDown');
  const btnLeft = document.getElementById('btnLeft');
  const btnRight = document.getElementById('btnRight');

  btnUp.addEventListener('click', () => moveGerbil(0, -1));
  btnDown.addEventListener('click', () => moveGerbil(0, 1));
  btnLeft.addEventListener('click', () => moveGerbil(-1, 0));
  btnRight.addEventListener('click', () => moveGerbil(1, 0));
};
