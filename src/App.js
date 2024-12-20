import React, { useState, useEffect } from "react";
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
  const [height, setHeight] = useState(window.innerHeight);
  const [width,setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      if(window.innerWidth<350){
      setHeight(window.innerHeight*2);
      }
      else{
        setHeight(window.innerHeight);
      }

    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="font-urbanist h-screen">
      {/* <CircleWithNodes/> */}
      <h1 className="text-3xl text-white font-bold p-8 bg-dark">TIMELINE</h1>
      <div
        style={{ backgroundImage: 'url(/map.jpg)',height: `${height}px`}}
        className="relative w-full min-h-screen bg-cover bg-center bg-dark text-white font-urbanist"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>      {/* Timeline Section */}

        <section className="font-urbanist h-screen md:h-screen">
          <Timeline onUpdate={updateTimelineIndex} />
        </section>

        {/* Locations Section */}
        {/* <section className="p-6">
        <h2 className="text-2xl font-bold mb-8">LOCATIONS</h2>
        <Carousel onMapClick={() => setIsModalOpen(true)} />
      </section> */}

        {/* Map Modal */}
        {/* <MapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      </div>
      <section className="font-urbanist md:h-screen">
        <Locations timelineIndex={timelineIndex} />
      </section>
    </div>
  );
}

export default App;