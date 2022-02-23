import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { IoCheckmarkSharp } from "react-icons/io5";

function Body({ handleCTA }) {
  return (
    <div className="py-4 bg-gray-200">
      <div className="mb-0 text-center md:mb-8">
        <div className="mb-2 text-2xl font-bold text-center text-orange-500">
          Our 3-step Process
        </div>
        <p className="px-5 font-bold text-justify text-gray-500 opacity-90">
          Our special 3-step process allows you to book exciting trips to
          destinations that excite you, without hassle and in less than 10
          minutes. After getting to know you a little better, we will assign you
          a dedicated travel advisor will customize travel deals with you in
          mind to bring you the most personalized deals in the marketplace!
        </p>
      </div>
      <div className="flex flex-col items-center px-4 md:flex-row lg:justify-around">
        <div className="flex flex-col items-center w-full p-5 space-y-2 lg:w-64">
          <AiOutlinePhone size="60" className="text-orange-500" />
          <span className="text-lg sm:text-2xl">Call your agent</span>
          <span className="text-justify text-gray-500 text-md sm:text-lg">
            Easily schedule a call with one of our fully vetted and experienced
            travel agents.
          </span>
        </div>
        <div className="flex flex-col items-center w-full p-5 space-y-2 lg:w-64">
          <BiSearchAlt size="60" className="text-orange-500" />
          <span className="text-lg sm:text-2xl">Review your trips</span>
          <span className="text-justify text-gray-500 text-md sm:text-lg">
            Review a personalized list of on-sale trip packages in your desired
            area.
          </span>
        </div>
        <div className="flex flex-col items-center w-full p-5 space-y-2 lg:w-64">
          <IoCheckmarkSharp size="60" className="text-orange-500" />
          <span className="text-lg sm:text-2xl">Book your trip</span>
          <span className="text-justify text-gray-500 text-md sm:text-lg">
            Simply call your travel agent to confirm your trip in as little as
            10 minutes.
          </span>
        </div>
      </div>
      <div className="text-center">
        <button
          className="w-40 px-3 py-1 mx-auto mt-4 mb-4 bg-orange-400 border-2 border-orange-400 rounded-sm cursor-pointer hover:scale-105"
          onClick={handleCTA}
        >
          Schedule A Call
        </button>
      </div>
    </div>
  );
}

export default Body;
