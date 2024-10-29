import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // Đối tượng
    // let p1 = {
    //   ten: 'màn hình',
    //   gia: 90
    // }
    // console.log('p1 ', p1);

    // let p2 = { ...p1 };

    // p2.gia = 100;

    // console.log('p2 ', p2);
    // console.log('p1 ', p1);

    // Mảng
    let x1 = [3, 5, 6, 7];

    console.log('x1 ', x1);

    let x2 = [...x1];

    x2[0] = 100;

    console.log('x1 ', x1);
    console.log('x2 ', x2);

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
