const {addHospital, getHospitalDetails} = require("../controllers/NestedOneToMany/hospital.controller")
const hospitalSectionController = require("../controllers/NestedOneToMany/hospitalSection.controller")
const doctorController = require("../controllers/NestedOneToMany/doctor.controller")
const companyController = require("../controllers/NestedOneToMany/company.controller")
const productController = require("../controllers/NestedOneToMany/product.controller")
const express = require("express")


const router = express.Router()

router.post("/create-hopital", addHospital)
router.post("/create-hopitalSection", hospitalSectionController.hospitalSection)
router.post("/create-doctor",doctorController.addDoctor)
router.get("/get-hospital-details/:id", getHospitalDetails )


router.post("/create-company", companyController.addComapny)
router.post("/create-product", productController.addProduct)

module.exports = router