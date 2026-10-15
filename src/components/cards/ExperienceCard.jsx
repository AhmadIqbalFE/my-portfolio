import Reveal from "../common/Reveal";
import Corners from "../common/Corners";

function ExperienceCard({ experience, index, onClick }) {
  return (
    <Reveal delay={index * 90}>
      <article
        className="experience-card"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClick();
        }}
      >
        <Corners tone="gold" />

        <div className="experience-preview">
          {experience.images?.[0] ? (
            <img src={experience.images[0]} alt={experience.name} />
          ) : (
            <div className="experience-preview-placeholder" />
          )}
        </div>

        <div className="experience-body">
          <div className="experience-header">
            <div>
              <h3 className="font-display experience-name">
                {experience.name}
              </h3>
            </div>
          </div>

          <p className="experience-description">{experience.description}</p>

          <div className="experience-location">
            {experience.location.map((technology) => (
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

export default ExperienceCard;
