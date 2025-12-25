import Topic from "../models/topic.model.js";

// CREATE
 export const createTopic = async (req, res) => {
  const topic = await Topic.create(req.body);
  res.status(201).json(topic);
};

// READ BY COURSE
export const getTopicsByCourse = async (req, res) => {
  const topics = await Topic.find({ courseId: req.params.courseId })
    .sort("order");
  res.json(topics);
};

// UPDATE
export const updateTopic = async (req, res) => {
  const topic = await Topic.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(topic);
};

// DELETE
export const deleteTopic = async (req, res) => {
  await Topic.findByIdAndDelete(req.params.id);
  res.json({ message: "Topic deleted" });
};
