import React from "react";
import { BsChatDots } from "react-icons/bs";

const NewPost = ({ setModalIsOpen }) => {
  return (
    <div
      className="border-2 bg-secondary border-borderColor rounded p-6"
      onClick={() => setModalIsOpen(true)}
    >
      <h4 className="font-medium text-brighttext">Create post</h4>
      <div className="bg-primary rounded p-6 my-4 flex">
        <div>
          <div className="grid place-items-center rounded-full h-16 w-16 bg-secondary">
            <BsChatDots />
          </div>
        </div>
        <p className="ml-3 mt-4 text-fadedtext">How are you feeling today?</p>
      </div>
      <div className="w-full grid place-items-end">
        <button className="bg-btnBg  px-8 py-2 rounded text-white">Post</button>
      </div>
    </div>
  );
};

export default NewPost;
