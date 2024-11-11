import React, { Component } from 'react';
import './App.css';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Nav from './Nav';
import { noteData } from './firebaseConnect';
import { getDatabase, ref, push } from "firebase/database";


class App extends Component {

  pushData = (item) => {
    const database = getDatabase(noteData);
    const connectData = ref(database, 'dataForNote');
    push(connectData, item).then(() => {
      alert('Thêm dữ liệu thành công');
    })
  }
  render() {

    // const database = getDatabase(noteData);
    // const data = ref(database, 'dataForNote');
    // get(data).then((snapshot) => {
    //   console.log(snapshot.val());
    // })

    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row mt-4'>
            <NoteList />
            <NoteForm getData={(item) => this.pushData(item)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
