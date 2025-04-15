const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Comapany extends Model {}

Comapany.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        companyName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        city:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    },{
        sequelize, 
        timestamps: false
    }
)


module.exports = {Comapany}