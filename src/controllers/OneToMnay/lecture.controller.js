const { Lecture } = require("../../models/OneToMany/lecture.model");

const addLecture = async (req, res) =>{
    try {
        console.log("Request Body:", req.body);

        const {lectureName} = req.body
        const createProject = await Lecture.create({lectureName})
        console.log("data=====",createProject.dataValues);
        
        return res.status(201).json({
           data: [createProject] 
        })
    } catch (error) {
        console.log("Error in addProject", error);
        return res.status(500).json({
            error: error.message
        })
        
    }
}

module.exports = {addLecture}