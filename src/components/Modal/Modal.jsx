import React, { useState, useContext, useEffect } from 'react'
import gameContext from '../../context'

import styles from './Modal.module.css'

const Modal = () => {
  const { isGameEnded, isWin } = useContext(gameContext)

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isGameEnded) {
      setVisible(false)
    } else {
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 2000)
    }
  }, [isGameEnded])

  return (
    <div className={visible === true ? styles.modalActive : styles.modal}>
      <div className={styles.modalContent}>
        {isWin ? 'You won!😎' : 'You lost!🙁'}
      </div>
    </div>
  )
}

export default Modal
