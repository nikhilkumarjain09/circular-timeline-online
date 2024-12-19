import React from "react";
import Modal from "react-modal";

function MapModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-white rounded-lg p-4 max-w-lg mx-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-2xl font-bold text-dark mb-4">Map</h2>
      <p>Replace with an actual map image or iframe here.</p>
      <button
        onClick={onClose}
        className="mt-4 bg-primary text-white px-4 py-2 rounded-full"
      >
        Close
      </button>
    </Modal>
  );
}

export default MapModal;