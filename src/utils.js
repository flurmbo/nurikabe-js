export const isPool = (cells, width) => {
  for (let i = 0; i < cells.length - width; i++) {
    if (i + (1 % width) !== 0) {
      if (
        cells[i].filled &&
        cells[i + 1].filled &&
        cells[i + width].filled &&
        cells[i + width + 1].filled
      ) {
        return true;
      }
    }
  }
  return false;
};
export const tutorialBoards = [
  [
    {type: 'highlighted'},
    {type: 'static', filled: true},
    {type: 'static', filled: false},
    {type: 'number', value: 2},
    {type: 'static', filled: false},
    {type: 'highlighted'},
    {type: 'static', filled: true},
    {type: 'static', filled: true},
    {type: 'static', filled: false},
    {type: 'static', filled: true},
    {type: 'number', value: 1},
    {type: 'static', filled: true},
    {type: 'static', filled: false},
    {type: 'number', value: 5},
    {type: 'static', filled: true},
    {type: 'static', filled: true},
  ]
]
export const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
