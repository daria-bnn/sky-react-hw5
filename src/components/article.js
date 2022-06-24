import { useState } from 'react'

const Text = (props) => {
  if (!props.toggled) {
    return null
  }
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes...
    </p>
  )
}

const Article = () => {
  const [statusShow, setStatus] = useState(false)

  const handleToggle = () => {
    setStatus(!statusShow)
  }

  return (
    <div>
      <h3>Header</h3>
      <Text toggled={statusShow} />
      <button type="button" onClick={handleToggle}>
        {statusShow ? 'hide' : 'show'}
      </button>
    </div>
  )
}

export default Article
