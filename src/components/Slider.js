import React, { useEffect, useState } from "react";

function Slider() {
  const [sliderPostion, setSliderPostion] = useState("top");

  useEffect(() => {
    function toggleSlider() {
      setSliderPostion(sliderPostion === "top" ? "bottom" : "top");
    }
    const sliderInterval = window.setInterval(toggleSlider, 2000);

    return () => clearInterval(sliderInterval);
  });

  return (
    <div className="relative w-6 border-2 rounded-full h-11">
      <div className="relative h-full">
        <span
          className={`h-4 w-4 absolute left-1/2 -translate-x-1/2 rounded-full duration-1000 ${
            sliderPostion === "bottom" ? "translate-y-5" : ""
          } bg-white mt-[2px]`}
        ></span>
      </div>
    </div>
  );
}

export default Slider;
