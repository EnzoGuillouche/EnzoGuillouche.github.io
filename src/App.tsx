import './App.css';
import BookContainer from './Book/BookContainer';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <p className="App-subheadline">
        I’m a passionate software developer, with a strong curiosity for technology and a deep enthusiasm for creating innovative projects.
      </p>

      <BookContainer/>

    </div>
  );
}

export default App;
