import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/DashboardPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFoudPage";
import Register from "./pages/RegisterPage";

function RoutesPages({ userRegister }) {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/register"
        element={<Register userRegister={userRegister} />}
      />
      <Route path="/home" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesPages;
