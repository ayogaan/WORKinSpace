'use client';
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import {login} from "../../services/AuthServices";
import { useRouter } from 'next/navigation'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      console.log("Login successful:", response);
      router.push("/admin/spaces");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="justify-center items-center flex h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow-md w-96">
        <h1 className="text-xl font-semibold mb-6">Login</h1>
        <div className="mt-5 w-full">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // default
                },
                "&:hover fieldset": {
                  borderColor: "black", // optional: still black on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray", // blue when focused
                },
              },
            }}
          />
        </div>
        <div className="mt-5 w-full">
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // default
                },
                "&:hover fieldset": {
                  borderColor: "black", // optional: still black on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray", // blue when focused
                },
              },
            }}
          />
        </div>
        <div className="mt-5 w-full">
            <button onClick={handleLogin} className="w-full bg-blue-900 text-white px-4 py-3 text-md rounded-md">Login</button>
        </div>
      </div>
    </div>
  );
}
