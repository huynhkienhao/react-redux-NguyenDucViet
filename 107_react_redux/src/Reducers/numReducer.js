const numInitialState = ['Bàn phím', 'Chuột', 'Tai nghe']
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.addItem]

        case 'REMOVE_ITEM':
            return [state.filter((value, index) => index !== action.removeItem)]
        default:
            return state
    }
}

export default numReducer;