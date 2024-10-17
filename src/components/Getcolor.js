import React from "react";

const Getcolor = ({ color, handleChange }) => {
  return (
    <input
      type="text"
      value={color}
      onChange={handleChange}
      placeholder="Enter a color"
      className="button"
    />
  );
};

export default Getcolor;
