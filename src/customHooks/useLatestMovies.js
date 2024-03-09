import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addLatestMovies } from "../utils/moviesSlice";

const useLatestMovies = () => {
  //fecth TMDB API and update now playing movies in Store
  const dispatch = useDispatch();

  const latestMovies = useSelector((store) => store.movies.latestMovies);

  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addLatestMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    !latestMovies && getLatestMovies();
  }, []);
};

export default useLatestMovies;
