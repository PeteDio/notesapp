require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors());
const PORT = process.env.BE_PORT || 8080;


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });