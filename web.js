const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/collection", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/consult", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
