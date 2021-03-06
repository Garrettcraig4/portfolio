const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 80;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(json());
app.use(cors());

app.get(`/api/test`, (req, res) => {
  res.status(200).json("this works");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`server is on ${port}`);
});
