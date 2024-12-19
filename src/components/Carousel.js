import React, { useState } from "react";

const locations = [
  {
    title: "Towers of Dawn",
    description:
      "Nestled amidst the windswept northern reaches, this city is the pride of Alexandria.",
    image: "/assets/images/towers-of-dawn.jpg", // Placeholder
  },
  { title: "Location 2", description: "Excerpt 2", image: "..." },
  { title: "Location 3", description: "Excerpt 3", image: "..." },
  { title: "Location 4", description: "Excerpt 4", image: "..." },
];

function Carousel({ onMapClick }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + locations.length) % locations.length);
  };

  return (
    <div className="relative">
      {/* Image */}
      <img
        src={locations[current].image}
        alt={locations[current].title}
        className="rounded-lg mx-auto w-full max-w-md"
      />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary p-2 rounded-full"
      >
        →
      </button>

      {/* Info */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold">{locations[current].title}</h3>
        <p className="text-sm text-gray-300">{locations[current].description}</p>
        <button
          onClick={onMapClick}
          className="bg-primary text-white px-4 py-2 rounded-full mt-2"
        >
          View Map
        </button>
      </div>
    </div>
  );
}

export default Carousel;