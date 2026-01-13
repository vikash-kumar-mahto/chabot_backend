const express = require("express");
const auth = require("../middleware/authMiddleware");
const OpenAI = require("openai");
const Project = require("../models/Project");

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});

router.post("/", auth, async (req, res) => {
  try {
    const { message, projectId } = req.body;

    if (!message || !projectId) {
      return res.status(400).json({ error: "Message and projectId required" });
    }

    // Fetch project & prompt
    const project = await Project.findOne({
      _id: projectId,
      user: req.user.id
    });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const response = await client.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        { role: "system", content: project.prompt },
        { role: "user", content: message }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat failed" });
  }
});

module.exports = router;
