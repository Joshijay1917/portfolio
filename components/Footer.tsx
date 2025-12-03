"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const router = useRouter()

  return (
    <div className='bg-gray-800 p-30 text-white grid grid-cols-3'>
      <div className='w-3/4 flex flex-col gap-3'>
        <img width={90} src="portfolio_image-removebg-preview.png" alt="" />
        <p>I am intrested in backend development and continously learing about it. If you find a backend developer than feel free to ask.</p>
        <div className='flex gap-3'>
          <FaWhatsapp className='text-2xl text-green-300'/>
          <BiLogoGmail className='text-2xl text-red-400'/>
          <FaLinkedin className='text-2xl text-blue-300'/>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Quick Links</h1>
        <Link href="/">Home</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#experience">Experince</Link>
        <Link href="/projects">Projects</Link>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Contact On</h1>
        <div className='flex items-center gap-3'>
          <FaWhatsapp className='text-xl text-green-300'/>
          <p>+91 9429248465</p>
        </div>
        <div className='flex items-center gap-3'>
          <BiLogoGmail className='text-xl text-red-400'/>
          <p>jayjoshi1912007@gmail.com</p>
        </div>
        <div className='flex items-center gap-3'>
          <FaLinkedin className='text-xl text-blue-300'/>
          <p>@jayjoshi19</p>
        </div>
        <button onClick={()=>router.push("/contact")} className='bg-white text-black p-1 py-2 rounded-xl w-1/2'>Contact now</button>
      </div>
    </div>
  )
}

export default Footer
