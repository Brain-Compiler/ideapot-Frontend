import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/register";
import Login from './pages/login/login'
import MemberManagement from './pages/member_management/member_management'
import SearchId from "./pages/search_id/search_id"
import ResetPw from "./pages/reset_pw/reset_pw"
import Error404 from "./pages/error/404"

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MemberManagement />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/searchId' element={<SearchId />} />
      <Route path='/resetPw' element={<ResetPw />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default Router