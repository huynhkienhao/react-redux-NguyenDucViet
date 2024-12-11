import { noteData } from './firebaseConnect';
import { createStore } from 'redux';
import { getDatabase, push, ref, update } from "firebase/database";

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
            return { ...state, isEdit: !state.isEdit };
        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject };
        case "EDIT":
            const data = ref(getDatabase(), 'dataForNote/' + action.getItem.id);
            update(data, {
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            }).then(() => {
                console.log("Store nhận được dữ liệu sau khi sửa là " + JSON.stringify(action.getItem));
            }).catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu: ", error);
            });
            return { ...state, editItem: {} };
        default:
            return state;
    }
}

// Khởi tạo store
const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})

export default store;
