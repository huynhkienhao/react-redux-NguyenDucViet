import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';

class App extends Component {
  render() {

    const initialState = {
      num: ['Bàn phím', 'Chuột', 'Tai nghe'],
      editStatus: true
    }

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'THÊM_LOA_MỚI':
          return { ...state, num: [...state.num, 'Loa'], editStatus: !state.editStatus }

        default:
          break;
      }
      return state;
    }

    const store = configureStore({ reducer });

    console.log('store: ', store.getState());

    store.dispatch({ type: 'THÊM_LOA_MỚI' });

    console.log('store: ', store.getState());

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
