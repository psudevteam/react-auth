import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const Error = lazy(() => import("../components/error"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
