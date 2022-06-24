import { useEffect, useState } from 'react'
import Square from './square/square'

const ColoredBlocks = () => {
  const [status, setStatus] = useState(false)
  const [color, setColor] = useState('color-red')

  useEffect(() => {
    status ? setColor('color-green') : setColor('color-red')
  })

  const handlerToggle = () => {
    setStatus(!status)
  }

  return (
    <div>
      <h3>Блоки, меняющие цвета</h3>
      <Square color={color} handleClick={handlerToggle} />
    </div>
  )
}

export default ColoredBlocks
