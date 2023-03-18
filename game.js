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

  renderMaze();
  document.addEventListener('keydown', handleKeydown);
};
