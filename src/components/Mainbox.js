import React from "react";

const MainBox = ({ color, isDarkText }) => {
  const boxStyle = {
    backgroundColor: color, // Set the background color based on the prop
    color: isDarkText ? "#000" : "#fff",
  };

  return (
    <div style={boxStyle} className="box">
      <p>{color}</p>
    </div>
  );
};

export default MainBox;
