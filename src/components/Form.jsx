"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import MailIcon from "./Icons/MailIcon";
import LockIcon from "./Icons/LockIcon";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full max-w-md px-4">
      <div className="text-left">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
        <p className="mt-2 text-gray-500">
          Log in to explore exciting auctions and unique finds.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MailIcon />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("Email:", e.target.value);
              }}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 pl-10 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="Enter your email, username or phone"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("Password:", e.target.value);
              }}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
              placeholder="Enter your password"
              required
            />
            <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
              {showPassword ? (
                <EyeOff
                  className="h-5 w-5 text-gray-400"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <Eye
                  className="h-5 w-5 text-gray-400"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Keep me logged in
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full cursor-pointer justify-center rounded-full bg-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cyan-600"
          >
            Log into your account
          </button>
        </div>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or</span>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        New to Mumtlikaty?{" "}
        <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
          Create Account
        </a>
      </p>
    </div>
  );
};

export default LoginForm;