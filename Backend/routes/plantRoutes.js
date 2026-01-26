import express from "express";
import Plant from "../models/Plant.js";

const router = express.Router();

/* ================= GET ALL PLANTS ================= */
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch plants" });
  }
});

export default router;
