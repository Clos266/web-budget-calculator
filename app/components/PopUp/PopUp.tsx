import React, { useEffect } from "react";

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
  title,
  description,
  children,
}: PopupProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md max-w-sm w-full shadow-lg text-black relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} //
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Cerrar popup"
        >
          ×
        </button>
        <p className="mb-2 font-semibold text-lg">{title}</p>
        <p className="mb-3 text-sm text-gray-700">{description}</p>
        {children && <div className="mt-2">{children}</div>}
      </div>
    </div>
  );
};

export default Popup;
