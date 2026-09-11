import Reveal from "../common/Reveal";
import Corners from "../common/Corners";

function ProjectCard({ project, index, onClick }) {
  return (
    <Reveal delay={index * 90}>
      <article
        className="project-card"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClick();
        }}
      >
        <Corners tone="gold" />

        <div className="project-preview">
          {project.images?.[0] ? (
            <img src={project.images[0]} alt={project.name} />
          ) : (
            <div className="project-preview-placeholder" />
          )}
        </div>

        <div className="project-body">
          <div className="project-header">
            <div>
              <h3 className="font-display project-name">{project.name}</h3>
              <p className="font-mono project-type">{project.type}</p>
            </div>

            <span
              className={`status-pill ${
                project.status === "LIVE" ? "status-live" : "status-progress"
              }`}
            >
              {project.status}
            </span>
          </div>

          <p className="project-description">{project.description}</p>

          <div className="project-stack">
            {project.stack.map((technology) => (
              <span key={technology} className="tag">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default ProjectCard;
