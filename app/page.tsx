import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaStar } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoBookmark } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";


export const metadata: Metadata = {
  title: "Jay Joshi | Full Stack MERN Developer in Rajkot",
  description: "Portfolio of Jay Joshi, a 2nd-year CS student at VVP Engineering College. Specializing in MERN stack, Next.js, and Privacy-First AI Agents. Based in Rajkot, Gujarat.",
  keywords: ["Jay Joshi", "Full Stack Developer Rajkot", "VVP Engineering College", "MERN Stack Developer", "Privacy Agent AI"],
};

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className='relative w-full h-[600px] bg-gray-200 text-white overflow-hidden'>
        <Image
          src="/me.jpg"
          alt="Jay Joshi - Full Stack Developer and MERN Stack Expert"
          fill
          priority
          className="object-cover object-top"
        />
        <div className='flex justify-end items-center p-20 h-full relative z-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-6xl font-extrabold'>Jay Joshi</h1>
            <p className='text-4xl font-bold'>Enthusiastic</p>
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
        <h2 className='text-4xl font-bold text-center'>Skills - Which Technologies I Know</h2>
        <div className='grid grid-cols-4 mx-30 p-10'>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaNodeJs className='text-green-400 text-4xl' />
            <h2 className='text-2xl font-medium'>Node JS</h2>
            <p>NodeJS a Javascript framework to run javascript outside the browser.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaReact className='text-blue-400 text-4xl' />
            <h2 className='text-2xl font-medium'>React JS</h2>
            <p>React.js is a free and open-source Javascript library for building User Interfaces.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <SiExpress className='text-gray-600 text-4xl' />
            <h2 className='text-2xl font-medium'>Express JS</h2>
            <p>Express JS a Node JS framework which provides robust features for web applications and APIs.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <SiMongodb className='text-green-400 text-4xl' />
            <h2 className='text-2xl font-medium'>MongoDB</h2>
            <p>MongoDB is a non-relational database to store data in document form.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaHtml5 className='text-orange-400 text-4xl' />
            <h2 className='text-2xl font-medium'>HTML</h2>
            <p>HTML is a skeleton of any website. it is a basic structure of web application.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <FaCss3Alt className='text-blue-400 text-4xl' />
            <h2 className='text-2xl font-medium'>CSS</h2>
            <p>Css is style sheet language used for describing the presentation of document.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <RiJavascriptFill className='text-yellow-400 text-4xl' />
            <h2 className='text-2xl font-medium'>Javascript</h2>
            <p>Javascript enables dynamic and interactive content in web pages.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <GrMysql className='text-blue-400 text-4xl' />
            <h2 className='text-2xl font-medium'>MySQL</h2>
            <p>MySQL is a relational database management system in which we can store and retrieve data efficiently.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <TbBrandReactNative className='text-blue-400 text-4xl' />
            <h2 className='text-2xl font-medium'>React Native</h2>
            <p>React Native is an open-source UI software framework to build native mobile applications for iOS and Android using JavaScript and React.</p>
          </div>
          <div className='bg-white shadow-2xl m-3 rounded-2xl p-5'>
            <SiNextdotjs className='text-black text-4xl' />
            <h2 className='text-2xl font-medium'>Next JS</h2>
            <p>Next.js is an open-source React framework for building fast, full-stack web applications.</p>
          </div>
        </div>
      </section>

      {/* <section id='currentLearnings' className='mt-10 px-30 flex flex-col gap-5'>
        <h1 className='text-4xl font-bold'>Current Learnings</h1>
        <div className="w-full flex bg-white gap-4 overflow-clip rounded-2xl shadow-2xl">
          <img width={600} src="CurrLea.png" alt="" />
          <div className="flex flex-col gap-3 p-5">
            <h1 className="font-bold text-xl">React Native - Privacy First AI Chatbot</h1>
            <p>I am leaning about AI Agents. i am think to build a chatbot but i want to fix a problem of other chatbot. So i find a problem that every chatbot calls backend and then use databse to save memory. this is privacy issue user's personal chat's are stored on cloud. So i think to store memory locally in device for privacy of user.</p>
            <p>Currently Working in notification feature. AI Agent Can schedule notifications</p>
            <p>Visit now: <a className="text-blue-400" href="https://privacy-agent-app-download.vercel.app">https://privacy-agent-app-download.vercel.app</a></p>
          </div>
        </div>
      </section> */}

      <section className='px-18 py-22'>
        <div className='flex px-16 justify-between'>
          <h2 className='text-4xl font-bold'>Projects</h2>
          <Link href={'/projects'} className='flex items-center gap-3 text-blue-600 text-2xl cursor-pointer'>Show all projects <FaArrowRight /></Link>
        </div>
        <div className='m-10 mr-40 grid grid-cols-4 gap-6'>
          <Link aria-label="Notes4All - Full Stack Student Resource Portal by Jay Joshi" href={'/projects/notes4all'} className='w-[450px] bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/notes4all.png" alt="Notes4All - Full Stack Student Resource Portal by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Notes4All</h2>
              <p>A complete full stack project to help students for notes, assignments and lab manuals.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
          <Link aria-label="Smart AI Payment Tracker by Jay Joshi" href={'/projects/payment'} className='w-[450px] bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/payment.png" alt="Smart AI Payment Tracker by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Smart AI Payment Tracker</h2>
              <p>A complete full stack project to track customer payments with pridction of payment delay or not.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
          <Link aria-label="Smart Attendance System by Jay Joshi" href={'/projects/attendance'} className='w-[450px] bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/attendance.png" alt="Smart Attendance System by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Smart Attendance System</h2>
              <p>A complete full stack project to take student attendance through QR Code.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
          <Link aria-label="Privacy Agent AI Assistant by Jay Joshi" href={'/projects/privacyagent'} className='w-[450px] bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/privacyagent.png" alt="Privacy Agent AI Assistant by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Privacy Agent</h2>
              <p>A complete full stack AI-Driven Mobile Assistant with On-Device Memory.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
        </div>
      </section>

      <section className='px-30 pb-20 relative'>
        <h2 className='text-4xl font-bold text-center'>Education</h2>
        <div className='bg-white'>
          <hr className='absolute rotate-90 top-14 left-0 w-[20%] py-50' />
          <div className='absolute top-30 left-82 bg-blue-400 w-[3%] h-[8%] rounded-full'></div>
          <div className='absolute top-88 left-82 bg-blue-400 w-[3%] h-[8%] rounded-full'></div>
        </div>
        <div className='bg-white p-7 mt-10 w-1/2 mx-auto shadow-2xl rounded-2xl'>
          <div className='flex gap-3 items-center pb-3'>
            <FaStar className='bg-yellow-400/20 text-yellow-400 p-2 rounded-full text-4xl' />
            <div>
              <p className='text-blue-400 text-xl font-medium'>2022-2024</p>
              <h3 className='text-2xl font-medium'>Higher School</h3>
            </div>
          </div>
          <p>I completed my Higher Secondary Education at Patanjali School, Rajkot, where I secured <strong>85%</strong> in 11th and <strong>92.49%</strong> in 12th (Gujarat Board). I also qualified JEE with an <strong>89 percentile</strong>.</p>
        </div>
        <div className='bg-white p-7 mt-10 w-1/2 mx-auto shadow-2xl rounded-2xl'>
          <div className='flex gap-3 items-center pb-3'>
            <FaStar className='bg-green-400/20 text-green-400 p-2 rounded-full text-4xl' />
            <div>
              <p className='text-blue-400 text-xl font-medium'>2024-2028</p>
              <h3 className='text-2xl font-medium'>Bachelor's Degree</h3>
            </div>
          </div>
          <p>I am currently pursuing my Bachelor's degree in Computer Science at V.V.P. Engineering College, Rajkot. I have maintained a <strong>9.13 CPI</strong> in my first year.</p>
        </div>
      </section>

      <section id='experience' className='p-14'>
        <h2 className='text-4xl font-bold text-center'>Experience</h2>
        <div className='grid grid-cols-3 w-full mx-auto m-10 gap-5'>
          <div className='rounded-2xl overflow-clip bg-white shadow-2xl'>
            <div className='relative'>
              <Image src="/h2.jpg" alt="Gardi Vidhyapith Hackathon" width={600} height={300} className="w-full object-cover" />
              <IoBookmark className='text-yellow-400 text-5xl absolute bottom-[-20px] right-5' />
            </div>
            <div className='p-5'>
              <h3 className='text-2xl font-medium py-5'>Gardi Vidhyapith Hackathon</h3>
              <p>This is a 24 Hour Hackathon organized in my city. My team is tasked to create a Customer Relationship Management System. I am work as a backend developer. I created routes using NodeJS and store and manage data in mongodb.</p>
            </div>
          </div>
          <div className='rounded-2xl overflow-clip bg-white shadow-2xl'>
            <div className='relative'>
              <Image src="/white-fox.jpg" alt="Jay Joshi MERN Stack Internship at White Label Fox Rajkot" width={600} height={300} className="w-full object-cover h-[320px]" />
              <IoBookmark className='text-yellow-400 text-5xl absolute bottom-[-20px] right-5' />
            </div>
            <div className='p-5'>
              <h3 className='text-2xl font-medium py-5'>MERN Intern at White Label Fox Pvt. Ltd. Rajkot</h3>
              <h3>January 2026 - March 2026</h3>
              <p>I am worked as a MERN Intern at White Label Fox Pvt. Ltd. Rajkot. Through this internship i am learn about real world poduct development.in this internship i work on NodeJs, ExpressJs, NestJs, NextJs, MongoDB and PostgresSQL.</p>
            </div>
          </div>
          <div className='rounded-2xl overflow-clip bg-white shadow-2xl'>
            <div className='relative'>
              <Image src="/h1.png" alt="Code Carnival Hackathon" width={600} height={300} className="w-full object-cover" />
              <IoBookmark className='text-yellow-400 text-5xl absolute bottom-[-20px] right-5' />
            </div>
            <div className='p-5'>
              <h3 className='text-2xl font-medium py-5'>Code Carnival Hackathon</h3>
              <p>This is a 36 hours hackathon organized in atmity university Rajkot. Our team is tasked to create a smart AI payment tracker for SMEs. I am work as a backend developer and trained a machine learning model using TensorflowJS.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
