import "./FloatingMenu.css"
import { usePageInfo } from "./../PageContext";
import { useTranslation } from "react-i18next";

interface MenuProps {
  open: boolean;
  shutMenu: () => void;
}

function FloatingMenu({ open, shutMenu }: MenuProps) {
    const { setHover } = usePageInfo();
    const { currentPage } = usePageInfo();
    const { ChangePage } = usePageInfo();
    const { t } = useTranslation();

    return (
        <div className={`App-FloatingMenu ${open ? "open" : ""}`}>
            <div className={`App-menu-item ${currentPage === 1 ? "active" : ""}`} onClick={()=>{ChangePage(1); shutMenu()}} onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>
                {t("home_page")}
            </div>
            <div className={`App-menu-item ${currentPage === 2 ? "active" : ""}`} onClick={()=>{ChangePage(2); shutMenu()}} onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>
                {t("my_projects")}
            </div>
            <div className={`App-menu-item ${currentPage === 3 ? "active" : ""}`} onClick={()=>{ChangePage(3); shutMenu()}} onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>
                {t("tech_arsenal")}
            </div>
            <div className={`App-menu-item ${currentPage === 4 ? "active" : ""}`} onClick={()=>{ChangePage(4); shutMenu()}} onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>
                {t("about_page")}
            </div>
        </div>
    );
}



export default FloatingMenu;