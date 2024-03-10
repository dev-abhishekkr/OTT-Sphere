import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import Footer from "./Footer";

function SearchResultPage() {
  const movies = useSelector((store) => store.search);
  console.log(movies.searchResults);
  return (
    <>
      <div className="bg-black">
        <Header />
        <div className="min-h-screen">
          <MoviesList
            title={"Search results: "}
            movies={movies?.searchResults}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SearchResultPage;
