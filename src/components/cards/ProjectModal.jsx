import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import ImageCarousel from "../ImageCarousel";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="modal-image">
          {project.images && project.images.length > 0 ? (
            <ImageCarousel images={project.images} />
          ) : (
            <div className="modal-image-placeholder" />
          )}
        </div>

        <div className="modal-content">
          <div className="modal-header">
            <h3 className="font-display modal-name">{project.name}</h3>
            <span
              className={`status-pill ${
                project.status === "LIVE" ? "status-live" : "status-progress"
              }`}
            >
              {project.status}
            </span>
          </div>

          <p className="modal-type">{project.type}</p>
          <p className="modal-description">{project.description}</p>

          <div className="project-stack modal-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary modal-link"
            >
              Lihat Project <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
