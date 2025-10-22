const express = require("express");
const cors = require("cors");
const clientRoutes = require("./routes/clientRoute");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes);

app.get("/", (req, res) => {
  res.send("<h2> Time To Start PostgreSQL</h2>");
});

app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
