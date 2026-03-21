import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
import Links from "./Links";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import { useState, useEffect } from "react";
const Hero = () => {
  const roles = ["Frontend Developer", "React Specialist", "Problem Solver"];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-7xl mx-auto px-6">
        {/* Right side — Content */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi! I'm <span className="text-primary font-bold">Fahad</span>
            </motion.p>

            <h1 className="text-5xl font-bold bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              <Typewriter
                text={roles[currentRole]}
                key={currentRole}
                speed={100}
              />
            </h1>

            <motion.p
              className="text-base-content/70 text-lg max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I'm a passionate React developer focused on building fast and
              user-friendly web applications. I enjoy solving complex problems,
              working with APIs, and transforming ideas into real products.
            </motion.p>
          </div>

          <Links />

          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Link to={`/projects`}>
              <button className="btn btn-primary btn-lg hover:shadow-lg">
                View My Work
              </button>
            </Link>
            <Link to={`/contact`}>
              <button className="btn  btn-primary btn-outline btn-lg">
                Hire Me
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Left side — Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary opacity-20 blur-3xl rounded-full glow-effect"></div>

            {/* Image */}

            <div className="relative avatar">
              <div className="w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={hero} alt="Fahad" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
