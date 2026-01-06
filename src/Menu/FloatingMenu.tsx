import "./FloatingMenu.css"

interface MenuProps {
  open: boolean;
}

function FloatingMenu({ open }: MenuProps) {
    return (
        <div className={`App-FloatingMenu ${open ? "open" : ""}`}>
            WE ARE CHARLIE KIRK
        </div>
    );
}



export default FloatingMenu;