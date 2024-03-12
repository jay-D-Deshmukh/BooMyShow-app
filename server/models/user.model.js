import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, `Name is Required`],
      minlength: [3, `Min 3 characters are Required`],
      maxlength: [20, `Max 20 characters are allowed`],
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        "Please provide a valid email id",
      ],
      required: [true, "Please provide your email"],
    },

    password: {
      type: String,
      minlength: [8, "min 15 characters are allowed"],
      required: [true, "Please enter your Password"],
      select: false,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods = {
    generateJWTToken: function () {
        return jwt.sign(
            { id: this._id , role: this.role },
            process.env.JWT_PASSWORD,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        );
    }
};

const User = model("user", UserSchema);

export default User;
