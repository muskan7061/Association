const {DataTypes, Model } = require("sequelize")
const sequelize = require("../../config/db")



class Task extends Model {}

Task.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        taskName:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        lectureID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
    
        }
    }, {
        sequelize,
        timestamps: false
    }
)


module.exports = {Task}