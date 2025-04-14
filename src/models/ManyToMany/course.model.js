const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Course extends Model {}

Course.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        courseName:{
            type:DataTypes.STRING,
            allowNull: false,
        }, 
        language:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    },{
        sequelize, 
        timestamps: false
    }
)


module.exports = {Course}