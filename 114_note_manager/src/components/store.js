// import noteData from './firebaseConnect';
import { createStore } from 'redux';

// Khởi tạo reducer
const noteInitialState = {
    testConnect: 'testthoi'
};
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("Kết nối thành công với addData, biến nhận vào là: ", action.nhanVaoItem);
            return state;
        default:
            return state;
    }
}

// Khởi tạo store
const store = createStore(allReducer);

export default store;
