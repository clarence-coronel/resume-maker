import InputContainer from "./components/InputContainer"
import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import Experience from "./components/Experience"
import LivePreview from "./components/LivePreview"
import { useState } from "react"


function App() {

  const [personalDetails, setPersonalDetails] = useState({name: "", email: "", phone: "", address: ""});


  const updatePersonalDetails = (event) => {
    const { name, value } = event.target;
    setPersonalDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
      <div className=
      "grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-mainlayout" 
      >
        <InputContainer>
          <PersonalDetails personalDetailsObj={personalDetails} onChangeHandler={updatePersonalDetails} />
          <Education />
          <Experience />
        </InputContainer>
        
        <LivePreview personalDetailsObj={personalDetails}  />
      </div>
  )
}

export default App
