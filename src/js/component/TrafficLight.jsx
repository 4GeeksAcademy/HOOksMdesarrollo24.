import React from "react"; // Import React
import "../../styles/index.css"; // Import CSS file

// Component to traffic light
const TrafficLight = ({ color, onColorChange }) => { 
  return (
    <div className="traffic-light">
      <div
        className={`circle circle-red ${color === "red" ? "turn-on" : ""}`}
        onClick={() => onColorChange("red")} 
      ></div>
      <div
        className={`circle circle-orange ${color === "orange" ? "turn-on" : ""}`}
        onClick={() => onColorChange("orange")} 
      ></div>
      <div
        className={`circle circle-green ${color === "green" ? "turn-on" : ""}`}
        onClick={() => onColorChange("green")} 
      ></div>
    </div>
  );
};

export default TrafficLight; // Export TrafficLight
