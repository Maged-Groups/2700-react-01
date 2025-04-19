import React from 'react'
import { FaStar } from "react-icons/fa";
import CountUp from 'react-countup';
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    return (
        <section className='bg-[#F3F9FF]'>
            <div data-aos="fade-up" className='pt-20'>
                <p className='text-[#2D465E] font-[Helvetica] text-4xl font-bold text-center after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1 after:mx-auto'>Testimonials</p>
                <p className='font-[Helvetica] text-lg text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className='mt-10 lg:px-20 px-5 lg:flex justify-center flex-wrap grid gap-5'>
                <div data-aos='fade-up' className='lg:w-5/12 w-full grid gap-10 bg-white shadow-2xl p-7'>
                    <div className="flex justify-start items-center gap-4">
                        <img className='h-14 w-14 rounded-full' src="../../public/ratting1.jpg" alt="" />
                        <div>
                            <p>Saul Goodman</p>
                            <p className='text-gray-600 text-sm'>Ceo & Founder</p>
                            <div className='flex justify-start items-start'>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                            </div>
                        </div>
                    </div>
                    <p className='flex items-start justify-start'>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.”                               </p>
                </div>
                <div data-aos='fade-up' className='lg:w-5/12 w-full grid gap-10 bg-white shadow-2xl p-7'>
                    <div className="flex justify-start items-center gap-4">
                        <img className='h-14 w-14 rounded-full' src="../../public/ratting2.jpg" alt="" />
                        <div>
                            <p>Jacob Miller</p>
                            <p className='text-gray-600 text-sm'>Designer</p>
                            <div className='flex justify-start items-start'>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                            </div>
                        </div>
                    </div>
                    <p className='flex items-start justify-start'>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.”                               </p>
                </div>
                <div data-aos='fade-up' className='lg:w-5/12 w-full grid gap-10 bg-white shadow-2xl p-7'>
                    <div className="flex justify-start items-center gap-4">
                        <img className='h-14 w-14 rounded-full' src="../../public/ratting3.jpg" alt="" />
                        <div>
                            <p>Logan Davis</p>
                            <p className='text-gray-600 text-sm'>Store Owner</p>
                            <div className='flex justify-start items-start'>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                            </div>
                        </div>
                    </div>
                    <p className='flex items-start justify-start'>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.”                               </p>
                </div>
                <div data-aos='fade-up' className='lg:w-5/12 w-full grid gap-10 bg-white shadow-2xl p-7'>
                    <div className="flex justify-start items-center gap-4">
                        <img className='h-14 w-14 rounded-full' src="../../public/ratting4.jpg" alt="" />
                        <div>
                            <p>Matt Brandon</p>
                            <p className='text-gray-600 text-sm'>Freelancer</p>
                            <div className='flex justify-start items-start'>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                            </div>
                        </div>
                    </div>
                    <p className='flex items-start justify-start'>“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.”                               </p>
                </div>
            </div>
            <div data-aos='fade-up' className='md:flex grid w-full justify-around mt-12 bg-white py-10'>
                <div className='grid text-center'>
                    <div className='after:content-[""] after:block after:bg-[#0d83fd] after:w-10 after:my-9 after:h-1 after:mx-auto'><CountUp className='text-5xl font-bold' end={521} duration={4} enableScrollSpy scrollSpyOnce/></div>
                    <p className='text-gray-600'>Clients</p>
                </div>
                <div className='grid text-center'>
                    <div className='after:content-[""] after:block after:bg-[#0d83fd] after:w-10 after:my-9 after:h-1 after:mx-auto'><CountUp className='text-5xl font-bold' end={1453} duration={4} enableScrollSpy scrollSpyOnce/></div>
                    <p className='text-gray-600'>Projects</p>
                </div>
                <div className='grid text-center'>
                    <div className='after:content-[""] after:block after:bg-[#0d83fd] after:w-10 after:my-9 after:h-1 after:mx-auto'><CountUp className='text-5xl font-bold' end={232} duration={4} enableScrollSpy scrollSpyOnce/></div>
                    <p className='text-gray-600'>Hours Of Support</p>
                </div>
                <div className='grid text-center'>
                    <div className='after:content-[""] after:block after:bg-[#0d83fd] after:w-10 after:my-9 after:h-1 after:mx-auto'><CountUp className='text-5xl font-bold' end={32} duration={4} enableScrollSpy scrollSpyOnce/></div>
                    <p className='text-gray-600'>Workers</p>
                </div>
            </div>
        </section>
    )
}
