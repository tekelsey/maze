

const maze = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '\uD83D\uDC39', ' ', ' ', ' ', ' ', '#', ' ', '\uD83C\uDF3B', '#'],
  ['#', ' ', '#', '#', ' ', '#', '#', ' ', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#', '#'],
  ['#', ' ', ' ', ' ', '#', '#', ' ', ' ', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#', '#'],
  ['#', ' ', '#', '#', ' ', '#', '#', ' ', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#', '#'],
  ['#', ' ', '#', '#', '#', '#', '#', ' ', '\uD83C\uDF3B', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];

const gerbil = {
  x: 1,
  y: 1,
};

function drawMaze() {
  const mazeTable = document.getElementById('maze');
  mazeTable.innerHTML = '';
  for (const row of maze) {
    const tr = document.createElement('tr');
    for (const cell of row) {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    }
    mazeTable.appendChild(tr);
  }
};

function move(direction) {
  const newX = gerbil.x + direction.x;
  const newY = gerbil.y + direction.y;

  if (maze[newY][newX] !== '#') {
    maze[gerbil.y][gerbil.x] = ' ';
    gerbil.x = newX;
    gerbil.y = newY;

    // Check if the gerbil is on a seed
    if (maze[gerbil.y][gerbil.x] === '\uD83C\uDF3B') {
      // Change the seed to an empty space
      maze[gerbil.y][gerbil.x] = ' ';

      // Display the "Yum!" message
      const messageElement = document.getElementById('message');
      messageElement.textContent = 'Yum!';
      setTimeout(() => {
        messageElement.textContent = '';
      }, 1000);

      // Check if all seeds are eaten
      const hasRemainingSeeds = maze.some(row => row.includes('\uD83C\uDF3B'));
      if (!hasRemainingSeeds) {
        messageElement.textContent = 'Congrats!';
      }
    }

    maze[gerbil.y][gerbil.x] = '\uD83D\uDC39';
    drawMaze();
  }
}

document.getElementById('btnUp').addEventListener('click', () => move({ x: 0, y: -1 }));
document.getElementById('btnDown').addEventListener('click', () => move({ x: 0, y: 1 }));
document.getElementById('btnLeft').addEventListener('click', () => move({ x: -1, y: 0 }));
document.getElementById('btnRight').addEventListener('click', () => move({ x: 1, y: 0 }));

drawMaze();
