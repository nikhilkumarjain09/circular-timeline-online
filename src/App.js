import React, { useState } from "react";
import Timeline from "./components/Timeline";
import Carousel from "./components/Carousel";
import MapModal from "./components/MapModal";
import CircleWithNodes from "./components/CirclewithNodes";
import Locations from "./components/Locations";
import bgimg from "../src/assets/images/map.jpg"

function App() {
  const [timelineIndex, setTimelineIndex] = useState(0);

  // Function to update timeline data
  const updateTimelineIndex = (data) => {
    setTimelineIndex(data);
  };
  return (
    <div className="h-screen">
      {/* <CircleWithNodes/> */}
      <h1 className="text-3xl text-white font-bold p-8 bg-dark">TIMELINE</h1>
      <div
        style={{ backgroundImage: 'url(/map.jpg)' }}
        className="relative w-full h-screen bg-cover bg-center bg-dark text-white font-urbanist"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>      {/* Timeline Section */}

        <section className="font-urbanist h-[70vh] md:h-screen">
          <Timeline onUpdate={updateTimelineIndex} />
        </section>
        <Locations timelineIndex={timelineIndex} />
        {/* Locations Section */}
        {/* <section className="p-6">
        <h2 className="text-2xl font-bold mb-8">LOCATIONS</h2>
        <Carousel onMapClick={() => setIsModalOpen(true)} />
      </section> */}

        {/* Map Modal */}
        {/* <MapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      </div>
    </div>
  );
}

export default App;