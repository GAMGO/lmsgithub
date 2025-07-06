import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Box from './Box.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box />
  </StrictMode>,
)
