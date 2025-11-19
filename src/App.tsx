import './App.css';
import BookContainer from './Book/BookContainer';
import Header from './Header/Header';
import WoopsieCreations from './WoopsieCreations/WoopsieCreations';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <p className="App-subheadline">
        I’m a passionate software developer, with a strong curiosity for technology and a deep enthusiasm for creating innovative projects.
      </p>

      <a 
        className="App-Link"
        href='/EnzoGUILLOUCHE_CV.pdf'
        download={"EnzoGUILLOUCHE_CV.pdf"}
      >
        My CV
      </a>

      <h1>My Projects</h1>

      <BookContainer projectIds={[0, 1, 2, 3, 4]} />

      <WoopsieCreations/>

    </div>
  );
}

export default App;
