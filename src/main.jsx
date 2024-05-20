import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import './js/mouseScroll.js'
import { NavBar } from './components/NavBar.jsx'
import { Header } from './components/Header.jsx'
import { Collobarate } from './components/Collobarate.jsx'
import { News } from './components/News.jsx'
import { OurTeam } from './components/OurTeam.jsx'
import { About } from './components/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Collobarate />
    <News />
    <About />
    <OurTeam />
  </React.StrictMode>,
)
