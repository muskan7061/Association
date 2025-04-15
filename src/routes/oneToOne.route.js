const express = require("express");
const {
  userOneToOne,
  getOneToOne,
} = require("../controllers/OneToOne/user.controller");

const router = express.Router();

// one to one
router.post("/create-user", userOneToOne);
router.get("/get-user/:id", getOneToOne);

module.exports = router;
