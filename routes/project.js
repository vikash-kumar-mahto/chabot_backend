const express = require("express");
const auth = require("../middleware/authMiddleware");
const Project = require("../models/Project");

const router = express.Router();

// Create project with prompt
router.post("/", auth, async (req, res) => {
  const { name, prompt } = req.body;

  if (!name || !prompt) {
    return res.status(400).json({ error: "Name and prompt are required" });
  }

  const project = await Project.create({
    name,
    prompt,
    user: req.user.id
  });

  res.json(project);
});

// Get user's projects
router.get("/", auth, async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.json(projects);
});

module.exports = router;
