const { User } = require("./OneToOne/user.model");
const { Project } = require("./OneToOne/project.model");
const { Country } = require("./OneToMany/country.model");
const { State } = require("./OneToMany/state.model");

// one to one
User.hasOne(Project, {
    foreignKey: "userId",
    as: 'project',
})

Project.belongsTo(User, {
    foreignKey: "userId",
    as: 'user',
})

// one to many 
Country.hasMany(State, {
    foreignKey: "countryId",
    as: "State"
})

State.belongsTo(Country, {
    foreignKey: "countryId",
    as: "Country"
})

module.export = {User,Project}