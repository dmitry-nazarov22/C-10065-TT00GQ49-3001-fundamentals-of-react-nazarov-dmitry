import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './exercises/greeting.jsx'
import ToggleButton from './exercises/toggle.jsx'
import NameForm from './exercises/showInput.jsx'
import TitleUpdater from './exercises/titleUpdater.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Message name="Dmitry" />
    <ToggleButton />
    <NameForm />
    <TitleUpdater />
  </StrictMode>,
)
