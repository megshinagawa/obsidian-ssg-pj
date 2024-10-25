import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './components/content/Content.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Meg's Second Brain</h1>
    <Content />
  </StrictMode>,
)
