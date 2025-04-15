const {DataTypes, Model} = require("sequelize")
const sequelize = require("../../config/db")


class Product extends Model {}

Product.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        productName:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        productDetails:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        expiryDate:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        manufactureDate:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        companyID:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }


    },{
        sequelize, 
        timestamps: false
    }
)


module.exports = {Product}