import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
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
