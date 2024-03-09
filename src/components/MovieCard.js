import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({ posterPath, movieTitle }) {
  if (!posterPath) return null;

  return (
    <div className="ml-6 sm:mx-2  mb-8">
      <div className="w-24 sm:w-32 hover:-translate-y-6 hover:translate-x-3 transition duration-150 cursor-pointer ">
        <img
          src={IMG_CDN_URL + posterPath}
          alt="movie-cards"
          className="rounded-lg"
        />
        <h2 className="text-gray-400 overflow-hidden hover:static">
          {movieTitle}
        </h2>
      </div>
    </div>
  );
}

export default MovieCard;
