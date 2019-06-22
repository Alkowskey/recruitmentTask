const Sequelize = require("sequelize");

const sequelize = new Sequelize('recruitmentTask', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

/*
    Just checking out connection
*/
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = {sequelize}