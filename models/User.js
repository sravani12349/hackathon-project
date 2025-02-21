import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    faceData: String, // Store facial recognition data
});

export default mongoose.model("User", UserSchema);
