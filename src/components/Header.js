import React, { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../utils/searchSlice";

function Header() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  // const history = useHistory();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + query,
        API_OPTIONS
      );
      const data = await response.json();
      console.log(data.results);
      navigate("/search-results");
      if (data.results) {
        dispatch(addSearchResults(data.results));
        // history.push("/search-results");
      } else {
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
    <Navigate to={"/search-results"} />;
  };
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className=" sm:px-7 sm:py-3 px-2 py-0 h-16 flex justify-between shadow-2xl items-center bg-black">
        <h1
          className="text-center sm:text-lg font-bold text-yellow-500  px-1 sm:px-2 
         border border-yellow-700 rounded-lg py-2 cursor-pointer hover:bg-yellow-500 hover:text-black  "
          onClick={handleClick}
        >
          OTT-Sphere
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex space-x-2 items-center">
            <input
              type="text"
              value={query}
              placeholder="Search for movies.."
              className="w-44 py-2 sm:w-60 px-2 sm:px-5 rounded-xl  border-yellow-500 border-2 focus:outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="h-[2.7rem] sm:h-full bg-yellow-500 px-2 sm:px-5 sm:py-2 rounded-xl text-lg hover:bg-yellow-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
      <hr className="text-yellow-500" />
    </>
  );
}

export default Header;
