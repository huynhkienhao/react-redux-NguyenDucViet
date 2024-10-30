import logo from './logo.svg';
import './App.css';
import New from './New';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <New />
      </header>
    </div>
  );
}

export default App;
