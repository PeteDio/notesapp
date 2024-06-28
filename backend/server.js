require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const router = require('./routes/router')

const {connectDB} = require("./db/config");

connectDB();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use('/v1', router)
module.exports = app;