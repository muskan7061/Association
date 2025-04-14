const { Course, Student } = require("../../models");

const addCourse = async (req, res) => {
  try {
    const { language, courseName, studentID, grade } = req.body;

    // Step 1: Create the course
    const createCourse = await Course.create({ language, courseName });

    // Step 2: Associate with student and include grade
    if (studentID && grade) {
      const student = await Student.findByPk(studentID);
      if (student) {
        await createCourse.addStudent(student, {
          through: { grade },
        });
      }
    }

    return res.status(201).json({
      data: createCourse,
      message: "Course created and student linked with grade.",
    });
  } catch (error) {
    console.error("Error in addCourse", error);
    res.status(500).json({ error: error.message });
  }
};


module.exports = {addCourse}