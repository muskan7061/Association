const {DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")


class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        projectName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        subject:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,

    }
)

module.exports = {Project}