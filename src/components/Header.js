import React from "react";

function Header() {
  return (
    <>
      <div className=" sm:px-7 sm:py-3 px-2 py-0 h-16 flex justify-between shadow-xl items-center bg-black">
        <h1 className="text-center sm:text-lg font-bold text-yellow-500  px-2 md:py2 rounded-xl ">
          OTT-Sphere
        </h1>

        <div className="flex space-x-2 items-center">
          <input
            type="text"
            placeholder="Search for movies.."
            className="w-44 py-2 sm:w-60 px-2 sm:px-5 rounded-xl  border-yellow-500 border-2 focus:outline-none"
          />
          <button className="h-[2.7rem] sm:h-full bg-yellow-500 px-2 sm:px-5 sm:py-2 rounded-xl text-lg">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
