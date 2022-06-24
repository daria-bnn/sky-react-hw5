import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Article from './components/article'
import ColoredBlocks from './components/colored-blocks'
import CounterInput from './components/counter-input'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <Article />
    <ColoredBlocks />
    <CounterInput min={-10} max={30} />
  </React.StrictMode>
)
