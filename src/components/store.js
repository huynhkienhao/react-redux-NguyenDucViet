import { noteData } from './firebaseConnect';
import { createStore } from 'redux';
import { push } from "firebase/database";

// Khởi tạo reducer
const noteInitialState = {
    isEdit: false,
    editItem: {}
};

const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            push(noteData, action.nhanVaoItem);
            console.log(`Thêm dữ liệu ${JSON.stringify(action.nhanVaoItem)} thành công`);
            return state;
        case "CHANGE_EDIT_STATUS":
            return {...state, isEdit: !state.isEdit};
        case "GET_EDIT_DATA":
            return {...state, editItem: action.payload};
        default:
            return state;
    }
}

// Khởi tạo store
const store = createStore(allReducer);

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})

export default store;
