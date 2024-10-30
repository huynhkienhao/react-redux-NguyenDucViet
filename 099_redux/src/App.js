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
          return { ...state, num: [...state.num, 'Loa'] }

        case 'ADD_ITEM':
          return { ...state, num: [...state.num, action.addItem] }

        case 'REMOVE_ITEM':
          return { ...state, num: state.num.filter((value, index) => index !== action.removeItem) }

        default:
          return state;
      }
    }

    const store = configureStore({ reducer });

    console.log('store: ', store.getState());

    store.dispatch({ type: 'THÊM_LOA_MỚI' });

    console.log('store thêm loa mới không dùng action: ', store.getState());

    // Thêm item
    store.dispatch({
      type: 'ADD_ITEM',
      addItem: 'Màn hình'
    });

    console.log('store add: ', store.getState());

    // Xóa item
    store.dispatch({
      type: 'REMOVE_ITEM',
      removeItem: 1
    })

    console.log('store remove: ', store.getState());

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
