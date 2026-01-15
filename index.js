const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - Method ", req.method);
  res.status(200).send("Home");
});

app.post("/", (req, res) => {
  console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - Method ", req.method);
  res.status(201).send("Post added");
});

app.listen(3000, console.log("🟡🟡🟡 LOG 🟡🟡🟡 →  - LISTENING ON 3000"));
