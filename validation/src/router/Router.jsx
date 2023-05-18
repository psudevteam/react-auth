import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("../pages/Login/"));
const Register = lazy(() => import("../pages/Register"));
const User = lazy(() => import("../pages/User"));
const Loading = lazy(() => import("../components/Loading"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
