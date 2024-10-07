import React, { useState } from "react"; // Import React and useState
import "../../styles/index.css"; // Import CSS
import TrafficLight from "./TrafficLight"; // Import component TrafficLight

// Component principal
const Home = () => {
  const [color, setColor] = useState("red"); // Save actual state

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor); // Change color with a click
  };

  return (
    <div className="text-center">
      <h1>Semáforo</h1> {/* Título del semáforo */}
      <TrafficLight color={color} onColorChange={handleColorChange} /> 
    </div>
  );
};

export default Home; // Export component Home
