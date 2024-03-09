import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  // console.log(movies);
  return (
    <div className="sm:mx-12">
      <h1 className="text-lg md:text-xl py-4 text-yellow-500 font-bold bg-opacity-80">
        {title}
      </h1>
      <div className="flex">
        <div className="flex flex-wrap">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieTitle={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
