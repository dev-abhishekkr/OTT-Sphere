import React from "react";
import { useNavigate } from "react-router";

function NoMoviesFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center mt-10 gap-5 ">
      <h1 className="font-bold text-xl">No movies Found! Please go back..</h1>
      <button className="bg-yellow-500 rounded px-5 py-2" onClick={handleClick}>
        Go to Home
      </button>
    </div>
  );
}

export default NoMoviesFound;
