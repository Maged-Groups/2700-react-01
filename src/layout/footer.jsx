import React from 'react'
import { FaXTwitter , FaLinkedin} from "react-icons/fa6";
import { FaFacebookF , FaInstagram } from "react-icons/fa";



export default function Footer() {
    return (
        <div className='mt-20 lg:px-24 md:px-16'>
            <div className='after:content-[""] after:w-full after:bg-gray-300 after:h-0.5 after:block'>
                <div className='md:flex grid mb-10 gap-5'>
                    <div className='md:w-2/12 md:mr-20 w-full flex flex-col'>
                        <p className='text-[#2D465E] font-medium text-2xl'>iLanding</p>
                        <p>A108 Adam Street New York, NY 535022</p>
                        <p className='text-gray-600'><strong>Phone</strong>: +1 5589 55488 55</p>
                        <p className='text-gray-600'><strong>Email</strong>: info@example.com</p>
                        <div className='flex gap-5 mt-8'>
                            <a href="#" className='rounded-full border-1 border-gray-500 p-2 hover:border-[#0d83fd]'><FaXTwitter className='text-gray-500 hover:text-[#0d83fd]'/></a>
                            <a href="#" className='rounded-full border-1 border-gray-500 p-2 hover:border-[#0d83fd]'><FaFacebookF className='text-gray-500 hover:text-[#0d83fd]'/></a>
                            <a href="#" className='rounded-full border-1 border-gray-500 p-2 hover:border-[#0d83fd]'><FaInstagram className='text-gray-500 hover:text-[#0d83fd]'/></a>
                            <a href="#" className='rounded-full border-1 border-gray-500 p-2 hover:border-[#0d83fd]'><FaLinkedin className='text-gray-500 hover:text-[#0d83fd]'/></a>
                        </div>
                    </div>
                    <div className='md:w-2/12 gap-3 w-full flex flex-col'>
                        <p className='text-[#2D465E] text-xl'>Useful Links</p>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Home</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">About Us</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Services</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Terms Of Services</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Privacy Policy</a>
                    </div>
                    <div className='md:w-2/12 gap-3 w-full flex flex-col'>
                        <p className='text-[#2D465E] text-xl'>Our Services</p>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Web Design</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Web Development</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Product Management</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Marketing</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Graphic Design</a>
                    </div>
                    <div className='md:w-2/12 gap-3 w-full flex flex-col'>
                        <p className='text-[#2D465E] text-xl'>Hic solutasetp</p>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Molestiae accusamus iure</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Excepturi dignissimos</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Suscipit distinctio</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Dilecta</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Sit quas consectetur</a>
                    </div>
                    <div className='md:w-2/12 gap-3 w-full flex flex-col'>
                        <p className='text-[#2D465E] text-xl'>Nobis illum</p>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Ipsam</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Laudantium dolorum</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Dinera</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Trodelas</a>
                        <a className='nav-link hover:text-[#0d83fd]' href="#">Flexo</a>
                    </div>
                </div>
            </div>
            <div className='text-center my-10'>
                <p>© Copyright iLanding All Rights Reserved</p>
                <p>Designed by <a className='text-[#0d83fd]' href="https://bootstrapmade.com/demo/iLanding/">BootstrapMade</a></p>
            </div>
        </div>
    )
}
