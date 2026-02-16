const express = require('express');
const os = require('os');
const app = express();

app.get('/api/health', (req, res) => {
  res.status(200).send("OK");
});

app.get('/api', (req, res) => {
  res.json({
    message: "Production AKS Backend",
    hostname: os.hostname(),
    env: process.env.NODE_ENV
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
