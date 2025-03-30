import React from "react";
import "./Style.css";

function Technology() {
  return (
    <div className="bg-zinc-950 flex-col justify-center items-center relative h-screen w-screen">
      {/* Section Title with Slide Animation */}
      <div>
        <h1 className="slide-text flex justify-center items-center text-white text-4xl font-bold">
          Technology
        </h1>
      </div>

      {/* Image Section with Zoom Effect */}
      <div className="flex justify-center items-center space-x-16 p-20">
        <img className="image-zoom h-[100px] w-[100px]" src="Images/Javascript.jpg" alt="JavaScript" />
        <img className="image-zoom h-[100px] w-[100px]" src="Images/Html.png" alt="HTML" />
        <img className="image-zoom h-[100px] w-[100px]" src="Images/Css.jpg" alt="CSS" />
        <img className="image-zoom h-[100px] w-[100px]" src="Images/Gitimage.png" alt="Git" />
        <img className="image-zoom h-[100px] w-[100px]" src="Images/RecactImage.jpg" alt="React" />
      </div>
    </div>
  );
}

export default Technology;
