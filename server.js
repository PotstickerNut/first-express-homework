const express = require("express");

const app = express();

const PORT = 3000;

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
