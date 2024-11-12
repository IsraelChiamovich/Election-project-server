// src/server.ts

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import usersRoutes from "./routes/usersRoutes";
import candidatesRoutes from "./routes/candidatesRoutes";
import votesRoutes from "./routes/votesRouter";
import { initDatabase } from "./services/candidatesService";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/users", usersRoutes);
app.use("/api/candidates", candidatesRoutes);
app.use("/api/votes", votesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
