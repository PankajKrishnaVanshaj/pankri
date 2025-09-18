import mongoose, { Schema, models } from "mongoose";

// Define the User Schema
const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    isCreator: { type: Boolean, required: true, default: false },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Check if the model already exists, otherwise define it
const UserModel = models.User || mongoose.model("User", userSchema);

export default UserModel;
