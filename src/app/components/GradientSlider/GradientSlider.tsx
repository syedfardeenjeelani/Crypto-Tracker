import React, { useState, useRef, useEffect } from "react";

const GradientSlider = ({
  initialValue = 48637.83,
  min = 0,
  max = 100000,
  onChange,
}: any) => {
  const [value, setValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const sliderRef : any = useRef(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const handleMove = (clientX : any) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = clientX - rect.left;
      const percentage = Math.max(
        0,
        Math.min(100, (position / rect.width) * 100)
      );
      const newValue = min + ((max - min) * percentage) / 100;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleMouseDown = (e : any) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: any) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handleTouchMove = (e: any) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Main slider track */}
      <div
        ref={sliderRef}
        className="relative cursor-pointer mb-8"
        style={{ width: "582.8px", height: "4.63px" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Gradient background */}
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%)",
            borderRadius: "10px",
          }}
        />

        <div
          className={`absolute w-4 h-4 bg-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/4 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ left: `${percentage}%` }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip */}
          {(showTooltip || isDragging) && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[28%]  text-[#44475B] px-2 py-1 rounded text-sm whitespace-nowrap">
              ${value.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradientSlider;
