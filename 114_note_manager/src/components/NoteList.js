import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a
                                    data-parent="#noteList"
                                    href="#noteContent1"
                                    aria-expanded="true"
                                    aria-controls="noteContent1"
                                    data-bs-toggle="collapse"
                                >
                                    Ghi chú ngày 06/11/2024
                                </a>
                            </h5>
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
                    <div className="card">
                        <div className="card-header" role="tab" id="note2">
                            <h5 className="mb-0">
                                <a
                                    data-parent="#noteList"
                                    href="#noteContent2"
                                    aria-expanded="true"
                                    aria-controls="noteContent2"
                                    data-bs-toggle="collapse"
                                >
                                    Ghi chú ngày 05/11/2024
                                </a>
                            </h5>
                        </div>
                        <div
                            id="noteContent2"
                            className="collapse in"
                            role="tabpanel"
                            aria-labelledby="note2"
                        >
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat
                                eveniet hic quia facilis beatae magnam porro alias repudiandae
                                pariatur numquam veniam, culpa voluptas adipisci iure impedit nesciunt
                                assumenda amet!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteList;