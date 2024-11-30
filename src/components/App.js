import React, { Component } from 'react';
import './App.css';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Nav from './Nav';
import { connect } from 'react-redux';

class App extends Component {

  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm />
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row mt-4'>
            <NoteList />
            { this.showForm() }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
