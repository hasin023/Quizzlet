import Header from "./layout/Header"
import MainContent from "./layout/MainContent"
import Page from "./layout/Page"
import QuestionContent from "./components/QuestionContent"


function App() {
  return (
    <Page>
      <Header />
      <MainContent>
        <QuestionContent />
      </MainContent>
    </Page>
  )
}

export default App
