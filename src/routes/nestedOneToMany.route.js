const {addHospital, getHospitalDetails} = require("../controllers/NestedOneToMany/hospital.controller")
const hospitalSectionController = require("../controllers/NestedOneToMany/hospitalSection.controller")
const doctorController = require("../controllers/NestedOneToMany/doctor.controller")
const express = require("express")


const router = express.Router()

router.post("/create-hopital", addHospital)
router.post("/create-hopitalSection", hospitalSectionController.hospitalSection)
router.post("/create-doctor",doctorController.addDoctor)
router.get("/get-hospital-details/:id", getHospitalDetails )


module.exports = router