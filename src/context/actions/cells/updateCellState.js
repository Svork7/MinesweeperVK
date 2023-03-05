import { getCopyOfState } from '../../../utils/getCopyOfState'

export const updateCellsState = (x, y, state, value) => {
  let arr = getCopyOfState(state)
  arr[x][y] = value
  return arr
}
