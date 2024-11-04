import { createStore } from 'redux';

const oldState = {
    num: ['Bàn phím', 'Chuột', 'Tai nghe'],
    editStatus: true
}

const reducer1 = (state = oldState, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            return { ...state, editStatus: !state.editStatus }

        case 'ADD_NEW':
            return { ...state, num: [...state.num, action.addItem] }

        case 'DELETE_ITEM':
            return { ...state, num: state.num.filter((value, index) => index !== action.removeItem) }

        default:
            return state;
    }
}

const store1 = createStore(reducer1);

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