import React from "react";
import Mainbox from "./components/Mainbox";
import Getcolor from "./components/Getcolor";
import Toggle from "./components/Toggle";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div class="container">
      <Mainbox color={color} isDarkText={isDarkText} />
      <Getcolor handleChange={handleChange} color={color} />
      <Toggle setIsDarkText={setIsDarkText} isDarkText={isDarkText} />
    </div>
  );
};

export default App;
