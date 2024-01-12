// LoginForm.js
import React, { useState } from 'react';
import "./login.css"
import baza from '../baza/Baza';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [loginSuccsess, setLoginSuccsess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (baza.some((item) => item.username === username && item.password === password)) {
      console.log('Login successful');
      setLoginError(false);
      setLoginSuccsess(true);
      setUsername("")
      setPassword("")
    } else {
      console.log('Login failed');
      setLoginError(true);
      setLoginSuccsess(false);
      setUsername("")
      setPassword("")
    }
  };
  

  return (
    <div>
      <div className="login-box">
        <p>Login</p>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
        {loginError && <p style={{ color: 'red' }}>Incorrect username or password</p>}
        {loginSuccsess && <p style={{ color: 'green' }}>successful</p>}
        <p>
          Don't have an account?{' '}
          <a href="" className="a2">
            Contact me!
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
