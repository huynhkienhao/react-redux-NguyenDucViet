import { noteData } from './firebaseConnect';
import { createStore } from 'redux';
import { getDatabase, ref, push } from "firebase/database";

// Khởi tạo reducer
const noteInitialState = {
    testConnect: 'testthoi'
};

const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            // const database = getDatabase(noteData);
            // const connectData = ref(database, 'dataForNote');
            push(noteData, action.nhanVaoItem);
            console.log(`Thêm dữ liệu ${JSON.stringify(action.nhanVaoItem)} thành công`);
            return state;
        default:
            return state;
    }
}

// Khởi tạo store
const store = createStore(allReducer);

export default store;
