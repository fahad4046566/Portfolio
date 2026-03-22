import { motion } from "framer-motion"
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
const ProjectCard = ({ project }) => {

  return (
    <motion.div 
      className= "border-2 border-blue-950 card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow rounded-xl overflow-hidden h-full"
      whileHover={{ y: -10 , boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"}}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <figure className="relative overflow-hidden bg-base-200 flex items-center justify-center aspect-video">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
         <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </figure>
      
      {/* Content */}
      <div className="card-body flex flex-col justify-between gap-3 h-full">
        <div>
          <h2 className="card-title">{project.title}</h2>
          <p className="text-sm text-base-content/70 mt-1">{project.description}</p>

          {/* Tech badges (compact) */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span key={i} className="badge badge-sm badge-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="card-actions justify-end gap-2">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
           <FiExternalLink /> Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            <VscGithub />Code
          </a>
           <NavLink to={`/project/${project.id}`} className="btn btn-outline btn-sm">
            View Details
           </NavLink>
        </div>
      </div>
      <div>
      
      </div>
    </motion.div>
  )
}

export default ProjectCard