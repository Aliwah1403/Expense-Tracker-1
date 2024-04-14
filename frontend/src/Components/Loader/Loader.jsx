import React from "react";

const Loader = () => {
  return (
    <>
      <div className="absolute w-full h-screen z-50 flex items-center justify-center">
        <div className="flex flex-row gap-2 ">
          <div className="w-4 h-4 rounded-full bg-indigo-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-700 animate-bounce animate-delay-300"></div>
          <div className="w-4 h-4 rounded-full bg-indigo-700 animate-bounce animate-delay-500"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
