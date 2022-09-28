import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/register.js";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
    </Routes>
  )
}

export default Router