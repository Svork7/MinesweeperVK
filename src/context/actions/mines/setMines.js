import MINE from './mineValue'
import fieldSize from './minesQty'
import createFilledState from '../../../utils/createFilledState'

const addHints = (arr) => {
  let number
  for (let x = 0; x < fieldSize; x++) {
    for (let y = 0; y < fieldSize; y++) {
      if (arr[x][y] === MINE) continue

      number = 0

      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) continue

          if (
            x + i >= 0 &&
            x + i < fieldSize &&
            y + j >= 0 &&
            y + j < fieldSize &&
            arr[x + i][y + j] === MINE
          ) {
            number++
          }
        }
      }

      arr[x][y] = number
    }
  }
}

export const setMines = (x, y, minesQty) => {
  let arr = createFilledState(0)
  let counter = 0
  while (counter < minesQty) {
    const mineX = Math.floor(Math.random() * fieldSize)
    const mineY = Math.floor(Math.random() * fieldSize)

    if (arr[mineX][mineY] !== MINE) {
      if (mineX !== x || mineY !== y) {
        arr[mineX][mineY] = MINE
        counter++
      }
    }
  }

  addHints(arr)

  return arr
}
