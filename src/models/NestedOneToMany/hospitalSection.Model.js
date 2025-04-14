const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class HospitalSection extends Model {}

HospitalSection.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        hospitalSectionName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        onWhichfloor:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        buildingName:{
            type:DataTypes.STRING,
            allowNull: false,
        }

    },{
        sequelize, 
        timestamps: false
    }
)


module.exports = {HospitalSection}