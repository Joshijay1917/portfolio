import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PrivacyAgent = () => {
    return (
        <div className='bg-slate-50 min-h-screen pb-20 text-slate-800'>
            {/* Hero Section */}
            <div className='relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden'>
                <Image
                    src="/aibg.png"
                    alt="Privacy Agent Background"
                    fill
                    priority
                    className="object-cover object-center brightness-50"
                />
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-40 relative z-10 px-6'>
                    <h1 className='text-3xl md:text-5xl text-white font-extrabold tracking-tight text-center md:text-left'>
                        Privacy Agent
                    </h1>
                    <div className='relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-xl border-2 border-white/20'>
                        <Image
                            src="/privacylogo.png"
                            alt="Privacy Logo"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-24'>

                {/* Overview Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Overview</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            This is a full-stack <strong>AI-Driven Mobile Assistant with On-Device Memory</strong>. I noticed that many chatbots save user data on the cloud. If an attack happens on the cloud, sensitive personal information can be exposed. To solve this, I developed this chatbot which stores the user's chat and AI memory locally on the device for complete privacy.
                        </p>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2 p-5 bg-white border border-slate-100 rounded-xl shadow-sm'>
                            <span className='font-semibold text-slate-900'>See Project:</span>
                            <a
                                className='text-blue-600 font-medium flex items-center gap-3 hover:underline break-all text-sm md:text-base'
                                href="https://privacy-agent-app-download.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://privacy-agent-app-download.vercel.app <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end relative">
                        <div className="relative w-72 h-[560px] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
                            <Image
                                src="/homepage.png"
                                alt="Privacy Agent App Mockup"
                                fill
                                className="object-cover object-bottom"
                            />
                        </div>
                        <div className="absolute -z-10 w-72 h-72 bg-blue-400/20 blur-[100px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>

                {/* Workflow Section */}
                <div className='bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden'>
                    <div className='relative w-full h-[250px] md:h-[400px] bg-slate-100'>
                        <Image
                            src="/privacyworkflow.png"
                            alt="Privacy Workflow"
                            fill
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            className="object-cover"
                        />
                    </div>
                    <div className='p-8 md:p-10'>
                        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center'>
                            Workflow
                        </h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto'>
                            The application uses <strong>React Native</strong> for the user interface and a <strong>Node.js/Express</strong> backend to call the <strong>Google Gemini API</strong>. I utilized <strong>SQLite</strong> to store data locally on the device. I also added a useful <strong>Automatic Notification Schedule</strong> feature: you can ask AI to remind you to do a task at a specific time, and the device will notify you locally. Furthermore, the app supports <strong>Session-Based Chats</strong> so users can organize different chats.
                        </p>
                    </div>
                </div>

                {/* Problem & Solution Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Problem & Solution</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            Analyzing the current state of AI assistants:
                        </p>

                        <div className="flex flex-col gap-5">
                            <div>
                                <h3 className='font-bold text-red-600 text-base mb-1'>Problems:</h3>
                                <ul className='list-disc pl-6 text-slate-600 text-sm md:text-base space-y-2'>
                                    <li>Most AI assistants rely on cloud processing, requiring the upload of sensitive personal data and chat history.</li>
                                    <li>This creates a high risk of data leakage and privacy breaches since users have little control once data leaves the device.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='font-bold text-green-600 text-base mb-1'>Solution:</h3>
                                <ul className='list-disc pl-6 text-slate-600 text-sm md:text-base space-y-2'>
                                    <li><strong>Privacy Agent</strong> provides a 100% <strong>local-first memory system</strong> using SQLite, ensuring chat history and reminders remain on the device.</li>
                                    <li>By integrating <strong>Google Gemini 2.5 Flash-Lite</strong> and <strong>Gemma 3 27B</strong> via a robust Node.js backend, the app delivers high-speed, complex AI reasoning without compromising user privacy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        <Image
                            className='object-cover'
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src="/pands.png"
                            alt="Privacy Agent Problem and Solution"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyAgent;