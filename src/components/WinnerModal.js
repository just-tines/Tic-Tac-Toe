import React from "react";
import Modal from "react-modal";

const WinnerModal = ({ isOpen, winner, onPlayAgain }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {}}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          backgroundColor: "white",
          textAlign: "center",
          borderRadius: "8px",
        },
      }}
    >
      <h2 className="text-2xl font-bold text-blue-500 mb-2">Winner: {winner}</h2>
      <p className="text-lg text-gray-800 mb-4">Congratulations! Would you like to play again?</p>
      <button
        onClick={onPlayAgain}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Play Again
      </button>
    </Modal>
  );
};

export default WinnerModal;
