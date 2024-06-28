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


// Register our RESTful routers with our "app"
app.use(`/v1/test`, router.Test);
app.use(`/v1/user`, router.User);

module.exports = app;