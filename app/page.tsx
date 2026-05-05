import SwipeCardStack from "@/components/Projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaStar,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoBookmark, IoShieldCheckmark } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const metadata: Metadata = {
  title: "Jay Joshi | Full Stack MERN Developer in Rajkot",
  description: "Portfolio of Jay Joshi, a 4th-semester CS student at VVP Engineering College. Specializing in MERN stack, Next.js, and Privacy-First AI Agents. Based in Rajkot, Gujarat.",
  keywords: [
    "Jay Joshi",
    "Full Stack Developer Rajkot",
    "VVP Engineering College",
    "MERN Stack Developer",
    "Privacy Agent AI"
  ],
};

const skills = [
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", desc: "Scalable server-side JS runtimes and RESTful APIs." },
  { name: "React.js", icon: FaReact, color: "text-blue-500", desc: "Dynamic component-driven user interface architectures." },
  { name: "Express.js", icon: SiExpress, color: "text-gray-700", desc: "Fast, unopinionated framework for web applications." },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600", desc: "Non-relational database design and document modeling." },
  { name: "React Native", icon: TbBrandReactNative, color: "text-sky-500", desc: "Cross-platform native mobile application development." },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900", desc: "Full-stack production frameworks with edge rendering." },
  { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-500", desc: "Modern dynamic and asynchronous web scripting." },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500", desc: "Semantic structural foundations for the web." },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600", desc: "Modern styling, flexbox, grid, and animations." },
  { name: "MySQL", icon: GrMysql, color: "text-blue-400", desc: "Relational databases and relational schema optimization." },
];

const projects = [
  {
    title: "Notes4All",
    desc: "A complete full-stack student resource portal to help students manage notes, assignments, and lab manuals.",
    href: "/projects/notes4all",
    image: "/notes4all.png",
  },
  {
    title: "Smart AI Payment Tracker",
    desc: "A full-stack AI tool to track customer payments with predictive analysis for payment delays.",
    href: "/projects/payment",
    image: "/payment.png",
  },
  {
    title: "Smart Attendance System",
    desc: "A complete full-stack project to take student attendance through highly secure QR Code scanning.",
    href: "/projects/attendance",
    image: "/attendance.png",
  },
  {
    title: "Privacy Agent",
    desc: "A full-stack AI-Driven Mobile Assistant built with a privacy-first, on-device local memory architecture.",
    href: "/projects/privacyagent",
    image: "/privacyagent.png",
  },
];

