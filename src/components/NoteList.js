import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { noteData } from './firebaseConnect';
import { onValue } from "firebase/database";

class NoteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }

    componentDidMount() {
        let arrayData = [];
        onValue(noteData, (snapshot) => {
            arrayData.length = 0;
            snapshot.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                });
            });
            this.setState({
                dataFirebase: arrayData
            });
        })
    }

    getData = () => {
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteItem 
                        key={key} 
                        index={key}
                        note={value}
                        noteContent={value.noteContent} 
                        noteTitle={value.noteTitle}
                    />
                )
            })
        }
    }

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default NoteList;