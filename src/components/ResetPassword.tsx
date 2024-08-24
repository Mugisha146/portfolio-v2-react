import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/actions/authActions"; // Import the resetPassword action

const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      try {
        await dispatch(resetPassword({ email, newPassword }));
        // Redirect or show success message here
      } catch (error) {
        console.error(error);
        alert("Password reset failed. Please try again.");
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
      <h2 className="text-2xl mb-6">Reset Password</h2>
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
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
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
        Reset Password
      </button>
    </form>
  );
};

export default ResetPassword;
