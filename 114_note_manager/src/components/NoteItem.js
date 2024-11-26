import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a
                            data-parent="#noteList"
                            href="#noteContent1"
                            aria-expanded="true"
                            aria-controls="noteContent1"
                            data-bs-toggle="collapse"
                            className='mt-2'
                        >
                            Ghi chú ngày 06/11/2024
                        </a>
                    </h5>
                    <div className='btn-group'>
                        <button className='btn btn-success'>Sửa</button>
                        <button className='btn btn-danger'>Xóa</button>
                    </div>
                </div>
                <div
                    id="noteContent1"
                    className="collapse in"
                    role="tabpanel"
                    aria-labelledby="note1"
                >
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat
                        eveniet hic quia facilis beatae magnam porro alias repudiandae
                        pariatur numquam veniam, culpa voluptas adipisci iure impedit nesciunt
                        assumenda amet!
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;