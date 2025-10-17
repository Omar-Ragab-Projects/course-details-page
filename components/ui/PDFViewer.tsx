"use client";
import React from "react";
import Modal from "./Modal";

function PDFViewer({
  pdfPath,
  children,
}: {
  pdfPath: string;
  children: React.ReactNode;
}) {
  return (
    <Modal trigger={children}>
      <object data={pdfPath} type="application/pdf" width="100%" height="100%">
        <p>
          <a href={pdfPath}>to the PDF!</a>
        </p>
      </object>
    </Modal>
  );
}

export default PDFViewer;
