import MINE from '../../actions/mines/mineValue'
import fieldSize from '../../actions/mines/minesQty'
import { getCopyOfState } from '../../../utils/getCopyOfState'

export const openNearestCells = (x, y, cells, field) => {
  let arr = getCopyOfState(cells)

  const stack = [{ x, y }]
  let candidates

  while (stack.length !== 0) {
    const element = stack.pop()
    const curX = element.x,
      curY = element.y

    if (field[curX][curY] !== MINE) {
      arr[curX][curY] = 1

      if (field[curX][curY] !== 0) break
    }

    candidates = []
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) continue

        if (
          curX + i >= 0 &&
          curX + i < fieldSize &&
          curY + j >= 0 &&
          curY + j < fieldSize
        ) {
          candidates.push({ x: curX + i, y: curY + j })
        }
      }
    }

    for (let candidate of candidates) {
      if (
        field[candidate.x][candidate.y] === 0 &&
        arr[candidate.x][candidate.y] === 0
      ) {
        stack.push({ ...candidate })
      } else {
        if (field[candidate.x][candidate.y] !== MINE)
          arr[candidate.x][candidate.y] = 1
      }
    }
  }

  return arr
}
