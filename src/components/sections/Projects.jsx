import { useState } from "react";
import Reveal from "../common/Reveal";
import ProjectCard from "../cards/ProjectCard";
import ProjectModal from "../cards/ProjectModal";
import { projects } from "../../data/projects";
import Eyebrow from "../common/Eyebrow";
import { useLanguage } from "../../i18n/LanguageContext";
import { useMemo } from "react";

const pick = (value, lang) =>
  typeof value === "string" ? value : value?.[lang] ?? value?.id ?? "";

function Projects() {
  const { t, lang } = useLanguage();
  const [activeName, setActiveName] = useState(null);

  const localizedProjects = useMemo(
    () =>
      projects.map((project) => ({
        ...project,
        type: pick(project.type, lang),
        description: pick(project.description, lang),
      })),
    [lang]
  );
  const activeProject = localizedProjects.find((p) => p.name === activeName);

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
          {localizedProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onClick={() => setActiveName(project.name)}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveName(null)}
        />
      )}
    </section>
  );
}

export default Projects;
