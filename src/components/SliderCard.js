import React, { useState } from "react";

import { IMG_CDN_URL } from "../utils/constants";
import Trailer from "./Trailer";

function SliderCard({
  description,
  movieTitle,
  posterPath,
  releaseDate,
  voteAvg,
  id,
}) {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailerClick = () => {
    setShowTrailer(true);
  };
  const handleHideTrailerClick = () => {
    setShowTrailer(false);
  };
  return (
    <div>
      <div
        className="flex flex-col sm:flex-row gap-5 sm:gap-14 justify-around
         sm:justify-start sm:ml-60 items-center"
      >
        <div className=" ">
          <img
            src={IMG_CDN_URL + posterPath}
            alt="movie-cards"
            className="rounded-lg h-96"
          />
        </div>

        <div className="sm:w-[36rem]">
          <div className="ml-10">
            <h1 className="text-3xl font-bold text-yellow-400">{movieTitle}</h1>
            <div className="flex gap-6 my-3 text-center sm:text-start text-gray-400 ">
              <h2 className="text-lg">{releaseDate} </h2>
              <h2 className="text-lg">
                <span>Rating: </span>
                {voteAvg}
              </h2>
            </div>

            <div className="text-center my-5">
              <h1
                className="sm:w-2/5 w-80 bg-yellow-500 text-black px-5 py-2 rounded-full text-lg
                 font-semibold cursor-pointer hover:bg-orange-400"
                onClick={handleTrailerClick}
              >
                Watch Trailer
              </h1>
            </div>
            <div className="w-full">
              <h1 className="underline text-lg font-bold text-gray-200 py-5">
                Overview:
              </h1>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-3 ">
        {showTrailer && (
          <>
            <div className="text-end mb-5">
              <button
                className="bg-yellow-500 text-black px-5 py-2 rounded-full text-lg
                 font-semibold cursor-pointer hover:bg-red-400"
                onClick={handleHideTrailerClick}
              >
                Hide Trailer
              </button>
            </div>
            <Trailer movieId={id} />
          </>
        )}
      </div>

      {/* <div className=" ml-5 sm:ml-36 sm:mx-2 flex sm:flex-row flex-col justify-start gap-10  ">
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
      </div> */}
    </div>
  );
}

export default SliderCard;
