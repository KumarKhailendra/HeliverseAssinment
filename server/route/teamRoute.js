const express = require("express");
const { createTeam, getTeams, getTeam } = require("../controller/teamCtrl");

const router = express.Router();

router.route("/team").post(createTeam);
router.route("/team").get(getTeams);
router.route("/team/:id").get(getTeam);

module.exports = router;