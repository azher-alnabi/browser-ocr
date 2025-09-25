import React, { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "uploadedPhoto";

const PhotoPanel: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) setPhotoSrc(saved);
  }, []);

  const handleUploadClick = () => {
    const input = document.getElementById("upload-photo") as HTMLInputElement;
    input?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      alert("Please upload a PNG or JPG file!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      localStorage.setItem(LOCAL_STORAGE_KEY, result);
      setPhotoSrc(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Buttons */}
      <div className="flex space-x-2">
        <button
          type="button"
          className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
          onClick={handleUploadClick}
        >
          Upload Photo
        </button>

        {photoSrc && (
          <button
            type="button"
            className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            onClick={() => {
              localStorage.removeItem(LOCAL_STORAGE_KEY);
              setPhotoSrc(null);
            }}
          >
            Clear Photo
          </button>
        )}
      </div>

      <input
        id="upload-photo"
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="min-w-[380px] sm:min-w-[500px] max-w-sm w-full">
        <div className="aspect-[1/1.414] bg-white border border-gray-900 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
          {photoSrc ? (
            <img
              src={photoSrc}
              alt="Uploaded"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="flex items-center justify-center text-gray-400 text-sm">
              Start by uploading an image!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoPanel;
