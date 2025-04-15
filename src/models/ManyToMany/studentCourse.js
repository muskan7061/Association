const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db");

class StudentCourse extends Model {}

StudentCourse.init(
  {

  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { StudentCourse };
