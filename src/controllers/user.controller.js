const { Project } = require("../models/project.model");
const { User } = require("../models/user.model");


// const userOneToOne = async (req, res) => {
//     try {
//         console.log("app");
        
//       const { name, projectName, subject} = req.body;
//       console.log(name, projectName, subject);
      

//       const user = await User.create(
//         {
//           name,
//           project: {
//             projectName,
//             subject
//           },
//         },
//       );

//       res.status(201).json({
//         data: user
//       });
//     } catch (err) {
//       console.error("Error in userOneToOne",err);
//       res.status(500).json({ error: error.message });
//     }
//   }

  const userOneToOne = async (req, res) => {
    try {
    //   const { name, projectName, subject } = req.body;
          // Create a new user
    const newUser = await User.create({
        name: 'Alice',
        email: 'alice@example.com',
      });
  
      // Create a profile for the user
      const newProfile = await Project.create({
        projectName: 'Loves coding and hiking.',
        subject: "English",
        userId: newUser.id, // Associate the profile with the user
      });
  
    //   const user = await User.create(
    //     {
    //       name,
    //       project: {
    //         projectName,
    //         subject,
    //       },
    //     },
    //     // {
    //     //   include: [{ model: Project, as: 'project' }],
    //     // }
    //   );
  
      res.status(201).json({
        data: [newUser, newProfile]
      });
    } catch (error) {
      console.error("Error in userOneToOne", error);
      res.status(500).json({ error: error.message });
    }
  };
  
module.exports = {userOneToOne}