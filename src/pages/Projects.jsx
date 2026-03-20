import { motion } from "framer-motion";
import { projects } from "../data/projects";
import FeaturedProjects from "../components/FeaturedProjects";
import ProjectCard from "../components/ProjectCard";
import { useEffect } from "react";

const Projects = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="min-h-screen bg-base-200 py-20">
      <div className="container mx-auto px-4">
        {/* Header — fade in */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in React, state
            management, and modern web development
          </p>
        </motion.div>

        {/* Featured project — slide in */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FeaturedProjects project={featuredProject} />
        </motion.div>

        {/* Other projects — stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
