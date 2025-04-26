import query from "../db.js";

export const getAllClients = async () => {
  const res = await query("SELECT * FROM clients_tb", []);
  // console.log(res.rows);
  return res.rows;
};

export const createClient = async (clientData) => {
  const { name, email, job, rating, isactive } = clientData;
  const res = await query(
    `INSERT INTO clients_tb (name, email, job, rating, isactive)

     VALUES ($1, $2, $3, $4, $5) RETURNING *`,

    [name, email, job, rating, isactive]
  );
  // console.log(res);
  return res.rows[0];
};
export const updateClient = async (clientData, id) => {
  const { name, email, job, rating, isactive } = clientData;
  const res = await query(
    `UPDATE clients_tb SET name=$1, email=$2, job=$3, rating=$4, isactive=$5
     WHERE id=$6 RETURNING *`,

    [name, email, job, rating, isactive, id]
  );

  return res.rows[0];
};

export const deleteCilent = async (id) => {
  const res = await query(`DELETE FROM clients_tb WHERE id=$1`, [id]);
  return res.rowCount > 0; //true if deleted
};

export const searchClient = async (term) => {
  const res = await query(
    `SELECT * FROM clients_tb WHERE name ILIKE $1 OR email ILIKE $1`,
    [term]
  );
  return res.rows;
};
