const numInitialState = ['Bàn phím', 'Chuột', 'Tai nghe']
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case 'ADD_NEW':
            return [...state, action.addItem]

        case 'DELETE_ITEM':
            return [...state.filter((value, i) => i !== action.removeItem)]
        default:
            return state
    }
}

export default numReducer;