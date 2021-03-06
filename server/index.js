const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const PORT = 3000;


const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


//initiate req.session object for authentication
//TODO: hide the secret
app.use(session({
  secret: 'winGARdium leviOHsa',
  resave: false,
  saveUninitialized: false
}));

//Initialize passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  console.log('Server listening on Port: ', PORT);
});

//redirect api routes
app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'client/src/public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client/src/public/index.html'));
});

//Error Handler
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});
