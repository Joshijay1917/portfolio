import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Notes4All = () => {
    return (
        <div className='pb-10 bg-gray-200'>
            <div className='bg-[url("https://bau.edu/wp-content/uploads/2021/11/how-to-take-notes-in-college.jpg")] bg-center p-20 absolute mt-26 top-0 w-full'>
                <h1 className='text-5xl text-white font-bold'>Notes4All</h1>
            </div>

            <div className='p-10 flex gap-3 pt-60 rounded-2xl px-50'>
                <div>
                    <h2 className='text-2xl font-medium'>Overview</h2>
                    <p>This is a full stack project. In my college i have find many students who wants to learn for end semester exams, but they cannot find notes to read. So i decided to create a website to help all students for notes, assignments and lab manual. I working on this website for 1 month and when i learn new things i try to implement it on this website. I am use React for frontend and Node JS as backend and MongoDB as database. Also use cloudinary to store photos on cloud. I integrated cloudinary API to upload and retrive photos.</p>
                    <div className='flex gap-3 m-14'>
                        <p>See Project:</p>
                        <a className='text-blue-500 flex items-center gap-3' href="https://study-frontend-iota.vercel.app">https://study-frontend-iota.vercel.app <FaExternalLinkAlt /></a>
                    </div>
                </div>
                <img className='rounded-2xl shadow-2xl' width={500} src="/attendance.png" />
            </div>

            <div className='relative flex flex-col rounded-2xl z-10 overflow-clip mt-10 shadow-2xl mx-50 bg-white'>
                <img className='w-full rounded-2xl shadow-2xl' src="/jwt.png" />
                <div className='p-10'>
                <h2 className='text-2xl font-medium text-center'>Authentication</h2>
                <p>In Real Life Security of any product is necessary. So it is importent to use best security practice. I implemented Refresh Token and Access Token based authentication from scratch. In this method we use two tokens for user login. When user login in website we first verify credentials and generate AccessToken and RefreshToken. AccessToken is send to user in response and we store the RefreshToken in database. AccessToken is sort lived and RefreshToken is long lived. After user login when accessToken is expires, Users sends both tokens to server. Now we compare the incoming RefreshToken with or database RefreshToken if both is equal than we generate a new accessToken and send to user. RefreshToken is long lived around 30 days. this technique is introduced by Google.</p>
                </div>
            </div>

            <div className='relative flex flex-col z-10 overflow-clip mt-10 rounded-2xl shadow-2xl mx-50 bg-white'>
                <img className='w-full rounded-2xl shadow-2xl' src="/redux.png" />
                <div className='p-10'>
                <h2 className='text-2xl font-medium text-center'>Reduxtool Kit</h2>
                <p>In React it is hard to manage states. So i used redux toolkit for state management. it also provided Redux toolkit Query to effecintly fetch data from backend. Redux toolkit provides Slices and Reducers. Redux toolkit says that every state should update through function (Reducers) to manage state effectivly. Great feature i like that it provides RTKQuery for data fetching and caching. It stores data on frontend so when user again comes to privious visited page than it don't call backend again gets data from cache.</p>
                </div>
            </div>
        </div>
    )
}

export default Notes4All