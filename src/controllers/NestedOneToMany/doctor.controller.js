const { Doctor } = require("../../models/NestedOneToMany/doctor.model");

const addDoctor = async (req, res) =>{
    try {
        const {doctorName, sectionID, age} = req.body
        const createDoctor = await Doctor.create({doctorName, sectionID, age})
        return res.status(201).json({
            message: "Hospital created",
            data: createDoctor
        })
    } catch (error) {
        console.error("Error in addDoctor", error);
        res.status(500).json({ error: error.message });
    }
}


module.exports = {addDoctor}