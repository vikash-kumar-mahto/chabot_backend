const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/project"));
app.use("/api/chat", require("./routes/chat"));

app.listen(5000, () => console.log("Server running on port 5000"));

app.get("/", (req, res) => {
  res.send("Chatbot API is running 🚀");
});

