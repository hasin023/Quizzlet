function NextButton({ dispatch, answer, index, numQuestions }) {
    if (answer === null) { return null; }

    if (index < numQuestions - 1) {

        return (
            <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
                className="button float-right active:translate-y-0.5 text-2xl">
                Next
            </button>
        )
    }

    if (index === numQuestions - 1) {

        return (
            <button onClick={() => dispatch({ type: 'FINISHED_QUESTIONS' })}
                className="button float-right active:translate-y-0.5 text-2xl">
                Finish
            </button>
        )
    }
}

export default NextButton
