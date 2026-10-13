import { useState } from "react";
import Reveal from "../common/Reveal";
import ExperienceCard from "../cards/ExperienceCard";
import ExperienceModal from "../cards/ExperienceModal";
import { experience } from "../../data/experience";
import Eyebrow from "../common/Eyebrow";

function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);

  return (
    <section id="experience" className="section-pad experience-bg">
      <div className="wrap">
        <Reveal>
          <Eyebrow className="experience-tagline">Experience</Eyebrow>
          <h2 className="font-display section-title experience-title">
            Social Activity
          </h2>
        </Reveal>

        <div className="experience-grid">
          {experience.map((experience, index) => (
            <ExperienceCard
              key={experience.name}
              experience={experience}
              index={index}
              onClick={() => setActiveExperience(experience)}
            />
          ))}
        </div>
      </div>

      {activeExperience && (
        <ExperienceModal
          experience={activeExperience}
          onClose={() => setActiveExperience(null)}
        />
      )}
    </section>
  );
}

export default Experience;
