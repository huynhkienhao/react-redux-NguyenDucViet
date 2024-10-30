import logo from './logo.svg';
import './App.css';
import New from './New';
import { useSelector } from 'react-redux';

function App() {

  const num = useSelector((state) => state.number);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {num}
        <New />
      </header>
    </div>
  );
}

export default App;
