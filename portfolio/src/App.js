import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="p-8 overflow-hidden text-black">
      <header className="App-header">
        <img src={logo} className="App-logo " alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="button"
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
