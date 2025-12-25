import { Router } from "express";
import {
  createTopic,
  getTopicsByCourse,
  updateTopic,
  deleteTopic
} from "../controllers/topic.controller.js";
import { adminAuth } from "../middleware/auth.middleware.js";

const router = Router();
router.use(adminAuth);

router.post("/", createTopic);
router.get("/course/:courseId", getTopicsByCourse);
router.put("/:id", updateTopic);
router.delete("/:id", deleteTopic);

export default router;
