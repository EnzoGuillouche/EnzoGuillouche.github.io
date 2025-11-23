import "./Skill.css"
import { useTranslation } from "react-i18next";

type SkillProps = {
  skillId: number;
};

function Skill({skillId}: SkillProps) {
    const { t } = useTranslation();
    const skill = t(`skills.${skillId}`, { returnObjects: true });

    return (
        <div className="Skill">
            <img className="Skill-Image" src={skill.image} alt="skillImage" />
            <span className="Skill-Name">{skill.name}</span>
        </div>
    );
}

export default Skill;