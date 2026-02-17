import express from "express";
import multer from "multer";
import Query from "../models/Query.js";

const router = express.Router();

/* ---------- Multer Config ---------- */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ---------- POST Query ---------- */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { email, nameOrProperties, description } = req.body;

    if (!email || !description) {
      return res.status(400).json({ message: "Email and description required" });
    }

    const newQuery = new Query({
      email,
      nameOrProperties,
      description,
      image: req.file ? req.file.path : null,
    });

    await newQuery.save();

    res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit query" });
  }
});

export default router;
