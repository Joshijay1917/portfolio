import Link from 'next/link'
import { FaArrowRight, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiCloudinary, SiExpress, SiJavascript, SiMongodb, SiTensorflow } from 'react-icons/si'

const Projects = () => {
  return (
    <div className='bg-gray-200 relative'>
      <div className='bg-background text-white absolute w-full text-center pt-15 pb-20'>
        <h1 className='text-4xl font-bold'>My Projects</h1>
        <p className='text-xl'>I am created many projects which all shows here.</p>
      </div>

      <div className='relative pb-20 pt-45 z-20 flex flex-col gap-10'>
        <div className='flex gap-3 w-3/4 bg-white rounded-2xl shadow-2xl overflow-clip mx-auto'>
          <img width={500} className='border shadow-lg border-gray-300' src="notes4all.png" />
          <div className='p-5 flex flex-col gap-5'>
            <h1 className='text-2xl font-medium'>Notes4All</h1>
            <p>A full stack project to help students for notes, assignments and lab manuals. Students can login and download pdf of notes or read it from anywhere. it helps students for their exams.</p>
            <div className='flex text-4xl gap-5'>
              <FaReact className='text-blue-400' />
              <FaNodeJs className='text-green-400' />
              <SiExpress className='text-gray-600' />
              <SiMongodb className='text-green-400' />
              <SiCloudinary className='text-blue-400' />
            </div>
            <Link href={'/projects/notes4all'} className='flex items-center text-blue-600 gap-3 text-xl cursor-pointer'>See details <FaArrowRight /></Link>
          </div>
        </div>

        <div className='flex gap-3 w-3/4 bg-white rounded-2xl shadow-2xl overflow-clip mx-auto'>
          <div className='p-5 flex flex-col gap-5'>
            <h1 className='text-2xl font-medium'>Smart AI Payment Tracker</h1>
            <p>A full stack project to track customer payment and trained a model with <strong>TensorflowJS</strong> to predict the customer will delay the payment or not based on past customer transactions.</p>
            <div className='flex text-4xl gap-5'>
              <FaReact className='text-blue-400' />
              <FaNodeJs className='text-green-400' />
              <SiExpress className='text-gray-600' />
              <SiMongodb className='text-green-400' />
              <SiTensorflow className='text-yellow-400' />
            </div>
            <Link href={'/projects/payment'} className='flex items-center text-blue-600 gap-3 text-xl cursor-pointer'>See details <FaArrowRight /></Link>
          </div>
          <img width={500} className='border shadow-lg border-gray-300' src="payment.png" />
        </div>

        <div className='flex gap-3 w-3/4 bg-white rounded-2xl shadow-2xl overflow-clip mx-auto'>
          <img width={500} className='border shadow-lg border-gray-300' src="attendance.png" />
          <div className='p-5 flex flex-col gap-5'>
            <h1 className='text-2xl font-medium'>Smart Attendance System</h1>
            <p>A full stack project to help colleges to take attendance of students quickly save time of faculty. I am use <strong>WebSockets</strong> to see realtime student attendance to faculty.</p>
            <div className='flex text-4xl gap-5'>
              <FaReact className='text-blue-400' />
              <FaNodeJs className='text-green-400' />
              <SiExpress className='text-gray-600' />
              <SiMongodb className='text-green-400' />
            </div>
            <Link href={'/projects/attendance'} className='flex items-center text-blue-600 gap-3 text-xl cursor-pointer'>See details <FaArrowRight /></Link>
          </div>
        </div>

        <div className='flex gap-3 w-3/4 bg-white rounded-2xl shadow-2xl overflow-clip mx-auto'>
          <div className='p-5 flex flex-col gap-5'>
            <h1 className='text-2xl font-medium'>Spotify Clone</h1>
            <p>A simple spotify working clone to learn html, css and javascript. I deployed this project on github pages. this clone plays songs from github repo.</p>
            <div className='flex text-4xl gap-5'>
              <FaHtml5 className='text-orange-400' />
              <FaCss3Alt className='text-blue-400' />
              <SiJavascript className='text-yellow-400' />
            </div>
            {/* <p className='flex items-center text-blue-600 gap-3 text-xl cursor-pointer'>See details <FaArrowRight /></p> */}
          </div>
          <img width={500} className='border shadow-lg border-gray-300' src="spotify.png" />
        </div>

        <div className='flex gap-3 w-3/4 bg-white rounded-2xl shadow-2xl overflow-clip mx-auto'>
          <img width={500} className='border shadow-lg border-gray-300' src="ele.png" />
          <div className='p-5 flex flex-col gap-5'>
            <h1 className='text-2xl font-medium'>Electroplating Order Management System</h1>
            <p>This is a order management system to manage customers, orders and invoices. this is a PWA (Prograssive web app) for smartphones.</p>
            <div className='flex text-4xl gap-5'>
              <FaReact className='text-blue-400' />
              <FaNodeJs className='text-green-400' />
              <SiExpress className='text-gray-600' />
              <SiMongodb className='text-green-400' />
            </div>
            {/* <p className='flex items-center text-blue-600 gap-3 text-xl cursor-pointer'>See details <FaArrowRight /></p> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects