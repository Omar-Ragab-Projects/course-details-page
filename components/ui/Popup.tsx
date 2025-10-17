import { X } from "lucide-react";
import React from "react";

function Popup({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (isOpen)
    return (
      <div className="fixed inset-0 bg-black/80 z-40">
        <div className="animate-fade-in flex-center flex-col absolute top-center left-center bg-white p-8 rounded-lg w-[90%] max-w-[400px] ">
          {children}
          <X onClick={onClose} className="inset-4 absolute text-black/25" />
        </div>
      </div>
    );
}

export default Popup;
