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
    <div className="modal-exp-overlay" onClick={onClose}>
      <div className="modal-exp-box" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-exp-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="modal-exp-image">
          {experience.images && experience.images.length > 0 ? (
            <ImageCarousel images={experience.images} />
          ) : (
            <div className="modal-exp-image-placeholder" />
          )}
        </div>

        <div className="modal-exp-content">
          <div className="modal-exp-header">
            <h3 className="font-display modal-exp-name">{experience.name}</h3>
          </div>

          <p className="modal-exp-type">{experience.location}</p>
          <p className="modal-exp-description">{experience.description}</p>

          <div className="experience-location modal-exp-location">
            {experience.location.map((tech) => (
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
              className="btn-primary modal-exp-link"
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
