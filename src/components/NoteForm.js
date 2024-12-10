import React, { Component } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { noteData } from './firebaseConnect';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }

    componentDidMount = () => {
        if (this.props.editItem) {
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            });
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

    }

    addData = (title, content) => {
        // Nếu ID tồn tại là nút SỬA
        if (this.state.id) {
            // Gom dữ liệu vào một biến để đẩy lên store
            let editObject = {}
            editObject.id = this.state.id;
            editObject.noteTitle = this.state.noteTitle;
            editObject.noteContent = this.state.noteContent;

            // Gọi hàm trong mapDispatchToProps
            this.props.editDataStore(editObject);
        } 
        // Còn ID không tồn tại là nút THÊM MỚI
        else {
            let item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item);
        }
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
                        <input
                            type="text"
                            className="form-control"
                            name="noteTitle"
                            id="noteTitle"
                            aria-describedby="helpIdNoteTitle"
                            placeholder="Tiêu đề note"
                            onChange={(event) => this.isChange(event)}
                            defaultValue={this.props.editItem.noteTitle}
                        />
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
                            onChange={(event) => this.isChange(event)}
                            defaultValue={this.props.editItem.noteContent}
                        />
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

const mapStateToProps = (state) => {
    return {
        editItem: state.editItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDataStore: (nhanVaoItem) => {
            dispatch({ type: "ADD_DATA", nhanVaoItem })
        },
        editDataStore: (themItemEdit) => {
            dispatch({ type: "EDIT", themItemEdit })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);