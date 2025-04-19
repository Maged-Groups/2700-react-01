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
                    <p className='flex items-start relative justify-start'><svg xmlns="http://www.w3.org/2000/svg" className='relative -top-10 h-20 w-20' viewBox="0 0 512 512">
	<path fill="#86C1FE" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"></path>
</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.<svg className='relative -bottom-10 h-20 w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1408">
	<path fill="#86C1FE" d="M768 192v704q0 104-40.5 198.5T618 1258t-163.5 109.5T256 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h384q80 0 136 56t56 136m896 0v704q0 104-40.5 198.5T1514 1258t-163.5 109.5T1152 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V192q0-80 56-136t136-56h384q80 0 136 56t56 136"></path>
</svg></p>
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
                    <p className='flex items-start relative justify-start'><svg xmlns="http://www.w3.org/2000/svg" className='relative -top-10 h-20 w-20' viewBox="0 0 512 512">
	<path fill="#86C1FE" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"></path>
</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.<svg className='relative -bottom-10 h-20 w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1408">
	<path fill="#86C1FE" d="M768 192v704q0 104-40.5 198.5T618 1258t-163.5 109.5T256 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h384q80 0 136 56t56 136m896 0v704q0 104-40.5 198.5T1514 1258t-163.5 109.5T1152 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V192q0-80 56-136t136-56h384q80 0 136 56t56 136"></path>
</svg></p>
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
                    <p className='flex items-start relative justify-start'><svg xmlns="http://www.w3.org/2000/svg" className='relative -top-10 h-20 w-20' viewBox="0 0 512 512">
	<path fill="#86C1FE" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"></path>
</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.<svg className='relative -bottom-10 h-20 w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1408">
	<path fill="#86C1FE" d="M768 192v704q0 104-40.5 198.5T618 1258t-163.5 109.5T256 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h384q80 0 136 56t56 136m896 0v704q0 104-40.5 198.5T1514 1258t-163.5 109.5T1152 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V192q0-80 56-136t136-56h384q80 0 136 56t56 136"></path>
</svg></p>
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
                    <p className='flex items-start relative justify-start'><svg xmlns="http://www.w3.org/2000/svg" className='relative -top-10 h-20 w-20' viewBox="0 0 512 512">
	<path fill="#86C1FE" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48m-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48"></path>
</svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem itaque, nemo libero obcaecati officiis a rem ullam atque, excepturi beatae at? Unde magnam ullam molestiae dignissimos! Officia impedit laborum sint.<svg className='relative -bottom-10 h-20 w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1408">
	<path fill="#86C1FE" d="M768 192v704q0 104-40.5 198.5T618 1258t-163.5 109.5T256 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h384q80 0 136 56t56 136m896 0v704q0 104-40.5 198.5T1514 1258t-163.5 109.5T1152 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V192q0-80 56-136t136-56h384q80 0 136 56t56 136"></path>
</svg></p>
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
