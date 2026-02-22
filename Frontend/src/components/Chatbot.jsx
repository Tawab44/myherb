import { useState } from "react";
import axios from "axios";
import "../styles/Chatbot.css";


const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        { message: input }
      );

      const botMsg = { text: res.data.reply, sender: "bot" };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Error getting reply", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };
   

  return (
    <>
      {/* FLOATING ICON */}
      <div
        className="chat-icon"
        onClick={() => setOpen(!open)}
      >
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            Herb AI Assistant 🌿
          </div>

          <div className="chat-messages">
            
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.sender}`}
              >
                {msg.text.replace(/\*\*/g, "")}
              </div>
            ))}

            {loading && (
              <div className="message bot thinking">
                Thinking . . .
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask about herbs 🌱"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;