import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
import WoopsieCreations from './WoopsieCreations/WoopsieCreations';
import { useTranslation } from "react-i18next";
import jsonVariables from './locales/jsonVariables.json';

function ProjectPage() {
    const { t } = useTranslation();
    const projects = jsonVariables.projects;
    return (
        <div className="App">
            <Header/>
            <h1>{t("my_projects")}</h1>
            <BookContainer projectIds={projects.overall} />

            <WoopsieCreations/>
        </div>
    );
}

export default ProjectPage;