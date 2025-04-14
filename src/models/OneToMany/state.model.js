const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")

class State extends Model {}

State.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        stateName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        countryId:{
            type:DataTypes.INTEGER,
            allowNull: false, 
            // references: {
            //     model: "Countries",
            //     key: "id"
            //   },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }

    },
    {
        sequelize
    }
)

module.exports = {State}