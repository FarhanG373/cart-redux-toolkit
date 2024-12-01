import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Pages.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();
const postDat = async(e) => {
  e.preventDefault();
  const p = await axios.post(`https://api.escuelajs.co/api/v1/users/`, {
    name,
    email,
    password,
    avatar,
  })
  console.log(p.data);
  if(p.status === 201) {
    alert('User registered successfully');
    navigate('/login');
  } else {
    alert('Error registering user');
    setName('');
    setEmail('');
    setPassword('');
    setAvatar(``)
  }
}

  return (
    <div className={s.loginPage}>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <div className={s.container}>
        <form onSubmit={postDat}>
          <div className={s.formRow}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} placeholder="Name" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className={s.formRow}>
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} placeholder="Email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className={s.formRow}>
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} placeholder="Password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className={s.formRow}>
            <label htmlFor="Avatar">Avatar:</label>
            <input type="text" id="Avatar" value={avatar} placeholder="Avatar URL" name="avatar" onChange={(e)=>setAvatar(e.target.value)}/>
          </div>
          <button type="submit">register</button>
          <p>
            Already have an account?<br></br>
            <br></br>
            <Link to="/login">Sign in</Link>
          </p>
        </form>

        <div></div>
      </div>
    </div>
  );
};

export default Register;
