import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConnect } from './firebaseConnect';
import { getDatabase, ref, push } from "firebase/database";

class App extends Component {

  pushData = () => {
    const database = getDatabase(firebaseConnect);
    const connectData = ref(database, 'dataForNote');
    push(connectData, {
      title: 'Ghi chú số 3',
      content: 'Nội dung ghi chú số 3'
    }).then(() => {
      console.log('Thêm dữ liệu thành công');
    })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.pushData()}>Click vào để thêm mới với hàm push</button>
        </header>
      </div>
    );
  }

}

export default App;
