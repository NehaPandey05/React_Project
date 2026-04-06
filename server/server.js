import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Backend working");
});


app.post("/ai-question", async (req, res) => {
  try {
    const { conversation } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: conversation
      })
    });

    const data = await response.json();

console.log("STATUS:", response.status);
console.log("FULL RESPONSE:", JSON.stringify(data, null, 2));

if (!response.ok) {
  console.error("OPENAI ERROR:", data);
}

res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));