import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchResultPage from "./SearchResultPage";
import Browse from "./Browse";
import NotFoundPage from "./NotFoundPage";

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
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <div>HomePage</div>
    </RouterProvider>
  );
};

export default HomePage;
