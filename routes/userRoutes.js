const { getUsers, getUser, updateUser } = require("../controllers/userController");

const express = require("express");
const router = express.Router();

router.route("/getusers").get(getUsers);
router.route("/getuser/:username").post(getUser);
router.route("/updateUser").post(updateUser);
router.route("/addUser").post(addUser);

module.exports = router;
