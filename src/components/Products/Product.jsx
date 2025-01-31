import { motion } from "motion/react";
import Cappuccino from "../../assets/cappuccino.png"
import Frappe from "../../assets/Frappe.png"
import Frappe_Mocha from "../../assets/Frappe Mocha.png"

const ProductData = [
    {
        id: 1,
        title: "Cappuccino",
        image: Cappuccino,
        subtitle: "A perfectly brewed cappuccino blends rich espresso with velvety steamed milk and a light, airy foam, creating a smooth and indulgent experience. Its bold aroma and creamy texture make every sip a comforting delight.",
        redirect: "",
    },
    {
        id: 2,
        title: "Frappe",
        image: Frappe,
        subtitle: "A chilled and creamy frappe blends rich coffee with ice, creating a smooth, frothy delight that's both refreshing and energizing. Topped with whipped cream and a drizzle of flavor, it’s the perfect treat for a hot day.",
        redirect: "",
    },
    {
        id: 3,
        title: "Frappe Mocha",
        image: Frappe_Mocha,
        subtitle: "A Frappe Mocha is a perfect fusion of rich espresso, velvety chocolate, and icy smoothness, creating a refreshing yet indulgent treat. Topped with whipped cream, a drizzle of chocolate, bold and sweet flavors.",
        redirect: "",
    },
];

const ImgShadow = {
    filter: "drop-shadow(10px 30px 15px #3030307a)",
};

const CardVariants = {
    hidden: { opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
        },
    },
};

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition:{
            delay: 0.6,
            staggerChildren: 0.4,
        },
    },
};

const Product = () => {
  return (
    <>
        <div className="pt-[21vh] container pl-[15.4rem] my-16 space-y-4">
            {/* Heading Section */}
            <div className="text-center max-w-lg mx-auto space-y-2">
                <motion.h1 
                    initial = {{
                        opacity: 0,
                        y: 100,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        type:"spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className="text-3xl font-bold text-[#272c35]">Fresh & <span className="text-[#F19509]">Tasty</span></motion.h1>
                <motion.p 
                    initial = {{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        type:"spring",
                        stiffness: 150,
                        damping: 10,
                        delay: 0.6,
                    }}
                    className="text-sm opacity-50">A steaming cup of fresh, aromatic coffee awakens the senses with its rich, bold flavor, perfectly balanced to delight every sip. Crafted from the finest beans, its smooth and invigorating taste offers the perfect start to any day.</motion.p>
            </div>
            {/* Cards Section */}

            <motion.div
                variants={containerVariants} 
                initial="hidden"
                whileInView={"visible"}
                viewport={{
                    amount: 0.8,
                }}
                className="grid grid-col-1 md: grid-cols-3 gap-4">
                {ProductData.map((products) => (
                    <motion.div 
                    variants={CardVariants}
                    
                        key={products.id} className="text-center p-4 space-y-6">
                        <img src={products.image} alt="Coffees" style={ImgShadow} className="max-w-[200px] mx-auto hover: scale-110 duration-300 cursor-pointer"/>
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-[#F19509]">{products.title}</h1>
                            <h1 className="text-[#1a1f25] ">{products.subtitle}</h1>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </>
  )
}

export default Product;