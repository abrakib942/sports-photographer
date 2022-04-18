import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import google from "../../images/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  if (user || googleUser) {
    navigate("/");
  }

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger ">Error: {error?.message}</p>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container mt-5">
      <div>
        <h2 className="form-title text-center my-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              placeholder="Your Email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <input
              onChange={handlePassword}
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
          </div>
          {errorElement}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New User?{" "}
          <Link className="form-link text-primary" to="/register">
            Create an account
          </Link>
        </p>
        <p className="text-danger">{googleError?.message}</p>
        <button
          onClick={() => signInWithGoogle()}
          className=" btn btn-outline-dark d-block mx-auto my-3"
        >
          <img src={google} alt="" />
          <span className="px-2">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
