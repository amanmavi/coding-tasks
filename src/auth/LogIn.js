import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

const LogIn = ({ setShowLogin }) => {
  return (
    <div>
      <h4 className="flex justify-center text-modalTopColor">WELCOME BACK</h4>
      <p className="flex justify-center text-white leading-5 text-lg font-semibold">
        Log into your account
      </p>
      <div className="pb-3 pt-10">
        <p className="text-brighttext pb-1">Email or Username </p>
        <input
          type="email"
          placeholder="Enter your email or username"
          className="border bg-secondary rounded w-96 py-2 px-2"
        />
      </div>

      <div className="pb-4">
        <div className="flex justify-between pb-1">
          <p className="text-brighttext ">Password</p>
          <p>Forgot password?</p>
        </div>
        <div className="flex relative">
          <input
            type="password"
            placeholder="Enter your password"
            className="border rounded bg-secondary w-96 py-2 px-2"
          />
          <div className="flex absolute w-12 right-0 justify-end items-center h-full px-4 ">
            <AiOutlineEye />
          </div>
        </div>
      </div>
      <button className="bg-btnBg w-96 py-2 rounded my-2 text-white">
        Login now
      </button>
      <div className="flex gap-2 ">
        <p
          className="cursor-pointer"
          onClick={() => {
            setShowLogin(false);
          }}
        >
          Not registered yet? <span className="text-brighttext">Register</span>
        </p>
        <div className="py-1">
          <FiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
