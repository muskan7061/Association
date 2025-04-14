const {DataTypes, Model } = require("sequelize")
const sequelize = require("../../config/db")



class Lecture extends Model {}

Lecture.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        lectureName:{
            type: DataTypes.STRING,
            allowNull: false, 
        }
    },{
        sequelize,
        timestamps: false
    }
)


module.exports = {Lecture}