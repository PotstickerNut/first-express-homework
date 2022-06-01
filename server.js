const express = require("express");

const app = express();

const PORT = 3000;

app.get("/greeting/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

app.get("/tip/:total/:percent", (req, res) => {
  console.log(req.params.total, req.params.percent);
  const total = Number(req.params.total);
  const percent = Number(req.params.percent);

  res.send(total * (percent / 100) + "");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
