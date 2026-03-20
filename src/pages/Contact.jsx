import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Contact = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <motion.section className="py-20 px-5 md:px-2" initial="hidden" animate="show" variants={container}>
      <div className="max-w-300 mx-auto">
        {/* Header Text */}
        <motion.div className="text-center mb-16" variants={item}>
          
          <motion.h1 className="text-5xl font-extrabold mb-2 bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent" variants={item}>
  Get In Touch
        </motion.h1>
          <motion.p className=" max-w-lg mx-auto bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent" variants={item}>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div className="space-y-8" variants={item}>
            <motion.div className="flex items-start gap-5" variants={item}>
              <motion.div className="bg-blue-100 p-4 rounded-lg text-blue-600 text-2xl" variants={item}>
                <FaPhoneAlt />
              </motion.div>
              <div>
                <motion.h4 className="font-bold text-lg" variants={item}>Phone</motion.h4>
                <motion.p className="text-blue-600" variants={item}>+923329585581</motion.p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-5" variants={item}>
              <motion.div className="bg-blue-100 p-4 rounded-lg text-blue-600 text-2xl" variants={item}>
                <FaEnvelope />
              </motion.div>
              <div>
                <motion.h4 className="font-bold text-lg" variants={item}>Email</motion.h4>
                <motion.p className="text-blue-600" variants={item}>fahad85581@gmail.com</motion.p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-5" variants={item}>
              <motion.div className="bg-blue-100 p-4 rounded-lg text-blue-600 text-2xl" variants={item}>
                <FaMapMarkerAlt />
              </motion.div>
              <div>
                <motion.h4 className="font-bold text-lg" variants={item}>Office</motion.h4>
                <motion.p className="text-blue-600" variants={item}>BrandStore Punjab Pakistan</motion.p>
              </div>
            </motion.div>

            {/* Placeholder for Map */}
            <motion.div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner" variants={item}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3465.986377100863!2d72.53051807544676!3d29.691174635222414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDQxJzI4LjIiTiA3MsKwMzEnNTkuMSJF!5e0!3m2!1sen!2s!4v1768724992225!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div className=" p-8 md:p-12 rounded-3xl shadow-sm border border-blue-900 shadow-blue-200" variants={item}>
            <motion.form
              className="space-y-6"
              action="https://formspree.io/f/xreeplvk"
              method="POST"
              variants={item}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="username" 
                    required 
                    placeholder="Enter Your Full Name"
                    className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email" 
                    required
                    placeholder="Enter Your Email"
                    className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject" 
                  placeholder="How can we help?"
                  className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message" 
                  required
                  placeholder="Your message here..."
                  className="w-full p-3 rounded-lg border border-blue-300 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="hover:cursor-pointer w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={item}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact