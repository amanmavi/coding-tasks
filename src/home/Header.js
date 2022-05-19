import React from "react";

const Header = () => {
  return (
    <div className="py-10 ">
      <h3 className="font-bold text-2xl text-brighttext ">Hello Jane</h3>
      <div className="flex items-center gap-4 ">
        <p className="text-fadedtext">
          How are you doing today? Would you like to share something with the
          <br />
          community 🤗
        </p>
      </div>
    </div>
  );
};

export default Header;
