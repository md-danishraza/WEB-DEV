import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";

function App() {
  const [modal, setModal] = useState({
    isOpen: false,
    mode: null,
    client: null,
  });

  const addOpen = () => {
    setModal((prev) => {
      return { ...prev, isOpen: true, mode: "add" };
    });
  };
  const editOpen = (client) => {
    setModal((prev) => {
      return { ...prev, isOpen: true, mode: "edit", client: client };
    });
  };
  const handleSubmit = (client) => {
    // if null then close mode = cancel is clicked
    if (!client) {
      setModal({ isOpen: false, mode: null, client: null });
      return;
    }
    if (modal.mode == "add") {
      console.log("adding");
    }
    if (modal.mode == "edit") {
      console.log("editing");
    }
  };

  return (
    <main className="">
      <Navbar addOpen={addOpen} />
      <div className="w-[100%] max-w-[1024px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold underline text-center font-(family-name:--main-font)">
          CRUD
        </h1>
        <TableList editOpen={editOpen} />
      </div>
      <Modal modal={modal} handleSubmit={handleSubmit} />
    </main>
  );
}

export default App;
