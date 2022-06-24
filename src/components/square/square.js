import './square.css'

const Square = (props) => (
  <button
    aria-label="change color"
    type="button"
    className={`square ${props.color}`}
    onClick={props.handleClick}
  />
)

export default Square
