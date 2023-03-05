import React, { useEffect, useContext } from 'react'

import gameContext from '../../context'
import { checkIsGameEnded } from '../../context/actions/game/checkIsGameEnded'

import Cell from '../Cell/Cell'
import styles from './Field.module.css'

const Field = () => {
  let {
    field,
    cells,
    setCells,
    mines,
    isGameEnded,
    setIsGameEnded,
    setIsWin,
    isFirstClick,
  } = useContext(gameContext)

  const gameEndCheck = () => {
    checkIsGameEnded(field, cells, mines, setIsGameEnded, setCells, setIsWin)
  }

  useEffect(() => {
    if (!isGameEnded && isFirstClick) {
      gameEndCheck()
    }
  }, [cells])

  return (
    <section className={styles.field}>
      {field.map((row, indexRow) => (
        <div key={indexRow + Date.now()} className={styles.row}>
          {row.map((cell, indexColumn) => (
            <Cell key={indexColumn + Date.now()} x={indexRow} y={indexColumn} />
          ))}
        </div>
      ))}
    </section>
  )
}

export default Field
