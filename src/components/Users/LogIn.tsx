import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/authActions";
import { AppDispatch } from "../../redux/store"; 
import "../../styles/index.css";

const LogIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(logIn({ email, password })); 
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <form
      className="w-full max-w-sm bg-blue-100 p-8 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl mb-6">Log In</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <label className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        Remember Me
      </label>
      <button type="submit" className="w-full bg-black text-white py-2 rounded">
        Log In
      </button>
      <a href="#" className="block mt-4 text-blue-500">
        Forgot Password?
      </a>
    </form>
  );
};

export default LogIn;
