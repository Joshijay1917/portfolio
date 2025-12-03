import ContactForm from '@/components/ContactForm'
import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const page = () => {
    return (
        <div className='bg-gray-200 relative'>
            <div className='bg-background w-full absolute top-0 text-white p-15'>
                <h1 className='text-4xl text-center font-bold'>Contact Now</h1>
                <p className='text-center'>You can contact me here</p>
            </div>
            <div className='flex pt-35 gap-10 mx-50 justify-center pb-10'>
                <div className='bg-white relative z-10 w-full shadow-2xl rounded-2xl p-7'>
                    <h1 className='text-2xl font-semibold'>Get in touch</h1>
                    <div>
                        <div className='flex gap-3 items-center p-3 py-5'>
                            <IoCallOutline className='bg-green-400/30 text-green-400 text-5xl rounded-full p-2'/>
                            <div>
                                <h2 className='text-xl font-semibold'>WhatsApp</h2>
                                <p>+91 9429248465</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center p-3'>
                            <BiLogoGmail className='bg-red-400/30 text-red-400 text-5xl rounded-full p-2'/>
                            <div>
                                <h2 className='text-xl font-semibold'>Mail</h2>
                                <p>jayjoshi1912007@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center p-3'>
                            <FaLinkedin className='bg-blue-400/30 text-blue-400 text-5xl rounded-full p-2'/>
                            <div>
                                <h2 className='text-xl font-semibold'>Linkdin</h2>
                                <a className='text-blue-500' href="https://www.linkedin.com/in/jayjoshi19">@jayjoshi19</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white relative z-10 w-full shadow-2xl rounded-2xl p-7'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default page
