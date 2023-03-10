const express = require('express');
const routes = require('./Develop/controllers');
// import sequelize connection
const sequelize = require('./Develop/config/connection');
//const { FORCE } = require('sequelize/types/index-hints');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

console.log(process.env.TEST)

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => { // force false is dropping the tables and re-creating them on server start/restart. remove ( set to false) once tables(models) are done. 
  console.log('All models were synchronized successfully.');

  app.listen(PORT, () => {
    
    console.log(`App listening on port ${PORT}!`);
  });
});


