import Skill from "./Skill";
import "./SkillContainer.css"

type SkillContainerProps = {
    skillIds: number[];
}

function SkillContainer({skillIds}: SkillContainerProps) {
    return (
      <div className="Skill-Container">
        { skillIds.map(id => (
          <Skill skillId={id}/>
        ))}
      </div>
    );
}

export default SkillContainer;