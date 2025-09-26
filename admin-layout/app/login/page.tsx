"use client";
import { useState } from "react";
import { Facebook, Twitter, Chromium } from 'lucide-react';
export default function LoginPage() {
  const [activeForm, setActiveForm] = useState("login");
  return (
    <>
      <section className="w-screen h-screen flexc">
        {activeForm === "login" && (
          <form className="max-w-lg mx-auto border p-10 rounded-lg shadow-lg mt-10 mb-10">
            <div className="title text-center mb-5">
              <h1>
                Login with TamBao<span className="text-[#5781EB]">Film</span>
              </h1>
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="forgot-password mb-5">
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveForm("forgot-password");
                }}
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in
            </button>
            <div className="mt-3 mb-3 text-center">
              Or
            </div>
            <div className="mb-5 text-center">
              <button
                type="button"
                className="ml-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <Chromium className="inline-block mr-2" />
              </button>
              <button
                type="button"
                className="ml-3 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900"
              >
                <Facebook className="inline-block mr-2" />
              </button>
              <button
                type="button"
                className="ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
              >
                <Twitter className="inline-block mr-2" />
              </button>
            </div>
            <div className="create-account mt-3 text-center">
              If you don&apos;t have an account,{" "}
              <a
                href=""
                className="text-blue-500 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveForm("register");
                }}
              >
                sign up
              </a>
            </div>
          </form>
        )}
        {activeForm === "register" && (
          <form className="max-w-lg mx-auto border p-10 rounded-lg shadow-lg mt-10 mb-10">
            <div className="title text-center mb-5">
              <h1>
                Register with TamBao<span className="text-[#5781EB]">Film</span>
              </h1>
            </div>
            <div className="mb-5">
              <input
                type="text"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your username"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Your password"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="confirm-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                id="phoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your address"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>

            <div className="create-account mt-3 text-center">
              If you already have an account,{" "}
              <a
                href=""
                className="text-blue-500 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveForm("login");
                }}
              >
                sign in
              </a>
            </div>
          </form>
        )}
        {activeForm === "forgot-password" && (
          <form className="max-w-lg mx-auto border p-10 rounded-lg shadow-lg mt-10 mb-10">
            <div className="title text-center mb-5">
              <h1>Reset Password</h1>
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </section>
    </>
  );
}
