import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const AuthWrapper = ({ setModalIsOpen }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="border-5 bg-secondary text-fadedtext  grid place-content-center  rounded">
      <div className="text-right pt-4">
        <button
          className="bg-black rounded-full h-8 w-8 "
          onClick={() => {
            setModalIsOpen(false);
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
