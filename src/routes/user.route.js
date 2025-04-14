const express = require("express")
const userController = require("../controllers/OneToOne/user.controller")
const projectController = require("../controllers/OneToMnay/project.controller")
const countryController = require("../controllers/OneToMnay/country.controller")


const router = express.Router()
// one to one
router.post("/user-one-to-one", userController.userOneToOne)
router.get("/get-one-to-one/:id", userController.getOneToOne)

// one to many 
router.post("/country-one-to-many", countryController.addCountry )
router.post("/project-one-to-many",projectController.addProject)

module.exports = router  