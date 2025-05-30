import dotenv from "dotenv";
dotenv.config();

import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Supabase
  },
});

// Check connection
const checkConnection = async () => {
  try {
    const client = await pool.connect(); // Attempt to connect
    console.log("Database connection successful!");
    client.release(); // Release the client back to the pool
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
};

checkConnection();

const query = (text, params) => pool.query(text, params);

export default query;
