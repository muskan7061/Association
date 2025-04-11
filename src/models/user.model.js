const {DataTypes, Model} = require("sequelize")
const sequelize = require("../config/db")


class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,

    }
)

module.exports = {User}