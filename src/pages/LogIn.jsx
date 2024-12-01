import React, { useState } from "react";
import axios from "axios";
import s from "./Pages.module.scss";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.get(
      `https://api.escuelajs.co/api/v1/users?email=${email}&password=${password}`
    );
    setEmail(resp.data[0].email);
    setPassword(resp.data[0].password);
    if (
      resp.data[0].email === email &&
      resp.data[0].email !== null &&
      resp.data[0].email !== undefined &&
      resp.data[0].password === password &&
      resp.data[0].password !== null &&
      resp.data[0].password !== undefined
    ) {
      localStorage.setItem("prodEmail", resp?.data[0]?.email);
      localStorage.setItem("prodPassword", resp?.data[0]?.password);
      navigate("/");
      window.location.reload();
    } else {
      alert("Incorrect Email or Password");
      setEmail("");
      setPassword("");
      return;
    }
  };
  return (
    <div className={s.loginPage}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div className={s.container}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={s.formRow}>
            <label htmlFor="email">Email:(john@mail.com)</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={s.formRow}>
            <label htmlFor="password">Password: (changeme)</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account?<br></br>
            <br></br>
            <Link to="/register">Sign up</Link>
          </p>
        </form>

        <div></div>
      </div>
    </div>
  );
};

export default LogIn;
