import React from 'react'
import CountUp from 'react-countup';

export default function Testimonials() {
    return (
        <section className='bg-[#F3F9FF]'>
            <div>

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