const experiences = [
  {
    company: "White Label Fox Pvt. Ltd.",
    role: "MERN Intern",
    period: "Jan 2026 - Mar 2026",
    desc: "Learned real-world product development with hands-on experience using Node.js, Express, Nest.js, and Next.js.",
    image: "/white-fox.jpg",
    icon: FaBriefcase,
  },
  {
    company: "Gardi Vidhyapith Hackathon",
    role: "Backend Developer",
    period: "24-Hour Event",
    desc: "Created robust API routes, managed database operations, and built database schemas in a collaborative, fast-paced setting.",
    image: "/h2.jpg",
    icon: IoShieldCheckmark,
  },
  {
    company: "Code Carnival Hackathon",
    role: "AI / Backend Developer",
    period: "36-Hour Event",
    desc: "Designed the architecture and trained a predictive model using TensorFlow.js for in-browser predictions.",
    image: "/h1.png",
    icon: FaStar,
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans selection:bg-blue-100">
      {/* Hero Section */}
      <div className="relative w-full h-[360px] md:h-[500px] bg-slate-900 md:bg-slate-900/60 text-white overflow-hidden">
        <Image
          src="/me.jpg"
          alt="Jay Joshi - Full Stack Developer and MERN Stack Expert"
          fill
          priority
          className="object-cover object-center md:object-top mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        <div className="max-w-7xl mx-auto flex flex-col justify-end md:items-end h-full px-6 md:px-12 pb-12 md:pb-16 relative z-10">
          <div className="flex flex-col md:items-end gap-2 max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm md:text-base tracking-widest uppercase">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Jay Joshi
            </h1>
            <p className="text-lg md:text-end md:text-2xl text-slate-300 font-medium max-w-2xl mt-1">
              Building practical, real-world utility tools and privacy-first web solutions that solve actual business challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Technologies I Know
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            A versatile set of full-stack and front-to-back development technologies I utilize to build modern, scalable apps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 group"
              >
                <div>
                  <IconComponent className={`${skill.color} text-4xl mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section className='px-6 md:px-18 py-22'>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Projects
          </h2>
          <Link
            href={"/projects"}
            className="flex items-center gap-3 text-blue-600 text-lg md:text-xl font-medium cursor-pointer hover:text-blue-700 transition-colors group"
          >
            Show all projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className='hidden md:flex md:anim-contain md:m-10 md:mr-40 md:grid grid-cols-4 md:gap-6'>
          <Link aria-label="Notes4All - Full Stack Student Resource Portal by Jay Joshi" href={'/projects/notes4all'} className='w-[450px] card-1 bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/notes4all.png" alt="Notes4All - Full Stack Student Resource Portal by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Notes4All</h2>
              <p>A complete full stack project to help students for notes, assignments and lab manuals.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
          <Link aria-label="Smart AI Payment Tracker by Jay Joshi" href={'/projects/payment'} className='w-[450px] card-2 bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/payment.png" alt="Smart AI Payment Tracker by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Smart AI Payment Tracker</h2>
              <p>A complete full stack project to track customer payments with pridction of payment delay or not.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
          <Link aria-label="Smart Attendance System by Jay Joshi" href={'/projects/attendance'} className='w-[450px] card-3 bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/attendance.png" alt="Smart Attendance System by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Smart Attendance System</h2>
              <p>A complete full stack project to take student attendance through QR Code.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
          <Link aria-label="Privacy Agent AI Assistant by Jay Joshi" href={'/projects/privacyagent'} className='w-[450px] card-4 bg-white rounded-2xl overflow-clip shadow-2xl'>
            <Image src="/privacyagent.png" alt="Privacy Agent AI Assistant by Jay Joshi" width={450} height={250} className="w-full object-cover" />
            <div className='flex flex-col gap-5 p-5'>
              <h2 className='font-medium text-3xl'>Privacy Agent</h2>
              <p>A complete full stack AI-Driven Mobile Assistant with On-Device Memory.</p>
              <div className='flex text-blue-600 items-center gap-3'>View More <FaArrowRight /></div>
            </div>
          </Link>
        </div>
        <SwipeCardStack />
      </section>

      {/* Education & Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Education Block */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <FaGraduationCap className="text-blue-600" /> Education
            </h2>

            <div className="relative border-l border-slate-200 ml-3 pl-8 flex flex-col gap-10">
              {/* College Card */}
              <div className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full ring-4 ring-white" />
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                  <span className="text-sm font-semibold text-blue-600 tracking-wide">
                    2024 - 2028
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Currently pursuing a Bachelor's degree at <strong>V.V.P. Engineering College</strong>, Rajkot. Maintained a 9.13 CPI in the first year.
                  </p>
                </div>
              </div>

              {/* Higher Secondary Card */}
              <div className="relative">
                <span className="absolute -left-[41px] flex items-center justify-center w-5 h-5 bg-slate-400 rounded-full ring-4 ring-white" />
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                  <span className="text-sm font-semibold text-slate-500 tracking-wide">
                    2022 - 2024
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                    Higher Secondary Education
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Completed education at Patanjali School, Rajkot. Secured <strong>92.49%</strong> in 12th Board and qualified JEE with an <strong>89 percentile</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Block */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
              <FaBriefcase className="text-blue-600" /> Experience & Roles
            </h2>

            <div className="flex flex-col gap-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-5"
                  >
                    <div className="p-3 rounded-xl bg-slate-50 text-blue-600 text-2xl shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline gap-4 flex-wrap">
                        <h3 className="text-lg font-bold text-slate-900">
                          {exp.company}
                        </h3>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <span className="block text-sm font-semibold text-blue-600 mt-0.5 mb-3">
                        {exp.role}
                      </span>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}