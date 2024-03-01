import React from 'react';
import mainimg from "../assets/main.webp";

const Main = () => {
  return (
    <div className="flex bg-red-600 justify-center items-center sm:h-screen">
      <img
        src={mainimg}
        alt="Main"
        className="max-w-full h-full sm:mt-0 md:mt-0"
      />
    </div>
  );
};

export default Main;
