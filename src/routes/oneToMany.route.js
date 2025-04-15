const express = require("express")
const lectureController = require("../controllers/OneToMnay/lecture.controller")
const countryController = require("../controllers/OneToMnay/country.controller")
const taskController = require("../controllers/OneToMnay/task.controller")
const router = express.Router()

// one to many 
router.post("/country-one-to-many", countryController.addCountry )
router.post("/lecture-one-to-many",lectureController.addLecture)
router.post("/task-one-to-many",taskController.addTask)


module.exports = router  