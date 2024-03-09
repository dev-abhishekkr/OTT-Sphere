import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import HomeSlider from "./HomeSlider";

const MoviesContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.latestMovies);

  return (
    <div className=" bg-black ">
      <div>
        <HomeSlider movies={movies?.latestMovies} />
      </div>
      <MoviesList title={"Upcoming "} movies={movies?.upcomingMovies} />
      <MoviesList title={"Latest "} movies={movies?.latestMovies} />
      <MoviesList title={"Top-Rated "} movies={movies?.topRatedMovies} />
      <MoviesList title={"Popular "} movies={movies?.popularMovies} />
    </div>
  );
};

export default MoviesContainer;
