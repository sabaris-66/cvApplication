/* eslint-disable react/prop-types */
import "../styles/personalSecStyles.css";
const Personal = ({ state, handleChange }) => {
  const drop = () => {
    const item = document.querySelector(".pDrop");
    item.classList.toggle("hidden");
    const moreOrLess = document.querySelector(".pMoreOrLess");
    if (moreOrLess.textContent == "∨") {
      moreOrLess.textContent = "∧";
    } else {
      moreOrLess.textContent = "∨";
    }
  };

  return (
    <div className="personalSec">
      <div className="pDropDown title" onClick={drop}>
        <div>Personal Details</div>
        <div className="pMoreOrLess">∨</div>
      </div>
      <div className="content pDrop hidden">
        <div className="fullName">Full Name</div>
        <input
          type="text"
          value={state.fullName}
          onChange={handleChange}
          id="fullName"
        />
        <div className="email">Email</div>
        <input
          type="text"
          value={state.email}
          onChange={handleChange}
          id="email"
        />
        <div className="phNumber">Phone number</div>
        <input
          type="text"
          value={state.phNumber}
          onChange={handleChange}
          id="phNumber"
        />
        <div className="address">Address</div>
        <input
          type="text"
          value={state.address}
          onChange={handleChange}
          id="address"
        />
      </div>
    </div>
  );
};
export default Personal;
