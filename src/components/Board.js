import React from "react";
import Square from "./Squares";

const Board = ({ squares, onClick, status }) => {
  return (
    <div className="bg-slate-600 p-4 rounded-lg shadow-lg">
      <div className="text-center text-2xl font-semibold mb-4">{status}</div>
      <div className="w-60  mx-auto">
        <div className="grid grid-cols-3 ">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}>{renderSquare(i)}</div>
          ))}
        </div>
      </div>
    </div>
  );

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }
};

export default Board;
