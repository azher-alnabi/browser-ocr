import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";

const LOCAL_STORAGE_KEY = "uploadedPhoto";

const TextExtractor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setImage(saved);
    }
  }, []);

  const handleExtractText = async () => {
    if (!image) return;
    setLoading(true);
    setText("");

    try {
      const result = await Tesseract.recognize(image, "eng", {
        logger: (m) => console.log(m), // optional progress logger
      });
      setText(result.data.text);
    } catch (err) {
      console.error("OCR Error:", err);
      setText("Error extracting text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-[380px] sm:min-w-[500px] max-w-sm w-full space-y-2">
      {image ? (
        <>
          <button
            onClick={handleExtractText}
            disabled={loading}
            className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md"
          >
            {loading ? "Extracting..." : "Extract Text"}
          </button>

          <div className="aspect-[1/1.414] bg-white border border-gray-900 shadow-lg rounded-lg overflow-hidden flex items-start justify-start p-3">
            {text ? (
              <span className="text-gray-800 whitespace-pre-wrap">{text}</span>
            ) : (
              <span className="text-gray-400 flex items-center justify-center w-full h-full">
                No text extracted yet.
              </span>
            )}
          </div>
        </>
      ) : (
        <>

          <button
            onClick={() => alert("Please upload a photo first!")}
            disabled={loading}
            className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md"
          >
            Please upload a photo first!
          </button>

          <div className="aspect-[1/1.414] bg-white border border-gray-900 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-gray-400">No photo uploaded yet.</span>
          </div>
        </>
      )}
    </div>
  );
};

export default TextExtractor;
