import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserCoursesSchema = new Schema({
  userId: { type: String, required: true },
  courses: { type: Array },
  semester: { type: Number },
  isOwner: { type: Boolean },
});

module.exports =
  mongoose.models.UserCourse || mongoose.model("UserCourse", UserCoursesSchema);
