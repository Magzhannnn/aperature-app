import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { privateRouter, publicRouter } from "../router";
import { HOME_ROUTE } from "../utils/const";
import Home from "../pages/Home";
import { useEffect, useState } from "react";
import { isLoginHelper } from "../helpers/authHelper";

const AppRouter = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(isLoginHelper());

  useEffect(() => {
    setIsLogin(isLoginHelper());
  }, [location]);

  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      {isLogin
        ? privateRouter.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))
        : publicRouter.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
      <Route path="/*" element={<Navigate to={HOME_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
