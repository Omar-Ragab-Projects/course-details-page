"use client";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

function Modal({ trigger, children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div onClick={openModal}>{trigger}</div>

      {isOpen && (
        <div className="modal-open animate-fade-in fixed  inset-0 bg-black/85 flex-center flex-col z-30">
          <div className="bg-[#41b69d] w-full p-4">
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
