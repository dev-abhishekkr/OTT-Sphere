import React from "react";
import Header from "./Header";
import MoviesContainer from "./MoviesContainer";

function HomePage() {
  return (
    <>
      <Header />
      <div>
        <div>
          <h1>Latest Movies</h1>
          <MoviesContainer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
