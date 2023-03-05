import React, { useContext } from 'react'

import gameContext from '../../context'

import Timer from '../Timer/Timer'
import Button from '../Button/Button'
import SadFace from '../../icons/SadFace'
import GlassesFace from '../../icons/GlassesFace'
import SmilingFace from '../../icons/SmilingFace'
import ImpressedFace from '../../icons/ImpressedFace'
import styles from './Panel.module.css'

const Panel = () => {
  let { userMines, isGameEnded, isWin, holdMouseClick } =
    useContext(gameContext)

  return (
    <section className={styles.panel}>
      <div className={styles.minesCounter}>{userMines}</div>

      <div className={styles.reload}>
        <Button>
          {!isGameEnded && !holdMouseClick && <SmilingFace svgSize={45} />}

          {isWin && !holdMouseClick && <GlassesFace svgSize={45} />}

          {isGameEnded && !isWin && !holdMouseClick && <SadFace svgSize={45} />}

          {holdMouseClick && !isGameEnded && !isWin && (
            <ImpressedFace svgSize={45} />
          )}
        </Button>
      </div>

      <Timer />
    </section>
  )
}

export default Panel
