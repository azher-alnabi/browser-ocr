import React from "react";

interface PosterCardProps {
  src: string | null;
}

const PosterCard: React.FC<PosterCardProps> = ({ src }) => {
  return (
    <div className="min-w-[380px] sm:min-w-[500px] max-w-sm w-full">
      <div className="aspect-[1/1.414] bg-white border-grey-900 border-1 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
        {src ? (
          <img
            src={src}
            alt="Poster"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="flex items-center justify-center text-gray-400 text-sm">
            Start by uploading a PNG image to grab text from!
          </div>
        )}
      </div>
    </div>
  );
};

export default PosterCard;
