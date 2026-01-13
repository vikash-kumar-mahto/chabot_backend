const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  text: String,
  projectId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Prompt", PromptSchema);
