const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<h2>Time To Start POSTGRE SQL</h2>");
});
app.listen(port, () => {
  console.log("Server Is Running on port 5000");
});
