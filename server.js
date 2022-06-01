const express = require("express");
const response = require("./models/magic");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

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

app.get("/magic/:question", (req, res) => {
  res.render("magic", {
    question: req.params.question,
    response: response[Math.trunc(Math.random() * 20)],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
