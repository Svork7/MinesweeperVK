import MINE from '../../actions/mines/mineValue'
import fieldSize from '../../actions/mines/minesQty'

export const checkIsGameEnded = (
  field,
  cells,
  mines,
  setIsGameEnded,
  setIsWin
) => {
  let openedCellsCounter = 0

  for (let x = 0; x < fieldSize; x++) {
    for (let y = 0; y < fieldSize; y++) {
      if (field[x][y] !== MINE) {
        if (cells[x][y] === 1) {
          openedCellsCounter++
        } else {
          return
        }
      }
    }
  }

  if (openedCellsCounter === fieldSize * fieldSize - mines) {
    setIsGameEnded(true)
    setIsWin((prev) => !prev)
  }
}
