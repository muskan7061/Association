const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Hospital extends Model {}

Hospital.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        hospitalName:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize, 
        timestamps: false
    }
)


module.exports = {Hospital}