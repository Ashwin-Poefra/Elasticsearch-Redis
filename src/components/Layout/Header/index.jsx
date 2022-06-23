import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "../../../consts";

const HeaderSection = () => {
  return (
    <div className="flex align-center justify-between bg-indigo-700 p-4 w-full fixed top-0 text-white">
      <Link to={PATH.DASHBOARD} className="text-3xl font-bold">
        React + Node
      </Link>
    </div>
  );
};

export default HeaderSection;
