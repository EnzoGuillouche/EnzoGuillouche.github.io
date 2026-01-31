import React, { createContext, useContext, useState } from 'react';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import ExperiencePage from './ExperiencePage'
import ArsenalPage from './ArsenalPage';
import AboutPage from './AboutPage';

const PageContext = createContext<any>(null);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState(<HomePage />);
  const [currentPage, setActive] = useState(1);
  const [hover, setHover] = useState(false);
  function ChangePage(pageNum: number)
  {
    window.scrollTo(0,0);
    switch(pageNum)
    {
      case 1:
        setPage(<HomePage />)
        break;
      case 2:
        setPage(<ProjectPage />)
        break;
      case 3:
        setPage(<ExperiencePage />)
        break;
      case 4:
        setPage(<ArsenalPage />)
        break;
      case 5:
        setPage(<AboutPage />)
        break;
    }
    setActive(pageNum);
  }

  return (
    <PageContext.Provider value={{ page, currentPage, ChangePage, hover, setHover }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageInfo() {
  return useContext(PageContext);
}
