import { useState } from 'react';
import emailjs from 'emailjs-com';
import WorldMap from "../../assets/World Map.png";
import { motion } from "motion/react";

const ContactUs = () => {
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_zntd9p4",
      "template_rt01w44",
      toSend,
      'OWBNpLM5CVsEmgp5y'
    )
    .then(() => {
      setNotification({ message: 'Form submitted successfully!', type: 'success', visible: true });
      setToSend({ first_name: '', last_name: '', email: '', phone: '', message: '' });
    })
    .catch(() => {
      setNotification({ message: 'Form submission failed. Please try again.', type: 'error', visible: true });
    });

    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 3000);
  };

  return (
    <div className="container pl-[15rem]">
      <div className="grid md:grid-cols-3 gap-8 place-items-center">
        {/* Form Section */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-[#1a1f25] font-serif"
          >
            Contact our team from anywhere
          </motion.h1>
          <form onSubmit={onSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 pt-[1rem]"
            >
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md"
                value={toSend.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="lg:w-[150px] px-4 py-2 border-[1px] border-gray-400 rounded-md"
                value={toSend.last_name}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 pt-[1rem]"
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-md"
                value={toSend.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-md"
                maxLength={10}
                pattern="[0-9]{10}"
                value={toSend.phone}
                onChange={handleChange}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 pt-[1rem]"
            >
              <input
                type="text"
                name="message"
                placeholder="Enter Your Message"
                className="w-full px-4 py-2 border-[1px] border-gray-400 rounded-md"
                value={toSend.message}
                onChange={handleChange}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 pt-[1rem]"
            >
              <button
                type="submit"
                className="bg-[#F19509] text-white px-4 py-2 rounded-md hover:bg-[#e86f00] duration-200 w-full cursor-pointer"
              >
                Contact Now
              </button>
            </motion.div>
          </form>
        </div>
        {/* World Map Section */}
        <div className="col-span-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 1 }}
            src={WorldMap}
            alt="World Map"
            className="w-full sm:w-[500px] mx-auto"
          />
        </div>
      </div>
      {notification.visible && (
        <div className={`fixed top-4 right-4 p-4 rounded-md shadow-md ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default ContactUs;