import { useContext } from 'react'

import gameContext from '../../context'
import createFilledState from '../../utils/createFilledState'

import './Button.module.css'

const Button = ({ children }) => {
  let {
    setField,
    setCells,
    mines,

    setUserMines,
    setIsFirstClick,
    setFirstCellX,
    setFirstCellY,
    setIsGameEnded,
    setIsWin,

    timer,
  } = useContext(gameContext)

  const newGame = () => {
    setField(createFilledState(0))
    setCells(createFilledState(0))

    setIsFirstClick(null)
    setFirstCellX(null)
    setFirstCellY(null)

    setIsGameEnded(false)
    setIsWin(false)

    setUserMines(mines)

    clearInterval(timer.current)
    timer.current = {}
  }

  return <button onClick={newGame}>{children}</button>
}

export default Button
