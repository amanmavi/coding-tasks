import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const AuthWrapper = ({ closeModal }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="border-5 bg-slate-800  text-white  grid place-content-center  rounded p-8">
      <div className="text-right ">
        <button
          className="bg-primary rounded-full h-8 w-8 "
          onClick={() => {
            closeModal();
          }}
        >
          X
        </button>
      </div>
      {showLogin ? (
        <LogIn setShowLogin={setShowLogin} />
      ) : (
        <SignUp setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default AuthWrapper;
