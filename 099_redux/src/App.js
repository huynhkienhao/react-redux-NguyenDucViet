import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let b1 = {
      num: [22, 9, 2002],
      status: true
    }

    // let b2 = { ...b1, status: false, num: [18, 9, 2003] };

    // b2.status = false;

    // console.log('b2 ', b2);

    // Thêm mới
    let b3 = { ...b1, num: [...b1.num, 2000] };

    b3.num[3] = 100;

    console.log('b3 ', b3);

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
}

export default App;
