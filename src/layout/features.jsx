import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import { Tab } from '@headlessui/react'

export default function Features() {
    
    return (
        <div className='lg:px-24 md:px-10 md:pt-30 pt-5'>
            <div data-aos="fade-up">
                <p className='text-[#2D465E] font-[Helvetica] text-4xl font-bold text-center after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1 after:mx-auto'>Features</p>
                <p className='font-[Helvetica] text-lg text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <Tab.Group data-aos="fade-up" className='flex flex-col justify-center items-center mt-5'>
                <Tab.List className='md:w-4/12 w-10/12 p-2 bg-[#F6F6F7] text-[#2D465E] flex justify-around  rounded-4xl items-center gap-5 h-12'>
                    <Tab className='focus:bg-[#0d83fd] focus:outline-none focus:text-white hover:text-[#0d83fd] h-full w-4/12 rounded-4xl'>Modisit</Tab>
                    <Tab className='focus:bg-[#0d83fd] focus:outline-none focus:text-white hover:text-[#0d83fd] h-full w-4/12 rounded-4xl'>Praesenti</Tab>
                    <Tab className='focus:bg-[#0d83fd] focus:outline-none focus:text-white hover:text-[#0d83fd] h-full w-4/12 rounded-4xl'>Explica</Tab>
                </Tab.List>
                <Tab.Panels className='mt-10'>
                    <Tab.Panel className='md:flex md:flex-row flex-col-reverse w-full'>
                        <div className='w-full md:w-7/12'>
                            <p className='lg:text-2xl text-[#2D465E] font-medium after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1'>Voluptatem dignissimos provident</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>
                                Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <img className='w-full md:w-5/12' src="../../public/tab1.jpg" alt="tab image 1" />
                    </Tab.Panel>
                    <Tab.Panel className='md:flex md:flex-row flex-col-reverse w-full'>
                        <div className='w-full md:w-7/12'>
                            <p className='lg:text-2xl text-[#2D465E] font-medium after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1'>Neque exercitationem debitis</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Provident mollitia neque rerum asperiores dolores quos qui a.</p>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                            </div>
                        </div>
                        <img className='w-full md:w-5/12' src="../../public/tab2.jpg" alt="tab image 2" />
                    </Tab.Panel>
                    <Tab.Panel className='md:flex md:flex-row flex-col-reverse w-full'>
                        <div className='w-full md:w-7/12'>
                            <p className='lg:text-2xl text-[#2D465E] font-medium after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1'>Voluptatibus commodi accusamu</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                <p className='flex justify-start items-center gap-5'><IoCheckmarkDone className='text-[#0d83fd]'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nesciunt perspiciatis, dolore eius doloremque illum nostrum minus sed explicabo iusto magnam magni ipsa nam consectetur eum architecto, at dignissimos culpa?
                                </p>
                            </div>
                        </div>
                        <img className='w-full md:w-5/12' src="../../public/tab3.jpg" alt="tab image 3" />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
