import React from "react";
import Modal from "react-modal/lib/components/Modal";
import AuthWrapper from "./AuthWrapper";

Modal.setAppElement("#root");

const AuthModal = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={false}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          background: "#27292D",
          top: "0",
          left: "0",
          opacity: "0.95",
        },
        content: {
          top: "25%",
          left: "40%",
          background: "#27292D",
          border: "solid 1px #C5C7CA",
          width: "463px",
          height: "506px",
        },
      }}
    >
      <AuthWrapper setModalIsOpen={setModalIsOpen} />
    </Modal>
  );
};

export default AuthModal;
