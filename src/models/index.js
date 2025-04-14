const { User } = require("./OneToOne/user.model");
const { Project } = require("./OneToOne/project.model");
const { Country } = require("./OneToMany/country.model");
const { State } = require("./OneToMany/state.model");
const { Task } = require("./OneToMany/task.model");

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

Project.hasMany(Task, {
  foreignKey: "projectID",
  as: "Task",
});

Task.belongsTo(Project,{
    foreignKey: "projectID",
    as: "Task"

})

module.export = { User, Project };
