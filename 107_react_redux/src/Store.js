import { combineReducers, configureStore } from '@reduxjs/toolkit';
import numReducer from './Reducers/numReducer';
import editStatusReducer from './Reducers/editStatusReducer';

const allReducers = combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})

const store = configureStore({ reducer: allReducers });

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})

store.dispatch({ type: 'CHANGE_STATUS' });

// Thêm item
store.dispatch({
    type: 'ADD_ITEM',
    payload: 'Màn hình'
});

// Xóa item
store.dispatch({
    type: 'REMOVE_ITEM',
    payload: 1
})

export default store;