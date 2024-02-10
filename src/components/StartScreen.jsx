/* eslint-disable react/no-unescaped-entities */
function StartScreen({ questionCount, dispatch }) {
    return (
        <div className="flex flex-col items-center">
            <h2>Welcome to the React Quizz</h2>
            <p>{questionCount} questions to test your React mastery</p>
            <button className="button float-right active:translate-y-0.5"
                onClick={() => dispatch({ type: 'START_QUIZ' })}
            > Let's Start</button>
        </div >
    )
}

export default StartScreen
