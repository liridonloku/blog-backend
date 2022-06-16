const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  userName: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
});

CommentSchema.virtual("url").get(function () {
  return "/posts/" + this.post._id + "/comments/" + this._id;
});

module.exports = mongoose.model("Comment", CommentSchema);
