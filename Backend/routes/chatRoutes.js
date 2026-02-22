import express from "express";
import { getGeminiReply } from "../services/geminiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    const reply = await getGeminiReply(message);

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Chatbot error" });
  }
});

export default router;