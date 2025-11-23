import React from 'react'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'

const Home = () => {
  return (
    <div>

    <div className='min-h-screen flex flex-col justify-center pt-30 bg-[url("/bg3.png")] bg-cover'>
    <div className='relative h-[80vh]'>
      <div className='flex rounded-2xl w-3/4 mx-auto justify-around p-10 shadow-lg shadow-white'>
        <div className='flex flex-col font-bold justify-center'>
          <h1 className='text-6xl'>Joshi Jay</h1>
          <p className='text-3xl'>Entusiastic</p>
          <p className='text-3xl'>Backend Developer</p>
          <div className='flex gap-5 py-10'>
            <div className='text-2xl flex flex-col items-center'>
            <IoLogoNodejs className='text-green-400 text-6xl'/>
            <p>Node JS</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <SiExpress className='text-gray-400 text-6xl'/>
            <p>Express JS</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <SiMongodb className='text-green-400 text-6xl'/>
            <p>MongoDB</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <GrMysql className='text-blue-400 text-6xl'/>
            <p>MySQL</p>
            </div>
          </div>
        </div>
        <img src="me.jpg" className='rounded-full'/>
      </div>
    </div>
    </div>

    <div id='skill' className='w-full bg-[url("/bg3.png")] bg-cover p-10'>

      <div className='w-[85%] border bg-gray-900 border-gray-600 shadow-2xl shadow-gray-600 mx-auto rounded-2xl p-10'>
      <h1 className='font-bold text-4xl'>Skills</h1>
      <div className='grid grid-cols-4 gap-14 w-full mt-10'>
          <div className='text-2xl flex flex-col items-center'>
            <IoLogoNodejs className='text-green-400 text-6xl'/>
            <p>Node JS</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <SiExpress className='text-gray-400 text-6xl'/>
            <p>Express JS</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <FaReact className='text-blue-400 text-6xl'/>
            <p>React</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <FaHtml5 className='text-orange-500 text-6xl'/>
            <p>HTML</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <IoLogoCss3 className='text-blue-400 text-6xl'/>
            <p>CSS</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <RiJavascriptFill className='text-yellow-400 text-6xl'/>
            <p>Javascript</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <SiMongodb className='text-green-400 text-6xl'/>
            <p>MongoDB</p>
            </div>
            <div className='text-2xl flex flex-col items-center'>
            <GrMysql className='text-blue-400 text-6xl'/>
            <p>MySQL</p>
            </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home
