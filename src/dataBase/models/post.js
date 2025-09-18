import mongoose, { Schema, models } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, trim: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
  },
  { timestamps: true }
);



// Check if model already exists
const PostModel = models.Post || mongoose.model("Post", postSchema);

export default PostModel;
