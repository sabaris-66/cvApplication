/* eslint-disable react/prop-types */
const Personal = ({ state, handleChange }) => {
  return (
    <div className="personalSec">
      <h2>Personal Details</h2>
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
  );
};
export default Personal;
