function questionReducer(state, action) {
    switch (action.type) {
        case 'DATA_FETCH_SUCCESS':
            return {
                ...state,
                questions: action.payload,
                status: 'ready'
            }
        case 'DATA_FETCH_ERROR':
            return {
                ...state,
                status: 'error'
            }
        case 'START_QUIZ':
            return {
                ...state,
                status: 'active'
            }
        case 'ANSWER_QUESTION':
            return {
                ...state,
                answer: action.payload
            }
        default:
            return state;
    }
}

export default questionReducer;