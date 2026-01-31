import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
import WoopsieCreations from './WoopsieCreations/WoopsieCreations';
import { useTranslation } from "react-i18next";
import jsonVariables from './locales/jsonVariables.json';
import { usePageInfo } from './PageContext';

function ProjectPage() {
    const { ChangePage } = usePageInfo();
    const { t } = useTranslation();
    const projects = jsonVariables.projects;
    return (
        <div className="App">
            <Header/>
            <h1>{t("my_projects")}</h1>
            <BookContainer projectIds={projects.overall} />
            <div className='App-Link App-Button' onClick={() => ChangePage(3)}>
                {t("my_school_projects")}
            </div>

            <WoopsieCreations/>
        </div>
    );
}

export default ProjectPage;