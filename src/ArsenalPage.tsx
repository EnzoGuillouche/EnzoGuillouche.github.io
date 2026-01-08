import SkillContainer from './Arsenal/SkillContainer';
import { useTranslation } from "react-i18next";
import Header from './Header/Header';

function ArsenalPage() {
    const { t } = useTranslation();
    return (
        <div className="App Tech-Arsenal">
            <Header/>
            <h1>{t("tech_arsenal")}</h1>
            <SkillContainer skillIds={[8, 9, 10, 11, 12, 13]}></SkillContainer>

            <h2>Web</h2>
            <SkillContainer skillIds={[0, 1, 2, 3, 4, 5, 6, 7]}></SkillContainer>
            <h2>{t("tools")}</h2>
            <SkillContainer skillIds={[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}></SkillContainer>

        </div>
    );
}

export default ArsenalPage;