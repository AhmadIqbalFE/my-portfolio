import { useState } from "react";
import Reveal from "../common/Reveal";
import ProjectCard from "../cards/ProjectCard";
import ProjectModal from "../cards/ProjectModal";
import { projects } from "../../data/projects";
import Eyebrow from "../common/Eyebrow";
import { useLanguage } from "../../i18n/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="proyek" className="section-pad projects-bg">
      <div className="wrap">
        <Reveal>
          <Eyebrow className="project-tagline">
            {t("projects.eyebrowprojects")}
          </Eyebrow>
          <h2 className="font-display section-title projects-title">
            {t("projects.title")}
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

export default Projects;
