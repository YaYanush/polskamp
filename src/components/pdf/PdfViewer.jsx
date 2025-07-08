import React from "react";
import { FaFilePdf } from "react-icons/fa";
import "./PdfViewer.css";

const pdfFiles = [
  {
    title: "Mortadela and Pasta",
    file: "/files/pdf1.pdf",
  },
  {
    title: "Flyer",
    file: "/files/pdf2.pdf",
  },
];

const PdfViewer = () => {
  return (
    <div className="pdf-viewer-container">
      <h2 className="pdf-header">📄 Broszury</h2>
      <div className="pdf-list">
        {pdfFiles.map((pdf, index) => (
          <div key={index} className="pdf-card">
            <div className="pdf-info">
              <FaFilePdf className="pdf-icon" />
              <span className="pdf-title">{pdf.title}</span>
            </div>
            <a
              href={pdf.file}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-button"
            >
              Otwóż
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfViewer;
