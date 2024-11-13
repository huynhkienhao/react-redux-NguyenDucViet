import noteData from './firebaseConnect';
import { createStore } from 'redux';

// Khởi tạo reducer
const noteInitialState = {};
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return state
        default:
            return state
    }
}

// Khởi tạo store
const store = createStore(allReducer);
