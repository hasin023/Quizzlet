import { useState, useEffect } from "react";
import Header from "./layout/Header"
import MainContent from "./layout/MainContent"
import Page from "./layout/Page"

function App() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8000/questions");
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);


  return (
    <Page>
      <Header />
      <MainContent>
        <h2>Welcome to the React Quiz</h2>
        {questions.map((question) => (
          <div key={question.id}>
            <p className="mb-6">{question.question}</p>
          </div>
        ))}
      </MainContent>
    </Page>
  )
}

export default App
