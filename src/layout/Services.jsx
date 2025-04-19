import React from 'react'
import { MdArrowRightAlt , MdOutlineShowChart} from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { PiTreeStructureThin } from "react-icons/pi";

export default function Services() {
    return (
        <section className='bg-[#F3F9FF] py-10'>
            <div data-aos="fade-up">
                <p className='text-[#2D465E] font-[Helvetica] text-4xl font-bold text-center mt-10 after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1 after:mx-auto'>Services</p>
                <p className='font-[Helvetica] text-lg text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className='mt-10 lg:px-16 px-5 lg:flex justify-center flex-wrap grid gap-5'>
                <div data-aos='fade-up' className=' group/card lg:w-5/12 w-full  flex items-start justify-center gap-10 bg-white rounded-2xl p-5'>
                    <MdOutlineShowChart className='group-hover/card:bg-blue-600 group-hover/card:text-white xl:w-3/12 lg:w-5/12 md:w-3/12 w-full  h-16 p-2 bg-blue-200 rounded-xl text-blue-600 scale-80'/>
                    <div className='flex flex-col gap-5 items-start'>
                        <p className='text-[#2D465E] text-2xl '>Nesciunt Mete</p>
                        <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                        <button className='group/button flex justify-center items-center text-blue-600 hover:text-blue-400'>Read More <MdArrowRightAlt className=' group-hover/button:ml-1'/></button>
                    </div>
                </div>
                <div data-aos='fade-up' className=' group/card lg:w-5/12 w-full  flex items-start justify-center gap-10 bg-white rounded-2xl p-5'>
                    <PiTreeStructureThin className='group-hover/card:bg-blue-600 group-hover/card:text-white xl:w-3/12 lg:w-5/12 md:w-3/12 w-full h-16 p-2 bg-blue-200 rounded-xl text-blue-600 scale-80'/>
                    <div className='flex flex-col gap-5 items-start'>
                        <p className='text-[#2D465E] text-2xl '>Eosle Commodi</p>
                        <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        <button className='group/button flex justify-center items-center text-blue-600 hover:text-blue-400'>Read More <MdArrowRightAlt className=' group-hover/button:ml-1'/></button>
                    </div>
                </div>
                <div data-aos='fade-up' className=' group/card lg:w-5/12 w-full  flex items-start justify-center gap-10 bg-white rounded-2xl p-5'>
                    <AiOutlineFundProjectionScreen className='group-hover/card:bg-blue-600 group-hover/card:text-white xl:w-3/12 lg:w-5/12 md:w-3/12 w-full h-16 p-2 bg-blue-200 rounded-xl text-blue-600 scale-80'/>
                    <div className='flex flex-col gap-5 items-start'>
                        <p className='text-[#2D465E] text-2xl '>Ledo Markt</p>
                        <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                        <button className='group/button flex justify-center items-center text-blue-600 hover:text-blue-400'>Read More <MdArrowRightAlt className=' group-hover/button:ml-1'/></button>
                    </div>
                </div>
                <div data-aos='fade-up' className=' group/card lg:w-5/12 w-full  flex items-start justify-center gap-10 bg-white rounded-2xl p-5'>
                    <BsClipboardData className='group-hover/card:bg-blue-600 group-hover/card:text-white xl:w-3/12 lg:w-5/12 md:w-3/12 w-full h-16 p-2 bg-blue-200 rounded-xl text-blue-600 scale-80'/>
                    <div className='flex flex-col gap-5 items-start'>
                        <p className='text-[#2D465E] text-2xl '>A1speriores Commodit</p>
                        <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                        <button className='group/button flex justify-center items-center text-blue-600 hover:text-blue-400'>Read More <MdArrowRightAlt className=' group-hover/button:ml-1'/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
