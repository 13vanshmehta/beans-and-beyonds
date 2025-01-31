import WorldMap from "../../assets/World Map.png";
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <div className="container pl-[15rem]">
        <div className="grid md: grid-cols-3 gap-8 place-items-center">
            {/* Form Section */}
            <div>
                <motion.h1 
                    initial={{
                        opacity: 0,
                        y: -100,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.5,
                    }}
                    className="text-4xl font-bold text-[#1a1f25] font-serif"> Contact our team from anywhere </motion.h1>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                    }} 
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.2,
                    }}
                    className="flex items-center gap-4 pt-[1rem]">
                    <input type="text" placeholder="First Name" className="lg: w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md" />
                    <input type="text" placeholder="Last Name" className="lg: w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                    }} 
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.2,
                    }}
                    className="flex items-center gap-4 pt-[1rem]">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-md"
                    />
                    <input 
                        type="text" 
                        placeholder="Phone Number" 
                        className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-md"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                    }} 
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.2,
                    }}
                    className="flex items-center gap-4 pt-[1rem]">
                    <input type="message" placeholder="Enter Your Message" className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-md" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100,
                    }} 
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.2,
                    }} 
                    className="flex items-center gap-4 pt-[1rem]">
                    <button className="bg-[#F19509] text-white px-4 py-2 rounded-md hover:bg-[#e86f00] duration-200 w-full cursor-pointer">
                        Contact Now
                    </button>
                </motion.div>
            </div>
            {/* World Map Section */}
            <div className="col-span-2">
                <motion.img
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }} 
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 1,
                    }}
                    src={WorldMap} alt="World Map" className="w-full sm:w-[500px] mx-auto "/>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;
