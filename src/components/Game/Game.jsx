import React from 'react'

import Field from '../Field/Field'
import Panel from '../Panel/Panel'
import styles from './Game.module.css'

const Game = () => {
  return (
    <main className={styles.wrapper}>
      <Panel />
      <Field />
    </main>
  )
}

export default Game
