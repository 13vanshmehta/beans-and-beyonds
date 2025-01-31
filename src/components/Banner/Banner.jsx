import BannerCover from "../../assets/Coffee Cover Page BG.jpg";
import Playstore from "../../assets/Play Store Logo.png";
import Appstore from "../../assets/App Store Logo.png";
import { motion } from "motion/react";

const BannerStyle = {
    backgroundImage: `url(${BannerCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}

const Banner = () => {
  return (
    <div className="container pl-[15.4rem] my-14">
        <div style={BannerStyle} className="sm: min-h-[400px] sm: flex sm: justify-end sm: items-center rounded-xl">
            <div>
                <div className="space-y-6 max-w-xl mx-auto">
                    <motion.h1 
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}
                        className="text-2xl text-center sm:text-4xl font-semibold">Download the app</motion.h1>
                    <motion.p 
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.3,
                        }}
                        className="text-center sm:px-20">Download the app now and experience seamless convenience at your fingertips, whether it’s for shopping, booking, or staying connected. With a sleek design and powerful features, it’s your perfect companion for everyday tasks!</motion.p>
                    {/* App Logo */}
                    <div className="flex justify-center items-center gap-4">
                        <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.2,
                                }} 
                                src={Playstore} alt="" />
                        </a>
                        <a href="#" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.2,
                                }} 
                                src={Appstore} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
