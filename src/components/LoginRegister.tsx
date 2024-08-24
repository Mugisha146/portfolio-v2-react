import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import ResetPassword from "./ResetPassword";

const LoginRegister: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default LoginRegister;
