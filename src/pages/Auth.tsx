import React from "react";
import { useLocation } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/const";

const Auth = () => {
  const location = useLocation();
  const locatedUser = location.pathname === LOGIN_ROUTE;

  return <div>{locatedUser ? "Login" : "Sign Up"}</div>;
};

export default Auth;
