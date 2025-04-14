const { Country } = require("./OneToMany/country.model");
const { Lecture } = require("./OneToMany/lecture.model");
const { State } = require("./OneToMany/state.model");
const { Task } = require("./OneToMany/task.model");
const { Project } = require("./OneToOne/project.model");
const { User } = require("./OneToOne/user.model");


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

Task.belongsTo(Lecture,{
    foreignKey: "lectureID",
    as: "Lecture"

})

module.exports = { User, Project, Lecture, Task };
