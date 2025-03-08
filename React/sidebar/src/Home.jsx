import React from "react";
import SideBar from "./SideBar";
import Modal from "./Modal";
import { useMyContext } from "./globalContext";
import { FaBars } from "react-icons/fa";

function Home() {
  const { toggleSidebar, toggleModal } = useMyContext();
  return (
    <div className="home">
      <SideBar />

      <FaBars className="icon" onClick={toggleSidebar} />

      <Modal />
      <button onClick={toggleModal} id="modal" className="btn">
        Modal
      </button>
    </div>
  );
}

export default Home;
