"use client";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

function Modal({ trigger, children, className = "" }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div onClick={openModal}>{trigger}</div>

      {isOpen && (
        <div
          className={`modal-open animate-fade-in fixed block inset-0 bg-black/85  overflow-y-auto  z-30 ${className}`}
        >
          <div className="bg-[#41b69d] w-full p-4 sticky top-0 z-20">
            <ArrowLeft
              onClick={closeModal}
              className="text-white w-9 h-9 cursor-pointer hover:text-red-100 "
            />
          </div>
          {children}
        </div>
      )}
    </div>
  );
}

export default Modal;
