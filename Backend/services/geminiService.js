import axios from "axios";

export const getGeminiReply = async (message) => {
  const API_KEY = process.env.GEMINI_API_KEY;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
    {
      contents: [
        {
          parts: [{ text: message }],
        },
      ],
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};