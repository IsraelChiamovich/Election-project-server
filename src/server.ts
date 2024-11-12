// src/server.ts

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import usersRoutes from "./routes/usersRoutes";
import candidatesRoutes from "./routes/candidatesRoutes";
import votesRoutes from "./routes/votesRouter";
import http from "http";
import { Server } from "socket.io";
import { handleSocketConnection } from "./sockets/io";
// import { initDatabase } from "./services/candidatesService";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "*"
  },
});

io.on("connection", handleSocketConnection);

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/users", usersRoutes);
app.use("/api/candidates", candidatesRoutes);
app.use("/api/votes", votesRoutes);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
