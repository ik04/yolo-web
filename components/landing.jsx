import React from "react";
import { Navbar } from "@/components/navbar";

export const Landing = () => {
  // todo: make responsive
  // todo: move navbars to layout.js (just cause)

  return (
    <div className="h-screen bg-main flex flex-col">
      <Navbar />
      <div className="h-[75%] flex justify-center items-center">
        <div className="hero flex flex-col items-center">
          <h1 className="text-[80px] text-highlight font-display text-center">
            Runway
          </h1>
          <p className="text-white font-base text-[30px] text-center w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            mauris at est
          </p>
        </div>
      </div>
    </div>
  );
};
