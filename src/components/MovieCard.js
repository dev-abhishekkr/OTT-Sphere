import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router";
import MovieDetails from "./MovieDetails";
// import { useDispatch } from "react-redux";
// import { addMovieDetails } from "../utils/moviesSlice";

function MovieCard({ posterPath, movieTitle, extendedDetails }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    <MovieDetails details={extendedDetails} title={movieTitle} />;
    navigate(`/movie-details/${movieTitle}`, { state: { extendedDetails } });
  };

  if (!posterPath) return null;

  return (
    <div className="ml-6 sm:mx-2  mb-8">
      <div
        className="w-24 sm:w-32 hover:-translate-y-6 hover:translate-x-3 transition duration-150 cursor-pointer "
        onClick={handleCardClick}
      >
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
