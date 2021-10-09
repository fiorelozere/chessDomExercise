import './style.css';

const blankTable = () => [
  ['white', 'black', 'white', 'black', 'white', 'black', 'white', 'black'],
  ['black', 'white', 'black', 'white', 'black', 'white', 'black', 'white'],
  ['white', 'black', 'white', 'black', 'white', 'black', 'white', 'black'],
  ['black', 'white', 'black', 'white', 'black', 'white', 'black', 'white'],
  ['white', 'black', 'white', 'black', 'white', 'black', 'white', 'black'],
  ['black', 'white', 'black', 'white', 'black', 'white', 'black', 'white'],
  ['white', 'black', 'white', 'black', 'white', 'black', 'white', 'black'],
  ['black', 'white', 'black', 'white', 'black', 'white', 'black', 'white'],
];

const findRedBoxes = (coords) => {
  const x = +coords[0];
  const y = +coords[1];

  const newTable = blankTable();
  let xCounter = 0;
  let yCounter = 0;
  newTable[x][y] = 'red';
  while (xCounter <= 7 && yCounter <= 7) {
    if (x - xCounter >= 0 && y - yCounter <= 7) {
      newTable[x - xCounter][y - yCounter] = 'red';
    }
    if (x + xCounter <= 7 && y + yCounter <= 7) {
      newTable[x + xCounter][y + yCounter] = 'red';
    }
    if (x - xCounter >= 0 && y + yCounter <= 7) {
      newTable[x - xCounter][y + yCounter] = 'red';
    }
    if (x + xCounter <= 7 && y - yCounter >= 0) {
      newTable[x + xCounter][y - yCounter] = 'red';
    }
    xCounter += 1;
    yCounter += 1;
  }
  return newTable;
};

const render = (newTable, coords) => {
  const flatTable = newTable.reduce(function (prev, next) {
    return prev.concat(next);
  });
  boxes.forEach((box, index) => {
    box.classList.remove(...box.classList);
    box.classList.add('box');
    box.classList.add(flatTable[index]);
    const boxcoords = box.id.split(',');
    if (
      coords &&
      +boxcoords[0] === +coords[0] &&
      +boxcoords[1] === +coords[1]
    ) {
      box.classList.add('active');
    }
  });
};

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    render(blankTable(), null);
    const coords = box.id.split(',');
    const newTable = findRedBoxes(coords);
    render(newTable, coords);
  });
});
