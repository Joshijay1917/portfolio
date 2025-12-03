"use client"
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  console.log("route=", pathname);

  return (
    <div>
      <div className='flex w-full justify-around text-white'>
        <div className='flex gap-3 items-center'>
            <IoCallOutline />
            <p>+91 9106052826</p>
        </div>
        <div className='flex gap-3 items-center'>
            <IoLocationOutline />
            <p>Kothariya, Rajkot, Gujarat</p>
        </div>
      </div>

      <div className='flex justify-around px-30 bg-gray-200'>
        <img width={80} src="/portfolio_image-removebg-preview.png" />
        <ul className='flex gap-10 items-center text-xl font-medium text-gray-600 cursor-pointer'>
            <Link href={'/'} className={`p-5 ${pathname === '/' ? 'text-[#0083e0]' : ''}`}>Home</Link>
            <Link href={'/projects'} className={`p-5 ${pathname === '/projects' ? 'text-[#0083e0]' : ''}`}>Projects</Link>
            <Link href={'/#experience'} className='p-5'>Experience</Link>
            <Link href={'/#skills'} className='p-5'>Skills</Link>
            <button onClick={()=>router.push("/contact")} className={`bg-background hover:scale-95 text-white p-2 rounded-2xl px-4 shadow-2xl cursor-pointer`}>Contact Now</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
