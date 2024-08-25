import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions/authActions";
import { AppDispatch } from "../../redux/store";
import "../../styles/index.css";

const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await dispatch(signUp({ name, email, password }));
      } catch (error) {
        console.error(error);
        alert("Sign up failed. Please try again.");
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <form
      className="w-full max-w-sm bg-blue-100 p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl mb-6">Sign Up</h2>
      <input
        type="text"
        className="mb-4 p-2 border rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        className="mb-4 p-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="mb-4 p-2 border rounded"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        className="mb-4 p-2 border rounded"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
