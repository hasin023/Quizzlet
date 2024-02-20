function Progressbar({ index, numQuestions, points, maxPoints, answer }) {
    return (
        <header className="progress">
            <progress value={index + Number(answer !== null)} max={numQuestions}></progress>
            <div className="flex justify-between">
                <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
                <p>Points: <strong>{points}</strong> / {maxPoints}</p>
            </div>
        </header>
    )
}

export default Progressbar
