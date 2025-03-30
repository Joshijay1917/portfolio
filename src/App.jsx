import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🚧 Site Under Maintenance 🚧</h1>
      <p className="text-lg mb-6">We're currently working on updates. Please check back soon!</p>
      <h3>Visit My Hosted Project</h3>
      <div className="flex gap-3">

      <a
        href="https://chat-app-blush-eight-56.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-2 py-2 my-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
        ChatApp
      </a>
      <a
        href="https://joshijay1917.github.io/site" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-2 py-2 my-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
        Spotify
      </a>
      </div>
    </div>
  )
}

export default App
