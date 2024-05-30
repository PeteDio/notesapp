const express = require("express");
const router = express.Router();
const notesCtrl = require('../controller/notes')

router.get("/", notesCtrl.test);
module.exports = router;
