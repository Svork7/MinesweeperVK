import React, { useContext, useEffect } from 'react'

import gameContext from '../../context'
import MINE from '../../context/actions/mines/mineValue'
import { setMines } from '../../context/actions/mines/setMines'
import { setEndGame } from '../../context/actions/game/setEndGame'
import { updateCellsState } from '../../context/actions/cells/updateCellState'
import { openNearestCells } from '../../context/actions/cells/openNearestCells'

import Mine from '../../icons/Mine'
import Flag from '../../icons/Flag'
import Question from '../../icons/Question'
import CrossedOutMine from '../../icons/CrossedOutMine'
import styles from './Cell.module.css'

const Cell = ({ x, y }) => {
  let {
    field,
    setField,
    cells,
    setCells,
    mines,
    setUserMines,

    isFirstClick,
    setIsFirstClick,
    firstCellX,
    setFirstCellX,
    firstCellY,
    setFirstCellY,

    isGameEnded,
    setIsGameEnded,

    setHoldMouseClick,
  } = useContext(gameContext)

  const cellState = cells[x][y]

  const openCells = (x, y) => {
    setCells(openNearestCells(x, y, cells, field))
  }

  const setCellState = (x, y, val) => {
    setCells(updateCellsState(x, y, cells, val))
  }

  const leftClick = () => {
    if (!isFirstClick) {
      if (cellState === 2 || cellState === 3) return

      setFirstCellX(x)
      setFirstCellY(y)

      setField(setMines(x, y, mines))

      setIsFirstClick(true)
    } else {
      if (cellState === 2 || cellState === 3 || isGameEnded) return

      if (field[x][y] === MINE) {
        setCellState(x, y, 4)
        setEndGame(setIsGameEnded, setCells, cells, field)
      } else {
        openCells(x, y)
      }
    }
  }

  const rightClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (cellState === 0) {
      setCellState(x, y, 2)
      setUserMines((prev) => prev - 1)
    }
    if (cellState === 2) {
      setCellState(x, y, 3)
      setUserMines((prev) => prev + 1)
    }
    if (cellState === 3) {
      setCellState(x, y, 0)
    }
  }

  const auxClick = (e) => {
    if (isGameEnded) return
    if (e.button === 0) {
      setHoldMouseClick(true)
    }
  }

  useEffect(() => {
    if (isFirstClick && x === firstCellX && y === firstCellY) {
      openCells(firstCellX, firstCellY)

      setFirstCellX(null)
      setFirstCellY(null)
    }
  }, [isFirstClick])

  const componentClasses = [styles.cell]
  if (cellState === 0) {
    componentClasses.push(styles.closed)
  }
  if (cellState === 2 || cellState === 3) {
    componentClasses.push(styles.flagged)
  }
  if (cellState === 4) {
    componentClasses.push(styles.exploded)
  }

  if (field[x][y] === 1) componentClasses.push(styles.blue)
  if (field[x][y] === 2) componentClasses.push(styles.green)
  if (field[x][y] === 3) componentClasses.push(styles.red)
  if (field[x][y] === 4) componentClasses.push(styles.darkblue)
  if (field[x][y] === 5) componentClasses.push(styles.brown)
  if (field[x][y] === 6) componentClasses.push(styles.cyan)
  if (field[x][y] === 7) componentClasses.push(styles.dark)
  if (field[x][y] === 8) componentClasses.push(styles.gray)

  const handleContent = () => {
    if (field[x][y] === MINE) {
      return <Mine svgSize={25} />
    } else {
      if (field[x][y] !== 0) return field[x][y]
    }
  }

  return (
    <div
      className={componentClasses.join(' ')}
      onContextMenu={(e) => rightClick(e)}
      onMouseDown={(e) => auxClick(e)}
      onMouseUp={(e) => {
        setHoldMouseClick(false)
        if (e.button === 0) leftClick()
      }}
    >
      {cellState === 0 && ' '}
      {cellState === 1 && handleContent()}
      {cellState === 2 && <Flag svgSize={30} />}
      {cellState === 3 && <Question svgSize={30} />}
      {cellState === 4 && handleContent()}
      {cellState === 5 && <CrossedOutMine svgSize={30} />}
    </div>
  )
}

export default Cell
