import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

export default function Contact() {
    return (
        <section className='bg-[#F3F9FF] lg:px-24 p-1 pb-16'>
            <div data-aos="fade-up">
                <p className='text-[#2D465E] font-[Helvetica] text-4xl font-bold text-center after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1 after:mx-auto'>Contact</p>
                <p className='font-[Helvetica] text-lg text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className='lg:flex grid justify-center mt-16 gap-5'>
                <div className='p-10 gap-9  flex flex-col justify-center items-start rounded-2xl text-white bg-[#0d83fd] lg:w-5/12 w-full'>
                    <p className='font-[Helvetica] text-3xl font-medium'>Contact Info</p>
                    <p className='text-md'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
                    <div className='flex justify-start items-center gap-8 '>
                        <button className='flex justify-center items-center h-14 w-14 bg-[#3195FD] rounded-full'>

                        <CiLocationOn className='text-xl'/>
                        </button>
                        <div>
                            <p className='font-[Helvetica] text-2xl font-medium'>Our Location</p>
                            <p className='font-[Helvetica] text-md font-medium'>A108 Adam Street</p>
                            <p className='font-[Helvetica] text-md font-medium'>New York, NY 535022</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-8 '>
                        <button className='flex justify-center items-center h-14 w-14 bg-[#3195FD] rounded-full'>

                        <FiPhone className='text-xl'/>
                        </button>
                        <div>
                            <p className='font-[Helvetica] text-2xl font-medium'>Phone Number</p>
                            <p className='font-[Helvetica] text-md font-medium'>+1 5589 55488 55</p>
                            <p className='font-[Helvetica] text-md font-medium'>+1 6678 254445 41</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-8 '>
                        <button className='flex justify-center items-center h-14 w-14 bg-[#3195FD] rounded-full'>

                        <CiMail className='text-xl '/>
                        </button>
                        <div>
                            <p className='font-[Helvetica] text-2xl font-medium'>Email Address</p>
                            <p className='font-[Helvetica] text-md font-medium'>info@example.com</p>
                            <p className='font-[Helvetica] text-md font-medium'>contact@example.com</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-8/12 w-full shadow-2xl bg-white gap-5 p-10 rounded-2xl flex flex-col'>
                    <p className='text-[#2D465E] font-[Helvetica] text-2xl font-bold'>Get In Touch</p>
                    <p className='text-gray-400'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
                    <form className="">
                        <div className='flex justify-between gap-5'>
                            <input
                                placeholder='Your Name' type="text" className="mt-10 w-6/12 px-4 py-2 border-1 border-gray-200 outline-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                placeholder='Your Email' type="email" className="mt-10 w-6/12 px-4 py-2 border-1 border-gray-200 outline-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                            <input
                                placeholder='Subject' type="text" className="mt-10 w-full px-4 py-2 border-1 border-gray-200 outline-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        <div>
                            <textarea
                                placeholder='Message' rows="4" className="mt-10 w-full px-4 py-2 border-1 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        
                    </form>

                    <button type='submit' className='bg-[#0d83fd] text-white py-4 px-8 rounded-4xl self-center'><a href="#">Send Message</a></button>
                </div>
            </div>
        </section>
    )
}
