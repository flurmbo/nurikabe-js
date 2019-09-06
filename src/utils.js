export const findPool = (cells, width) => {
  for (let i = 0; i < cells.length - width; i++) {
    if (i + 1 % width !== 0) {
      if (cells[i].filled && cells[i + 1].filled && cells[i + width].filled && cells[i + width + 1].filled) {
        return true;
      }
    }
  }
  return false
}