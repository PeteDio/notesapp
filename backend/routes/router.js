const express = require("express");
const router = express.Router();
const testCtrl = require('../controller/test')

router.get("/test", testCtrl.test);
module.exports = router;
