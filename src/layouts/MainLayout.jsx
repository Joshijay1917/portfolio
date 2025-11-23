import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({ children }) => {
  return (
    <div className='bg-[url("/bg3.png")] bg-cover text-white min-h-screen w-full'>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default MainLayout
