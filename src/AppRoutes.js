import React from "react";
import { Routes, Route } from "react-router-dom";

import { NotFoundPage, DashboardPage } from "./pages";

import { PATH } from "./consts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />

        <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
