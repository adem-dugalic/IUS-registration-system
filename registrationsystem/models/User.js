import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userID: { type: Number, required: false, maxlength: 9 },
    name: { type: String, required: false, trim: true },
    surname: { type: String, required: false, trim: true },
    faculty: { type: String, required: false },
    program: { type: String, required: false },
    semester: { type: Number, required: false },
    password: { type: String, required: false },
    email: { type: String, required: false, unique: true },
    paid: { type: Boolean, default: false },
    isSAO: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateHash = function (password) {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcryptjs.compareSync(password, this.password);
};

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
