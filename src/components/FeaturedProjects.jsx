import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const FeaturedProjects = ({ project }) => {
  return (
    <motion.div className="card lg:card-side bg-base-100 shadow-2xl rounded-xl overflow-hidden mx-auto max-w-6xl border border-base-200">
      {/* Image section */}
      <figure className="lg:w-1/2 bg-base-200 flex items-center justify-center p-4">
        <motion.div className="w-full lg:w-[92%] aspect-video relative overflow-hidden rounded-md">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-md"
          >
            <span className="text-white text-lg font-semibold">View Project</span>
          </motion.div>
        </motion.div>
      </figure>

      {/* Content section */}
      <div className="card-body lg:w-1/2 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="badge badge-primary">Featured</div>
            <h2 className="card-title text-2xl">{project.title}</h2>
          </div>

          <p className="text-base text-base-content/70 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span key={i} className="badge badge-outline badge-sm">
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-2 mb-6">
            {project.features?.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm text-base-content/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-actions pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary gap-2"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline gap-2"
          >
            <FiGithub /> View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default FeaturedProjects