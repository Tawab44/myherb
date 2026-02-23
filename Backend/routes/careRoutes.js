import express from "express";
import CareInfo from "../models/Careinfo.js";

const router = express.Router();

/* ===== GET ALL HERBS ===== */
router.get("/", async (req, res) => {
  try {
    const herbs = await CareInfo.find();
    res.json(herbs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch care info" });
  }
});

/* ===== SEARCH HERB ===== */
router.get("/search", async (req, res) => {
  try {
    const { name } = req.query;

    const herb = await CareInfo.findOne({
      commonName: { $regex: name, $options: "i" }
    });

    res.json(herb);
  } catch (err) {
    res.status(500).json({ message: "Search failed" });
  }
});

export default router;