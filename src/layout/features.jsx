import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import { FaAward ,FaEye} from "react-icons/fa";
import { BsPatchCheck ,BsFeather} from "react-icons/bs";
import { FiSunrise } from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { FaMobileScreenButton , FaChrome } from "react-icons/fa6";
import { Tab } from '@headlessui/react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Autoplay , Keyboard} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Features() {
    
    return (
        <section className='lg:px-24 md:px-10 md:pt-30 pt-5'>
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
            <div data-aos="fade-up" className='flex w-full sm:flex-row flex-col md:px-10 flex-wrap justify-center items-center md:justify-around md:items-stretch'>
                <div className='flex md:w-5/12 lg:w-60 w-full flex-col justify-start items-start p-5 gap-4 bg-red-100 h-auto rounded-xl'>
                    <FaAward className='text-3xl text-orange-300'/>
                    <p className='text-xl font-bold font-[cairo]'>Corporis voluptates</p>
                    <p className='text-gray-700'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className='flex md:w-5/12 lg:w-60 w-full flex-col justify-start items-start p-5 gap-4 bg-blue-300 h-auto rounded-xl'>
                    <BsPatchCheck className='text-3xl text-blue-700'/>
                    <p className='text-xl font-bold font-[cairo]'>Explicabo consectetur</p>
                    <p className='text-gray-700'>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                </div>
                <div className='flex md:w-5/12 lg:w-60 w-full flex-col justify-start items-start p-5 gap-4 bg-green-300 h-auto rounded-xl'>
                    <FiSunrise className='text-3xl text-green-700'/>
                    <p className='text-xl font-bold font-[cairo]'>Ullamco laboris</p>
                    <p className='text-gray-700'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div className='flex md:w-5/12 lg:w-60 w-full flex-col justify-start items-start p-5 gap-4 bg-red-300 h-auto rounded-xl'>
                    <RiShieldCheckLine className='text-3xl text-red-600'/>
                    <p className='text-xl font-bold font-[cairo]'>Labore consequatur</p>
                    <p className='text-gray-700'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
            </div>
            <div className='my-16 grid lg:flex gap-10 justify-center'>
                <div className='lg:w-4/12 grid'>
                    <div data-aos='fade-left' className="flex justify-between items-center">
                        <div className='w-9/12'>
                            <p className='text-[#2D465E] font-medium text-lg'>Use On Any Device</p>
                            <p className='text-gray-500'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.</p>
                        </div>
                        <button className='w-16 h-16 rounded-full flex justify-center items-center text-blue-600 text-2xl bg-blue-100'>
                            <SlScreenDesktop/>
                        </button>
                    </div>
                    <div data-aos='fade-left' className="flex justify-between items-center">
                        <div className='w-9/12'>
                            <p className='text-[#2D465E] font-medium text-lg'>Feather Icons</p>
                            <p className='text-gray-500'>Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.</p>
                        </div>
                        <button className='w-16 h-16 rounded-full flex justify-center items-center text-blue-600 text-2xl bg-blue-100'>
                            <BsFeather/>
                        </button>
                    </div>
                    <div data-aos='fade-left' className="flex justify-between items-center">
                        <div className='w-9/12'>
                            <p className='text-[#2D465E] font-medium text-lg'>Retina Ready</p>
                            <p className='text-gray-500'>Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.</p>
                        </div>
                        <button className='w-16 h-16 rounded-full flex justify-center items-center text-blue-600 text-2xl bg-blue-100'>
                            <FaEye/>
                        </button>
                    </div>
                </div>
                <img data-aos='fade-up' className='lg:w-4/12 md:w-full' src="../../public/phone-app-screen.jpg" alt="phone app screen" />
                <div className='lg:w-4/12 grid'>
                    <div data-aos='fade-right' className="flex justify-between items-center">
                        <button className='w-16 h-16 rounded-full flex justify-center items-center text-blue-600 text-2xl bg-blue-100'>
                            <MdOutlineScreenshotMonitor/>
                        </button>
                        <div className='w-9/12'>
                            <p className='text-[#2D465E] font-medium text-lg'>W3c Valid Code</p>
                            <p className='text-gray-500'>Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' className="flex justify-between items-center">
                        <button className='w-16 h-16 rounded-full flex justify-center items-center text-blue-600 text-2xl bg-blue-100'>
                            <FaMobileScreenButton/>
                        </button>
                        <div className='w-9/12'>
                            <p className='text-[#2D465E] font-medium text-lg'>Fully Responsive</p>
                            <p className='text-gray-500'>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' className="flex justify-between items-center">
                        <button className='w-16 h-16 rounded-full flex justify-center items-center text-blue-600 text-2xl bg-blue-100'>
                            <FaChrome/>
                        </button>
                        <div className='w-9/12'>
                            <p className='text-[#2D465E] font-medium text-lg'>Browser Compatibility</p>
                            <p className='text-gray-500'>Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos='fade-up' className='bg-[#0d83fd] z-1 rounded-2xl p-5 md:p-20 flex gap-5 flex-col justify-center items-center'>
                <p className='text-white md:text-6xl text-2xl relative z-1 text-center '>Maecenas tempus tellus eget condimentum</p>
                <p className='text-white text-xl relative z-1 text-center'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel</p>
                <button className='hover:bg-white hover:text-[#0d83fd] text-white xl:w-2/12 md:w-6/12 z-1 rounded-2xl h-10 border-1 border-white'>
                    <a href="#">
                        Call To Action
                    </a>
                </button>
            </div>
            <Swiper
                navigation={true}
                modules={[Navigation,Autoplay,Keyboard]}
                grabCursor={true}
                spaceBetween={0}
                keyboard={{enabled:true}}
                loop={true}
                breakpoints={{
                    320:{
                        slidesPerView:2,
                        centeredSlides: true,
                    },
                    768:{
                        slidesPerView:4,
                        centeredSlides: true,
                    },
                    1024:{
                        slidesPerView:6,
                        centeredSlides: true,
                    },
                }}
                autoplay={{
                    delay: 2000, 
                    disableOnInteraction: false,
                }}
                speed={1000}
                className='mySwiper mt-10'
                data-aos="fade-up"
            >
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo1.png" alt="logo1" /></SwiperSlide>
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo2.png" alt="logo2" /></SwiperSlide>
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo3.png" alt="logo3" /></SwiperSlide>
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo4.png" alt="logo4" /></SwiperSlide>
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo5.png" alt="logo5" /></SwiperSlide>
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo6.png" alt="logo6" /></SwiperSlide>
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo7.png" alt="logo7" /></SwiperSlide>
                <SwiperSlide><img className='w-4/12 grayscale hover:grayscale-0' src="../../public/logo8.png" alt="logo8" /></SwiperSlide>
            </Swiper>
        </section>
    )
}
