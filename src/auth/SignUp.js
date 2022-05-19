import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

const SignUp = ({ setShowLogin }) => {
  return (
    <form>
      <div>
        <h4 className="flex justify-center text-modalTopColor">SIGN UP</h4>
        <p className="flex justify-center text-white leading-5 text-lg font-semibold ">
          Create an account to continue
        </p>
      </div>
      <div className="pb-3 pt-6">
        <p className="text-brighttext pb-1">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="border bg-secondary rounded w-96 py-2 px-2"
        />
      </div>
      <div className="pb-3">
        <p className="text-brighttext pb-1">Username</p>
        <input
          type="text"
          placeholder="Choose a preferred username"
          className="border bg-secondary rounded w-96 py-2 px-2"
        />
      </div>
      <div className="pb-3">
        <p className="text-brighttext pb-1">Password</p>
        <div className="flex relative">
          <input
            type="password"
            placeholder="Choose a strong password"
            className="border rounded bg-secondary w-96 py-2 px-2"
          />
          <div className="flex absolute w-96 justify-end items-center h-full px-4 ">
            <AiOutlineEye />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-btnBg w-96 py-2 rounded my-2 text-white"
      >
        Continue
      </button>
      <div className="flex gap-2 ">
        <p
          className="cursor-pointer"
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Already have an acount? <span className="text-brighttext">Login</span>
        </p>
        <div className="py-1">
          <FiArrowRight />
        </div>
      </div>
    </form>
  );
};

export default SignUp;
