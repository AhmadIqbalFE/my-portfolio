import { useState } from "react";
import Reveal from "../common/Reveal";
import ExperienceCard from "../cards/ExperienceCard";
import ExperienceModal from "../cards/ExperienceModal";
import { experience } from "../../data/experience";
import Eyebrow from "../common/Eyebrow";
import { useLanguage } from "../../i18n/LanguageContext";
import { useMemo } from "react";

const pick = (value, lang) =>
  typeof value === "string" ? value : value?.[lang] ?? value?.id ?? "";

function Experience() {
  const { t, lang } = useLanguage();
  const [activeName, setActiveName] = useState(null);

  const localizedExperience = useMemo(
    () =>
      experience.map((exp) => ({
        ...exp,
        type: pick(exp.type, lang),
        description: pick(exp.description, lang),
      })),
    [lang]
  );
  const activeExperience = localizedExperience.find(
    (exp) => exp.name === activeName
  );

  return (
    <section id="experience" className="section-pad experience-bg">
      <div className="wrap">
        <Reveal>
          <Eyebrow className="experience-tagline">
            {t("experience.eyebrowexperience")}
          </Eyebrow>
          <h2 className="font-display section-title experience-title">
            {t("experience.title")}
          </h2>
        </Reveal>

        <div className="experience-grid">
          {localizedExperience.map((exp, index) => (
            <ExperienceCard
              key={exp.name}
              experience={exp}
              index={index}
              onClick={() => setActiveName(exp.name)}
            />
          ))}
        </div>
      </div>

      {activeExperience && (
        <ExperienceModal
          experience={activeExperience}
          onClose={() => setActiveName(null)}
        />
      )}
    </section>
  );
}

export default Experience;
