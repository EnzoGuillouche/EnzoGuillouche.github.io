import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
import WoopsieCreations from './WoopsieCreations/WoopsieCreations';
import { useTranslation } from "react-i18next";

function ProjectPage() {
    const { t } = useTranslation();
    return (
        <div className="App">
            <Header/>
            <h1>{t("my_projects")}</h1>
            <BookContainer projectIds={[0, 1, 2, 3, 4]} />

            <WoopsieCreations/>
        </div>
    );
}

export default ProjectPage;