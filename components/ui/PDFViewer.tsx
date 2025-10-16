"use client";
import {
  ArrowBigLeft,
  ArrowLeft,
  ChevronLeft,
  Minimize2,
  X,
} from "lucide-react";
import React, { useState } from "react";

function PDFViewer({
  pdfPath,
  children,
}: {
  pdfPath: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openPDF = () => setIsOpen(true);
  const closePDF = () => setIsOpen(false);

  return (
    <div>
      <div onClick={openPDF}>{children}</div>
      {isOpen && (
        <>
          <div className=" fixed  inset-0 bg-black/85 flex-center flex-col">
            <div className="bg-black/90 w-full p-4">
              <ArrowLeft
                onClick={closePDF}
                className="text-white w-9 h-9 cursor-pointer hover:text-red-300 "
              />
            </div>
            <object
              data={pdfPath}
              type="application/pdf"
              width="100%"
              height="100%"
            >
              <p>
                <a href={pdfPath}>to the PDF!</a>
              </p>
            </object>
          </div>
        </>
      )}
    </div>
  );
}

export default PDFViewer;
