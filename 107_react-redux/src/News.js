import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

    // useEditStatusInStore = () => {
    //     let { dispatch } = this.props;
    //     dispatch({ type: 'CHANGE_EDIT_STATUS' })
    // }

    render() {
        return (
            <div>
                <h2>Đây là component News</h2>
                <button onClick={() => this.props.useEditStatusInStore()}>Click here</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({ type: 'CHANGE_EDIT_STATUS' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);