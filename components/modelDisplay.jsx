"use client";
import React, { useState } from "react";
import { Navbar } from "./navbar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";

export const ModelDisplay = () => {
  // todo: shift src to env
  const [isStart, setIsStart] = useState(false);
  const [toggleFeed, setToggleFeed] = useState(false);
  const [isLoading, setIsLoading] = useState(false); //* for file upload shit
  const [src, setSrc] = useState("http://localhost:5000/video_feed");
  const handleStartFeed = async () => {
    setSrc("http://localhost:5000/video_feed");
    setToggleFeed(true);
    setIsStart(true);
  };
  const handleStopFeed = async () => {
    setSrc("");
    setIsStart(false);
    // setToggleFeed(false);
  };

  return (
    <div className="h-screen bg-main flex flex-col">
      <Navbar />
      <div className="h-[85%] flex justify-center items-center">
        <div className="display-container flex flex-col items-center justify-center">
          <h1 className="text-highlight font-base text-[50px] text-center">
            Yolo V5 Nano-Ultralytics
          </h1>
          <div className="display rounded-[20px] h-[630px] w-[1140px] bg-main2 ">
            {toggleFeed && (
              <img src={src} className="w-full h-full rounded-[20px]" />
            )}
          </div>
          <div className="buttons mt-5 flex items-center m-3 space-x-10">
            {!isStart ? (
              <div
                onClick={handleStartFeed}
                className="live w-[461px] h-[80px] cursor-pointer flex justify-center items-center bg-main rounded-full border-highlight border text-highlight hover:bg-highlight hover:text-white duration-200 transition-all"
              >
                <p className="font-base text-[25px]">Live Feed</p>
              </div>
            ) : (
              <div
                onClick={handleStopFeed}
                className="live w-[461px] h-[80px] cursor-pointer flex justify-center items-center bg-main rounded-full border-red-700 border text-red-700 hover:bg-red-700 hover:text-white duration-200 transition-all"
              >
                <p className="font-base text-[25px]">Stop Feed</p>
              </div>
            )}
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
