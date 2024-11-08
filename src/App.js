import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConnect } from './firebaseConnect';
import { getDatabase, ref, push, remove } from "firebase/database";

class App extends Component {

  // Thêm dữ liệu
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

  // Xóa dữ liệu
  deleteData = (id) => {
    const database = getDatabase(firebaseConnect);
    const connectData = ref(database, `dataForNote/${id}`);

    remove(connectData).then(() => {
      console.log(`Xóa dữ liệu thành công có id là ${id}`);
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
          <br />
          <button onClick={() => this.deleteData('-OBC-E25ASYaY3Xt0k6n')}>Click vào để xóa dữ liệu</button>
        </header>
      </div>
    );
  }

}

export default App;
