import "./FloatingMenu.css"
import { usePageInfo } from "./../PageContext";

interface MenuProps {
  open: boolean;
}

function FloatingMenu({ open }: MenuProps) {
    const { setHover } = usePageInfo();
    const { currentPage } = usePageInfo();
    const { ChangePage } = usePageInfo();
    return (
        <div className={`App-FloatingMenu ${open ? "open" : ""}`}>
            <div className={`App-menu-item ${currentPage === 1 ? "active" : ""}`} onClick={()=>{ChangePage(1)}} onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>
                WE ARE CHARLIE KIRK
            </div>
            <div className={`App-menu-item ${currentPage === 2 ? "active" : ""}`} onClick={()=>{ChangePage(2)}} onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>
                LINGUANGULI
            </div>
        </div>
    );
}



export default FloatingMenu;