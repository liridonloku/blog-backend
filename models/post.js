const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  poster: { type: String },
  article: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
});

PostSchema.virtual("url").get(function () {
  return "/api/posts/" + this._id;
});

module.exports = mongoose.model("Post", PostSchema);
