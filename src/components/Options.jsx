function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null;

    return (
        <div className="flex flex-col gap-5 mb-12">
            {question.options.map((option, index) => (
                <button key={index}
                    className={`button button-option ${index === answer ? 'translate-x-5' : ''} 
                    ${hasAnswered ? index === question.correctOption ? 'correct' : 'wrong' : ''}`}
                    onClick={() => dispatch({ type: 'ANSWER_QUESTION', payload: index })}
                    disabled={hasAnswered}
                >
                    {option}
                </button>
            ))}
        </div >
    )
}

export default Options
