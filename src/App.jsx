import InputContainer from "./components/InputContainer"
import PersonalDetails from "./components/PersonalDetails"
import Education from "./components/Education"
import Experience from "./components/Experience"
import LivePreview from "./components/LivePreview"
import DownloadContainer from "./components/DownloadContainer"
import { useState } from "react"
import { v4 as uuid } from 'uuid';


function App() {

  const [personalDetails, setPersonalDetails] = useState({name: "", email: "", phone: "", address: ""});
  const [educArr, setEducArr] = useState([]);
  const [expArr, setExpArr] = useState([]);

  const updatePersonalDetails = (event) => {
    const { name, value } = event.target;
    setPersonalDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addEducArr = (newObj) =>{
    const newEducArr = [...educArr];
    newEducArr.push(newObj);
    setEducArr(newEducArr);
  }
  const removeEducArr = (id) =>{
    const newArr = educArr.filter(educ=> educ.id != id);
    setEducArr(newArr);
  }

  const addExpArr = (newObj) =>{
    const newExpArr = [...expArr];
    newExpArr.push(newObj);
    setExpArr(newExpArr);
  }
  const removeExpArr = (id) =>{
    const newArr = expArr.filter(exp=> exp.id != id);
    setExpArr(newArr);
  }

  return (
      <div className=
      "grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-mainlayout" 
      >
        <InputContainer>
          <DownloadContainer livePreview={<LivePreview personalDetailsObj={personalDetails} />} />
          <PersonalDetails personalDetailsObj={personalDetails} onChangeHandler={updatePersonalDetails} />
          <Education add={addEducArr} remove={removeEducArr} educList={educArr} />
          <Experience add={addExpArr} remove={removeExpArr} expList={expArr}/>
        </InputContainer>
        
        <LivePreview personalDetailsObj={personalDetails} educArr={educArr} expArr={expArr} />
      </div>
  )
}

export default App
