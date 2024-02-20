import { useEffect, useReducer } from "react";
import questionReducer from "../reducer/questionsReducer";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
// import { shuffle } from "lodash";
import StartScreen from "./StartScreen";
import NextButton from "./NextButton";
import Progressbar from "./Progressbar";


const initialState = {
    questions: [],
    status: 'loading', // loading, error, ready, active, finished
    questionIndex: 0,
    answer: null,
    points: 0,
}

function QuestionContent() {

    const [{ questions, status, questionIndex, answer, points }, dispatch] = useReducer(questionReducer, initialState);
    let maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

    const fetchQuestions = async () => {
        try {
            const response = await fetch("http://localhost:8000/questions");
            if (!response.ok) {
                throw new Error('Failed to fetch questions');
            }
            const data = await response.json();
            dispatch(
                {
                    type: 'DATA_FETCH_SUCCESS',
                    payload: data
                }
            )
        } catch (error) {
            dispatch({
                type: 'DATA_FETCH_ERROR'
            })
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);


    return (
        <div>
            {status === 'loading' && <Loader />}
            {status === 'error' && <Error />}
            {status === 'ready' && <StartScreen questionCount={questions.length} dispatch={dispatch} />}
            {status === 'active' && (
                <>
                    <Progressbar index={questionIndex} numQuestions={questions.length} points={points} maxPoints={maxPoints} answer={answer} />
                    <Question question={questions[questionIndex]} dispatch={dispatch} answer={answer} />
                    <NextButton dispatch={dispatch} answer={answer} />
                </>
            )}
        </div>
    )
}

export default QuestionContent
