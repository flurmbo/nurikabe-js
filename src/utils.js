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
export const tutorialContent = [
  {
    board: {
      cells: [
      {type: 'highlighted'},
      {type: 'highlighted'},
      {type: 'highlighted'},
      {type: 'static', filled: false},
      {type: 'static', filled: true},
      {type: 'static', filled: false},
      {type: 'number', value: 3},
      {type: 'static', filled: true},
      {type: 'number', value: 3},
    ],
    width: 3,
    height: 3
  },
    text: "First step in tutorial"
  },
  {
  board: {
    cells: [
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
  ],
  width: 4,
  height: 4
},
  text: "The puzzle below is almost complete. All that is left is to fill in one of the highlighted cells"
  + "so the the '5' in the bottom-left corner is complete. Which one should be filled"
  + "so that the sea stays connected?"
}
];

export const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
