import React from 'react'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'

const Skills = () => {
    return (
        <div id='skill' className='w-full bg-[url("/bg3.png")] bg-cover p-10 pt-30'>

            <div className='w-[85%] border bg-gray-900 border-gray-600 shadow-2xl shadow-gray-600 mx-auto rounded-2xl p-10'>
                <h1 className='font-bold text-4xl'>Skills</h1>
                <div className='grid grid-cols-4 gap-14 w-full mt-10'>
                    <div className='text-2xl flex flex-col items-center'>
                        <IoLogoNodejs className='text-green-400 text-6xl' />
                        <p>Node JS</p>
                    </div>
                    <div className='text-2xl flex flex-col items-center'>
                        <SiExpress className='text-gray-400 text-6xl' />
                        <p>Express JS</p>
                    </div>
                    <div className='text-2xl flex flex-col items-center'>
                        <FaReact className='text-blue-400 text-6xl' />
                        <p>React</p>
                    </div>
                    <div className='text-2xl flex flex-col items-center'>
                        <FaHtml5 className='text-orange-500 text-6xl' />
                        <p>HTML</p>
                    </div>
                    <div className='text-2xl flex flex-col items-center'>
                        <IoLogoCss3 className='text-blue-400 text-6xl' />
                        <p>CSS</p>
                    </div>
                    <div className='text-2xl flex flex-col items-center'>
                        <RiJavascriptFill className='text-yellow-400 text-6xl' />
                        <p>Javascript</p>
                    </div>
                    <div className='text-2xl flex flex-col items-center'>
                        <SiMongodb className='text-green-400 text-6xl' />
                        <p>MongoDB</p>
                    </div>
                    <div className='text-2xl flex flex-col items-center'>
                        <GrMysql className='text-blue-400 text-6xl' />
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
