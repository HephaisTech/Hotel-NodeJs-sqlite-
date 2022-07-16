const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dao')

class Book extends Model {};

Book.init({
    roomid: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    userid: { type: DataTypes.NUMBER, validate: { notEmpty: true } },
    fromdate: { type: DataTypes.DATE, defaultValueue: Date.UTC, validate: { notEmpty: true } },
    todate: { type: DataTypes.DATE, defaultValueue: Date.UTC, validate: { notEmpty: true } },
    presonCount: { type: DataTypes.NUMBER, defaultValueue: 1, validate: { notEmpty: true } },
    extraService: { type: DataTypes.NUMBER, defaultValueue: 0, validate: { notEmpty: true } },
    totalPrice: { type: DataTypes.NUMBER, defaultValueue: 0, validate: { notEmpty: true } },
    checked: { type: DataTypes.BOOLEAN, defaultValueue: false, validate: { notEmpty: true } },
    paymentStatus: { type: DataTypes.BOOLEAN, defaultValueue: false, validate: { notEmpty: true } },
    paymentMethod: { type: DataTypes.STRING, defaultValue: 'cash', validate: { notEmpty: true } },
    ccv: { type: DataTypes.STRING },
    Accountnumber: { type: DataTypes.STRING, validate: () => { paymentMethod === 'card' || paymentMethod === 'check' || paymentMethod === 'mobilmoney' ? { notEmpty: true } : { notEmpty: false } } },
    createdBy: { type: DataTypes.STRING, validate: { notEmpty: true } },
    createdAt: { type: DataTypes.DATE, defaultValue: Date.UTC, validate: { notEmpty: true } },

}, { sequelize, modelName: 'book' });
module.exports = Book;