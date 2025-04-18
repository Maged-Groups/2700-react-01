import React from 'react'
import { FaHamburger ,FaRegFileWord ,FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegCircleRight , FaFilePdf } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../layout/footer'
export default function ServicesDetails() {
    const openHamburgerMenu = () =>{
        document.querySelector('#hamburgerMenu').classList.toggle('hidden')
    }
    const closeHamburgerMenu = () =>{
        document.querySelector('#hamburgerMenu').classList.add('hidden')
    }
    return (
        <div>
            <div id="hamburgerMenu" className="hidden">
                <button className="fixed z-100 top-25 text-3xl cursor-pointer right-5" onClick={closeHamburgerMenu}>
                    <IoClose/>
                </button>
                <div className="flex fixed flex-col bg-white z-50 text-black h-7/12 rounded-3xl w-8/12 top-35 left-15 shadow-2xl p-8 gap-5">
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
            </div>
            <nav className="flex fixed opacity-90 w-11/12 lg:left-12 md:left-9 sm:left-6 left-4 top-10 justify-between items-center mb-10 shadow-lg px-5 rounded-2xl h-16 bg-white z-50">
                <p className="text-lg md:w-2/12">iLanding</p>
                <div className="md:flex justify-evenly md:w-8/12 hidden ">
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
                <div className="flex gap-3 w-6/12 md:w-2/12 h-7/12">
                    <button className="md:w-full w-10/12 rounded-2xl text-white h-full bg-[#0d83fd]">Get Started</button>
                    <button className=" md:hidden" onClick={openHamburgerMenu}><FaHamburger/></button>
                </div>
            </nav>
            <div className='text-center py-30 bg-[#e1efff]'>
                <p className='font-[tahoma] font-bold text-xl text-[#2D465E]'>Service Details</p>
                <div className='flex justify-center items-center gap-3'><a className='text-[#0d83fd]'>Home</a> / <a>Service Details</a></div>
            </div>
            <div className='md:flex grid mt-10 justify-between xl:mx-24 lg:mx-14 md:mx-10 gap-16'>
                <div className='flex flex-col gap-8 sm:w-4/12 w-full'>
                    <div className='grid w-full gap-7'>
                        <div className='p-2 w-full bg-white shadow-xl'>
                            <p className='text-[#2D465E] text-xl font-bold font-[tahoma] after:content-[""] after:block after:w-full after:h-0.5 after:bg-gray-300 after:mt-5'>Services List</p>
                            <div className='grid  gap-5 mt-4'>
                                <div className='flex gap-2 items-center justify-start h-14 hover:bg-[#e1efff] hover:text-[#0d83fd] text-white w-full bg-[#0d83fd] pl-5'><FaRegCircleRight/>Web Design</div>
                                <div className='flex gap-2 items-center justify-start h-14 hover:bg-[#e1efff] hover:text-[#0d83fd] text-black w-full bg-gray-50 pl-5'><FaRegCircleRight/>Web Design</div>
                                <div className='flex gap-2 items-center justify-start h-14 hover:bg-[#e1efff] hover:text-[#0d83fd] text-black w-full bg-gray-50 pl-5'><FaRegCircleRight/>Product Management</div>
                                <div className='flex gap-2 items-center justify-start h-14 hover:bg-[#e1efff] hover:text-[#0d83fd] text-black w-full bg-gray-50 pl-5'><FaRegCircleRight/>Graphic Design</div>
                                <div className='flex gap-2 items-center justify-start h-14 hover:bg-[#e1efff] hover:text-[#0d83fd] text-black w-full bg-gray-50 pl-5'><FaRegCircleRight/>Marketing</div>
                            </div>
                        </div>
                    </div>
                    <div className='grid w-full gap-7'>
                        <div className='p-2 w-full bg-white shadow-xl'>
                            <p className='text-[#2D465E] text-xl font-bold font-[tahoma] after:content-[""] after:block after:w-full after:h-0.5 after:bg-gray-300 after:mt-5'>Download Catalog</p>
                            <div className='grid  gap-5 mt-4'>
                                <div className='flex gap-2 items-center justify-start h-14 hover:text-[#0d83fd] pl-5'><FaFilePdf className='text-2xl text-[#0d83fd]'/>Catalog Pdf</div>
                                <div className='flex gap-2 items-center justify-start h-14 hover:text-[#0d83fd] pl-5'><FaRegFileWord className='text-2xl text-[#0d83fd]'/>Catalog Doc</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#0d83fd] flex flex-col items-center w-full gap-5 p-5 justify-center'>
                        <TfiHeadphoneAlt className='text-white scale-200'/>
                        <p className='text-white text-xl font-medium'>Have a Question?</p>
                        <p className='text-white gap-4 flex items-center'><FaPhoneAlt/>+1 5589 55488 55</p>
                        <p className='text-white gap-4 flex items-center'><MdOutlineMail/>contact@example.com</p>
                    </div>
                </div>
                <div className='sm:w-8/12 w-full'>
                    <img src="../../public/services.jpg" alt="services image" />
                    <p className='text-2xl font-medium text-[#2D465E] mt-4'>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</p>
                    <p className='mt-4'>Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.</p>
                    <div className='mt-4'>
                        <p className='flex justify-start items-center mt-3 gap-4'><FaRegCheckCircle className='text-[#0d83fd] text-xl'/>Aut eum totam accusantium voluptatem.</p>
                        <p className='flex justify-start items-center mt-3 gap-4'><FaRegCheckCircle className='text-[#0d83fd] text-xl'/>Assumenda et porro nisi nihil nesciunt voluptatibus.</p>
                        <p className='flex justify-start items-center mt-3 gap-4'><FaRegCheckCircle className='text-[#0d83fd] text-xl'/>Ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                    <p className='mt-4'>Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.</p>
                    <p className='mt-4'>Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
