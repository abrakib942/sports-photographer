import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import google from "../../images/google.png";
import Loading from "../loading/Loading";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("email sent");
    } else {
      toast("please enter your email address");
    }
  };

  if (loading) {
    return <Loading />;
  }

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

  if (user) {
    navigate(from, { replace: true });
  }

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

        <p className="text-center mt-2">
          Forget Password?{" "}
          <button
            className="btn btn-link text-primary text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>

        <button
          onClick={() => signInWithGoogle()}
          className=" btn btn-outline-dark d-block mx-auto my-3"
        >
          <img src={google} alt="" />
          <span className="px-2">Sign in with Google</span>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
