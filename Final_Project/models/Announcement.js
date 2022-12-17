import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  announcement: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdby: {
    type: String,
  },
});

export default mongoose.models.Announcement ||
  mongoose.model("Announcement", announcementSchema);
