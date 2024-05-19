import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { NavBar } from './components/NavBar.jsx'
import { Header } from './components/Header.jsx'
import { Collobarate } from './components/Collobarate.jsx'
import { News } from './components/News.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Collobarate />
    <News />
  </React.StrictMode>,
)
