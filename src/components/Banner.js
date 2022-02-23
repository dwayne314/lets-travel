import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Banner({ banners, clearBanner }) {
  const allBanners = banners.map((banner) => (
    <div
      key={`banner-${banner.id}`}
      className={`block z-50 flex flex-col justify-center h-16 w-full bg-green-500 border-t-4 border-green-700 relative`}
    >
      <div className="p-10">{banner.message}</div>
      <AiOutlineClose
        className="absolute cursor-pointer top-2 right-2"
        onClick={() => clearBanner(banner.id)}
      />
    </div>
  ));

  return banners.length ? (
    <div className="absolute flex flex-col w-full">{allBanners}</div>
  ) : (
    ""
  );
}

export default Banner;
