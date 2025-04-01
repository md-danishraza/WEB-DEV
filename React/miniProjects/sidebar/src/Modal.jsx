import React from "react";
import { useMyContext } from "./globalContext";

function Modal() {
  const { isModalOpen, toggleModal } = useMyContext();
  return (
    <div className={isModalOpen ? "modal" : "modal active"}>
      <h1>Modal</h1>
      <button className="btn" onClick={toggleModal}>
        close
      </button>
    </div>
  );
}

export default Modal;
