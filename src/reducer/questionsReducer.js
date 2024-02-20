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
        case 'ANSWER_QUESTION': {
            const currentQuestion = state.questions.at(state.questionIndex);

            return {
                ...state,
                answer: action.payload,
                points: action.payload === currentQuestion.correctOption ? state.points + currentQuestion.points : state.points,
            }
        }
        case 'NEXT_QUESTION':
            return {
                ...state,
                questionIndex: state.questionIndex + 1,
                answer: null,
            }
        case 'FINISHED_QUESTIONS':
            return {
                ...state,
                status: 'finished',
                highscore: state.points > state.highscore ? state.points : state.highscore
            }
        default:
            return state;
    }
}

export default questionReducer;