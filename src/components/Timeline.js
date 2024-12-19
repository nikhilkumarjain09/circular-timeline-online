import React, { useState } from "react";
const Timeline = ({onUpdate}) => {
    const timelineevents = [
        {
            name:"USA",
            eventYear:"1776",
            eventName:"The Declaration of Independence",
            description:"The Declaration of Independence is a founding document of the United States that announced the separation of the 13 American colonies from Great Britain.\nThe Continental Congress unanimously adopted the Declaration on July 4, 1776. However, most historians believe it was signed on August 2, 1776, at the Pennsylvania State House, which was later renamed Independence Hall. "
        },
        {
            name:"INDIA",
            eventYear:"1947",
            eventName:"Independence from Britain",
            description:"India gained independence from Britain on August 15, 1947, after years of nonviolent resistance led by Mohandas Gandhi and Jawaharlal Nehru. The Indian Independence Act created two new independent countries, India and Pakistan, and ended 200 years of British rule.\nThe Indian Independence Act was passed in 1947. The act created two new independent dominions; India and Pakistan. Pakistan was split into Pakistan and East Pakistan which is now Bangladesh."
        },
        {
            name:"FRANCE",
            eventYear:"1789",
            eventName:"French Revolution",
            description:"The French Revolution was a period of social and political upheaval in France that lasted from 1789 to 1799. It was a series of events that led to the end of the monarchy and the feudal system, and the establishment of a new political landscape.\nThe revolution began with the storming of the Bastille fortress in Paris on July 14, 1789. The king was forced to agree to a new form of government, and the monarchy was suspended. The revolution became more radical and violent, culminating in the execution of King Louis XVI in 1793."
        },{
            name:"CHINA",
            eventYear:"1911",
            eventName:"Fall of Qing Dynasty",
            description:"The Qing dynasty fell in 1911 after a series of revolts and uprisings that culminated in the Xinhai Revolution.\nThe Qing court agreed to the creation of a republic, and the last Qing emperor, Xuantog, abdicated in 1912. Sun Yat-sen, the founder of the Republic of China, created a provisional constitution for the new country."
        },{
            name:"GERMANY",
            eventYear:"1914",
            eventName:"Start of WWI",
            description:"World War I began on June 28, 1914, when Archduke Franz Ferdinand of Austria and his wife, Sophie, were assassinated in Sarajevo, Bosnia.\nA 19-year-old Serbian nationalist named Gavrilo Princip shot and killed the archduke and his wife at point-blank range. Princip was a member of the Young Bosnia movement, a nationalist group that was supplied with weapons by the Serbian terrorist organization, the Black Hand."
        },{
            name:"JAPAN",
            eventYear:"1941",
            eventName:"Attack on Pearl Harbor",
            description:"The attack on Pearl Harbor was a surprise attack on the U.S. Pacific Fleet by the Japanese on December 7, 1941.\nThe Japanese launched a wave of 177 aircraft to bomb hangars and parked aircraft, and to launch torpedoes at the warships in the harbor. The USS Arizona was hit by a bomb and exploded, sinking the ship and killing 1,177 crew members. The attack also damaged or destroyed 19 U.S. warships and 188 aircraft."
        },
    ]

    var anglesfortext = [
        { "angle": 0 },
        { "angle": 45 },
        { "angle": 90 },
        { "angle": 135 },
        { "angle": 180 },
        { "angle": 225 },
        { "angle": 270 },

    ]
    const [selectedNode, setSelectedNode] = useState(0); // Initial node 0 (Position 1)
    const [rotation, setRotation] = useState(0); // Track rotation of the circle
    const textStyles = (index) => {
        const totalNodes = 8; // Total of 8 nodes (for angle calculation)
        const visibleNodes = 6; // Only show 6 nodes
        const angleBetweenNodes = (360 / totalNodes); // Angle between nodes in full circle (8 nodes)

        // Only show nodes at positions 0, 1, 2, 3, 4, 5 (skip nodes at 6, 7)
        if (index >= visibleNodes) {
            return { display: 'none' }; // Hide node 6 and 7
        }

        const visibleAngle = angleBetweenNodes * index; // Position each node based on angle for 8 nodes
        if (anglesfortext[index].angle + rotation < 0) {
            console.log("Check", anglesfortext[index].angle + rotation)
            return {
                transform: `rotate(${visibleAngle}deg) translate(clamp(50px, 10vw, 150px)) rotate(-${anglesfortext[index].angle + rotation}deg)`, // Align nodes along the border
                transition: 'transform 0.3s', // Smooth transition
            };
        } else {
            return {
                transform: `rotate(${visibleAngle}deg) translate(clamp(50px, 10vw, 150px)) rotate(-${anglesfortext[index].angle + rotation}deg)`, // Align nodes along the border
                transition: 'transform 0.3s', // Smooth transition
            };
        }
    };
    const handleClick = (nodeIndex) => {
        const angleDifference = (360 / 8) * (nodeIndex - selectedNode); // Calculate angle difference for 6 nodes

        // Update the selected node to the clicked one
        setSelectedNode(nodeIndex);

        // Rotate the circle by the calculated difference in angles
        setRotation(rotation - angleDifference);
        onUpdate(nodeIndex);
    };

    const nodeStyles = (index) => {
        const totalNodes = 8; // Total of 8 nodes (for angle calculation)
        const visibleNodes = 6; // Only show 6 nodes
        const angleBetweenNodes = (360 / totalNodes); // Angle between nodes in full circle (8 nodes)

        // Only show nodes at positions 0, 1, 2, 3, 4, 5 (skip nodes at 6, 7)
        if (index >= visibleNodes) {
            return { display: 'none' }; // Hide node 6 and 7
        }

        const visibleAngle = angleBetweenNodes * index; // Position each node based on angle for 8 nodes

        return {
            transform: `rotate(${visibleAngle}deg) translate(clamp(95px, 20vw, 190px))`, // Align nodes along the border
            transition: 'transform 0.3s', // Smooth transition
        };
    };

    return (
        <div className="absolute w-full top-[20%] bg-black">
            <div className="absolute ml-[-20%] md:ml-[-15%] left-0 w-1/3">
                <div
                    className="w-48 h-52 md:w-96 md:h-96 border-4 border-white rounded-full absolute flex justify-center items-center"
                    style={{
                        transform: `rotate(${rotation}deg)`, // Rotate the whole circle
                        transition: 'transform 0.3s', // Smooth transition for rotation
                    }}
                >
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className={`absolute w-6 h-6 rounded-full flex justify-center items-center cursor-pointer ${selectedNode === index ? "bg-pink-500 border-[2px] border-white" : "bg-white"
                                }`}
                            style={nodeStyles(index)} // Apply the styles to each node
                            onClick={() => handleClick(index)} // Handle node click
                        >
                        </div>
                    ))}
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className={`absolute w-6 h-6 flex justify-center items-center cursor-pointer ${selectedNode === index ? 'text-pink-500' : ''
                                }`}
                            style={textStyles(index)} // Apply the styles to each node
                        // onClick={() => handleClick(index)} // Handle node click
                        >
                            {index <= 5 ? timelineevents[index].name : ""}
                        </div>
                    ))}
                </div>
            </div>

            {/* Centered Text Content */}
            <div className="absolute left-1/3 transform">
                {timelineevents[selectedNode] && (
                    <div className="text-white max-w-lg mx-auto">
                        <h3 className="text-3xl font-bold mb-4">{timelineevents[selectedNode].name}</h3>
                        <h2 className="text-1xl font-bold mb-4">{timelineevents[selectedNode].eventName}</h2>
                        <h1 className="text-sm col-span-1">Year:{timelineevents[selectedNode].eventYear}</h1>
                        <p className="col-span-3">{timelineevents[selectedNode].description}</p>
                        {/* {timelineevents[selectedNode].description.map((item, index) => (
                            <div key={index} className="grid grid-cols-4">
                                <h1 className="text-sm col-span-1">Year:{item.year}</h1>
                                <p className="col-span-3">{item.event}</p>
                            </div>
                        ))} */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Timeline;
