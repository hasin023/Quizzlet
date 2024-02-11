function NextButton({ dispatch, answer }) {
    if (answer === null) { return null; }

    return (
        <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
            className="button float-right active:translate-y-0.5">
            Next
        </button>
    )
}

export default NextButton
