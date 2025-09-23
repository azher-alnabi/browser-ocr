import React from "react";

interface PhotoCardProps {
  src: string | null;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src }) => {
  return (
    <div className="min-w-[380px] sm:min-w-[500px] max-w-sm w-full">
      <div className="aspect-[1/1.414] bg-white border border-gray-900 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
        {src ? (
          <img
            src={src}
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
  );
};

export default PhotoCard;