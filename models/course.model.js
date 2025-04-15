'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course.model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.model.init({
    courseName: DataTypes.STRING,
    language: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course.model',
  });
  return course.model;
};