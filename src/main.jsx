import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnimeProvider } from './context/AnimeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AnimeProvider>
    <App />
  </AnimeProvider>
)
