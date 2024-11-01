/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/educationSecStyles.css";
const AddEducationComp = (props) => {
  const modernDrop = () => {
    const item = document.querySelector(`.eDrop${props.index}`);
    item.classList.toggle("hidden");
    const arrow = document.querySelector(`.eMoreOrLess${props.index}`);
    if (arrow.textContent == "∨") {
      arrow.textContent = "∧";
    } else {
      arrow.textContent = "∨";
    }
  };
  return (
    <div className="educationSec">
      <div className="eDropDown" onClick={modernDrop}>
        <div className="subTitle">{`Education ${props.index + 1}`}</div>
        <div className={`eMoreOrLess${props.index}`}>∨</div>
      </div>
      <div className={`drop eDrop${props.index} hidden`}>
        <div>School</div>
        <input
          onChange={(e) => props.updateEdChange(e, props.index, "schoolName")}
          type="text"
          value={props.currObj["schoolName"]}
          placeholder="Enter school / university"
        />
        <div>Degree</div>
        <input
          onChange={(e) => props.updateEdChange(e, props.index, "degreeName")}
          value={props.currObj["degreeName"]}
          type="text"
          placeholder="Enter Degree / Field Or study"
        />
        <div>Start Date</div>
        <input
          onChange={(e) => props.updateEdChange(e, props.index, "startDate")}
          value={props.currObj["startDate"]}
          type="date"
          placeholder="Enter Start Date"
        />
        <div>End Date</div>
        <input
          onChange={(e) => props.updateEdChange(e, props.index, "endDate")}
          value={props.currObj["endDate"]}
          type="date"
          placeholder="Enter End Date"
        />
        <div>Location</div>
        <input
          onChange={(e) => props.updateEdChange(e, props.index, "location")}
          value={props.currObj["location"]}
          type="text"
          placeholder="Enter Location"
        />
        <br />
        <button onClick={() => props.removeEdChange(props.index)}>
          Delete
        </button>
        <br />
        <button onClick={() => props.cancelEdChange(props.index)}>
          Cancel
        </button>
        <br />
      </div>
    </div>
  );
};

// main component
const Education = (props) => {
  const addNewEducation = () => {
    props.addEdChange();
  };

  const dropFunction = () => {
    const item = document.querySelector(".eDrop");
    item.classList.toggle("hidden");
    const moreOrLess = document.querySelector(".eMoreOrLess");
    if (moreOrLess.textContent == "∨") {
      moreOrLess.textContent = "∧";
    } else {
      moreOrLess.textContent = "∨";
    }
  };

  return (
    <div className="educationSec">
      <div className="title eDropDown" onClick={dropFunction}>
        <div>Education</div>
        <div className="eMoreOrLess">∨</div>
      </div>

      <div className="content drop eDrop hidden">
        {props.educationStates.map((currObj, index) => {
          return (
            <AddEducationComp
              key={index}
              {...props}
              index={index}
              currObj={currObj}
            />
          );
        })}
        <button className="add" onClick={addNewEducation}>
          + Education
        </button>
      </div>
    </div>
  );
};

export default Education;
