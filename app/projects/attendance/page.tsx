import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Attendance = () => {
    return (
        <div className='bg-slate-50 min-h-screen pb-20 text-slate-800'>
            {/* Hero Section */}
            <div className='relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden'>
                <Image
                    src="/bgattendance.png"
                    alt="Attendance Background"
                    fill
                    priority
                    className="object-cover object-center brightness-50"
                />
                <h1 className='text-3xl md:text-5xl text-white font-extrabold relative z-10 text-center px-4 tracking-tight'>
                    Smart Attendance System
                </h1>
            </div>

            <div className='max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-24'>

                {/* Overview Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Overview</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            This is a full stack project utilizing <strong>WebSockets</strong>. I created this project during the <strong>SIH (Smart India Hackathon) 2025</strong> internal round at my college. I built a working prototype that generates and manages sessions. Students scan the QR Code, and in real-time, the faculty can view all student names on their dashboard.
                        </p>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm'>
                            <span className='font-semibold text-slate-900'>See Project:</span>
                            <a
                                className='text-blue-600 font-medium flex items-center gap-3 hover:underline break-all text-sm md:text-base'
                                href="https://smart-attendance-system-snowy.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://smart-attendance-system-snowy.vercel.app <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>
                    <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            className='object-cover'
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src="/attendance.png"
                            alt="Attendance Demo"
                        />
                    </div>
                </div>

                {/* Workflow Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                        <Image
                            className='object-cover'
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src="/bg1.jpg"
                            alt="Workflow Diagram"
                        />
                    </div>
                    <div className='flex flex-col gap-6 order-1 md:order-2'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Workflow</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            There are two dashboards: one for the faculty and one for students. Faculty can generate and manage sessions, and students can see which sessions they attended. The faculty generates a session, producing a unique <strong>QR Code</strong>. Students log in and scan the code, triggering a scan request to the backend. Faculty can see the credentials of attendees in real-time from the server using <strong>WebSockets</strong>.
                        </p>
                    </div>
                </div>

                {/* Problem & Solution Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Problem & Solution</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            In this system, there are <strong>two main concerns</strong> that need to be addressed:
                        </p>

                        <div className="flex flex-col gap-5">
                            <div>
                                <h3 className='font-bold text-red-600 text-base mb-1'>Problems:</h3>
                                <ul className='list-disc pl-6 text-slate-600 text-sm md:text-base space-y-2'>
                                    <li>Students can take a photo of the QR Code and send it to their friends.</li>
                                    <li>Students can scan the QR Code from outside the classroom or window.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='font-bold text-green-600 text-base mb-1'>Solutions:</h3>
                                <ul className='list-disc pl-6 text-slate-600 text-sm md:text-base space-y-2'>
                                    <li>To solve the first issue, the <strong>QR Code refreshes every 10 seconds</strong>. If a student takes a photo, the code expires quickly.</li>
                                    <li>For the second issue, we send the <strong>student's GPS coordinates</strong> to the server upon scanning. If the student is outside the room, the check fails.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            className='object-cover'
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src="/pands.png"
                            alt="Problem and Solution"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;