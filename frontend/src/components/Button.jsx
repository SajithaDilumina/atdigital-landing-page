import React from "react";

const Button = ({ name }) => {
  return (
    <button className="mt-6 cursor-pointer whitespace-nowrap w-40 sm:w-auto px-4 sm:px-4 py-2 sm:py-1 bg-orange text-white font-semibold rounded text-sm sm:text-base">
      {name}
    </button>
  );
};

export default Button;
