/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/experienceSecStyles.css";

const AddExperienceComp = (props) => {
  const newFunction = () => {
    const item = document.querySelector(`.exDrop${props.index}`);
    item.classList.toggle("hidden");
    const arrow = document.querySelector(`.exMoreOrLess${props.index}`);
    if (arrow.textContent == "∨") {
      arrow.textContent = "∧";
    } else {
      arrow.textContent = "∨";
    }
  };
  return (
    <div className="experienceSec">
      <div className="exDropDown" onClick={newFunction}>
        <div className="subTitle">{`Experience ${props.index + 1}`}</div>
        <div className={`exMoreOrLess${props.index}`}>∨</div>
      </div>
      <div className={`drop exDrop${props.index} hidden`}>
        <div>Company Name</div>
        <input
          onChange={(e) => props.updateExChange(e, props.index, "companyName")}
          type="text"
          value={props.currObj["companyName"]}
          placeholder="Enter Company Name"
        />
        <div>Position Title</div>
        <input
          onChange={(e) => props.updateExChange(e, props.index, "positionName")}
          value={props.currObj["positionName"]}
          type="text"
          placeholder="Enter Position Title"
        />
        <div>Start Date</div>
        <input
          onChange={(e) => props.updateExChange(e, props.index, "startDate")}
          value={props.currObj["startDate"]}
          type="date"
          placeholder="Enter Start Date"
        />
        <div>End Date</div>
        <input
          onChange={(e) => props.updateExChange(e, props.index, "endDate")}
          value={props.currObj["endDate"]}
          type="date"
          placeholder="Enter End Date"
        />
        <div>Location</div>
        <input
          onChange={(e) => props.updateExChange(e, props.index, "location")}
          value={props.currObj["location"]}
          type="text"
          placeholder="Enter Location"
        />
        <div>Description</div>
        <textarea
          onChange={(e) => props.updateExChange(e, props.index, "description")}
          value={props.currObj["description"]}
          placeholder="Enter Description"
        />
        <br />
        <button onClick={() => props.removeExChange(props.index)}>
          Delete
        </button>
        <br />
        <button onClick={() => props.cancelExChange(props.index)}>
          Cancel
        </button>
        <br />
      </div>
    </div>
  );
};

// main component
const Experience = (props) => {
  const addNewExperience = () => {
    props.addExChange();
  };

  const dropChange = () => {
    const item = document.querySelector(".exDrop");
    item.classList.toggle("hidden");
    const arrow = document.querySelector(".exMoreOrLess");
    if (arrow.textContent == "∨") {
      arrow.textContent = "∧";
    } else {
      arrow.textContent = "∨";
    }
  };

  return (
    <div className="experienceSec">
      <div className="title exDropDown" onClick={dropChange}>
        <div>Experience</div>
        <div className="exMoreOrLess">∨</div>
      </div>

      <div className="content drop exDrop hidden">
        {props.experienceStates.map((currObj, index) => {
          return (
            <AddExperienceComp
              key={index}
              {...props}
              index={index}
              currObj={currObj}
            />
          );
        })}
        <button className="add" onClick={addNewExperience}>
          + Experience
        </button>
      </div>
    </div>
  );
};

export default Experience;
