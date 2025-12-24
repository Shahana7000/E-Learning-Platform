import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRoutes from "./routes/admin.routes.js";



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);



export default app;
