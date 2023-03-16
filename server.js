const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const exphbs = require('express-handlebars');
// const cors = require('cors'); // Add this line  < redundant

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

// Add the CORS middleware
// app.use(cors()); < redundant

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(express.static('public/images'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  console.log('All models were synchronized successfully.');

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
