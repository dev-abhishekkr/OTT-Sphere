import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPoularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json.results);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log("Error fetching popular movies data:", error);
    }
  };
  useEffect(() => {
    !popularMovies && getPoularMovies();
  }, []);
};

export default usePopularMovies;
