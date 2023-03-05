import MINE from '../mines/mineValue'
import fieldSize from '../mines/minesQty'
import { getCopyOfState } from '../../../utils/getCopyOfState'

export const setEndGame = (setIsGameEnded, setCells, cells, field) => {
  setIsGameEnded(true)

  let arr = getCopyOfState(cells)

  for (let i = 0; i < fieldSize; i++) {
    for (let j = 0; j < fieldSize; j++) {
      if (field[i][j] === MINE && cells[i][j] === 0) {
        arr[i][j] = 1
      }

      if (field[i][j] !== MINE && cells[i][j] === 2) {
        arr[i][j] = 5
      }
    }
  }

  setCells(arr)
}
