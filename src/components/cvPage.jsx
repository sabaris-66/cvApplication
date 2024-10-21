/* eslint-disable react/prop-types */
const CvPage = ({ state }) => {
  return (
    <div className="personalInfo">
      <div>{state.fullName}</div>
      <div>{state.email}</div>
      <div>{state.phNumber}</div>
      <div>{state.address}</div>
    </div>
  );
};

export default CvPage;
