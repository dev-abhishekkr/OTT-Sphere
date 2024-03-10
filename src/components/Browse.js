import Header from "./Header";
import MoviesContainer from "./MoviesContainer";
import usePopularMovies from "./../customHooks/usePopularMovies";
import useLatestMovies from "../customHooks/useLatestMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import Footer from "./Footer";

function HomePage() {
  usePopularMovies();
  useLatestMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <>
      <div className="bg-black">
        <div className="">
          <Header />
        </div>
        <div className="min-h-screen">
          <MoviesContainer />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
