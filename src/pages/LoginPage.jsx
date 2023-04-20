import React, { useState } from "react";
import "../Styles/LoginForm.css";
import { auth } from "../Firebase/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(emailSignup, passwordSignup);
    console.log(auth);
    createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .then(() => {
        const user = auth.currentUser;
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <button type="submit">Log in</button>
            {error && <p className="error">Wrong email or password!</p>}
          </form>
        </div>
        <div className="register">
          <form className="form" onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setEmailSignup(e.target.value)}
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) => setPasswordSignup(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
