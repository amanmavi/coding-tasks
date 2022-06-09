import React, { useState } from "react";

import Header from "./Header";
import UserPost from "./UserPost";
import NewPost from "./NewPost";
import AuthModal from "../auth/Modal";

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const userPosts = [
    {
      name: "Theresa Webb",
      time: "5mins ago",
      profileImage: "/Images/userOne.png",
      icon: "/Images/handWave.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo officia deserunt sunt maiores facilis? Velit, facere vitae unde reiciendis quidem quas voluptates, placeat itaque magnam maiores laborum, illo eius?",
      showEdited: false,
    },
    {
      name: "Marvin McKinney",
      time: "8mins ago",
      profileImage: "/Images/userTwo.png",
      icon: "/Images/sadEmoji.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo officia deserunt sunt maiores facilis? Velit, facere vitae unde reiciendis quidem quas voluptates, placeat itaque magnam maiores laborum, illo eius?",
      showEdited: true,
    },
  ];

  return (
    <div className=" bg-primary min-h-screen text-slate-400 pb-4 ">
      <div className="md:w-1/2 mx-auto px-4">
        <Header />
        <NewPost setModalIsOpen={setModalIsOpen} />
        {userPosts.map((userPost) => {
          return (
            <UserPost
              key={userPost.name}
              data={userPost}
              setModalIsOpen={setModalIsOpen}
            />
          );
        })}
        <AuthModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </div>
    </div>
  );
};

export default Index;
