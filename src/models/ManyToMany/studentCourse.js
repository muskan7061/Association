const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/db");

class StudentCourse extends Model {}

StudentCourse.init(
  {
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { StudentCourse };
