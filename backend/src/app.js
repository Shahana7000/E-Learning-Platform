import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.routes.js";
import courseRoutes from "./routes/course.routes.js";
import topicRoutes from "./routes/topic.routes.js";
import materialRoutes from "./routes/material.routes.js";



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/materials", materialRoutes);



export default app;
