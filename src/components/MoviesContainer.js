import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.latestMovies);

  return (
    <div className=" bg-black ">
      <MoviesList title={"Latest Movies"} movies={movies?.latestMovies} />
      <MoviesList title={"Popular Movies"} movies={movies?.popularMovies} />
    </div>
  );
};

export default MoviesContainer;
