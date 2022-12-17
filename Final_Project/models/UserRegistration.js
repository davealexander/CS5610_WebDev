import mongoose from "mongoose";
const UserRegistrationSchema = new mongoose.Schema(
  {
    auth0: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    userEmail: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 10,
    },
    mmeanumber: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: 5,
    },
    school: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    district: {
      type: Number,
      required: true,
    },
    address1: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    address2: {
      type: String,
      trim: true,
      minlength: 3,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    state: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    zipcode: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    role: {
      type: String,
      required: true,
    },
    // preference:{
    //     type: Boolean,
    //     required: true,
    // }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User ||
  mongoose.model("User", UserRegistrationSchema);
