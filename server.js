const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});
const {format} = require('date-fns');
//today's date
const today =format(new Date(),'dd.MM.yyyy');
console.log(today);

const date = hbs.handlebars.registerHelper('today_date', function() {
  const today =format(new Date(),'dd.MM.yyyy');
  console.log(today);
  return `${today}`;
})


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: 'mixmate session',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
};

app.use(session(sess));

app.use(express.static('public/images'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  console.log('All models were synchronized successfully.');

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

module.exports = date;