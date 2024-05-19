import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { NavBar } from './components/NavBar.jsx'
import { Header } from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Header />
  </React.StrictMode>,
)
