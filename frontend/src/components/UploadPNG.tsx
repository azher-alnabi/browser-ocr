import React from "react";

const LOCAL_STORAGE_KEY = "uploadedPoster";

interface UploadPNGProps {
  onUpload: (dataUrl: string) => void;
}

const UploadPNG: React.FC<UploadPNGProps> = ({ onUpload }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      onUpload(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <label className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 cursor-pointer transition">
      Upload PNG
      <input
        type="file"
        accept="image/png"
        onChange={handleUpload}
        className="hidden"
      />
    </label>
  );
};

export default UploadPNG;
