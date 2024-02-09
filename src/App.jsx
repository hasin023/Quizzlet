import { useEffect, useReducer } from "react";
import Header from "./layout/Header"
import MainContent from "./layout/MainContent"
import Page from "./layout/Page"
import questionReducer from "./reducer/questionsReducer";
import Loader from "./components/Loader";
import Error from "./components/Error";


const initialState = {
  questions: [],
  status: 'loading', // loading, error, ready, active, finished
}

function App() {
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
    <Page>
      <Header />
      <MainContent>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' &&
          <div>
            {questions.map((question) => (
              <div key={question.id}>
                <p className="mb-4">{question.question}</p>
              </div>
            ))}
          </div>
        }
      </MainContent>
    </Page>
  )
}

export default App
