import React from 'react'

const About = () => {
  return (
    <div className='p-30'>
      <h1 className='text-4xl font-bold'>About me</h1>

      <div className='flex flex-col gap-3 items-center'>
      <img width={400} height={400} src="me.jpg" className='rounded-full' />
      <p className='text-4xl font-medium'>Joshi Jay</p>
      </div>

      <div className='bg-gray-900 rounded-2xl p-5 mt-10'>
        <h1 className='text-3xl'>Personal Info</h1>

        <div className='grid grid-cols-2 w-[55%] gap-3 mx-20 mt-5 text-xl'>
            <label>Full Name:</label>
            <p>Joshi Jay Krushnakumar</p>
            <label>Mail:</label>
            <p>jayjoshi1912007@gmail.com</p>
            <label>Contact:</label>
            <p>9106052826</p>
            <label>Address:</label>
            <p>Kothariya, Rajkot, Gujarat - 360022</p>
        </div>
      </div>

      <div className='bg-gray-900 rounded-2xl p-5 mt-10'>
        <h1 className='text-3xl'>Education</h1>

        <div className='grid grid-cols-2 w-[55%] gap-3 mx-20 mt-5 text-xl'>
            <label>College:</label>
            <p>V.V.P. Engineering College</p>
            <label>CGPA:</label>
            <p>9.13</p>
            <label>Current Year:</label>
            <p>2nd</p>
        </div>
      </div>
    </div>
  )
}

export default About
