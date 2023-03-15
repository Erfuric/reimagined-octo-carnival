const express = require('express');
const routes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection');
const session = require("express-session")




const SequelizeStore = require('connect-session-sequelize')(session.Store);
//const { FORCE } = require('sequelize/types/index-hints');
const path = require('path');

const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

const { format } = require('date-fns');
//today's date
const today = format(new Date(), 'dd.MM.yyyy');
console.log(today);

const date = hbs.handlebars.registerHelper('today_date', function () {
  const today = format(new Date(), 'dd.MM.yyyy');
  console.log(today);
  return `${today}`;
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(express.static(path.join(__dirname, 'public')));

// Add express-session and store as Express.js middlewar
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


//console.log(process.env.TEST)

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { // force false is dropping the tables and re-creating them on server start/restart. remove ( set to false) once tables(models) are done. 
  console.log('All models were synchronized successfully.');

  app.listen(PORT, () => {

    console.log(`App listening on port ${PORT}!`);
  });
});

