function questionReducer(state, action) {
    switch (action.type) {
        case 'DATA_FETCH_SUCCESS': {
            return {
                ...state,
                questions: action.payload,
                status: 'ready'
            }
        }
        case 'DATA_FETCH_ERROR':
            return {
                ...state,
                status: 'error'
            }
        default:
            return state;
    }
}

export default questionReducer;