// src/components/TicTacToe.js
import React, { useState } from "react";
import Board from "./Board.js";

const calculateWinner = (squares) => {
  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/*Logic for clicking the board and calculate winner  */
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const squaresCopy = [...squares];

    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }

    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <Board squares={squares} onClick={handleClick} status={status} />
  );
};

export default TicTacToe;
