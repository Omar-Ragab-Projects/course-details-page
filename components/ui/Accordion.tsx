"use client";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => setOpen(!open);

  useEffect(() => {
    const smallScreen = window.screen.availWidth <= 1024;
    if (!smallScreen) {
      setOpen(true);
    }
  }, []);

  return (
    <div className="my-4 overflow-hidden  border border-gray-200 rounded-md">
      <h5
        onClick={toggleAccordion}
        className="p-4  border-b border-gray-200  lg:text-2xl flex-between hover:bg-gray-100 transition cursor-pointer"
      >
        <span>{title}</span>
        {open ? <Minus size={13} /> : <Plus size={13} />}
      </h5>
      <div
        className={`
          transition-all 
        ${open ? `max-h-[600px] duration-700` : "max-h-0 duration-600"}
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
