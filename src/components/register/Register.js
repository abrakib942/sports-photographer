import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirm = (event) => {
    setConfirmPass(event.target.value);
  };

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container mt-5">
      <div>
        <h2 className="form-title text-center my-3">Register</h2>
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
          <div className="input-group">
            <input
              onChange={handleConfirm}
              type="password"
              name="confirm-password"
              placeholder="Confirm Password"
              id=""
              required
            />
          </div>
          {errorElement}
          <input className="form-submit mb-2" type="submit" value="Register" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link text-primary" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
