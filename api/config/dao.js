const { Sequelize } = require('sequelize');

const seq = new Sequelize('hotel', 'KingRamius', 'master', { dialect: 'sqlite', host: './db.sqlite' });

module.exports = seq;