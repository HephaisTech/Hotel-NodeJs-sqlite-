const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dao');

// Define the Hotel model
class Hotel extends Model {};
// init the properties of the Hotel model
Hotel.init({
    name: { type: DataTypes.STRING, validate: { notEmpty: true } },
    title: { type: DataTypes.STRING, validate: { notEmpty: true } },
    address: { type: DataTypes.STRING, validate: { notEmpty: true } },
    city: { type: DataTypes.STRING, validate: { notEmpty: true } },
    state: { type: DataTypes.STRING, validate: { notEmpty: true } },
    telephone: { type: DataTypes.STRING, validate: { notEmpty: true } },
    email: { type: DataTypes.STRING, validate: { notEmpty: true } },
    latitude: { type: DataTypes.STRING, validate: { notEmpty: true } },
    longitude: { type: DataTypes.STRING, validate: { notEmpty: true } },
    type: { type: DataTypes.STRING, validate: { notEmpty: true } },
    desc: { type: DataTypes.STRING, validate: { notEmpty: true } },
    website: { type: DataTypes.STRING, validate: { notEmpty: true } },
    image: { type: DataTypes.JSON, validate: { notEmpty: true } },
    rooms: { type: DataTypes.JSON, validate: { notEmpty: true } },
    cheapest: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    rating: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    reviews: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    createdBy: { type: DataTypes.STRING, validate: { notEmpty: true } },
    createdAt: { type: DataTypes.DATE, defaultValueue: Date.UTC, validate: { notEmpty: true } },
}, { sequelize, modelName: 'hotel' });

module.exports = Hotel;