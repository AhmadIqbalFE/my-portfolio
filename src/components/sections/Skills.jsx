import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import SkillCard from "../cards/SkillCard";
import { skills } from "../../data/skills";
import { useLanguage } from "../../i18n/LanguageContext";

function Skills() {
  const { t } = useLanguage();
  return (
    <section id="keahlian" className="section-pad skills-section">
      <div className="wrap">
        <Reveal>
          <Eyebrow>{t("skills.eyebrowskill")}</Eyebrow>

          <h2 className="font-display section-title skills-title">
            {t("skills.title")}
          </h2>
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
