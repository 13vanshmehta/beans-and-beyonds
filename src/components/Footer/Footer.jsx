import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/Credit Cards.webp";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
        <div className="bg-gradient-to-r from-[#F19509] to-[#e86f00] pt-12 pb-8 text-white">
            <div className="container pl-[15.4rem]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Details Section */}
                    <motion.div 
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                        }} 
                        className="space-y-6">
                        <h1 className="text-3xl font-bold uppercase">Beans & Beyonds</h1>
                        <p className="text-sm max-w-[300px]">Beans and Beyonds offers a rich and immersive coffee experience, blending the finest beans with expert craftsmanship to create every cup. From bold espressos to creamy lattes, each sip takes you beyond ordinary coffee to pure indulgence.</p>

                        <div>
                            <p className="flex items-center gap-2 mt-2">
                                <FaPhone /> 
                                +91 79771 01454
                            </p>
                            <p className="flex items-center gap-2 mt-2">
                                <FaMapLocation /> Mumbai, Maharastra, India
                            </p>
                        </div>
                    </motion.div>
                    {/* Links Sections */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.6,
                        }} 
                        className="space-y-6">
                        <h1 className="text-3xl font-bold ">
                            Quick Links
                        </h1>
                        <div className="grid sm:grid-cols-2 gap-3 text-center">
                            {/* First Section */}
                            <div>
                                <ul className="space-y-2">
                                    <Link to="home" smooth={true} duration={400}><li className="pb-2 cursor-pointer">Home</li></Link>
                                    <Link to="product" smooth={true} duration={400}><li className="pb-2 cursor-pointer">Product</li></Link>
                                    <Link to="contact-us" smooth={true} duration={400}><li className="pb-2 cursor-pointer">Contact</li></Link>
                                    <Link to="about-us" smooth={true} duration={400}><li className="pb-2 cursor-pointer">About Us</li></Link>
                                </ul>
                            </div>
                            {/* Second Sectiom */}
                        </div>
                    </motion.div>
                    {/* Social Links Section */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 0.6,
                        }}  
                        className="space-y-6">
                        <h1 className="text-3xl font-bold">Follow Us</h1>
                        <div className="flex items-center gap-3">

                            <a href="https://api.whatsapp.com/send/?phone=%2B917977101454&text&type=phone_number&app_absent=0" target="_blank"><FaWhatsapp className="text-3xl hover:scale-105 duration-300"/></a>

                            <a href="https://www.instagram.com/_.13vanshmehta._/" target="_blank"><FaInstagram className="text-3xl hover:scale-105 duration-300"/></a>

                            <a href="https://www.linkedin.com/in/vansh-mehta-vsm13/" target="_blank"><FaLinkedin className="text-3xl hover:scale-105 duration-300"/></a>

                            <a href="https://github.com/13vanshmehta" target="_blank"><FaGithub className="text-3xl hover:scale-105 duration-300"/></a>

                        </div>
                        <div>
                            <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
                            <img src={CreditCards} alt="Credit Cards" className="w-[80]"/>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <motion.p 
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{
                        delay: 0.1,
                        duration: 0.6,
                    }} 
                    className="text-white text-center mt-8 pt-8 border-t-2">Copyright © 2025 Beans and Beyonds. All rights reserved.</motion.p>
            </div>
        </div>
    </>
  );
};

export default Footer;
