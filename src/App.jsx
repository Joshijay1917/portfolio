import { useState } from 'react'
import './App.css'
import { HiAcademicCap } from 'react-icons/hi'
import { SiBasicattentiontoken, SiSmartthings } from 'react-icons/si'
import { IoChatbubble, IoChatbubbles } from 'react-icons/io5'
import { FaSpotify } from 'react-icons/fa'

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🚧 Site Under Maintenance 🚧</h1>
      <p className="text-lg mb-6">We're currently working on updates. Please check back soon!</p>
      <h3>Visit My Hosted Project</h3>
      <div className="flex gap-3 mt-5 w-[40%] justify-center flex-wrap">

        <a
          href="https://study-frontend-iota.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 items-center gap-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
        <HiAcademicCap className='text-2xl'/>  Study Website
        </a>
        <a
          href="https://smart-attendance-system-snowy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 items-center gap-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
        <SiBasicattentiontoken className='text-2xl'/>  Smart Attendance System
        </a>
        <a
          href="https://smart-payment-tracker-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 items-center gap-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
        <SiSmartthings className='text-2xl'/>  Smart AI Payment Tracker
        </a>
        <a
          href="https://chat-app-blush-eight-56.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 items-center gap-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
        <IoChatbubbles className='text-2xl'/>  ChatApp
        </a>
        <a
          href="https://joshijay1917.github.io/site"
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-3 items-center gap-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
        <FaSpotify className='text-2xl'/>  Spotify
        </a>
      </div>
    </div>
  )
}

export default App
