import React from "react";
import brianThompsonPicSrc from "../assets/brian-thompson-headshot.jpg";
import kateMadisonPicSrc from "../assets/kate-madison-headshot.jpg";
import ravenJacksonPicSrc from "../assets/raven-jackson-headshot.jpg";

function Testimonials({ handleCTA }) {
  return (
    <div className="">
      <div className="mb-0 text-center md:mb-8">
        <div className="my-4 mb-2 text-2xl font-bold text-center text-orange-500">
          Testimonials
        </div>
        <p className="px-5 font-bold text-justify text-gray-500 opacity-90">
          Our customer's satisfaction is our highest priority. See what others
          are saying about Lets Travel!
        </p>
      </div>
      <div className="flex flex-col items-center px-4 md:flex-row lg:justify-around">
        <div className="flex flex-col items-center w-full p-5 space-y-2 lg:w-64">
          <span className="relative flex flex-col items-center">
            <img
              src={ravenJacksonPicSrc}
              alt="testimonial-1"
              className="object-cover rounded-full h-14 w-14"
            ></img>
            <span className="pt-2 font-bold">Raven Jackson</span>
          </span>
          <span className="text-justify text-gray-500 text-md sm:text-lg">
            Joining Lets Travel was one of the best things that I have ever
            done. My personal travel agent, Trixie, is awesome and seems to know
            what trips I want to go on before I even do! Thank you so much
            Trixie and the Lets Travel team!
          </span>
        </div>
        <div className="flex flex-col items-center w-full p-5 space-y-2 lg:w-64">
          <span className="relative flex flex-col items-center">
            <img
              src={brianThompsonPicSrc}
              alt="testimonial-1"
              className="object-cover rounded-full h-14 w-14"
            ></img>
            <span className="pt-2 font-bold">Brian Thompson</span>
          </span>
          <span className="text-justify text-gray-500 text-md sm:text-lg">
            Joining Lets Travel really helped me get out of my confort zone and
            go out and see the world. Scheduling a vacation has never been
            easier and at the prices Lets Travel offers, booking with them is a
            no-brainer!
          </span>
        </div>
        <div className="flex flex-col items-center w-full p-5 space-y-2 lg:w-64">
          <span className="relative flex flex-col items-center">
            <img
              src={kateMadisonPicSrc}
              alt="testimonial-1"
              className="object-cover rounded-full h-14 w-14"
            ></img>
            <span className="pt-2 font-bold">Kate Madison</span>
          </span>
          <span className="text-justify text-gray-500 text-md sm:text-lg">
            Traveling has always been a complicated mess until I joined Lets
            Travel. Anytime I'm thinking about going out of town, I make one
            call to my dedicated travel agent and everything is taken care of
            immediately!
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

export default Testimonials;
