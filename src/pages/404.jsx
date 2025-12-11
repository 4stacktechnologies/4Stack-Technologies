import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // go back
    } else {
      navigate("/"); // fallback to home
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0d0d0d] text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-[100px] font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text animate-pulse">
          404
        </h1>

        <p className="text-lg text-gray-300 -mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>

        <button
          onClick={goBack}
          className="mt-6 px-6 py-3 bg-cyan-400 text-black font-medium rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
