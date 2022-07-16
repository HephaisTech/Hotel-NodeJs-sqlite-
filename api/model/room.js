const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dao');

class Room extends Model {};

Room.init({
    hotelid: { type: DataTypes.INTEGER, validate: { notEmpty: true } },
    roomtype: { type: DataTypes.STRING, validate: { notEmpty: true } },
    roomnumber: { type: DataTypes.INTEGER, validate: { notEmpty: true } },
    name: { type: DataTypes.STRING, validate: { notEmpty: true } },
    price: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    desc: { type: DataTypes.STRING, validate: { notEmpty: true } },
    floor: { type: DataTypes.INTEGER, validate: { notEmpty: true } },
    maxpeople: { type: DataTypes.INTEGER, validate: { notEmpty: true } },
    rating: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    reviews: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    status: { type: DataTypes.BOOLEAN, validate: { notEmpty: true } },
    image: { type: DataTypes.JSON, validate: { notEmpty: true } },
    createdBy: { type: DataTypes.STRING, validate: { notEmpty: true } },
    createdAt: { type: DataTypes.DATE, defaultValueue: Date.UTC, validate: { notEmpty: true } },
}, { sequelize, modelName: 'room' });

module.exports = Room;