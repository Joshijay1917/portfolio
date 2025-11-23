import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import UnderMaintainance from '../pages/UnderMaintainance'
import Projects from '../pages/Projects/Projects'
import Experience from '../pages/Experience'

const AppRoutes = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<UnderMaintainance />}/> */}
        <Route path='/' element={<Home />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<Home />}/>
    </Routes>
  )
}

export default AppRoutes
