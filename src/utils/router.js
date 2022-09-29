import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/register";
import Login from '../pages/login/login'
import MemberManagement from '../pages/member_management/member_management'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MemberManagement />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Router