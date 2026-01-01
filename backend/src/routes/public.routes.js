import { Router } from "express";
import {
  getPublicCourses,
  getPublicTopicsByCourse,
  getPublicMaterialsByTopic
} from "../controllers/public.controller.js";

const router = Router();

router.get("/courses", getPublicCourses);
router.get("/courses/:courseId/topics", getPublicTopicsByCourse);
router.get("/topics/:topicId/materials", getPublicMaterialsByTopic);

export default router;
