import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Notes4All = () => {
    return (
        <div className='bg-slate-50 min-h-screen pb-20 text-slate-800'>
            {/* Hero Section */}
            <div className='relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden'>
                <Image
                    src="/notes.jpg"
                    alt="Notes4All Background"
                    fill
                    priority
                    className="object-cover object-center brightness-50"
                />
                <h1 className='text-3xl md:text-5xl text-white font-extrabold relative z-10 text-center px-4 tracking-tight border-b-4 border-blue-600 pb-2'>
                    Notes4All
                </h1>
            </div>

            <div className='max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-20'>

                {/* Overview Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Overview</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            This is a full-stack project. In my college, I found many students who wanted to learn for end-semester exams but couldn't find notes to read. So, I decided to create a website to help all students with notes, assignments, and lab manuals. I worked on this website for a month, implementing new features as I learned them. I used React for the frontend, Node.js for the backend, and MongoDB as the database, along with Cloudinary API to handle image uploads and storage.
                        </p>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2 p-5 bg-white border border-slate-100 rounded-xl shadow-sm'>
                            <span className='font-semibold text-slate-900'>See Project:</span>
                            <a
                                className='text-blue-600 font-medium flex items-center gap-3 hover:underline break-all text-sm md:text-base'
                                href="https://study-frontend-iota.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://study-frontend-iota.vercel.app <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        <Image
                            className='object-cover'
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src="/attendance.png"
                            alt="Notes4All Preview"
                        />
                    </div>
                </div>

                {/* Authentication Section */}
                <div className='bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden'>
                    <div className='relative w-full h-[250px] md:h-[400px] bg-slate-100'>
                        <Image
                            src="/jwt.png"
                            alt="JWT Authentication"
                            fill
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            className="object-cover"
                        />
                    </div>
                    <div className='p-8 md:p-10'>
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center'>
                            Authentication
                        </h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto'>
                            In real-life product security, implementing best security practices is critical. I implemented a refresh-and-access token-based authentication mechanism from scratch. After verifying credentials during login, the system generates an access token (short-lived) and a refresh token (long-lived, stored in the database). When the access token expires, the client sends both tokens to the server. The server compares the refresh token, and if valid, issues a new access token. This technique helps keep the session secure for up to 30 days.
                        </p>
                    </div>
                </div>

                {/* Redux Toolkit Section */}
                <div className='bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden'>
                    <div className='relative w-full h-[250px] md:h-[400px] bg-slate-100'>
                        <Image
                            src="/redux.png"
                            alt="Redux Toolkit"
                            fill
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            className="object-cover"
                        />
                    </div>
                    <div className='p-8 md:p-10'>
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center'>
                            Redux Toolkit
                        </h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto'>
                            Managing state in complex React applications can be challenging. I used Redux Toolkit for centralized state management. It features Slices, Reducers, and RTK Query for efficient data fetching and caching. By caching data on the frontend, revisiting previous pages doesn't trigger additional backend API calls, creating a significantly faster and smoother user experience.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Notes4All;