import Header from "./Header";
import MoviesContainer from "./MoviesContainer";
import usePopularMovies from "./../customHooks/usePopularMovies";
import useLatestMovies from "../customHooks/useLatestMovies";

function HomePage() {
  usePopularMovies();
  useLatestMovies();
  return (
    <>
      <Header />
      <div>
        <div>
          <MoviesContainer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
