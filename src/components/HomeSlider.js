import React, { useState } from "react";

import SliderCard from "./SliderCard";

function HomeSlider({ movies, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!movies) return;

  const handleNext = () => {
    if (currentIndex < movies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div>
      <div className="mt-10">
        <SliderCard
          description={movies[currentIndex].overview}
          movieTitle={movies[currentIndex].title}
          posterPath={movies[currentIndex].poster_path}
          releaseDate={movies[currentIndex].release_date}
          voteAvg={movies[currentIndex].vote_average}
          id={movies[currentIndex].id}
        />
      </div>
      <div className="text-end mx-10 px-2 py-2 space-x-4">
        <button
          className="bg-yellow-500 px-5 py-2 rounded-full text-lg"
          onClick={handlePrevious}
        >
          Prev
        </button>
        <button
          className="bg-yellow-500 px-5 py-2 rounded-full text-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomeSlider;

{
  /* <div className="flex overflow-x-auto">
          {movies.map((movie) => (
            <SliderCard
              key={movie.id}
              overview={movie.overview}
              movieTitle={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </div> */
}
