import "./ProjectsPage.css";
import BookContainer from "./Book/BookContainer";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
    const { t } = useTranslation();
    return (
        <div className="Projects-Page">
            <h1>{t("my_projects")}</h1>
            <BookContainer projectIds={[0, 1, 2, 3, 4]} />
        </div>
    );
}
    
export default ProjectsPage;