const { Student } = require("../../models");


const addStudent = async (req, res) =>{
    try {
        const {studentName} = req.body
        const createStudent = await Student.create({studentName})
        return res.status(201).json({
            data: createStudent
        })
    } catch (error) {
        console.error("Error in addStudent", error);
        res.status(500).json({ error: error.message });
    }
}


module.exports = {addStudent}