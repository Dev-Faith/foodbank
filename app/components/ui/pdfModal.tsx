import { useState, useEffect } from 'react';

interface PdfModalProps {
  pdfUrl: string;
  onAccept: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ pdfUrl, onAccept }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user has already accepted the PDF
    const pdfRead = localStorage.getItem('pdfRead');
    if (!pdfRead) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pdfRead', 'true');
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-screen md:w-screen lg:w-screen h-screen">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700">Please Read This Document</h2>
          <iframe
            src={pdfUrl}
            className="w-full h-96 mt-4 border rounded"
            title="PDF Document"
          ></iframe>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-onPrimary bg-primary rounded hover:bg-primaryContainer"
            >
              I Have Read the Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
