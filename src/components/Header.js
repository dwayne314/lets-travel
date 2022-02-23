import React from "react";
import Slider from "./Slider";
import heroImgSrc from "../assets/hero.png";
import logoSrc from "../assets/logo.png";

function Header({ handleCTA }) {
  return (
    <div className="flex flex-col min-h-screen bg-opacity-25 bg-center bg-cover">
      <img
        className="absolute z-0 object-cover w-screen h-screen"
        src={heroImgSrc}
        alt="city of tokyo"
      ></img>
      <div className="box-border z-10 flex items-center justify-between h-16 px-5 py-2 mt-3 text-white justify-self-start">
        <img
          src={logoSrc}
          alt="let's travel logo"
          className="h-6 cursor-pointer"
        />
        <span className="space-x-3">
          <span className="px-3 py-2 border-2 border-orange-400 rounded-sm cursor-pointer hover:bg-orange-400">
            Home
          </span>
          <span className="px-3 py-2 bg-orange-400 border-2 border-orange-400 rounded-sm cursor-pointer">
            Contact Us
          </span>
        </span>
      </div>
      <div className="z-10 mx-auto mt-20 sm:mt-10 text-center text-orange-500 text-[36px] sm:text-[42px] md:text-[50px] font-bold">
        Travel When You Want
      </div>
      <div className="z-10 flex flex-col items-center px-5 py-3 mx-auto mt-10 bg-white rounded-sm sm:px-10">
        <div className="text-xl font-medium text-orange-500 sm:text-2xl">
          Talk to an agent today!
        </div>
        <form
          className="box-border flex flex-col w-full text-md sm:text-lg"
          onSubmit={handleCTA}
        >
          <input
            type="text"
            placeholder="First Name"
            className="h-10 px-3 my-3 rounded-sm outline-0 bg-orange-50 focus:bg-orange-100"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="h-10 px-3 my-3 rounded-sm outline-0 bg-orange-50 focus:bg-orange-100"
          ></input>
          <input
            type="text"
            placeholder="Phone Number"
            className="h-10 px-3 my-3 rounded-sm outline-0 bg-orange-50 focus:bg-orange-100"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="h-10 px-3 my-3 rounded-sm outline-0 bg-orange-50 focus:bg-orange-100"
          ></input>
          <button className="w-40 px-3 py-1 mx-auto mt-4 mb-2 bg-orange-400 border-2 border-orange-400 rounded-sm cursor-pointer hover:scale-105">
            Schedule A Call
          </button>
        </form>
      </div>
      <div className="m-auto mx-auto">
        <Slider />
      </div>
    </div>
  );
}

export default Header;
