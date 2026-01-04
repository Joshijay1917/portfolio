import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

function privacyagent() {
    return (
        <div className='bg-gray-200 pb-10'>
            <div className='bg-[url("/aibg.png")] bg-center p-10 absolute mt-26 top-0 w-full'>
                <div className='flex justify-around gap-80 items-center mr-40'>
                    <h1 className='text-5xl text-white font-bold'>Privacy Agent</h1>
                    <img src="/privacylogo.png" className='w-34 h-34 rounded-3xl' />
                </div>
            </div>

            <div className='p-10 flex items-center gap-3 pt-70 rounded-2xl px-50'>
                <div>
                    <h2 className='text-3xl font-medium my-4'>Overview</h2>
                    <p>This is a full stack <strong>AI-Driven Mobile Assistant with On-Device Memory.</strong>I am see many chatbots are save user data on cloud. So i think that whatever user chat with LLM is saved on cloud if any attack happens on cloud than they can see user's private information which is not good. So i developed this chatbot which stores user's chat and AI memory locally on user's device.</p>
                    <div className='flex gap-3 m-14'>
                        <p>See Project:</p>
                        <a className='text-blue-500 flex items-center gap-3' href="https://privacy-agent-app-download.vercel.app">https://privacy-agent-app-download.vercel.app <FaExternalLinkAlt /></a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center relative ml-30">
                    <div className="relative w-68 h-[590px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
                        {/* Inner Screen Mockup */}
                        <div className="bg-[url('/homepage.png')] bg-bottom bg-cover h-full p-4"></div>
                    </div>
                    {/* Decorative Glow */}
                    <div className="absolute -z-10 w-72 h-72 bg-blue-400/20 blur-[100px] rounded-full"></div>
                </div>
            </div>

            <div className='relative flex flex-col rounded-2xl z-10 overflow-clip mt-10 shadow-2xl mx-50 bg-white'>
                <img className='w-full rounded-2xl shadow-2xl' src="/privacyworkflow.png" />
                <div className='p-10'>
                    <h2 className='text-2xl font-medium text-center'>Workflow</h2>
                    <p>This is complete workflow i used to build this application. in this workflow we used <strong>React-native</strong> for user interface and <strong>NodeJS/Express</strong> as backend to call <strong>Google Gemini API</strong>. I used <strong>SQLite</strong> to store data locally on device. I also added a usefull feature <strong>Automatice Notification Schedule</strong>. We can ask AI to remind me to do this task at this time so i can provide notification on your phone at that time to notify you. in this app i create <strong>Session Based Chats.</strong> We can create different different sessions.</p>
                </div>
            </div>

            <div className='p-10 mt-10 flex gap-5 rounded-2xl px-50'>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-medium my-4'>Problem & Solution</h2>
                    <h2 className='font-medium py-2'>Problems:</h2>
                    <ul className='list-disc pl-6'>
                        <li>Most AI assistants rely on <strong>cloud-based processing</strong>, which requires uploading sensitive personal data and chat history to external servers.</li>
                        <li>This creates a high risk of <strong>data leakage and privacy breaches</strong>, as users have little control over how their personal information is stored or used once it leaves their device.</li>
                    </ul>
                    <h2 className='font-medium py-2'>Solution:</h2>
                    <ul className='list-disc pl-6'>
                        <li><strong>Privacy Agent</strong> provides a 100% <strong>local-first memory system</strong> using SQLite, ensuring all chat history and personal reminders remain strictly on-device.</li>
                        <li>By integrating <strong>Google Gemini 2.5 Flash-Lite</strong> and <strong>Gemma 3 27B</strong> via a robust Node.js backend, the app delivers high-speed, complex AI reasoning without compromising user privacy.</li>
                    </ul>
                </div>
                <img className='rounded-2xl ml-30 shadow-2xl' width={500} src="/pands.png" alt="Privacy Agent Problem and Solution" />
            </div>
        </div>
    )
}

export default privacyagent
