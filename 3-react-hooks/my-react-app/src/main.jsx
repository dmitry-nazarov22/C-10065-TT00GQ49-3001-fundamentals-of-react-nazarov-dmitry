import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './exercises/Counter.jsx'
import Focus from './exercises/Focus.jsx'
import Timer from './exercises/Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <Focus />
    <Timer />
  </StrictMode>,
)
