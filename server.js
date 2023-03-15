const express = require('express');
const routes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection');
//const { FORCE } = require('sequelize/types/index-hints');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
var session = require('express-session');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Configure and link a session object with the sequelize store
  const sess = {
    secret: 'Super secret secret',
    cookie: {}, // TODO: change to expire on logout when testing finished
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(express.static(path.join(__dirname, 'public')));

// Add express-session and store as Express.js middleware
 app.use(session(sess));

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


