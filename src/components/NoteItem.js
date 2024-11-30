import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a
                            data-parent="#noteList"
                            href={'#number' + this.props.index}
                            aria-expanded="true"
                            aria-controls="noteContent1"
                            data-bs-toggle="collapse"
                            className='mt-2'
                        >
                            {this.props.noteTitle}
                        </a>
                    </h5>
                    <div className='btn-group'>
                        <button className='btn btn-success' onClick={() => this.props.changeEditStatus()}>Sửa</button>
                        <button className='btn btn-danger'>Xóa</button>
                    </div>
                </div>
                <div
                    id={'number' + this.props.index}
                    className="collapse in"
                    role="tabpanel"
                    aria-labelledby="note1"
                >
                    <div className="card-body">
                    {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editStatus: state.prop
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);