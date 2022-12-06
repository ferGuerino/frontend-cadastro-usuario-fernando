import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFoudPage";
import Register from "./pages/RegisterPage";

function RoutesPages({ setUser, userLogin, userRegister, userLogout }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login setUser={setUser} userLogin={userLogin} />}
      />
      <Route
        path="/register"
        element={<Register userRegister={userRegister} setUser={setUser} />}
      />
      <Route path="/home" element={<Dashboard userLogout={userLogout} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesPages;
