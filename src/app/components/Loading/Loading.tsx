import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[2px] z-50">
      <div className="relative flex flex-col items-center gap-3">
        <div className="w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin" />
        <div className="text-lg font-medium text-gray-700">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
