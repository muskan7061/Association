const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Comment extends Model {}

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        addComments:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        productID:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
    },{
        sequelize, 
        paranoid: true,
        deletedAt: "deleteComment"
    }
)


module.exports = {Comment}