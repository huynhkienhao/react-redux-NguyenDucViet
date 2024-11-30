import React, { Component } from 'react';
import './App.css';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row mt-4'>
            <NoteList />
            <NoteForm />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
