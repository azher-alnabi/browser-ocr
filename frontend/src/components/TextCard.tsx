import React from "react";

interface TextCardProps {
  text: string | null;
}

const TextCard: React.FC<TextCardProps> = ({ text }) => {
  return (
    <div className="min-w-[380px] sm:min-w-[500px] max-w-sm w-full">
      <div className="aspect-[1/1.414] bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden p-4 flex items-start justify-start">
        {text ? (
          <p className="text-gray-800 whitespace-pre-wrap overflow-y-auto w-full">
            {text}
          </p>
        ) : (
          <div className="flex items-center justify-center text-gray-400 text-sm w-full">
            Extracted text will appear here.
          </div>
        )}
      </div>
    </div>
  );
};

export default TextCard;