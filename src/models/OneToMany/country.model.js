const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Country extends Model {} 

Country.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        countryName:{
            type: DataTypes.STRING,
            allowNull: false, 

        }

    },
    {
        sequelize
    }
)

module.exports = {Country}