const express = require("express")
const userController = require("../controllers/OneToOne/user.controller")

const countryController = require("../controllers/OneToMnay/country.controller")

const router = express.Router()

router.post("/user-one-to-one", userController.userOneToOne)
router.get("/get-one-to-one/:id", userController.getOneToOne)

// one to many 
router.post("/country-one-to-many", countryController.addCountry )

module.exports = router