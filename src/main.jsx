import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header' */
import Registro from './pages/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registro/>
  </StrictMode>,
)
