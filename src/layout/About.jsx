import React from 'react'
import { FaCheckCircle ,FaPhoneAlt} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    return (
        <section className='flex flex-col gap-8 md:flex-row justify-between lg:px-24 md:px-10 md:pt-10 mt-10'>
            <div data-aos="fade-up" className='grid gap-10 w-full md:w-8/12'>
                <p className='text-[#0d83fd] text-xl font-[Helvetica] font-bold'>MORE ABOUT US</p>
                <p className='text-[#2D465E] text-3xl font-[Helvetica] font-bold'>Voluptas enim suscipit temporibus</p>
                <p className='text-gray-500 font-[Helvetica]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='w-full lg:flex flex-wrap grid'>
                    <div className='lg:w-6/12 w-full flex justify-start font-[Helvetica] items-center gap-3'><FaCheckCircle className='text-[#0d83fd]'/>Lorem ipsum dolor</div>
                    <div className='lg:w-6/12 w-full flex justify-start font-[Helvetica] items-center gap-3'><FaCheckCircle className='text-[#0d83fd]'/>Commodi placeat id</div>
                    <div className='lg:w-6/12 w-full flex justify-start font-[Helvetica] items-center gap-3'><FaCheckCircle className='text-[#0d83fd]'/>Accusamus porro quia</div>
                    <div className='lg:w-6/12 w-full flex justify-start font-[Helvetica] items-center gap-3'><FaCheckCircle className='text-[#0d83fd]'/>Doloremque saepe officiis</div>
                    <div className='lg:w-6/12 w-full flex justify-start font-[Helvetica] items-center gap-3'><FaCheckCircle className='text-[#0d83fd]'/>Mollitia consectetur soluta</div>
                    <div className='lg:w-6/12 w-full flex justify-start font-[Helvetica] items-center gap-3'><FaCheckCircle className='text-[#0d83fd]'/>Inventore ipsum voluptatem</div>
                </div>
                <div className='lg:flex grid sm:justify-start sm:items-center'>
                    <div className=' flex gap-3 w-full lg:w-8/12 justify-start items-center'>
                        <img src="../../public/avatar-1.jpg" className='rounded-full w-3/12' alt="avatar" />
                        <div>
                            <p className='text-[#2D465E] w-full text-lg font-[Helvetica]'>Mario Smith</p>
                            <p className='text-[#0d83fd] w-full text-xl font-[Helvetica]'>CEO & Founder</p>
                        </div>
                    </div>
                    <div className='flex gap-3 w-full lg:w-4/12 justify-start items-center'>
                        <FaPhoneAlt className='text-[#0d83fd] text-2xl'/>
                        <div>
                            <p className='text-gray-600 font-[Helvetica]'>Call us anytime</p>
                            <p className='font-[Helvetica]'>+123 456-789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className='md:block grid'>
                <img className=' h-full w-full rounded-4xl p-3 md:p-0' src="../../public/about-1.jpg" alt="image" />
                <div className='md:absolute bottom-35 left-5 md:bg-white p-3 md:scale-200 md:w-2/12 z-1'>
                    <img src="../../public/about-2.jpg" className='rounded-xl' alt="image" />
                </div>
            </div>
        </section>
    )
}
