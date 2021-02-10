import mongoose from "mongoose";

const Postschema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: { String },
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessages", Postschema);

export default PostMessage;
