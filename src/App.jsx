import InputContainer from "./components/InputContainer"
import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import Experience from "./components/Experience"
import LivePreview from "./components/LivePreview"

function App() {
  return (
      <div className=
      "grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-mainlayout" 
      >
        <InputContainer>
          <PersonalDetails />
          <Education />
          <Experience />
        </InputContainer>
        
        <LivePreview />
      </div>
  )
}

export default App
