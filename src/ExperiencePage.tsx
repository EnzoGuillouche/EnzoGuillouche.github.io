import './App.css';
import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
import { useTranslation } from "react-i18next";
import jsonVariables from './locales/jsonVariables.json';

function ExperiencePage() {
  const { t } = useTranslation();
  const experiences = t(`experiences`, { returnObjects: true }) as unknown[];
  const school_projects = jsonVariables.projects;

  return (
    <div className="App">
        <Header/>
      
        <h1>{t("my_experience")}</h1>
        
        <div>
            {experiences.map((experience, index) => {
                return (
                    <div className='Experiences'>
                        <div className='App-subheadline'>
                            <b>{String(experience.title)}</b><br/>
                            {String(experience.description)}<br/><br/>
                            {String(experience.start_date)} - {String(experience.end_date)}
                        </div>
                        <a
                            key={index}
                            className="App-Link"
                            href='https://libetlou.com'
                            target='__blank'
                        >
                            {String(experience.company)}
                        </a>
                    </div>
                );
            })}
        </div>

        <h1>{t("my_school_projects")}</h1>
        <BookContainer projectIds={school_projects.school} />

    </div>
  );
}

export default ExperiencePage;
