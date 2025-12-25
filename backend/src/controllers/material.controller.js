import StudyMaterial from "../models/material.model.js";

// CREATE
export const createMaterial = async (req, res) => {
  const material = await StudyMaterial.create(req.body);
  res.status(201).json(material);
};

// READ BY TOPIC
export const getMaterialsByTopic = async (req, res) => {
  const materials = await StudyMaterial.find({
    topicId: req.params.topicId
  });
  res.json(materials);
};

// UPDATE
export const updateMaterial = async (req, res) => {
  const material = await StudyMaterial.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(material);
};

// DELETE
export const deleteMaterial = async (req, res) => {
  await StudyMaterial.findByIdAndDelete(req.params.id);
  res.json({ message: "Material deleted" });
};
