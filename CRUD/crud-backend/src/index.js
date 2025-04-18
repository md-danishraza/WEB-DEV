import express from "express";
import cors from "cors";
import router from "./routes/client.js";

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON

app.use("/api/clients", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
