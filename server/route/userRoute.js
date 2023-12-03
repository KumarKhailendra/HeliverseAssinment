const express = require("express");
const { createUser, getUsers, getUser, updateUser, deleteUser } = require("../controller/userCtrl");

const router = express.Router();

router.route("/users").post(createUser);
router.route("/users").get(getUsers);
router.route("/users/:id").get(getUser);
router.route("/users/:id").put(updateUser);
router.route("/users/:id").delete(deleteUser);

module.exports = router;