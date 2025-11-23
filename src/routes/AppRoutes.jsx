import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UnderMaintainance from '../pages/UnderMaintainance'
import Projects from '../pages/Projects/Projects'
import Experience from '../pages/Experience'
import About from '../pages/About'
import Skills from '../pages/Skills'

const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<UnderMaintainance />}/> */}
        <Route path='/' element={<Home />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default AppRoutes
