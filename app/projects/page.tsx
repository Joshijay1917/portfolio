import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { PiFileSqlDuotone } from 'react-icons/pi';
import { SiCloudinary, SiExpress, SiJavascript, SiMongodb, SiTensorflow } from 'react-icons/si';

const projects = [
  {
    title: 'Privacy Agent',
    desc: 'A complete full stack AI-Driven Mobile Assistant with On-Device Memory. Stores all user chats and LLM Memory locally on device.',
    href: '/projects/privacyagent',
    image: '/privacyagent.png',
    icons: [
      { component: FaReact, color: 'text-blue-500', name: 'React' },
      { component: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
      { component: SiExpress, color: 'text-slate-700', name: 'Express' },
      { component: PiFileSqlDuotone, color: 'text-blue-500', name: 'SQL' },
    ],
    imageLeft: true,
  },
  {
    title: 'Notes4All',
    desc: 'A full stack project to help students for notes, assignments and lab manuals. Students can login and download pdf of notes or read it from anywhere. it helps students for their exams.',
    href: '/projects/notes4all',
    image: '/notes4all.png',
    icons: [
      { component: FaReact, color: 'text-blue-500', name: 'React' },
      { component: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
      { component: SiExpress, color: 'text-slate-700', name: 'Express' },
      { component: SiMongodb, color: 'text-green-600', name: 'MongoDB' },
      { component: SiCloudinary, color: 'text-sky-600', name: 'Cloudinary' },
    ],
    imageLeft: true,
  },
  {
    title: 'Smart AI Payment Tracker',
    desc: 'A full stack project to track customer payment and trained a model with TensorFlow.js to predict the customer will delay the payment or not based on past customer transactions.',
    href: '/projects/payment',
    image: '/payment.png',
    icons: [
      { component: FaReact, color: 'text-blue-500', name: 'React' },
      { component: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
      { component: SiExpress, color: 'text-slate-700', name: 'Express' },
      { component: SiMongodb, color: 'text-green-600', name: 'MongoDB' },
      { component: SiTensorflow, color: 'text-yellow-500', name: 'TensorFlow' },
    ],
    imageLeft: false,
  },
  {
    title: 'Smart Attendance System',
    desc: 'A full stack project to help colleges to take attendance of students quickly save time of faculty. I am use WebSockets to see realtime student attendance to faculty.',
    href: '/projects/attendance',
    image: '/attendance.png',
    icons: [
      { component: FaReact, color: 'text-blue-500', name: 'React' },
      { component: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
      { component: SiExpress, color: 'text-slate-700', name: 'Express' },
      { component: SiMongodb, color: 'text-green-600', name: 'MongoDB' },
    ],
    imageLeft: true,
  },
  {
    title: 'Spotify Clone',
    desc: 'A simple spotify working clone to learn html, css and javascript. I deployed this project on github pages. this clone plays songs from github repo.',
    href: null,
    image: '/spotify.png',
    icons: [
      { component: FaHtml5, color: 'text-orange-500', name: 'HTML5' },
      { component: FaCss3Alt, color: 'text-blue-600', name: 'CSS3' },
      { component: SiJavascript, color: 'text-yellow-500', name: 'JavaScript' },
    ],
    imageLeft: false,
    external: true,
  },
  {
    title: 'Electroplating Order Management System',
    desc: 'This is a order management system to manage customers, orders and invoices. this is a PWA (Prograssive web app) for smartphones.',
    href: null,
    image: '/ele.png',
    icons: [
      { component: FaReact, color: 'text-blue-500', name: 'React' },
      { component: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
      { component: SiExpress, color: 'text-slate-700', name: 'Express' },
      { component: SiMongodb, color: 'text-green-600', name: 'MongoDB' },
    ],
    imageLeft: true,
  },
];

const Projects = () => {
  return (
    <div className='bg-slate-100 h-screen overflow-auto text-slate-800 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>

      {/* Hero Section */}
      <div className='bg-slate-900 sticky top-0 text-white py-18 px-6 text-center '>
        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-3'>
          My Projects
        </h1>
        <p className='text-slate-400 text-base md:text-lg max-w-xl mx-auto'>
          I have created many projects which are all showcased here.
        </p>
      </div>

      {/* Projects List Section */}
      <div className='max-w-7xl h-full relative top-[-50px] mx-auto overflow-auto px-6 md:px-12 flex flex-col gap-12 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
        {projects.map((project, index) => (
          <Link
            href={project.href || '#'}
            key={index}
            className={`flex flex-col min-h-[500px] md:flex-row ${project.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } bg-white border border-slate-200 hover:border-blue-900 rounded-2xl shadow-xl overflow-hidden gap-0 hover:shadow-2xl transition-shadow`}
          >
            {/* Project Image */}
            <div className='relative w-full md:w-1/2 h-64 md:h-auto min-h-[260px] bg-slate-200'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className='object-cover'
              />
            </div>

            {/* Project Details */}
            <div className='w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between'>
              <div>
                <h2 className='text-2xl font-bold text-slate-900 mb-3'>
                  {project.title}
                </h2>
                <p className='text-slate-600 text-sm md:text-base leading-relaxed mb-8'>
                  {project.desc}
                </p>
              </div>

              {/* Technologies / Footer Stack */}
              <div>
                <div className='flex text-2xl gap-4 items-center mb-6'>
                  {project.icons.map((Icon, idx) => {
                    const IconComp = Icon.component;
                    return (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-slate-50 border border-slate-100"
                        title={Icon.name}
                      >
                        <IconComp className={`${Icon.color}`} />
                      </div>
                    );
                  })}
                </div>

                {project.href && (
                  <div className='inline-flex items-center text-blue-600 font-semibold gap-2 text-base md:text-lg hover:text-blue-700 transition-colors group'>
                    See details{' '}
                    <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;