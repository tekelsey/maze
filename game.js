const mazeElement = document.getElementById('maze');

const gerbil = 'G';
const seed = 'S';
const wall = '#';
const empty = ' ';

const maze = [
  [wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
  [wall, empty, empty, empty, empty, empty, empty, empty, empty, wall],
  [wall, empty, wall, wall, wall, wall, empty, wall, seed, wall],
  [wall, gerbil, wall, empty, empty, empty, empty, wall, empty, wall],
  [wall, empty, wall, wall, wall, wall, empty, wall, empty, wall],
  [wall, empty, empty, empty, empty, empty, empty, wall, empty, wall],
  [wall, empty, wall, wall, wall, wall, empty, wall, empty, wall],
  [wall, seed, wall, empty, empty, empty, empty, wall, empty, wall],
  [wall, empty, empty, empty, empty, empty, empty, empty, empty, wall],
  [wall, wall, wall, wall, wall, wall, wall, wall, wall, wall],
];

function renderMaze() {
  let mazeString = '';

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      mazeString += maze[y][x];
    }
    mazeString += '\n';
  }

  mazeElement.textContent = mazeString;
}

function findGerbil() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === gerbil) {
        return { x, y };
      }
    }
  }
}

function moveGerbil(dx, dy) {
  const { x, y } = findGerbil();
  const newX = x + dx;
  const newY = y + dy;

  if (maze[newY][newX] === wall) {
    return;
  }

  if (maze[newY][newX] === seed) {
    console.log('G
