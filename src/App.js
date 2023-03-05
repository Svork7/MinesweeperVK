import React, { useRef, useState } from 'react'
import gameContext from './context'
import createFilledState from './utils/createFilledState'
import Game from './components/Game/Game'
import Modal from './components/Modal/Modal'
import './App.css'

const App = () => {
  const [field, setField] = useState(createFilledState(0))
  const [cells, setCells] = useState(createFilledState(0))

  const [mines, setMines] = useState(40)
  const [userMines, setUserMines] = useState(mines)

  const [isFirstClick, setIsFirstClick] = useState(null)
  const [firstCellX, setFirstCellX] = useState(null)
  const [firstCellY, setFirstCellY] = useState(null)

  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isWin, setIsWin] = useState(false)

  const [holdMouseClick, setHoldMouseClick] = useState(false)

  const timer = useRef({})

  return (
    <gameContext.Provider
      value={{
        field: field,
        cells: cells,
        mines: mines,
        userMines: userMines,

        isFirstClick: isFirstClick,
        firstCellX: firstCellX,
        firstCellY: firstCellY,

        isGameEnded: isGameEnded,
        isWin: isWin,

        holdMouseClick: holdMouseClick,

        timer: timer,

        setField: setField,
        setCells: setCells,
        setUserMines: setUserMines,

        setIsFirstClick: setIsFirstClick,
        setFirstCellX: setFirstCellX,
        setFirstCellY: setFirstCellY,

        setIsGameEnded: setIsGameEnded,
        setIsWin: setIsWin,

        setHoldMouseClick: setHoldMouseClick,
      }}
    >
      <div
        className="GlobalEventWrapper"
        onMouseUp={() => setHoldMouseClick(false)}
      >
        <Game />
        <Modal />
      </div>
    </gameContext.Provider>
  )
}

export default App
