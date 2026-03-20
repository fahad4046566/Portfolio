import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import { projects } from "../data/projects";
import Links from "../components/Links";
import { useEffect } from "react";

const About = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-base-200 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-2 bg-linear-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Full Stack-focused frontend developer crafting accessible, performant user experiences.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left: Profile card */}
          <motion.div className="bg-base-100 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full bg-linear-to-tr from-green-400 to-blue-600 flex items-center justify-center text-4xl font-bold text-white shadow-md">
              <img src={hero} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <h2 className="mt-4 text-2xl font-semibold">Fahad Bashir</h2>
            <p className="text-sm text-base-content/70">Frontend Developer • Computer Science</p>

            <div className="mt-6 w-full grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold">{projects.length}</div>
                <div className="text-xs text-base-content/60">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{new Date().getFullYear() - 2025}</div>
                <div className="text-xs text-base-content/60">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Open</div>
                <div className="text-xs text-base-content/60">to work</div>
              </div>
            </div>

            <Links />
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div className="bg-base-100 rounded-xl shadow-lg p-6 prose prose-lg">
              <p>
                I'm <strong>Fahad Bashir</strong>, a Computer Science undergraduate with a focus on modern frontend
                development. I build responsive, accessible interfaces with React and Tailwind CSS, emphasizing
                performance, readability, and delightful micro-interactions.
              </p>

              <p>
                My work spans projects such as e-commerce catalogs, dashboard apps, and utility tools. I enjoy
                turning complex UI requirements into simple and maintainable components.
              </p>

              <div>
                <h3 className="text-lg font-semibold mt-4">What I bring</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-base-content/80">
                  <li>Component-driven design and reusable UI patterns.</li>
                  <li>State management using Context API and hooks.</li>
                  <li>Performance optimization and accessibility-first approach.</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;