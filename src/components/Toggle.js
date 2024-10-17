import React from "react";

const Toggle = ({ isDarkText, setIsDarkText }) => {
  return (
    <button className="button" onClick={() => setIsDarkText(!isDarkText)}>
      Toggle Text Color
    </button>
  );
};

export default Toggle;
