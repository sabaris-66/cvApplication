import { useState } from "react";
import Personal from "./personalSec";
import CvPage from "./cvPage";
import Education from "./educationSec";
import Experience from "./experienceSec";

const HomePage = () => {
  // For Personal Page
  const [personalStates, setPersonalStates] = useState({
    fullName: "",
    email: "",
    phNumber: "",
    address: "",
  });

  // For Educational Sec Page
  const [educationStates, setEducationStates] = useState([]);

  // Experience Sec
  const [experienceStates, setExperienceStates] = useState([]);

  // experience func
  const addExChange = () => {
    let newEx = {
      companyName: "",
      positionName: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };
    let temp = experienceStates;
    temp.push(newEx);
    setExperienceStates([...temp]);
  };

  const updateExChange = (e, index, name) => {
    let temp = experienceStates;
    temp[index][name] = e.target.value;
    setExperienceStates([...temp]);
  };

  const cancelExChange = (index) => {
    let newEx = {
      companyName: "",
      positionName: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };
    let temp = experienceStates;
    temp[index] = newEx;
    setExperienceStates([...temp]);
  };

  const removeExChange = (index) => {
    let temp = experienceStates;
    temp.splice(index, 1);
    setExperienceStates([...temp]);
  };

  // education func
  const addEdChange = () => {
    let newEd = {
      schoolName: "",
      degreeName: "",
      startDate: "",
      endDate: "",
      location: "",
    };
    let temp = educationStates;
    temp.push(newEd);
    setEducationStates([...temp]);
  };

  const updateEdChange = (e, index, name) => {
    let temp = educationStates;
    temp[index][name] = e.target.value;
    setEducationStates([...temp]);
  };

  const cancelEdChange = (index) => {
    let newEd = {
      schoolName: "",
      degreeName: "",
      startDate: "",
      endDate: "",
      location: "",
    };
    let temp = educationStates;
    temp[index] = newEd;
    setEducationStates([...temp]);
  };

  const removeEdChange = (index) => {
    let temp = educationStates;
    temp.splice(index, 1);
    setEducationStates([...temp]);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setPersonalStates({ ...personalStates, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="formInput">
        <Personal state={personalStates} handleChange={handleChange} />
        <Education
          educationStates={educationStates}
          addEdChange={addEdChange}
          cancelEdChange={cancelEdChange}
          removeEdChange={removeEdChange}
          updateEdChange={updateEdChange}
        />
        <Experience
          experienceStates={experienceStates}
          addExChange={addExChange}
          cancelExChange={cancelExChange}
          removeExChange={removeExChange}
          updateExChange={updateExChange}
        />
      </div>
      <div className="formInfo">
        <CvPage
          personalStates={personalStates}
          educationStates={educationStates}
          experienceStates={experienceStates}
        />
      </div>
    </>
  );
};

export default HomePage;
