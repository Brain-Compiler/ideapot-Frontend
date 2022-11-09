import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from './pages/Login/Login';
import MainPage from "./pages/MainPage/MainPage";
import MemberManagement from './pages/MemberManagement/MemberManagement';
import SearchId from "./pages/SearchId/SearchId";
import ResetPw from "./pages/ResetPw/ResetPw";
import Error404 from "./pages/Error/404";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/searchId' element={<SearchId />} />
      <Route path='/resetPw' element={<ResetPw />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default Router