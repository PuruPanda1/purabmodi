import React, { useRef } from "react";

const InteractiveDiv = ({imageLink}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // Normalize to [-1, 1]
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // Normalize to [-1, 1]

    // Increase the bending effect
    const rotationX = y * 20; // Previously 10, now 20
    const rotationY = x * 20; // Previously 10, now 20

    divRef.current.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  const handleMouseLeave = () => {
    divRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="flex flex-col justify-center items-center lg:p-10 md:p-5 px-4 sm:px-8">
      <div
        ref={divRef}
        className="rounded-full overflow-hidden shadow-lg ring-4 ring-blue-500 dark:ring-gray-700 w-full max-w-[300px] md:max-w-[500px] transition-transform duration-200 ease-out"
        style={{
          aspectRatio: "1 / 1", // Maintain a square aspect ratio
          perspective: "1000px", // Add perspective for a 3D effect
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/images/hero_image.jpg" // Replace with your image path
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default InteractiveDiv;
