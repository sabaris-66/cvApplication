// educationSec.jsx

/*import { useState } from "react";

const AddEducationComp = (props) => {
  return (
    <>
      <div>School</div>
      <input
        onChange={(e) => props.updateEdChange(e, props.indexNo)}
        type="text"
        name="schoolName"
        value={props.edState["schoolName"]}
        placeholder="Enter school / university"
      />
      <div>Degree</div>
      <input
        onChange={(e) => props.updateEdChange(e, props.indexNo)}
        name="degreeName"
        value={props.edState["degreeName"]}
        type="text"
        placeholder="Enter Degree / Field Or study"
      />
      <div>Start Date</div>
      <input
        onChange={(e) => props.updateEdChange(e, props.indexNo)}
        value={props.edState["startDate"]}
        name="startDate"
        type="date"
        placeholder="Enter Start Date"
      />
      <div>End Date</div>
      <input
        onChange={(e) => props.updateEdChange(e, props.indexNo)}
        value={props.edState["endDate"]}
        name="endDate"
        type="date"
        placeholder="Enter End Date"
      />
      <div>Location</div>
      <input
        onChange={(e) => props.updateEdChange(e, props.indexNo)}
        value={props.edState["location"]}
        name="location"
        type="text"
        placeholder="Enter Location"
      />
      <button onClick={() => props.removeEdChange(props.indexNo)}>
        Delete
      </button>
      <button onClick={() => props.cancelEdChange(props.indexNo)}>
        Cancel
      </button>
    </>
  );
};

// main component
const Education = (props) => {
  const [newEducation, setNewEducation] = useState({});

  const addNewEducation = () => {
    props.addEdChange(newEducation.length.toString());
    const updatedNewEducation = [...newEducation];
    updatedNewEducation.push(
      <>
        <AddEducationComp
          key={newEducation.length.toString()}
          edState={props.educationStates[newEducation.length.toString()]}
          indexNo={newEducation.length.toString()}
          cancelEdChange={props.cancelEdChange}
          removeEdChange={props.removeEdChange}
          updateEdChange={props.updateEdChange}
        />
      </>
    );
    setNewEducation(updatedNewEducation);
  };
  return (
    <>
      <h2>Education</h2>
      {newEducation}
      <button onClick={addNewEducation}>+ Education</button>
    </>
  );
};

export default Education;*/

----------------------------------------------------------------------

// home page
/*import { useState } from "react";
import Personal from "./personalSec";
import CvPage from "./cvPage";
import Education from "./educationSec";

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
    setEducationStates(newEd);
    // setEducationStates({ ...educationStates, [indexNo]: newEd });
  };

  const cancelEdChange = (indexNo) => {
    let temp = educationStates;
    temp = {
      ...temp,
      [indexNo]: {
        schoolName: "",
        degreeName: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    };
    setEducationStates(temp);
  };

  const removeEdChange = (indexNo) => {
    let temp = educationStates;
    delete temp[indexNo];
    setEducationStates(temp);
  };

  const updateEdChange = (e, indexNo) => {
    let temp = educationStates;
    temp = {
      ...temp,
      [indexNo]: { ...temp[indexNo], [e.target.name]: e.target.value },
    };
    setEducationStates(temp);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setPersonalStates({ ...personalStates, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Personal state={personalStates} handleChange={handleChange} />
      <Education
        educationStates={educationStates}
        addEdChange={addEdChange}
        cancelEdChange={cancelEdChange}
        removeEdChange={removeEdChange}
        updateEdChange={updateEdChange}
      />
      <CvPage state={personalStates} />
    </>
  );
};

export default HomePage;
*/
