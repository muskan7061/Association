const {DataTypes, Model } = require("sequelize")
const sequelize = require("../../config/db")



class Project extends Model {}

Project.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        projectName:{
            type: DataTypes.STRING,
            allowNull: false, 
        }
    },{
        sequelize
    }
)


module.exports = {Project}