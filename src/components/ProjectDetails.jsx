import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { VscGithub } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect } from "react";
const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p className="mt-4">The project you're looking for doesn't exist.</p>
      </div>
    );
  }
 return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="mb-8">
        <NavLink 
          to="/projects" 
          className="inline-flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors"
        >
          ← Back to Projects
        </NavLink>
      </div>

      {/* Hero Image / Video */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-10">
        {project.videoUrl ? (
          <video 
            src={project.videoUrl} 
            controls 
            className="w-full aspect-video object-cover"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-125 object-cover"
          />
        )}
      </div>

      {/* Title & Tech Stack */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {project.title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech, i) => (
            <span 
              key={i} 
              className="badge badge-lg badge-primary badge-outline px-4 py-2 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Long Description */}
      <div className="prose prose-lg dark:prose-invert max-w-none mb-14">
        <div className="bg-base-200/50 border border-base-300 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3">
            <span className="w-3 h-8 bg-primary rounded-full"></span>
            About This Project
          </h2>
          <p className="leading-relaxed text-base-content/90">
            {project.longDescription}
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-3 h-8 bg-primary rounded-full"></span>
          Key Features
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features?.map((feature, i) => (
            <div 
              key={i}
              className="flex gap-4 bg-base-200 hover:bg-base-100 transition-all duration-300 p-5 rounded-2xl group"
            >
              <div className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base-content/90 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        {project.frontEnd && (
          <a
            href={project.frontEnd}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg gap-2"
          >
            <VscGithub className="text-xl" />
            Frontend Code
          </a>
        )}

        {project.backEnd && (
          <a
            href={project.backEnd}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-lg gap-2"
          >
            <VscGithub className="text-xl" />
            Backend Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
