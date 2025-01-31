import { GiHamburgerMenu } from "react-icons/gi"
import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types
const Navbar = ( {sidebar, setsidebar}) => {
    return (
        <>
            <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
                <div className="container pl-[8rem] ">
                    <div className="flex justify-between items-center">
                        {/* Logo Section */}
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
                                delay: 0.2,
                            }}
                            className="text-2xl font-semibold"> <span className="text-[#F19509]">BEANS &</span> BEYONDS</motion.h1>
                        {/* Hambar Section */}
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
                                delay: 0.2,
                            }}
                            className="ml-auto"
                        >
                            <GiHamburgerMenu 
                                onClick={() => setsidebar(!sidebar)}
                                className="text-3xl cursor-pointer"/>
                        </motion.div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;