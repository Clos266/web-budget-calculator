import React from "react";

type PopupProps = {
  onClose: () => void;
};

const Popup = ({ onClose }: PopupProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg text-center max-w-sm">
        <p className="mb-4">Contenido del popup</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"
          alt="React Logo"
          className="w-24 mx-auto mb-4"
        />
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Popup;
