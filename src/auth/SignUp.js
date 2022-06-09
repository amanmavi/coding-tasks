import React from "react";
import { FiArrowRight } from "react-icons/fi";

const SignUp = ({ setShowLogin }) => {
  const inputStyle = "border  rounded laptop:w-96 w-72 py-2 px-2";
  return (
    <form>
      <div>
        <h4 className="text-center text-white text-xl font-bold">SIGN UP</h4>
        <p className="text-center text-white  font-semibold ">
          Create an account to continue
        </p>
      </div>
      <div className="pb-3 pt-6">
        <p className="text-brighttext pb-1">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          className={inputStyle}
        />
      </div>
      <div className="pb-3">
        <p className="text-brighttext pb-1">Username</p>
        <input
          type="text"
          placeholder="Choose a preferred username"
          className={inputStyle}
        />
      </div>
      <div className="pb-3">
        <p className="text-brighttext pb-1">Password</p>
        <div className="flex relative">
          <input
            type="password"
            placeholder="Choose a strong password"
            className={inputStyle}
          />
        </div>
      </div>
      <button
        type="button"
        className="border  rounded laptop:w-96 w-72 py-2 my-2 px-2 bg-primary font-semibold"
      >
        Continue
      </button>
      <div className="flex gap-2 py-1">
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
