import React, { useState, useEffect } from "react";

const Carousel = ({
  images,
  interval = 5000,
}: {
  images: string[];
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative" style={{ height: "750px" }}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: `${index === currentIndex ? "1000ms" : "0ms"}`,
          }}
        />
      ))}
    </div>
  );
};

export default Carousel;
