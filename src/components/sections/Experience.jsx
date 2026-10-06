import { useState } from "react";
import Reveal from "../common/Reveal";
import ProjectCard from "../cards/ProjectCard";
import ProjectModal from "../cards/ProjectModal";
import { projects } from "../../data/projects";
import Eyebrow from "../common/Eyebrow";

function Experience() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="experience" className="section-pad projects-bg">
      <div className="wrap">
        <Reveal>
          <Eyebrow className="project-tagline">Experience</Eyebrow>
          <h2 className="font-display section-title projects-title">
            Social Activity
          </h2>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

export default Experience;
