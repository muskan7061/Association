const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Doctor extends Model {}

Doctor.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        doctorName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sectionID:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        sequelize, 
        timestamps: false
    }
)


module.exports = {Doctor}