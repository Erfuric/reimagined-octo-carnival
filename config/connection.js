require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 8000, 
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

