import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import Footer from "./Footer";

function SearchResultPage() {
  const movies = useSelector((store) => store.search);
  console.log(movies.searchResults);
  if (movies.searchResults.length === 0) {
    return (
      <>
        <div className="bg-black min-h-screen text-white">
          <Header />
          <h1 className="font-bold m-10 text-center">
            No Movies Found! Seach for other Movies...
          </h1>
        </div>
      </>
    );
  } else if (movies.searchResults.length !== 0) {
    return (
      <>
        <div className="bg-black">
          <Header />
          <div className="min-h-screen">
            if(movies)
            <MoviesList
              title={"Search results: "}
              movies={movies.searchResults}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default SearchResultPage;
