const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.event.PORT || 3000;

const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello here is your data");
});

app.get("/productsApi", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log("I am Live");
});
