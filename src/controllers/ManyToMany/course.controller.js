const { Course, Student, StudentCourse } = require("../../models");

const addCourse = async (req, res) => {
  try {
    const {language, courseName, studentID} = req.body;

    const createCourse = await Course.create({ language, courseName });

    if (studentID ) {
      const student = await Student.findByPk(studentID);
      if (student) {
        await createCourse.addStudent(student, {
          through: StudentCourse
        });
      }
    }

    return res.status(201).json({
      data: createCourse,
    });
  } catch (error) {
    console.error("Error in addCourse", error);
    res.status(500).json({ error: error.message });
  }
};


module.exports = {addCourse}