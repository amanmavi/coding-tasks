import React from "react";
import { BsChatRight } from "react-icons/bs";

const UserPost = ({ data, setModalIsOpen }) => {
  return (
    <div
      className="border-2 bg-secondary border-borderColor rounded p-6 mt-4"
      onClick={() => setModalIsOpen(true)}
    >
      <div className="flex gap-6 items-center ">
        <img
          src={data.profileImage}
          className="h-16 w-16 rounded-full object-cover"
          alt="User"
        />
        <div className="flex grow justify-between">
          <div>
            <h4 className="font-medium text-brighttext">{data.name}</h4>
            <p className="text-fadedtext">
              {data.time}{" "}
              <span className="text-md">{data.showEdited && ". Edited"}</span>
            </p>
          </div>
          <p className="tracking-widest font-extrabold">...</p>
        </div>
      </div>
      <div className="bg-primary rounded p-6 my-4 flex">
        <div>
          <div className="grid place-items-center rounded-full h-12 w-12 bg-secondary ">
            <img className="object-contain" src={data.icon} alt="userImage" />
          </div>
        </div>

        <p className="ml-3 text-fadedtext ">{data.text}</p>
      </div>
      <div className="flex items-center gap-2">
        <BsChatRight />
        <p className="text-fadedtext">24 comments</p>
      </div>
    </div>
  );
};

export default UserPost;
