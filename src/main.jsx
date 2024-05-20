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
import BackToTopButton from './components/BackToTopButton.jsx'
import CustomCursor from './components/CustomCursor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Collobarate />
    <News />
    <About />
    <OurTeam />
    <BackToTopButton />
    <CustomCursor />
  </React.StrictMode>,
)
