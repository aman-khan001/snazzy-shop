import React from "react";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("Login failed: ", error.message);
    }
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      alert("Google Login Failed: " + error.message);
    }
  };

  return (
    <div>
      <div className="container mt-5" style={{ height: "80vh" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex gap-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <button onClick={handleGoogleLogin} className="btn btn-dark ">
              Sign in With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
