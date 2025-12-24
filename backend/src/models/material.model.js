import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      enum: ["pdf", "video", "link"],
      required: true
    },
    url: {
      type: String,
      required: true
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true
    },
    isFree: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("StudyMaterial", materialSchema);
