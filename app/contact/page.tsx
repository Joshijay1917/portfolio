import ContactForm from '@/components/ContactForm';
import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

const ContactPage = () => {
    return (
        <div className='bg-slate-200 min-h-screen'>
            {/* Header Section */}
            <div className='bg-blue-900 text-white py-20 px-6 text-center'>
                <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-3'>
                    Contact Now
                </h1>
                <p className='text-slate-400 text-base md:text-lg max-w-xl mx-auto'>
                    Have a question or want to collaborate? Feel free to reach out to me through any of these channels.
                </p>
            </div>

            {/* Main Content Section */}
            <div className='max-w-7xl mx-auto px-6 md:px-12 -mt-10 pb-20 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>

                    {/* Get in Touch / Info Box */}
                    <div className='bg-white border border-slate-100 shadow-sm rounded-2xl p-8 h-full flex flex-col justify-between'>
                        <div>
                            <h2 className='text-2xl font-bold text-slate-900 mb-8'>
                                Get in touch
                            </h2>
                            <div className='flex flex-col gap-6'>
                                {/* WhatsApp */}
                                <div className='flex gap-4 items-center p-4 rounded-xl hover:bg-slate-50 transition-colors'>
                                    <div className='bg-green-50 text-green-500 p-3.5 rounded-2xl text-2xl'>
                                        <IoCallOutline />
                                    </div>
                                    <div>
                                        <span className='block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-0.5'>
                                            WhatsApp
                                        </span>
                                        <a
                                            href="https://wa.me/919429248465"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='text-slate-900 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors'
                                        >
                                            +91 9429248465
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex gap-4 items-center p-4 rounded-xl hover:bg-slate-50 transition-colors'>
                                    <div className='bg-red-50 text-red-500 p-3.5 rounded-2xl text-2xl'>
                                        <BiLogoGmail />
                                    </div>
                                    <div>
                                        <span className='block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-0.5'>
                                            Mail
                                        </span>
                                        <a
                                            href="mailto:jayjoshi1912007@gmail.com"
                                            className='text-slate-900 font-medium text-sm md:text-base break-all hover:text-blue-600 transition-colors block'
                                        >
                                            jayjoshi1912007@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className='flex gap-4 items-center p-4 rounded-xl hover:bg-slate-50 transition-colors'>
                                    <div className='bg-blue-50 text-blue-500 p-3.5 rounded-2xl text-2xl'>
                                        <FaLinkedin />
                                    </div>
                                    <div>
                                        <span className='block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-0.5'>
                                            LinkedIn
                                        </span>
                                        <a
                                            className='text-slate-900 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors block'
                                            href="https://www.linkedin.com/in/jayjoshi19"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            @jayjoshi19
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional info footer */}
                        <div className='border-t border-slate-100 mt-10 pt-6 text-sm text-slate-400 text-center lg:text-left'>
                            Available for freelance projects, collaborations, and full-time engineering roles.
                        </div>
                    </div>

                    {/* Contact Form Box */}
                    <div className='bg-white border border-slate-100 shadow-sm rounded-2xl p-4 md:p-8 h-full'>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;