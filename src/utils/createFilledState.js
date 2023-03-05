import fieldSize from '../context/actions/mines/minesQty'

const createFilledState = (content) => {
  let arr = Array(fieldSize)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(fieldSize).fill(content)
  }

  return arr
}

export default createFilledState
