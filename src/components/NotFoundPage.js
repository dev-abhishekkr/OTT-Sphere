import React from "react";
import { useNavigate } from "react-router";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col m-10 gap-5 ">
      <h1 className="font-bold">Oops! Page Not Found!</h1>
      <button
        className="w-36 font-bold bg-yellow-500 px-1 py-2 rounded-lg"
        onClick={handleClick}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFoundPage;
