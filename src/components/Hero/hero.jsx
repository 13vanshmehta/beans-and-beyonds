import {useState} from "react";
import { motion } from "motion/react";
import Navbar from "../Navbar/Navbar";
import BGImage from "../../assets/Home Page BG Slate.png" ;
import HeroCoffe from "../../assets/Black Coffee Mug.png";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";


const bgImage = {
    backgroundImage: `url(${BGImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "99vw",
};

const heroImage = {
    filter: "drop-shadow(40px 50px 25px #0f1115)",
};

const Hero = () => {
    const [SideBar, setSideBar] = useState(false);

    return (
        <>
            <main style={bgImage}>
                <section className=" relative min-h-[750px] w-full">
                    <div className="container pl-[15.4rem]">
                        {/* NAVBAR SECTION */}
                        <Navbar sidebar = {SideBar} setsidebar ={setSideBar} />
                        {/* HERO SECTION */}
                        <div className="grid md: lg: grid-cols-3 place-items-center min-h-[850px]">
                            {/* TEXT CONTENT SECTION LEFT*/}
                            <div className="text-[#f1dabf] md: mt-0 p-4 space-y-28 pr-[10rem]">
                                <motion.h1 
                                    initial={{
                                        opacity: 0, 
                                        y: -100,
                                    }}  
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10, 
                                        delay: 1,
                                    }}
                                    className="text-7xl font-bold leading-tight ml-14">
                                        BEANS BEYOND
                                </motion.h1>
                                <motion.div
                                    initial={{
                                        opacity: 0, 
                                        y: -100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10, 
                                        delay: 1.2,
                                    }} 
                                    className="relative ">
                                    <div className="relative z-10 space-y-4">
                                        <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                                        <h1 className="text-sm opacity-55 leading-loose">Whether savoring the aroma of freshly ground beans or indulging in the art of espresso, this coffee enthusiast celebrates the tradition and rituals surrounding the beverage, often intertwined with moments of reflection, conversation, and connection.</h1>
                                    </div>
                                    <div className="absolute -top-6 -left-10 w-[250px] h-[230px] bg-gray-700/25"> </div>
                                </motion.div>
                            </div>
                            {/* IMAGE SECTION */}
                            <div className="relative HeroImage">
                                <motion.img 
                                    initial={{
                                        opacity: 0, 
                                        scale: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10, 
                                        delay: 0.4,
                                    }} 
                                    src={HeroCoffe} alt="coffee_mug" className="relative z-40 md: h-[700px]" style={heroImage}/>
                                {/* Orange Color Ring */}
                                <motion.div 
                                    initial={{
                                        opacity: 0, 
                                        y: 100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10, 
                                        delay: 0.8,
                                    }}
                                    className="h-[180px] w-[180px] absolute top-24 -right-16 border-[#F19509] border-[20px] rounded-full z-10"></motion.div>
                                {/* Blvck Text Big One */}
                                <motion.div 
                                    initial={{
                                        opacity: 0, 
                                        x: -100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10, 
                                        delay: 1,
                                    }}
                                    className="absolute  -top-16 left-[180px] z-[1]">
                                    <h1 className="text-[140px] scale-150 font-bold text-[#1a1f25]/40 leading-none">
                                        COFFEE LOVERS
                                    </h1>
                                </motion.div>
                            </div>
                            {/* TEXT SECTION RIGHT */}
                            <motion.div
                                initial={{
                                    opacity: 0, 
                                    y: -100,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10, 
                                    delay: 1,
                                }} 
                                className="text-[#f1dabf] md: mt-0 p-4 space-y-28">
                                <h1 className=" opacity-0 text-7xl font-bold leading-tight ml-14">
                                    Blvck Tumbler
                                </h1>
                                <div className="relative ">
                                    <div className="relative z-10 space-y-4">
                                        <h1 className="text-2xl">Coffee Lovers,</h1>
                                        <h1 className="text-sm opacity-55 leading-loose">A coffee lover finds joy in every sip, appreciating the complexity and richness of each brew. Whether it is the comforting warmth of a morning cup or the energizing pick-me-up in the afternoon.</h1>
                                    </div>
                                    <div className="absolute -top-6 -right-13 w-[270px] h-[210px] bg-[#1a1f25]/50"> </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    {/* Social Links Side Bar Section */}
                    {
                        SideBar && (
                            <motion.div 
                                initial={{
                                    opacity: 0, 
                                    x: 100,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: 100,
                                }}
                                transition={{
                                    stiffness: 100,
                                    damping: 10, 
                                    delay: 0.05,
                                }}
                                className="absolute top-0 right-0 w-[140px] h-[100vh] z-10">
                                <div className="w-full h-full flex justify-center items-center">
                                    <div className="flex flex-col justify-center items-center gap-6 text-white">
                                        {/* Line */}
                                        <div className="w-[1px] h-[70px] bg-white "> </div>

                                        {/* Social Icons */}
                                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                            <a href="https://api.whatsapp.com/send/?phone=%2B917977101454&text&type=phone_number&app_absent=0" target="_blank"><FaWhatsapp className="text-2xl"/></a>
                                        </div>
                                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                            <a href="https://www.linkedin.com/in/vansh-mehta-vsm13/" target="_blank"><FaLinkedin className="text-2xl"/></a>
                                        </div>
                                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                                            <a href="https://www.instagram.com/_.13vanshmehta._/" target="_blank"><FaInstagram className="text-2xl"/></a>
                                        </div>
                                        <div className="w-[1px] h-[70px] bg-white "> </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                </section>
            </main>
        </>
    );
};

export default Hero;