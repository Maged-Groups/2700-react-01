import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css'
import { IoIosArrowForward } from "react-icons/io";

export default function Pricing() {
    const accordion1 = function(){
        document.querySelector('#question1').classList.toggle('hidden');
        document.querySelector('#icon1').classList.toggle('rotate-90');
        document.querySelector('#icon1').classList.toggle('group-active:text-[#0d83fd]');
        document.querySelector('#button1').classList.toggle('group-active:text-[#0d83fd]');
    }
    const accordion2 = function(){
        document.querySelector('#question2').classList.toggle('hidden');
        document.querySelector('#icon2').classList.toggle('rotate-90');
        document.querySelector('#icon2').classList.toggle('group-focus:text-[#0d83fd]');
        document.querySelector('#button2').classList.toggle('group-focus:text-[#0d83fd]');
    }
    const accordion3 = function(){
        document.querySelector('#question3').classList.toggle('hidden');
        document.querySelector('#icon3').classList.toggle('rotate-90');
        document.querySelector('#icon3').classList.toggle('group-focus:text-[#0d83fd]');
        document.querySelector('#button3').classList.toggle('group-focus:text-[#0d83fd]');
    }
    const accordion4 = function(){
        document.querySelector('#question4').classList.toggle('hidden');
        document.querySelector('#icon4').classList.toggle('rotate-90');
        document.querySelector('#icon4').classList.toggle('group-focus:text-[#0d83fd]');
        document.querySelector('#button4').classList.toggle('group-focus:text-[#0d83fd]');
    }
    const accordion5 = function(){
        document.querySelector('#question5').classList.toggle('hidden');
        document.querySelector('#icon5').classList.toggle('rotate-90');
        document.querySelector('#icon5').classList.toggle('group-focus:text-[#0d83fd]');
        document.querySelector('#button5').classList.toggle('group-focus:text-[#0d83fd]');
    }
    const accordion6 = function(){
        document.querySelector('#question6').classList.toggle('hidden');
        document.querySelector('#icon6').classList.toggle('rotate-90');
        document.querySelector('#icon6').classList.toggle('group-focus:text-[#0d83fd]');
        document.querySelector('#button6').classList.toggle('group-focus:text-[#0d83fd]');
    }
    return (
        <section className='py-10 bg-[#F3F9FF]'>
            <div data-aos="fade-up">
                    <p className='text-[#2D465E] font-[Helvetica] text-4xl font-bold text-center after:content-[""] after:block after:bg-[#0d83fd] after:w-20 after:my-4 after:h-1 after:mx-auto'>Pricing</p>
                    <p className='font-[Helvetica] text-lg text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className='lg:flex grid lg:px-24 p-5 mt-10 gap-5'>
                <div data-aos='fade-up' className='grid gap-5 lg:w-4/12 w-full text-start p-5 bg-white rounded-2xl shadow-2xl'>
                    <p className='text-[#2D465E] font-[Helvetica] text-xl'>Basic Plan</p>
                    <div className='text-gray-500'><strong className='text-5xl text-black'><sup className='text-xl align-super'>$</sup>9.9</strong> / month</div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>
                    <p className='text-[#2D465E] font-[Helvetica] text-xl'>Featured Included:</p>
                    <div className='grid gap-3'>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Duis aute irure dolor</p>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Excepteur sint occaecat</p>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Nemo enim ipsam voluptatem</p>
                    </div>
                    <button className='rounded-4xl w-full h-14 bg-[#0D83FD] hover:bg-blue-400 text-white flex justify-center items-center gap-2'>Buy Now <MdArrowRightAlt/></button>
                </div>
                <div data-aos='fade-up' className='grid gap-5 lg:w-4/12 w-full text-start p-5 rounded-2xl shadow-2xl bg-[#0D83FD]'>
                    <p className='text-white font-[Helvetica] text-xl font-bold'>Standard Plan</p>
                    <div className='text-white'><strong className='text-6xl'><sup className='text-xl align-super'>$</sup>19.9</strong> / month</div>
                    <p className='text-white'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                    <p className='text-white font-[Helvetica] text-xl'>Featured Included:</p>
                    <div className='grid gap-3'>
                        <p className='text-white flex justify-start items-center gap-2'><CiCircleCheck/>Lorem ipsum dolor sit amet</p>
                        <p className='text-white flex justify-start items-center gap-2'><CiCircleCheck/>Consectetur adipiscing elit</p>
                        <p className='text-white flex justify-start items-center gap-2'><CiCircleCheck/>Sed do eiusmod tempor</p>
                        <p className='text-white flex justify-start items-center gap-2'><CiCircleCheck/>Ut labore et dolore magna</p>
                    </div>
                    <button className='rounded-4xl w-full h-14 bg-white text-[#0d83fd] flex justify-center items-center gap-2'>Buy Now <MdArrowRightAlt/></button>
                </div>
                <div data-aos='fade-up' className='grid gap-5 lg:w-4/12 w-full text-start p-5 bg-white rounded-2xl shadow-2xl'>
                    <p className='text-[#2D465E] font-[Helvetica] text-xl font-bold'>Premium Plan</p>
                    <div className='text-gray-500'><strong className='text-5xl text-black'><sup className='text-xl align-super'>$</sup>39.9</strong> / month</div>
                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                    <p className='text-[#2D465E] font-[Helvetica] text-xl'>Featured Included:</p>
                    <div className='grid gap-3'>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Temporibus autem quibusdam</p>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Saepe eveniet ut et voluptates</p>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Nam libero tempore soluta</p>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Cumque nihil impedit quo</p>
                        <p className='flex justify-start text-lg items-center text-[#0d83fd] gap-2'><CiCircleCheck/>Maxime placeat facere possimus</p>
                    </div>
                    <button className='rounded-4xl w-full h-14 bg-[#0D83FD] hover:bg-blue-400 text-white flex justify-center items-center gap-2'>Buy Now <MdArrowRightAlt/></button>
                </div>
            </div>
            <div className='lg:flex lg:items-start grid mt-10 lg:px-24 p-5 gap-5'>
                <div className='grid gap-5 lg:w-5/12 w-full'>
                    <p className='text-[#2D465E] font-[Helvetica] lg:text-5xl text-3xl'>
                        Have a question? Check out the FAQ
                    </p>
                    <p className='w-9/12'>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                    <svg className="faq-arrow text-[#0d83fd] lg:block hidden" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor">
                            
                        </path>
                    </svg>
                </div>
                <div className='grid gap-5 w-full lg:w-7/12'>
                    <div className='bg-white w-full p-5 rounded-2xl'>
                        <div onClick={accordion1} tabIndex={0} className='group cursor-pointer flex justify-between items-center transform transition-transform duration-1000'>
                            <p id="button1" className='group-hover:text-[#0d84fd] text-[#2D465E] '>Non consectetur a erat nam at lectus urna duis?</p>
                            <IoIosArrowForward id='icon1' className='rotate-90'/>
                        </div>
                        <p id='question1' className='mt-3'>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <div className='bg-white w-full p-5 rounded-2xl'>
                        <div onClick={accordion2} tabIndex={0} className='group cursor-pointer flex justify-between items-center'>
                            <p id="button2" className='group-hover:text-[#0d84fd] text-[#2D465E] '>Feugiat scelerisque varius morbi enim nunc faucibus?</p>
                            <IoIosArrowForward id='icon2'/>
                        </div>
                        <p id='question2' className='hidden mt-3'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <div className='bg-white w-full p-5 rounded-2xl'>
                        <div onClick={accordion3} tabIndex={0} className='group cursor-pointer flex justify-between items-center'>
                            <p id="button3" className='group-hover:text-[#0d84fd] text-[#2D465E] '>Dolor sit amet consectetur adipiscing elit pellentesque?</p>
                            <IoIosArrowForward id='icon3'/>
                        </div>
                        <p id='question3' className='hidden mt-3'>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <div className='bg-white w-full p-5 rounded-2xl'>
                        <div onClick={accordion4} tabIndex={0} className='group cursor-pointer flex justify-between items-center'>
                            <p id="button4" className='group-hover:text-[#0d84fd] text-[#2D465E] '>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</p>
                            <IoIosArrowForward id='icon4'/>
                        </div>
                        <p id='question4' className='hidden mt-3'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <div className='bg-white w-full p-5 rounded-2xl'>
                        <div onClick={accordion5} tabIndex={0} className='group cursor-pointer flex justify-between items-center'>
                            <p id="button5" className='group-hover:text-[#0d84fd] text-[#2D465E] '>Tempus quam pellentesque nec nam aliquam sem et tortor?</p>
                            <IoIosArrowForward id='icon5'/>
                        </div>
                        <p id='question5' className='hidden mt-3'>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
                    </div>
                    <div className='bg-white w-full p-5 rounded-2xl'>
                        <div onClick={accordion6} tabIndex={0} className='group cursor-pointer flex justify-between items-center'>
                            <p id="button6" className='group-hover:text-[#0d84fd] text-[#2D465E] '>Perspiciatis quod quo quos nulla quo illum ullam?</p>
                            <IoIosArrowForward id='icon6'/>
                        </div>
                        <p id='question6' className='hidden mt-3'>Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center xl:p-20 px-5 py-10 gap-5 mt-14 mb-5 bg-[#0d84fd] text-white'>
                <p className='font-[Helvetica] text-4xl font-medium'>Call To Action</p>
                <p className='text-center text-xl'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='border-white border-1 rounded-4xl py-3 px-10 cursor-pointer'>Call To Action</button>
            </div>
        </section>
    )
}
