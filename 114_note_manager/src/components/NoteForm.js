import React, { Component } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { noteData } from './firebaseConnect';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name);
        console.log(value);

        this.setState({
            [name]: value
        });

    }

    addData = (title, content) => {
        let item = {};

        item.noteTitle = title;
        item.contnoteContentent = content;

        this.props.getData(item);
    }

    pushData = (title, content) => {
        const database = getDatabase(noteData);
        const connectData = ref(database, 'dataForNote');
        push(connectData, {
            title: title,
            content: content
        }).then(() => {
            console.log('Thêm dữ liệu thành công');
        })
    }
    render() {
        return (
            <div className="col-4">
                <h3>SỬA NỘI DUNG NOTE</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input type="text"
                            className="form-control"
                            name="noteTitle"
                            id="noteTitle"
                            aria-describedby="helpIdNoteTitle"
                            placeholder="Tiêu đề note"
                            onChange={(event) => this.isChange(event)} />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea
                            type="text"
                            className="form-control"
                            name="noteContent"
                            id="noteContent"
                            aria-describedby="helpIdNoteContent"
                            placeholder="Nội dung note"
                            defaultValue={""}
                            onChange={(event) => this.isChange(event)} />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary">
                        Lưu
                    </button>
                </form>
            </div>
        );
    }
}

export default NoteForm;