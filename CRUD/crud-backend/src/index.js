import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import router from "./routes/client.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON

app.use("/api/clients", router);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
