import express from "express";
import { getGeminiReply } from "../services/geminiService.js";

const router = express.Router();

// 🧠 In-memory session storage
let chatHistory = [];

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    // Add user message
    chatHistory.push({
      role: "user",
      text: message,
    });

    // 🟢 Keep only last 8 messages (sliding window)
    chatHistory = chatHistory.slice(-8);

    // Get AI reply with context
    const reply = await getGeminiReply(chatHistory);

    // Save bot reply
    chatHistory.push({
      role: "model",
      text: reply,
    });

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Chatbot error" });
  }
});

export default router;