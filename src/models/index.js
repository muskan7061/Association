const { User } = require("./user.model");
const { Project } = require("./project.model");


User.hasOne(Project, {
    // foreignKey: "userId",
    as: 'project',
})

Project.belongsTo(User, {
    // foreignKey: "userId",
    as: 'user',
})


module.export = {User,Project}