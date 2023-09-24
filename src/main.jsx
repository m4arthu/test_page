import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Reset_css } from './styles/reset-css.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset_css/>
    <App />
  </React.StrictMode>,
)
