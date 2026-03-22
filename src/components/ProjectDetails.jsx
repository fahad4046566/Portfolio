import { useParams } from "react-router-dom"
import { projects } from "../data/projects";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect } from "react";
const ProjectDetails = () => {
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p className="mt-4">The project you're looking for doesn't exist.</p>
      </div>
    );
  }
  return (
  <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Image */}
        <img 
          src={project.fullImage} 
          alt={project.title}
          className="w-full h-96 object-cover object-top rounded-lg"
        />
        
        {/* Content */}
        <h1 className="text-4xl font-bold mt-8 mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span key={i} className="badge badge-primary badge-lg">
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed border-l-4 border-primary pl-4 italic">
  {project.description}
</p>

        
       <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
  <div className="bg-base-200 rounded-xl p-6 md:p-8">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
      <span className="w-8 h-1 bg-primary rounded-full"></span>
      About This Project
    </h2>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {project.longDescription}
    </p>
  </div>
</div>
         <div className="mb-12">
  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
    <span className="w-8 h-1 bg-primary rounded-full"></span>
    Key Features
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {project.features.map((feature, i) => (
      <div 
        key={i} 
        className="flex items-start gap-3 p-4 bg-base-200 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
      >
        <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
          <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
          {feature}
        </span>
      </div>
    ))}
  </div>
</div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <NavLink to={`/projects`}>
            <button className="btn btn-link"> <IoMdArrowRoundBack />Back to Projects</button>
          </NavLink>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            className="btn btn-primary"
          >
            Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            className="btn btn-outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails
