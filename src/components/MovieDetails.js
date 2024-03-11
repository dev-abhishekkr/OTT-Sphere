import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MoviesList from "./MoviesList";

import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { IMG_CDN_URL } from "../utils/constants";

function MovieDetails({ details }) {
  const movies = useSelector((store) => store.movies);

  const location = useLocation();
  const { extendedDetails } = location.state || {};
  const { poster_path, title, overview, release_date, vote_average } =
    extendedDetails;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white px-10 py-10">
        <div
          className="flex flex-col sm:flex-row gap-5 sm:gap-14 justify-around
         sm:justify-start sm:ml-60 items-center"
        >
          <div className=" ">
            <img
              src={IMG_CDN_URL + poster_path}
              alt="movie-cards"
              className="rounded-lg h-96"
            />
          </div>

          <div className="sm:w-[36rem]">
            <div>
              <h1 className="text-3xl font-bold text-yellow-400">{title}</h1>
              <div className="flex gap-6 my-3 text-center sm:text-start text-gray-400">
                <h2 className="text-lg">{release_date} </h2>
                <h2 className="text-lg">
                  <span>Rating: </span>
                  {vote_average}
                </h2>
              </div>

              <div className="text-center my-5">
                <h1
                  className="sm:w-2/5 bg-yellow-500 text-black px-5 py-2 rounded-full text-lg
                 font-semibold cursor-pointer hover:bg-orange-400"
                >
                  Watch Trailer
                </h1>
              </div>
              <div className="w-full">
                <h1 className="underline text-lg font-bold text-gray-200 py-5">
                  Overview:
                </h1>
                <p className="text-gray-400">{overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <MoviesList
            title={"Recommended Movies: "}
            movies={movies?.topRatedMovies}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MovieDetails;
