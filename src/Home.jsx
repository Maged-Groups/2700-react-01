import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


export default function Home() {

    return (
        <section className="lg:px-24 md:px-10 md:pt-10 bg-[#F2F9FF]">
            <nav className="md:flex sticky top-0 justify-between items-center mb-10 shadow-lg px-5 rounded-2xl h-16 bg-white">
                <p className="text-lg md:w-2/12">iLanding</p>
                <div className="md:flex justify-evenly md:w-8/12">
                    <p>Home</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </div>
                <button className="md:w-2/12 rounded-2xl text-white h-7/12 bg-[#0d83fd]">Get Started</button>
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
                        <button className="md:w-3/12 h-10 rounded-2xl text-white flex justify-center items-center gap-2 bg-[#0D83FD]">Get Started</button>
                        <button className="md:w-3/12 h-10 rounded-2xl flex justify-center items-center gap-2 text-[#2D465E] hover:text-[#0D83FD]"><MdOutlineSlowMotionVideo/> Play Video</button>
                    </div>
                </div>
                <img src="../public/image1.jpg" className="md:w-1/2" alt="image" />
            </div>

            </section>
    );
}