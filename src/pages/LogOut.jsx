import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const removeStorage = () => {
    localStorage.removeItem("prodEmail");
    localStorage.removeItem("prodPassword");
    navigate("/login");
    window.location.reload();
  };
  return <a href="void:();" onClick={removeStorage}>LogOut</a>;
};

export default LogOut;
