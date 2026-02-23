import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import plantRoutes from "./routes/plantRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import careRoutes from "./routes/careRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/plants", plantRoutes);
app.use("/api/queries", queryRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/care", careRoutes);

app.use("/uploads", express.static("uploads"));



app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
