import './Header.css';
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();

    return (
        <header className="App-header">
        <img className="Header-img" src="./../../enzoimg.png" alt="EnzoImg" />
        <p className="App-headline">
          {t("title")}
        </p>
        </header>
    );
}

export default Header;