import { useEffect, useReducer } from "react";
import questionReducer from "../reducer/questionsReducer";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import { shuffle } from "lodash";


const initialState = {
    questions: [],
    status: 'loading', // loading, error, ready, active, finished
}

function QuestionContent() {

    const [{ questions, status }, dispatch] = useReducer(questionReducer, initialState);

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
            {status === 'ready' && shuffle(questions).map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    )
}

export default QuestionContent
