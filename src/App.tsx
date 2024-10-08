import { useState } from "react";
import { v4 as uuid } from "uuid";
import InputContainer from "./components/InputContainer";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";
import LivePreview from "./components/LivePreview";
import DownloadContainer from "./components/DownloadContainer";
import Footer from "./components/Footer";

interface PersonalDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  address: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  address: string;
  description: string;
}

function App() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [educArr, setEducArr] = useState<Education[]>([]);
  const [expArr, setExpArr] = useState<Experience[]>([]);

  const updatePersonalDetails = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPersonalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addEducArr = (newObj: Education) => {
    setEducArr((prev) => [...prev, newObj]);
  };

  const removeEducArr = (id: string) => {
    setEducArr((prev) => prev.filter((educ) => educ.id !== id));
  };

  const addExpArr = (newObj: Experience) => {
    setExpArr((prev) => [...prev, newObj]);
  };

  const removeExpArr = (id: string) => {
    setExpArr((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-mainlayout">
        <InputContainer>
          <DownloadContainer />
          <PersonalDetails
            personalDetailsObj={personalDetails}
            onChangeHandler={updatePersonalDetails}
          />
          <Education
            add={addEducArr}
            remove={removeEducArr}
            educList={educArr}
          />
          <Experience add={addExpArr} remove={removeExpArr} expList={expArr} />
        </InputContainer>

        <LivePreview
          personalDetailsObj={personalDetails}
          educArr={educArr}
          expArr={expArr}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
