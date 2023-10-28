import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-12 h-12 bg-gray-300 border border-gray-400 text-xl font-semibold"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
