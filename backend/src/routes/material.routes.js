import { Router } from "express";
import {
  createMaterial,
  getMaterialsByTopic,
  updateMaterial,
  deleteMaterial
} from "../controllers/material.controller.js";
import { adminAuth } from "../middleware/auth.middleware.js";

const router = Router();
router.use(adminAuth);

router.post("/", createMaterial);
router.get("/topic/:topicId", getMaterialsByTopic);
router.put("/:id", updateMaterial);
router.delete("/:id", deleteMaterial);

export default router;
