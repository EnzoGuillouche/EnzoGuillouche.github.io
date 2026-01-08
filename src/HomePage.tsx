import './App.css';
import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
import { useTranslation } from "react-i18next";
import { usePageInfo } from './PageContext';

function HomePage() {
  const { ChangePage } = usePageInfo();
  const { t } = useTranslation();
  return (
    <div className="App">
        <Header/>
      
        <p className="App-subheadline">
            {t("intro")}
        </p>

        <h1>{t("my_projects")}</h1>
        <BookContainer projectIds={[0, 1, 4]} />

        <div className='App-Link App-Button' onClick={() => ChangePage(2)}>
            {t("woopsie_creations_holdup")}
        </div>

    </div>
  );
}

export default HomePage;
