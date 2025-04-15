const { StudentCourse } = require("./ManyToMany/studentCourse")
const { Country } = require("./OneToMany/country.model");
const { Lecture } = require("./OneToMany/lecture.model");
const { State } = require("./OneToMany/state.model");
const { Task } = require("./OneToMany/task.model");
const { Project } = require("./OneToOne/project.model");
const { User } = require("./OneToOne/user.model");
const { Hospital } = require("./NestedOneToMany/hospital.model");
const { HospitalSection } = require("./NestedOneToMany/hospitalSection.Model");
const { Doctor } = require("./NestedOneToMany/doctor.model");
const { Student } = require("./ManyToMany/student.model");
const { Course } = require("./ManyToMany/course.model");
const { Comapany } = require("./NestedOneToMany/company.model");
const { Product } = require("./NestedOneToMany/product.models");
const {Comment} = require("./NestedOneToMany/comment.model")



// one to one
User.hasOne(Project, {
  foreignKey: "userId",
  as: "project",
});

Project.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

// one to many 1
Country.hasMany(State, {
  foreignKey: "countryId",
  as: "State",
});

State.belongsTo(Country, {
  foreignKey: "countryId",
  as: "Country",
});

//one to many 2

Lecture.hasMany(Task, {
  foreignKey: "lectureID",
  as: "Tasks",
});

Task.belongsTo(Lecture, {
  foreignKey: "lectureID",
  as: "Lecture",
});

// nested one to many 1
Hospital.hasMany(HospitalSection, {
  foreignKey: "hospitalID",
  as: "HospitalSections",
});

HospitalSection.belongsTo(Hospital, {
  foreignKey: "hospitalID",
  as: "Hospital",
});

// connect hospital to doctor
HospitalSection.hasMany(Doctor, {
  foreignKey: "sectionID",
  as: "Doctors",
});
Doctor.belongsTo(HospitalSection, {
  foreignKey: "sectionID",
  as: "HospitalSection",
});


// nested one to many 2
Comapany.hasMany(Product,{
  foreignKey: "companyID",
  as: "product"
})
Product.belongsTo(Comapany, {
  foreignKey: "companyID",
  as: "company"
})

Product.hasMany(Comment, {
  foreignKey: "productID",
  as: "Comment"
})

Comment.belongsTo(Product, {
  foreignKey: "productID",
  as: "product"
})


// many to many
Student.belongsToMany(Course, { 
  through: StudentCourse
});

Course.belongsToMany(Student, {
  through: StudentCourse
});

module.exports = {
  User,
  Project,
  Lecture,
  Task,
  Hospital,
  HospitalSection,
  Doctor,
  Student,
  Course,
  StudentCourse
};
