const studentController = require("../controllers/ManyToMany/student.controller")
const courceController = require("../controllers/ManyToMany/course.controller")
const express = require("express")

const router = express.Router()

router.post("/create-student", studentController.addStudent)
router.post("/create-course", courceController.addCourse)


module.exports= router
