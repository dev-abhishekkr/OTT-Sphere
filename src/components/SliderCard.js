import React from "react";

import { IMG_CDN_URL } from "../utils/constants";

function SliderCard({ description, movieTitle, posterPath }) {
  return (
    <div>
      <div className=" ml-5 sm:ml-36 sm:mx-2 flex sm:flex-row flex-col justify-start gap-10  ">
        <div
          className=" w-64 sm:w-60 hover:-translate-y-6 
        hover:translate-x-3 transition duration-150 cursor-pointer"
        >
          <img
            src={IMG_CDN_URL + posterPath}
            alt="movie-cards"
            className="rounded-lg "
          />
        </div>
        <div className="mx-2 my-2 w-60">
          <h2 className="text-lg md:text-xl py-4 text-white font-bold bg-opacity-80">
            {movieTitle}
          </h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
