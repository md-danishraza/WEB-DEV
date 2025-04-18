import * as clientServices from "../services/clientServices.js";

const getClients = async (req, res) => {
  try {
    const clients = await clientServices.getAllClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getClients };
