import { useState } from 'react';
import './App.css';
import Burger from './Menu/Burger';
import FloatingMenu from './Menu/FloatingMenu';
import { usePageInfo } from "./PageContext";

function App() {
    const [open, setOpen] = useState(false);
    const pageInfo = usePageInfo();
    return (
        <div>
            <Burger open={open} setOpen={setOpen} />
            <FloatingMenu open={open} shutMenu={() => setOpen(false)} /> 
            {pageInfo.page}
        </div>
    );
}

export default App;
