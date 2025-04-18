import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {
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
                        <p className='flex justify-start items-center gap-2'><CiCircleCheck/>Temporibus autem quibusdam</p>
                        <p className='flex justify-start items-center gap-2'><CiCircleCheck/>Saepe eveniet ut et voluptates</p>
                        <p className='flex justify-start items-center gap-2'><CiCircleCheck/>Nam libero tempore soluta</p>
                        <p className='flex justify-start items-center gap-2'><CiCircleCheck/>Cumque nihil impedit quo</p>
                        <p className='flex justify-start items-center gap-2'><CiCircleCheck/>Maxime placeat facere possimus</p>
                    </div>
                    <button className='rounded-4xl w-full h-14 bg-[#0D83FD] hover:bg-blue-400 text-white flex justify-center items-center gap-2'>Buy Now <MdArrowRightAlt/></button>
                </div>
            </div>
            <div className='lg:flex grid mt-10 lg:px-24 p-5 gap-5'>
                <div className='grid lg:w-6/12 w-full gap-5'>
                    <p className='text-[#2D465E] font-[Helvetica] lg:text-5xl text-3xl'>
                        Have a question? Check out the FAQ
                    </p>
                    <p className='w-9/12'>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                    <svg className="faq-arrow text-[#0d83fd] lg:block hidden" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor">
                            
                        </path>
                    </svg>
                </div>
                <div>
                
                </div>
            </div>
        </section>
    )
}
