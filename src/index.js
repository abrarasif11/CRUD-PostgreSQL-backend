const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Time To Start POSTGRE SQL</h2>");
});

app.listen(port, () => {
  console.log("Server Is Running on port 5000");
});
