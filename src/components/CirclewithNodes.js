import React, { useState } from 'react';

const CircleWithNodes = () => {
    const timelineData = [
        { year: "3388 R.G.E", event: "Event 1" },
        { year: "3312 R.G.E", event: "Golgarians Rise" },
        { year: "1425 R.G.E", event: "Event 3" },
        { year: "Event 4" },
        { year: "Event 5" },
        { year: "Event 6" },
      ];
  const [selectedNode, setSelectedNode] = useState(0); // Initial node 0 (Position 1)
  const [rotation, setRotation] = useState(0);
  const [textrotation, setTextRotation] = useState(0);

  const anglesfortext = [
    {"angle":0},
    {"angle":60},
    {"angle":120},
    {"angle":180},
    {"angle":240},
    {"angle":300},
    {"angle":360},

  ]
  const handleClick = (nodeIndex) => {
    // Calculate the angle difference to make clicked node the new "rightmost" (0 degree) position
    const angleDifference = (360 / 6) * (nodeIndex - selectedNode);

    // Update the selected node to the clicked one
    setSelectedNode(nodeIndex);
    
    // Rotate the circle by the calculated difference in angles
    setRotation(rotation - angleDifference);
    setTextRotation(angleDifference);
  };
  const textStyles = (index) => {
    const angle = (360 / 6) * index; // Calculate the position of each node
    return {
      transform: `rotate(${angle}deg) translate(190px) rotate(-${angle}deg)`, // Align nodes along the border
      transition: 'transform 0.3s', // Smooth transition
    };
  };
  
  const nodeStyles = (index) => {
    const angle = (360 / 6) * index;
    return {
      transform: `rotate(${angle}deg) translate(100px) rotate(-${anglesfortext[index].angle+rotation}deg)`, // Align nodes along the border
      transition: 'transform 0.3s', // Smooth transition
    };
  };

  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      <div
        className="w-96 h-96 border-2 border-black rounded-full absolute flex justify-center items-center"
        style={{
          transform: `rotate(${rotation}deg)`, // Rotate the whole circle
          transition: 'transform 0.3s', // Smooth transition for rotation
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer ${
              selectedNode === index ? 'bg-blue-500' : ''
            }`}
            style={nodeStyles(index)} // Apply the styles to each node
            onClick={() => handleClick(index)} // Handle node click
          >
            {timelineData[index].year}
          </div>
        ))}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 bg-gray-300 rounded-full flex justify-center items-center cursor-pointer ${
              selectedNode === index ? 'bg-blue-500' : ''
            }`}
            style={textStyles(index)} // Apply the styles to each node
            onClick={() => handleClick(index)} // Handle node click
          >
            {index + 1} {/* Display node number */}
          </div>
        ))}
      </div>

      {selectedNode !== null && (
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 p-4 bg-white border rounded-lg shadow-md">
          <p className="text-lg font-semibold">Selected Node: {selectedNode + 1}</p>
        </div>
      )}
    </div>
  );
};

export default CircleWithNodes;
