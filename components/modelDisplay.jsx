"use client";
import React from "react";
import { Navbar } from "./navbar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const ModelDisplay = () => {
  return (
    <div className="h-screen bg-main flex flex-col">
      <Navbar />
      <div className="h-[85%] flex justify-center items-center">
        <div className="display-container flex flex-col items-center justify-center">
          <h1 className="text-highlight font-base text-[50px] text-center">
            Yolo V5 Nano-Ultralytics
          </h1>
          <div className="display rounded-[20px] h-[630px] w-[1140px] bg-main2 "></div>
          <div className="buttons mt-5 flex items-center m-3 space-x-10">
            <div className="live w-[461px] h-[80px] cursor-pointer flex justify-center items-center bg-main rounded-full border-highlight border text-highlight hover:bg-highlight hover:text-white duration-200 transition-all">
              <p className="font-base text-[25px]">Live Feed</p>
            </div>
            <Label
              htmlFor="video"
              className="live w-[461px] h-[80px] cursor-pointer flex justify-center items-center bg-main rounded-full border-highlight border text-highlight hover:bg-highlight hover:text-white duration-200 transition-all"
            >
              <p className="font-base text-[25px]">Upload Video</p>
            </Label>
            <Input type="file" id="video" className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};
