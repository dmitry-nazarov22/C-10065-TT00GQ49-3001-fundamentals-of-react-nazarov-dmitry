import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParentChild from './exercises/ParentChild.jsx'
import Welcome from './exercises/Welcome.jsx'
import IncrementParent from './exercises/Increment.jsx'
import StyledBox from './exercises/StyledBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<Welcome />
    <ParentChild />
    <IncrementParent />
    <StyledBox />
    */}
  </StrictMode>,
)
