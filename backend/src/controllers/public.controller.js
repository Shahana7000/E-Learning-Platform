import Course from "../models/course.model.js";
import Topic from "../models/topic.model.js";
import StudyMaterial from "../models/material.model.js";

/**
 * GET all published courses
 */
export const getPublicCourses = async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET topics of a course
 */
export const getPublicTopicsByCourse = async (req, res) => {
  try {
    const topics = await Topic.find({
      courseId: req.params.courseId
    }).sort("order");

    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET study materials of a topic
 * Only FREE materials for public users
 */
export const getPublicMaterialsByTopic = async (req, res) => {
  try {
    const materials = await StudyMaterial.find({
      topicId: req.params.topicId,
      isFree: true
    });

    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
