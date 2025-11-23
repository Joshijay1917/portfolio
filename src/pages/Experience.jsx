import React from 'react'

const Experience = () => {
  return (
    <div className='p-30'>
      <h1 className='font-bold text-4xl'>Experience</h1>

      <div className='bg-gray-800 p-3 rounded-2xl mt-10'>
        <h1 className='text-3xl font-medium'>Hackthon November 2025 (Code Carnival)</h1>
        <ol className='mt-2'>
            <li>I am participated in 36 hours hackthon in my city.</li>
            <li>Where i tasked to build a Smart AI Payment Tracker for SMEs.</li>
            <li>We are total 4 members in team. I am a backend developer. one for frontend development. one for Design and one for System Design.</li>
            <li>We decided to train a model in tensorflow.js.</li>
            <li>Model is trained based on customer age.</li>
        </ol>
      </div>

      <div className='bg-gray-800 p-3 rounded-2xl mt-10'>
        <h1 className='text-3xl font-medium'>Hackthon Febuary 2025 (Gardi Vidyapith Oragnised)</h1>
        <ol className='mt-2'>
            <li>I am participated in 24 hours hackthon in my city.</li>
            <li>Where i tasked to build a CRM.</li>
            <li>We are total 3 members in team. I am a backend developer. one for frontend development and one for Design.</li>
            <li>First we decided to create a minimal working prototype.</li>
        </ol>
      </div>
    </div>
  )
}

export default Experience
