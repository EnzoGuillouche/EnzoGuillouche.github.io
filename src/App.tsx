import './App.css';
import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
import SkillContainer from './Arsenal/SkillContainer';
import WoopsieCreations from './WoopsieCreations/WoopsieCreations';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header/>
      
      <p className="App-subheadline">
        {t("intro")}
      </p>

      <div className="App-Socials">
        <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.github.link")}>
          <img src={t("socials.github.image")} alt="socialImage" />
          <span>{t("socials.github.label")}</span>
        </a>
        <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.linkedin.link")}>
          <img src={t("socials.linkedin.image")} alt="socialImage" />
          <span>{t("socials.linkedin.label")}</span>
        </a>
        <a className="App-Link" target='_blank' rel="noopener noreferrer" href={t("socials.email.link")}>
          <img src={t("socials.email.image")} alt="socialImage" />
          <span>{t("socials.email.label")}</span>
        </a>
      </div>

      <a 
        className="App-Link"
        href='/EnzoGUILLOUCHE_CV.pdf'
        download={"EnzoGUILLOUCHE_CV.pdf"}
      >
        {t("cv_button")}
      </a>

      <div className='Tech-Arsenal'>

        <h1>{t("tech_arsenal")}</h1>

        <SkillContainer skillIds={[6, 7, 8, 9, 10, 11]}></SkillContainer>

        <h2>Web</h2>

        <SkillContainer skillIds={[0, 1, 2, 3, 4, 5]}></SkillContainer>

        <h2>{t("tools")}</h2>

        <SkillContainer skillIds={[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]}></SkillContainer>

      </div>

      <h1>{t("my_projects")}</h1>

      <BookContainer projectIds={[0, 1, 2, 3, 4]} />

      <WoopsieCreations/>

    </div>
  );
}

export default App;
