const { Project } = require("../../models/OneToOne/project.model");
const { User } = require("../../models/OneToOne/user.model");


const userOneToOne = async (req, res) => {
  try {
    const { name, projectName, subject } = req.body;

    const newUser = await User.create({ name });

    const newProfile = await Project.create({
      projectName,
      subject,
      userId: newUser.id, 
    });

    res.status(201).json({
      data: [newUser, newProfile],
    });
  } catch (error) {
    console.error("Error in userOneToOne", error);
    res.status(500).json({ error: error.message });
  }
};


const getOneToOne = async (req, res) => {
    try {
        const id = req.params.id
        const getbyId = await Project.findOne({where: {id: id}})
        return res.status(201).json(getbyId)
    } catch (error) {
        console.error("Error in getOneToOne", error);
        res.status(500).json({ error: error.message });
    }
}
module.exports = { userOneToOne, getOneToOne };
