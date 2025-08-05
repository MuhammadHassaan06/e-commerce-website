"use client";
import React from "react";
import { Mail, Lock, Eye } from "lucide-react";

const formInputFields = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email, username or phone",
    icon: Mail,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    icon: Lock,
  },
];
const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
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
        {formInputFields.map((field) => {
          return (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <div className="relative mt-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <field.icon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  className="w-full rounded-md border border-gray-300 bg-gray-50 p-3 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500"
                  placeholder={field.placeholder}
                />
                {field.id === "password" && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <Eye className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded border border-gray-300"></div>
            <span className="ml-2 block text-sm text-gray-900">
              Keep me logged in
            </span>
          </div>
          <div className="text-sm">
            <span className="font-medium text-cyan-600 hover:text-cyan-500 cursor-pointer">
              Forgot password?
            </span>
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
        <span className="font-semibold text-cyan-600 hover:text-cyan-500 cursor-pointer">
          Create Account
        </span>
      </p>
    </div>
  );
};
export default LoginForm;
