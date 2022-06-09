import React from "react";
import { FiArrowRight } from "react-icons/fi";

const LogIn = ({ setShowLogin }) => {
  return (
    <div>
      <h4 className="text-center text-white text-xl font-semibold mb-2">
        WELCOME BACK
      </h4>
      <p className="text-center text-white  font-semibold">
        Log into your account
      </p>
      <div className="pb-3 pt-10">
        <p className="pb-1">Email or Username </p>
        <input
          type="email"
          placeholder="Enter your email or username"
          className="border  rounded w-72 py-2 px-2"
        />
      </div>

      <div className="pb-3">
        <div className="flex justify-between pb-1">
          <p>Password</p>
          <p>Forgot password?</p>
        </div>
        <div className="flex relative">
          <input
            type="password"
            placeholder="Enter your password"
            className="border rounded  w-72  py-2 px-2"
          />
        </div>
      </div>
      <button className="w-72 py-2 rounded my-2 text-white bg-primary font-semibold">
        Login now
      </button>
      <div className="flex gap-2 ">
        <p
          className="cursor-pointer"
          onClick={() => {
            setShowLogin(false);
          }}
        >
          Not registered yet? <span>Register</span>
        </p>
        <div className="py-1">
          <FiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
