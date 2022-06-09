import React from "react";
import Popup from "reactjs-popup";
import AuthWrapper from "./AuthWrapper";

const AuthModal = ({ modalIsOpen, setModalIsOpen }) => {
  const closeModal = () => setModalIsOpen(false);
  return (
    <div>
      <Popup open={modalIsOpen} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <AuthWrapper closeModal={closeModal} />
        </div>
      </Popup>
    </div>
  );
};

export default AuthModal;
