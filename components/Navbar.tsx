"use client";
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {/* Top Contact Bar */}
      <div className='hidden md:flex w-full justify-around items-center text-white bg-black py-2 text-sm'>
        <div className='flex gap-3 items-center'>
          <IoCallOutline className="text-blue-400" />
          <p>+91 9106052826</p>
        </div>
        <div className='flex gap-3 items-center'>
          <IoLocationOutline className="text-blue-400" />
          <p>Kothariya, Rajkot, Gujarat</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white border-b border-slate-100 py-2 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href={'/'} className="flex items-center gap-3">
            <div className="bg-slate-100 p-1 rounded-xl shadow-sm border border-slate-200">
              <Image
                width={62}
                height={62}
                src="/portfolio_image-removebg-preview.png"
                alt="Portfolio Logo"
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://img.icons8.com/color/48/source-code.png";
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className='hidden md:flex items-center gap-8 font-medium text-gray-600 text-sm tracking-wide'>
            <Link
              href={'/'}
              className={`hover:text-blue-600 transition-colors ${pathname === '/' ? 'text-[#0083e0] font-bold' : ''}`}
            >
              Home
            </Link>
            <Link
              href={'/projects'}
              className={`hover:text-blue-600 transition-colors ${pathname === '/projects' ? 'text-[#0083e0] font-bold' : ''}`}
            >
              Projects
            </Link>
            <Link
              href={'/#experience'}
              className='hover:text-blue-600 transition-colors'
            >
              Experience
            </Link>
            <Link
              href={'/#skills'}
              className='hover:text-blue-600 transition-colors'
            >
              Skills
            </Link>

            <Link
              href={"/contact"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-sm transition-all hover:shadow-md"
            >
              Contact Now
            </Link>
          </ul>

          {/* Mobile Quick Action Buttons */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="tel:+919106052826"
              className="p-2 bg-slate-100 rounded-xl text-blue-600 border border-slate-200"
              aria-label="Call Jay"
            >
              <IoCallOutline size={20} />
            </a>
            <Link
              href={"/contact"}
              className="bg-blue-600 text-white text-xs px-4 py-2.5 rounded-xl shadow-sm font-semibold"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;