function Question({ question }) {
    return (
        <div>
            <div>
                <p className="mb-2 mt-6">{question.question}</p>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <input className="mr-2" type="radio" id={option} name="option" value={option} />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Question
