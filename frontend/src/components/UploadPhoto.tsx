import React from "react";

const LOCAL_STORAGE_KEY = "uploadedPhoto";

interface UploadPhotoProps {
  onUpload: (dataUrl: string) => void;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({ onUpload }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      onUpload(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <label className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 cursor-pointer transition">
      Upload Photo
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleUpload}
        className="hidden"
      />
    </label>
  );
};

export default UploadPhoto;
