const express = require('express');
const router = express.Router();
const RobotsCont = require("../controllers/robots");
let {robots} = RobotsCont

router.get("/:response", robots);

module.exports = router; 