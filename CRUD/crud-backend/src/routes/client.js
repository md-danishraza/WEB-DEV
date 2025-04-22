import express from "express";

import {
  getClients,
  createClient,
  updateClient,
  deleteCilent,
  searchClient,
} from "../controllers/clientController.js";

// creating a router
const router = express.Router();

router.get("/", getClients);
router.post("/search", searchClient);
router.post("/", createClient);
router.patch("/:id", updateClient);
router.delete("/:id", deleteCilent);

export default router;
