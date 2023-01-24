import logo from './logo.svg';
import './App.css';

const cardData = {
  imgUrl: 'https://via.placeholder.com/150',
  title: 'Card Title',
  description: 'Card Description',
  buttonUrl: '#',
  buttonText: 'Learn More',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
