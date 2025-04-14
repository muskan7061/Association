const { Project } = require("../../models/OneToOne/project.model");

const addProject = async (req, res) =>{
    try {
        const {projectName} = req.body
        const createProject = await Project.create({projectName})
        return res.status(201).json({
           data: createProject 
        })
    } catch (error) {
        console.log("Error in addProject", error);
        return res.status(500).json({
            error: error.message
        })
        
    }
}

module.exports = {addProject}