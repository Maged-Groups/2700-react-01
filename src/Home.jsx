import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { MdBusinessCenter } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";


export default function Home() {
    const openVideo = ()=>{
        document.querySelector('#homeVideo').classList.remove('hidden')
    }
    const closeVideo = ()=>{
        document.querySelector('#homeVideo').classList.add('hidden')
    }
    const openHamburgerMenu = () =>{
        document.querySelector('#hamburgerMenu').classList.toggle('hidden')
    }
    const closeHamburgerMenu = () =>{
        document.querySelector('#hamburgerMenu').classList.add('hidden')
    }
    return (
        <section className="lg:px-24 md:px-10 md:pt-10 bg-[#F2F9FF]">
            <div id="hamburgerMenu" className="hidden">
                <button className="fixed z-100 top-25 text-3xl cursor-pointer right-5" onClick={closeHamburgerMenu}>
                    <IoClose/>
                </button>
                <div className="flex fixed flex-col bg-white text-black h-7/12 rounded-3xl w-8/12 top-35 left-15 shadow-2xl p-8 gap-5">
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
            </div>
            <nav className="flex sticky top-0 justify-between items-center mb-10 shadow-lg px-5 rounded-2xl h-16 bg-white">
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
            <div className="md:flex ">
                <div className="flex flex-col items-start justify-start gap-8">
                    <div className="bg-[#e1efff] font-[Helvetica] px-3 text-[#0d83fd] w-xs flex justify-start items-center rounded-2xl gap-2 h-12"><IoSettingsOutline/> Working for your success</div>
                    <div>
                        <p className="text-[#2D465E] font-[Helvetica] text-4xl font-bold w-xs flex justify-start items-center rounded-2xl h-9">Maecenas Vitae</p>
                        <p className="text-[#2D465E] font-[Helvetica] text-4xl font-bold w-xs flex justify-start items-center rounded-2xl h-9">Consectetur Led</p>
                    </div>
                    <p className="text-[#0d83fd] font-bold text-4xl font-[Helvetica] w-xs flex justify-start items-center rounded-2xl h-9">Vestibulum Ante</p>
                    <p className="w-9/12">Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                    <div className="w-full flex gap-5">
                        <button className="w-4/12 h-10 rounded-2xl text-white flex justify-center items-center gap-2 bg-[#0D83FD]">Get Started</button>
                        <button onClick={openVideo} className="w-4/12 h-10 rounded-2xl flex justify-center items-center gap-2 text-[#2D465E] hover:text-[#0D83FD]"><MdOutlineSlowMotionVideo/> Play Video</button>
                        <div id="homeVideo" className="hidden">
                            <div className=" fixed md:bg-[rgba(0,0,0,0.5)] bg-[rgba(0,0,0,0.8)] inset-0 flex items-center justify-center">
                                <button className="text-white absolute z-50 md:top-25 cursor-pointer text-3xl top-20 right-2 md:right-10" onClick={closeVideo}>
                                    <IoClose/>
                                </button>
                                <iframe
                                    src="https://www.youtube.com/embed/Y7f98aduVJ8?start=6"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    class="p-10 w-3xl h-8/12 rounded-lg shadow-lg">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="../public/image1.jpg" className="md:w-1/2" alt="image" />
            </div>
            <div className="shadow-[0_0_15px_gray] flex w-full justify-around mt-10 h-40 items-center">
                <div  className="flex justify-center items-center gap-2">
                    <button className="hover:bg-[#0d83fd] hover:text-white text-[#0d83fd] bg-[#ecf5ff] h-15 w-15 flex justify-center items-center rounded-full">
                        <TfiCup/>
                    </button>
                    <div>
                        <p className="text-[#2D465E] text-xl font-bold">3x Won Awards</p>
                        <p className="text-xs text-gray-500">Vestibulum ante ipsum</p>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="hover:bg-[#0d83fd] hover:text-white text-[#0d83fd] bg-[#ecf5ff] h-15 w-15 flex justify-center items-center rounded-full">
                        <MdBusinessCenter/>
                    </button>
                    <div>
                        <p className="text-[#2D465E] text-xl font-bold">6.5k Faucibus</p>
                        <p className="text-xs text-gray-500">Nullam quis ante</p>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="hover:bg-[#0d83fd] hover:text-white text-[#0d83fd] bg-[#ecf5ff] h-15 w-15 flex justify-center items-center rounded-full">
                        <RiLineChartLine/>
                    </button>
                    <div>
                        <p className="text-[#2D465E] text-xl font-bold">80k Mauris</p>
                        <p className="text-xs text-gray-500">Etiam sit amet orci</p>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="hover:bg-[#0d83fd] hover:text-white text-[#0d83fd] bg-[#ecf5ff] h-15 w-15 flex justify-center items-center rounded-full">
                        <FaAward/>
                    </button>
                    <div>
                        <p className="text-[#2D465E] text-xl font-bold">6x Phasellus</p>
                        <p className="text-xs text-gray-500">Vestibulum ante ipsum</p>
                    </div>
                </div>
            </div>
            </section>
    );
}