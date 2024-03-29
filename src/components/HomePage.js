import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResultPage from "./SearchResultPage";
import Browse from "./Browse";
import NotFoundPage from "./NotFoundPage";
import NoMoviesFound from "./NoMoviesFound";
import MovieDetails from "./MovieDetails";

const HomePage = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/search-results",
      element: <SearchResultPage />,
      errorElement: <NoMoviesFound />,
    },
    {
      path: "/movie-details/:id",
      element: <MovieDetails />,
      errorElement: <NoMoviesFound />,
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <div>HomePage</div>
    </RouterProvider>
  );
};

export default HomePage;
