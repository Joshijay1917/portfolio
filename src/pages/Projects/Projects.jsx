import React, { useState } from 'react'
import Notes4All from './Notes4All/Notes4All'
import Smart_Pay from './Smart_Pay/Smart_Pay'
import AI_Track from './AI_Track/AI_Track'
import ChatApp from './ChatApp/ChatApp'
import Spotify from './Spotify/Spotify'

const Projects = () => {
    const [AllProject, setAllProject] = useState([
        {id:0, name:"Notes4All"},
        {id:1, name:"Smart Attendance System"},
        {id:2, name:"AI Payment Tracker"},
        {id:3, name:"ChatApp"},
        {id:4, name:"Spotify"}
    ])
    const [current, setCurrent] = useState(0)
    const pages = [<Notes4All />, <Smart_Pay />, <AI_Track />, <ChatApp />, <Spotify />]

  return (
    <div className='p-30'>
      <h1 className='font-bold text-4xl'>Projects</h1>
      <div className='flex my-5 bg-gray-800 rounded-2xl shadow-sm shadow-white overflow-clip'>
        {AllProject.map(pro => (
            <p key={pro.id} onClick={()=>setCurrent(pro.id)} className={`hover:bg-gray-600 p-3 px-10 cursor-pointer ${pro.id === current ? "bg-gray-700" : ""}`}>{pro.name}</p>
        ))}
      </div>

      {pages[current]}
    </div>
  )
}

export default Projects
