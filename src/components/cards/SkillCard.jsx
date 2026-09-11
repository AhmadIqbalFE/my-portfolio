import Reveal from "../common/Reveal";

function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <Reveal delay={index * 100}>
      <article className="skill-card">
        <div className="skill-icon">
          <Icon size={19} />
        </div>

        <h3 className="font-display skill-title">{skill.title}</h3>

        <div className="skill-list">
          {skill.items.map((item) => (
            <div key={item} className="skill-item">
              {item}
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default SkillCard;
