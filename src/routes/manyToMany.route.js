const studentController = require("../controllers/ManyToMany/student.controller")
const courceController = require("../controllers/ManyToMany/course.controller")
const express = require("express")

const router = express.Router()

router.post("/create-student", studentController.addManyStudent)
router.post("/create-course", courceController.addCourse)


module.exports= router
