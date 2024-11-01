/* eslint-disable react/prop-types */
import "../styles/cvPageStyles.css";

const CvPage = ({ personalStates, educationStates, experienceStates }) => {
  return (
    <>
      <div className="personalInfo">
        <div className="head">{personalStates.fullName}</div>
        <div className="belowHead">
          {personalStates.email && <div>&#9993; {personalStates.email}</div>}
          {personalStates.phNumber && (
            <div>&#9742; {personalStates.phNumber}</div>
          )}
          {personalStates.address && (
            <div>&#9733; {personalStates.address}</div>
          )}
        </div>
      </div>
      <div className="educationSide">
        {educationStates.length > 0 && <h2>Education</h2>}
        {educationStates.map((currObj, index) => {
          return (
            <div className="educationInfo" key={index}>
              <div className="edLeft">
                <div>{`${currObj["startDate"]} - ${currObj["endDate"]}`}</div>
                <div>{currObj["location"]}</div>
              </div>
              <div className="edRight">
                <div>
                  <strong>{currObj["schoolName"]}</strong>
                </div>
                <div>{currObj["degreeName"]}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="experienceSide">
        {experienceStates.length > 0 && <h2>Experience</h2>}
        {experienceStates.map((currObj, index) => {
          return (
            <div className="experienceInfo" key={index}>
              <div className="exLeft">
                <div>{`${currObj["startDate"]} - ${currObj["endDate"]}`}</div>
                <div>{currObj["location"]}</div>
              </div>
              <div className="exRight">
                <div>
                  <strong>{currObj["companyName"]}</strong>
                </div>
                <div>{currObj["positionName"]}</div>
                <div>{currObj["description"]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CvPage;
