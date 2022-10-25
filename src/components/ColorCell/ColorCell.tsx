import classnames from 'classnames-creator'
import { useState } from 'react'
import styles from './ColorCell.module.scss'
const ColorCell = ({ color, percent }: { color: string; percent?: string }) => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  const handleClick = () => {
    navigator.clipboard.writeText(color)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 2000)
  }

  return (
    <div className={styles.container}>
      {percent && <p className={styles.number}>{`${percent}%`}</p>}

      <div
        className={classnames(styles.cell, { [styles['cell--copied']]: clicked, [styles['cell--copy']]: isHovering })}
        style={{ '--content': `${color}` } as React.CSSProperties}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      <p className={styles.text}>{color}</p>
    </div>
  )
}

export default ColorCell