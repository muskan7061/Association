const { Task } = require("../../models/OneToMany/task.model");


const addTask = async (req, res) =>{
    try {
        console.log("Request Body:", req.body);
        const {taskName,description, lectureID} = req.body
        const createTask = await Task.create({taskName, description, lectureID})
        return res.status(201).json({
            data: createTask
        })
        
    } catch (error) {
        console.log("Error in addTask", error);
        return res.status(500).json({
            error: error.message
        })
        
    }
}


module.exports = {addTask}