import React from 'react'
import { FaBook, FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiCloudinary, SiExpress, SiMongodb } from 'react-icons/si'

const Notes4All = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Notes4All</h1>

      <div className='bg-gray-800 p-3 rounded-2xl mt-10'>
        <h1 className='text-3xl font-medium'>Overview</h1>
        <div className='flex w-full h-full mx-auto gap-10 p-3'>
          <div className='p-2'>
            {/* <FaBook className='text-6xl' /> */}
            <img src="notes4all.png" alt="" />
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
          <div className='text-2xl flex flex-col items-center'>
            <SiCloudinary className='text-blue-400 text-6xl' />
            <p>Cloudinary</p>
          </div>
        </div>
          <p className='text-center text-xl mt-10'>
            Link: <a href="https://study-frontend-iota.vercel.app">https://study-frontend-iota.vercel.app</a>
          </p>
      </div>

      <div className='bg-gray-800 p-10 rounded-2xl mt-10'>
        <h1 className='text-3xl font-medium'>Authentication</h1>
        <div className='flex flex-col w-full h-full mx-auto gap-10 p-3'>
          <div className=' w-full h-full'>
            <img src="jwt.png" className='rounded-4xl'/>
          </div>
          <p>
            In Real Life Security of any product is necessary. So it is importent to use best security practice. I implemented Refresh Token and Access Token based authentication from scratch. In this method we use two tokens for user login. When user login in website we first verify credentials and generate AccessToken and RefreshToken. AccessToken is send to user in response and we store the RefreshToken in database. AccessToken is sort lived and RefreshToken is long lived. After user login when accessToken is expires, Users sends both tokens to server. Now we compare the incoming RefreshToken with or database RefreshToken if both is equal than we generate a new accessToken and send to user. RefreshToken is long lived around 30 days. this technique is introduced by Google.
          </p>
        </div>
      </div>

      <div className='bg-gray-800 p-10 rounded-2xl mt-10'>
        <h1 className='text-3xl font-medium'>Redux Tool Kit</h1>
        <div className='flex flex-col w-full h-full mx-auto gap-10 p-3'>
          <div className='w-full h-full'>
            <img src="redux.png" className='rounded-4xl'/>
          </div>
          <p>
            In React it is hard to manage states. So i used redux toolkit for state management. it also provided Redux toolkit Query to effecintly fetch data from backend. Redux toolkit provides Slices and Reducers. Redux toolkit says that every state should update through function (Reducers) to manage state effectivly. Great feature i like that it provides RTKQuery for data fetching and caching. It stores data on frontend so when user again comes to privious visited page than it don't call backend again gets data from cache.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Notes4All
