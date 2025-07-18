import React from "react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description: string;
  children?: React.ReactNode;
};

const Popup = ({
  isOpen,
  onClose,
  title = "Información adicional",
  description = "description default",
  children,
}: PopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 ">
      <div className="bg-white p-4 rounded-md max-w-xs w-full shadow-lg text-black relative">
        <p className="mb-3 font-semibold text-black">{title}</p>
        <p className="mb-3">{description}</p>
        <div className="mb-3">{children}</div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Cerrar popup"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Popup;
