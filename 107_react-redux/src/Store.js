import { combineReducers, createStore } from 'redux';
import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';


const allReducers = combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})

const store1 = createStore(allReducers);

store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})

store1.dispatch({ type: 'CHANGE_EDIT_STATUS' });

// Thêm item
store1.dispatch({
    type: 'ADD_NEW',
    addItem: 'Màn hình'
});

// Xóa item
store1.dispatch({
    type: 'DELETE_ITEM',
    removeItem: 1
})

export default store1;