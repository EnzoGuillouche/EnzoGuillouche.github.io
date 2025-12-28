import './Header.css';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
// import FloatingMenu from '../Menu/FloatingMenu';
import Burger from '../Menu/Burger';

function Header() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <header className="App-header">
            <img className="Header-img" src="./../../enzoimg.png" alt="EnzoImg" />
            <p className="App-headline">
              {t("title")}
            </p>
            <Burger open={open} setOpen={setOpen} />
            {/* <FloatingMenu /> */}
        </header>
    );
}

export default Header;