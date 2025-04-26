import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

import TableList from "./components/TableList";

import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import Footer from "./components/footer";

function App() {
  const queryClient = useQueryClient();
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
  const editOpen = (updateclient) => {
    // console.log(updateclient);
    setModal((prev) => {
      return { isOpen: true, mode: "edit", client: updateclient };
    });
  };

  const handleDelete = async (id) => {
    const deleteUrl = import.meta.env.VITE_BACKEND + "/api/clients/" + id;

    const userConfirmed = window.confirm("Are you sure you want to DELETE?");
    if (userConfirmed) {
      try {
        const res = axios.delete(deleteUrl);
        toast.success(`client deleted successfully`, {
          position: "top-center",
        });
        setModal({ isOpen: false, mode: null, client: null });
        queryClient.refetchQueries(["clients"]);
      } catch (error) {
        toast.error(error.message, { position: "top-center" });
        setModal({ isOpen: false, mode: null, client: null });
      }
    }
  };
  const handleSubmit = async (newClient) => {
    // if null then close mode = cancel is clicked
    if (!newClient) {
      setModal({ isOpen: false, mode: null, client: null });
      return;
    }

    if (modal.mode == "add") {
      // console.log("adding");
      const postUrl = import.meta.env.VITE_BACKEND + "/api/clients/";
      // console.log(client);
      try {
        const res = await axios.post(postUrl, newClient);
        toast.success(`client ${res.data.name} added successfully`, {
          position: "top-center",
        });
        setModal({ isOpen: false, mode: null, client: null });
        queryClient.refetchQueries(["clients"]);
      } catch (error) {
        toast.error(error.message, { position: "top-center" });
        setModal({ isOpen: false, mode: null, client: null });
      }
    }
    if (modal.mode == "edit") {
      // id taking from modal client state
      const id = modal.client.id;

      // console.log(updateClient);
      const patchUrl = import.meta.env.VITE_BACKEND + "/api/clients/" + id;

      try {
        const res = await axios.patch(patchUrl, newClient);
        toast.success(`client ${res.data.name} updated successfully`, {
          position: "top-center",
        });
        setModal({ isOpen: false, mode: null, client: null });
        queryClient.refetchQueries(["clients"]);
      } catch (error) {
        toast.error(error.message, { position: "top-center" });
        setModal({ isOpen: false, mode: null, client: null });
      }
    }
  };

  // fetch clients from backend
  const fetchClients = async () => {
    // const res = await fetch("http://localhost:3000/api/clients");
    const getUrl = import.meta.env.VITE_BACKEND + "/api/clients";
    const res = await axios.get(getUrl);
    return res.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["clients"], //query key for synchronising
    queryFn: fetchClients, //return a promise (fetch/axios get)
  });

  const [clients, setClients] = useState([]);
  useEffect(() => {
    if (data) {
      setClients(data);
    }
  }, [data]);

  // search state

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);

    if (!searchValue.length) {
      // Reset to the original data
      setClients(data || []);
    } else {
      setClients((prev) => {
        return prev.filter((client) =>
          client.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
  };

  // console.log(clients);
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="flex flex-col min-h-[100vh]">
      <ToastContainer />
      <Navbar addOpen={addOpen} search={search} handleSearch={handleSearch} />
      <div className="w-[100%] max-w-[1024px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold underline text-center font-(family-name:--main-font)">
          CRUD
        </h1>
        {isLoading ? (
          <div className="loading"></div>
        ) : (
          <TableList
            editOpen={editOpen}
            clients={clients}
            handleDelete={handleDelete}
          />
        )}
      </div>
      <Modal modal={modal} handleSubmit={handleSubmit} />
      <Footer />
    </main>
  );
}

export default App;
