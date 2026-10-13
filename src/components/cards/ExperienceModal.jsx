import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import ImageCarousel from "../ImageCarousel";

function ExperienceModal({ experience, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!experience) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="modal-image">
          {experience.images && experience.images.length > 0 ? (
            <ImageCarousel images={experience.images} />
          ) : (
            <div className="modal-image-placeholder" />
          )}
        </div>

        <div className="modal-content">
          <div className="modal-header">
            <h3 className="font-display modal-name">{experience.name}</h3>
            <span
              className={`status-pill ${
                experience.status === "LIVE" ? "status-live" : "status-progress"
              }`}
            >
              {experience.status}
            </span>
          </div>

          <p className="modal-type">{experience.type}</p>
          <p className="modal-description">{experience.description}</p>

          <div className="experience-stack modal-stack">
            {experience.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          {experience.link && (
            <a
              href={experience.link}
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

export default ExperienceModal;
