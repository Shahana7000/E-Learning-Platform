import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      sparse: true, // allows guest users
      lowercase: true
    },
    password: {
      type: String
    },
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudyMaterial"
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
