const express = require("express");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/:num", (req, res) => {
  if (req.params.num > 0) {
    res.render("bottles", { num: req.params.num });
  } else {
    res.render("noBottles");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
