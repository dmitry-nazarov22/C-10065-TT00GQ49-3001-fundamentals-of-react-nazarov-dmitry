import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginForm from './exercises/LoginForm.jsx'
import UncontrolledForm from './exercises/UncontrolledForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<LoginForm />
    <UncontrolledForm />*/}
  </StrictMode>,
)
