const express = require("express")
const userController = require("../controllers/user.controller")


const router = express.Router()

router.post("/user-one-to-one", userController.userOneToOne)

module.exports = router