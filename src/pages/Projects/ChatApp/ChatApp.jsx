import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiExpress, SiMongodb } from 'react-icons/si'

const ChatApp = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>ChatApp</h1>

      <div className='bg-gray-800 p-3 rounded-2xl mt-10'>
        <h1 className='text-3xl font-medium'>Overview</h1>
        <div className='flex w-full h-full mx-auto gap-10 p-3'>
          <div className='p-2'>
            {/* <FaBook className='text-6xl' /> */}
            <img src="chatapp.png" alt="" />
          </div>
          <p>
            This is a full stack project. In my college i have find many students who wants to learn for end semester exams, but they cannot find notes to read. So i decided to create a website to help all students for notes, assignments and lab manual. I working on this website for 1 month and when i learn new things i try to implement it on this website. I am use React for frontend and Node JS as backend and MongoDB as database. Also use cloudinary to store photos on cloud. I integrated cloudinary API to upload and retrive photos.
          </p>
        </div>
        <div className='flex justify-center items-center gap-10'>
          <h1 className='text-2xl'>Stack Used:</h1>
          <div className='text-2xl flex flex-col items-center'>
            <FaReact className='text-blue-400 text-6xl' />
            <p>React</p>
          </div>
          <div className='text-2xl flex flex-col items-center'>
            <IoLogoNodejs className='text-green-400 text-6xl' />
            <p>Node JS</p>
          </div>
          <div className='text-2xl flex flex-col items-center'>
            <SiExpress className='text-gray-400 text-6xl' />
            <p>Express JS</p>
          </div>
          <div className='text-2xl flex flex-col items-center'>
            <SiMongodb className='text-green-400 text-6xl' />
            <p>MongoDB</p>
          </div>
        </div>
        <p className='text-center text-xl mt-10'>
          Link: <a href="https://chat-app-blush-eight-56.vercel.app">https://chat-app-blush-eight-56.vercel.app</a>
        </p>
      </div>
    </div>
  )
}

export default ChatApp
