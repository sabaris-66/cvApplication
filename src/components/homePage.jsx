import { useState } from "react";
import Personal from "./personalSec";
import CvPage from "./cvPage";

const HomePage = () => {
  const [personalStates, setPersonalStates] = useState({
    fullName: "",
    email: "",
    phNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setPersonalStates({ ...personalStates, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Personal state={personalStates} handleChange={handleChange} />
      <CvPage state={personalStates} />
    </>
  );
};

export default HomePage;
