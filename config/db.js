const { Sequelize } = require('sequelize');

// local configuration of mysql
const localhost = new Sequelize({
  host: 'mysql-31942-0.cloudclusters.net',
  port: '31942',
  dialect: 'mysql',
  database: 'school',
  username: 'admin',
  password: 'dqdjXzrn',
});

module.exports = localhost