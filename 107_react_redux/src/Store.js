import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    num: ['Bàn phím', 'Chuột', 'Tai nghe'],
    editStatus: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'THÊM_LOA_MỚI':
            return { ...state, num: [...state.num, 'Loa'] }

        case 'ADD_ITEM':
            return { ...state, num: [...state.num, action.addItem] }

        case 'REMOVE_ITEM':
            return { ...state, num: state.num.filter((value, index) => index !== action.removeItem) }

        default:
            return state;
    }
}

const store = configureStore({ reducer });

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})

store.dispatch({ type: 'THÊM_LOA_MỚI' });

// Thêm item
store.dispatch({
    type: 'ADD_ITEM',
    addItem: 'Màn hình'
});

// Xóa item
store.dispatch({
    type: 'REMOVE_ITEM',
    removeItem: 1
})

export default store;