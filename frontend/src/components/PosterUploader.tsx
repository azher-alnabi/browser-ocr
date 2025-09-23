import React, { useState, useEffect } from "react";
import PosterCard from "./PosterCard";

const LOCAL_STORAGE_KEY = "uploadedPoster";

const PosterUploader: React.FC = () => {
  const [posterSrc, setPosterSrc] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) setPosterSrc(saved);
  }, []);

  const handleUploadClick = () => {
    const input = document.getElementById("upload-png") as HTMLInputElement;
    input?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/png") {
      alert("Please upload a PNG file!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      localStorage.setItem(LOCAL_STORAGE_KEY, result);
      setPosterSrc(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex space-x-2">
        
        <button
          type="button"
          className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          onClick={handleUploadClick}
        >
          Upload PNG
        </button>

        {posterSrc && (
          <button
            type="button"
            className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            onClick={() => {
              localStorage.removeItem(LOCAL_STORAGE_KEY);
              setPosterSrc(null);
            }}
          >
            Clear Poster
          </button>
        )}

      </div>

      {/* Hidden file input */}
      <input
        id="upload-png"
        type="file"
        accept="image/png"
        className="hidden"
        onChange={handleFileChange}
      />

      <PosterCard src={posterSrc} />
    </div>
  );
};

export default PosterUploader;
