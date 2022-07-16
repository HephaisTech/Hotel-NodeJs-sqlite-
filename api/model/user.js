const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dao')

class User extends Model {}
User.init({
    username: { type: DataTypes.STRING, validate: { notEmpty: true } },
    password: { type: DataTypes.STRING, validate: { notEmpty: true } },
    email: { type: DataTypes.STRING, validate: { notEmpty: true } },
    image: { type: DataTypes.STRING },
    firstname: { type: DataTypes.STRING, validate: { notEmpty: true } },
    lastname: { type: DataTypes.STRING, validate: { notEmpty: true } },
    gender: { type: DataTypes.STRING },
    profession: { type: DataTypes.STRING, validate: { notEmpty: true } },
    address: { type: DataTypes.STRING, validate: { notEmpty: true } },
    city: { type: DataTypes.STRING, validate: { notEmpty: true } },
    state: { type: DataTypes.STRING, validate: { notEmpty: true } },
    documenttype: { type: DataTypes.STRING, validate: { notEmpty: true } },
    documentnumber: { type: DataTypes.STRING, validate: { notEmpty: true } },
    iscompany: { type: DataTypes.BOOLEAN, validate: { notEmpty: true } },
    type: { type: DataTypes.STRING, validate: { notEmpty: true } },
    telephone: { type: DataTypes.STRING, validate: { notEmpty: true } },
    createdAt: { type: DataTypes.DATE, defaultValueue: Date.UTC, validate: { notEmpty: true } },

}, { sequelize, modelName: 'user' })

module.exports = User;