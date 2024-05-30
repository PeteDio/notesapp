require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require('./routes/router')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.BE_PORT || 8080;
app.use('/notes/v1', router)
module.exports = app;