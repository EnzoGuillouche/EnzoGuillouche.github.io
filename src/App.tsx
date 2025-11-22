import './App.css';
import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
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

      <a 
        className="App-Link"
        href='/EnzoGUILLOUCHE_CV.pdf'
        download={"EnzoGUILLOUCHE_CV.pdf"}
      >
        {t("cv_button")}
      </a>

      <h1>{t("my_projects")}</h1>

      <BookContainer projectIds={[0, 1, 2, 3, 4]} />

      <WoopsieCreations/>

    </div>
  );
}

export default App;
