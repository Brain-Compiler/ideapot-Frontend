import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
// import MemberManagement from "./pages/MemberManagement/MemberManagement";
import ProductList from "./pages/ProductList/ProductList";
import SearchId from "./pages/SearchId/SearchId";
import ResetPw from "./pages/ResetPw/ResetPw";
import Error404 from "./pages/Error/404";
import Post from "./pages/Post/post";
import PostView from "./pages/PostView/PostView";
import ImageItem from "./components/PostView/ImageItem/ImageItem";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SearchId" element={<SearchId />} />
      <Route path="/ResetPw" element={<ResetPw />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/ProductList/:id" element={<ProductList />} />
      <Route path="/ProductList/Post/:id" element={<PostView />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/test" element={<ImageItem />} />
    </Routes>
  );
};

export default Router;
