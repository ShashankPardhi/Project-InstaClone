const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: String,
  location: String,
  desc: String,
  image: String,
  date: {
    type: Date,
    default: new Date(),
  },
});
const postModel = new mongoose.model("image", postSchema);
module.exports = postModel;