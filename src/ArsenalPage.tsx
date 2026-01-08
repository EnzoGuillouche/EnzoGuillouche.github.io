import SkillContainer from './Arsenal/SkillContainer';
import { useTranslation } from "react-i18next";
import Header from './Header/Header';
import jsonVariables from './locales/jsonVariables.json';

function ArsenalPage() {
    const { t } = useTranslation();
    const skills = jsonVariables.skills;
    return (
        <div className="App Tech-Arsenal">
            <Header/>
            <h1>{t("tech_arsenal")}</h1>
            <SkillContainer skillIds={skills.overall}></SkillContainer>

            <h2>Web</h2>
            <SkillContainer skillIds={skills.web}></SkillContainer>
            <h2>{t("tools")}</h2>
            <SkillContainer skillIds={skills.tools}></SkillContainer>

        </div>
    );
}

export default ArsenalPage;