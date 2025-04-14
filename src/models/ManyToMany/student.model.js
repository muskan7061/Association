const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Student extends Model {}

Student.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        studentName:{
        type:DataTypes.STRING,
            allowNull: false,
        }, 

    },{
        sequelize, 
        timestamps: false
    }
)


module.exports = {Student}