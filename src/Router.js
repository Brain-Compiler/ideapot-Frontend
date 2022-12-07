import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import MemberManagement from "./pages/MemberManagement/MemberManagement";
import ProductList from "./pages/ProductList/ProductList";
import SearchId from "./pages/SearchId/SearchId";
import ResetPw from "./pages/ResetPw/ResetPw";
import Error404 from "./pages/Error/404";
import Post from "./pages/Post/post";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/SearchId" element={<SearchId />} />
      <Route path="/ResetPw" element={<ResetPw />} />
      <Route path="/Post" element={<Post />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;
