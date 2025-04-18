import query from "../db.js";

export const getAllClients = async () => {
  const res = await query("SELECT * FROM clients_tb", []);
  console.log(res.rows);
  return res.rows;
};
