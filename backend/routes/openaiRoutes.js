const express = require("express");
const router = express.Router();
const { generateResponse } = require("../controllers/openaiController");
router.post("/generateResponse", generateResponse);

module.exports = router;
