import express from "express";
import multer from "multer";
import Query from "../models/Query.js";

const router = express.Router();

/* Multer Storage*/

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/*POST Query*/

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const query = new Query({
      commonName: req.body.commonName,
      scientificName: req.body.scientificName,
      partUsed: req.body.partUsed,
      properties: req.body.properties,
      source: req.body.source,
      missingStatus: req.body.missingStatus,
      notes: req.body.notes,
      contributorName: req.body.contributorName,
      email: req.body.email,
      permission: req.body.permission === "true",
      imageUrl: req.file ? req.file.path : null,
    });

    await query.save();

    res.status(201).json({ message: "Submission successful 🌿" });
  } catch (error) {
    res.status(500).json({ message: "Submission failed" });
  }
});

export default router;
