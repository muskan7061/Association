const { Hospital, HospitalSection } = require("../../models");
const { Doctor } = require("../../models/NestedOneToMany/doctor.model");

const addHospital = async (req, res) =>{
    try {
        const {hospitalName} = req.body
        const createHospital = await Hospital.create({hospitalName})
        return res.status(201).json({
            message: "Hospital created",
            data: createHospital
        })
    } catch (error) {
        console.error("Error in addHospital", error);
        res.status(500).json({ error: error.message });
    }
}


const getHospitalDetails = async (req, res) =>{
    try {
    const id = req.params.id        
    const getDetails = await Hospital.findOne({
        where: { id },
        include: [
          {
            model: HospitalSection,
            as: "HospitalSections", 
            include: [
              {
                model: Doctor,
                as: "Doctors", 
              },
            ],
          },
        ],
      });
        return res.status(201).json({
            message: "Fetch successfully",
            data: getDetails
        })
    } catch (error) {
        console.error("Error in getHospitalDetails", error);
        res.status(500).json({ error: error.message });
    }
}


module.exports = {addHospital, getHospitalDetails}