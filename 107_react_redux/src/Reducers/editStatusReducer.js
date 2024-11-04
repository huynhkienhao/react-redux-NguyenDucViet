const editStatusInitialState = false;
const editStatusReducer = (state = editStatusInitialState, action) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return !state
        default:
            return state
    }
}

export default editStatusReducer;