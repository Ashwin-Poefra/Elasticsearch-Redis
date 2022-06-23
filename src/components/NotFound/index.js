import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "../../consts";

const NotFoundComponent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-indigo-500 font-bold text-7xl">404</div>
      <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
        This page does not exist
      </div>
      <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
        The page you are looking for could not be found.
      </div>
      <Link
        to={PATH.DASHBOARD}
        className="mt-4 px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
      >
        Go to HomePage!
      </Link>
    </div>
  );
};

export default NotFoundComponent;
