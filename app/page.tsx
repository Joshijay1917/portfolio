import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaStar } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoBookmark } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className='w-full bg-[url("/me.png")] p-36 bg-center text-white bg-cover'>
        <div className='flex justify-end items-center p-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-6xl font-extrabold'>Jay Joshi</h1>
            <p className='text-4xl font-bold'>Entusiastic</p>
            <p className='text-4xl font-bold'>Full Stack Developer</p>
            <div className='flex text-2xl gap-10 mt-5 font-medium text-white'>
              <div className='flex flex-col items-center'>
                <FaNodeJs className='text-green-400 text-7xl' />
                <p>Node JS</p>
              </div>
              <div className='flex flex-col items-center'>
                <SiExpress className='text-gray-800 text-7xl' />
                <p>Express JS</p>
              </div>
              <div className='flex flex-col items-center'>
                <SiMongodb className='text-green-400 text-7xl' />
                <p>MongoDB</p>
              </div>
              <div className='flex flex-col items-center'>
                <GrMysql className='text-blue-300 text-7xl' />
                <p>MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id='skills' className='mt-10'>
        <h1 className='text-4xl font-bold text-center'>Skills - Which Technologies I Know</h1>
        <div className='grid grid-cols-4 mx-30 p-10'>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaNodeJs className='text-green-400 text-4xl'/>
            <h2 className='text-2xl font-medium'>Node JS</h2>
            <p>NodeJS a Javascript framwork to run javascript outside the borwser.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaReact className='text-blue-400 text-4xl'/>
            <h2 className='text-2xl font-medium'>React JS</h2>
            <p>React.js is a free and open-source Javascript library for building User Interfaces.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <SiExpress className='text-gray-600 text-4xl'/>
            <h2 className='text-2xl font-medium'>Express JS</h2>
            <p>Express JS a Node JS framework which provides robust features for web applications and APIs.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <SiMongodb className='text-green-400 text-4xl'/>
            <h2 className='text-2xl font-medium'>MongoDB</h2>
            <p>MongoDB is a non-relational database to store data in document form.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaHtml5 className='text-orange-400 text-4xl'/>
            <h2 className='text-2xl font-medium'>HTML</h2>
            <p>HTML is a skaleton of any website.it is a basic staructure of web application.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaCss3Alt className='text-blue-400 text-4xl'/>
            <h2 className='text-2xl font-medium'>CSS</h2>
            <p>Css is style sheet language used for describing the presentation of document.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <RiJavascriptFill className='text-yellow-400 text-4xl'/>
            <h2 className='text-2xl font-medium'>Javascript</h2>
            <p>Javascript enables dynamic and interactive content in web pages.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <GrMysql className='text-blue-400 text-4xl'/>
            <h2 className='text-2xl font-medium'>MySQL</h2>
            <p>MySQL is a relational database management system in which we can store and retrive data efficiently.</p>
          </div>
        </div>
      </section>

      <section className='px-30 py-22'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Projects</h1>
          <Link href={'/projects'} className='flex items-center gap-3 text-blue-600 text-2xl cursor-pointer'>Show all projects <FaArrowRight /></Link>
        </div>
        <div className='m-10 grid grid-cols-3'>
          <div className='w-[500px] bg-white rounded-2xl overflow-clip shadow-2xl'>
            <img src="notes4all.png" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Notes4All</h2>
              <p>A complete full stack project to help students for notes, assignments and lab manuals.</p>
              <a href="/projects/notes4all" className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></a>
            </div>
          </div>
          <div className='w-[500px] bg-white rounded-2xl overflow-clip shadow-2xl'>
            <img src="payment.png" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Smart AI Payment Tracker</h2>
              <p>A complete full stack project to track customer payments with pridction of payment delay or not.</p>
              <a href="/projects/payment" className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></a>
            </div>
          </div>
          <div className='w-[500px] bg-white rounded-2xl overflow-clip shadow-2xl'>
            <img src="attendance.png" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Smart Attendance System</h2>
              <p>A complete full stack project to take student attendance through QR Code.</p>
              <a href="/projects/attendance" className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      <section className='px-30 pb-20 relative'>
        <h1 className='text-4xl font-bold text-center'>Education</h1>
        <div className='bg-white'>
          <hr className='absolute rotate-90 top-14 left-0 w-[20%] py-50'/>
          <div className='absolute top-30 left-82 bg-blue-400 w-[3%] h-[8%] rounded-full'></div>
          <div className='absolute top-88 left-82 bg-blue-400 w-[3%] h-[8%] rounded-full'></div>
        </div>
        <div className='bg-white p-7 mt-10 w-1/2 mx-auto shadow-2xl rounded-2xl'>
          <div className='flex gap-3 items-center pb-3'>
            <FaStar className='bg-yellow-400/20 text-yellow-400 p-2 rounded-full text-4xl'/>
            <div>
              <p className='text-blue-400 text-xl font-medium'>2022-2024</p>
              <h1 className='text-2xl font-medium'>Higher School</h1>
            </div>
          </div>
          <p>I completed my Higher Secondary Education at Patanjali School, Rajkot, where I secured 85% in 11th and 92.49% in 12th (Gujarat Board). I also qualified JEE with an 89 percentile.</p>
        </div>
        <div className='bg-white p-7 mt-10 w-1/2 mx-auto shadow-2xl rounded-2xl'>
          <div className='flex gap-3 items-center pb-3'>
            <FaStar className='bg-green-400/20 text-green-400 p-2 rounded-full text-4xl'/>
            <div>
              <p className='text-blue-400 text-xl font-medium'>2024-2028</p>
              <h1 className='text-2xl font-medium'>Bachlor's Degree</h1>
            </div>
          </div>
          <p>I am currently pursuing my Bachelor's degree in Computer Science at V.V.P. Engineering College, Rajkot. I have maintained a <strong>9.13 CGPA</strong> in my first year.</p>
        </div>
      </section>

      <section id='experience' className='p-14'>
        <h1 className='text-4xl font-bold text-center'>Experience</h1>
        <div className='grid grid-cols-2 w-3/4 mx-auto m-10 gap-5'>
          <div className='rounded-2xl overflow-clip bg-white shadow-2xl'>
            <div className='relative'>
              <img src="h2.png" />
              <IoBookmark className='text-yellow-400 text-5xl absolute bottom-[-20px] right-5'/>
            </div>
            <div className='p-5'>
              <h1 className='text-2xl font-medium py-5'>Gardi Vidhyapith Hackathon</h1>
              <p>This is a 24 Hachathon organized in my city. My team is tasked to create a Customer Relationship Management System. I am work as a backend developer. I created routes using NodeJS and store and manage data in mongodb.</p>
            </div>
          </div>
          <div className='rounded-2xl overflow-clip bg-white shadow-2xl'>
             <div className='relative'>
                <img src="h1.png" />
                <IoBookmark className='text-yellow-400 text-5xl absolute bottom-[-20px] right-5'/>
             </div>
            <div className='p-5'>
              <h1 className='text-2xl font-medium py-5'>Code Carnival Hackathon</h1>
              <p>This is a 36 hours hackthon organized in atmity university Rajkot. Our team is tasked to create a smart AI payment tracker for SMEs. I am work as a backend developer and trained a machine learing model using TensorflowJS.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
