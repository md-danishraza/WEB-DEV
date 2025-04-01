import React from "react";
import { useState, createContext, useContext } from "react";

const Mycontext = createContext();

export const useMyContext = () => useContext(Mycontext);

function GlobalContext({ children }) {
  const [isSidebarOpen, setSidebar] = useState(true);
  const [isModalOpen, setModal] = useState(true);
  const toggleSidebar = () => {
    setSidebar((cur) => !cur);
  };
  const toggleModal = () => {
    setModal((cur) => !cur);
  };
  return (
    <Mycontext.Provider
      value={{ isSidebarOpen, isModalOpen, toggleModal, toggleSidebar }}
    >
      {children}
    </Mycontext.Provider>
  );
}

export default GlobalContext;
