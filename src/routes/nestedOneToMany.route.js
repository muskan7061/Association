const {addHospital, getHospitalDetails} = require("../controllers/NestedOneToMany/hospital.controller")
const hospitalSectionController = require("../controllers/NestedOneToMany/hospitalSection.controller")
const doctorController = require("../controllers/NestedOneToMany/doctor.controller")
const {addComapny, getCompanyOne, getAllCompany} = require("../controllers/NestedOneToMany/company.controller")
const productController = require("../controllers/NestedOneToMany/product.controller")
const commentController = require("../controllers/NestedOneToMany/comment.controller")
const express = require("express")


const router = express.Router()
router.post("/create-hopital", addHospital)
router.post("/create-hopitalSection", hospitalSectionController.hospitalSection)
router.post("/create-doctor",doctorController.addDoctor)
router.get("/get-hospital-details/:id", getHospitalDetails )


router.post("/create-company",addComapny)
router.get("/get-company/:id", getCompanyOne)
router.get("/get-all-company", getAllCompany)
router.post("/create-product", productController.addProduct)
router.post("/create-comment", commentController.addComments)

module.exports = router