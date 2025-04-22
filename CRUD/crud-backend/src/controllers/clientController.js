import * as clientServices from "../services/clientServices.js";

const getClients = async (req, res) => {
  try {
    const clients = await clientServices.getAllClients();
    return res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createClient = async (req, res) => {
  try {
    const body = req.body;
    const newClient = await clientServices.createClient(body);
    return res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateClient = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updated = await clientServices.updateClient(body, id);
    if (!updated) {
      return res.status(404).json({ error: "Client not found!" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCilent = async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await clientServices.deleteCilent(id);

    if (!isDeleted) {
      return res.status(404).json({ error: "Client not found!" });
    }
    res.status(200).send("deletion successful!");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const searchClient = async (req, res) => {
  try {
    console.log(req.body);
    const { search } = req.body;
    const clients = await clientServices.searchClient(search);
    return res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getClients, createClient, updateClient, deleteCilent, searchClient };
