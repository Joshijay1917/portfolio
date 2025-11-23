import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className='z-30 fixed left-1/4 bg-gray-500/50 text-white w-1/2 mx-auto rounded-b-4xl'>
      <ul className='flex justify-between gap-3'>
        <li className='hover:bg-gray-500 p-3 px-10 cursor-pointer rounded-bl-4xl' onClick={()=>navigate("/")}>Home</li>
        <li className='hover:bg-gray-500 p-3 px-10 cursor-pointer' onClick={()=>navigate("/experience")}>Experience</li>
        <li className='hover:bg-gray-500 p-3 px-10 cursor-pointer' onClick={()=>navigate('#skill')}>Skills</li>
        <li className='hover:bg-gray-500 p-3 px-10 cursor-pointer' onClick={()=>navigate("/projects")}>Projects</li>
        <li className='hover:bg-gray-500 p-3 px-10 cursor-pointer rounded-br-4xl' onClick={()=>navigate("/about")}>About Me</li>
      </ul>
    </nav>
  )
}

export default Navbar
